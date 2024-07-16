import React from 'react'
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
import { formatNumberWithCommas } from '../utils';

export default function TotalEnrollmentChart({ data }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // const BarColorPalette = ['#ABB2B9', '#737577', '#35D294', '#069564', '#FAD0E7', '#F7AAD1', '#2ECC71']
  // const BarData = (len, index, value) => {
  //   let data = new Array(len).fill(0);
  //   data[index] = value;
  //   return data;
  // }

  // const TotalEnrollment = {
  //   tooltip: {
  //     show: true,
  //     formatter: function (params) {
  //       return `${params.marker} ${params.name} : <b>${params.value}</b>`
  //     }
  //   },
  //   legend: {
  //     data: data?.map(x => x?.METRICNAME), //['Continuing','Transfer W/ District','New','Re-Entered','Transferred Out','Dropout','Current Enrollment'],
  //     // data: ['Continuing', 'Transfer W/ District', 'New', 'Re-Entered', 'Transferred Out', 'Dropout', 'Current Enrollment'],
  //     show: true,
  //     left: 'center',
  //     top: 'bottom',
  //     icon: 'circle',
  //     itemWidth: 13,
  //     itemHeight: 13,
  //     textStyle: {
  //       fontSize: 11,
  //       color: currentTheme == "dark" ? "#fff" : "#6C768B",
  //     }
  //   },
  //   grid: {
  //     top: '13%',
  //     left: '3%',
  //     right: '0%',
  //     bottom: '12%',
  //     containLabel: true
  //   },
  //   xAxis: {
  //     type: 'category',
  //     splitLine: { show: false },
  //     axisLabel: {
  //       show: true
  //     },
  //     axisLine: {
  //       show: false
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     data: data?.map(x => x?.METRICNAME)
  //     // data: ['Continuing', 'Transfer W/ District', 'New', 'Re-Entered',]
  //   },
  //   yAxis: {
  //     type: 'value',
  //     // min:0,
  //     // max:500,
  //     axisLine: {
  //       show: false,
  //       lineStyle: {
  //         color: '#fff',
  //         width: 6
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         fontWeight: 500,
  //         fontSize: 12,
  //         color: '#9CA1AB'
  //       }
  //     },
  //     splitLine: {
  //       show: false,
  //       lineStyle: {
  //         color: '#00',
  //         width: 6
  //       }
  //     }
  //   },


  //   series:
  //     data.map((x, i) => {
  //       return {
  //         name: x?.METRICNAME,
  //         type: 'bar',
  //         stack: 'Total',
  //         borderWidth: 200,
  //         barWidth: 90,
  //         itemStyle: {
  //           borderRadius: [4, 4, 0, 0],
  //           color: BarColorPalette[i % 7]
  //         },
  //         data: BarData(data.length, i, x?.CY_VALUE)
  //       }
  //     })

  // };
  // const options = {

  //   legend: {
  //     data: ['Continuing', 'Transfer W/ District', 'New', 'Re-Entered', 'Transferred Out', 'Dropout', 'Current Enrollment'],
  //     icon: 'circle',
  //     itemWidth: 13,
  //     itemHeight: 13,
  //     textStyle: {
  //       fontSize: 11,
  //       color: '#9CA1AB',
  //     }
  //   },
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis: {
  //     type: 'category',
  //     splitLine: { show: false },
  //     axisLabel: {
  //       show: false
  //     },
  //     axisLine: {
  //       show: false
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     data: ['Continuing', 'Transfer W/ District', 'New', 'Re-Entered', 'Transferred Out', 'Dropout', 'Current Enrollment']
  //   },
  //   yAxis: [{
  //     type: 'value',
  //     min: 0,
  //     max: 500,
  //     axisLine: {
  //       show: true,
  //       lineStyle: {
  //         color: '#fff',
  //         width: 6
  //       }
  //     },
  //     axisLabel: {
  //       show: true,
  //       textStyle: {
  //         fontWeight: 500,
  //         fontSize: 12,
  //         color: '#9CA1AB'
  //       }
  //     },

  //   }, {
  //     type: 'value',
  //     min: 0,
  //     max: 500,
  //     axisLine: {
  //       show: true,
  //       lineStyle: {
  //         color: '#fff',
  //         width: 6
  //       }
  //     },
  //     axisLabel: {
  //       show: false,
  //       textStyle: {
  //         fontWeight: 500,
  //         fontSize: 12,
  //         color: '#9CA1AB'
  //       }
  //     },
  //     splitLine: {
  //       show: true,
  //       lineStyle: {
  //         color: '#fff',
  //         width: 6
  //       }
  //     }
  //   }],
  //   series: [

  //     {
  //       name: 'Placeholder',
  //       type: 'bar',
  //       stack: 'Total',
  //       borderWidth: 200,
  //       barWidth: 57,
  //       itemStyle: {
  //         borderColor: 'transparent',
  //         color: 'transparent'
  //       },
  //       emphasis: {
  //         itemStyle: {
  //           borderColor: 'transparent',
  //           color: 'transparent',

  //         }
  //       },

  //       data: [0, 290, 340, 390, 340, 290, 0]
  //     },
  //     {
  //       name: 'Continuing',
  //       type: 'bar',

  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#ABB2B9', // Red
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [290, 0, 0, 0, 0, 0, 0]
  //     },
  //     {
  //       name: 'Transfer W/ District',
  //       type: 'bar',
  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#737577',
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [0, 50, 0, 0, 0, 0, 0]
  //     },
  //     {
  //       name: 'New',
  //       type: 'bar',
  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#35D294',
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [0, 0, 50, 0, 0, 0, 0]
  //     },
  //     {
  //       name: 'Re-Entered',
  //       type: 'bar',
  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#069564',
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [0, 0, 0, 30, 0, 0, 0]
  //     },
  //     {
  //       name: 'Transferred Out',
  //       type: 'bar',
  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#FAD0E7',
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [0, 0, 0, 0, 50, 0, 0]
  //     },
  //     {
  //       name: 'Dropout',
  //       type: 'bar',
  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#F7AAD1',
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [0, 0, 0, 0, 0, 50, 0]
  //     },
  //     {
  //       name: 'Current Enrollment',
  //       type: 'bar',
  //       stack: 'Total',
  //       itemStyle: {
  //         color: '#3696FB',
  //         borderRadius: [4, 4, 0, 0],
  //       },
  //       data: [0, 0, 0, 0, 0, 0, 290]
  //     }
  //   ]
  // };


  const formatValue = (value) => {

    const formattedValue = value > 1000 ? (value / 1000).toFixed(2) + "k" : value.toFixed(2)
    return formattedValue
  }

  const colors = ['#ABB2B9', '#737577', '#35D294', '#069564', '#FAD0E7'];

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        const tar = params[1];
        return tar.marker + tar.name + " " + formatNumberWithCommas(tar.value) + '<br/>'

      }
    },
    grid: {
      top: '4%',
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      axisLabel: {
        show: true,
        interval: 0,
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: data?.map(x => x?.METRICNAME)
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false },

      axisLabel: {
        textStyle: {
          fontWeight: 500,
          fontSize: 12,
          color: '#9CA1AB'
        },
        formatter: function (value) {
          return value >= 1000 ? (value / 1000) + 'K' : value;
        }
      }
    },
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      start: 0,
      end: 50,
      zoomLock: true,
      height: 12,
      handleSize: '50%',
      showDetail: false,
      brushSelect: false,
      bottom: 5
    }],
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: data.map(item => item.PY_STUDENT)
      },
      {
        name: 'Enrollment Changes',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'inside',
          formatter: function (params) {
            return formatNumberWithCommas(params.value)
          }
        },
        itemStyle: {
          color: function (params) {
            return colors[params.dataIndex % colors.length];
          }
        },
        data: data.map(item => item.CY_VALUE)
      }
    ]
  };


  return (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
