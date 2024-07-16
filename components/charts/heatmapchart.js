import React from 'react'
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
export default function Heatmapchart({ data: heatMap = [], dimension }) {

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  // prettier-ignore
  const hours = [
    '0-50%', '50-75%', '76-99%', '100%'
  ];
  // prettier-ignore
  const days = [
    'High', 'Middle', 'Elementary',
    'Pre-K'
  ];

  // let heatMapColors = ["#90D1FF", "#3696FB", "#1861DD", "#162B55"]

  // prettier-ignore
  const data = [
    { value: [0, 0, 26], itemStyle: { color: '#90D1FF' } },
    { value: [0, 1, 5000], itemStyle: { color: '#90D1FF' } },
    { value: [0, 2, 5000], itemStyle: { color: '#90D1FF' } },
    { value: [0, 3, 5000], itemStyle: { color: '#90D1FF' } },
    { value: [1, 0, 5000], itemStyle: { color: '#3696FB' } },
    { value: [1, 1, 5000], itemStyle: { color: '#3696FB' } },
    { value: [1, 2, 5000], itemStyle: { color: '#3696FB' } },
    { value: [1, 3, 5000], itemStyle: { color: '#3696FB' } },
    { value: [2, 0, 5000], itemStyle: { color: '#1861DD' } },
    { value: [2, 1, 5000], itemStyle: { color: '#1861DD' } },
    { value: [2, 2, 5000], itemStyle: { color: '#1861DD' } },
    { value: [2, 3, 5000], itemStyle: { color: '#1861DD' } },
    { value: [3, 0, 5000], itemStyle: { color: '#162B55' } },
    { value: [3, 1, 5000], itemStyle: { color: '#162B55' } },
    { value: [3, 2, 5000], itemStyle: { color: '#162B55' } },
    { value: [3, 3, 5000], itemStyle: { color: '#162B55' } }];

  // Extract unique SCHOOL_TYPE and MONTH values
  let types = [...new Set(heatMap.map(x => x?.[dimension.toUpperCase()]))];
  let months = [...new Set(heatMap.map(x => x.MONTH))];

  // Create mappings from values to indices
  let schoolTypeIndexMap = types.reduce((acc, type, index) => {
    acc[type] = index;
    return acc;
  }, {});

  let monthIndexMap = months.reduce((acc, month, index) => {
    acc[month] = index;
    return acc;
  }, {});

  let heatMapColors = ['#90D1FF', '#3696FB', '#1861DD', '#162B55'];

  // Generate heatmap data
  let heatMapData = heatMap.map(item => {
    let i = schoolTypeIndexMap[item?.[dimension.toUpperCase()]];
    let j = monthIndexMap[item.MONTH];
    let value = item.CY_VALUE;

    return {
      value: [j, i, value],
      itemStyle: { color: heatMapColors[j] }
    };
  });


  const hitmap = {

    grid: {
      height: '55%',
      top: '10%',
      right: '0%',
      left: dimension === "School_type" ? '22%' : '15%'
    },
    xAxis: {
      type: 'category',
      data: months,
      splitArea: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLabel: { 
        color: currentTheme == "dark" ? "#fff" : "#667085",
      },
    },
    yAxis: {
      type: 'category',
      data: types,
      axisTick: {
        show: false
      },
      splitArea: {
        show: true
      },
      axisLabel: { 
        color: currentTheme == "dark" ? "#fff" : "#667085",
      },
    },
    visualMap: {
      show: false,
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },

    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        // data: data,
        data: heatMapData,
        label: {
          show: true
        },
        itemStyle: {
          borderColor: '#fff', // Border color
          borderWidth: 1 // Border width
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return (
    <ReactEcharts
      option={hitmap}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
