"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import ColoredLineChart from "../charts/coloredlinechart";
import Linechart from "../charts/linechart";
import Image from "next/image";
import HorizontalStackBarChart from "../charts/horizontalstackbarchart";


const StaffingPopup = ({ visible, onHide }) => {
    const [activeTab, setActiveTab] = useState(1)
    const [checked, setChecked] = useState(true);
    const [selectedCity, setSelectedCity] = useState(null);
    const years = [
        { name: 'School Type 1', code: 'NY' },
        { name: 'School Type 2', code: 'RM' },
        { name: 'School Type 3', code: 'LDN' },
        { name: 'School Type 4', code: 'IST' },
        { name: 'School Type 5', code: 'PRS' }
    ];


    const DimensionViewData = {
        labels: ['High', 'Middle', 'Elementary', 'Pre-K'],
        labels2: ['50', '40', '30', '60'],
        values1: [2000, 4000, 4000, 2000],
        values2: [5000, 3000, 2000, 4000]
    }


    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="w-[80%] xl:w-[74.896vw] customsidebar bg-[#FFF] dark:bg-[#121212]  rounded-l-[16px] 3xl:rounded-[0.833vw]"
                onHide={onHide}
                blockScroll={true}
            >
                <div className="p-[24px] xl:p-[22px] 3xl:p-[1.25vw]">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[#374151] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold">
                                Staffing
                            </div>
                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="grid xl:grid-cols-4 grid-cols-3 gap-[24px] xl:gap-[22px] 3xl:gap-[1.25vw]">
                            <div className="px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] border-l-[8px] border-[#E74D94] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] text-[14px] 3xl:text-[0.833vw] font-medium">Teacher Positions</div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>
                            <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] border-l-[8px] border-[#768FB5] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] text-[14px] 3xl:text-[0.833vw] font-medium">Counselor Positions </div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>
                            <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] border-l-[8px] border-[#5CB6FE] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] text-[14px] 3xl:text-[0.833vw] font-medium">Clerical Positions</div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>
                            <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] border-l-[8px] border-[#35D294] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] text-[14px] 3xl:text-[0.833vw] font-medium">Administrator Positions</div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="bg-[#F5F6F7] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] pb-[24px] xl:pb-[20px] 3xl:pb-[1.25vw] pt-[24px] xl:pt-[20px] 3xl:pt-[1.25vw]">
                            <div className="flex items-center justify-between px-[24px] xl:px-[20px] 3xl:px-[1.25vw]">
                                <div className="text-[#101828] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                    Trend View by Staffing
                                </div>
                            </div>
                            <div className="h-[200px] 3xl:h-[10.417vw]">
                                <Linechart
                                    grid={{
                                        top: "10%",
                                        left: "3%",
                                        right: "3%",
                                        bottom: "20%",
                                    }}
                                    XaxisShow={true}
                                    boundaryGap={false}
                                    XaxissplitLine={true}
                                    XaxisLine={{ show: false }}
                                    XaxisTick={{ show: false }}
                                    Xaxisdata={['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24']}
                                    Yaxismax={30}
                                    YaxisInterval={10}
                                    YsplitLine={true}
                                    splitLineLineStyle={{
                                        type: 'dashed'
                                    }}
                                    YaxisLabel={true}
                                    YaxisFormatter={'{value}'}
                                    YaxisColor={"#96BF0D"}
                                    data={[17, 18, 19, 20, 21, 23, 25, 27, 29, 30, 17, 18, 19, 20, 21, 23, 25, 27, 29, 30, 25, 27, 29, 30]}
                                    data2={[15, 16, 14, 13, 15, 14, 15, 16, 14, 13, 15, 14, 15, 16, 14, 13, 15, 14, 15, 16, 14, 13, 15, 14,]}
                                    linecolorwidth={{ color: "#1861DD52", width: 2 }}
                                    linecolorwidth2={{ color: "#D62C72", width: 2 }}
                                    linecolor2={'#D62C72'}
                                    LinearGradientcolor1={"rgba(24, 97, 221, 0.32) "}
                                    LinearGradientcolor2={"rgba(24, 97, 221, 0)"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[24px] 3xl:mt-[1.25vw]">
                        <div className="grid grid-cols-12 gap-[24px] 3xl:gap-[1.25vw]">
                            <div className="col-span-7">
                                <div className="bg-[#F5F6F7] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">

                                    <div className="flex items-center justify-between">
                                        <div className="text-[#101828] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                            Dimension View
                                        </div>
                                        <div className='customDropdown'>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={years}
                                                optionLabel="name"
                                                placeholder="School Type"
                                                className="w-full xl:w-[140px] 3xl:w-[5.688vw]"
                                            />
                                        </div>
                                    </div>
                                    <div className="h-[359px] 3xl:h-[18.698vw]">
                                        <HorizontalStackBarChart
                                            legend={{
                                                show: true,
                                                bottom: 0,
                                                left: 5,
                                                itemHeight: 10,
                                                itemWidth: 10,
                                                data: [{ name: 'Current year', icon: 'circle', itemStyle: { color: '#1570EF' } },
                                                { name: 'eCast', icon: 'circle', itemStyle: { color: '#BACCE7' } }],
                                                textStyle: {
                                                    color: '#383874',
                                                },
                                            }}
                                            grid={{
                                                left: '2%',
                                                right: '2%',
                                                bottom: '12%',
                                                top: '5%',
                                                containLabel: true
                                            }}
                                            xAxisLabel={{
                                                show: true,
                                                color: '#4B586E',
                                                fontSize: 10,
                                                formatter: '{value}'
                                            }}
                                            yAxisLabel={{
                                                show: true,
                                                color: '#4B586E',
                                                fontSize: 10,
                                                formatter: '{value}'
                                            }}
                                            name={['Current year', 'eCast']}
                                            color={['#BACCE7', '#1570EF']}
                                            label1={{
                                                show: false,
                                                color: '#FFFFFF',
                                                fontSize: 10,
                                                formatter: '{c}',
                                                position: 'insideTop'
                                            }}
                                            yAxisLabel2={{
                                                show: true,
                                                color: '#4B586E',
                                                fontSize: 13,
                                                fontWight: 400,
                                                position: 'right',
                                                backgroundColor: "#FFF",
                                                padding: 6,
                                                borderRadius: 4,
                                                formatter: function (params) {
                                                    if (params >= 50) {
                                                        return ` ${params}% {icon|}`;
                                                    } else return `${params}% {icon2|}`;
                                                },
                                                rich: {
                                                    icon: {
                                                        backgroundColor: { image: "/images/arrow-up.svg" },
                                                        width: 15, height: 15,
                                                    },
                                                    icon2: {
                                                        backgroundColor: { image: "/images/arrow-down.svg" },
                                                        width: 15, height: 15,
                                                    },
                                                },
                                            }}
                                            data={DimensionViewData}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="bg-[#111928] text-white h-full px-[15px] lg:px-[25px] 3xl:px-[1.302vw] py-[15px] 3xl:py-[0.781vw] rounded-[10px] 3xl:rounded-[0.521vw]">
                                    <div className="flex items-center">
                                        <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#fff] bg-[#1570EF] ' : 'text-[#D1D5DB] bg-[#1f2a37]'} rounded-l-[8px]  text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal px-[10px] 3xl:px-[0.521vw] py-[4px] 3xl:py-[0.208vw] cursor-pointer`}>
                                            Top 5 Schools
                                        </div>
                                        <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#fff] bg-[#1570EF]' : 'text-[#D1D5DB] bg-[#1f2a37]'} rounded-r-[8px] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal px-[10px] 3xl:px-[0.521vw] py-[4px] 3xl:py-[0.208vw] cursor-pointer`}>
                                            Bottom 5 Schools
                                        </div>
                                    </div>

                                    <div className="mt-[16px] xl:mt-[14px] 3xl:mt-[0.833vw]">
                                        <table className="customTablePopup w-full">
                                            <thead>
                                                <tr>
                                                    <th colSpan={2}>Logo</th>
                                                    <th>Teacher</th>
                                                    <th>Counselor</th>
                                                    <th>Clerical</th>
                                                    <th>Adm</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-b-[#2B3B4F]">
                                                    <td>
                                                        <Image
                                                            src="/images/school1.png"
                                                            width={22}
                                                            height={22}
                                                            className="3xl:w-[1.146vw] 3xl:h-[1.146vw]"
                                                            alt="school images"
                                                        />
                                                    </td>
                                                    <td>School 1</td>
                                                    <td>852/321</td>
                                                    <td>352/321</td>
                                                    <td>882/888</td>
                                                    <td>882/888</td>
                                                </tr>
                                                <tr className="border-b border-b-[#2B3B4F]">
                                                    <td>
                                                        <Image
                                                            src="/images/horse_icon.svg"
                                                            width={22}
                                                            height={22}
                                                            className="3xl:w-[1.146vw] 3xl:h-[1.146vw]"
                                                            alt="school images"
                                                        />
                                                    </td>
                                                    <td>School 1</td>
                                                    <td>852/321</td>
                                                    <td>352/321</td>
                                                    <td>882/888</td>
                                                    <td>882/888</td>
                                                </tr>
                                                <tr className="border-b border-b-[#2B3B4F]">
                                                    <td>
                                                        <Image
                                                            src="/images/spartan_icon.svg"
                                                            width={22}
                                                            height={22}
                                                            className="3xl:w-[1.146vw] 3xl:h-[1.146vw]"
                                                            alt="school images"
                                                        />
                                                    </td>
                                                    <td>School 1</td>
                                                    <td>852/321</td>
                                                    <td>352/321</td>
                                                    <td>882/888</td>
                                                    <td>882/888</td>
                                                </tr>
                                                <tr className="border-b border-b-[#2B3B4F]">
                                                    <td>
                                                        <Image
                                                            src="/images/egal_icon.svg"
                                                            width={22}
                                                            height={22}
                                                            className="3xl:w-[1.146vw] 3xl:h-[1.146vw]"
                                                            alt="school images"
                                                        />
                                                    </td>
                                                    <td>School 1</td>
                                                    <td>852/321</td>
                                                    <td>352/321</td>
                                                    <td>882/888</td>
                                                    <td>882/888</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Image
                                                            src="/images/austin_icon.svg"
                                                            width={22}
                                                            height={22}
                                                            className="3xl:w-[1.146vw] 3xl:h-[1.146vw]"
                                                            alt="school images"
                                                        />
                                                    </td>
                                                    <td>School 1</td>
                                                    <td>852/321</td>
                                                    <td>352/321</td>
                                                    <td>882/888</td>
                                                    <td>882/888</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default StaffingPopup;
