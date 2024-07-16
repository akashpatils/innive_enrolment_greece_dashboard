"use client"
import React, { useState } from "react";
import Layout from '../../components/layout/pagelayout'
import { InputTextarea } from "primereact/inputtextarea";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Dropdown } from "primereact/dropdown";
import MultiplebarWithLineChart from "../../components/charts/multiplebarwithlinechart";
import Piechart from "../../components/charts/piechart";
import { useTheme } from "next-themes";
import TotalEnrolled from "./tab1";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import Tab5 from "./tab5";
import Tab6 from "./tab6";
import Tab8 from "./tab8";
import GereratePopup from "../../components/popups/generate";


export default function Page() {
  const [value, setValue] = useState('');
  const [activeTab, setActiveTab] = useState(1);

  const [GereratePopupShow, setGereratePopupShow] = useState(false);

  return (
    <>
      <Layout
        pageTitle="Business Insights"
        parentPageName="Home"
        pageName="Enrollment"
      >
        <div className='grid grid-cols-11 gap-6 pb-[24px] xl:pb-[24px] 3xl:pb-[1.354vw] px-[24px] xl:px-[24px] 3xl:px-[1.354vw] pt-[120px] lg:pt-[1.563vw] 2xl:pt-[1.563vw]'>
          <div className='col-span-11 md:col-span-3'>
            <div className="p-[20px] xl:p-[20px] 3xl:p-[1.146vw] rounded-[6px] dark:bg-[#374151] bg-[#fff] h-full">
              <div>
                <div className="text-[17px] xl:text-[17px] 3xl:text-[0.938vw] text-[#383874]  dark:text-[#F5F6F7] pb-[6px] font-semibold">
                  Generate Insights
                </div>
                <div className="">
                  <InputTextarea autoResize value={value} className="w-full placeholder:text-[12px] placeholder:xl:text-[15px] custtextarea  dark:bg-[#dfe0e4]" placeholder="Write your query to generate the insights..." onChange={(e) => setValue(e.target.value)} rows={3} cols={30} />
                </div>
                <div className="flex justify-start py-[6px]">
                  <div className="text-[12px] xl:text-[12px] 3xl:text-[0.625vw] py-[6px]  px-[16px] xl:px-[16px] 3xl:px-[0.833vw] justify-end  customgenerate border rounded-[6px] flex text-[#fff]  items-center" >
                    <i className="innivenrolment-stars-svgrepo pr-[8px]"></i>
                    <div onClick={() => { setGereratePopupShow(true) }} className="flex items-center">
                      Generate
                    </div>
                  </div>
                </div>
                <div className="py-[16px] xl:py-[16px] 3xl:py-[0.833vw] text-[16px] xl:text-[17px] 3xl:text-[0.938vw] font-semibold text-[#383874] ">
                  Enrollment Insights
                </div>

                <ScrollPanel style={{ width: '100%' }} >
                  <div>

                    <button onClick={() => setActiveTab(1)} className={` ${activeTab === 1
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A]  dark:text-[#000]   dark:bg-[#dfe0e4]"
                      } text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px]  text-left w-full`}>
                      Total Enrollment Trend over years (include students who enrolled in and out through the year)
                    </button>
                    <button onClick={() => setActiveTab(2)} className={`${activeTab === 2
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A]  dark:text-[#000]   dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      Schools with highest movement of students to Charter / private schools (Top 5 across years so far)
                    </button>
                    <button onClick={() => setActiveTab(3)} className={`${activeTab === 3
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A]   dark:text-[#000]  dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      Schools with % change above 5%
                      over 5 years
                    </button>
                    <button onClick={() => setActiveTab(4)} className={`${activeTab === 4
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A]  dark:text-[#000]   dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      % of students graduating through district Schools (Elementary to Middle) {"->"} across all past years
                    </button>
                    <button onClick={() => setActiveTab(5)} className={`${activeTab === 5
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[rgb(83,86,90)]   dark:text-[#000]  dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      % of students graduating through district Schools (Middle to High) {"->"} across all
                      past years
                    </button>
                    <button onClick={() => setActiveTab(6)} className={`${activeTab === 6
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A]  dark:text-[#000]   dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      % of students graduating through district Schools (Elementary although High)
                    </button>
                    <button disabled onClick={() => setActiveTab(7)} className={`${activeTab === 7
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A] dark:text-[#000] dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      % of students from preschools joining district Elementary schools
                      past years
                    </button>
                    <button onClick={() => setActiveTab(8)} className={`${activeTab === 8
                      ? "text-[#FFF] bg-[#383874]"
                      : "bg-[#FFF] text-[#53565A]  dark:text-[#000]   dark:bg-[#dfe0e4]"
                      }   text-[12px] xl:text-[13px] 3xl:text-[0.729vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] bg-[#383874] rounded-[8px] text-left w-full`}>
                      Enrollment projection in next 3/5/10 years
                    </button>
                  </div>
                </ScrollPanel>
              </div>
            </div>

          </div>
          <div className='col-span-8 md:col-span-8'>
            {activeTab === 1 && <Tab1 />}
            {activeTab === 2 && <Tab2 />}
            {activeTab === 3 && <Tab3 />}
            {activeTab === 4 && <Tab4 />}
            {activeTab === 5 && <Tab5 />}
            {activeTab === 6 && <Tab6 />}
            {activeTab === 8 && <Tab8 />}

          </div>

          <GereratePopup
            visible={GereratePopupShow}
            onHide={() => { setGereratePopupShow(false) }}
          />

        </div>
      </Layout>
    </>
  )
}