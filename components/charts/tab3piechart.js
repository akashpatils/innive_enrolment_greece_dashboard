import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Tab3piechart({data}) {
    const option = {
      tooltip: {
        show : false,
        trigger: 'item',
        formatter: '{b}', // Only show name in tooltip
        textStyle: {
          color: 'black' // Set tooltip name color to black
        }
      },
      legend: {
        show: false
      },
      series: [
        {
          type: 'pie',
          radius: ['45%', '100%'],
          center:['50%','50%'],
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 4,
            borderRadius: 4
          },
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'inside',
            backgroundColor: '#fff', // Set label background color to #fff
           borderColor: 'rgba(0, 0, 0, 0)', // Set label border color to #000
            borderWidth: 1, // Set label border width
            padding: [2,2],
            color: '#000',
            fontSize: 9,
            borderRadius:3,
            formatter:'{c}'
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              fontSize: 8,
              // fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data,
          color: ['#00B929', '#019ADE', '#E32A6D'],
        }
      ]
    };
    
    
      
  return (
    <>
    <ReactEcharts
      option={option}
      style={{ height: '100%', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  </>
  )
}
