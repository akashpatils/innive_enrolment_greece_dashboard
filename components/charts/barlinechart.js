import React from 'react'
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
export default function BarLineChart({ legend, grid, data, xAxisLabel, yAxisLabel, label1, label2, color, name }) {

    const maxValue = Math.max(...data?.values1, ...data?.values2, ...data?.values3);
    const minValue = -Math.max(...data?.values1);

    const onChartClick = (params) => {
    };
    const onEvents = {
        click: onChartClick,
    };
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const option = {

        tooltip: {
            trigger: "axis",
            show: "true",
            formatter: function (params) {
                let tooltipContent = +params[0].axisValueLabel + '<br>';
                params?.forEach(function (item) {
                    if (item.componentSubType === 'bar' || item.componentSubType === 'line') {
                        const value = Math.abs(item.value)
                        const Value = value > 1000 ? (value / 1000).toFixed(1) + "k" : value
                        tooltipContent += item.marker + item.seriesName + ': ' + Value + '<br>';
                    }
                });
                return tooltipContent;
            }
        },
        legend: legend,
        grid: grid,
        xAxis: [
            {
                type: 'category',
                data: data?.labels,
                axisTick: { show: false },
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: "solid",
                        color: "white",
                    }
                },
                axisLabel: xAxisLabel
            },
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#E5E7EB",
                    },
                },
                axisLabel: yAxisLabel,
                min: minValue,
                max: maxValue,
                // interval: interval
            }
        ],
        series: [
            {
                name: name[0],
                type: 'bar',
                stack: 'Ad',
                color: color[0],
                emphasis: { focus: 'series' },
                itemStyle: {
                    borderRadius: [0, 0, 0, 0],
                    opacity: 0.6,
                },
                label: label1,
                data: data?.values1.map(value => -value)  // Position below the x-axis
            },
            {
                name: name[1],
                type: 'bar',
                stack: 'Ad',
                color: color[1],
                itemStyle: {
                    borderRadius: [0, 0, 0, 0],
                    opacity: 0.6,
                },
                label: label2,
                emphasis: { focus: 'series' },
                data: data?.values2  // Position above the x-axis
            },
            {
                name: name[2],
                type: 'line',
                color: currentTheme == "dark" ? "#fff" : "#6C768B",
                smooth: true,
                //color: color[2],
                symbol: 'circle',
                symbolSize: '0',
                emphasis: { focus: 'series' },
                label: { show: false },
                data: data?.values3
            },
        ]
    };

    return (
        <ReactEcharts
            onEvents={onEvents}
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
