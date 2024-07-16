import React from 'react';
import PiechartComponent from '../../components/charts/piechartcomponent';
import { getReadableValue } from '../../components/utils'
import DoubleLineChart from '../charts/doublelinechart';

const TopTile = ({ metricTitle = '', title = '', value = '', lyVar = '', pieChartData = [], colors = [], isShowLineChart = false, currentTheme, lineChartData1 = [], lineChartData2 = [], color1 = '', color2 = '', percentage }) => {
    return (
        <div className='col-span-12 xl:col-span-4 bg-[#e8f0f380] rounded-[10px] xl:rounded-[8px] 3xl:rounded-[0.521vw] p-[16px] xl:p-[14px] 3xl:p-[0.833vw]'>
            <div className='text-[#383874] text-[16px] xl:text-[11px] 3xl:text-[0.833vw] font-medium'>{metricTitle}</div>
            <div className="flex justify-between items-center ">
                <div>
                    <div className="text-[#636973] text-[16px] xl:text-[11px] 3xl:text-[0.833vw] font-light">
                        {title}
                    </div>
                    <div className='flex gap-2'>
                        <div className="text-[#374151]  text-[34px] xl:text-[26px] 3xl:text-[1.771vw] font-medium leading-none">
                            {getReadableValue(value) || 0}
                        </div>
                        <div className={`flex items-end gap-1 font-normal ${lyVar >= 0 ? 'text-[#00B929]' : 'text-red-500'}`}>
                            <div>
                                {lyVar >= 0 ? (
                                    <i className="innivenrolment-arrow-up-line text-[10px] xl:text-[6px] 3xl:text-[0.629vw] text-green-500"></i>
                                ) : (
                                    <i className="innivenrolment-arrow-down-line text-[10px] xl:text-[6px] 3xl:text-[0.629vw] text-red-500"></i>
                                )}
                            </div>
                            <div className='text-[10px]'>{Math.abs(lyVar).toFixed(2)}% LY VAR</div>
                        </div>
                    </div>
                </div>
                <div className="h-[72px] 3xl:h-[3.75vw]">
                    {
                        !isShowLineChart ? <PiechartComponent data={pieChartData || []} colors={colors || []} /> :

                            <div className=' w-[60px]'>
                                <div className='text-[#344054] text-lg font-semibold leading-3 3xl:text-[1.042vw] 3xl:leading-[0.625vw]'>{percentage || 0}%</div>
                                <div className="h-[60px] 3xl:h-[3.125vw]">
                                    <DoubleLineChart
                                        currentTheme={currentTheme}
                                        grid={{
                                            top: "25%",
                                            left: "0%",
                                            right: "0%",
                                            bottom: "5%",
                                            containLabel: true
                                        }}
                                        legend={{
                                            show: false
                                        }}
                                        xAxisLabel={{ show: false }}
                                        xAxisLine={{ show: false }}
                                        xAxisTick={{ show: false }}
                                        xAxisSplitLine={{ show: false }}
                                        // yAxisMax={60}
                                        // yAxisMin={0}
                                        yAxisLabel={{ show: false }}
                                        yAxisLine={{ show: false }}
                                        yAxisTick={{ show: false }}
                                        yAxisSplitLine={{ show: false }}
                                        data1={lineChartData1}
                                        data2={lineChartData2}
                                        // data1={[0, 10, 15, 30, 35, 50, 60, 55, 40, 25, 20, 5, 0]}
                                        // data2={[0, 15, 25, 40, 45, 40, 35, 25, 20, 18, 15, 2, 0]}
                                        color1={color1}
                                        color2={color2}
                                        // color1={'#E32A88'}
                                        // color2={'#E32A8833'}
                                        Linesmooth={{ show: true }}
                                    />
                                </div>
                            </div>

                    }



                </div>
            </div>


        </div>
    )
}

export default TopTile