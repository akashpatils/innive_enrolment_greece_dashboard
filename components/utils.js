import Image from "next/image";
import { Tooltip } from 'primereact/tooltip';


export const getPivotChartArray = (data = [], row, column, value, addRow, financialYear) => {

    var item = data.reduce((a, b) => {
        a[b[row]] = a[b[row]] || [];
        var obj = {};
        obj[addRow] = b[addRow] ? b[addRow] : 0;
        addRow
            ? a[b[row]].push({ ...obj, ...{ [b[column]]: (b[value]) } })
            : a[b[row]].push({ ...{ [b[column]]: (b[value]) } });
        return a;
    }, {});


    var array = Object.keys(item).map(function (k) {
        return { [row]: k, ...Object.assign.apply({}, item[k]) };
    });
    return array.sort();
};

export const getReadableValue = (value) => {
    return Number(value).toLocaleString() || 0
}

const NegativeValueHandler = (value) => {
    return `${Math.abs(value)}`
}

export default function getLPVarDetails(LY_VAR) {
    if (LY_VAR > 0) {
        return (
            <div className="text-[#9CA1AB] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-light">
                LP Var: <span className="text-[#069564] text-[14px]">{`${LY_VAR.toFixed(2)}%`}</span> <i className="text-[14px] text-[#069564] innivenrolment-arrow-up-line ml-1"></i>
            </div>
        );
    } else if (LY_VAR === 0 || LY_VAR === null || LY_VAR === undefined) {
        return (
            <div className="text-[#9CA1AB] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-light">
                LP Var: --
            </div>
        );
    } else {
        return (
            <div className="text-[#9CA1AB] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-light">
                LP Var: <span className="text-[#951406]">{`${NegativeValueHandler(LY_VAR.toFixed(2))}%`}</span> <i className="text-[#951406] text-[14px] innivenrolment-arrow-down-line ml-1"></i>
            </div>
        );
    }
};


export const renderLyVar = (lyVar) => {
    if (lyVar > 0) {
        return (
            <div className="text-[#069564] text-[12px] xl:text-[10px] 3xl:text-[0.625vw] font-normal text-nowrap">
                LP Var: {`${lyVar.toFixed(2)}%`} <i className="innivenrolment-arrow-up-line ml-1"></i>
            </div>
        );
    } else if (lyVar === 0 || lyVar == null || lyVar === undefined) {
        return (
            <div className="text-[#374151] text-[12px] xl:text-[10px] 3xl:text-[0.625vw] font-normal dark:text-[#fff]">
                LP Var: 0%
            </div>
        );
    } else {
        return (
            <div className="text-[#951406] text-[12px] xl:text-[10px] 3xl:text-[0.625vw] dark:text-[#da200c] font-normal dark:font-bold text-nowrap">
                LP Var: {`${NegativeValueHandler(lyVar.toFixed(2))}%`} <i className="innivenrolment-arrow-down-line ml-1"></i>
            </div>
        );
    }
};



export const Stats = ({ stats }) => {
    const [enrollment, lyVar] = stats;


    return (
        <div className="flex items-center gap-[4px] 3xl:gap-[0.417vw]">
            <div className="text-[#374151] dark:text-[#fff] text-[24px] xl:text-[22px] 3xl:text-[1.25vw] font-bold">
                {formatNumberWithCommas(enrollment) || 0}
            </div>
            {renderLyVar(lyVar)}
        </div>
    );
};


export const StudentsGroupComponent = ({ title, value, percentage, icons }) => {
    const totalIcons = 10;
    const maleIconsCount = Math.round(percentage) <= 10 ? 1 : Math.max(0, Math.min(totalIcons, Math.round((percentage / 100) * totalIcons)));
    const outlineIconsCount = totalIcons - maleIconsCount;
    return (
        <div className="col">
            <div className="flex items-center justify-between">
                <div className="text-[16px] 3xl:text-[0.833vw] font-medium ">
                    {title}
                </div>
                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                    <div className="text-[16px] 3xl:text-[0.833vw] font-medium">
                        {value}
                    </div>
                    <div className={`text-[14px] 3xl:text-[0.729vw] ${percentage > 0 ? 'text-[#069564]' : 'text-[#fb7454]'}`}>
                        {NegativeValueHandler(percentage?.toFixed(2))}% <i className={`innivenrolment-arrow-${percentage > 0 ? 'up' : 'down'}-line ml-1 text-[12px] 3xl:text-[0.521vw]`}></i>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-wrap gap-[2px] 3xl:gap-[0.104vw] border-b border-[#2B3B4F] pb-[18px] 3xl:pb-[0.938vw] mt-[10px] 3xl:mt-[0.521vw]">
                {[...Array(maleIconsCount)].map((_, index) => (
                    <div key={`male-${index}`} className="text-[#1570EF] text-[30px] xl:text-[33px] 3xl:text-[2.083vw] leading-none">
                        <i className="innivenrolment-male"></i>
                    </div>
                ))}
                {[...Array(outlineIconsCount)].map((_, index) => (
                    <div key={`outline-${index}`} className="text-[#1570EF] text-[30px] xl:text-[33px] 3xl:text-[2.083vw] leading-none">
                        <i className="innivenrolment-man-outline"></i>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TotalEnrollmentSubTiles = ({ title, imagePath, value, classes, ...rest }) => {
    const { imageClasses = "3xl:w-[10.417vw] 3xl:h-[4.948vw] xl:w-[9.375vw] xl:h-[4.948vw]" } = rest;
    return (
        <div className={classes}>
            <Image
                src={imagePath}
                width={180}
                height={95}
                className={imageClasses}
                alt={title}
            />
            <div className=" relative -top-8 left-2 flex justify-between pr-10">
                <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-meduim leading-8 ">
                    {title}
                </div>
                <div className="text-[#fff] text-[14px] 3xl:text-[0.729vw] font-light leading-8 ">
                    {getReadableValue(value) || 0}
                </div>
            </div>
        </div>
    )
}


export const TrendTile = ({ title = '', value = '' }) => {
    return (
        <>
            <p className="text-[#404b5e] dark:text-[#fff] text-[14px] 3xl:text-[0.781vw] font-light">
                {title}
            </p>
            <h6 className="text-[#4B586E] dark:text-[#fff] text-[22px] 3xl:text-[1.25vw] font-semibold">
                {" "}
                {getReadableValue(value) || 0}
            </h6>
        </>
    )

}

export const TopSchoolBottomSchool = ({ index, schoolName, currentYearEnrollment, yoyVariance }) => {
    return (
        <div className="grid grid-cols-12 gap-[16px] xl:gap-[0.833vw]  items-center px-[10px] xl:px-[16px] 3xl:px-[0.729vw]  border-[#E5E7EB] border-b py-[9px] xl:py-[8px] 3xl:py-[0.505vw]">
            <div className="col-span-2">
                <div className="flex justify-evenly items-center gap-[20px]">
                    <p className="text-[#4B586E] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold text-center">
                        {index + 1}
                    </p>
                    <div className="bg-[#F5F6F7] w-[35px] h-[19px] rounded-full flex justify-center items-center">
                        <Image
                            src={`/images/school${index + 1}.png`}
                            width={22}
                            height={22}
                            className="3xl:w-[1.146vw] 3xl:h-[1.146vw]"
                            alt="school images"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-6  xl:col-span-6  3xl:col-span-6">
                <div className="text-[#2d3542] dark:text-[#fff] text-[14px] 3xl:text-[0.833vw] font-normal ">
                    {schoolName}
                </div>
            </div>
            <div className="col-span-4 xl:col-span-4  3xl:col-span-4 text-right">
                <div className="text-[#4B586E] dark:text-[#fff] text-[14px] 3xl:text-[0.781vw] font-semibold ">
                    {getReadableValue(currentYearEnrollment) || 0}
                </div>
                <div className="text-[#9CA1AB] text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                    LP Var:{" "}
                    {yoyVariance > 0 ? (
                        <span className="text-[#069564]">
                            {`${yoyVariance.toFixed(2)}%`}{" "}
                            <i className="innivenrolment-arrow-up-line text-[10px]"></i>
                        </span>
                    ) : yoyVariance === 0 || yoyVariance == null ? (
                        <span className="text-[#9CA1AB]">
                            --%{" "}
                        </span>
                    ) : (
                        <span className="text-[#D67309]">
                            {`${NegativeValueHandler(yoyVariance.toFixed(2))}%`}{" "}
                            <i className="innivenrolment-arrow-down-line text-[10px]"></i>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export const MatriculationComponent = ({ data = [] }) => {
    return (
        <>
            <div class="grid grid-cols-3 gap-0 p-2 matriculation_main">
                {
                    data && data?.map((X, i) => {
                        let classes = '';
                        let imagePath = ''
                        if (X?.['METRIC_NAME'] === "Elementary to Middle Conversion Rate") {
                            imagePath = '/images/matriculation_img2.png'
                            classes = 'absolute left-0'
                        } else if (X?.['METRIC_NAME'] === "Middle to High School Conversion Rate") {
                            imagePath = '/images/matriculation_img1.png'
                            classes = 'absolute left-[135px] xl:left-[135px]  3xl:left-[180px]'
                        } else {
                            imagePath = '/images/matriculation_img3.png'
                            classes = 'absolute right-[0px]'
                        }
                        return (
                            <>
                                <Tooltip target=".Tooltip_text" mouseTrack mouseTrackLeft={10} className="custm_Tooltip" content="custm_Tooltip" />
                                <div class="w-full relative Tooltip_text" data-pr-tooltip={X?.["METRIC_NAME"]}>
                                    <Image
                                        src={imagePath}
                                        width={400}
                                        height={95}
                                        className="3xl:w-[9.417vw] 3xl:h-[4.948vw] w-full h-full object-cover overflow-visible"
                                        alt="matriculation img"
                                    />

                                    <div className="absolute top-7 left-3.5 pr-10">
                                        <div className="text-white w-32 text-[12px] 3xl:text-[0.729vw] font-medium leading-0.5">
                                            <span className="break-words truncate_text">{X?.["METRIC_NAME"]}</span>
                                        </div>
                                        <div className="text-white text-[14px] responsive-percentage 3xl:text-[0.729vw] font-semibold leading-5">
                                            {X?.["PERCENTAGE"].toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>



    )
}


export const EnrollmentConversion = ({ Title, count, percentage }) => {
    return (
        <div className="enrollment-conversion-content w-[50%] text-center">
            <p className="text-[#4B586E] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">{Title}</p>
            <h6 className="text-[#4B586E] dark:text-[#fff] text-[30px] 3xl:text-[1.563vw] font-bold">{count}</h6>
            <div className="text-[#9CA1AB] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-light">
                Percentage:
                <span className={`text-[14px] font-bold ${percentage > 0 ? 'text-[#069564]' : 'text-[#D9534F]'}`}>{percentage ? (percentage).toFixed(2) : 0}%</span>
                <i className={`text-[14px] ${percentage > 0 ? 'text-[#069564] innivenrolment-arrow-up-line' : 'text-[#D9534F] innivenrolment-arrow-down-line'} ml-1`}></i>
            </div>
        </div>
    );
};




export const prepareTopTileData = (data, dataYearColumn, CountColumn, VarColumn, MetricColumn, Title) => {

    const groupedData = {};
    data.forEach(item => {
        const year = item[dataYearColumn];
        if (!groupedData[year]) {
            groupedData[year] = [];
        }
        groupedData[year].push(item);
    });

    function calculateSums(data) {
        let sumCY = 0;
        let sumLY = 0;
        data.forEach(item => {
            sumCY += item[CountColumn];
            sumLY += item[VarColumn];
        });
        return { sumCY, sumLY };
    }

    function aggregatePieChartData(data) {
        const aggregation = {};
        data.forEach(item => {
            const name = item[MetricColumn];
            if (!aggregation[name]) {
                aggregation[name] = 0;
            }
            aggregation[name] += item[CountColumn];
        });

        const schoolTypeOrder = ["Community School", "Elementary School", "High School", "Middle School"];
        const schoolTypeColorMapping = {
            "Community School": "#00B929",
            "Elementary School": "#019ADE",
            "High School": "#E32A6D",
            "Middle School": "#c8c846"
        };

        const pieChartData = schoolTypeOrder.map(type => ({
            value: aggregation[type] || null,
            name: type
        }));

        const colors = schoolTypeOrder.map(type => schoolTypeColorMapping[type]);

        return { pieChartData, colors };
    }

    const formattedData = Object.keys(groupedData).map(year => {
        const dataForYear = groupedData[year];
        const { sumCY, sumLY } = calculateSums(dataForYear);
        const { pieChartData, colors } = aggregatePieChartData(dataForYear);

        return {
            metricTitle: year,
            title: Title,
            value: sumCY,
            lyVar: sumLY,
            pieChartData,
            colors
        };
    });

    formattedData.sort((a, b) => {
        if (a.metricTitle < b.metricTitle) return -1;
        if (a.metricTitle > b.metricTitle) return 1;
        return 0;
    });

    return formattedData;
};

export const EnrollmentConversionContent = ({ Title, netMovement, percentage }) => {
    const isIncrease = percentage > 0;

    return (
        <div className="enrollment-conversion-content w-[50%] text-center">
            <p className="text-[#4B586E] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">{Title}</p>
            <h6 className="text-[#4B586E] dark:text-[#fff] text-[30px] 3xl:text-[1.563vw] font-bold">{netMovement}</h6>
            <div className="text-[#9CA1AB] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-light">
                Percentage:
                <span className={`text-[14px] font-bold ${isIncrease ? 'text-[#069564]' : 'text-[#FF0000]'}`}>
                    {Math.abs(percentage).toFixed(2)}%
                </span>
                <i className={`text-[14px] ml-1 ${isIncrease ? 'text-[#069564] innivenrolment-arrow-up-line' : 'text-[#FF0000] innivenrolment-arrow-down-line'}`}></i>
            </div>
        </div>
    );
}



export const ValueHandler = (value) => {

    const handledValue = value === null || undefined ? 0 : Math.abs(value).toFixed(0);
    return handledValue
}



export const percentageHandler = (value) => {

    const handledValue = value === null || undefined ? 0 : (value)?.toFixed(2);
    return handledValue
}

export const formatNumberWithCommas = (number) => {
    return number?.toLocaleString();
}


export const sortDataByMonthOrder = (data) => {
    const desiredOrder = ["0% to 50%", "51% to 75%", "76% to 99%", "100%"];

    const customSort = (a, b) => {
        return desiredOrder.indexOf(a.MONTH) - desiredOrder.indexOf(b.MONTH);
    };

    return [...data]?.sort(customSort);
}

export const sortBasedOnPercentage = (data) => {
    let array = [...data]
    array.sort((a, b) => {
        const getMonthValue = (month) => {
            if (!month) {
                return -1;
            }
            if (month === "100%") {
                return 100;
            }
            const match = month.match(/(\d+)%/);
            return match ? parseInt(match[1]) : -1;
        };
        return getMonthValue(b.MONTH) - getMonthValue(a.MONTH);
    });
    return array;
}