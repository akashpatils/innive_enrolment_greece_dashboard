import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function HorizontalStackBarChart({ legend, grid, data, xAxisLabel, yAxisLabel, yAxisLabel2, label1, label2, color, name }) {

    const option = {
        tooltip: {
            trigger: "axis"
        },
        legend: legend,
        grid: grid,
        yAxis: [
            {
                type: 'category',
                data: data.labels,
                axisTick: { show: false },
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: "solid",
                        color: "white",
                    }
                },
                axisLabel: yAxisLabel
            },
            {
                type: 'category',
                data: data.labels2,
                axisTick: { show: false },
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: "solid",
                        color: "white",
                    }
                },
                axisLabel: yAxisLabel2
            },
        ],
        xAxis: [
            {
                type: 'value',
                // min: 0,
                // interval: 1000,
                // max: 8000,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#E5E7EB",
                    },
                },
                axisLabel: xAxisLabel
            }
        ],
        series: [
            {
                name: name[0],
                type: 'bar',
                barWidth: '40%',
                label: label1,
                itemStyle: {
                    color: color[0],
                    barBorderRadius: [0, 4, 4, 0]
                },
                data: data.values2
            },
            {
                name: name[1],
                type: 'bar',
                barGap: '-80%',
                barWidth: '25%',
                label: label1,
                itemStyle: {
                    color: color[1],
                    barBorderRadius: [0, 4, 4, 0]
                },
                data: data.values1
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
