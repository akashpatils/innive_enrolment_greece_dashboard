import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Tabbarchart({ data }) {


    const option = {
        legend: {
            show: true,
            bottom: '0%',
            left: '3%',
            width: '70%',
            itemHeight: 10,
            itemWidth: 10,
            itemGap: 20,
            textStyle: {
                color: '#101828',
                fontSize: 12
            }
        },
        grid: {
            top: '10%',
            bottom: '10%',
            left: "7%",
            right: '7%',
            containLabel: true
        },
        xAxis: [
            //         {
            //         type: 'category',
            //         axisTick: {
            //             show: false
            //         },
            //         data: ['2019', '2020', '2021', '2022', '2023']
            // }
            {
                name: "Year",
                nameLocation: "middle",
                nameGap: 35,
                nameTextStyle: {
                    color: "#98A2B3",
                    fontSize: 10,
                    fontWeight: 400,
                },
                type: "category",
                data: data.map(item => item["YEAR"]),
                axisLabel: {
                    color: "#667085",
                    show: true,
                    fontSize: 9,
                    fontWeight: 400,
                    lineHeight: 16,
                    overflow: "truncate"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3",
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
            },
        ],
        yAxis: [
            {
                name: "Count",
                nameLocation: "middle",
                nameGap: 45,
                nameTextStyle: {
                    color: "#98A2B3",
                    fontSize: 10,
                    fontWeight: 400,
                },
                label: {
                    show: true
                },
                type: "value",
                // min: 0,
                // max: 25,
                axisLabel: {

                    color: "#667085",
                    show: true,
                    fontSize: 10,
                    fontWeight: 400,
                    overflow: "truncate"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3"
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#C6CBD2",
                        type: "dashed"
                    },
                },
            },
            {
                name: "Year",
                nameLocation: "middle",
                nameGap: 50,
                nameTextStyle: {
                    color: "#98A2B3",
                    fontSize: 10,
                    fontWeight: 400,
                },
                type: "value",
                // min: 0,
                // max: 30,
                // interval: 10,
                splitLine: {
                    show: false,
                    lineStyle: {
                        show: false,
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    formatter: '{value}%'  // This formats the axis label as percentage
                }
            },
        ],
        series: [
            {
                data: data.map(item => item["SCHOOL_COUNT"]),
                name: 'Schools',
                type: 'bar',
                barGap: '10%',
                barWidth: '80%',
                color: '#019ADE',
                label: {
                    show: true,
                    position: 'insidetopcenter',
                    offset: [0, 3],
                    padding: [8, 0, 0, 40],
                    textStyle: {
                        color: 'white',
                        fontSize: 10,
                        fontWeight: 500
                    },

                }
            },
            {
                data: data.map(item => item["PERCENTAGE"]),
                label: {
                    show: true,
                    position: 'top',
                    offset: [0, -10],
                    padding: [-20, 0, 0, 0],
                    textStyle: {
                        color: '#344054',
                        fontSize: 10,
                        fontWeight: 500
                    },
                    rich: {
                        labelBg: {
                            backgroundColor: '#F5F7FF',
                            padding: [4, 4],
                            borderRadius: 4,
                            lineHeight: 10
                        }
                    },
                    formatter: function (params) {
                        return '{labelBg|' + (params.value).toFixed(2) + '%}';
                    }
                },
                name: '% of Schools',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                barGap: '0%',
                color: ['#000']
            }
        ]
    };

    return (
        <>
            <ReactEcharts
                option={option}
                style={{ height: '100%', width: '100%' }}
                opts={{ renderer: 'svg' }}
            />
        </>
    )
}
