"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Enrollment from "../../components/popups/enrollmentpopup";
import TotalEnrollment from "../../components/popups/totalenrollmentpupup";
import StudentSpending from "../../components/popups/studentspendingpopup";

import GradeRetentionRateChart from "../../components/charts/graderetentionratechart";
import TotalEnrollmentChart from "../../components/charts/totalenrollment";
import { sortBasedOnPercentage } from "../../components/utils";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTotalEnrollment, fetchEarlyK12Adult, fetchEnrollmentSplitup, fetchContinutingStudents, fetchNewlyEnrolled,
  fetchNew, fetchReentered, fetchTransferringwithinDistrict, fetchTransferredOutOfDistrict, fetchDropout, fetchEll,
  fetchTotalenrollmenttrendview, fetchTotalenrollmentDimensionview, fetcTopSchoolsGaining, fetcBottomSchoolsLosing,
  fetcEarlyEDK12AdultED, fetcMatriculation, fetchEco_Disadvantage,
  fetchFemale_Male,
  fetchEnrollment_HISPANIC,
  fetchGrade_Retension_rate,
  fetchGrade_Retension_rate_Chart,
  fetchStudent_Retatining_Over_Years,
  fetchStudentSpendingtimeInDistrict
} from "../../redux/slices/Overview";
import LoaderContainer from "../../components/LoaderContainer";
import getLPVarDetails, { TrendTile, TotalEnrollmentSubTiles, TopSchoolBottomSchool, MatriculationComponent, formatNumberWithCommas, sortDataByMonthOrder } from "../../components/utils";

export default function Overview() {
  // Redux
  // State
  const Total_Enrollment = useSelector(state => state.Overview.TotalEnrollment)
  const TotalEnrollmentloading = useSelector(state => state.Overview.TotalEnrollmentloading)

  const Early_K12_Adult = useSelector(state => state.Overview.EarlyK12Adult)
  const Early_K12_Adultloading = useSelector(state => state.Overview.EarlyK12Adultloading)
  const Enrollment_Splitup = useSelector(state => state.Overview.EnrollmentSplitup)
  const EnrollmentSplituploading = useSelector(state => state.Overview.EnrollmentSplituploading)
  const Top_School_Gaining = useSelector(state => state.Overview.TopSchoolsGaining)
  const TopSchoolGainingloading = useSelector(state => state.Overview.TopSchoolsGainingloading)
  const Bottom_School_Losing = useSelector(state => state.Overview.BottomSchoolsLosing)
  const BottomSchoolLosingloading = useSelector(state => state.Overview.BottomSchoolsLosingloading)
  const Ell = useSelector(state => state.Overview.Ell)
  const Ellloading = useSelector(state => state.Overview.Ellloading)
  const Eco_Disadvantage = useSelector(state => state.Overview.Eco_Disadvantage)
  const Eco_Disadvantageloading = useSelector(state => state.Overview.Eco_Disadvantageloading)
  const Enrollment_HISPANIC = useSelector(state => state.Overview.Enrollment_HISPANIC)
  const Enrollment_HISPANICloading = useSelector(state => state.Overview.Enrollment_HISPANICloading)
  const Female_Male = useSelector(state => state.Overview.Female_Male)
  const Female_Maleloading = useSelector(state => state.Overview.Female_Maleloading)

  const EarlyEDK12AdultED = useSelector(state => state.Overview.EarlyEDK12AdultED)
  const EarlyEDK12AdultEDloading = useSelector(state => state.Overview.EarlyEDK12AdultEDloading)

  const Matriculation = useSelector(state => state.Overview.Matriculation)
  const Matriculationloading = useSelector(state => state.Overview.Matriculationloading)

  const Grade_Retension_rate = useSelector(state => state.Overview.Grade_Retension_rate)
  const Grade_Retension_rateloading = useSelector(state => state.Overview.Grade_Retension_rateloading)

  const Grade_Retension_rate_Chart = useSelector(state => state.Overview.Grade_Retension_rate_Chart)
  const Grade_Retension_rate_Chartloading = useSelector(state => state.Overview.Grade_Retension_rate_Chartloading)

  const Student_Retatining_Over_Years = useSelector(state => state.Overview.Student_Retatining_Over_Years)
  const Student_Retatining_Over_Yearsloading = useSelector(state => state.Overview.Student_Retatining_Over_Yearsloading)

  const StudentSpendingtimeInDistrict = useSelector(state => state.Overview.StudentSpendingtimeInDistrict)
  const StudentSpendingtimeInDistrictloading = useSelector(state => state.Overview.StudentSpendingtimeInDistrictloading)

  const sortedStudentSpendingtimeInDistrictData = sortBasedOnPercentage(StudentSpendingtimeInDistrict);
  // fetch
  const dispatch = useDispatch();

  const handleReports = (params) => {
    // integrated reports
    dispatch(fetchTotalEnrollment(params))
    dispatch(fetchEco_Disadvantage(params))
    dispatch(fetchGrade_Retension_rate(params))
    dispatch(fetchStudent_Retatining_Over_Years(params))
    dispatch(fetchGrade_Retension_rate_Chart(params))
    dispatch(fetchDropout(params))
    dispatch(fetchFemale_Male(params))
    dispatch(fetchEnrollment_HISPANIC(params))
    dispatch(fetchNewlyEnrolled(params))
    dispatch(fetchContinutingStudents(params))
    dispatch(fetchEll(params))
    dispatch(fetcTopSchoolsGaining(params))
    dispatch(fetcBottomSchoolsLosing(params))
    dispatch(fetcEarlyEDK12AdultED(params))
    dispatch(fetcMatriculation(params))
    dispatch(fetchStudentSpendingtimeInDistrict(params))
    // end integrated reports

    // Reports not found till now
    dispatch(fetchEarlyK12Adult(params))
    dispatch(fetchEnrollmentSplitup(params))
    dispatch(fetchReentered(params))
    dispatch(fetchNew(params))
    dispatch(fetchTransferringwithinDistrict(params))
    dispatch(fetchTransferredOutOfDistrict(params))
    dispatch(fetchTotalenrollmenttrendview(params))
    dispatch(fetchTotalenrollmentDimensionview(params))

    // end reports not found till now
  }

  useEffect(() => {
    const bodyParams = {
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
    }

    handleReports(bodyParams)
  }, [])
 
  function formatTitle(title) {
    if (!title) return '';
  
    const firstLetter = title.charAt(0);
    const restOfString = title.slice(1);
  
    // Insert a space after the first letter and convert the next character to lowercase
    const formattedTitle = firstLetter + ' ' + restOfString.charAt(0).toLowerCase() + restOfString.slice(1);
    
    return formattedTitle;
  }


  // Redux End

  // Early_K12_Adult Data
  const [EarlyK12Adult, setEarlyK12Adult] = useState({})
  useEffect(() => {
    if (!Early_K12_Adultloading) {
      setEarlyK12Adult(Early_K12_Adult.reduce((acc, item) => {
        acc[item.GRADE] = Object.entries(item).reduce((acc, [key, value]) => {
          if (key !== "GRADE") {
            acc[key] = value;
          }
          return acc;
        }, {})
        return acc;
      }, {}))
    }
  }, [Early_K12_Adult])
  // Early_K12_Adult Data END

  const [EnrollmentPopupShow, setEnrollmentPopupShow] = useState(false);
  const [TotalEnrollmentPopupShow2, setTotalEnrollmentPopupShow2] = useState(false);
  const [StudentSpendingPopupShow, setStudentSpendingPopupShow] = useState(false);

  let femaleCount = 0;
  let maleCount = 0;

  Female_Male.forEach(student => {
    if (student.STUDENT_GENDER === "Female") {
      femaleCount = student.STUDENT_COUNT;
    } else if (student.STUDENT_GENDER === "Male") {
      maleCount = student.STUDENT_COUNT;
    }
  });

  return (
    <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[16px] xl:gap-[0.833vw] pt-[22px] xl:pt-[22px] 3xl:pt-[1.146vw] ">
      <div className="col-span-8">
        <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[16px] xl:gap-[0.833vw]">
          <div className="col-span-7">
            <div className="dark:bg-[#374151] bg-[#fff] p-[14px] xl:p-[14px] 3xl:p-[0.729vw] rounded-lg ">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] dark:border-[#fff]">
                <h3 className="text-[#374151] text-[16px] dark:text-[#fff] xl:text-[18px] 3xl:text-[0.938vw] font-semibold flex items-center">
                  Total Enrollment{" "}
                </h3>
                <LoaderContainer loading={TotalEnrollmentloading} width={"50%"} height={"30px"} className="mb-3 dark:bg-[#374151]">
                  <div className="flex gap-[16px] items-center">
                    <div className="text-[#1570EF] text-[30px] xl:text-[32px] 3xl:text-[1.875vw] font-bold">
                      {formatNumberWithCommas(Total_Enrollment[0]?.TOTAL_ENROLLMENT) || 0}
                    </div>
                    <span className="text-[#9CA1AB] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal">
                      LP Var:{" "}
                      {(Total_Enrollment[0]?.LY_VAR > 0) ? <span className="text-[#069564]">
                        {`${Total_Enrollment[0]?.LY_VAR?.toFixed(0)}%`}{" "}
                        <i className="innivenrolment-arrow-up-line text-[14px]"></i>
                      </span> :
                        (Total_Enrollment[0]?.LY_VAR == (0 || null || undefined)) ? <span className="text-[#1570EF]">
                          0%{" "}
                        </span> :
                          <span className="text-[#951406]">
                            {`${Total_Enrollment[0]?.LY_VAR?.toFixed(0)}%`}{" "}
                            <i className="innivenrolment-arrow-up-line text-[14px]"></i>
                          </span>}
                    </span>
                    <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151] hover:POI" onClick={() => { setEnrollmentPopupShow(true) }}></i>

                  </div>
                </LoaderContainer>

              </div>
              <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                <div className="total_bg  h-[230px] xl:h-[230px] 3xl:h-[14.583vw] dark:bg-[#374151] ">
                  <LoaderContainer loading={EnrollmentSplituploading} width={"100%"} height={"220px"} className="dark:bg-[#374151]">
                    <TotalEnrollmentChart data={Enrollment_Splitup} />
                  </LoaderContainer>

                </div>

              </div>
              <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw] early_edk_details">
                <LoaderContainer loading={EarlyEDK12AdultEDloading} width={"100%"} height={"120px"} className=" dark:bg-[#374151]">
                  <div className="bg-[#F5F6F7] dark:bg-[#3D485A] rounded-lg p-[16px] xl:p-[16px] 3xl:p-[0.833vw] hover:bg-[#EFF8FF] cursor-pointer h-[110px]">
                    <div className="relative ">
                      {
                        EarlyEDK12AdultED?.map((x, i) => {
                          let getLength = EarlyEDK12AdultED?.length
                          let imagePath = '';
                          let classes = ''
                          if (x?.GRADE === "Early_ed") {
                            imagePath = '/images/K12_bgnew.png'
                            classes = 'absolute left-0 first_tile'
                          } else if (x?.GRADE === "K12") {
                            imagePath = '/images/early_ed_bg.png'
                            getLength > 2 ?
                              classes = 'absolute left-[155px] xl:left-[135px]  3xl:left-[180px] ' :
                              classes = 'absolute right-[35%] second_tile'

                          } else {
                            imagePath = '/images/adult_ed_bg.png'
                            classes = 'absolute right-[46px]'
                          }
                          return <TotalEnrollmentSubTiles title={x?.GRADE} value={x?.["SUM(STUDENT_COUNT)"] || 0} classes={classes} imagePath={imagePath} />
                        })
                      }
                      {/* <TotalEnrollmentSubTiles title="Early Ed" value={EarlyK12Adult?.Early_ed?.TOTAL_ENROLLMENT || 0} classes="absolute left-0" imagePath="/images/K12_bgnew.png" />
                      <TotalEnrollmentSubTiles title="K12" value={EarlyK12Adult?.Early_ed?.TOTAL_ENROLLMENT || 0} classes="absolute left-[135px] xl:left-[135px]  3xl:left-[180px]" imagePath=i"mages/early_ed_bg.png" />
                      <TotalEnrollmentSubTiles title="Adult Ed" value={EarlyK12Adult?.TOTAL_ENROLLMENT || 0} classes="absolute right-[46px]" imagePath="/images/adult_ed_bg.png" /> */}
                      <div className="absolute right-2 top-9">
                        {/* <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i> */}
                      </div>
                    </div>
                  </div>
                </LoaderContainer>
              </div>
              <div className="mt-[10px] xl:mt-[10px] 3xl:mt-[0.625vw] top_tilek">
                <LoaderContainer loading={Female_Maleloading} className={"dark:bg-[#3D485A] rounded-lg p-[16px] xl:p-[16px] 3xl:p-[0.833vw] hover:bg-[#EFF8FF] cursor-pointer h-[110px]"}>

                  <div className="bg-[#F5F6F7] dark:bg-[#3D485A] rounded-lg p-[16px] xl:p-[16px] 3xl:p-[0.833vw] hover:bg-[#EFF8FF] cursor-pointer h-[110px]">

                    <div className="relative ">


                      <TotalEnrollmentSubTiles title="Male" value={maleCount} classes="absolute left-0 male_count" imagePath="/images/residents_img.png" imageClasses="xl:w-[13.542vw] xl:h-[4.948vw] 3xl:w-[15.104vw] 3xl:h-[4.948vw]" />
                      <TotalEnrollmentSubTiles title="Female" value={femaleCount} classes="absolute 3xl:left-[270px] left-[175px] xl:left-[191px] female_count" imagePath="/images/non-resident_img.png" imageClasses="xl:w-[13.542vw] xl:h-[4.948vw] 3xl:w-[15.104vw] 3xl:h-[4.948vw]" />




                      <div className="absolute right-2 top-9">
                        {/* <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i> */}
                      </div>

                    </div>

                  </div>
                </LoaderContainer>

              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="bg-[#fff] p-[14px] xl:p-[14px] 3xl:p-[0.729vw] rounded-lg dark:bg-[#374151]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[6px]">
                <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
                  Student Groups
                </h3>
                <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
              </div>
              <div className="mt-[6px] xl:mt-[6px] 3xl:mt-[0.417vw]">
                <div className="flex justify-between items-end  border-b border-[#E5E7EB]  px-[12px] xl:px-[12px] 3xl:px-[0.625vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw]">
                  <LoaderContainer loading={Ellloading} width={"100%"} height={"53px"} className={"dark:bg-[#374151]"}>
                    <div>
                      <TrendTile title="ELL" value={Ell?.[0]?.['ELL']} />
                    </div>
                  </LoaderContainer>
                </div>
                <div className="flex justify-between  border-b border-[#E5E7EB]  px-[12px] xl:px-[12px] 3xl:px-[0.625vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw]">
                  <LoaderContainer loading={Eco_Disadvantageloading} width={"100%"} height={"53px"} className={"dark:bg-[#374151]"}>

                    <div>
                      <TrendTile title="Eco. Disad." value={Eco_Disadvantage?.[0]?.["TOTAL_ENROLLMENT"]} />
                    </div>
                  </LoaderContainer>
                </div>
                <div className="flex justify-between  border-b border-[#E5E7EB]  px-[12px] xl:px-[12px] 3xl:px-[0.625vw] py-[12px] xl:py-[12px] 3xl:py-[0.625vw]">
                  <LoaderContainer loading={Enrollment_HISPANICloading} width={"100%"} height={"53px"} className={"dark:bg-[#374151]"}>

                    <div>
                      <TrendTile title="Hispanic" value={Enrollment_HISPANIC?.[0]?.["HISPANIC"]} />
                    </div>
                  </LoaderContainer>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#374151] bg-[#fff] p-[14px] xl:p-[14px] 3xl:p-[0.529vw] rounded-lg mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[6px]">
                <div>
                  <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[1.238vw] font-semibold">
                    Grade Retention Rate
                  </h3>
                  <p className="text-[#374151] dark:text-[#fff] hover:text-[#9CA1AB] text-[14px] 3xl:text-[0.959vw] font-normal">
                    (students repeating grades)
                  </p>
                </div>

                <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151] hover:cursor-pointer " onClick={() => { setTotalEnrollmentPopupShow2(true) }} ></i>

              </div>

              <div className="mt-[6px] xl:mt-[6px] 3xl:mt-[0.417vw]">
                <LoaderContainer loading={Grade_Retension_rateloading} width={"100%"} height={"60px"}>
                  <div className="flex justify-between items-center  px-[12px] xl:px-[12px] 3xl:px-[0.625vw]">
                    <div className="text-[#374151] dark:text-[#fff] text-[22px] 3xl:text-[1.25vw] font-semibold">
                      {Grade_Retension_rate?.[0]?.["GRADE_RETENSION_RATE"]}
                    </div>
                    <div className="text-[#9CA1AB] text-[22px] 3xl:text-[1.25vw] font-light">
                      {Grade_Retension_rate?.[0] ? (Grade_Retension_rate?.[0]?.["PERCENTAGE"])?.toFixed(2) + "%" : "0%"}
                    </div>
                  </div>
                </LoaderContainer>
                <LoaderContainer loading={Grade_Retension_rateloading} width={"100%"} height={"125px"}>
                  <div className="h-[125px] 3xl:h-[8.15vw]">
                    <GradeRetentionRateChart data={Grade_Retension_rate_Chart} />
                  </div>
                </LoaderContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[10px] xl:gap-[0.833vw] mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw] ">
          <div className="col-span-5">
            <div onClick={() => { setStudentSpendingPopupShow(true) }} className="dark:bg-[#374151] bg-[#fff] p-[14px] xl:p-[14px] 3xl:p-[0.729vw] rounded-lg h-[100%]">
              <div className="flex justify-between items-center  border-b border-[#E5E7EB] pb-[6px]">
                <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
                  Student Spending % Time in District
                </h3>
                <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
              </div>
              <LoaderContainer loading={StudentSpendingtimeInDistrictloading} width={"100%"} height={"200px"}>

                <div>
                  {sortedStudentSpendingtimeInDistrictData.map(item => {
                    let label = item?.MONTH?.split(" to ").map(x => parseInt(x))
                    let background = `linear-gradient(90deg, ${(label[0] == 0) ? `#c1dbff, #e3edfa ${label[1]}%` : `#F0F2F6 0%, #F0F2F6 ${label[0]}%, #e3edfa ${label[0]}%, #c1dbff, #e3edfa ${label[1]}%`}, #F0F2F6 ${label[1]}%, #F0F2F6 100%)`
                    return (<>
                      {(label.length == 2) ?
                        <div className={`flex justify-between  h-[40px] items-center px-[12px] mt-2 rounded-md`}
                          style={{ background: background }}
                        >
                          <p className="text-[#374151] text-[16px] 3xl:text-[0.833vw] font-normal">
                            {label[0]}% <i className="innivenrolment-arrow-right-bigline"></i> {label[1]}%
                          </p>
                          <p className="text-[#374151] text-[16px] 3xl:text-[0.833vw] font-normal">
                            <b>{Number(item?.CY_VALUE).toLocaleString() || 0}</b>  <span>{Math.abs(item?.LY_VAR)?.toFixed(0)}%</span>
                          </p>
                        </div> :
                        <div className={`flex justify-between  h-[40px] items-center px-[12px] mt-2 rounded-md ${(label[0] == 100) ? "bg-[#1570ef]" : "bg-[#F0F2F6]"}`}>
                          <p className={`${(label[0] == 100) ? "text-white" : "text-[#374151]"} text-[16px] 3xl:text-[0.833vw] font-normal`}>
                            {label[0]}%
                          </p>
                          <p className={`${(label[0] == 100) ? "text-white" : "text-[#374151]"} text-[16px] 3xl:text-[0.833vw] font-normal`}>
                            <b>{Number(item?.CY_VALUE).toLocaleString() || 0}</b>  <span>{Math.abs(item?.LY_VAR)?.toFixed(0)}%</span>
                          </p>
                        </div>}
                    </>)
                  })}
                </div>
              </LoaderContainer>


            </div>
          </div>
          <div className="col-span-7">

            <div className="dark:bg-[#374151] bg-[#fff] px-[10px] xl:px-[14px] 3xl:px-[0.729vw] rounded-lg  ">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[4px] pt-[4px]">
                <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
                  Student Moving Outside District Schools           </h3>
                <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
              </div>
              <div className=" gap-[25px] justify-evenly flex overflow-y-hidden">
                <div className="xl:px-[14px] 3xl:px-[0.729vw]  xl:py-[6px] 3xl:py-[0.417vw]  pb-0 relative">
                  <div className=" text-center dividexl">
                    <TrendTile title="Charters" value={0} />
                    {getLPVarDetails(0)}
                  </div>
                </div>
                <div className="xl:px-[14px] 3xl:px-[0.729vw]  xl:py-[6px] 3xl:py-[0.417vw]  pb-0 relative ">
                  <div className=" text-center dividexl">
                    <TrendTile title="Magnet" value={0} />
                    {getLPVarDetails(0)}
                  </div>
                </div>
                <div className="xl:px-[14px] 3xl:px-[0.729vw]  xl:py-[6px] 3xl:py-[0.417vw] pb-0 relative">
                  <div className=" text-center">
                    <TrendTile title="Private Schools" value={0} />
                    {getLPVarDetails(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="dark:bg-[#374151] bg-[#fff]  px-[10px] xl:px-[14px] 3xl:px-[0.729vw] rounded-lg mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw]">
              <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[4px] pt-[4px]">
                <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
                  Student Retaining Over Years
                </h3>
                <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
              </div>

              <div className="flex gap-[25px] justify-evenly overflow-y-hidden">
                <LoaderContainer loading={Student_Retatining_Over_Yearsloading} width={"100%"} height={"70px"}>

                  {Student_Retatining_Over_Years.map((item, index) => (

                    <div key={index} className={`xl:px-[14px] 3xl:px-[0.729vw]  xl:py-[6px] 3xl:py-[0.417vw] pb-0 relative ${index === Student_Retatining_Over_Years.length - 1 ? '' : 'dividexl'}`}>
                      <div className="text-center">
                        <TrendTile title={formatTitle(item.METRIC_SUB_NAME)} value={item.STUDENT_COUNT} />
                        {getLPVarDetails(item.LY_VAR)}
                      </div>
                    </div>
                  ))}
                </LoaderContainer>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="bg-[#fff] p-[14px] xl:p-[14px] 3xl:p-[0.729vw] rounded-lg dark:bg-[#374151]">
          <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[6px] ">
            <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
              Top School Gaining
            </h3>
            <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
          </div>
          <div className="  top_school_gaining">
            <LoaderContainer loading={TopSchoolGainingloading} width={'100%'} height={'310px'} className=" dark:bg-[#374151]">
              {Top_School_Gaining.map((x, i) => (<TopSchoolBottomSchool key={i} index={i} schoolName={x?.SCHOOL_OFFICIAL_NAME} currentYearEnrollment={x?.GAINING} yoyVariance={x?.LY_VAR} />))}
            </LoaderContainer>
          </div>
          <div className="flex justify-between items-center  border-b border-[#E5E7EB] pb-[6px] mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw] ">
            <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
              Bottom School Losing
            </h3>
            <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
          </div>
          <div className="  bottom_school_gaining">
            <LoaderContainer loading={BottomSchoolLosingloading} width={'100%'} height={'310px'} className=" dark:bg-[#374151]">
              {Bottom_School_Losing.map((x, i) => (<TopSchoolBottomSchool key={i} index={i} schoolName={x?.SCHOOL_OFFICIAL_NAME} currentYearEnrollment={x?.LOSING} yoyVariance={x?.LY_VAR} />))}
            </LoaderContainer >
          </div>
        </div>
        <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
          <div className="bg-[#fff] dark:bg-[#374151] p-[14px] xl:p-[14px] 3xl:p-[0.729vw] rounded-lg">
            <div className="flex justify-between items-center  border-b border-[#E5E7EB] pb-[6px]">
              <h3 className="text-[#374151] dark:text-[#fff] hover:text-[#1570EF] text-[18px] 3xl:text-[0.938vw] font-semibold">
                Matriculation
              </h3>
              <i className="innivenrolment-minimize-maximize text-[16px] text-[#9CA1AB] hover:text-[#374151]"></i>
            </div>
            <div className="relative">
              <LoaderContainer loading={Matriculationloading} width={'100%'} height={'120px'}>
                <MatriculationComponent data={Matriculation} />

              </LoaderContainer>
              {/* <MatriculationComponent data={[
                {
                  "METRIC_NAME": "Middle to High School Conversion Rate",
                  "CY_STUENT": 681,
                  "PY_STUDENT": 693,
                  "PERCENTAGE": 99.8534
                },

              ]} /> */}
              {/* <div className="absolute left-0 ">
                <Image
                  src="/images/matriculation_img1.png"
                  width={192}
                  height={95}
                  className="3xl:w-[10.417vw] 3xl:h-[4.948vw] xl:w-[9.375vw] xl:h-[4.948vw] "
                  alt="matriculation img"
                />
                <div className=" relative -top-10 left-2 pr-10">
                  <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-meduim leading-none">
                    Elementary  to Middle
                  </div>
                  <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-semibold leading-5 ">
                    95%
                  </div>
                </div>
              </div>
              <div className="absolute left-[135px] xl:left-[135px]  3xl:left-[180px]">
                <Image
                  src="/images/matriculation_img2.png"
                  width={175}
                  height={95}
                  className="3xl:w-[10.417vw] 3xl:h-[4.948vw] xl:w-[9.375vw] xl:h-[4.948vw]"
                  alt="K12"
                />
                <div className=" relative -top-10 left-4 pr-10">
                  <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-meduim leading-none">
                    Middle to High
                  </div>
                  <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-semibold leading-5 ">
                    85%
                  </div>
                </div>
              </div>
              <div className=" absolute right-[0px]">
                <Image
                  src="/images/matriculation_img3.png"
                  width={200}
                  height={95}
                  className="3xl:w-[10.417vw] 3xl:h-[4.948vw] xl:w-[9.375vw] xl:h-[4.948vw] "
                  alt="K12"
                />
                <div className=" relative -top-10 left-5 pr-5">
                  <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-meduim leading-none">
                    Graduation Rate
                  </div>
                  <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-semibold leading-5 ">
                    80%
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
      <Enrollment visible={EnrollmentPopupShow} onHide={() => { setEnrollmentPopupShow(false) }} />
      <TotalEnrollment visible={TotalEnrollmentPopupShow2} onHide={() => { setTotalEnrollmentPopupShow2(false) }} />
      <StudentSpending visible={StudentSpendingPopupShow} onHide={() => { setStudentSpendingPopupShow(false) }} />
    </div>
  );
}
