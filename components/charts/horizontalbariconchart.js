import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';

export default function HorizontalBarChartwithIcon({ currentTheme, grid, xAxisMax, xaxisLabel, xaxisTick, xaxisLine, xsplitLine, yAxisData, YaxisLabel, YaxisTick, YaxisLine, YsplitLine, yAxisData2, seriesData, Barcolor, Barlabel, BarborderRadius, BarshowBackground, BarbackgroundColor, BarbackgroundborderRadius, YaxisTick2, YaxisLine2, YsplitLine2, barwidth }) {
0
    const option = {
        grid:grid,
      xAxis: {
         type: 'value',
         max:xAxisMax,
        axisLabel:xaxisLabel,
        axisTick:xaxisTick,
        axisLine:xaxisLine,
        splitLine:xsplitLine,
      },
      yAxis:[ {
         type: 'category',
         data:yAxisData,
        axisLabel:YaxisLabel,
        axisTick:YaxisTick,
        axisLine:YaxisLine,
        splitLine:YsplitLine
      },
      {
      type: 'category',
       data: yAxisData2,
          axisLabel: {
            formatter: function (value) {
              switch (value) {
                case '71':
                  return '{1|} 71';
                case '93':
                  return '{2|} 93';
                case '131':
                  return '{3|} 131';
                case '191':
                  return '{3|} 191';
                case '290':
                  return '{3|} 290';
                case '295':
                  return '{3|} 295';
                default:
                  return value;
              }
            },
            rich: {
              1: {
                height: 15,
                width:15,
                align: 'center',
                backgroundColor: {
                  image: '/images/users.svg'
                }
              },
              2: {
                height: 15,
                width:15,
                align: 'center',
                backgroundColor: {
                  image: '/images/users.svg'
                }
              },
              3: {
                height: 15,
                width:15,
                align: 'center',
                backgroundColor: {
                  image: '/images/users.svg'
                }
              },
            }
          },
        axisTick:YaxisTick2,
        axisLine:YaxisLine2,
        splitLine:YsplitLine2
      },
      ],
      series: [
        {
          data: seriesData,
          type: 'bar',
          stack:'total',
          color:Barcolor,
          barWidth:barwidth,
          label:Barlabel,
          itemStyle: {
          borderRadius: BarborderRadius
          },
          showBackground:BarshowBackground,
           backgroundStyle: {
          color: BarbackgroundColor,
          borderRadius: BarbackgroundborderRadius
          }
        },
      ]
      };
  return (
    <ReactEcharts
      option={option}
      style={{ height: "100%", width: "100%" }}
    />
  )
}
