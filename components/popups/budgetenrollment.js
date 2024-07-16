"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";
import HorizontalStackBarChart from "../charts/horizontalstackbarchart";
import BarLineChart from "../charts/barlinechart";
import { useTheme } from "next-themes";


const BudgetEnrollmentPopup = ({ visible, onHide }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
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

    const TrendViewData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
        values1: [2, 4, 6, 5, 6, 5, 5, 6, 5, 6, 5, 6,],
        values2: [-2, -4, -3, -6, -4, -3, -3, -4, -5.5, -2, -2, -4,],
        values3: [0.1, -0.1, 0.2, 0.3, -0.4, 0.2, -0.1, 0.6, -0.5, 0.6, 0.5, 0.6,]
    }

    const DimensionViewData = {
        labels: ['High', 'Middle', 'Elementary', 'Pre-K'],
        labels2: ['50', '60', '20', '40'],
        values1: [2000, 4000, 4000, 2000],
        values2: [5000, 3000, 2000, 4000]
    }


    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="w-[80%] xl:w-[74.896vw] customsidebar bg-[#FFF] dark:bg-[#121212] rounded-l-[16px] 3xl:rounded-[0.833vw]"
                onHide={onHide}
                blockScroll={true}
            >
                <div className="p-[24px] xl:p-[22px] 3xl:p-[1.25vw]">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[#374151] dark:text-[#FFFF]  text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold">
                                Enrollment
                            </div>
                            <div className="text-[#9CA1AB] dark:text-[#EFF8FF]  text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">
                                Budget Enrollment with Adjustments
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#162B55] px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[12px] xl:py-[10px] 3xl:py-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw]">
                                <div className="flex items-center gap-[12px] 3xl:gap-[0.625vw]">
                                    <div className="text-[#EFF8FF]  text-[16px] xl:text-[15px] 3xl:text-[0.833vw] font-light">Total</div>
                                    <div className="text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">150,000</div>
                                </div>
                                <div className="text-[#D1FAE4] text-[12px] 3xl:text-[0.833vw] font-light text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="grid xl:grid-cols-4 grid-cols-3 gap-[24px] xl:gap-[22px] 3xl:gap-[1.25vw]">
                            <div className="px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] dark:bg-[#313a46] border-l-[8px] border-[#1570EF] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] dark:text-[#FFFF] text-[14px] 3xl:text-[0.833vw] font-medium">Norm</div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] dark:text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564] dark:text-[#6ce6bb] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>
                            <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] dark:bg-[#313a46] border-l-[8px] border-[#263040] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] dark:text-[#FFFF] text-[14px] 3xl:text-[0.833vw] font-medium">GEN ED </div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] dark:text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564]  dark:text-[#6ce6bb] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>
                            <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] dark:bg-[#313a46] border-l-[8px] border-[#D67309] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] dark:text-[#FFFF] text-[14px] 3xl:text-[0.833vw] font-medium">SPED</div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] dark:text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564]  dark:text-[#6ce6bb] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>
                            <div className="p-[16px] xl:p-[14px] 3xl:p-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] dark:bg-[#313a46] border-l-[8px] border-[#768FB5] rounded-[8px] 3xl:rounded-[0.417vw] relative">
                                <div className="text-[#162B55] dark:text-[#FFFF] text-[14px] 3xl:text-[0.833vw] font-medium">Expanded TK</div>
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                    <div className="text-[#162B55] dark:text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">1,250</div>
                                    <div className="text-[#069564]  dark:text-[#6ce6bb] text-[12px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                                </div>
                                <div className="absolute top-2 right-4">
                                    <Checkbox className="customCheckBox" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="bg-[#F5F6F7] dark:bg-[#313a46] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] pb-[24px] xl:pb-[20px] 3xl:pb-[1.25vw] pt-[24px] xl:pt-[20px] 3xl:pt-[1.25vw]">
                            <div className="flex items-center justify-between px-[24px] xl:px-[20px] 3xl:px-[1.25vw]">
                                <div className="text-[#101828]  dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                    Trend View
                                </div>
                            </div>
                            <div className="h-[193px] 3xl:h-[10.052vw]">
                                <BarLineChart
                                    legend={{
                                        show: true,
                                        bottom: 0,
                                        left: 5,
                                        itemHeight: 10,
                                        itemWidth: 10,
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
                                        color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                                        fontSize: 10,
                                        formatter: '{value}'
                                    }}
                                    yAxisLabel={{
                                        show: true,
                                        color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                                        fontSize: 10,
                                        formatter: '{value}K'
                                    }}
                                    name={['Enrollment', 'Adjustment', 'Norm']}
                                    color={['#057A55', '#D62C72', '#1570EF']}
                                    label1={{
                                        show: true,
                                        color: '#FFFFFF',
                                        fontSize: 10,
                                        formatter: '{c}',
                                        position: 'insideTop'
                                    }}
                                    label2={{
                                        show: true,
                                        color: '#FFFFFF',
                                        fontSize: 10,
                                        formatter: '{c}',
                                        position: 'insideBottom'
                                    }}
                                    data={TrendViewData}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[24px] 3xl:mt-[1.25vw]">
                        <div className="grid grid-cols-12 gap-[24px] 3xl:gap-[1.25vw]">
                            <div className="col-span-7">
                                <div className="bg-[#F5F6F7]  dark:bg-[#313a46]  rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">

                                    <div className="flex items-center justify-between">
                                        <div className="text-[#101828]  dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                            Dimension View
                                        </div>
                                        <div className='customDropdown dark:bg-[#374151]'>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={years}
                                                optionLabel="name"
                                                placeholder="School Type"
                                                className="w-full xl:w-[140px] 3xl:w-[5.688vw] dark:bg-[#374151]"
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
                                                { name: 'Prior Year', icon: 'circle', itemStyle: { color: '#BACCE7' } }],
                                                textStyle: {
                                                    color: currentTheme == "dark" ? "#ffff" : '#6C768B',
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
                                                color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                                                fontSize: 10,
                                                formatter: '{value}'
                                            }}
                                            yAxisLabel={{
                                                show: true,
                                                color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                                                fontSize: 10,
                                                formatter: '{value}'
                                            }}
                                            name={['Current year', 'Prior Year']}
                                            color={['#BACCE7', '#1570EF']}
                                            label1={{
                                                show: false,
                                                color: currentTheme == "dark" ? "#ffff" : '#6C768B',
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
                                                    <td>8,520</td>
                                                    <td>5,250</td>
                                                    <td>3,200</td>
                                                    <td>2,500</td>
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
                                                    <td>8,520</td>
                                                    <td>5,250</td>
                                                    <td>3,200</td>
                                                    <td>2,500</td>
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
                                                    <td>8,520</td>
                                                    <td>5,250</td>
                                                    <td>3,200</td>
                                                    <td>2,500</td>
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
                                                    <td>8,520</td>
                                                    <td>5,250</td>
                                                    <td>3,200</td>
                                                    <td>2,500</td>
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
                                                    <td>8,520</td>
                                                    <td>5,250</td>
                                                    <td>3,200</td>
                                                    <td>2,500</td>
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

export default BudgetEnrollmentPopup;
