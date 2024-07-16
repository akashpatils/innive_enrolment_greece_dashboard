import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from "echarts";

const PopulationChart = ({ data, name }) => {


    const Icons = {
        positive: '/assets/images/Frame 289329 (1).png',
        negative: '/assets/images/Frame 289329.png',

    };

    const formatterCallBack = (params, i, data,) => {

        const paramsValue = (Math.abs(parseFloat(params)) >= 1000)
            ? (Math.abs(parseFloat(params) / 1000).toFixed(1)) + 'k'
            : Math.abs(parseFloat(params).toFixed(0));

        const varianceValue = data?.variance[i] >= 0
            ? `${Number(data?.variance[i]).toFixed(1)}%`
            : `(${Number(data?.variance[i] * -1).toFixed(1)}%)`;

        const onlyValue = data?.variance[i] == 0 ? `${paramsValue}` : `${paramsValue} {${data?.variance[i] >= 0 ? "nvar|" : "pvar|"}} ${varianceValue}`;

        return onlyValue
    };

    const Options = {
        tooltip: {
            trigger: "axis",

        },
        legend: {
            show: false,
            bottom: "0",
            left: "5%",
            itemWidth: 10,
            itemHeight: 10,

        },
        grid: {
            left: "5%",
            right: "2%",
            bottom: "10%",
            top: "0%",
            containLabel: true,
        },
        title: {
            show: false,
            text: '6 Months Trend',
            top: 3,
            left: -5,
            textStyle: {
                fontSize: 13,
                color: '#4B586E',
                fontWeight: 500
            }
        },
        xAxis: {
            type: "value",
            // min: 0,
            // max: yAxisMax,
            // interval: yAxisMax / 5,
            boundaryGap: [0, 0.01],
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: [
            {
                type: "category",
                data: data?.labels,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#53565A",

                    },
                    formatter: function (params) {
                        return params.split(' ').join('\n');
                    }

                },
                axisLine: {
                    show: false,
                },
                axisTick: { show: false },
            },
            {
                type: "category",
                axisLine: { show: false },
                axisLabel: {
                    show: true,
                    color: "#4B586E",
                    fontSize: 10,
                    overflow: "truncate",
                    // formatter: function (params) {
                    //     if (Math.abs(parseFloat(params)) >= 1000) return (Math.abs(parseFloat(params) / 1000).toFixed(1)) + 'k';
                    //     return Math.abs(parseFloat(params))
                    // },
                    formatter: function (params, index) {
                        return formatterCallBack(params, index, data)
                        // return (EnableRightValue?formatterValue(val, index, data):"") + (DisablePercentage==true?"":formatterCallback(val, index, data));
                    },
                    rich: {
                        perc: {
                            color: "black",
                            width: 50
                        },
                        pvar: {
                            backgroundColor: {
                                image: Icons.positive
                            }

                        },
                        nvar: {
                            backgroundColor: {
                                image: Icons.negative
                            }
                        },
                    },
                },
                axisTick: { show: false },
                inverse: false,
                splitLine: { show: false },
                data: data?.values,
            },
        ],
        series: [
            {
                name: name[0],
                data: data?.values,
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(245, 246, 247, 1)",
                    borderRadius: [0, 6, 6, 0]
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 1,
                            color: "#73849C",
                        },
                        {
                            offset: 0,
                            color: "#90A5C3",
                        },
                    ]),

                    borderRadius: [0, 6, 6, 0]
                },
                color: "#9CA1AB",
                type: 'bar',
                barWidth: '70%',
            },
        ],
    };

    return (
        <ReactEcharts
            option={Options}
            style={{ height: "100%", width: "100%" }}
        />
    );
};

export default PopulationChart;
