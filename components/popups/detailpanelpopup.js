"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";
import Linechart from "../charts/linechart";



const DetailPannelPopup = ({ visible, onHide }) => {



    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="w-[80%] lg:w-[50%] xl:w-[25.896vw] customsidebar  bg-[#FFF] dark:bg-[#121212] "
                onHide={onHide}
                blockScroll={true}
            >
                <div className="py-[10px] 3xl:py-[0.521vw]">
                    <div className="px-[14px] 3xl:px-[0.729vw]">
                        <div className="text-[#484848] text-[14px] 3xl:text-[0.729vw] font-normal mb-[10px] 3xl:mb-[0.521vw]">
                            Details panel
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/school_campus.png"
                                width={200}
                                height={329}
                                className="w-full rounded-[6px]"
                                alt="school images"
                            />
                            <div className="absolute -bottom-2 -left-2">
                                <div className="flex justify-center items-center PopupShadow w-[85px] h-[85px] xl:w-[75px] xl:h-[75px] 3xl:w-[4.427vw] 3xl:h-[4.427vw]">
                                    <Image
                                        src="/images/high-school-logo.svg"
                                        width={55}
                                        height={56}
                                        className="w-[55px] h-[56px] xl:w-[45px] xl:h-[46px] 3xl:w-[2.865vw] 3xl:h-[2.917vw] rounded-[6px]"
                                        alt="school images"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-[22px] xl:px-[20px] 3xl:px-[1.146vw] mt-[33px] 3xl:mt-[1.719vw]">
                        <div className="border-b border-b-[#DADADA] pb-[17px] 3xl:pb-[0.885vw]">
                            <div className="text-[#31363F] text-[18px] xl:text-[16px] 3xl:text-[0.938vw] font-medium mb-[14px] 3xl:mb-[0.729vw]">South Los Angeles High School</div>
                            <div className="text-[#31363F] text-[14px] 3xl:text-[0.729vw] font-light"> Dearborn Elementary Charter Academy </div>
                            <div className="text-[#31363F] text-[12px] 3xl:text-[0.729vw] font-light "><i className="innivenrolment-flag mr-[6px] text-[#515151]"></i> 9240 Wish Ave, Northridge, CA 91325</div>
                            <div className="text-[#31363F] text-[12px] 3xl:text-[0.729vw] font-light "><i className="innivenrolment-call mr-[6px] text-[#515151]"></i> (818) 349-4381 / (818) 356-4348</div>
                        </div>
                        <div className="mt-[12px] 3xl:mt-[0.625vw]">
                            <div className="flex items-center justify-between">
                                <div className="text-[#31363F] text-[18px] xl:text-[17px] 3xl:text-[0.938vw] font-medium mb-[14px] 3xl:mb-[0.729vw]">Total Enrollment</div>
                                <div className="">
                                    <div className="text-[#31363F] text-[36px] xl:text-[34px] 3xl:text-[1.875vw] font-bold leading-none">100,023</div>
                                    <div className="text-[#D67309] text-[16px] 3xl:text-[0.833vw] font-normal text-end">LP Var: 12% <i className="innivenrolment-arrow-down-line ml-2"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[150px] xl:h-[140px] 3xl:h-[6.208vw]">

                            <Linechart
                                grid={{
                                    top: "10%",
                                    left: "10%",
                                    right: "3%",
                                    bottom: "30%",
                                }}
                                legend={{
                                    show: false,
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
                                YaxisFormatter={'{value}%'}
                                YaxisColor={"#96BF0D"}
                                data={[20, 22, 19, 20, 25, 30, 35, 40]}
                                linecolorwidth={{ color: "#1861DD", width: 2 }}
                                linecolor1={'#1861DD'}
                                LinearGradientcolor1={"rgba(24, 97, 221, 0.32)"}
                                LinearGradientcolor2={"rgba(24, 97, 221, 0)"}
                            />
                        </div>

                        <div className=" bg-[#F5F6F7] rounded-[8px] 3xl:rounded-[0.417vw] p-[16px] 3xl:p-[0.833vw]">
                            <div className="grid grid-cols-4">
                                <div className="flex flex-col">
                                    <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-normal">Grade 9</div>
                                    <div className="text-[#31363F] text-[16px] 3xl:text-[0.833vw] font-extrabold ">245</div>
                                    <div className="text-[#9CA1AB] text-[10px] 3xl:text-[0.573vw] font-normal">LP Var: <span className="text-[#D62C72]">12%</span></div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-normal">Grade 10</div>
                                    <div className="text-[#31363F] text-[16px] 3xl:text-[0.833vw] font-extrabold ">255</div>
                                    <div className="text-[#9CA1AB] text-[10px] 3xl:text-[0.573vw] font-normal">LP Var: <span className="text-[#D62C72]">12%</span></div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-normal">Grade 11</div>
                                    <div className="text-[#31363F] text-[16px] 3xl:text-[0.833vw] font-extrabold ">260</div>
                                    <div className="text-[#9CA1AB] text-[10px] 3xl:text-[0.573vw] font-normal">LP Var: <span className="text-[#D62C72]">12%</span></div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-normal">Grade 12</div>
                                    <div className="text-[#31363F] text-[16px] 3xl:text-[0.833vw] font-extrabold ">240</div>
                                    <div className="text-[#9CA1AB] text-[10px] 3xl:text-[0.573vw] font-normal">LP Var: <span className="text-[#D62C72]">12%</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[24px] xl:mt-0 3xl:mt-[1.25vw]  flex items-center w-full">
                            <div className="relative">
                                <Image
                                    className="w-[153px] xl:w-[123px] h-[96px] 3xl:w-[7.969vw] 3xl:h-[5vw]"
                                    loading="lazy"
                                    width={153}
                                    height={96}
                                    alt=""
                                    src="/images/shape.svg"
                                />
                                <div className="left-4 bottom-4 absolute">
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold">EL</div>
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">123</div>
                                </div>
                            </div>
                            <div className="relative -ml-3 ">
                                <Image
                                    className="w-[153px] xl:w-[123px] h-[96px] 3xl:w-[7.969vw] 3xl:h-[5vw]"
                                    loading="lazy"
                                    width={153}
                                    height={96}
                                    alt=""
                                    src="/images/sped_img.svg"
                                />
                                <div className="left-5 bottom-4 absolute">
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold">SPED</div>
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">178</div>
                                </div>
                            </div>
                            <div className="relative -ml-3 ">
                                <Image
                                    className=" w-[153px] xl:w-[123px] h-[96px] 3xl:w-[7.969vw] 3xl:h-[5vw]"
                                    width={153}
                                    height={96}
                                    alt=""
                                    src="/images/youth_img.svg"
                                />
                                <div className="left-5 bottom-4 absolute">
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold">Foster Youth</div>
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">85</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 xl:-mt-2 3xl:mt-[0.521vw] flex items-center  w-full">
                            <div className="relative">
                                <Image
                                    className="w-[153px] xl:w-[123px] h-[96px] 3xl:w-[7.969vw] 3xl:h-[5vw]"
                                    width={153}
                                    height={96}
                                    alt=""
                                    src="/images/homeless_img.svg"
                                />
                                <div className="left-4 bottom-4 absolute">
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold">Homeless</div>
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">42</div>
                                </div>
                            </div>
                            <div className="relative -ml-3 ">
                                <Image
                                    className="w-[153px] xl:w-[123px] h-[96px] 3xl:w-[7.969vw] 3xl:h-[5vw]"
                                    width={153}
                                    height={96}
                                    alt=""
                                    src="/images/low_income_img.svg"
                                />
                                <div className="left-5 bottom-4 absolute">
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold">Low Income</div>
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">450</div>
                                </div>
                            </div>
                            <div className="relative -ml-3 ">
                                <Image
                                    className=" w-[153px] xl:w-[123px] h-[96px] 3xl:w-[7.969vw] 3xl:h-[5vw]"
                                    width={153}
                                    height={96}
                                    alt=""
                                    src="/images/title1_img.svg"
                                />
                                <div className="left-5 bottom-4 absolute">
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold">Title 1</div>
                                    <div className="text-white text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">215</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[24px] xl:mt-0 3xl:mt-[1.25vw] bg-[#F5F6F7] xl:p-[14px] 3xl:p-[0.729vw] rounded-[8px] 3xl:rounded-[0.417vw]">
                            <div className="text-[#31363F] text-[18px] xl:text-[16px] 3xl:text-[0.938vw] font-medium pb-[14px] 3xl:pb-[0.729vw] border-b border-b-[#E5E7EB]">Student spending % time in district</div>

                            <div className="mt-[16px] 3xl:mt-[0.833vw]">
                                <div className="grid grid-cols-3 place-content-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="text-[#4B586E] text-[16px] 3xl:text-[0.833vw] font-normal">0 to 50%</div>
                                        <div className="text-[#31363F] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-extrabold ">350</div>
                                        <div className="text-[#069564] text-[11px] xl:text-[9px] 3xl:text-[0.573vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-1"></i></div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="text-[#4B586E] text-[16px] 3xl:text-[0.833vw] font-normal">50 to 75%</div>
                                        <div className="text-[#31363F] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-extrabold ">515</div>
                                        <div className="text-[#D67309] text-[11px] xl:text-[9px] 3xl:text-[0.573vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-down-line ml-1"></i></div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="text-[#4B586E] text-[16px] 3xl:text-[0.833vw] font-normal">{'>'} 75%</div>
                                        <div className="text-[#31363F] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-extrabold ">135</div>
                                        <div className="text-[#069564] text-[11px] xl:text-[9px] 3xl:text-[0.573vw] font-normal">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-1"></i></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                        </div>

                    </div>

                </div>
            </Sidebar>
        </div>
    );
};

export default DetailPannelPopup;
