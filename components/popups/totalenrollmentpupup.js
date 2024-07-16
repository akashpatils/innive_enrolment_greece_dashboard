"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import ColoredLineChart from "../charts/coloredlinechart";
import RoundedDoubleBarChart from "../charts/roundeddoublebarchart";
import { fetchGrade_Ethnicity_Spread, fetchSpecial_Group_Spread, fetchStudentsbyGrade } from "../../redux/slices/Overview";
import { useDispatch, useSelector } from "react-redux";
import { StudentsGroupComponent } from "../utils";
import LoaderContainer from "../../components/LoaderContainer";
import { useTheme } from "next-themes";

const TotalEnrollment = ({ visible, onHide, }) => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedGradeType, setSelectedGradeType] = useState({ name: 'Grade Type', code: 'Grade_group_code' });

    const Grade_Ethnicity_Spread = useSelector(state => state.Overview.Grade_Ethnicity_Spread)
    const Grade_Ethnicity_Spreadloading = useSelector(state => state.Overview.Grade_Ethnicity_Spreadloading)

    const Special_Group_Spread = useSelector(state => state.Overview.Special_Group_Spread)
    const Special_Group_Spreadloading = useSelector(state => state.Overview.Special_Group_Spreadloading)

    const StudentsbyGrade = useSelector(state => state.Overview.StudentsbyGrade)
    const StudentsbyGradeloading = useSelector(state => state.Overview.StudentsbyGradeloading)


    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGrade_Ethnicity_Spread({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));
        dispatch(fetchSpecial_Group_Spread({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));

    }, [])

    useEffect(() => {
        dispatch(fetchStudentsbyGrade({
            "elasticQueryName": "Students_by_grade ",
            "filters": [],
            "dynamicColumns": [
                {
                    "columnName": "#{dimension}",
                    "columnValue": `${selectedGradeType.code}`,
                    "excludeKeyword": false
                }
            ],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));
    }, [selectedGradeType])

    const years = [
        { name: '2022', code: 'NY' },
        { name: '2023', code: 'RM' },
        { name: '2024', code: 'LDN' },
        { name: '2025', code: 'IST' },
        { name: '2026', code: 'PRS' }
    ];

    const Grade = [
        { name: 'Grade Type', code: 'Grade_group_code' },
        { name: 'Gender Type', code: 'STUDENT_GENDER' },
    ];

    // const EthnicitySpreadData2 = {
    //     label: ["Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22", "Jul 22", "Aug 22", "Sep 22", "Oct 22"],
    //     value1: [2, 5, 6, 5, 5, 5, 5, 5, 6, 6, 5, 2],
    //     value2: [4, 6, 7, 5, 6, 2, 3, 5, 4, 6, 4, 15],
    //     value3: [5, 10, 5, 10, 5, 10, 6, 7, 10, 5, 4, 5],
    // }


    const yearsEthnicity = [...new Set(Grade_Ethnicity_Spread?.map(item => item.SCHOOL_YEAR))];

    const ethnicities = [...new Set(Grade_Ethnicity_Spread?.map(item => item.STUDENT_ETHNICITY))];

    const EthnicitySpreadData = {
        label: yearsEthnicity.map(year => `${year}`),
    };

    ethnicities?.forEach((ethnicity, index) => {
        EthnicitySpreadData[`value${index + 1}`] = yearsEthnicity?.map(year => {
            const record = Grade_Ethnicity_Spread.find(item => item.SCHOOL_YEAR === year && item.STUDENT_ETHNICITY === ethnicity);
            return record ? record.ETHNICITY : 0;
        });
    });


    // const StudentsbyGradeData = {
    //     label: ["K", "Grd 1", "Grd 2"],
    //     value1: [380, 320, 380, 400, 410, 440, 450, 440, 430, 430, 370, 320],
    //     value2: [380, 320, 380, 400, 410, 440, 450, 440, 430, 430, 370, 320],
    //     value3: [270, 240, 270, 230, 210, 240, 250, 220, 230, 245, 370, 320],
    // }

    let dataKey = (selectedGradeType?.code).toUpperCase()

    const StudentsbyGradeData = StudentsbyGrade
        ?.filter(x => (x?.[dataKey] !== null) && (x?.LY_ENROLLMENT || x?.NEWLY_ENROLLED || x?.COUNTINUE_STUDENT))
        ?.sort((a, b) => {
            // Sort alphabetically first, then numerically
            if (isNaN(a[dataKey]) && isNaN(b[dataKey])) {
                return b[dataKey]?.localeCompare(a[dataKey]); // Alphabetical
            } else if (!isNaN(a[dataKey]) && !isNaN(b[dataKey])) {
                return a[dataKey] - b[dataKey]; // Numerical
            } else {
                // Handle mixed keys (alphabetical vs. numerical)
                return isNaN(a[dataKey]) ? -1 : 1;
            }
        })
        ?.reduce((acc, item) => {
            acc['label'].push(item?.[dataKey])
            acc['value1'].push(item?.LY_ENROLLMENT)
            acc['value2'].push(item?.COUNTINUE_STUDENT)
            acc['value3'].push(item?.NEWLY_ENROLLED)
            return acc
        }, { label: [], value1: [], value2: [], value3: [] })


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
                    <div>
                        <div className="text-[#374151] dark:text-[#fff] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold">
                            Total Enrollment
                        </div>
                        <div className="text-[#9CA1AB] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">
                            New vs Re-Entered vs Transfer Within District vs Transferred Out vs Dropout vs Continuing
                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="grid grid-cols-12 gap-[24px] 2xl:gap-[20px] 3xl:gap-[1.25vw]">
                            <div className="col-span-12 xl:col-span-8">
                                <div className="bg-[#F5F6F7] dark:bg-[#374151]  rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] pb-[24px] xl:pb-[20px] 3xl:pb-[1.25vw]">
                                    <div className="flex items-center justify-between px-[24px] xl:px-[20px] 3xl:px-[1.25vw] pt-[24px] xl:pt-[20px] 3xl:pt-[1.25vw]">
                                        <div className="text-[#101828] dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                            Ethnicity Spread
                                        </div>
                                        {/* <div className='customDropdown'>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={years}
                                                optionLabel="name"
                                                placeholder="By Month"
                                                className="w-full xl:w-[120px] 3xl:w-[5.688vw]"
                                            />
                                        </div> */}
                                    </div>
                                    <div className="relative h-[350px] 3xl:h-[18.229vw] dark:text-[#fff]">

                                        <ColoredLineChart
                                            legend={{
                                                show: true,
                                                bottom: -5,
                                                right: 10,
                                                itemWidth: 10,
                                                itemHeight: 10,
                                                textStyle: {
                                                    //color: "#101828",
                                                    color: currentTheme == "dark" ? "#fff" : "#101828",
                                                    fontSize: 10
                                                },
                                            }}
                                            grid={{
                                                top: "5%",
                                                right: "5%",
                                                bottom: "15%",
                                                left: "5%",
                                                containLabel: true,
                                            }}
                                            xAxisLabel={{
                                                fontSize: 12,
                                                color: currentTheme == "dark" ? "#fff" : "#667085",
                                                width: 100,
                                                overflow: "truncate",
                                                interval: 0,
                                            }}
                                            // min={0}
                                            // max={50}
                                            // interval={2}
                                            yAxisName={"Ethnicity Spread"}
                                            yAxisNameGap={15}
                                            name={[...ethnicities]}
                                            color={['#991B4A', "#E74D94", "#FAD0E7", "#1570EF", "#90D1FF", "#1B458D"]}
                                            areaStyle1={{ color: "#FAD0E7", opacity: 1 }}
                                            areaStyle2={{ color: "#E74D94", opacity: 1 }}
                                            areaStyle3={{ color: "#991B4A", opacity: 1 }}
                                            areaStyle4={{ color: "#1570EF", opacity: 1 }}
                                            areaStyle5={{ color: "#90D1FF", opacity: 1 }}
                                            areaStyle6={{ color: "#1B458D", opacity: 1 }}
                                            data={EthnicitySpreadData}
                                        />


                                        <div className="absolute bottom-[15px] xl:bottom-[5px] 3xl:-bottom-[0.1vw] 3xl:left-[3%] left-[24px]">
                                            <div className="text-[#667085] dark:text-[#fff] text-[12px] 3xl:text-[0.625vw] leading-[1.2]">Ethnicity Spread <br className="hidden xl:block" /> by Year</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#F5F6F7]  dark:bg-[#374151]  rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] pb-[24px] xl:pb-[20px] 3xl:pb-[1.25vw] mt-[24px] xl:mt-[22px] 3xl:mt-[1.25vw]">
                                    <div className="flex items-center justify-between px-[24px] xl:px-[20px] 3xl:px-[1.25vw] pt-[24px] xl:pt-[20px] 3xl:pt-[1.25vw]">
                                        <div className="text-[#101828] dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                            Students by Grade
                                        </div>
                                        <div className='customDropdown'>
                                            <Dropdown
                                                value={selectedGradeType}
                                                onChange={(e) => setSelectedGradeType(e.value)}
                                                options={Grade}
                                                optionLabel="name"
                                                placeholder="Grade Type"
                                                className="w-full xl:w-[140px] 3xl:w-[5.688vw] dark:bg-[#374151] dark:text-[#fff]"
                                            />
                                        </div>
                                    </div>
                                    <div className="h-[350px] 3xl:h-[18.229vw]">
                                        <LoaderContainer loading={StudentsbyGradeloading} width={'100%'} height={'100%'} className="dark:bg-[#374151]">
                                            <RoundedDoubleBarChart
                                                legend={{
                                                    show: true,
                                                    bottom: 0,
                                                    icon: 'circle',
                                                    textStyle: {
                                                        //color: "#101828",
                                                        color: currentTheme == "dark" ? "#fff" : "#101828",
                                                        fontSize: 10
                                                    },
                                                }}
                                                grid={{
                                                    top: "5%",
                                                    right: "2%",
                                                    bottom: "10%",
                                                    left: "2%",
                                                    containLabel: true,
                                                }}
                                                xAxisLabel={{
                                                    show: true,
                                                    fontSize: 12,
                                                    color: "#101828",
                                                    color: currentTheme == "dark" ? "#fff" : "#101828",
                                                    width: 100,
                                                    overflow: "truncate",
                                                    interval: 0,
                                                    hideOverlap: true
                                                }}
                                                // min={0}
                                                // max={900}
                                                // interval={100}
                                                name={["LY Enrollment", "Newly Enrolled Students", "Continuing Students"]}
                                                color={["#1570EF", "#90D1FF", "#1B458D"]}
                                                data={StudentsbyGradeData}
                                            // barWidth={"10%"}
                                            />
                                        </LoaderContainer>
                                    </div>

                                    {/* <div className="flex justify-center gap-[15px] xl:gap-[24px] 3xl:gap-[1.25vw]">
                                        <div className="text-[#383874] text-[12px] 3xl:text-[0.625vw]">
                                            <i className="pi pi-circle-fill text-[12px] 3xl:text-[0.625vw] mr-[8px] 3xl:mr-[0.417vw] text-[#1570EF]"></i>{" "}
                                            LY Enrollment
                                        </div>
                                        <div className="text-[#383874] text-[12px] 3xl:text-[0.625vw]">
                                            <i className="pi pi-circle-fill text-[12px] 3xl:text-[0.625vw] mr-[8px] 3xl:mr-[0.417vw] text-[#1B458D]"></i>{" "}
                                            Newly Enrolled Students
                                        </div>
                                        <div className="text-[#383874] text-[12px] 3xl:text-[0.625vw]">
                                            <i className="pi pi-circle-fill text-[12px] 3xl:text-[0.625vw] mr-[8px] 3xl:mr-[0.417vw] text-[#90D1FF]"></i>{" "}
                                            Continuing Students
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <div className="bg-[#111928] text-white h-full px-[15px] lg:px-[25px] 3xl:px-[1.302vw] py-[15px] 3xl:py-[0.781vw] rounded-[10px] 3xl:rounded-[0.521vw]">
                                    <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[1.042vw] font-medium mb-[15px] 3xl:mb-[0.781vw]">
                                        Special Group Spread
                                    </div>
                                    <div className="space-y-[10px] 3xl:space-y-[0.521vw]">
                                        {Special_Group_Spread?.map((item, id) => {
                                            return <div key={id}><StudentsGroupComponent title={item.METRICNAME} value={item.GRADE_EL} percentage={item.LY_VAR} />
                                            </div>
                                        })
                                        }
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

export default TotalEnrollment;
