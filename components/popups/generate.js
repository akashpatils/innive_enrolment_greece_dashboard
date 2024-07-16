"use client";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import StudentDemand from "../../components/charts/studentdemand";
import { useTheme } from "next-themes";
import Image from "next/image";


const GereratePopup = ({ visible, onHide }) => {
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

    return (
        <div>
            <Dialog
                visible={visible}
                // position="right"
                className="w-[80%] xl:w-[74.896vw] customsidebar bg-[#FFF] dark:bg-[#121212] rounded-[16px] 3xl:rounded-[0.833vw]"
                onHide={onHide}
                blockScroll={true}
            >
                <div className="p-[24px] xl:p-[22px] 3xl:p-[1.25vw]">
                    <div className="flex items-center justify-between mb-[40px] 3xl:mb-[2.083vw]">
                        <div>
                            <div className="text-[#101828] dark:text-[#FFFF]  text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-semibold">
                            Generated Insights
                            </div>
                            <div className="text-[#9CA1AB] dark:text-[#EFF8FF]  text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#101828] text-[14px] 3xl:text-[0.729vw] font-medium pb-2">Generate Insights</div>
                        <div className="flex justify-between items-center gap-[24px] 3xl:gap-[1.25vw]">
                            <div className="border border-[#C6CBD2] rounded-[4px] p-[12px] 3xl:p-[0.625vw] text-[rgba(16,24,40,0.80)] text-[14px] 3xl:text-[0.729vw] w-full">
                                Total enrollment trend over years (Include students who enrolled in and out through the year)
                            </div>
                            <div className="text-[14px] xl:text-[12px] 3xl:text-[0.729vw] py-[12px] px-[16px] 3xl:py-[0.625vw] 3xl:px-[0.833vw] justify-end font-medium customgenerate border rounded-[6px] flex text-[#fff]  items-center" >
                                <i className="innivenrolment-stars-svgrepo pr-[8px]"></i>
                                <div className="flex items-center">
                                    Generate
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[16px] xl:mt-[0.833vw]">
                        <div className="bg-[#fff] border border-[#C6CBD2] dark:bg-[#313a46] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] pb-[24px] xl:pb-[20px] 3xl:pb-[1.25vw]">
                            <div className="flex items-center justify-between py-[12px] 3xl:py-[0.625vw] px-[16px] 3xl:px-[0.833vw] border-b border-[#BECDE3]">
                                <div className="text-[#374151] dark:text-[#fff] text-[14px] 3xl:text-[0.729vw] font-semibold">
                                    Student Demand
                                </div>
                                <div className="flex justify-start gap-[16px] gap-[0.833vw]">
                                    <Image src="/images/filter-add.svg"
                                        width={24}
                                        height={24}
                                        // className="3xl:w-[10.417vw] 3xl:h-[4.948vw] xl:w-[9.375vw] xl:h-[4.948vw] "
                                        alt="matriculation img" />
                                    <Image src="/images/more-square.svg"
                                        width={24}
                                        height={24}
                                        // className="3xl:w-[10.417vw] 3xl:h-[4.948vw] xl:w-[9.375vw] xl:h-[4.948vw] "
                                        alt="matriculation img" />
                                </div>
                            </div>
                            <div className="flex flex-start px-[15px] xl:px-[0.781vw]">
                                <div className="flex items-center justify-center bg-[#F5F6F7]  dark:bg-[#313a46] rounded-b-md py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] font-medium text-[12px] xl:text-[0.625vw] text-[#4B586E] dark:text-[#EFF8FF]">Database SQL query </div>
                                <div className="flex items-center justify-center bg-[#F5F6F7]  dark:bg-[#313a46] rounded-b-md py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] font-medium text-[12px] xl:text-[0.625vw] text-[#4B586E] dark:text-[#EFF8FF]">Data in Table Format </div>
                                <div className="flex items-center justify-center bg-[#F5F6F7]  dark:bg-[#313a46] rounded-b-md py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] font-medium text-[12px] xl:text-[0.625vw] text-[#4B586E] dark:text-[#EFF8FF]">Line Chart </div>
                                <div className="flex items-center justify-center bg-[#DAEEFF]  dark:bg-[#313a46] rounded-b-md py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] font-medium text-[12px] xl:text-[0.625vw] text-[#1B458D] dark:text-[#EFF8FF]">Bar Chart </div>
                                <div className="flex items-center justify-center bg-[#F5F6F7]  dark:bg-[#313a46] rounded-b-md py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] font-medium text-[12px] xl:text-[0.625vw] text-[#4B586E] dark:text-[#EFF8FF]">Area Chart </div>
                            </div>
                            <div className="h-[300px]">
                                <StudentDemand />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default GereratePopup;