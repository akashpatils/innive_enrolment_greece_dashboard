"use client";
import React, { useState } from "react";
import Layout from "../../components/layout/pagelayout"
import FilterComponentGeospatial from "../../components/filtercomponent/page";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import MapView from "./mapview";
import DetailPannelPopup from "../../components/popups/detailpanelpopup";

export default function Page() {

  const [DetailPannelPopupShow, setDetailPannelPopupShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const years = [
    { name: 'School Type 1', code: 'NY' },
    { name: 'School Type 2', code: 'RM' },
    { name: 'School Type 3', code: 'LDN' },
    { name: 'School Type 4', code: 'IST' },
    { name: 'School Type 5', code: 'PRS' }
  ];

  const option = {
    legend: {
      show: false,

    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "0%",
    },
    xAxis: {
      type: "value",
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: {
        show: false,
        color: "#4B586E",
        fontSize: 10,
        overflow: "truncate",
        formatter: "{value}",
      },
      axisTick: { show: false },
      inverse: true,
      splitLine: { show: false },
      // data: ["55"],
    },
    series: [
      {
        name: "",
        type: "bar",
        data: [100],
        barWidth: "5",
        itemStyle: { borderRadius: [8, 8, 8, 8] },
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          {
            offset: 0,
            color: "rgba(0, 123, 236, 1)",

          },
          {
            offset: 0.2,
            color: "rgba(50, 199, 101, 1)",
          },
          {
            offset: 0.8,
            color: "rgba(237, 141, 32, 1)",
          },
          {
            offset: 0.9,
            color: "rgba(235, 17, 30, 1)",
          },
        ]),
        label: {
          show: false,
        },
      },

    ],
  };

  return (
    <Layout
      pageTitle="Geospatial"
      parentPageName="Home"
      pageName="Current Page"
    > <div className="relative">
           <MapView/>
      <div className="mt-[22px] xl:mt-[22px] 3xl:mt-[1.146vw]">
 
        <div className="px-[32px] 3xl:px-[1.667vw]">
          <FilterComponentGeospatial />

          <div className="mt-[24px] 3xl:mt-[1.25vw] w-[285px] 3xl:w-[14.844vw] bg-[#FFF] dark:bg-[#374151] p-[17px] 3xl:p-[0.885vw] relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div  onClick={() => {setDetailPannelPopupShow(true)}} className="text-[#31363F] text-[14px] xl:text-[13px] dark:text-[#fff] 3xl:text-[0.729vw] font-normal">My District</div>
                <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] dark:text-[#fff] font-light">Metrics are chosen inside the map.</div>
              </div>
              <Image
                src="/images/eye_icon.svg"
                width={14}
                height={14}
                className="3xl:w-[0.725vw] 3xl:h-[0.725vw]"
                alt="filter"
              />
            </div>
            <div className="mt-[10px] 3xl:mt-[0.523vw] pb-[18px] 3xl:pb-[0.938vw] border-dashed border-b border-b-[#E5E7EB]">
              <div className="px-[15px] xl:px-[14px] 3xl:px-[0.781vw] py-[10px] 3xl:py-[0.521vw] space-y-0 cursor-pointer border border-[#E5E7EB] bg-[#F5F6F7] dark:bg-[#313a46] rounded-[4px]">
                <span className="text-[#4B586E] dark:text-[#fff] text-[10px] font-normal leading-none">
                  Metric
                </span>
                <div className="custDropdownMap triggerDropdown">
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={years}
                    optionLabel="name"
                    placeholder="Students Enrolled"
                    className="w-full dark:bg-[#313a46]"
                  />
                </div>
              </div>
              <div className="h-[20px] mt-2">
                <ReactEcharts option={option} style={{ height: "100%", width: "100%" }} />
              </div>
              <div className="flex justify-between">
                <div className="text-[#9CA1AB] text-[10px] 3xl:text-[0.521vw] dark:text-[#fff]">Lower</div>
                <div className="text-[#9CA1AB] text-[10px] 3xl:text-[0.521vw] dark:text-[#fff]">Greater</div>
              </div>
            </div>
            <div className="mt-[10px] 3xl:mt-[0.523vw] px-[10px] 3xl:px-[0.521vw] border-b border-b-[#E5E7EB] pb-[14px] 3xl:pb-[0.729vw]">
              <div className="flex items-start gap-2 ">
                <Checkbox className="blueCheckBox mt-1"
                  onChange={e => setChecked(e.checked)}
                  checked={checked}></Checkbox>
                <div>
                  <div className="text-[#31363F] text-[14px] xl:text-[13px] 3xl:text-[0.729vw] font-normal dark:text-[#fff]">Show Schools</div>
                  <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Show all the schools in the map.</div>
                  <div className="mt-1 space-y-[5px]">
                    <div className="flex items-center gap-2">
                      <div className="flex justify-center items-center border border-[#FBE8F2] h-[18px] w-[18px] 3xl:h-[0.938vw] 3xl:w-[0.938vw] rounded-full bg-[#FDF2F8]"><span className="text-[#4B586E] text-[10px] xl:text-[10px] 3xl:text-[0.521vw] font-normal ">H</span></div>
                      <div className="text-[#4B586E] text-[10px] xl:text-[10px] 3xl:text-[0.521vw] font-normal dark:text-[#fff]">Middle School</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex justify-center items-center border border-[#BDE2FF] h-[18px] w-[18px] 3xl:h-[0.938vw] 3xl:w-[0.938vw] rounded-full bg-[#EFF8FF]"><span className="text-[#4B586E] text-[10px] xl:text-[10px] 3xl:text-[0.521vw] font-normal">M</span></div>
                      <div className="text-[#4B586E] text-[10px] xl:text-[10px] 3xl:text-[0.521vw] font-normal dark:text-[#fff]">Elementary School</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex justify-center items-center border border-[#A8F2CE] h-[18px] w-[18px] 3xl:h-[0.938vw] 3xl:w-[0.938vw] rounded-full bg-[#ECFDF4]"><span className="text-[#4B586E] text-[10px] xl:text-[10px] 3xl:text-[0.521vw] font-normal">E</span></div>
                      <div className="text-[#4B586E] text-[10px] xl:text-[10px] 3xl:text-[0.521vw] font-normal dark:text-[#fff]">High School</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[18px] 3xl:mt-[0.938vw]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#31363F] text-[14px] xl:text-[13px] 3xl:text-[0.729vw] font-normal dark:text-[#fff]">Auxiliar Layers</div>
                  <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Metrics are chosen inside the map.</div>
                </div>
                <Image
                  src="/images/eye_icon.svg"
                  width={14}
                  height={14}
                  className="3xl:w-[0.725vw] 3xl:h-[0.725vw]"
                  alt="filter"
                />
              </div>
              <div className="mt-[17px] 3xl:mt-[0.885vw]">
                <div className="space-y-[24px] xl:space-y-[20px] 2xl:space-y-[18px] 3xl:space-y-[1.25vw]">
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Other Schools</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">Charter or Other public Schools</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff] dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">School Age Population</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">General Population</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">Household Income</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">Crime Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">Poverty Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">Education Level</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Checkbox className="blueCheckBox"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}></Checkbox>
                    <div>
                      <div className="text-[#31363F] text-[10px] 3xl:text-[0.521vw] font-light dark:text-[#fff]">Census</div>
                      <div className="text-[#31363F] text-[12px] xl:text-[11px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">Employment Rate</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailPannelPopup
        visible={DetailPannelPopupShow}
        onHide={() => {setDetailPannelPopupShow(false)}} 
      />
      </div>
    </Layout>
  );
}
