import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function Linechart({ currentTheme, grid, boundaryGap, XaxissplitLine, Xaxisdata, XaxisTick, XaxisLine, YaxisLabel, YsplitLine, data, Yaxismax, YaxisInterval, splitLineLineStyle, YaxisColor, linecolorwidth, LinearGradientcolor1, LinearGradientcolor2, YaxisFormatter = '{value}k', XaxisShow = true, name1, name2, legend, data2, linecolor1, linecolor2, linecolorwidth2 }) {

  const linechart = {
    legend: legend,
    grid: grid,
    xAxis: {
      type: "category",
      show: XaxisShow,
      boundaryGap: boundaryGap,
      splitLine: {
        show: XaxissplitLine,
        lineStyle: { color: "rgba(255,255,255,0.14)" },
      },
      axisLine: XaxisLine,
      axisLabel: {

        textStyle: {
          fontWeight: 500,
          fontSize: 12,
          color: currentTheme == "dark" ? "#ffff" : '#6C768B',
        }
      },
      axisTick: XaxisTick,
      data: Xaxisdata,
    },
    yAxis: {
      type: "value",
      max: Yaxismax,
      interval: YaxisInterval,
      splitLine: {
        show: YsplitLine,
        lineStyle: splitLineLineStyle
      },
      axisLabel: {
        show: YaxisLabel,
        formatter: YaxisFormatter,
        textStyle: {
          fontWeight: 500,
          fontSize: 12,
          color: currentTheme == "dark" ? "#ffff" : '#6C768B',
        }
      },
    },
    color: YaxisColor,
    series: [
      {
        smooth: true,
        data: data,
        name: name1,
        type: "line",
        color: linecolor1,
        symbolSize: 0,
        lineStyle: linecolorwidth,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: LinearGradientcolor1,
            },
            {
              offset: 1,
              color: LinearGradientcolor2,
            },
          ])
        }
      },
      {
        smooth: true,
        data: data2,
        name: name2,
        type: "line",
        symbolSize: 0,
        lineStyle: linecolorwidth2,
        color: linecolor2
      },
    ],
  };
  return (
    <ReactEcharts
      option={linechart}
      style={{ height: "100%", width: "100%" }}
    />
  )
}
