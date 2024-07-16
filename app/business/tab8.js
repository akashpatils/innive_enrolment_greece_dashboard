import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import MultiplebarWithLineChart from "../../components/charts/multiplebarwithlinechart";
import Piechart from "../../components/charts/piechart";
import { useTheme } from 'next-themes';
import EnrollmentProjection from '../../components/charts/enrollmentprojection';
import HorizontalStackBarChart from "../../components/charts/horizontalstackbarchart";
import BarwithLineChart from "../../components/charts/barwithlinechart";
import DoubleLineChart from "../../components/charts/doublelinechart";
import HorizontalBarChartwithIcon from "../../components/charts/horizontalbariconchart"
import Link from 'next/link';



export default function Tab8() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [selectedYear, setSelectedYear] = useState(null);

  const years = [
    { name: '2013', code: 'NY' },
    { name: '2014', code: 'RM' },
    { name: '2015', code: 'LDN' },
    { name: '2016', code: 'IST' },
    { name: '2017', code: 'PRS' }
  ];

  const DimensionViewData = {
    labels: ['Blazier Elementary', 'International High', 'Early Referral Center'],
    labels2: ['20', '60', '20'],
    // values1: [2000, 4000, 4000, 2000],
    values2: [1500, 2000, 1500]
  }



  return (
    <>
      <div>
        <div className='bg-[#FFF]  dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
          <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">Enrollment Projection in next 3/5/10 Years</div>
          <div className='grid grid-cols-9 gap-[1rem]'>
            <div className='col-span-3 bg-[#e8f0f380] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw] space-y-[12px] 3xl:space-y-[0.625vw]'>
              <div className='text-[#383874] text-[16px] 3xl:text-[0.833vw] font-medium'>3 Years Projection (2027)</div>
              <div className="flex justify-between items-center gap-[6px] 3xl:gap-[0.313vw]">
                <div className='bg-white rounded-md py-[10px] 3xl:py-[0.521vw] px-[8px] 3xl:px-[0.417vw] space-y-[4px]'>
                  <div className="text-[#344054] text-[10px] 3xl:text-[0.521vw] font-normal leading-tight">
                    Potential Student Population
                  </div>
                  <div className="text-[#383874] text-[28px] 3xl:text-[1.458vw] font-medium leading-7">
                    38,000
                  </div>
                </div>
                <div className='bg-white rounded-md py-[10px] 3xl:py-[0.521vw] px-[8px] 3xl:px-[0.417vw] space-y-[4px]'>
                  <div className="text-[#344054] text-[10px] 3xl:text-[0.521vw] font-normal leading-tight">
                    Projected Enrollment
                  </div>
                  <div className='flex justify-between items-baseline'>
                    <div className="text-[#383874] text-[28px] 3xl:text-[1.458vw] font-medium leading-7">
                      36,000
                    </div>
                    <div className='flex justify-between items-baseline text-[#00B929] text-[14px] 3xl:text-[0.729vw] font-normal'>
                      <div className='text-[16px] 3xl:text-[0.833vw] font-medium'>86%</div>
                      <i className="innivenrolment-triangle text-[8px] 3xl:text-[0.417vw] "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3 bg-[#e8f0f380] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw] space-y-[12px] 3xl:space-y-[0.625vw]'>
              <div className='text-[#383874] text-[16px] 3xl:text-[0.833vw] font-medium'>5 Years Projection (2029)</div>
              <div className="flex justify-between items-center gap-[6px] 3xl:gap-[0.313vw]">
                <div className='bg-white rounded-md py-[10px] 3xl:py-[0.521vw] px-[8px] 3xl:px-[0.417vw] space-y-[4px]'>
                  <div className="text-[#344054] text-[10px] 3xl:text-[0.521vw] font-normal leading-tight">
                    Potential Student Population
                  </div>
                  <div className="text-[#383874] text-[28px] 3xl:text-[1.458vw] font-medium leading-7">
                    42,000
                  </div>
                </div>
                <div className='bg-white rounded-md py-[10px] 3xl:py-[0.521vw] px-[8px] 3xl:px-[0.417vw] space-y-[4px]'>
                  <div className="text-[#344054] text-[10px] 3xl:text-[0.521vw] font-normal leading-tight">
                    Projected Enrollment
                  </div>
                  <div className='flex justify-between items-baseline'>
                    <div className="text-[#383874] text-[28px] 3xl:text-[1.458vw] font-medium leading-7">
                      40,000
                    </div>
                    <div className='flex justify-between items-baseline text-[#00B929] text-[14px] 3xl:text-[0.729vw] font-normal'>
                      <div className='text-[16px] 3xl:text-[0.833vw] font-medium'>90%</div>
                      <i className="innivenrolment-triangle text-[8px] 3xl:text-[0.417vw] "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3 bg-[#e8f0f380] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw] space-y-[12px] 3xl:space-y-[0.625vw]'>
              <div className='text-[#383874] text-[16px] 3xl:text-[0.833vw] font-medium'>10 Years Projection (2034)</div>
              <div className="flex justify-between items-center gap-[6px] 3xl:gap-[0.313vw]">
                <div className='bg-white rounded-md py-[10px] 3xl:py-[0.521vw] px-[8px] 3xl:px-[0.417vw] space-y-[4px]'>
                  <div className="text-[#344054] text-[10px] 3xl:text-[0.521vw] font-normal leading-tight">
                    Potential Student Population
                  </div>
                  <div className="text-[#383874] text-[28px] 3xl:text-[1.458vw] font-medium leading-7">
                    48,000
                  </div>
                </div>
                <div className='bg-white rounded-md py-[10px] 3xl:py-[0.521vw] px-[8px] 3xl:px-[0.417vw] space-y-[4px]'>
                  <div className="text-[#344054] text-[10px] 3xl:text-[0.521vw] font-normal leading-tight">
                    Projected Enrollment
                  </div>
                  <div className='flex justify-between items-baseline'>
                    <div className="text-[#383874] text-[28px] 3xl:text-[1.458vw] font-medium leading-7">
                      36,000
                    </div>
                    <div className='flex justify-between items-baseline text-[#00B929] text-[14px] 3xl:text-[0.729vw] font-normal'>
                      <div className='text-[16px] 3xl:text-[0.833vw] font-medium'>86%</div>
                      <i className="innivenrolment-triangle text-[8px] 3xl:text-[0.417vw] "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF]  dark:bg-[#374151] mt-[10px] 3xl:mt-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">
          <div className="grid grid-cols-12  gap-4">
            <div className="col-span-8 ...">
              <div className='flex justify-between items-center'>

                <div className="text-[#383874]  dark:text-[#f6f7f9]  text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                  Enrollment Projection - Trend
                </div>
                <div className='flex flex-end gap-[24px] 3xl:gap-[1.25vw]'>
                  <div className='flex items-center space-x-[10px] 3xl:space-x-[0.521vw]'>
                    <div className="text-[#667085] text-[16px] xl:text-[0.833vw]">Split by</div>
                    <div className='customDropdown'>
                      <Dropdown
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.value)}
                        options={years}
                        optionLabel="name"
                        placeholder="Overall"
                        className="w-full xl:w-[140px] 3xl:w-[5.688vw]"
                      />
                    </div>
                  </div>
                  <div className='flex items-center space-x-[10px] 3xl:space-x-[0.521vw]'>
                    <div className="text-[#667085] text-[16px] xl:text-[0.833vw]">Choose Year</div>
                    <div className='customDropdown'>
                      <Dropdown
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.value)}
                        options={years}
                        optionLabel="name"
                        placeholder="Last 10"
                        className="w-full xl:w-[140px] 3xl:w-[5.688vw]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]">
                <EnrollmentProjection
                  data1={[35, 41, 45, 46]}
                  color1={'#000000'}
                //  Linesmooth={{show:true}}
                />
              </div>
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
                  yAxisData={['Blazier Elementary','International High','Early Referral Center', ]}
                  YaxisLabel={{ show: false }}
                  YaxisTick={{ show: false }}
                  YaxisLine={{ show: false }}
                  YsplitLine={{ show: false }}
                  yAxisData2={['306', '372', '579']}
                  seriesData={[306, 372, 579]}
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
                  seriesData={[191, 290, 295]}
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
    </>
  )
}