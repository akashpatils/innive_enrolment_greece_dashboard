import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import BarwithLineChart from "../../components/charts/barwithlinechart";
import DoubleLineChart from "../../components/charts/doublelinechart";
import HorizontalBarChartwithIcon from "../../components/charts/horizontalbariconchart"
import { useTheme } from 'next-themes';
import Link from 'next/link';
import TopTile from '../../components/businessInsights/topTile';

export default function Tab6() {
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
    return (
        <div>
            <div>

                <div className='bg-[#FFF]  dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">% of Students Graduating Through District Schools (Elementary although High)</div>
                    <div className='grid grid-cols-12 gap-[1rem]'>
                        <TopTile metricTitle='Last 10 Yrs Average' title="Students Graduating" value="11600" lyVar='4' isShowLineChart={true} lineChartData1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]} lineChartData2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]} currentTheme={currentTheme} color1={'#E32A88'} color2={'#E32A8833'} percentage={70} />
                        <TopTile metricTitle='Last 5 Yrs Average' title="Students Graduating" value="12200" lyVar='4' isShowLineChart={true} lineChartData1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]} lineChartData2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]} currentTheme={currentTheme} color1={'#019ADE'} color2={'#019ADE33'} percentage={75} />
                        <TopTile metricTitle='2023 - 2024 (Current Year)' title="Students Graduating" value="12300" lyVar='4' isShowLineChart={true} lineChartData1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]} lineChartData2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]} currentTheme={currentTheme} color1={'#00B929'} color2={'#00B92933'} percentage={80} />
                        {/* <div className='col-span-3 bg-[#e8f0f380]  rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <div className='text-[#383874] text-[16px] 3xl:text-[0.833vw] font-medium'>Last 10 Yrs Average</div>
                    <div className="flex justify-between items-center ">
                        <div>
                            <div className="text-[#4B586E] text-[16px] 3xl:text-[0.833vw] font-normal">
                            Students Graduating
                            </div>
                            <div className='flex justify-between'>
                                <div className="text-[#374151]  text-[30px] 3xl:text-[1.563vw] font-semibold">
                                11,545
                                </div>
                                <div className='flex justify-between items-end text-[#00B929] text-[14px] 3xl:text-[0.729vw] font-normal'>
                                    <div><i className="innivenrolment-triangle text-[8px] "></i></div>
                                    <div>4% LY VAR</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center grow w-[90px]'>
                        <div className='text-[#344054] text-lg font-semibold leading-3 3xl:text-[1.042vw] 3xl:leading-[0.625vw]'>70%</div>
                        <div className="h-[60px] 3xl:h-[3.125vw]">
                        <DoubleLineChart
                        currentTheme={currentTheme}
                        grid={{
                        top: "10%",
                        left: "0%",
                        right: "0%",
                        bottom: "5%",
                        containLabel: true
                        }}
                        legend={{
                        show: false
                        }}
                        xAxisLabel={{ show: false }}
                        xAxisLine={{ show: false }}
                        xAxisTick={{ show: false }}
                        xAxisSplitLine={{ show: false }}
                        yAxisMax={60}
                        yAxisMin={0}
                        yAxisLabel={{ show: false }}
                        yAxisLine={{ show: false }}
                        yAxisTick={{ show: false }}
                        yAxisSplitLine={{ show: false }}
                        data1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]}
                        data2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]}
                        color1={'#E32A88'}
                        color2={'#E32A8833'}
                        Linesmooth={{show:true}}
                        />
                        </div>
                        </div>
                    </div>


                </div>

                <div className='col-span-3 bg-[#e8f0f380] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <div className='text-[#383874] text-[16px] 3xl:text-[0.833vw] font-medium'>Last 5 Yrs Average</div>
                    <div className="flex justify-between items-center ">
                        <div>
                            <div className="text-[#4B586E] text-[16px] 3xl:text-[0.833vw] font-normal">
                            Students Graduating
                            </div>
                            <div className='flex justify-between'>
                                <div className="text-[#374151] text-[30px] 3xl:text-[1.563vw] font-semibold">
                                12,045
                                </div>
                                <div className='flex justify-between items-end text-[#00B929] text-[14px] 3xl:text-[0.729vw] font-normal'>
                                    <div><i className="innivenrolment-triangle text-[8px]"></i></div>
                                    <div>4% LY VAR</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center grow w-[90px]'>
                        <div className='text-[#344054] text-lg font-semibold leading-3 3xl:text-[1.042vw] 3xl:leading-[0.625vw]'>75%</div>
                        <div className="h-[60px] 3xl:h-[3.125vw]">
                        <DoubleLineChart
                        currentTheme={currentTheme}
                        grid={{
                        top: "10%",
                        left: "0%",
                        right: "0%",
                        bottom: "5%",
                        containLabel: true
                        }}
                        legend={{
                        show: false
                        }}
                        xAxisLabel={{ show: false }}
                        xAxisLine={{ show: false }}
                        xAxisTick={{ show: false }}
                        xAxisSplitLine={{ show: false }}
                        yAxisMax={60}
                        yAxisMin={0}
                        yAxisLabel={{ show: false }}
                        yAxisLine={{ show: false }}
                        yAxisTick={{ show: false }}
                        yAxisSplitLine={{ show: false }}
                        data1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]}
                        data2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]}
                        color1={'#019ADE'}
                        color2={'#019ADE33'}
                        Linesmooth={{show:true}}
                        />
                        </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3 bg-[#e8f0f380] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
                    <div className='text-[#383874] text-[16px] 3xl:text-[0.833vw] font-medium'>2023 - 2024 (Current Year)</div>
                    <div className="flex justify-between items-center ">
                        <div>
                            <div className="text-[#4B586E] text-[16px] 3xl:text-[0.833vw] font-normal">
                            Students Graduating
                            </div>
                            <div className='flex justify-between'>
                                <div className="text-[#374151] text-[30px] 3xl:text-[1.563vw] font-semibold">
                                12,245
                                </div>
                                <div className='flex justify-between items-end text-[#00B929] text-[14px] 3xl:text-[0.729vw] font-normal'>
                                    <div><i className="innivenrolment-triangle text-[8px]"></i></div>
                                    <div>4% LY VAR</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center grow w-[90px]'>
                        <div className='text-[#344054] text-lg font-semibold leading-3 3xl:text-[1.042vw] 3xl:leading-[0.625vw]'>80%</div>
                        <div className="h-[60px] 3xl:h-[3.125vw]">
                        <DoubleLineChart
                        currentTheme={currentTheme}
                        grid={{
                        top: "10%",
                        left: "0%",
                        right: "0%",
                        bottom: "5%",
                        containLabel: true
                        }}
                        legend={{
                        show: false
                        }}
                        xAxisLabel={{ show: false }}
                        xAxisLine={{ show: false }}
                        xAxisTick={{ show: false }}
                        xAxisSplitLine={{ show: false }}
                        yAxisMax={60}
                        yAxisMin={0}
                        yAxisLabel={{ show: false }}
                        yAxisLine={{ show: false }}
                        yAxisTick={{ show: false }}
                        yAxisSplitLine={{ show: false }}
                        data1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]}
                        data2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]}
                        color1={'#00B929'}
                        color2={'#00B92933'}
                        Linesmooth={{show:true}}
                        />
                        </div>
                        </div>
                    </div>
                </div> */}
                    </div>
                    {/* <div className="flex gap-5">
                <div>
                    <div className="flex gap-2 ">
                        <div className="flex items-center mt-[10px] 3xl:mt-[0.521vw] bg-[#019ADE] text-[#019ADE] h-[8px]">-</div>
                        <div className="flex items-center mt-[8px] 3xl:mt-[0.417vw] text-[#101828]  dark:text-[#f6f7f9] 3xl:text-[12px] text-[0.625vw]">High School</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 ">
                        <div className="flex items-center mt-[10px] 3xl:mt-[0.521vw] bg-[#E32A6D] text-[#E32A6D] h-[8px]">-</div>
                        <div className="flex items-center mt-[8px] 3xl:mt-[0.417vw] text-[#101828]  dark:text-[#f6f7f9] 3xl:text-[12px] text-[0.625vw]">Middle School</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 ">
                        <div className="flex items-center mt-[10px] 3xl:mt-[0.521vw] bg-[#00B929] text-[#00B929] h-[8px]">-</div>
                        <div className="flex items-center mt-[8px] 3xl:mt-[0.417vw] text-[#101828]  dark:text-[#f6f7f9] 3xl:text-[12px] text-[0.625vw]">Elementary School</div>
                    </div>
                </div>
            </div> */}
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
                            <div className="h-[425px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]">
                                <BarwithLineChart />
                            </div>
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
                                    xAxisMax={700}
                                    xaxisLabel={{ show: false }}
                                    xaxisTick={{ show: false }}
                                    xaxisLine={{ show: false }}
                                    xsplitLine={{ show: false }}
                                    yAxisData={['Blazier Elementary', 'International High', 'Early Referral Center',]}
                                    YaxisLabel={{ show: false }}
                                    YaxisTick={{ show: false }}
                                    YaxisLine={{ show: false }}
                                    YsplitLine={{ show: false }}
                                    yAxisData2={['306', '372', '579']}
                                    seriesData={[579, 372, 306]}
                                    Barcolor={'#42CD7E'}
                                    barwidth={"80%"}
                                    Barlabel={{
                                        show: true,
                                        color: '#fff',
                                        position: "insideLeft",
                                        formatter: "{b}"
                                    }}
                                    BarborderRadius={[100, 100, 100, 100]}
                                    BarshowBackground={{ show: true }}
                                    BarbackgroundColor={"rgba(255, 255, 255, 1)"}
                                    BarbackgroundborderRadius={[100, 100, 100, 100]}
                                />
                            </div>
                        </div>
                        {/*col*/}
                        <div className='bg-[#EDF3F580] rounded-lg py-3 3xl:py-[0.625vw] px-4 3xl:px-[0.833vw]'>
                            <div className='text-[#383874] text-sm 3xl:text-[0.833vw] font-medium leading-6 3xl:leading-[1.25vw]'>Country with lowest Graduation % (Elem to Middle)</div>
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
                                    yAxisData={['Northeast High', 'Akins High', 'Navarro High',]}
                                    YaxisLabel={{ show: false }}
                                    YaxisTick={{ show: false }}
                                    YaxisLine={{ show: false }}
                                    YsplitLine={{ show: false }}
                                    yAxisData2={['191', '290', '295']}
                                    seriesData={[191, 300, 215]}
                                    Barcolor={'#FF708B'}
                                    barwidth={"80%"}
                                    Barlabel={{
                                        show: true,
                                        color: '#fff',
                                        position: "insideLeft",
                                        formatter: "{b}"
                                    }}
                                    BarborderRadius={[100, 100, 100, 100]}
                                    BarshowBackground={{ show: true }}
                                    BarbackgroundColor={"rgba(255, 255, 255, 1)"}
                                    BarbackgroundborderRadius={[100, 100, 100, 100]}
                                />
                            </div>
                        </div>
                        {/*col*/}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
