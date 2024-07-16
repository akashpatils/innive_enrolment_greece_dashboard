import React from 'react'
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import { useTheme } from 'next-themes';

export default function StudentDemandChart() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const StudentDemand = {
        tooltip:{
            show : true
        },
        legend: {
            show: true,
            left: '2%',
            bottom: '-2%',
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 11,
                color: "#00000099",
                fontWeight: "400",
            },
        },
        grid: {
            top: "12%",
            left: "3%",
            right: "3%",
            bottom: "10%",
            containLabel: true,
        },

        xAxis: {
            type: 'category',
            axisTick: { show: false },
            axisLine: {
                show: true,

                lineStyle: {
                    color: '#E6E3D9',
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 6
                }
            },
            axisLabel: {
                show: true,
                formatter: '{value}',
                textStyle: {
                    fontWeight: 500,
                    fontSize: 12,
                    color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                }
            },
            data: ['2019', '2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 12,
            interval: 2,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 6
                }
            },
            axisLabel: {
                show: true,
                formatter: '{value}k',
                textStyle: {
                    fontWeight: 500,
                    fontSize: 12,
                    color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                }
            },
        },
        series: [
            {
                name:'Total enrollment',
                data: [11, 10, 9, 10, 8, 10],
                type: 'bar',
                barWidth:'40%',
                itemStyle: {
                    color: '#005898',
                    borderRadius: [4, 4, 0, 0]
                },
                label: {
                    show: true,
                    position: 'insideTop',
                    color: '#fff',
                    formatter: "{c}k",
                    fontSize: 12,
                }
            }
        ]
    };

    return (
        <ReactEcharts
            option={StudentDemand}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
