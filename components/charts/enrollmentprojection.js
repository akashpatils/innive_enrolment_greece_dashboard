import React from 'react'
import ReactEcharts from 'echarts-for-react';

export default function EnrollmentProjection({ color1, Linesmooth, data1 }) {
    const option = {
        tooltip: { show:false },
        legend: {
            show: true,
            left: '0%',
            bottom: 0,
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 10,
                color: "#00000099",
                fontWeight: "400",
            },
        },
        grid: {
            left: "5%",
            right: "1%",
            top: "10%",
            bottom: "15%",
            containLabel: true,
        },
        xAxis: [
            {
                name: "Year",
                nameLocation: "middle",
                nameGap: 25,
                nameTextStyle: {
                    color: "#98A2B3",
                    fontSize: 10,
                    fontWeight: 400,
                },
                type: "category",
                data: ["2024", "2027", "2029", "2034"],
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
                nameGap: 35,
                nameTextStyle: {
                    color: "#98A2B3",
                    fontSize: 10,
                    fontWeight: 400,
                },
                type: "value",
                min: 0,
                max: 50,
                interval: 10,
                axisLabel: {
                    formatter: "{value}k",
                    color: "#667085",
                    show: true,
                    fontSize: 10,
                    fontWeight: 400,
                    overflow: "truncate"
                },
                axisLine: {
                    show: false,
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
                name: "Conversion %",
                nameLocation: "middle",
                nameGap: 30,
                nameTextStyle: {
                    color: "#98A2B3",
                    fontSize: 10,
                    fontWeight: 400,
                },
                type: "value",
                min: 0,
                max: 100,
                interval: 25,
                axisLabel: {
                    formatter: "{value}%",
                    color: "#667085",
                    show: true,
                    fontSize: 10,
                    fontWeight: 400,
                    overflow: "truncate"
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#EAEDF3"
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [
            {
                name: "Student Population",
                data: [34, 38, 42, 48],
                type: "bar",
                color: "#005898",
                barWidth: '25%',
                barGap: '0%',
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],

                },
                label:{
                    show:true,
                    position:'insideTop',
                    color:'#fff',
                    formatter: "{c}k",
                  },
            },
            {
                name: "Enrollment",
                data: [32, 36, 40, 44],
                type: "bar",
                color: "#02C1FE",
                barWidth: '25%',
                barGap: '0%',
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],

                },
                label:{
                    show:true,
                    position:'insideTop',
                    color:'#fff',
                    formatter: "{c}k",
                  },
            },
            {
                name:'Conversion %',
                data: [34, 38, 42, 48],
                type: 'line',
                smooth: Linesmooth,
                color: color1,
                showSymbol: true,
                label:{
                    show:true,
                    position:'outside',
                    color:'#000',
                    formatter: "{c}%",
                  },
            }
        ],
    };

    return (
        <ReactEcharts
            option={option}
            style={{ height: '100%', width: '100%' }}
        />
    )
}