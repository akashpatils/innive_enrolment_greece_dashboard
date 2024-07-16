import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function LineStackChart({  }) {

    const option = {
        legend: { show: false },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          top: "0%",
        },
        xAxis: {
          type: "value",
          min:0,
          max:100,
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: {
            show: false,
            color: "#4B586E",
            fontSize: 10,
            overflow: "truncate",
            formatter: "{value}",
          },
          axisTick: { show: false },
          inverse: true,
          splitLine: { show: false },
        },
        series: [
          {
            name: "",
            type: "bar",
            stack: 'Ad',
            data: [30],
            barWidth: "5",
            itemStyle: { borderRadius: [4, 0, 0, 4] },
            color: "#1570EF",
            label: {
              show: false,
            },
          },
          {
            name: "",
            type: "bar",
            stack: 'Ad',
            data: [30],
            barWidth: "5",
            itemStyle: { borderRadius: [0, 0, 0, 0] },
            color: "#5CB6FE",
            label: {
              show: false,
            },
          },
          {
            name: "",
            type: "bar",
            stack: 'Ad',
            data: [20],
            barWidth: "5",
            itemStyle: { borderRadius: [0, 0, 0, 0] },
            color: "#F8B720",
            label: {
              show: false,
            },
          },
          {
            name: "",
            type: "bar",
            stack: 'Ad',
            data: [10],
            barWidth: "5",
            itemStyle: { borderRadius: [0, 0, 0, 0] },
            color: "#BECDE3",
            label: {
              show: false,
            },
          },
          {
            name: "",
            type: "bar",
            stack: 'Ad',
            data: [10],
            barWidth: "5",
            itemStyle: { borderRadius: [0, 4, 4, 0] },
            color: "#E74D94",
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
