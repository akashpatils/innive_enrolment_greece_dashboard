import React from 'react'
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import { useTheme } from 'next-themes';

export default function EnrollmentAdjustmentChart() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const Enrollmentadjustment = {
        tooltip:{
            show : true
        },
        grid: {
            top: "10%",
            left: "3%",
            right: "3%",
            bottom: "5%",
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
            data: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10']
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 30,
            interval: 10,
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
                data: [30, 28, 19, 15, 12, 20, 22, 24, 26, 28],
                type: 'bar',
                itemStyle: {
                    color: 'rgba(54, 150, 251, 0.6)',
                    borderRadius: [4, 4, 0, 0]
                },
                label: {
                    show: true,
                    position: 'insideTop',
                    color: '#fff',
                    formatter: "{c}",
                    fontSize: 12,
                }
            }
        ]
    };

    return (
        <ReactEcharts
            option={Enrollmentadjustment}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
