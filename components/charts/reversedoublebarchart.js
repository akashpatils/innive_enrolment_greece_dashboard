import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function ReverseDoubleBarChart({ }) {

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: false,
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            top: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['+3%', '+4%', '+3%', '+3%', '+3%', '+3%', '+3%', '+4%', '+4%', '+3%', '+3%'],
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { show: false }
            },
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                  show: false
                },
                min: 0,
                max: -1.2,
                interval: 0.4,
                axisLabel: {
                  show: false
                }
            }
        ],
        series: [
            {
                name: 'Drinks',
                type: 'bar',
                stack: 'Ads',
                barWidth: '30%',
                color: '#F7AAD1',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                  borderRadius: [2]
              },
                data: [-0.6, -0.6, -0.6, -0.5, -0.6, -0.5, -0.5, -0.6, -0.5, -0.6, -0.5, -0.6,]
            },
            {
                name: 'Drinks',
                type: 'bar',
                stack: 'Ad',
                barWidth: '30%',
                color: '#D62C72',
                itemStyle: {
                    borderRadius: [2]
                },
                emphasis: { focus: 'series' },
                data: [-0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3,]
            },
        ]
    };
    return (
        <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
