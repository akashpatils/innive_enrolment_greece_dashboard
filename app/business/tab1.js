import React, { useEffect, useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import MultiplebarWithLineChart from "../../components/charts/multiplebarwithlinechart";
import Piechart from "../../components/charts/piechart";
import { useTheme } from 'next-themes';
import TopTile from '../../components/businessInsights/topTile';
import Legends from '../../components/businessInsights/legends';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotal_Enrollment_Cross_Dimensional_Analysis, fetchTotal_Enrollment_Top_tile, fetchTotal_Enrollment_Trend } from '../../redux/slices/BuisnessAnalytics';
import { prepareTopTileData } from '../../components/utils';
import LoaderContainer from '../../components/LoaderContainer';
import { getPivotChartArray } from '../../components/utils';

export default function Tab1() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [selectedYear, setSelectedYear] = useState(null);

    const dispatch = useDispatch();
    const Total_Enrollment_Cross_Dimensional_Analysis = useSelector(state => state.BuisnessAnalytics.Total_Enrollment_Cross_Dimensional_Analysis)
    const Total_Enrollment_Cross_Dimensional_Analysisloading = useSelector(state => state.BuisnessAnalytics.Total_Enrollment_Cross_Dimensional_Analysisloading)


    const Total_Enrollment_Top_tile = useSelector(state => state.BuisnessAnalytics.Total_Enrollment_Top_tile)
    const Total_Enrollment_Top_tileloading = useSelector(state => state.BuisnessAnalytics.Total_Enrollment_Top_tileloading)


    const Total_Enrollment_Trend = useSelector(state => state.BuisnessAnalytics.Total_Enrollment_Trend)
    const Total_Enrollment_Trendloading = useSelector(state => state.BuisnessAnalytics.Total_Enrollment_Trendloading)


    let pivotTableData = getPivotChartArray(Total_Enrollment_Cross_Dimensional_Analysis, "METRICNAME", "SCHOOL_YEAR", "CY_VALUE")
    const uniqueElements = [...new Set(Total_Enrollment_Cross_Dimensional_Analysis?.map(item => item["SCHOOL_YEAR"]))]?.sort((a, b) => a - b);

    const SortedData = [...Total_Enrollment_Top_tile]?.sort((a, b) => {
        if (a["SCHOOL_TYPE"] < b["SCHOOL_TYPE"]) {
            return -1;
        }
        if (a["SCHOOL_TYPE"] > b["SCHOOL_TYPE"]) {
            return 1;
        }
        return 0;
    });

    const ToptileDate = prepareTopTileData(SortedData, "SUBSTR (SCHOOL_YEAR -1 ,1,4)||'-' ||SUBSTR (SCHOOL_YEAR,1,4)", "CY_STUDENT_COUNT", "LY_VAR", "SCHOOL_TYPE", "Total HeadCount")

    const years = [
        { name: '2013', code: 'NY' },
        { name: '2014', code: 'RM' },
        { name: '2015', code: 'LDN' },
        { name: '2016', code: 'IST' },
        { name: '2017', code: 'PRS' }
    ];

    const transformData = (data) => {
        const result = {
            labels: ['department'],
            values: []
        };

        const dataMap = {};

        data.forEach(item => {
            const year = item.SCHOOL_YEAR;
            const metric = item.METRICNAME.replace(" ", "").replace("_", "");
            const value = item.CY_VALUE;

            if (!dataMap[year]) {
                dataMap[year] = {
                    department: year.toString()
                };
            }

            if (!result.labels.includes(metric)) {
                result.labels.push(metric);
            }

            dataMap[year][metric] = value;
        });

        result.values = Object.values(dataMap);

        return result;
    };

    const MultipleBarChartData = transformData(Total_Enrollment_Trend);


    // const MultipleBarChartData = {
    //     labels: ['department', 'EnnrolledIn', 'EnrolledOut', 'TotalEnrolled'],
    //     values: [
    //         { department: '2013', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2014', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2015', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2016', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2017', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2018', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2019', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2020', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2021', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2022', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //         { department: '2023', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    //     ]
    // }

    const data = [
        { value: 1048, name: '14,500' },
        { value: 735, name: '509' },
        { value: 580, name: '15,000' }
    ]


    useEffect(() => {

        dispatch(fetchTotal_Enrollment_Cross_Dimensional_Analysis({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));

        dispatch(fetchTotal_Enrollment_Top_tile({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));

        dispatch(fetchTotal_Enrollment_Trend({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));
    }, [])

    const schoolTypeColorMapping = {
        "Community School": "#00B929",
        "Elementary School": "#019ADE",
        "High School": "#E32A6D",
        "Middle School": "#c8c846",
    };

    const uniqueSchoolTypes = [...new Set(SortedData.map(entry => entry.SCHOOL_TYPE))];
    const colors = uniqueSchoolTypes.map(schoolType => schoolTypeColorMapping[schoolType]);

    return (
        <div>
            <div>

                <div className='bg-[#FFF]  dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <LoaderContainer loading={Total_Enrollment_Top_tileloading} width={"100%"} height={"180px"}>
                        <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">
                            Total enrollment trend over years (Include students who enrolled in and out through the year)</div>
                        <div className='grid grid-cols-12 gap-[1rem]'>
                            {ToptileDate.map(item =>
                                <TopTile metricTitle={item.metricTitle} title=" Total Headcount" value={item.value} lyVar={item.lyVar} pieChartData={item.pieChartData} colors={item.colors} />
                            )}
                        </div>
                        <Legends data={[...new Set(SortedData.map(entry => entry.SCHOOL_TYPE))]} colors={colors} />
                    </LoaderContainer>
                </div>

                <div className="bg-[#FFF]  dark:bg-[#374151]  rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw] mt-[20px] 3xl:mt-[1.25vw] xl:mt-[24px]">
                    <div className="grid grid-cols-12  gap-4">

                        <div className="col-span-8 ...">
                            <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">
                                Enrollment Trend
                            </div>
                            <LoaderContainer width={"100%"} loading={Total_Enrollment_Trendloading} className={"dark:bg-[#374151]  h-[350px] 3xl:h-[18.75vw] flex gap-[24px] 3xl:gap-[1.25vw]"}>

                                <div className="h-[350px] 3xl:h-[18.75vw] flex gap-[24px] 3xl:gap-[1.25vw]">
                                    <MultiplebarWithLineChart
                                        currentTheme={currentTheme}
                                        // name1={'Ennrolled In'}
                                        // name2={'Ennrolled Out'}
                                        // name3={'Total Enrolled'}
                                        grid={{ top: 50, left: 35, bottom: 50, right: 10 }}
                                        legend={{
                                            show: true,
                                            bottom: 0,
                                            left: 5,
                                            itemHeight: 10,
                                            itemWidth: 10,
                                            textStyle: {
                                                color: currentTheme == "dark" ? "#ffff" : "#344054",
                                            },

                                        }}
                                        color1={"#00B929"} color2={"#E32A6D"} color3={"#019ADE"}
                                        yAxisLabel={{
                                            color: currentTheme == "dark" ? "#ffff" : '#344054',
                                            fontSize: 10,
                                            opacity: 0.70,
                                            formatter: function (params) {
                                                const ConvertedValue = params > 1000 ? Math.abs(params / 1000) + "k" : params;
                                                return ConvertedValue
                                            }
                                        }}
                                        // min={0}
                                        // max={40}
                                        // interval={10}
                                        label={{
                                            show: false,
                                        }}
                                        data={MultipleBarChartData}
                                    />
                                </div>
                            </LoaderContainer>

                        </div>

                        <div className="col-span-4 ...">
                            <div className="bg-[#e8f0f3e0] h-[450px] 3xl:h-[23.438vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw]">
                                <div className="flex items-center justify-between border-b border-[#C6CBD2] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] ">
                                    <div className="text-[#383874] text-[16px] 3xl:text-[0.900vw] font-semibold">
                                        Key Insights
                                    </div>
                                    <i className="innivenrolment-alert-circle text-[17px] 3xl:text-[0.933vw]"></i>
                                </div>
                                <div className="px-[16px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw]">
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal pb-[8px] 3xl:pb-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">The Enrollment Trend has grown significantly at <span className="text-[#000] font-semibold">7% YoY</span> for the last 10 year period from 2013 to 2023</div>
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal py-[8px] 3xl:py-[0.417vw]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="p-8"> */}
                <div className="border mt-[10px] 3xl:mt-[0.521vw] border-[#C6CBD2] rounded-lg bg-[#fff]">
                    <div className='flex justify-between items-center py-5 px-6'>
                        <div className='text-[#383874] text-[18px] xl:text-[0.938vw] font-semibold'>Cross Dimensional Analysis</div>
                        <div className="flex items-center">
                            <div className="mr-[10px] xl:mr-[0.521vw] text-[#667085] text-[16px] xl:text-[0.833vw]">View by</div>
                            <div className='mr-[20px] xl:mr-[1.042vw] customDropdown'>
                                <Dropdown
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.value)}
                                    options={years}
                                    optionLabel="name"
                                    placeholder="Year"
                                    className="w-full xl:w-[140px] 3xl:w-[5.688vw]"
                                />
                            </div>

                            <div className="flex justify-center items-center gap-1.5 bg-[#0B0F5D] rounded-md  py-[8px] xl:py-[0.417vw] px-[14px] xl:px-[0.729vw]">
                                <i className="innivenrolment-file-text text-[#ffffff] w-[20px] 3xl:w-[1.042vw] h-[20px] 3xl:h-[1.042vw]"></i>
                                <div className="text-[14px] xl:text-[0.729vw] text-[#E8F0F3]">Analyze Data</div>
                            </div>
                        </div>
                    </div>
                    <LoaderContainer loading={Total_Enrollment_Cross_Dimensional_Analysisloading} width={'100%'} height={'200px'} className="table-auto w-full h-full">
                        <table className=" ">
                            <thead>
                                <tr>
                                    <th width={100}
                                        className="bg-[#E8F0F3] font-medium text-[#5B6B85] py-[20px] xl:py-[20px] 3xl:py-[1.042vw] text-[14px] xl:text-[14px] 3xl:-[0.729vw]">Year</th>

                                    {uniqueElements.map((element, index) => (
                                        <th
                                            width={100}
                                            className="bg-[#E8F0F3] font-medium text-[#5B6B85] py-[20px] xl:py-[20px] 3xl:py-[1.042vw] text-[14px] xl:text-[14px] 3xl:-[0.729vw]"
                                        >
                                            {element}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody >
                                {pivotTableData?.map((item, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td
                                            width={150}
                                            className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                        >
                                            {item["METRICNAME"]}
                                        </td>
                                        {/* <td className="bg-[#F9FAFB] text-[#0f0f0f] dark:bg-[#0F1013]">
                                                {item["METRICNAME"]}
                                            </td> */}
                                        {uniqueElements.map((element, colIndex) => (
                                            <td
                                                width={150}
                                                className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                            >
                                                {item[element] || ''}
                                            </td>
                                            // <td key={colIndex} className="bg-[#F9FAFB]  dark:bg-[#0F1013]" style={{ background: getBackgroundColor(element)[0], color: getBackgroundColor(element)[1] }}>
                                            //     {item[element] || ''}
                                            // </td>
                                        ))}
                                    </tr>
                                ))}
                                {/* <tr className="bg-[#F9FAFB]">
                                        <td
                                            width={150}
                                            className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                        >
                                            Enrolled In
                                        </td>

                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            24,140
                                        </td>
                                        <td
                                            width={150}
                                            className="  text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            25,140
                                        </td>
                                        <td
                                            width={150}
                                            className="  text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            26,140
                                        </td>
                                        <td
                                            width={150}
                                            className="  text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            27,140
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            28,140
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            29,140
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            30,140
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            31,140
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            32,000
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            33,420
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            34,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            width={150}
                                            className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                        >
                                            Enrolled Out
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            271
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            263
                                        </td>
                                        <td
                                            width={150}
                                            className=" text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            227
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center  py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            301
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            331
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            421
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            617
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            754
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            991
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            2,000
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            2,000
                                        </td>
                                    </tr>
                                    <tr className="bg-[#F9FAFB]">
                                        <td
                                            width={160}
                                            className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                        >
                                            Total Enrolled
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            23.869
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            24.877
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            25.913
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            26.839
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            27.809
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            28.719
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            29.623
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            30.386
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            31.009
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            31.420
                                        </td>
                                        <td
                                            width={150}
                                            className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                        >
                                            32.000
                                        </td>
                                    </tr> */}
                            </tbody>
                        </table>

                    </LoaderContainer>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
