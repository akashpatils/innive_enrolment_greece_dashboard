import React from 'react'
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import { useTheme } from 'next-themes';

export default function EnrollmentChart() {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const Enrollment = {
    grid: {
      top: "10%",
      left: "3%",
      right: "3%",
      bottom: "5%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      splitLine: {
        show: true,
        lineStyle: { color: "rgba(255,255,255,0.14)" },
      },
      axisLine: { show: false },

      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
          width: 6
        }
      },
      axisLabel: {
        show: true,
        formatter: '{value}',
        textStyle: {
          fontWeight: 500,
          fontSize: 12,
          color: currentTheme == "dark" ? "#ffff" : '#6C768B',
        }
      },
      data: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
    },
    yAxis: {
      type: "value",
      max: 30,
      interval: 10,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },

      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
          width: 6
        }
      },
      axisLabel: {
        show: true,
        formatter: '{value}k',
        textStyle: {
          fontWeight: 500,
          fontSize: 12,
          color: currentTheme == "dark" ? "#ffff" : '#6C768B',
        }
      },
    },

    series: [

      {
        smooth: true,
        data: [17, 18, 19, 20, 21, 23, 25, 27, 29, 30],
        name: "Approved",
        type: "line",
        symbolSize: 0,

        lineStyle: { color: "#1861DD", width: 2 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(24, 97, 221, 0.32) ",
            },
            {
              offset: 1,
              color: "rgba(24, 97, 221, 0) ",
            },
          ])
        }

      }
      ,],
  };
  return (
    <ReactEcharts
      option={Enrollment}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
