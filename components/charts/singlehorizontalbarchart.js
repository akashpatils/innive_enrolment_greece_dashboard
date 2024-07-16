import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function Singlehorizontalbarchart({grid,xaxismin,xaxismax,xaxisinterval,xaxislabel,xaxissplitLine,yaxisleftlabel,yaxislefttick,yaxisleftline,yaxisleftdata,yaxisrightlabel,yaxisrightttick,yaxisrightline,yaxisrightdata,name,showBackground,backgroundColor,label,itemStyle,data2}) {
  const barchart = {
    tooltip:{
      show : true
    },
    grid:grid,
    xAxis: {
      type: 'value',
          min: xaxismin,
          max: xaxismax,
          interval: xaxisinterval,
          axisLabel:xaxislabel,
          splitLine:xaxissplitLine,
    },
    yAxis:[ {
      type: 'category',
      axisLabel:yaxisleftlabel,
      axisTick:yaxislefttick,
      axisLine:yaxisleftline,
      data:yaxisleftdata
    }, {
      type: 'category',
      axisLabel:yaxisrightlabel,
      axisTick:yaxisrightttick,
      axisLine:yaxisrightline,
      data: yaxisrightdata
    }],
    series: [
      {
        name:name,
         showBackground: showBackground,
        backgroundStyle:backgroundColor,
        type: 'bar',
            label:label,
         itemStyle:itemStyle,
        data:data2
      }
    ]
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  return (
    <ReactEcharts
        option={barchart}
        style={{ height: "100%", width: "100%" }}
    />
  )
}
