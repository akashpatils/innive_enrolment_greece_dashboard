import React, { useState, useEffect } from 'react'
import { Dropdown } from "primereact/dropdown";
import { useTheme } from 'next-themes';
import Tabbarchart from '../../components/charts/tab3barchart';
import Tab3piechart from '../../components/charts/tab3piechart';
import TopTile from '../../components/businessInsights/topTile';
import Legends from '../../components/businessInsights/legends';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusi_Insight_School_Details, fetchSchool_with_EnrollmentPercentage_Current_year, fetchSchool_with_EnrollmentPercentage_Last2_year, fetchSchool_with_EnrollmentPercentage_Last_year, fetchTotal_SchoolsPercentageChance_above5Percentage } from '../../redux/slices/BuisnessAnalytics';
import { getPivotChartArray, prepareTopTileData } from '../../components/utils';
import LoaderContainer from '../../components/LoaderContainer';

export default function Tab3() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const School_with_EnrollmentPercentage_Last2_year = useSelector(state => state.BuisnessAnalytics.School_with_EnrollmentPercentage_Last2_year)
    const School_with_EnrollmentPercentage_Last2_yearloading = useSelector(state => state.BuisnessAnalytics.School_with_EnrollmentPercentage_Last2_yearloading)

    const School_with_EnrollmentPercentage_Last_year = useSelector(state => state.BuisnessAnalytics.School_with_EnrollmentPercentage_Last_year)
    const School_with_EnrollmentPercentage_Last_yearloading = useSelector(state => state.BuisnessAnalytics.School_with_EnrollmentPercentage_Last_yearloading)

    const School_with_EnrollmentPercentage_Current_year = useSelector(state => state.BuisnessAnalytics.School_with_EnrollmentPercentage_Current_year)
    const School_with_EnrollmentPercentage_Current_yearloading = useSelector(state => state.BuisnessAnalytics.School_with_EnrollmentPercentage_Current_yearloading)
    const Total_SchoolsPercentageChance_above5Percentage = useSelector(state => state.BuisnessAnalytics.Total_SchoolsPercentageChance_above5Percentage)
    const Total_SchoolsPercentageChance_above5Percentageloading = useSelector(state => state.BuisnessAnalytics.Total_SchoolsPercentageChance_above5Percentageloading)

    const Busi_Insight_School_Details = useSelector(state => state.BuisnessAnalytics.Busi_Insight_School_Details)
    const Busi_Insight_School_Detailsloading = useSelector(state => state.BuisnessAnalytics.Busi_Insight_School_Detailsloading)



    console.log("Busi_Insight_School_Details", Busi_Insight_School_Details)


    const CombinedToptileData = [...School_with_EnrollmentPercentage_Current_year, ...School_with_EnrollmentPercentage_Last_year, ...School_with_EnrollmentPercentage_Last2_year]

    const SortedData = [...CombinedToptileData]?.sort((a, b) => {
        if (a["SCHOOL_TYPE"] < b["SCHOOL_TYPE"]) {
            return -1;
        }
        if (a["SCHOOL_TYPE"] > b["SCHOOL_TYPE"]) {
            return 1;
        }
        return 0;
    });
    const ToptileDate = prepareTopTileData(SortedData, "YEAR", "SCHOOL_COUNT", "LY_VAR", "SCHOOL_TYPE")


    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedViewBy, setSelectedViewBy] = useState(null);
    const ViewBy = [
        { name: 'Top 3', code: 'NY' },
        { name: 'Top 4', code: 'RM' },
        { name: 'Top 5', code: 'LDN' },
    ];

    const [selectedShowBy, setSelectedShowBy] = useState(null);

    useEffect(() => {
        dispatch(fetchSchool_with_EnrollmentPercentage_Last2_year({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));

        dispatch(fetchSchool_with_EnrollmentPercentage_Last_year({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));
        dispatch(fetchSchool_with_EnrollmentPercentage_Current_year({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));
        dispatch(fetchTotal_SchoolsPercentageChance_above5Percentage({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));


        dispatch(fetchBusi_Insight_School_Details({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));
    }, [])
    const ShowBy = [
        { name: 'Overall', code: 'NY' },
        { name: 'School Type', code: 'RM' },
        { name: 'School', code: 'LDN' },
        { name: 'Grade', code: 'LDN' },
    ];

    const years = [
        { name: '2013', code: 'NY' },
        { name: '2014', code: 'RM' },
        { name: '2015', code: 'LDN' },
        { name: '2016', code: 'IST' },
        { name: '2017', code: 'PRS' }
    ];
    const data1 = [
        { value: 10, name: '10' },
        { value: 5, name: '5' },
        { value: 5, name: '6' }
    ]
    const data2 = [
        { value: 5, name: '10' },
        { value: 3, name: '5' },
        { value: 7, name: '6' }
    ]
    const data3 = [
        { value: 10, name: '10' },
        { value: 11, name: '11' },
        { value: 4, name: '4' }
    ]

    const schoolTypeColorMapping = {
        "Community School": "#00B929",
        "Elementary School": "#019ADE",
        "High School": "#E32A6D",
        "Middle School": "#c8c846",
    };

    const uniqueSchoolTypes = [...new Set(SortedData.map(entry => entry.SCHOOL_TYPE))];
    const colors = uniqueSchoolTypes.map(schoolType => schoolTypeColorMapping[schoolType]);

    const schoolCountByYear = Busi_Insight_School_Details.reduce((acc, curr) => {
        const year = curr.SCHOOL_YEAR;
        if (!acc[year]) {
            acc[year] = 0;
        }
        acc[year] += 1;
        return acc;
    }, {});

    const schoolCountByYearResult = Object.keys(schoolCountByYear).map(year => ({
        SCHOOL_YEAR: parseInt(year),
        SCHOOL_COUNT: schoolCountByYear[year]
    }));

    const yearWiseSum = Busi_Insight_School_Details?.reduce((acc, curr) => {
        if (!acc[curr.SCHOOL_YEAR]) {
            acc[curr.SCHOOL_YEAR] = 0;
        }

        acc[curr.SCHOOL_YEAR] += curr.STUDENT_COUNT
        return acc;
    }, {})

    const result = Object.keys(yearWiseSum).map(year => {
        return {
            SCHOOL_YEAR: parseInt(year),
            STUDENT_COUNT: yearWiseSum[year]
        }
    })

    let pivotTableData = getPivotChartArray(Busi_Insight_School_Details, "SCHOOL_OFFICIAL_NAME", "SCHOOL_YEAR", "STUDENT_COUNT")
    const uniqueElements = [...new Set(Busi_Insight_School_Details?.map(item => item["SCHOOL_YEAR"]))]?.sort((a, b) => a - b);
    const schoolCount = [...new Set(Busi_Insight_School_Details?.map(item => item["SCHOOL_OFFICIAL_NAME"]))]?.length;

    return (
        <div>
            <div>

                <div className='bg-[#FFF] dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <LoaderContainer loading={School_with_EnrollmentPercentage_Current_yearloading} width={"100%"} height={"180px"}>

                        <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">Schools With Enrollment % change above 5% over 5 years</div>
                        <div className='grid grid-cols-12 gap-[1rem]'>
                            {ToptileDate.map(item =>
                                <TopTile metricTitle={item.metricTitle} title=" Total Headcount" value={item.value} lyVar={item.lyVar} pieChartData={item.pieChartData} colors={item.colors} />
                            )}
                        </div>
                        <Legends data={[...new Set(SortedData.map(entry => entry.SCHOOL_TYPE))]} colors={colors} />
                    </LoaderContainer>
                </div>
                <div className="bg-[#FFF]  dark:bg-[#374151] mt-[10px] 3xl:mt-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">
                    <div className="grid grid-cols-12  gap-4">
                        <div className="col-span-8">
                            <div className='flex justify-between items-center'>
                                <div className="text-[#383874] text-[18px] xl:text-[0.938vw] font-semibold">
                                    Total Schools - % Chance above 5%
                                </div>
                                <div className="flex items-center gap-[14px] xl:gap-[8px] 3xl:gap-[0.233vw]">
                                    <div className="flex items-center">
                                        <div className="mr-[10px] xl:mr-[0.521vw] text-[#667085] text-[16px] xl:text-[0.833vw]">Show by</div>
                                        <div className='customDropdown'>
                                            <Dropdown
                                                value={selectedShowBy}
                                                onChange={(e) => setSelectedShowBy(e.value)}
                                                options={ShowBy}
                                                optionLabel="name"
                                                placeholder="Select"
                                                className="w-full xl:w-[90px] 3xl:w-[5.833vw]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-[10px] xl:mr-[0.521vw] text-[#667085] text-[16px] xl:text-[0.833vw]">View by</div>
                                        <div className='mr-[20px] xl:mr-[1.042vw] customDropdown'>
                                            <Dropdown
                                                value={selectedViewBy}
                                                onChange={(e) => setSelectedViewBy(e.value)}
                                                options={ViewBy}
                                                optionLabel="name"
                                                placeholder="Select"
                                                className="w-full xl:w-[90px] 3xl:w-[5.833vw]"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <LoaderContainer loading={Total_SchoolsPercentageChance_above5Percentageloading} className={"h-[400px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]"}>

                                <div className="h-[400px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]">
                                    <Tabbarchart data={[...Total_SchoolsPercentageChance_above5Percentage].sort((a, b) => a.YEAR - b.YEAR)} />
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
                        <div className='text-[#383874] text-[18px] xl:text-[0.938vw] font-semibold'>School Details</div>
                        <div className="flex items-center">
                            <div className="flex justify-center items-center gap-1.5 bg-[#0B0F5D] rounded-md  py-[8px] xl:py-[0.417vw] px-[14px] xl:px-[0.729vw]">
                                <i className="innivenrolment-file-text text-[#ffffff] w-[20px] 3xl:w-[1.042vw] h-[20px] 3xl:h-[1.042vw]"></i>
                                <div className="text-[14px] xl:text-[0.729vw] text-[#E8F0F3]">Analyze Data</div>
                            </div>
                        </div>
                    </div>
                    <LoaderContainer loading={Busi_Insight_School_Detailsloading} width={'100%'} height={'150px'}>
                    <table className="table-auto w-full h-full">
                        <thead>
                            <tr>
                                <th width={100}
                                    className="bg-[#E8F0F3] font-medium text-[#5B6B85] py-[20px] xl:py-[20px] 3xl:py-[1.042vw] text-[14px] xl:text-[14px] 3xl:-[0.729vw]">Year</th>
                                {
                                    uniqueElements?.map(year => {
                                        return (
                                            <>
                                                <th
                                                    width={100}
                                                    className="bg-[#E8F0F3] font-medium text-[#5B6B85] py-[20px] xl:py-[20px] 3xl:py-[1.042vw] text-[14px] xl:text-[14px] 3xl:-[0.729vw]"
                                                >
                                                    {year}
                                                </th>
                                            </>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="bg-[#F9FAFB]">
                                <td
                                    width={280}
                                    className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                >  {!show &&
                                    <div className='flex items-center'>
                                        <span onClick={() => setShow(true)} className="innivenrolment-plus mr-2 cursor-pointer"></span><div>Schools ({schoolCount})</div>
                                    </div>
                                    }
                                    {show &&
                                        <div className='flex items-center'>
                                            <sapn onClick={() => setShow(false)} className="pi pi-minus mr-2 cursor-pointer"></sapn><div>Schools ({schoolCount})</div>
                                        </div>
                                    }
                                    {/* <span className='innivenrolment-plus mr-2 cursor-pointer' onClick={()=>setShow(true)}></span> */}
                                    {/* Schools (5) */}
                                </td>

                                {
                                    result?.map(X => {
                                        return (
                                            <td
                                                width={180}
                                                className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                            >
                                                {X?.STUDENT_COUNT}
                                            </td>
                                        )
                                    })
                                }

                            </tr>

                            {show && <>
                                {
                                    pivotTableData?.map((item, rowIndex) => {
                                        return <tr className="bg-[#F9FAFB]">
                                            <td
                                                width={280}
                                                className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                            >
                                                {item["SCHOOL_OFFICIAL_NAME"]}
                                            </td>

                                            {uniqueElements.map((element, colIndex) => (
                                                <td
                                                    width={180}
                                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                                >
                                                    {item[element] || '--'}
                                                </td>
                                                // <td key={colIndex} className="bg-[#F9FAFB]  dark:bg-[#0F1013]" style={{ background: getBackgroundColor(element)[0], color: getBackgroundColor(element)[1] }}>
                                                //     {item[element] || ''}
                                                // </td>
                                            ))}
                                        </tr>
                                    })
                                }


                            </>
                            }
                            <tr>
                                <td
                                    width={280}
                                    className="text-[#5B6B85] text-[14px] xl:text-[14px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
                                >
                                    % of Schools
                                </td>
                                {
                                    schoolCountByYearResult?.map(item => {
                                        const { SCHOOL_COUNT } = item
                                        let percentage = (SCHOOL_COUNT / schoolCount) * 100
                                        return (
                                            <td
                                                width={180}
                                                className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                            >
                                                {percentage?.toFixed(2)}%
                                            </td>
                                        )
                                    })
                                }

                                {/* <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    20%
                                </td>
                                <td
                                    width={180}
                                    className=" text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    15%
                                </td> */}
                                {/* <td
                                    width={180}
                                    className="text-center  py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    10%
                                </td> */}
                                {/* <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    20%
                                </td>
                                <td
                                    width={200}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    15%
                                </td>
                                <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    10%
                                </td>
                                <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    20%
                                </td>
                                <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    15%
                                </td>
                                <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    10%
                                </td>
                                <td
                                    width={180}
                                    className="text-center py-[16px] text-[14px] xl:text-[14px] 3xl:-[0.729vw] text-[#4B586E]"
                                >
                                    20%
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                    </LoaderContainer>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
