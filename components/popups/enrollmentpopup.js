"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import MultiplebarWithLineChart from "../charts/multiplebarwithlinechart";
import Linechart from "../charts/linechart";
import BarLineChart from "../charts/barlinechart";
import HorizontalStackBarChart from "../charts/horizontalstackbarchart";
import { useTheme } from "next-themes";
// redux
import { useDispatch, useSelector } from "react-redux";
import getLPVarDetails, { Stats, StudentsGroupComponent } from "../utils";
import { fetchEnrollment_Dimension_View, fetchEnrollment_Trend_View } from "../../redux/slices/Overview";
import LoaderContainer from "../LoaderContainer";


const Enrollment = ({ visible, onHide }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const dispatch = useDispatch()
    // redux
    // State
    const Total_Enrollment = useSelector(state => state.Overview.TotalEnrollment)
    const Re_entered = useSelector(state => state.Overview.Reentered)
    const Transferring_within_District = useSelector(state => state.Overview.TransferringwithinDistrict)
    const Transferred_OutOf_District = useSelector(state => state.Overview.TransferredOutOfDistrict)
    const Dropout = useSelector(state => state.Overview.Dropout)
    const ContinutingStudents = useSelector(state => state.Overview.ContinutingStudents)
    const NewlyEnrolled = useSelector(state => state.Overview.NewlyEnrolled)
    const Ell = useSelector(state => state.Overview.Ell)
    const Eco_Disadvantage = useSelector(state => state.Overview.Eco_Disadvantage)
    const Enrollment_HISPANIC = useSelector(state => state.Overview.Enrollment_HISPANIC)
    const Enrollment_Dimension_View = useSelector(state => state.Overview.Enrollment_Dimension_View)
    const Enrollment_Dimension_Viewloading = useSelector(state => state.Overview.Enrollment_Dimension_Viewloading)
    const Enrollment_Trend_View = useSelector(state => state.Overview.Enrollment_Trend_View)
    const Enrollment_Trend_Viewloading = useSelector(state => state.Overview.Enrollment_Trend_Viewloading)
    const Enrollment_Splitup = useSelector(state => state.Overview.EnrollmentSplitup)
    const EnrollmentSplituploading = useSelector(state => state.Overview.EnrollmentSplituploading)

    // fetch
    // Fetch
    // redux end

    const [metric, setSelectedMetric] = useState({ name: 'School Type ', code: 'School_Type' });
    const Metrics = [
        { name: 'School Type ', code: 'School_Type' },
        { name: 'Student Gender', code: 'Student_Gender' },

    ];
    const initialCheckedStates = {
        checked0: true,
        checked1: true,
    };

    const [checkedStates, setCheckedStates] = useState(initialCheckedStates);

    const [selectedHeadings, setSelectedHeadings] = useState(
        Object.entries(initialCheckedStates)
            .filter(([key, value]) => value)
            .map(([key, value]) => Enrollment_Splitup[parseInt(key.replace('checked', ''))]?.METRICNAME)
            .filter(Boolean)
    );

    useEffect(() => {
        setSelectedHeadings(
            Object.entries(initialCheckedStates)
                .filter(([key, value]) => value)
                .map(([key, value]) => Enrollment_Splitup[parseInt(key.replace('checked', ''))]?.METRICNAME)
                .filter(Boolean)
        );
    }, [Enrollment_Splitup]);

    const handleCheckboxChange = (name, checked) => {
        const newCheckedStates = { ...checkedStates, [name]: checked };
        const checkedCount = Object.values(newCheckedStates).filter(Boolean).length;

        if (checkedCount > 2) return;

        setCheckedStates(newCheckedStates);
        const index = parseInt(name.replace('checked', ''));
        const metricName = Enrollment_Splitup[index]?.METRICNAME;

        if (checked) {
            setSelectedHeadings(prev => [...prev, metricName]);
        } else {
            setSelectedHeadings(prev => prev.filter(heading => heading !== metricName));
        }
    };

    useEffect(() => {
        dispatch(fetchEnrollment_Dimension_View({
            "elasticQueryName": "",
            "filters": [],
            "dynamicColumns": [{
                columnName: `#{dimension}`,
                columnValue: `${metric.code}`
            }],
            "userEmail": "Test.PBI@redingtongroup.com"
        }));

    }, [metric])

    useEffect(() => {
        if (selectedHeadings.length >= 2) {
            dispatch(fetchEnrollment_Trend_View({
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
    const [activeTab, setActiveTab] = useState(1)
    const [checked, setChecked] = useState(true);
    const [checked2, setChecked2] = useState(false);

    const MultipleBarChartData = {
        labels: ['department', 'Norm', 'Baseline', 'Adjustments'],
        values: [
            { department: 'D1', Norm: 3500, Baseline: 1000, Adjustments: 2000, },
            { department: 'D3', Norm: 5500, Baseline: 2000, Adjustments: 3500, },
            { department: 'D5', Norm: 2000, Baseline: 2000, Adjustments: 3500, },
            { department: 'D7', Norm: 3000, Baseline: 2000, Adjustments: 3500, },
            { department: 'D9', Norm: 3500, Baseline: 2000, Adjustments: 3500, },
            { department: 'D11', Norm: 2000, Baseline: 2000, Adjustments: 3500, },
            { department: 'D13', Norm: 3000, Baseline: 2000, Adjustments: 3500, },
            { department: 'D15', Norm: 2050, Baseline: 2000, Adjustments: 3500, },
            { department: 'D17', Norm: 3024, Baseline: 3000, Adjustments: 3500, },
            { department: 'D19', Norm: 4215, Baseline: 2000, Adjustments: 1000, },
            { department: 'D21', Norm: 2515, Baseline: 2000, Adjustments: 2000, },
            { department: 'D23', Norm: 3512, Baseline: 2000, Adjustments: 2200, },
            { department: 'D25', Norm: 1543, Baseline: 2000, Adjustments: 2200, },
        ]
    }
    // const TrendViewData = {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
    //     values1: [2, 4, 6, 5, 6, 5, 5, 6, 5, 6, 5, 6,],
    //     values2: [-2, -4, -3, -6, -4, -3, -3, -4, -5.5, -2, -2, -4,],
    //     values3: [0.1, -0.1, 0.2, 0.3, -0.4, 0.2, -0.1, 0.6, -0.5, 0.6, 0.5, 0.6,]
    // }

    function generateDimensionViewData(data, categoryKey, PercentageKey, currValueKey, prevValueKey) {
        const labels = data.map(item => item[categoryKey]);
        const labels2 = PercentageKey ? data.map(item => {
            if (item[PercentageKey] != null) {
                return item[PercentageKey].toFixed(2);
            } else {
                return '';
            }
        }) : [];
        const values1 = data.map(item => {
            return item[currValueKey] != null ? item[currValueKey] : 0;
        });
        const values2 = data.map(item => {
            return item[prevValueKey] != null ? item[prevValueKey] : 0;
        });


        return {
            labels: labels,
            labels2: labels2,
            values1: values1,
            values2: values2
        };
    }
    const MetrictoUpperCase = (metric.code).toUpperCase()
    const DimensionViewData = generateDimensionViewData(Enrollment_Dimension_View, MetrictoUpperCase, "VARIANCE", "CURR_VALUE", "PREV_VALUE");

    function generateTrendViewData(data, Split, PercentageKey) {
        const schoolYears = [...new Set(data.map(item => item.SCHOOL_YEAR))].sort();
        const labels = [...Split, PercentageKey];
        const values1 = new Array(schoolYears.length).fill(0);
        const values2 = new Array(schoolYears.length).fill(0);
        const values3 = new Array(schoolYears.length).fill(0);

        data.forEach(item => {
            const index = labels.indexOf(item.METRIC_NAME);
            if (index !== -1) {
                const yearIndex = schoolYears.indexOf(item.SCHOOL_YEAR);
                if (yearIndex !== -1) {
                    if (index === 0) {
                        values1[yearIndex] = (item.VALUE);
                    } else if (index === 1) {
                        values2[yearIndex] = (item.VALUE);
                    } else if (index === 2) {
                        values3[yearIndex] = (item.VALUE);
                    }
                }
            }
        });



        return {
            labels: schoolYears,
            labels1: labels,
            values1: values1,
            values2: values2,
            values3: values3
        };
    }



    const TrendViewData = generateTrendViewData(Enrollment_Trend_View, selectedHeadings, "Total Enrollment");
    // const DimensionViewData = {
    //     labels: ['High', 'Middle', 'Elementary', 'Pre-K'],
    //     labels2: ['50', '60', '70', '20'],
    //     values1: [2000, 4000, 4000, 2000],
    //     values2: [5000, 3000, 2000, 4000]
    // }
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
                            <div className="text-[#374151] dark:text-[#fff] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold">
                                Enrollment
                            </div>
                            <div className="text-[#9CA1AB] text-[16px] xl:text-[14px] 3xl:text-[0.833vw] font-normal">
                                New vs Re-Entered vs Transfer Within District vs Transferred Out vs Dropout vs Continuing
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#162B55]  px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[12px] xl:py-[10px] 3xl:py-[0.521vw] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw]">
                                <div className="flex items-center gap-[12px] 3xl:gap-[0.625vw]">
                                    <div className="text-[#EFF8FF] text-[16px] xl:text-[15px] 3xl:text-[0.833vw] font-light">Total</div>
                                    <div className="text-[#EFF8FF] text-[32px] xl:text-[28px] 3xl:text-[1.625vw] font-bold">{Total_Enrollment[0]?.TOTAL_ENROLLMENT?.toLocaleString() || 0}</div>
                                </div>
                                {getLPVarDetails(Total_Enrollment[0]?.LY_VAR)}
                            </div>
                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="flex flex-wrap gap-[24px] xl:gap-[22px] 3xl:gap-[1.25vw]">
                            {Enrollment_Splitup?.map((metric, index) => (
                                <div
                                    key={index}
                                    className="px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[14px] xl:py-[10px] 3xl:py-[0.733vw] bg-[#F5F6F7] dark:bg-[#374151] border-l-[8px] border-[#1570EF] rounded-[8px] 3xl:rounded-[0.417vw] mb-4"
                                >
                                    <div className="flex items-center justify-between gap-1 min-h-[34px] 3xl:min-h-[1.771vw]">
                                        <div className="text-[#162B55] text-[14px] xl:text-[10px] 2xl:text-[10px] 3xl:text-[0.729vw] dark:text-[#fff] font-medium">
                                            {metric.METRICNAME}
                                        </div>
                                        <Checkbox
                                            className="customCheckBox"
                                            onChange={(e) => handleCheckboxChange(`checked${index}`, e.target.checked)}
                                            checked={checkedStates[`checked${index}`]}
                                        />
                                    </div>
                                    <Stats stats={[metric.CY_VALUE, metric.LY_VAR]} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[1.667vw]">
                        <div className="bg-[#F5F6F7] dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] xl:p-[20px]   3xl:p-[1.25vw]">
                            <div className="flex items-center justify-between">
                                <div className="text-[#101828] text-[20px] dark:text-[#fff] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                    Trend View
                                </div>
                            </div>
                            <LoaderContainer loading={Enrollment_Trend_Viewloading} width={"100%"} height={"200px"} className={"dark:bg-[#374151]"}>
                                <div className="h-[193px] 3xl:h-[10.052vw]">
                                    {selectedHeadings[1] ? <BarLineChart

                                        legend={{
                                            show: true,
                                            bottom: 0,
                                            left: 5,
                                            itemHeight: 10,
                                            itemWidth: 10,
                                            textStyle: {
                                                fontSize: 11,
                                                color: currentTheme == "dark" ? "#fff" : "#6C768B",
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
                                            color: currentTheme == "dark" ? "#fff" : "#363A44",
                                            fontSize: 10,
                                            formatter: '{value}'
                                        }}
                                        yAxisLabel={{
                                            show: true,
                                            color: currentTheme == "dark" ? "#fff" : "#363A44",
                                            fontSize: 10,
                                            formatter: function (params) {
                                                if (Math.abs(parseFloat(params)) >= 1000) return (Math.abs(parseFloat(params) / 1000).toFixed(1)) + 'k';
                                                return Math.abs(parseFloat(params))
                                            },

                                        }}
                                        name={TrendViewData.labels1}
                                        color={['#1570EF', '#D62C72', '#162B55']}
                                        label1={{
                                            show: true,
                                            color: '#FFFFFF',
                                            fontSize: 10,
                                            formatter: function (params) {

                                                if (Math.abs(params.value) >= 1000) return (Math.abs(parseFloat(params.value) / 1000).toFixed(1)) + 'k';
                                                return Math.abs(parseFloat(params.value))
                                            },

                                            position: 'insideBottom'
                                        }}
                                        label2={{
                                            show: true,
                                            color: '#FFFFFF',
                                            fontSize: 10,
                                            formatter: function (params) {
                                                if (Math.abs(params.value) >= 1000) return (Math.abs(parseFloat(params.value) / 1000).toFixed(1)) + 'k';
                                                return Math.abs(parseFloat(params.value))
                                            },

                                            position: 'insideBottom'
                                        }}
                                        data={TrendViewData}
                                    /> : null}
                                </div>
                            </LoaderContainer>
                        </div>
                    </div>
                    <div className="mt-[24px] 3xl:mt-[1.25vw]">
                        <div className="grid grid-cols-12 gap-[24px] 3xl:gap-[1.25vw]">
                            <div className="col-span-12 xl:col-span-8">
                                <div className="bg-[#F5F6F7] dark:bg-[#374151] rounded-[16px] xl:rounded-[14px] 3xl:rounded-[0.833vw] p-[24px] pb-[10px]  xl:p-[20px] xl:pb-[10px]  3xl:p-[1.25vw]">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#101828] dark:text-[#fff] text-[20px] xl:text-[18px] 3xl:text-[1.042vw] font-medium">
                                            Dimension View
                                        </div>
                                        <div className='customDropdown  dark:bg-[#374151] dark:text-[#fff]'>
                                            <Dropdown
                                                value={metric}
                                                onChange={(e) => setSelectedMetric(e.value)}
                                                options={Metrics}
                                                optionLabel="name"
                                                placeholder="School Type"
                                                className="w-full  3xl:w-[8.688vw] dark:bg-[#374151] dark:text-[#fff]"
                                            />
                                        </div>
                                    </div>
                                    <LoaderContainer loading={Enrollment_Dimension_Viewloading} width={"100%"} height={"400px"}>
                                        <div className="h-[478px] 3xl:h-[24.896vw]">
                                            <HorizontalStackBarChart
                                                legend={{
                                                    show: true,
                                                    bottom: 0,
                                                    left: 5,
                                                    itemHeight: 10,
                                                    itemWidth: 10,
                                                    // data: [{ name: 'Current year', icon: 'circle', itemStyle: { color: '#1570EF' } },
                                                    // { name: 'Prior Year', icon: 'circle', itemStyle: { color: '#BACCE7' } }],
                                                    textStyle: {
                                                        //color: '#383874',
                                                        color: currentTheme == "dark" ? "#fff" : "#383874",
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
                                                    //color: '#4B586E',
                                                    color: currentTheme == "dark" ? "#fff" : "#4B586E",
                                                    fontSize: 10,
                                                    formatter: '{value}'
                                                }}
                                                yAxisLabel={{
                                                    show: true,
                                                    color: currentTheme == "dark" ? "#fff" : "#363A44",
                                                    fontSize: 10,
                                                    formatter: '{value}'
                                                }}
                                                name={['Current year', 'Prior Year']}
                                                color={['#1570EF', '#BACCE7']}
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
                                                        if (params >= 0) {
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
                                    </LoaderContainer>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <div className="bg-[#111928] text-white h-full px-[15px] lg:px-[25px] 3xl:px-[1.302vw] py-[15px] 3xl:py-[0.781vw] rounded-[10px] 3xl:rounded-[0.521vw]">
                                    <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[1.042vw] font-medium pb-[8px] 3xl:pb-[0.417vw] border-b border-[#2B3B4F] ">
                                        Students Group
                                    </div>
                                    <div className="space-y-[10px] xl:space-y-[8px] 3xl:space-y-[0.521vw] mt-[8px] 3xl:mt-[0.417vw]">
                                        {/* <StudentsGroupComponent title="SPED" value="0" percentage={0} /> */}
                                        <StudentsGroupComponent title="EL" value={Ell?.[0]?.['ELL']} percentage={Ell?.[0]?.['LY_VAR']} />
                                        <StudentsGroupComponent title="Eco. Disad." value={Eco_Disadvantage?.[0]?.["TOTAL_ENROLLMENT"]} percentage={Eco_Disadvantage?.[0]?.['LY_VAR']} />
                                        {/* <StudentsGroupComponent title="Foster Youth" value="0" percentage={0} /> */}
                                        <StudentsGroupComponent title="Hisspanic" value={Enrollment_HISPANIC?.[0]?.["HISPANIC"]} percentage={Enrollment_HISPANIC?.[0]?.["LY_VAR"]} />
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

export default Enrollment;
