import React from 'react'
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
export default function ColoredLineChart({ legend, grid, data, xAxisLabel, min, max, interval,yAxisName, yAxisNameGap, name, color, areaStyle1, areaStyle2, areaStyle3, areaStyle4, areaStyle5, areaStyle6 }) {
    let series = [];
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    for (let i = 0; i < name.length; i++) {
        series.push({
            name: name[i],
            type: "line",
            stack: "Total",
            color: color[i],
            areaStyle: { color: color[i], opacity: 1 },
            symbol: "none",
            lineStyle: {
                width: 0,
            },
            emphasis: {
                focus: "series",
            },
            data: data['value' + (i + 1)],
        });
    }
    const option = {
        tooltip: { trigger: "axis" },
        legend: legend,
        grid: grid,
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: data.label,
            axisLabel: xAxisLabel,
            axisLine: {
                show: true,
                lineStyle: {
                    type: "solid",
                    color: "#E6E6E6",
                },
            },
            axisTick: { show: false },
            splitLine: { show: false },
        },
        yAxis: {
            type: "value",
            min: min,
            max: max,
            interval: interval,
            name: yAxisName,
            nameGap: yAxisNameGap,
            nameLocation: "middle",
            nameRotate: 90,
            nameTextStyle: {
                fontSize: 11,
                //color: "#101828",
                color: currentTheme == "dark" ? "#fff" : "#101828",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    type: "solid",
                    color: "#E6E6E6",
                },
            },
            splitLine: { show: false },
            axisLabel: { fontSize: 0 },
        },
        series: series
        // series: [
        //     {
        //         name: name[0],
        //         type: "line",
        //         stack: "Total",
        //         color:color[0],
        //         areaStyle: areaStyle1,
        //         symbol: "none",
        //         lineStyle: {
        //             width: 0,
        //         },
        //         emphasis: {
        //             focus: "series",
        //         },
        //         data: data.value1,
        //     },
        //     {
        //         name: name[1],
        //         type: "line",
        //         stack: "Total",
        //         color:color[1],
        //         areaStyle: areaStyle2,
        //         symbol: "none",
        //         lineStyle: {
        //             width: 0,
        //         },
        //         emphasis: {
        //             focus: "series",
        //         },
        //         data: data.value2,
        //     },
        //     {
        //         name: name[2],
        //         type: "line",
        //         stack: "Total",
        //         color:color[2],
        //         areaStyle: areaStyle3,
        //         symbol: "none",
        //         lineStyle: {
        //             width: 0,
        //         },
        //         emphasis: {
        //             focus: "series",
        //         },
        //         data: data.value3
        //     },
        //     {
        //         name: name[3],
        //         type: "line",
        //         stack: "Total",
        //         symbol: "none",
        //         color:color[3],
        //         areaStyle: areaStyle4,
        //         lineStyle: {
        //             width: 0,
        //         },
        //         emphasis: {
        //             focus: "series",
        //         },
        //         data: data.value4,
        //     },
        //     {
        //         name: name[4],
        //         type: "line",
        //         stack: "Total",
        //         color:color[4],
        //         areaStyle: areaStyle5,
        //         symbol: "none",
        //         lineStyle: {
        //             width: 0,
        //         },
        //         emphasis: {
        //             focus: "series",
        //         },
        //         data: data.value5,
        //     },
        //     {
        //         name: name[5],
        //         type: "line",
        //         stack: "Total",
        //         color:color[5],
        //         areaStyle: areaStyle6,
        //         symbol: "none",
        //         lineStyle: {
        //             width: 0,
        //         },
        //         emphasis: {
        //             focus: "series",
        //         },
        //         data: data.value6,
        //     },
        // ],
    };
    return (
        <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
