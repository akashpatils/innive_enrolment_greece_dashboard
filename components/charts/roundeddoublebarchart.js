import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function RoundedDoubleBarChart({ legend, grid, data, xAxisLabel, min, max, interval, color, name,barWidth}) {

    const option = {
        tooltip: {},
        legend: legend,
        grid: grid,
        xAxis: {
            type: "category",
            data: data.label,
            axisLabel: xAxisLabel,
            axisLine: { show: true , lineStyle : {color: '#D0D5DD'}},
            axisTick: { show: false },
            splitLine: { show: false },
        },
        yAxis: {
            type: "value",
            min: min,
            max: max,
            interval: interval,
            axisLine: {show: false},
            splitLine: {show: false},
            axisLabel: {show: false},
        },
        series: [
            {
                name: name[0],
                stack: "Ad",
                data: data.value1,
                type: "bar",
                color: color[0],
                // barGap: '30%',
                // barWidth: barWidth,
                label: { show: false},
                itemStyle: {
                    borderRadius: [30, 30, 0, 0],
                },
            },
            {
                name: name[1],
                stack: "vendor",
                data: data.value2,
                type: "bar",
                color: color[1],
                // barGap: '30%',
                // barWidth: barWidth,
                label: {
                    show: false,
                },
                itemStyle: {
                    // borderRadius: [30, 30, 0, 0],
                },
            },
            {
                name: name[2],
                stack: "vendor",
                data: data.value3,
                type: "bar",
                color: color[2],
                // barGap: '30%',
                // barWidth: barWidth,
                itemStyle: {
                    borderRadius: [30, 30, 0, 0],
                },
                label: {
                    show: false,
                },
            },
        ],
    };
    return (
        <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
