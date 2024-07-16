import React from 'react'
import ReactEcharts from 'echarts-for-react';

export default function HighestMovement() {
    const option = {
        tooltip: { show: false },
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
            bottom: "10%",
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
                data: ["2019", "2020", "2021", "2022","2023"],
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
                label:{
                  show: true
                },
                type: "value",
                min: 0,
                max: 2000,
                interval: 500,
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
            
        ],
        series: [
            {
                name: "School 1",
                data: [1720, 1675, 1630, 1585,1540],
                type: "bar",
                 label: {
                    show: true,
                   position: 'top-inside',
                   padding: [8,0,0,2.5],
                   fontSize: 9,
                },
                color: "#005898",
                barWidth: '25%',
                barGap: '0%',
                itemStyle: {
                    borderRadius: [4, 3, 0, 0],

                },
            },
            {
                name: "School 2",
                data: [1640, 1625, 1610, 1595, 1480],
                type: "bar",
                 label: {
                    show: true,
                   position: 'top-inside',
                   padding: [8,0,0,2.5],
                   color: "#fff",
                   fontSize: 9,
                },
                color: "#02C1FE",
                barWidth: '25%',
                barGap: '0%',
                itemStyle: {
                    borderRadius: [4, 3, 0, 0],

                },
            },
              {
                name: "School 3",
                data: [1500, 1420, 1340, 1260, 1180],
                type: "bar",
                 label: {
                    show: true,
                   position: 'top-inside',
                   padding: [8,0,0,2.5],
                   fontSize: 9,
                },
                color: "#019ADE",
                barWidth: '25%',
                barGap: '0%',
                itemStyle: {
                    borderRadius: [4, 3, 0, 0],

                },
            },
            
        ],
    };

    return (
        <ReactEcharts
            option={option}
            style={{ height: '100%', width: '100%' }}
        />
    )
}
