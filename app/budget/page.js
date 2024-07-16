"use client";
import Image from "next/image";
import React, { useState } from "react";
import Enrollment from "../../components/popups/enrollmentpopup";
import TotalEnrollment from "../../components/popups/totalenrollmentpupup";
import StudentSpending from "../../components/popups/studentspendingpopup";
import Layout from '../../components/layout/pagelayout'
import GradeRetentionRateChart from "../../components/charts/graderetentionratechart";
import TotalEnrollmentChart from "../../components/charts/totalenrollment";
import HorizontalStackBarChart from "../../components/charts/horizontalstackbarchart";
import Singlehorizontalbarchart from "../../components/charts/singlehorizontalbarchart";
import * as echarts from 'echarts';
import EChartsReact from "echarts-for-react";
import BarChart from "../../components/charts/horizontalbarchart";


export default function Budget() {

  const [EnrollmentPopupShow, setEnrollmentPopupShow] = useState(false);
  const [TotalEnrollmentPopupShow2, setTotalEnrollmentPopupShow2] = useState(false);
  const [StudentSpendingPopupShow, setStudentSpendingPopupShow] = useState(false);
  return (
    <>
      <Layout
        pageTitle="Budget Enrolment and Staffing"
        parentPageName="Home"
        pageName="Enrollment">
        <div className="mt-[22px] xl:mt-[22px] 3xl:mt-[1.146vw]">
          <div className=" px-[32px] 3xl:px-[1.667vw]">
            <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[16px] xl:gap-[0.833vw] bg-[#10232F] rounded-lg ">
              <div className="col-span-12 xl:col-span-3 md:col-span-6 staffing-img rounded-l-lg">
                <div className="relative ">
                  <div className="">
                    {/* <Image
                      src="/images/staffing.png"
                      width={386}
                      height={450}
                      className="3xl:w-[20.104vw] 3xl:h-[100%] rounded-l-lg"
                      alt="Staffing"
                    /> */}
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
      </Layout>
    </>
  );
}
