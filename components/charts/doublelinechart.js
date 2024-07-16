import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function DoubleLineChart({ currentTheme, grid, xAxisLabel, xAxisLine, xAxisTick, xAxisSplitLine, yAxisMax, yAxisMin, yAxisLabel, yAxisLine, yAxisTick, yAxisSplitLine, data1, Linesmooth, color1, data2, color2, legend }) {

  const option = {
    lalegend:legend,
    grid:grid,
    xAxis: {
    type: 'category',
    axisLabel:xAxisLabel,
    axisLine:xAxisLine,
    axisTick:xAxisTick,
    splitLine:xAxisSplitLine,
    },
    yAxis: {
    type: 'value',
    max:yAxisMax,
    min:yAxisMin,
    axisLabel:yAxisLabel,
    axisLine:yAxisLine,
    axisTick:yAxisTick,
    splitLine:yAxisSplitLine,
    },
    series: [
    {
    data: data1,
    type: 'line',
    smooth: Linesmooth,
    color:color1,
    showSymbol: false,
    },
    {
    data: data2,
    type: 'line',
    smooth: Linesmooth,
    color:color2,
    showSymbol: false,
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
