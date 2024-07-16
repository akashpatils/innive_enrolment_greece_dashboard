import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function BarChart() {
    const option = {     
        grid:{top:0,bottom:0,left:0,right:0},
        legend: {data: ['36,874', '28,412'], bottom:0,show:false},   
        xAxis: { type: 'value',
        splitLine:{show:false },
        axisLine:{ show:false }},
        yAxis:{type: 'category',
        data: ['Mon'],
        axisLine:{show:false}},
        series: [{name:'36,874',data: [503],type:'bar',barGap: 0,barWidth:'80%',itemStyle: {color: '#768FB5',barBorderRadius: [0, 4, 4, 0]}},
        {name:'28,412', data: [358], type:'bar', barGap:'-85%', barWidth:'56%', itemStyle: {color: '#D62C72', barBorderRadius: [0, 4, 4, 0]}}] 
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