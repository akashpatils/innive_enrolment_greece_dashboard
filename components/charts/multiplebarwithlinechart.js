import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function MultiplebarWithLineChart({ currentTheme, data, xAxisName, yAxisName, legend, grid, color1, color2, color3, color4, color5, lenght, yAxisLabel, min, max, interval, label, name1, name2, name3 }) {

  const myarray = [
    {
      name: name1,
      type: 'bar',
      barWidth: 20,
      label: label,
      color: color1,
      barGap: 0,
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },

    },
    {
      name: name2,
      type: 'bar',
      barWidth: 20,
      label: label,
      color: color2,
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
    },
    {
      name: name3,
      type: 'bar',
      barWidth: 20,
      label: label,
      color: color3,
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
    },
  ]

  if (lenght === 5) {
    myarray.push(
      {
        type: 'bar',

        itemStyle: {
          borderRadius: [2, 2, 0, 0],
        },
        label: {
          show: true,
          position: 'top',
          color: "black"

        },
        color: color4
      },
      {
        type: 'bar',
        itemStyle: {
          borderRadius: [2, 2, 0, 0],
        },
        label: {
          show: true,
          position: 'top',
          color: "black"

        },
        color: color5
      },
    )
  }

  const multiplebarChart = {
    legend: legend,
    grid: grid,
    dataset: {
      dimensions: data.labels,
      source: data.values
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: '#101828',  // Set the background color of the tooltip
      textStyle: {  // Optional: style the text inside the tooltip
        color: 'white',
        fontSize: 12
      },

      borderColor: '#101828',  // Set the border color of the tooltip
      borderWidth: 1  // Optional: Set the border width of the tooltip
    },
    xAxis: {
      name: xAxisName,
      type: 'category',
      axisTick: { show: false },
      labels: {
        // show: true,
        // position: 'outside',
        formatter: '{c}'
      },
      axisTick: { show: false },
      nameTextStyle: {
        color: "#344054"
      },
      axisLabel: {
        interval: 0,
        color: currentTheme == "dark" ? "#ffff" : '#344054',
        fontSize: 8,
        fontWeight: 400
      },
      axisLine: {
        lineStyle: {
          color: "#E0E0E0",
        }
      },
      axisLabel: {
        color: currentTheme == "dark" ? "#ffff" : '#344054',
        fontSize: 10,
        opacity: 0.70,
        align: "center"
      }
    },

    yAxis: {
      name: yAxisName,
      min: min,
      max: max,
      interval: interval,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: "#E5E7EB",
        }
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: "#E5E7EB",
        }
      },
      axisLabel: yAxisLabel,
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: myarray
  };

  return (
    <>
      <ReactEcharts
        option={multiplebarChart}
        style={{ height: '100%', width: '100%' }}
        opts={{ renderer: 'svg' }}
      />
    </>
  );
}