import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from "echarts";
import Left from '../layout/left';
export default function PopulationEthnicity() {
    const option = {
        grid: {
            containLabel: true,
            left:0,
            top:0,
            right:'2%',
            bottom:0,
          },
        xAxis: {
            type: 'value',
            max:150,
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {show: false}
          },
          yAxis:[ {
            type: 'category',
            data: ['Pacific Islander', 'Hispanic', 'Black', 'Asian', 'White'],
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {
              show: true,
              overflow: "breakAll",
              color:'#53565A',
              fontSize:12,
               width: 50,
            }
          },
          {
            type: 'category',
            data: ['10%', '10%', '10%', '22%', '22%'],
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: true},
            axisLabel: {
              show: true,
              backgroundColor: "rgba(245, 246, 247, 1)",
              padding: [4, 4, 4, 4],
              color: "rgba(83, 86, 90, 1)",
              fontSize: 10,
              borderRadius: [8, 8, 8, 8],
              margin: 5
            }
          },
          ],
          series: [
            {
              data: [25, 120, 80, 50, 60],
              barWidth: '50%',
              type: 'bar',
              stack: 'total',
              label:{
                show:true,
                formatter: '{c}',
                position:'outside',
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                offset: 1,
                color: "#6480AB",
                },
                {
                offset: 0,
                color: "#506789",
                },
                ]),

                borderRadius: [0, 6, 6, 0]
                },
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
                borderRadius: [0, 8, 8, 0]
              }
            },
          ]
    };
    
    
      
  return (
    <>
    <ReactEcharts
      option={option}
      style={{ height: '100%', width: '100%' }}
    />
  </>
  )
}
