import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function BarwithLineChart({ data }) {

  const option = {
    legend: {
      show: true,
      bottom: 0,
      left: 0,
      itemHeight: 8,
      itemWidth: 8,
    },
    grid: {
      top: "10%",
      left: "3%",
      right: "3%",
      bottom: "10%",
      containLabel: true
    },
    xAxis: {
      name: 'Year',
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: {
        opacity: 0.6,
        color: "rgba(16, 24, 40, 1)",
        fontSize: 10
      },
      type: 'category',
      data: data ? data.map(item => item["SCHOOL_YEAR"]) : [
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
      ],
      axisLabel: {
        show: true,
        color: "rgba(52, 64, 84, 1)",
        fontSize: 10
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(227, 227, 227, 1)"
        }
      },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    yAxis: [
      {
        name: 'Count',
        nameLocation: "middle",
        nameGap: 45,
        nameTextStyle: {
          opacity: 0.6,
          color: "rgba(16, 24, 40, 1)",
          fontSize: 10
        },
        type: 'value',
        // max: 20000,
        // min: 0,
        // interval: 5000,
        axisLabel: {
          show: true,
          color: "rgba(52, 64, 84, 1)",
          fontSize: 10
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(227, 227, 227, 1)"
          }
        },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "rgba(227, 227, 227, 1)"
          }
        },
      },
      {
        name: 'Elem Grad %',
        nameLocation: "middle",
        nameGap: 40,
        nameTextStyle: {
          opacity: 0.6,
          color: "rgba(16, 24, 40, 1)",
          fontSize: 10
        },
        type: 'value',
        // max: 100,
        // min: 0,
        // interval: 25,
        axisLabel: {
          show: true,
          color: "rgba(52, 64, 84, 1)",
          fontSize: 10,
          formatter: '{value} %'
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "rgba(227, 227, 227, 1)"
          }
        },
      },
    ],
    series: [
      {
        name: 'Student Count',
        data: data ? data.map(item => item["CY_STUENT"]) : [8140, 9140, 10140, 11140, 12140, 13140, 14140, 15140, 16000, 17420, 18000],
        type: 'bar',
        color: '#019ADE',
        barWidth: '75%',
        label: {
          show: true,
          position: 'insideTop',
          fontSize: 9,
          color: '#fff',
        },
        itemStyle: {
          borderRadius: [4, 4, 0, 0]
        }
      },
      {
        name: 'Elem Grad %',
        data: data ? data.map(item => item["PERCENTAGE"]) : [82, 85, 79, 70, 78, 82, 85, 80, 82, 85, 85],
        type: 'line',
        color: '#000000',
        symbol: "circle",
        symbolSize: 8,
        label: {
          show: true,
          position: ['-150%', '-400%'],
          formatter: '{c} %',
          backgroundColor: "rgba(245, 247, 255, 1)",
          padding: [4, 10, 4, 10],
          color: "rgba(52, 64, 84, 1)",
          fontSize: 10,
          borderRadius: [4, 4, 4, 4]
        },
        yAxisIndex: 1,
      }
    ]
  };
  return (
    <ReactEcharts
      option={option}
      style={{ height: "100%", width: "100%" }}
    />
  )
}
