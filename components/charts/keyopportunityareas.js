import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from "echarts";
export default function KeyOpportunityAreas() {
  //darkblue Bar chart//
  const option = {
    grid: { containLabel: true, left: 5, top: 0, bottom: 0, right: 0 },
    xAxis: {
      type: 'value',
      max: 100,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false }
    },
    yAxis: [{
      type: 'category',
      data: [
        '--',
        '--',
        '--',
        '--',
        '--',],
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: true },
      axisLabel: {
        show: true,
        overflow: "breakAll",
        color: '#53565A',
        fontSize: 12,
        width: 100,
      }
    },
    {
      type: 'category',
      data: ['0%', '0%', '0%', '0%', '0%', '0%'],
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        show: true,
        fontSize: 10,
      }
    },
    ],
    series: [
      {
        data: [
          {
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0.6, color: "#0E9364", },
                { offset: 0, color: "#11B87C", },
              ]),
              borderRadius: [0, 6, 6, 0]
            },
          },
          {
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0.6, color: "#C6931A", },
                { offset: 0, color: "#F8B826", },
              ]),
              borderRadius: [0, 6, 6, 0]
            },
          },
          {
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0.6, color: "#B93E77", },
                { offset: 0, color: "#F196C0", },
              ]),
              borderRadius: [0, 6, 6, 0]
            },
          },
          {
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 1, color: "#768FB5", },
                { offset: 0, color: "#5F7391", },
              ]),
              borderRadius: [0, 6, 6, 0]
            },
          },
          {
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 1, color: "#1570EE", },
                { offset: 0, color: "#115ABF", },
              ]),
              borderRadius: [0, 6, 6, 0]
            },
          },
          {
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 1, color: "#1A4A93", },
                { offset: 0, color: "#163771", },
              ]),
              borderRadius: [0, 6, 6, 0]
            },
          }
        ],
        type: 'bar',
        stack: 'total',
        barWidth: '25%',
        label: {
          show: false,
          formatter: '{c}',
          position: 'outside',
        },
        itemStyle: {
          borderRadius: [0, 8, 8, 0]
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
          borderRadius: [0, 8, 8, 0]
        }
      },
    ]
  };
  //blue Bar chart// 




  return (
    <>
      <div className='w-full h-full'>
        <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </>
  )
}
