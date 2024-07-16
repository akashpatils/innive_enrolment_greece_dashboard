import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Piechart() {
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
          radius: ['40%', '80%'],
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 3,
            borderRadius: 4,

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
            fontSize: 8,
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
          data: [
            { value: 1048, name: '14,500' },
            { value: 735, name: '509' },
            { value: 580, name: '15,000' }
          ],
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
