"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import ColoredLineChart from "../charts/coloredlinechart";
import LineStackChart from "../charts/linestackchart";
import Hitmapchart from "../charts/heatmapchart";
import Heatmapchart from "../charts/heatmapchart";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { formatNumberWithCommas, renderLyVar, sortDataByMonthOrder, StudentsGroupComponent } from "../utils";
import { fetchStudent_Spending_Cross_Dimension_View, fetchStudent_Spending_Trend_Chart, fetchStudentSpendingStudentsGroup } from "../../redux/slices/Overview";
import LoaderContainer from "../LoaderContainer";
import { sortBasedOnPercentage } from "../utils";

const StudentSpending = ({ visible, onHide }) => {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;
    const dispatch = useDispatch();


    const [checked, setChecked] = useState(true);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDimension, setSelectedDimension] = useState({ name: 'School Type', code: 'School_type' },);
    const years = [
        { name: 'School Type', code: 'School_type' },
        { name: 'Student Gender', code: 'Student_Gender' }
    ];
    const StudentSpendingCrossDimensionView = useSelector(state => state.Overview.Student_Spending_Cross_Dimension_View)

    const StudentSpendingStudentsGroup = useSelector(state => state.Overview.StudentSpendingStudentsGroup)
    const StudentSpendingStudentsGrouploading = useSelector(state => state.Overview.StudentSpendingStudentsGrouploading)
    const StudentSpendingCrossDimensionViewloadingView = useSelector(state => state.Overview.Student_Spending_Cross_Dimension_Viewloading)

    let StudentSpendingtimeInDistrict = useSelector(state => state.Overview.StudentSpendingtimeInDistrict)
    let StudentSpendingtimeInDistrictloading = useSelector(state => state.Overview.StudentSpendingtimeInDistrictloading)

    const Student_Spending_Trend_Chart = useSelector(state => state.Overview.Student_Spending_Trend_Chart)
    const Student_Spending_Trend_Chartloading = useSelector(state => state.Overview.Student_Spending_Trend_Chartloading)

    const sortedStudentSpendingtimeInDistrictData = sortDataByMonthOrder(StudentSpendingtimeInDistrict);
    const sortedStudentSpendingCrossDimensionViewData = sortDataByMonthOrder(StudentSpendingCrossDimensionView);
    const initialCheckedStates = {
        checked0: true,
        checked1: true,
    };
    let STUDENTSPENDINGTIMEINDISTRICT = sortBasedOnPercentage(StudentSpendingtimeInDistrict)

    const [checkedStates, setCheckedStates] = useState(initialCheckedStates);

    const [selectedHeadings, setSelectedHeadings] = useState(
        Object.entries(initialCheckedStates)
            .filter(([key, value]) => value)
            .map(([key, value]) => STUDENTSPENDINGTIMEINDISTRICT[parseInt(key.replace('checked', ''))]?.MONTH)
            .filter(Boolean)
    );

    useEffect(() => {
        setSelectedHeadings(
            Object.entries(initialCheckedStates)
                .filter(([key, value]) => value)
                .map(([key, value]) => STUDENTSPENDINGTIMEINDISTRICT[parseInt(key.replace('checked', ''))]?.MONTH)
                .filter(Boolean)
        );
    }, [StudentSpendingtimeInDistrict]);


    const handleCheckboxChange = (name, checked) => {
        const newCheckedStates = { ...checkedStates, [name]: checked };
        const checkedCount = Object.values(newCheckedStates).filter(Boolean).length;

        if (checkedCount > 2) return;

        setCheckedStates(newCheckedStates);
        const index = parseInt(name.replace('checked', ''));
        const metricName = STUDENTSPENDINGTIMEINDISTRICT[index]?.MONTH;

        if (checked) {
            setSelectedHeadings(prev => [...prev, metricName]);
        } else {
            setSelectedHeadings(prev => prev.filter(heading => heading !== metricName));
        }
    };

    useEffect(() => {
        dispatch(fetchStudent_Spending_Cross_Dimension_View({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [
                { columnName: '#{dimension}', columnValue: selectedDimension?.code }
            ],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));

        dispatch(fetchStudentSpendingStudentsGroup({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [],
            // "userEmail": "Test.PBI@redingtongroup.com"
        }));

    }, [selectedDimension])


    useEffect(() => {
        if (selectedHeadings.length >= 2) {
            dispatch(fetchStudent_Spending_Trend_Chart({
                "elasticQueryName": "",
                "filters": [],
                "dynamicColumns": [{
                    columnName: `#{metric_name}`,
                    columnValue: `metric_name in ('${selectedHeadings[0]}','${selectedHeadings[1]}')`
                }],
                "userEmail": "Test.PBI@redingtongroup.com"
            }));

        }

    }, [selectedHeadings])

    function generateTrendViewData(data, Split) {
        const schoolYears = [...new Set(data.map(item => item.SCHOOL_YEAR))].sort();
        const labels = [...Split];
        const values1 = new Array(schoolYears.length).fill(0);
        const values2 = new Array(schoolYears.length).fill(0);

        data.forEach(item => {
            const index = labels.indexOf(item.METRIC_NAME);
            if (index !== -1) {
                const yearIndex = schoolYears.indexOf(item.SCHOOL_YEAR);
                if (yearIndex !== -1) {
                    if (index === 0) {
                        values1[yearIndex] = (item.VALUE);
                    } else if (index === 1) {
                        values2[yearIndex] = (item.VALUE);
                    }
                }
            }
        });
        return {
            label: schoolYears,
            labels: labels,
            value1: values1,
            value2: values2,

        };
    }


    const EthnicitySpreadData = generateTrendViewData(Student_Spending_Trend_Chart, selectedHeadings)


    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="w-[80%] xl:w-[74.896vw] customsidebar  bg-[#FFF] dark:bg-[#121212]  rounded-l-[16px] 3xl:rounded-[0.833vw]"
                onHide={onHide}
                blockScroll={true}
            >
                <div className="p-[24px] xl:p-[22px] 3xl:p-[1.25vw]">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[#374151] dark:text-[#fff] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold">
                                Enrollment
                            </div>
                            <div className="text-[#9CA1AB] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">
                                {/* Spending Percentage Time In District */}
                                Student Spending % Time in District
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#162B55] px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[12px] xl:py-[10px] 3xl:py-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw]">
                                <div className="flex items-center gap-[12px] 3xl:gap-[0.625vw]">
                                    <div className="text-[#EFF8FF] text-[16px] xl:text-[15px] 3xl:text-[0.833vw] font-light">Total</div>
                                    <div className="text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">150,000</div>
                                </div>
                                <div className="text-[#D1FAE4] text-[12px] 3xl:text-[0.833vw] font-light text-end">LP Var: 12% <i className="innivenrolment-arrow-up-line ml-2"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="grid xl:grid-cols-4 grid-cols-3 gap-[24px] xl:gap-[22px] 3xl:gap-[1.25vw]">
                            {STUDENTSPENDINGTIMEINDISTRICT?.map((metric, index) => (
                                <div
                                    key={index}
                                    className="px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] dark:bg-[#374151] border-l-[8px] border-[#1570EF] rounded-[8px] 3xl:rounded-[0.417vw] mb-4"
                                >
                                    <div className="flex items-center justify-between gap-1 min-h-[34px] 3xl:min-h-[1.771vw]">
                                        <div className="text-[#162B55] text-[14px] xl:text-[10px] 2xl:text-[10px] 3xl:text-[0.729vw] dark:text-[#fff] font-medium">
                                            {metric.MONTH + "  time in District"}
                                        </div>
                                        <Checkbox
                                            className="customCheckBox"
                                            onChange={(e) => handleCheckboxChange(`checked${index}`, e.target.checked)}
                                            checked={checkedStates[`checked${index}`]}
                                        />
                                    </div>
                                    <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                        <div className="text-[#162B55] dark:text-[#fff] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">{formatNumberWithCommas(metric.CY_VALUE)}</div>
                                        {renderLyVar(metric.LY_VAR)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="bg-[#F5F6F7] dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] pb-[24px] xl:pb-[20px] 3xl:pb-[1.25vw] pt-[24px] xl:pt-[20px] 3xl:pt-[1.25vw]">
                            <div className="flex items-center justify-between px-[24px] xl:px-[20px] 3xl:px-[1.25vw]">
                                <div className="text-[#101828] dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                    Trend View
                                </div>
                            </div>
                            <LoaderContainer loading={Student_Spending_Trend_Chartloading} width={"100%"} height={"200px"}>
                                <div className="h-[200px] 3xl:h-[10.417vw]">
                                    <ColoredLineChart
                                        legend={{
                                            show: false,
                                            bottom: -5,
                                            right: 10,
                                            itemWidth: 10,
                                            itemHeight: 10,
                                            textStyle: {
                                                color: "#101828",
                                                fontSize: 10
                                            },
                                        }}
                                        grid={{
                                            top: "5%",
                                            right: "3%",
                                            bottom: "0%",
                                            left: "3%",
                                            containLabel: true,
                                        }}
                                        xAxisLabel={{
                                            fontSize: 12,
                                            // color: "#667085",
                                            color: currentTheme == "dark" ? "#fff" : "#667085",
                                            width: 100,
                                            overflow: "truncate",
                                            interval: 0,
                                        }}
                                        // min={0}
                                        // max={35}
                                        // interval={2}
                                        yAxisName={""}
                                        yAxisNameGap={15}
                                        name={EthnicitySpreadData.labels}
                                        color={["#162B55", "#1861DD", "#5CB6FE", "#BDE2FF"]}
                                        areaStyle1={{ color: "#BDE2FF", opacity: 1 }}
                                        areaStyle2={{ color: "#5CB6FE", opacity: 1 }}
                                        areaStyle3={{ color: "#1861DD", opacity: 1 }}
                                        areaStyle4={{ color: "#162B55", opacity: 1 }}
                                        data={EthnicitySpreadData}
                                    />
                                </div>
                            </LoaderContainer>
                        </div>
                    </div>
                    <div className="mt-[24px] 3xl:mt-[1.25vw]">
                        <div className="grid grid-cols-12 gap-[24px] 3xl:gap-[1.25vw]">
                            <div className="col-span-12 xl:col-span-8">
                                <div className="bg-[#F5F6F7] dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px] 3xl:p-[1.25vw]">

                                    <div className="flex items-center justify-between">
                                        <div className="text-[#101828] dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                            Cross Dimension View
                                        </div>
                                        <div className='customDropdown dark:bg-[#374151] dark:text-[#fff]'>
                                            <Dropdown
                                                value={selectedDimension}
                                                onChange={(e) => setSelectedDimension(e.value)}
                                                options={years}
                                                optionLabel="name"
                                                placeholder="School Type"
                                                className="w-full xl:w-[140px] 3xl:w-[5.688vw]  dark:bg-[#374151] dark:text-[#fff]"
                                            />
                                        </div>
                                    </div>
                                    <div className=" h-[478px] 3xl:h-[24.896vw]">
                                        <LoaderContainer loading={StudentSpendingCrossDimensionViewloadingView} width={'100%'} height={'400px'}>
                                            <Heatmapchart data={sortedStudentSpendingCrossDimensionViewData} dimension={selectedDimension?.code} />

                                        </LoaderContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <div className="bg-[#111928] text-white h-full px-[15px] lg:px-[25px] 3xl:px-[1.302vw] py-[15px] 3xl:py-[0.781vw] rounded-[10px] 3xl:rounded-[0.521vw]">
                                    <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[1.042vw] font-medium pb-[8px] 3xl:pb-[0.417vw] border-b border-[#2B3B4F] ">
                                        Students Group
                                    </div>
                                    {/* <div className="h-[20px] mt-2 w-full">
                                        <LineStackChart />
                                    </div>
                                    <div className="space-y-[10px] xl:space-y-[8px] 3xl:space-y-[0.521vw] mt-[8px] 3xl:mt-[0.417vw]">
                                        <div className="col">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[16px] 3xl:text-[0.833vw] font-medium uppercase">
                                                    Sped
                                                </div>
                                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                                    <div className="text-[16px] 3xl:text-[0.833vw] font-medium">
                                                        47585
                                                    </div>
                                                    <div className="text-[#069564] text-[14px] 3xl:text-[0.729vw]">6% <i className="innivenrolment-arrow-up-line ml-1 text-[12px] 3xl:text-[0.521vw]"></i></div>
                                                </div>
                                            </div>

                                            <div className="flex items-center flex-wrap	gap-[2px] 3xl:gap-[0.104vw] border-b border-[#2B3B4F] pb-[18px] 3xl:pb-[0.938vw] mt-[10px] 3xl:mt-[0.521vw]">
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[16px] 3xl:text-[0.833vw] font-medium uppercase">
                                                    EL
                                                </div>
                                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                                    <div className="text-[16px] 3xl:text-[0.833vw] font-medium">
                                                        21855
                                                    </div>
                                                    <div className="text-[#D67309] text-[14px] 3xl:text-[0.729vw]">8%<i className="innivenrolment-arrow-down-line ml-1 text-[12px] 3xl:text-[0.521vw]"></i></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-wrap	gap-[2px] 3xl:gap-[0.104vw] border-b border-[#2B3B4F] pb-[18px] 3xl:pb-[0.938vw] mt-[10px] 3xl:mt-[0.521vw]">
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[16px] 3xl:text-[0.833vw] font-medium ">
                                                    Eco. Disad.
                                                </div>
                                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                                    <div className="text-[16px] 3xl:text-[0.833vw] font-medium">
                                                        128915
                                                    </div>
                                                    <div className="text-[#D67309] text-[14px] 3xl:text-[0.729vw]">6%<i className="innivenrolment-arrow-down-line ml-1 text-[12px] 3xl:text-[0.521vw]"></i></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-wrap	gap-[2px] 3xl:gap-[0.104vw] border-b border-[#2B3B4F] pb-[18px] 3xl:pb-[0.938vw] mt-[10px] 3xl:mt-[0.521vw]">
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[16px] 3xl:text-[0.833vw] font-medium ">
                                                    Others
                                                </div>
                                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                                    <div className="text-[16px] 3xl:text-[0.833vw] font-medium">
                                                        47585
                                                    </div>
                                                    <div className="text-[#069564] text-[14px] 3xl:text-[0.729vw]">4% <i className="innivenrolment-arrow-up-line ml-1 text-[12px] 3xl:text-[0.521vw]"></i></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-wrap	gap-[2px] 3xl:gap-[0.104vw] border-b border-[#2B3B4F] pb-[18px] 3xl:pb-[0.938vw] mt-[10px] 3xl:mt-[0.521vw]">
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-between">
                                                <div className="text-[16px] 3xl:text-[0.833vw] font-medium ">
                                                    Homeless
                                                </div>
                                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                                    <div className="text-[16px] 3xl:text-[0.833vw] font-medium">
                                                        256
                                                    </div>
                                                    <div className="text-[#D67309] text-[14px] 3xl:text-[0.729vw]">9%<i className="innivenrolment-arrow-down-line ml-1 text-[12px] 3xl:text-[0.521vw]"></i></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-wrap	gap-[2px] 3xl:gap-[0.104vw]  mt-[10px] 3xl:mt-[0.521vw]">
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#1570EF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#4D97D3] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#C99722] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#BC437E] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#9BA9BE] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-male"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                                <div className="text-[#EFF8FF] text-[30px] xl:text-[28px] 3xl:text-[2.083vw] leading-none">
                                                    <i className="innivenrolment-man-outline"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="space-y-[10px] 3xl:space-y-[0.521vw]">
                                        {StudentSpendingStudentsGroup?.map((item, id) => {
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

export default StudentSpending;
