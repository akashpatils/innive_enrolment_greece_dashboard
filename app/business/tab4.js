import React, { useEffect, useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import BarwithLineChart from "../../components/charts/barwithlinechart";
import DoubleLineChart from "../../components/charts/doublelinechart";
import HorizontalBarChartwithIcon from "../../components/charts/horizontalbariconchart"
import { useTheme } from 'next-themes';
import Link from 'next/link';
import TopTile from '../../components/businessInsights/topTile';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchElementary_to_Middle_Current_year, fetchElementary_to_Middle_Last_2Years,
    fetchElementary_to_Middle_Top_School, fetchElementary_to_Middle_Bottom_School,
    fetchElementary_to_Middle_Last_3Years,
    fetchGraduation_Elementary_to_Middle
} from '../../redux/slices/BuisnessAnalytics';
import { percentageHandler, ValueHandler } from '../../components/utils';
import LoaderContainer from '../../components/LoaderContainer';

export default function Tab4() {
    const dispatch = useDispatch();
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
    const ShowBy = [
        { name: 'Overall', code: 'NY' },
        { name: 'School Type', code: 'RM' },
        { name: 'School', code: 'LDN' },
        { name: 'Grade', code: 'LDN' },
    ];

    const Elementary_to_Middle_Last_2Years = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Last_2Years)
    const Elementary_to_Middle_Last_2Yearsloading = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Last_2Yearsloading)
    const Elementary_to_Middle_Current_year = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Current_year)
    const Elementary_to_Middle_Current_yearloading = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Current_yearloading)

    const Elementary_to_Middle_Top_School = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Top_School)
    const Elementary_to_Middle_Top_Schoolloading = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Top_Schoolloading)

    const Elementary_to_Middle_Bottom_School = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Bottom_School)
    const Elementary_to_Middle_Bottom_Schoolloading = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Bottom_Schoolloading)

    const Elementary_to_Middle_Last_3Years = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Last_3Years)
    const Elementary_to_Middle_Last_3Yearsloading = useSelector(state => state.BuisnessAnalytics.Elementary_to_Middle_Last_3Yearsloading)

    const Graduation_Elementary_to_Middle = useSelector(state => state.BuisnessAnalytics.Graduation_Elementary_to_Middle)
    const Graduation_Elementary_to_Middleloading = useSelector(state => state.BuisnessAnalytics.Graduation_Elementary_to_Middleloading)




    const handleReports = (body) => {
        dispatch(fetchElementary_to_Middle_Current_year(body));
        dispatch(fetchElementary_to_Middle_Last_2Years(body));
        dispatch(fetchElementary_to_Middle_Top_School(body));
        dispatch(fetchElementary_to_Middle_Bottom_School(body));
        dispatch(fetchElementary_to_Middle_Last_3Years(body));
        dispatch(fetchGraduation_Elementary_to_Middle(body));
    }

    useEffect(() => {
        let body = {
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }

        handleReports(body)
    }, [])
    return (
        <div>
            <div>

                <div className='bg-[#FFF]  dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">% of Students Graduating Through District Schools (Elementary to Middle)</div>
                    <div className='grid grid-cols-12 gap-[1rem]'>
                        <LoaderContainer loading={Elementary_to_Middle_Last_2Yearsloading} height={"110px"} className={"col-span-12 xl:col-span-4 bg-[#e8f0f380] rounded-[10px] xl:rounded-[8px] 3xl:rounded-[0.521vw] p-[16px] xl:p-[14px] 3xl:p-[0.833vw]"}>

                            <TopTile metricTitle='Last 2 Yrs Average' title="Students Graduating" value={ValueHandler(Elementary_to_Middle_Last_2Years?.[0]?.["AVG_STUDENT_COUNT"])} lyVar={percentageHandler(Elementary_to_Middle_Current_year?.[0]?.["LY_VAR"])} isShowLineChart={true} lineChartData1={[0, percentageHandler(Elementary_to_Middle_Last_2Years?.[0]?.["PERCENTAGE"]), 0]} lineChartData2={[0, percentageHandler(Elementary_to_Middle_Last_2Years?.[0]?.["PERCENTAGE"]), 0]} currentTheme={currentTheme} color1={'#E32A88'} color2={'#E32A8833'} percentage={percentageHandler(Elementary_to_Middle_Last_2Years?.[0]?.["PERCENTAGE"])} />
                        </LoaderContainer>
                        <LoaderContainer loading={Elementary_to_Middle_Last_3Yearsloading} height={"110px"} className={"col-span-12 xl:col-span-4 bg-[#e8f0f380] rounded-[10px] xl:rounded-[8px] 3xl:rounded-[0.521vw] p-[16px] xl:p-[14px] 3xl:p-[0.833vw]"}>

                            <TopTile metricTitle='Last 3 Yrs Average' title="Students Graduating" value={ValueHandler(Elementary_to_Middle_Last_3Years?.[0]?.["AVG_STUDENT_COUNT"])} lyVar={percentageHandler(Elementary_to_Middle_Last_3Years?.[0]?.["LY_VAR"])} isShowLineChart={true} lineChartData1={[0, percentageHandler(Elementary_to_Middle_Last_3Years?.[0]?.["PERCENTAGE"]), 0]} lineChartData2={[0, percentageHandler(Elementary_to_Middle_Last_3Years?.[0]?.["PERCENTAGE"]), 0]} currentTheme={currentTheme} color1={'#E32A88'} color2={'#E32A8833'} percentage={percentageHandler(Elementary_to_Middle_Last_3Years?.[0]?.["PERCENTAGE"])} />
                        </LoaderContainer>
                        <LoaderContainer loading={Elementary_to_Middle_Current_yearloading} height={"110px"} className={"col-span-12 xl:col-span-4 bg-[#e8f0f380] rounded-[10px] xl:rounded-[8px] 3xl:rounded-[0.521vw] p-[16px] xl:p-[14px] 3xl:p-[0.833vw]"}>

                            <TopTile metricTitle='2023 - 2024 (Current Year)' title="Students Graduating" value={ValueHandler(Elementary_to_Middle_Current_year?.[0]?.["AVG_STUDENT_COUNT"])} lyVar={percentageHandler(Elementary_to_Middle_Current_year?.[0]?.["LY_VAR"])} isShowLineChart={true} lineChartData1={[0, percentageHandler(Elementary_to_Middle_Current_year?.[0]?.["PERCENTAGE"]), 0]} lineChartData2={[0, percentageHandler(Elementary_to_Middle_Current_year?.[0]?.["PERCENTAGE"]), 0]} currentTheme={currentTheme} color1={'#00B929'} color2={'#00B92933'} percentage={percentageHandler(Elementary_to_Middle_Current_year?.[0]?.["PERCENTAGE"])} />
                        </LoaderContainer>
                        {/* <TopTile metricTitle='Last 10 Yrs Average' title="Students Graduating" value="11545" lyVar='4' isShowLineChart={true} lineChartData1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]} lineChartData2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]} currentTheme={currentTheme} color1={'#E32A88'} color2={'#E32A8833'} percentage={80} />
                        <TopTile metricTitle='Last 5 Yrs Average' title="Students Graduating" value="12045" lyVar='4' isShowLineChart={true} lineChartData1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]} lineChartData2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]} currentTheme={currentTheme} color1={'#019ADE'} color2={'#019ADE33'} percentage={82} />
                        <TopTile metricTitle='2023 - 2024 (Current Year)' title="Students Graduating" value="12245" lyVar='4' isShowLineChart={true} lineChartData1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]} lineChartData2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]} currentTheme={currentTheme} color1={'#00B929'} color2={'#00B92933'} percentage={85} /> */}
                    </div>
                </div>
                <div className="bg-[#FFF]  dark:bg-[#374151] mt-[10px] 3xl:mt-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">
                    <div className="grid grid-cols-12  gap-4">
                        <div className="col-span-8 ...">
                            <div className='flex justify-between items-center'>
                                <div className="text-[#383874]  dark:text-[#f6f7f9]  text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                    Graduation % - Elementary to Middle
                                </div>
                                <div className="flex items-center gap-[14px] xl:gap-[8px] 3xl:gap-[0.233vw]">
                                    <div className="flex items-center">
                                        <div className="mr-[10px] xl:mr-[6px] 3xl:mr-[0.521vw] text-[#667085] text-[16px] xl:text-[12px] 3xl:text-[0.833vw]">Show by</div>
                                        <div className='mr-[8px] xl:mr-[8px] 3xl:mr-[0.3vw] customDropdown'>
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
                                        <div className="mr-[10px] xl:mr-[6px] 3xl:mr-[0.521vw] text-[#667085] text-[16px] xl:text-[12px] 3xl:text-[0.833vw]">View by</div>
                                        <div className='mr-[8px] xl:mr-[8px] 3xl:mr-[0.3vw] customDropdown'>
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
                            <LoaderContainer loading={Graduation_Elementary_to_Middleloading} className={"h-[425px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]"}>
                                <div className="h-[425px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]">
                                    <BarwithLineChart data={[...Graduation_Elementary_to_Middle].sort((a, b) => a.SCHOOL_YEAR - b.SCHOOL_YEAR)} />
                                </div>
                            </LoaderContainer>
                        </div>
                        <div className="col-span-4 ...">
                            <div className="bg-[#e8f0f3e0] h-[450px] 3xl:h-[23.438vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw]">
                                <div className="flex justify-between border-b border-[#C6CBD2] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] ">
                                    <div className="text-[#383874] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                        Key Insights
                                    </div>
                                    <i className="innivenrolment-alert-circle"></i>
                                </div>
                                <div className="px-[18px] 3xl:px-[0.938vw] py-[10px] 3xl:py-[0.521vw]">
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[10px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">The Enrollment Trend has grown significantly at <span className="text-[#000] font-semibold">7% YoY</span> for the last 10 year period from 2013 to 2023</div>
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[10px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[10px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
                                    <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[10px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="p-8"> */}
                <div className="mt-[10px] 3xl:mt-[0.521vw] rounded-lg bg-[#fff]">
                    <div className='flex justify-between items-center py-5 px-6'>
                        <div className='text-[#383874] text-[18px] xl:text-[0.938vw] font-semibold'>Enrollment Trend</div>
                        <div className="flex items-center">
                            <Link href={''} className="flex justify-center items-center gap-1.5 border border-[#0B0F5D] rounded-md  py-[8px] xl:py-[0.417vw] px-[14px] xl:px-[0.729vw]">
                                <i className="innivenrolment-file-text text-[#0B0F5D] w-[20px] 3xl:w-[1.042vw] h-[20px] 3xl:h-[1.042vw]"></i>
                                <span className="text-[14px] xl:text-[0.729vw] text-[#0B0F5D]">Analyze Data</span>
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 3xl:gap-[1.25vw] px-5 3xl:px-[1.25vw] pb-5 3xl:pb-[1.25vw]'>
                        <div className='bg-[#EDF3F580] rounded-lg py-3 3xl:py-[0.625vw] px-4 3xl:px-[0.833vw]'>
                            <div className='text-[#383874] text-sm 3xl:text-[0.833vw] font-medium leading-6 3xl:leading-[1.25vw]'>Country with Highest Graduation % (Elem to Middle)</div>
                            <LoaderContainer loading={Elementary_to_Middle_Top_Schoolloading} height={"132px"} width={"100%"}>

                                <div className='h-[132px] w-full'>
                                    <HorizontalBarChartwithIcon
                                        currentTheme={currentTheme}
                                        grid={{
                                            top: "10%",
                                            left: "0%",
                                            right: "2%",
                                            bottom: "5%",
                                            containLabel: true
                                        }}
                                        xAxisMax={150}
                                        xaxisLabel={{ show: false }}
                                        xaxisTick={{ show: false }}
                                        xaxisLine={{ show: false }}
                                        xsplitLine={{ show: false }}
                                        // yAxisData={['Blazier Elementary', 'International High', 'Early Referral Center',]}
                                        yAxisData={[...new Set(Elementary_to_Middle_Top_School?.map(item => item["SCHOOL_OFFICIAL_NAME"]))]}
                                        YaxisLabel={{ show: false }}
                                        YaxisTick={{ show: false }}
                                        YaxisLine={{ show: false }}
                                        YsplitLine={{ show: false }}
                                        yAxisData2={Elementary_to_Middle_Top_School?.map(item => item["CY_STUDENT"])}
                                        seriesData={Elementary_to_Middle_Top_School?.map(item => item["CY_STUDENT"])}
                                        Barcolor={'#42CD7E'}
                                        barwidth={"80%"}
                                        Barlabel={{
                                            show: true,
                                            color: '#fff',
                                            position: "insideLeft",
                                            formatter: "{b}",
                                            fontSize: 8.9

                                        }}
                                        BarborderRadius={[100, 100, 100, 100]}
                                        BarshowBackground={{ show: true }}
                                        BarbackgroundColor={"rgba(255, 255, 255, 1)"}
                                        BarbackgroundborderRadius={[100, 100, 100, 100]}
                                    />
                                </div>
                            </LoaderContainer>
                        </div>
                        {/*col*/}
                        <div className='bg-[#EDF3F580] rounded-lg py-3 3xl:py-[0.625vw] px-4 3xl:px-[0.833vw]'>
                            <div className='text-[#383874] text-sm 3xl:text-[0.833vw] font-medium leading-6 3xl:leading-[1.25vw]'>Country with lowest Graduation % (Elem to Middle)</div>
                            <LoaderContainer loading={Elementary_to_Middle_Bottom_Schoolloading} height={"132px"} width={"100%"}>

                                <div className='h-[132px] w-full'>
                                    <HorizontalBarChartwithIcon
                                        currentTheme={currentTheme}
                                        grid={{
                                            top: "10%",
                                            left: "0%",
                                            right: "2%",
                                            bottom: "5%",
                                            containLabel: true
                                        }}
                                        xAxisMax={350}
                                        xaxisLabel={{ show: false }}
                                        xaxisTick={{ show: false }}
                                        xaxisLine={{ show: false }}
                                        xsplitLine={{ show: false }}
                                        yAxisData={[...new Set(Elementary_to_Middle_Bottom_School?.map(item => item["SCHOOL_OFFICIAL_NAME"]))]}
                                        YaxisLabel={{ show: false }}
                                        YaxisTick={{ show: false }}
                                        YaxisLine={{ show: false }}
                                        YsplitLine={{ show: false }}
                                        yAxisData2={Elementary_to_Middle_Bottom_School?.map(item => item["CY_STUDENT"])}
                                        seriesData={Elementary_to_Middle_Bottom_School?.map(item => item["CY_STUDENT"])}
                                        Barcolor={'#FF708B'}
                                        barwidth={"80%"}
                                        Barlabel={{
                                            show: true,
                                            color: '#fff',
                                            position: "insideLeft",
                                            formatter: "{b}",
                                            fontSize: 8.9
                                        }}
                                        BarborderRadius={[100, 100, 100, 100]}
                                        BarshowBackground={{ show: true }}
                                        BarbackgroundColor={"rgba(255, 255, 255, 1)"}
                                        BarbackgroundborderRadius={[100, 100, 100, 100]}
                                    />
                                </div>
                            </LoaderContainer>
                        </div>
                        {/*col*/}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
