import React from 'react'
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";

export default function GradeRetentionRateChart({ data }) {

  const BarColorPalette = [
    '#ABB2B9', '#737577', '#35D294', '#069564', '#FAD0E7', '#F7AAD1', '#2ECC71',
    '#F39C12', '#E74C3C', '#9B59B6', '#2980B9', '#8E44AD', '#16A085', '#27AE60'
  ]; const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const gradeMapping = {};
  data?.forEach(grade => {
    gradeMapping[grade.GRADE_SHORT_NAME] = grade.GRADE_SHORT_NAME;
  });

  const GradeRetentionRate = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        const gradeGroupCode = params.name;
        const studentGrade = gradeMapping[gradeGroupCode];
        return `${params.marker} ${studentGrade} :${params.value}`;
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '8%',
      left: '3%',
      right: '4%',
      bottom: '12%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data?.map(item => item.GRADE_SHORT_NAME),
        axisLine: {
          show: false
        },
        axisLabel: {
          fontSize: 12,
          color: currentTheme == "dark" ? "#fff" : "#363A44",
          interval: 0,
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          fontSize: 12,
          color: currentTheme == "dark" ? "#fff" : "#363A44",
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      }
    ],
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      start: 0,
      end: 80,
      zoomLock: true,
      height: 12,
      handleSize: '10%',
      showDetail: false,
      brushSelect: false,
      bottom: 2
    }],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '50%',
        data: data?.map((item, index) => ({
          value: item.RATE,
          itemStyle: {
            color: BarColorPalette[index % BarColorPalette.length]
          }
        })),
        itemStyle: {
          borderRadius: [8, 6, 0, 0]
        }
      }
    ]
  };

  return (
    <ReactEcharts
      option={GradeRetentionRate}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
