"use client";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout/pagelayout"
import Linechart from "../../components/charts/linechart";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from "next/link";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
export default function Page() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [selectedTab, setSelectedTab] = useState('% Students Enrolled')
  const [selectedCity, setSelectedCity] = useState(null);
  const years = [
    { name: 'School Type 1', code: 'NY' },
    { name: 'School Type 2', code: 'RM' },
    { name: 'School Type 3', code: 'LDN' },
    { name: 'School Type 4', code: 'IST' },
    { name: 'School Type 5', code: 'PRS' }
  ];

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [isActive1, setIsActive1] = useState(false);
  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };
  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };
  const [isActive4, setIsActive4] = useState(true);
  const handleClick4 = () => {
    setIsActive4(!isActive4);
  };
  const [isActive5, setIsActive5] = useState(false);
  const handleClick5 = () => {
    setIsActive5(!isActive5);
  };
  const [isActive6, setIsActive6] = useState(false);
  const handleClick6 = () => {
    setIsActive6(!isActive6);
  };
  const [isActive7, setIsActive7] = useState(false);
  const handleClick7 = () => {
    setIsActive7(!isActive7);
  };
  const [isActive8, setIsActive8] = useState(false);
  const handleClick8 = () => {
    setIsActive8(!isActive8);
  };
  const [isActive9, setIsActive9] = useState(false);
  const handleClick9 = () => {
    setIsActive9(!isActive9);
  };
  const [isActive10, setIsActive10] = useState(false);
  const handleClick10 = () => {
    setIsActive10(!isActive10);
  };
  const [isActive11, setIsActive11] = useState(false);
  const handleClick11 = () => {
    setIsActive11(!isActive11);
  };
  const [isActive12, setIsActive12] = useState(false);
  const handleClick12 = () => {
    setIsActive12(!isActive12);
  };
  const [isActive13, setIsActive13] = useState(false);
  const handleClick13 = () => {
    setIsActive13(!isActive13);
  };
  const [isActive14, setIsActive14] = useState(false);
  const handleClick14 = () => {
    setIsActive14(!isActive14);
  };
  const [isActive15, setIsActive15] = useState(false);
  const handleClick15 = () => {
    setIsActive15(!isActive15);
  };

  const DimensionViewbar = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      bottom: "-2%",
      left: '0%',
      icon: "circle",
      textStyle: {
        fontSize: 11,
        color: currentTheme == "dark" ? "#fff" : "#6C768B",
      },
      data: [
        { name: 'Prior year' },
        { name: 'Current year' }
      ]
    },
    grid: {
      top: '5%',
      left: '3%',
      right: '4%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 8000,
      min: 0,
      interval: 1000,
      boundaryGap: [0, 0.01],
      axisLabel: {
        color: currentTheme == "dark" ? "#ffff" : '#6C768B',
        fontSize: 10,
        fontWeight: "400"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#BECDE3"
        }
      }
    },
    yAxis: [
      {
        type: 'category',
        data: ['High', 'Middle', 'Elementary', 'Pre-K'],
        // splitLine : {
        //     show : false
        // },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: currentTheme == "dark" ? "#ffff" : '#6C768B',
          fontSize: 10,
          fontWeight: "600"
        },

      },
      {
        type: 'category',
        data: ['45%', '30%', '20%', '50%'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: currentTheme == "dark" ? "#ffff" : '#6C768B',
          fontSize: "12px",
          fontWeight: "400",
          formatter: function (value) {
            switch (value) {
              case '45%':
                return '45%{45|}';
              case '30%':
                return '30%{30|}';
              case '20%':
                return '20%{20|}';
              case '50%':
                return '50%{50|}';
              default:
                return value;
            }
          },
          rich: {
            45: {
              height: 20,
              backgroundColor: {
                image: '/images/chart_icon/arrow-up_green.svg'
              }
            },
            30: {
              height: 20,
              backgroundColor: {
                image: '/images/chart_icon/arrow-down_red.svg'
              }
            },
            20: {
              height: 20,
              backgroundColor: {
                image: '/images/chart_icon/arrow-up_green.svg'
              }
            },
            50: {
              height: 20,
              align: 'center',
              backgroundColor: {
                image: '/images/chart_icon/arrow-up_green.svg'
              }
            },
          }
        }

      },
    ],
    series: [
      {
        name: 'Current year',
        type: 'bar',
        stack: 'total',
        color: '#1570EF',
        data: [5000, 5500, 6700, 5500],
        itemStyle: {
          // borderRadius: [0, 8, 8, 0]
        }
      },
      {
        name: 'Prior year',
        type: 'bar',
        stack: 'total',
        color: currentTheme == "dark" ? "#ffff" : '#c9d5e7',
        data: [2000, 1000, 500, 2500],
        itemStyle: {
          borderRadius: [0, 4, 4, 0]
        }
      },
    ]
  }


  return (
    <Layout
      pageTitle="Programs"
      parentPageName="Home"
      pageName="Current Page"
    >
      <div className="mt-[22px] xl:mt-[22px] 3xl:mt-[1.146vw] pb-20">
        <div className="px-[32px] 3xl:px-[1.667vw] grid grid-cols-12 gap-x-5 gap-y-5">
          <div className='xl:col-span-8 col-span-12 space-y-4'>
            <div className="flex justify-end">
              {/*buttons*/}
              <div className="text-[10px] xl:text-xs 3xl:text-[0.729vw] font-normal leading-normal flex items-center gap-2">
                <Link href={''} className={`${selectedTab === "% Students Enrolled" ? 'bg-[#1F2A37] text-[#FFFFFF]' : 'bg-[#F5F6F7] text-[#4B586E]'} border border-[#1F2A37] rounded-full  py-2 3xl:py-[0.417vw] px-4 3xl:px-[0.833vw]`} onClick={() => {
                  setSelectedTab('% Students Enrolled')
                }}>% Students Enrolled</Link>
                <Link href={''} onClick={() => {
                  setSelectedTab('% Budget')
                }} className={`${selectedTab === "% Budget" ? 'bg-[#1F2A37] text-[#FFFFFF]' : 'bg-[#F5F6F7] text-[#4B586E]'} border border-[#E5E7EB] rounded-full py-2 3xl:py-[0.417vw] px-4 3xl:px-[0.833vw]  hover:bg-[#1F2A37] hover:border-[#1F2A37] transition ease-in-out delay-150 duration-300 hover:text-white`} >% Budget</Link>
                <Link href={''} onClick={() => {
                  setSelectedTab('District Strategy')
                }} className={`${selectedTab === "District Strategy" ? 'bg-[#1F2A37] text-[#FFFFFF]' : 'bg-[#F5F6F7] text-[#4B586E]'} border border-[#E5E7EB] rounded-full py-2 3xl:py-[0.417vw] px-4 3xl:px-[0.833vw]  hover:bg-[#1F2A37] hover:border-[#1F2A37] hover:text-white transition ease-in-out delay-150 duration-300`}>District Strategy</Link>
              </div>
              {/*buttons*/}
            </div>
            <div className='relative h-full flex flex-wrap gap-3'>
              {/*col*/}
              <div className="xl:absolute top-[100px] 2xl:left-[30px] 3xl:top-[5.208vw] 3xl:left-[3.646vw]">
                <div className={isActive ? 'circule_active w-[170px] h-[170px] 3xl:w-[8.854vw] 3xl:h-[8.854vw] rounded-full flex flex-col items-center justify-center gap-4 cursor-pointer p-5 max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[170px] h-[170px] 3xl:w-[8.854vw] 3xl:h-[8.854vw] rounded-full flex flex-col items-center justify-center gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick}>
                  <h4 className="dark:text-[#EFF8FF]">Homeless</h4>
                  <h5 className="dark:text-[#EFF8FF]">123</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[280px] 2xl:left-[50px] 3xl:top-[14.583vw] 3xl:left-[4.688vw]">
                <div className={isActive1 ? 'circule_active w-[117px] h-[117px] 3xl:w-[7.031vw] 3xl:h-[7.031vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[117px] h-[117px] 3xl:w-[7.031vw] 3xl:h-[7.031vw] rounded-full flex flex-col items-center justify-center 3xl:gap-1 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick1}>
                  <h4 className="dark:text-[#EFF8FF]">AP</h4>
                  <h5 className="dark:text-[#EFF8FF]">90</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[440px] 2xl:left-[50px] 3xl:top-[22.5vw] 3xl:left-[4.167vw]">
                <div className={isActive2 ? 'circule_active w-[135px] h-[135px] 3xl:w-[7.031vw] 3xl:h-[7.031vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[135px] h-[135px] 3xl:w-[7.031vw] 3xl:h-[7.031vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick2}>
                  <h4 className="dark:text-[#EFF8FF]">IB</h4>
                  <h5 className="dark:text-[#EFF8FF]">10</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[600px] 2xl:left-[50px] 3xl:top-[30vw] 3xl:left-[4.167vw]">
                <div className={isActive3 ? 'circule_active w-[135px] h-[135px] 3xl:w-[7.031vw] 3xl:h-[7.031vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[135px] h-[135px] 3xl:w-[7.031vw] 3xl:h-[7.031vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick3}>
                  <h4 className="dark:text-[#EFF8FF]">504</h4>
                  <h5 className="dark:text-[#EFF8FF]">12</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[80px] left-[200px] 2xl:left-[250px] 3xl:top-[4.167vw] 3xl:left-[15.573vw]">
                <div className={isActive4 ? 'circule_active w-[200px] h-[200px] 3xl:w-[12.969vw] 3xl:h-[12.969vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[200px] h-[200px] 3xl:w-[12.969vw] 3xl:h-[12.969vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick4}>
                  <h4 className="dark:text-[#EFF8FF]">Adult Ed</h4>
                  <h5 className="dark:text-[#EFF8FF]">567</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[300px] left-[120px] 2xl:left-[180px] 3xl:top-[16.917vw] 3xl:left-[11.021vw]">
                <div className={isActive5 ? 'circule_active w-[177px] h-[178px] 3xl:w-[10.313vw] 3xl:h-[10.313vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[178px] h-[178px] 3xl:w-[10.313vw] 3xl:h-[10.313vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick5}>
                  <h4 className="dark:text-[#EFF8FF]">MTSS</h4>
                  <h5 className="dark:text-[#EFF8FF]">32</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[510px] left-[140px] 2xl:left-[200px] 3xl:top-[28.333vw] 3xl:left-[11.583vw]">
                <div className={isActive6 ? 'circule_active w-[180px] h-[180px] 2xl:w-[241px] 2xl:h-[241px] 3xl:w-[12.552vw] 3xl:h-[12.552vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[180px] h-[180px] 2xl:w-[241px] 2xl:h-[241px] 3xl:w-[12.552vw] 3xl:h-[12.552vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick6}>
                  <h4 className="dark:text-[#EFF8FF]">Language Programs</h4>
                  <h5 className="dark:text-[#EFF8FF]">95</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[90px] left-[420px] 2xl:left-[500px] 3xl:top-[4.167vw] 3xl:left-[30.208vw]">
                <div className={isActive7 ? 'circule_active w-[133px] h-[133px] 3xl:w-[6.927vw] 3xl:h-[6.927vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[133px] h-[133px] 3xl:w-[6.927vw] 3xl:h-[6.927vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick7}>
                  <h4 className="dark:text-[#EFF8FF]">Foster</h4>
                  <h5 className="dark:text-[#EFF8FF]">326</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[230px] left-[450px] 2xl:left-[520px] 3xl:top-[12.625vw] 3xl:left-[29.688vw]">
                <div className={isActive8 ? 'circule_active w-[170px] h-[170px] 2xl:w-[193px] 2xl:h-[193px] 3xl:w-[10.938vw] 3xl:h-[10.938vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[170px] h-[170px] 2xl:w-[193px] 2xl:h-[193px] 3xl:w-[10.938vw] 3xl:h-[10.938vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick8}>
                  <h4 className="dark:text-[#EFF8FF]">Newcomer/Migrant</h4>
                  <h5 className="dark:text-[#EFF8FF]">17</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[280px] left-[310px] 2xl:left-[370px] 3xl:top-[17.708vw] 3xl:left-[21.875vw]">
                <div className={isActive9 ? 'circule_active w-[133px] h-[133px] 3xl:w-[8.021vw] 3xl:h-[8.021vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[133px] h-[133px] 3xl:w-[8.021vw] 3xl:h-[8.021vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick9}>
                  <h4 className="dark:text-[#EFF8FF]">Homeless</h4>
                  <h5 className="dark:text-[#EFF8FF]">15</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[430px] 2xl:top-[450px] left-[340px] 2xl:left-[470px] 3xl:top-[25.24vw] 3xl:left-[27.042vw]">
                <div className={isActive10 ? 'circule_active w-[150px] h-[150px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[10.729vw] 3xl:h-[10.729vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[150px] h-[150px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[10.729vw] 3xl:h-[10.729vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick10}>
                  <h4 className="dark:text-[#EFF8FF]">SPED</h4>
                  <h5 className="dark:text-[#EFF8FF]">123</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[650px] left-[310px] 2xl:left-[450px] 3xl:top-[36.458vw] 3xl:left-[24.396vw]">
                <div className={isActive11 ? 'circule_active w-[125px] h-[125px] 2xl:w-[135px] 2xl:h-[135px] 3xl:w-[7.552vw] 3xl:h-[7.552vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[125px] h-[125px] 2xl:w-[135px] 2xl:h-[135px] 3xl:w-[7.552vw] 3xl:h-[7.552vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick11}>
                  <h4 className="dark:text-[#EFF8FF]">CTE</h4>
                  <h5 className="dark:text-[#EFF8FF]">10</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[100px] left-[600px] 2xl:left-[650px] 3xl:top-[5.208vw] 3xl:left-[39.646vw]">
                <div className={isActive12 ? 'circule_active w-[135px] h-[135px] 3xl:w-[9.271vw] 3xl:h-[9.271vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[135px] h-[135px] 3xl:w-[9.271vw] 3xl:h-[9.271vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick12}>
                  <h4 className="dark:text-[#EFF8FF]">Sports</h4>
                  <h5 className="dark:text-[#EFF8FF]">298</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[400px] 2xl:top-[350px] left-[550px] 2xl:left-[680px] 3xl:top-[17.833vw] 3xl:left-[39.646vw]">
                <div className={isActive13 ? 'circule_active w-[213px] h-[213px] 3xl:w-[13.177vw] 3xl:h-[13.177vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[170px] h-[170px] 2xl:w-[213px] 2xl:h-[213px] 3xl:w-[13.177vw] 3xl:h-[13.177vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick13}>
                  <h4 className="dark:text-[#EFF8FF]">Before / After<br></br>School Programs</h4>
                  <h5 className="dark:text-[#EFF8FF]">123</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[580px] left-[500px] 2xl:left-[630px] 3xl:top-[31.833vw] 3xl:left-[38.646vw]">
                <div className={isActive14 ? 'circule_active w-[180px] h-[180px] 2xl:w-[213px] 2xl:h-[213px] 3xl:w-[10.833vw] 3xl:h-[10.833vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[180px] h-[180px] 2xl:w-[213px] 2xl:h-[213px] 3xl:w-[10.833vw] 3xl:h-[10.833vw] rounded-full flex flex-col items-center justify-center 3xl:gap-4 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick14}>
                  <h4 className="dark:text-[#EFF8FF]">Independent Study</h4>
                  <h5 className="dark:text-[#EFF8FF]">123</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap- dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
              {/*col*/}
              <div className="xl:absolute top-[770px] left-[450px] 2xl:left-[550px] 3xl:top-[39.833vw] 3xl:left-[31.646vw]">
                <div className={isActive15 ? 'circule_active w-[133px] h-[133px] 3xl:w-[7.969vw] 3xl:h-[7.969vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg' : 'circule_none w-[133px] h-[133px] 3xl:w-[7.969vw] 3xl:h-[7.969vw] rounded-full flex flex-col items-center justify-center 3xl:gap-2 cursor-pointer max-xl:w-[100px] max-xl:h-[100px] max-xl:rounded-lg'}
                  onClick={handleClick15}>
                  <h4 className="dark:text-[#EFF8FF]">Title 1<br></br> Students</h4>
                  <h5 className="dark:text-[#EFF8FF]">12</h5>
                  <p className="dark:text-[#EFF8FF]">20%</p>
                  <div className="flex items-center gap-1 dark:text-[#EFF8FF]"><i className="innivenrolment-triangle"></i><h6 className="dark:text-[#EFF8FF]">12% LY</h6></div>
                </div>
              </div>
              {/*col*/}
            </div>
          </div>
          <div className="xl:col-span-4 col-span-12 ">
            <div className="programShadow max-xl:mt-5 ">
              <div className="relative">
                <Image
                  src={'/images/program_image.svg'}
                  width={160} height={65}
                  alt=""
                  className="w-full rounded-t-[12px] -z-10"
                />
                <div className="absolute imageGradiant -bottom-4 -z-5"></div>
              </div>
              <div className="relative z-1 px-[18px] 3xl:px-[0.938vw] pb-[12px] 3xl:pb-[0.625vw] dark:bg-[#313a46]">
                <div className="flex justify-between">
                  <div>
                    <div className="text-[#374151] dark:text-[#EFF8FF] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold">Adult Education</div>
                    <div className="text-[#4B586E] dark:text-[#EFF8FF] text-[14px] xl:text-[13px] 3xl:text-[0.729vw] font-normal">% Students Enrolled</div>
                  </div>
                  <div>
                    <div className="text-[#374151]  dark:text-[#EFF8FF] text-[32px] xl:text-[30px] 3xl:text-[1.667vw] font-semibold">75%</div>
                    <div className="text-[#9CA1AB] dark:text-[#EFF8FF] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal text-end"><i className="innivenrolment-triangle text-[#31C48D]"></i> 12% LY</div>
                  </div>
                </div>
                <div className="mt-[16px] 3xl:mt-[0.833vw]">
                  <div className="grid grid-cols-4 gap-[6px] 3xl:gap-[0.313vw]">
                    <div className="flex flex-col gap-[8px] px-[12px] xl:px-[11px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] bg-[#F5F6F7]  dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                      <div className="text-[#4B586E]  dark:text-[#F5F6F7] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal">ESL</div>
                      <div>
                        <div className="text-[#374151]  dark:text-[#F5F6F7] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-extrabold">12%</div>
                        <div className="text-[#9CA1AB]  dark:text-[#F5F6F7] text-[12px] 3xl:text-[0.625vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-up-line text-[#057A55] ml-1"></i></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] px-[12px] xl:px-[11px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] bg-[#F5F6F7] dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                      <div className="text-[#4B586E]  dark:text-[#F5F6F7] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal">GED</div>
                      <div>
                        <div className="text-[#374151 ]  dark:text-[#F5F6F7] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-extrabold">12%</div>
                        <div className="text-[#9CA1AB]  dark:text-[#F5F6F7] text-[12px] 3xl:text-[0.625vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-up-line text-[#057A55] ml-1"></i></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] px-[12px] xl:px-[11px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] bg-[#F5F6F7] dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                      <div className="text-[#4B586E]  dark:text-[#F5F6F7] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal">Basic Education</div>
                      <div>
                        <div className="text-[#374151]  dark:text-[#F5F6F7] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-extrabold">12%</div>
                        <div className="text-[#9CA1AB]   dark:text-[#F5F6F7] text-[12px] 3xl:text-[0.625vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-up-line text-[#057A55] ml-1"></i></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] px-[12px] xl:px-[11px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] bg-[#F5F6F7] dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                      <div className="text-[#4B586E]  dark:text-[#F5F6F7] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal">Corrections...</div>
                      <div>
                        <div className="text-[#374151]  dark:text-[#F5F6F7] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-extrabold">12%</div>
                        <div className="text-[#9CA1AB]  dark:text-[#F5F6F7] text-[12px] 3xl:text-[0.625vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-up-line text-[#057A55] ml-1"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[16px] 3xl:mt-[0.833vw]">
                  <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] bg-[#F5F6F7] dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                    <div className="flex items-center justify-between">
                      <div className="text-[#162B55]  dark:text-[#F5F6F7]  text-[14px] xl:text-[13px] 3xl:text-[0.729vw] font-medium dark:bg-[#374151]">% Students Enrolled</div>
                      <div className="flex items-center gap-[12px] 3xl:gap-[0.625vw]">
                        <div className="text-[#162B55] dark:text-[#F5F6F7] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-extrabold">40%</div>
                        <div className="text-[#162B55]  dark:text-[#F5F6F7] text-[12px] 3xl:text-[0.625vw] font-normal">Target Var: 2% <i className="innivenrolment-arrow-down-line text-[#D62C72] ml-1"></i></div>
                      </div>
                    </div>
                    <div className="h-[100px] xl:h-[98px] 3xl:h-[5.208vw]">
                      <div className="ml-10 mr-4 border-t border-dashed border-t-[#F8B720]"></div>
                      <Linechart
                        currentTheme={currentTheme}
                        grid={{
                          top: "10%",
                          left: "7%",
                          right: "3%",
                          bottom: "20%",
                        }}
                        legend={{
                          show: false
                        }}
                        XaxisShow={true}
                        boundaryGap={true}
                        XaxissplitLine={true}
                        XaxisLine={{ show: false }}
                        XaxisTick={{ show: false }}
                        Xaxisdata={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
                        Yaxismax={60}
                        YaxisInterval={20}
                        YsplitLine={true}
                        splitLineLineStyle={{
                          type: 'dashed'
                        }}
                        YaxisLabel={true}
                        YaxisFormatter={'{value}%'}
                        YaxisColor={"#96BF0D"}
                        data={[20, 22, 19, 20, 25, 30, 35, 40]}
                        linecolorwidth={{ color: "#1861DD", width: 2 }}
                        LinearGradientcolor1={"rgba(24, 97, 221, 0.32)"}
                        LinearGradientcolor2={"rgba(24, 97, 221, 0)"}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[16px] 3xl:mt-[0.833vw]">
                  <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] bg-[#F5F6F7] dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                    <div className="flex items-center justify-between">
                      <div className="text-[#162B55]  dark:text-[#F5F6F7]  text-[14px] xl:text-[13px] 3xl:text-[0.729vw] font-medium dark:bg-[#374151]">Dimension View</div>
                      <div className='customDropdown  dark:bg-[#374151]'>
                        <Dropdown
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.value)}
                          options={years}
                          optionLabel="name"
                          placeholder="School Type"
                          className="w-full xl:w-[140px] 3xl:w-[5.688vw]  dark:bg-[#374151]"
                        />
                      </div>
                    </div>
                    <div className="h-[100px] xl:h-[180px] 3xl:h-[10.417vw]">
                      <ReactEcharts option={DimensionViewbar} style={{ width: "100%", height: "100%" }} />
                    </div>
                  </div>
                </div>
                <div className="mt-[16px] 3xl:mt-[0.833vw]">
                  <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] bg-[#F5F6F7] dark:bg-[#374151] rounded-[8px] 3xl:rounded-[0.417vw]">
                    <Tabs className={'custm_tabUI'}>
                      <div className="flex items-center justify-between ">
                        <div className="text-[#162B55]  dark:text-[#F5F6F7]  text-[14px] xl:text-[13px] 3xl:text-[0.729vw] font-medium dark:bg-[#374151]">Program Funding</div>
                        <div>
                          <TabList>
                            <Tab>Overall $</Tab>
                            <Tab>Per Capita $</Tab>
                          </TabList>
                        </div>
                      </div>
                      <TabPanel>
                        <div className="h-[150px] xl:h-[140px] 3xl:h-[6.208vw]">

                          <Linechart
                            currentTheme={currentTheme}
                            grid={{
                              top: "10%",
                              left: "7%",
                              right: "3%",
                              bottom: "30%",
                            }}
                            legend={{
                              show: true,
                              bottom: 0,
                              left: 10,
                              itemWidth: 10,
                              itemHeight: 2,
                              textStyle: {
                                color: "#383874",
                                fontSize: 10
                              },
                            }}
                            name1={"Overall $"}
                            name2={"per capita $"}
                            XaxisShow={true}
                            boundaryGap={true}
                            XaxissplitLine={true}
                            XaxisLine={{ show: false }}
                            XaxisTick={{ show: false }}
                            Xaxisdata={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
                            Yaxismax={60}
                            YaxisInterval={20}
                            YsplitLine={true}
                            splitLineLineStyle={{
                              type: 'dashed'
                            }}
                            YaxisLabel={true}
                            YaxisFormatter={'${value}'}
                            YaxisColor={"#96BF0D"}
                            data={[20, 22, 19, 20, 25, 30, 35, 40]}
                            data2={[40, 22, 19, 20, 10, 20, 18, 15]}
                            linecolorwidth={{ color: "#1861DD", width: 2 }}
                            linecolorwidth2={{ color: "#11B87C", width: 2 }}
                            linecolor1={'#1861DD'}
                            linecolor2={'#11B87C'}
                            LinearGradientcolor1={"rgba(24, 97, 221, 0.32)"}
                            LinearGradientcolor2={"rgba(24, 97, 221, 0)"}
                          />
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="h-[150px] xl:h-[140px] 3xl:h-[6.208vw]">

                          <Linechart
                            currentTheme={currentTheme}

                            grid={{
                              top: "10%",
                              left: "7%",
                              right: "3%",
                              bottom: "30%",
                            }}
                            legend={{
                              show: true,
                              bottom: 0,
                              left: 10,
                              itemWidth: 10,
                              itemHeight: 2,
                              textStyle: {
                                color: "#383874",
                                fontSize: 10
                              },
                            }}
                            name1={"Overall $"}
                            name2={"per capita $"}
                            XaxisShow={true}
                            boundaryGap={true}
                            XaxissplitLine={true}
                            XaxisLine={{ show: false }}
                            XaxisTick={{ show: false }}
                            Xaxisdata={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
                            Yaxismax={60}
                            YaxisInterval={20}
                            YsplitLine={true}
                            splitLineLineStyle={{
                              type: 'dashed'
                            }}
                            YaxisLabel={true}
                            YaxisFormatter={'${value}'}
                            YaxisColor={"#96BF0D"}
                            data={[20, 22, 19, 20, 25, 30, 35, 40]}
                            data2={[40, 22, 19, 20, 10, 20, 18, 15]}
                            linecolorwidth={{ color: "#1861DD", width: 2 }}
                            linecolorwidth2={{ color: "#11B87C", width: 2 }}
                            linecolor1={'#1861DD'}
                            linecolor2={'#11B87C'}
                            LinearGradientcolor1={"rgba(24, 97, 221, 0.32)"}
                            LinearGradientcolor2={"rgba(24, 97, 221, 0)"}
                          />
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
