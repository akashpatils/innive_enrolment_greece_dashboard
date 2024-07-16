import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import MultiplebarWithLineChart from "../../components/charts/multiplebarwithlinechart";
import { useTheme } from 'next-themes';
import PiechartComponent from '../../components/charts/piechartcomponent';
import EnrollmentProjection from '../../components/charts/enrollmentprojection';
import HighestMovement from '../../components/charts/highestmovement';
import TopTile from '../../components/businessInsights/topTile'
import Legends from '../../components/businessInsights/legends';

export default function Tab2() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [selectedGender, setSelectedGender] = useState(null);

  const gender = [
    { name: 'Male', code: 'ML' },
    { name: 'Female', code: 'FL' }
  ];

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

  const MultipleBarChartData = {
    labels: ['department', 'EnnrolledIn', 'EnrolledOut', 'TotalEnrolled'],
    values: [
      { department: '2013', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2014', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2015', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2016', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2017', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2018', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2019', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2020', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2021', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2022', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
      { department: '2023', EnnrolledIn: 25, EnrolledOut: 2, TotalEnrolled: 20, },
    ]
  }

  const data1 = [
    { value: 820, name: '509' },
    { value: 600, name: '14,500' },
  ]
  const data2 = [
    { value: 720, name: '509' },
    { value: 1000, name: '14,500' },
  ]
  const data3 = [
    { value: 1500, name: '509' },
    { value: 370, name: '14,500' },
  ]
  return (
    <div>
      <div className='bg-[#FFF]  dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[16px] 3xl:p-[0.833vw]'>
        <div className="text-[#383874] dark:text-[#c8ddf3] text-[18px] xl:text-[13px] 3xl:text-[0.938vw] font-semibold pb-[12px] 3x:pb-[0.625vw]">Schools with highest movement of students to Charter / private schools (Top 5 across years so far)</div>
        <div className='grid grid-cols-12 gap-[16px] xl:gap-[14px] 3xl:gap-[0.833vw]'>
          <TopTile metricTitle='2021 - 2022 (Top School - Net Movement)' title="Andrews Middle School" value="1420" lyVar = '4' pieChartData={data1} colors={['#019ADE', '#E32A88']} />
          <TopTile metricTitle='2022 - 2023 (Top School - Net Movement)' title="Carmel High School" value="1720" lyVar = '4' pieChartData={data2} colors={['#019ADE', '#E32A88']} />
          <TopTile metricTitle='2023 - 2024 (Top School - Net Movement)' title="CSH High School" value="1870" lyVar = '4' pieChartData={data3} colors={['#019ADE', '#E32A88']} />
        </div>
        <Legends data={["Male", "Female"]} colors={["#019ADE", "#E32A6D"]} />
      </div>
      <div className="bg-[#FFF]  dark:bg-[#374151] mt-[10px] 3xl:mt-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">
        <div className="grid grid-cols-12  gap-4">
          <div className="col-span-8">
            <div className='flex justify-between items-center'>
              <div className="text-[#383874]  dark:text-[#f6f7f9]  text-[18px] xl:text-[14px] 3xl:text-[0.942vw] font-semibold">
                Top 3 Schools - Highest Movement
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
            {/* <div className="h-[400px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]">
              <MultiplebarWithLineChart
                currentTheme={currentTheme}
                grid={{ top: 50, left: 35, bottom: 60, right: 10 }}
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
                  formatter: '{value}K'
                }}
                min={0}
                max={40}
                interval={10}
                label={{
                  show: false,
                }}
                data={MultipleBarChartData}
              />
            </div> */}
            <div className="h-[400px] 3xl:h-[20.833vw] flex gap-[24px] 3xl:gap-[1.25vw]">
              <HighestMovement />
            </div>

          </div>
          <div className="col-span-4 ...">
            <div className="bg-[#e8f0f3e0] h-[450px] 3xl:h-[23.438vw] rounded-[8px] xl:rounded-[6px] 3xl:rounded-[0.417vw]">
              <div className="flex items-center justify-between border-b border-[#C6CBD2] px-[16px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] ">
                <div className="text-[#383874] text-[16px] xl:text-[13px] 3xl:text-[0.900vw] font-semibold">
                  Key Insights
                </div>
                <i className="innivenrolment-alert-circle text-[17px] xl:text-[14px] 3xl:text-[0.933vw]"></i>
              </div>
              <div className="px-[16px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw]">
                <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal pb-[8px] 3xl:pb-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">The Enrollment Trend has grown significantly at <span className="text-[#000] font-semibold">7% YoY</span> for the last 10 year period from 2013 to 2023</div>
                <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal py-[8px] 3xl:py-[0.417vw] border-dashed border-b-2 border-[#C6CBD2]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
                <div className="text-[#344054] text-[14px] sm:text-[7px] md:text-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal py-[8px] 3xl:py-[0.417vw]">Key Insights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border mt-[10px] 3xl:mt-[0.521vw] border-[#C6CBD2] rounded-lg bg-[#fff]">
        <div className='flex justify-between items-center py-[20px] xl:py-[12px] 3xl:py-[1.042vw] px-[24px] xl:px-[16px] 3xl:px-[1.25vw]'>
          <div className='text-[#383874] text-[18px] xl:text-[13px] 3xl:text-[0.938vw] font-semibold '>Cross Dimensional Analysis</div>
          <div className="flex items-center">
            <div className="mr-[10px] xl:mr-[0.521vw] text-[#667085] text-[16px] xl:text-[0.833vw]">View by</div>
            <div className='mr-[20px] xl:mr-[1.042vw] customDropdown'>
              <Dropdown
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.value)}
                options={gender}
                optionLabel="name"
                placeholder="Gender"
                className="w-full xl:w-[140px] 3xl:w-[5.688vw]"
              />
            </div>

            <div className="flex justify-center items-center gap-1.5 bg-[#0B0F5D] rounded-md  py-[8px] xl:py-[0.417vw] px-[14px] xl:px-[0.729vw]">
              <i className="innivenrolment-file-text text-[#ffffff] w-[20px] 3xl:w-[1.042vw] h-[20px] 3xl:h-[1.042vw]"></i>
              <div className="text-[14px] xl:text-[0.729vw] text-[#E8F0F3]">Analyze Data</div>
            </div>
          </div>
        </div>
        <table className="table-auto w-full h-full">
          <thead>
            <tr>
              <th colSpan={1} className="bg-[#E8F0F3] font-medium py-[20px] xl:py-[10px] 3xl:py-[1.042vw]">
              </th>
              <th colSpan={3}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[12px] xl:py-[10px] 3xl:py-[0.625vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] border-x border-[#C6CBD2]">2023</th>
              <th colSpan={3}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[12px] xl:py-[10px] 3xl:py-[0.625vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] border-l border-[#C6CBD2]">2022</th>
              <th colSpan={3}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[12px] xl:py-[10px] 3xl:py-[0.625vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] border-l border-[#C6CBD2]">2021</th>
            </tr>
            <tr>

              <th width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] px-[24px] xl:px-[1.25vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw] text-start">Year</th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw] border-l border-[#C6CBD2]"
              >
                School 1
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw]"
              >
                School 2
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw]"
              >
                School 3
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw] border-l border-[#C6CBD2]"
              >
                School 1
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw]"
              >
                School 2
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw]"
              >
                School 3
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw] border-l border-[#C6CBD2]"
              >
                School 1
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw]"
              >
                School 2
              </th>
              <th
                width={100}
                className="bg-[#E8F0F3] font-medium text-[#344054] py-[20px] xl:py-[10px] 3xl:py-[1.042vw] text-[14px] xl:text-[11px] 3xl:-[0.729vw]"
              >
                School 3
              </th>

            </tr>
          </thead>
          <tbody >
            <tr className="bg-[#F9FAFB]">
              <td
                width={150}
                className="text-[#344054] text-[14px] xl:text-[12px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw] font-medium"
              >
                Male
              </td>

              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                1,440
              </td>
              <td
                width={150}
                className="  text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                1,220
              </td>
              <td
                width={150}
                className="  text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                1,107
              </td>
              <td
                width={150}
                className="  text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                1,440
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                1,220
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                1,107
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                1,440
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                1,220
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                1,107
              </td>

            </tr>
            <tr>
              <td
                width={150}
                className="text-[#344054] font-medium text-[14px] xl:text-[12px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw]"
              >
                Female
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                271
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                263
              </td>
              <td
                width={150}
                className=" text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                227
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                301
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                331
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                421
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                617
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                754
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                991
              </td>

            </tr>
            <tr className="bg-[#F9FAFB] ">
              <td
                width={252}
                className="text-[#344054] font-medium text-[14px] xl:text-[12px] 3xl:-[0.729vw] px-[24px] xl:px-[1.25vw] rounded-bl-lg"
              >
                Total Net Movement
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                1,169
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                957
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] "
              >
                880
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                1,169
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                957
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                880
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] border-l border-[#C6CBD2]"
              >
                1.169
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054]"
              >
                957
              </td>
              <td
                width={150}
                className="text-center font-medium py-[16px] xl:py-[12px] 3xl:py-[0.833vw] text-[14px] xl:text-[12px] 3xl:-[0.729vw] text-[#344054] rounded-br-lg"
              >
                880
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
