"use client";
import React, { useState } from "react";
import Layout from "../../components/layout/pagelayout";
import EnrollmentChart from "../../components/charts/enrollment";
import EnrollmentAdjustmentChart from "../../components/charts/enrollmentadjustment";
import BudgetEnrollmentPopup from "../../components/popups/budgetenrollment";
import BarChart from "../../components/charts/horizontalbarchart";


export default function page() {
    const [BudgetEnrollmentPopupShow, setBudgetEnrollmentPopupShow] = useState(false);

    return (
        <>
            <Layout pageTitle="Budget Enrollment and Staffing" parentPageName="Home" pageName="Enrollment">
                <div className="mt-[22px] xl:mt-[22px] 3xl:mt-[1.146vw] ">
                    <div className=" px-[32px] 3xl:px-[1.667vw] ">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[31px] xl:gap-[1.615vw]">
                            <div className="grid grid-cols-12 bg-[#fff]  dark:bg-[#374151] rounded-2xl">
                                <div onClick={() => { setBudgetEnrollmentPopupShow(true) }} className="flex flex-col justify-center items-center gap-[7px] xl:gap-[0.365vw] col-span-3 px-6 2xl-[1.771vw] border-r border-[#E5E7EB] relative">
                                    <div className="absolute right-4 top-2">
                                        <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
                                    </div>

                                    <div className="text-[#374151] dark:text-[#EFF8FF] font-semibold text-[20px]">Enrollment</div>
                                    <div className="text-[#374151]  dark:text-[#EFF8FF] text-[24px] font-bold ">150,000</div>
                                    <div className="flex items-center   dark:text-[#EFF8FF] gap-1 text-[#069564] text-[12px]">LP Var: 12%<i className="innivenrolment-arrow-up-line "></i></div>

                                </div>
                                <div className="col-span-9">
                                    <div className="grid grid-cols-4 gap-4 px-[15px]">
                                        <div className="flex items-center justify-center bg-[#EFF8FF]  dark:bg-[#313a46]  dark:border-[#F5F6F7] rounded-md py-[10px] px-[8px] font-medium text-[12px] text-[#162B55] dark:text-[#EFF8FF]">Norm </div>
                                        <div className="flex items-center justify-center bg-[#F5F6F7]  dark:bg-[#313a46]  dark:border-[#F5F6F7] rounded-md py-[10px] px-[8px] font-normal text-[12px] text-[#9CA1AB] dark:text-[#EFF8FF]">GEN ED </div>
                                        <div className="flex items-center justify-center bg-[#F5F6F7]   dark:bg-[#313a46]  dark:border-[#F5F6F7] rounded-md py-[10px] px-[8px] font-normal text-[12px] text-[#9CA1AB] dark:text-[#EFF8FF]">SPED</div>
                                        <div className="flex items-center justify-center bg-[#F5F6F7]   dark:bg-[#313a46]  dark:border-[#F5F6F7] rounded-md py-[10px] px-[8px] font-normal text-[12px] text-[#9CA1AB] dark:text-[#EFF8FF]">Expanded TK</div>
                                    </div>

                                    <div className="h-[150px]">
                                        <EnrollmentChart />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 bg-[#fff] dark:bg-[#374151] rounded-2xl">
                                <div className=" col-span-3 flex flex-col justify-center items-center gap-[7px] xl:gap-[0.365vw] px-6 2xl-[1.771vw] border-r border-[#E5E7EB] relative ">
                                    <div className="absolute right-4 top-2">
                                        <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
                                    </div>

                                    <div className="text-[#374151] dark:text-[#EFF8FF]  font-semibold text-[20px]">Enrollment Adjustment</div>
                                    <div className="text-[#374151] dark:text-[#EFF8FF] text-[24px] font-bold ">30,000</div>
                                    <div className="flex items-center gap-1 text-[#069564] text-[12px]">LP Var: 12%<i className="innivenrolment-arrow-up-line "></i></div>

                                </div>
                                <div className="col-span-9">
                                    <div className="grid grid-cols-4 gap-4 px-[15px] xl:px-[0.781vw]">
                                        <div className="flex items-center justify-center bg-[#EFF8FF]  dark:bg-[#313a46] rounded-md py-[10px] xl:py-[0.521vw] px-[8px] xl:px-[0.417vw] font-medium text-[12px] xl:text-[0.625vw]text-[#374151] dark:text-[#EFF8FF]">Age Ineligible </div>
                                        <div className="flex items-center justify-center bg-[#EFF8FF]  dark:bg-[#313a46] rounded-md py-[10px] xl:py-[0.521vw] px-[8px] xl:px-[0.417vw] font-medium text-[12px] xl:text-[0.625vw] text-[#374151] dark:text-[#EFF8FF]">Absenses</div>
                                        <div className="  bg-[#EFF8FF]  dark:bg-[#313a46] rounded-md py-[10px] xl:py-[0.521vw] px-[8px] xl:px-[0.417vw] font-medium text-[12px] xl:text-[0.625vw] text-[#374151] dark:text-[#EFF8FF]">Enrollment in one Course</div>
                                        <div className="flex items-center justify-center  bg-[#EFF8FF]  dark:bg-[#313a46] rounded-md py-[10px] xl:py-[0.521vw] px-[8px] xl:px-[0.417vw] font-medium text-[12px] xl:text-[0.625vw]  text-[#374151] dark:text-[#EFF8FF]">Duplicates</div>
                                    </div>
                                    <div className="h-[150px]">
                                        <EnrollmentAdjustmentChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
                            <div className="bg-[#fff] dark:bg-[#374151] rounded-lg px-4 pt-4 flex flex-col gap-2">
                                <div className="text-[#4B586E] dark:text-[#EFF8FF] font-medium text-[14px] xl:text-[0.729vw]">% of actual enrollment to forecast</div>
                                <div className="flex justify-center items-center text-[#374151] dark:text-[#EFF8FF] text-[32px] font-bold">1,250</div>
                                <div className="grid grid-cols-2 border-t border-[#E5E7EB] py-[8px] xl:py-[0.417vw] px-[16px] xl:px-[0.833vw]">
                                    <div className="flex justify-center items-center font-medium text-[#162B55] dark:text-[#EFF8FF] dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw] border-r border-[#E5E7EB]">Prior Day 1,000 </div>
                                    <div className="flex justify-center items-center font-medium text-[#162B55] dark:text-[#EFF8FF] dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw]">Prior Week 1,000</div>
                                </div>
                            </div>
                            <div className="bg-[#fff] dark:bg-[#374151] rounded-lg px-4 pt-4 flex flex-col gap-2">
                                <div className="text-[#4B586E] dark:text-[#EFF8FF] font-medium text-[14px] xl:text-[0.729vw]">Absences (1 to 12 days)</div>
                                <div className="flex justify-center items-center text-[#374151] dark:text-[#EFF8FF] dark:text-[#EFF8FF] text-[32px] font-bold">1,250</div>
                                <div className="grid grid-cols-2 border-t border-[#E5E7EB] py-[8px] xl:py-[0.417vw] px-[16px] xl:px-[0.833vw]">
                                    <div className="flex justify-center items-center font-medium text-[#162B55] dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw] border-r border-[#E5E7EB]">Prior Day 1,000 </div>
                                    <div className="flex justify-center items-center font-medium  text-[#162B55] dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw]">Prior Week 1,000</div>
                                </div>
                            </div>
                            <div className="bg-[#fff] dark:bg-[#374151] rounded-lg px-4 pt-4 flex flex-col gap-2">
                                <div className="text-[#4B586E]  dark:text-[#EFF8FF] font-medium text-[14px] xl:text-[0.729vw]">Unprocessed No Shows</div>
                                <div className="flex justify-center items-centertext-[#374151] dark:text-[#EFF8FF]  text-[32px] font-bold">825</div>
                                <div className="grid grid-cols-2 border-t border-[#E5E7EB] py-[8px] xl:py-[0.417vw] px-[16px] xl:px-[0.833vw]">
                                    <div className="flex justify-center items-center font-medium  text-[#162B55] dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw] border-r border-[#E5E7EB]">Prior Day 1,000 </div>
                                    <div className="flex justify-center items-center font-medium  text-[#162B55] dark:text-[#EFF8FF]  text-[12px] xl:text-[0.625vw]">Prior Week 1,000</div>
                                </div>
                            </div>
                            <div className="bg-[#fff] dark:bg-[#374151] rounded-lg px-4 pt-4 flex flex-col gap-2">
                                <div className="text-[#4B586E] dark:text-[#EFF8FF] font-medium text-[14px] xl:text-[0.729vw]">Manual Adjustments</div>
                                <div className="flex justify-center items-center text-[#374151] dark:text-[#EFF8FF] text-[32px] font-bold">1,250</div>
                                <div className="grid grid-cols-2 border-t border-[#E5E7EB] py-[8px] xl:py-[0.417vw] px-[16px] xl:px-[0.833vw]">
                                    <div className="flex justify-center items-center font-medium text-[#162B55]  dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw] border-r border-[#E5E7EB]">Prior Day 1,000 </div>
                                    <div className="flex justify-center items-center font-medium text-[#162B55]  dark:text-[#EFF8FF] text-[12px] xl:text-[0.625vw]">Prior Week 1,000</div>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => { setBudgetEnrollmentPopupShow(true) }} className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[16px] xl:gap-[0.833vw] bg-[#10232F] rounded-lg mt-6 mb-8 cursor-pointer">
                            <div className="col-span-12 xl:col-span-3 md:col-span-6 staffing-img rounded-l-lg">
                                <div className="relative ">
                                    <div className="">
                                        <div className="absolute top-0 w-full pt-[57px] xl:pt-[2.969vw] px-[49px] xl:px-[2.552vw] w-[386px] 3xl:w-[20.104vw]">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[#fff] text-[32px] xl:text-[32px] 3xl:text-[1.667vw] font-semibold"> Staffing </h3>
                                                <div className="relative ">
                                                    <i className="innivenrolment-minimize-maximize text-[18px] text-[#fff]"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 md:col-span-6 py-5  pr-[32px] 3xl:pr-[1.667vw] pl-[16px] 3xl:pl-[0.833vw]">
                                <div className="grid xl:grid-cols-12 md:grid-cols-12 grid-cols-12 gap-[16px] xl:gap-[0.833vw] ">
                                    <div className="col-span-12 md:col-span-12 xl:col-span-6 slant-container custom-b bg-[linear-gradient(180deg,rgba(12,63,139,0.63)0%,rgba(3,17,37,0.63)100%)] rounded-lg">
                                        <div className="py-[17px] px-[20px]">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[#fff] text-[16px] xl:text-[0.938vw] font-semibold flex items-center">
                                                    Teacher Positions
                                                </h3>
                                                <div className="gap-[16px] items-center">
                                                    <div className="text-[#fff] text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">
                                                        Position Gain/Loss
                                                    </div>
                                                    <span className="text-[#fff] text-[16px] xl:text-[0.938vw] font-normal">
                                                        163<span className="text-[#069564]">
                                                            <i className="innivenrolment-arrow-up-line text-[14px] ml-1"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h-[32px] xl:h-[1.667vw] my-[10px]">
                                                <BarChart />
                                            </div>
                                            <div className="flex justify-start gap-8 items-center mt-3">
                                                <div className="border-l border-strok border-[#627A9F] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">Norm Positions</div>
                                                </div>
                                                <div className="border-l border-strok border-[#D62C72] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">eCast Positions</div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-12 xl:col-span-6 slant-container1 custom-b1 bg-[linear-gradient(180deg,rgba(12,63,139,0.63)0%,rgba(3,17,37,0.63)100%)] rounded-lg">
                                        <div className="py-[17px] px-[20px]">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[#fff] text-[16px] xl:text-[0.938vw] font-semibold flex items-center">
                                                    Counselor Positions
                                                </h3>
                                                <div className="gap-[16px] items-center">
                                                    <div className="text-[#fff] text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">
                                                        Position Gain/Loss
                                                    </div>
                                                    <span className="text-[#fff] text-[16px] xl:text-[0.938vw] font-normal">
                                                        187<span className="text-[#069564]">
                                                            <i className="innivenrolment-arrow-up-line text-[14px] ml-1"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h-[32px] xl:h-[1.667vw] my-[10px]">
                                                <BarChart />
                                            </div>
                                            <div className="flex justify-start gap-8 items-center mt-3">
                                                <div className="border-l border-strok border-[#627A9F] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">Norm Positions</div>
                                                </div>
                                                <div className="border-l border-strok border-[#D62C72] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">eCast Positions</div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-12 xl:col-span-6 slant-container custom-b bg-[linear-gradient(180deg,rgba(12,63,139,0.63)0%,rgba(3,17,37,0.63)100%)] rounded-lg">
                                        <div className="py-[17px] px-[20px]">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[#fff] text-[16px] xl:text-[0.938vw] font-semibold flex items-center">
                                                    Clerical Positions
                                                </h3>
                                                <div className="gap-[16px] items-center">
                                                    <div className="text-[#fff] text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">
                                                        Position Gain/Loss
                                                    </div>
                                                    <span className="text-[#fff] text-[16px] xl:text-[0.938vw] font-normal">
                                                        163<span className="text-[#069564]">
                                                            <i className="innivenrolment-arrow-up-line text-[14px] ml-1"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h-[32px] xl:h-[1.667vw] my-[10px]">
                                                <BarChart />
                                            </div>
                                            <div className="flex justify-start gap-8 items-center mt-3">
                                                <div className="border-l border-strok border-[#627A9F] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">Norm Positions</div>
                                                </div>
                                                <div className="border-l border-strok border-[#D62C72] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">eCast Positions</div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-12 xl:col-span-6 slant-container1 custom-b1 bg-[linear-gradient(180deg,rgba(12,63,139,0.63)0%,rgba(3,17,37,0.63)100%)] rounded-lg">
                                        <div className="py-[17px] px-[20px]">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[#fff] text-[16px] xl:text-[0.938vw] font-semibold flex items-center">
                                                    Administrator Positions
                                                </h3>
                                                <div className="gap-[16px] items-center">
                                                    <div className="text-[#fff] text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">
                                                        Position Gain/Loss
                                                    </div>
                                                    <span className="text-[#fff] text-[16px] xl:text-[0.938vw] font-normal">
                                                        163<span className="text-[#069564]">
                                                            <i className="innivenrolment-arrow-up-line text-[14px] ml-1"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h-[32px] xl:h-[1.667vw] my-[10px]">
                                                <BarChart />
                                            </div>
                                            <div className="flex justify-start gap-8 items-center mt-3">
                                                <div className="border-l border-strok border-[#627A9F] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">Norm Positions</div>
                                                </div>
                                                <div className="border-l border-strok border-[#D62C72] text-white pl-2">
                                                    <div className="text-[16px] xl:text-[0.938vw]">17,923</div>
                                                    <div className="text-[11px] xl:text-[0.573vw] 3xl:text-[0.573vw]">eCast Positions</div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <div onClick={() => { setTotalEnrollmentPopupShow2(true) }} className="bg-[#fff] xl:p-[14px] 3xl:p-[0.729vw] rounded-lg mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]"> */}
                            </div>
                        </div>
                    </div>
                </div>


                <BudgetEnrollmentPopup
                    visible={BudgetEnrollmentPopupShow}
                    onHide={() => { setBudgetEnrollmentPopupShow(false) }}
                />

            </Layout>
        </>
    )
}
