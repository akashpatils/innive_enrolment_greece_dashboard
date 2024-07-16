"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout/pagelayout";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { useTheme } from "next-themes";
import TotalPopulation from "../../components/TotalPopulation";
import KeyOpportunityAreas from "../../components/charts/keyopportunityareas"
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople_Movement, fetchPotential_Student_Population, fetchTotal_Population, fetchZIPCODE_Distribution, fetchPopulation_Distribution, fetchStudent_Enrollment, fetchEnrollment_Conversion_Male, fetchEnrollment_Conversion_Female, fetchEnrollment_Conversion_Ethnicity, fetchZipcode_Enrollment_Conversion, fetchEconomically_Disadvantage_Student, fetchPotential_student_Population_Distribution } from "../../redux/slices/CensusandPopulation";
import LoaderContainer from "../../components/LoaderContainer";
import PopulationChart from "../../components/charts/PopulationChart";
import { EnrollmentConversion, EnrollmentConversionContent } from "../../components/utils";
import PopulationEthnicity from "../../components/charts/populationethnicity"

export default function Page() {
  const [ingredient, setIngredient] = useState("TotalPop")
  const [activeIngredient, setActiveIngredient] = useState('TotalPop');

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const dispatch = useDispatch();

  const Total_Population = useSelector(state => state.CensusandPopulation.Total_Population)
  const Total_Populationloading = useSelector(state => state.CensusandPopulation.Total_Populationloading)


  const Potential_Student_Population = useSelector(state => state.CensusandPopulation.Potential_Student_Population)
  const Potential_Student_Populationloading = useSelector(state => state.CensusandPopulation.Potential_Student_Populationloading)


  const People_Movement = useSelector(state => state.CensusandPopulation.People_Movement)
  const People_Movementloading = useSelector(state => state.CensusandPopulation.People_Movementloading)

  const ZIPCODE_Distribution = useSelector(state => state.CensusandPopulation.ZIPCODE_Distribution)
  const ZIPCODE_Distributionloading = useSelector(state => state.CensusandPopulation.ZIPCODE_Distributionloading)

  const Student_Enrollment = useSelector(state => state.CensusandPopulation.Student_Enrollment);
  const Student_Enrollmentloading = useSelector(state => state.CensusandPopulation.Student_Enrollmentloading)

  const Population_Distribution = useSelector(state => state.CensusandPopulation.Population_Distribution);
  const Population_Distributionloading = useSelector(state => state.CensusandPopulation.Population_Distributionloading)

  const Enrollment_Conversion_Male = useSelector(state => state.CensusandPopulation.Enrollment_Conversion_Male)
  const Enrollment_Conversion_Maleloading = useSelector(state => state.CensusandPopulation.Enrollment_Conversion_Maleloading)

  const Enrollment_Conversion_Female = useSelector(state => state.CensusandPopulation.Enrollment_Conversion_Female)
  const Enrollment_Conversion_Femaleloading = useSelector(state => state.CensusandPopulation.Enrollment_Conversion_Femaleloading)

  const Enrollment_Conversion_Ethnicity = useSelector(state => state.CensusandPopulation.Enrollment_Conversion_Ethnicity)
  const Enrollment_Conversion_Ethnicityloading = useSelector(state => state.CensusandPopulation.Enrollment_Conversion_Ethnicityloading)


  const Zipcode_Enrollment_Conversion = useSelector(state => state.CensusandPopulation.Zipcode_Enrollment_Conversion)
  const Zipcode_Enrollment_Conversionloading = useSelector(state => state.CensusandPopulation.Zipcode_Enrollment_Conversionloading)

  const Economically_Disadvantage_Student = useSelector(state => state.CensusandPopulation.Economically_Disadvantage_Student)
  const Economically_Disadvantage_Studentloading = useSelector(state => state.CensusandPopulation.Economically_Disadvantage_Studentloading)

  const Potential_student_Population_Distribution = useSelector(state => state.CensusandPopulation.Potential_student_Population_Distribution)
  const Potential_student_Population_Distributionloading = useSelector(state => state.CensusandPopulation.Potential_student_Population_Distributionloading)


  const [diistrubutionLoader, setDistrubutionLoader] = useState(1)

  const Metrics = [
    { name: 'Ethnicity', code: 'Ethnicity' },
    // { name: 'Economic background', code: 'Gender' },
    { name: 'Gender', code: 'Gender' },
  ];
  const [metric, setSelectedMetric] = useState({ name: 'Ethnicity', code: 'Ethnicity' });


  const handleIngredientChange = (newIngredient) => {
    setActiveIngredient(newIngredient);
  };

  useEffect(() => {
    let columnValue = '';

    switch (activeIngredient) {
      case 'TotalPop':
        columnValue = "Sum(ESTIMATE_SEXANDAGE_TOTAL_POPULATION)";
        break;
      case 'StudentPop':
        columnValue = "(Sum(ESTIMATE_SEXANDAGE_TOTAL_POPULATION_5TO9YEARS)+sum(ESTIMATE_SEXANDAGE_TOTAL_POPULATION_10TO14YEARS)+sum(ESTIMATE_SEXANDAGE_TOTAL_POPULATION_15TO19YEARS))";
        break;
      default:
        columnValue = "Sum(ESTIMATE_SEXANDAGE_TOTAL_POPULATION)";
        break;
    }

    dispatch(fetchZIPCODE_Distribution({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [{
        columnName: "#{Dimension}", columnValue: columnValue
      }],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));



  }, [activeIngredient])
  useEffect(() => {
    dispatch(fetchTotal_Population({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));

    dispatch(fetchPotential_Student_Population({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));


    dispatch(fetchPeople_Movement({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));


    dispatch(fetchStudent_Enrollment({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));
    dispatch(fetchZipcode_Enrollment_Conversion({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));

    dispatch(fetchEnrollment_Conversion_Male({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));

    dispatch(fetchEnrollment_Conversion_Female({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));

    dispatch(fetchEnrollment_Conversion_Ethnicity({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));


    dispatch(fetchEconomically_Disadvantage_Student({
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [],
      "userEmail": "Test.PBI@redingtongroup.com"
    }));

  }, [])

  useEffect(() => {
    const body = {
      "elasticQueryName": "",
      "filters": [],
      "dynamicColumns": [
        {
          "columnName": "#{metric_name}",
          "columnValue": `AND Metric_Name = '${metric.code}'`,
          "excludeKeyword": false
        }
      ],
      "userEmail": "Test.PBI@redingtongroup.com"
    }
    if (metric && activeIngredient) {
      switch (activeIngredient) {
        case 'TotalPop':
          setDistrubutionLoader(1)
          dispatch(fetchPopulation_Distribution(body));
          break;
        case 'StudentPop':
          setDistrubutionLoader(2)
          dispatch(fetchPotential_student_Population_Distribution(body));
          break;
        default:
          dispatch(fetchPotential_student_Population_Distribution(body));
          break;
      }
    }
  }, [metric, activeIngredient]);

  const distributionDataConfig = {
    TotalPop: {
      data: Population_Distribution,
      valueName: "VALUE_NAME",
      value: "VALUE"
    },
    StudentPop: {
      data: Potential_student_Population_Distribution,
      valueName: "STUDENT_ETHNICITY",
      value: "ETHNI_COUNT"
    },
    default: {
      data: Population_Distribution,
      valueName: "STUDENT_ETHNICITY",
      value: "ETHNI_COUNT"
    }
  };

  const { data, valueName, value } = distributionDataConfig[activeIngredient] || distributionDataConfig.default;

  const Population_DistributionData = createDistributionData(data, valueName, value, "", "false");


  const populationData = [
    {
      title: 'Total Population',
      ingredient: 'TotalPop',
      value: Total_Population?.[0]?.CY_TOTAL_POPULATION,
      LY_VAR: Total_Population?.[0]?.LY_VAR,
      percentage: Total_Population?.[0]?.PERCENTAGE,
      loading: Total_Populationloading,
    },
    {
      title: 'Potential Student Population',
      ingredient: 'StudentPop',
      value: Potential_Student_Population?.[0]?.POTENTIAL_STUDENT_POPULATION,
      LY_VAR: Potential_Student_Population?.[0]?.LY_VAR,
      percentage: Potential_Student_Population?.[0]?.PERCENTAGE,
      loading: Potential_Student_Populationloading,
    },
    {
      title: 'Student Enrollment',
      ingredient: 'StudentEnroll',
      value: Student_Enrollment?.[0]?.CY_VALUE,
      LY_VAR: Student_Enrollment?.[0]?.LY_VAR,
      percentage: Student_Enrollment?.[0]?.PERCENTAGE,
      loading: Student_Enrollmentloading,

    }
  ]

  function createDistributionData(data, Label, Value, Percentage, needPercentage = false) {
    const Data = data?.reduce((acc, item) => {
      acc.labels.push(item?.[Label]);
      acc.values.push(item?.[Value] != null || undefined ? item?.[Value] : 0);
      if (needPercentage) {
        acc.variance.push(item?.[Percentage] != null || undefined ? item?.[Percentage] : 0);
      }
      return acc;
    }, { labels: [], values: [], variance: [] });

    if (!needPercentage) {
      delete Data.variance;
    }

    return Data;
  }




  const Enrollment_Conversion_EthnicityData = createDistributionData(Enrollment_Conversion_Ethnicity, "STUDENT_ETHNICITY", "STUDENT_COUNT", "CONVERSION_PERCENT", "true");
  // const ZIPCODE_ConversionData = createDistributionData(Zipcode_Enrollment_Conversion, "ZIPCODE", "STUDENT_COUNT", "CONVERSION_PERCENT", "true");
  const ZIPCODE_DistributionData = createDistributionData(ZIPCODE_Distribution, "ZIPCODE", "TOTAL_POPULATION", "", "false");



  const ZIPCODE_ConversionData = {
    "labels": [
      "--",
      "--",
      "--",
      "--",
      "--",
    ],
    "values": [
      0,
      0,
      0,
      0,
      0,
    ],
    "variance": [
      0,
      0,
      0,
      0,
      0,
    ],
  }
  return (
    <Layout
      pageTitle="Population/Census"
      parentPageName="Home"
      pageName="Current Page"
    >
      <div className="mt-[22px] xl:mt-[22px] 3xl:mt-[1.146vw]">
        <div className=" px-[32px] 3xl:px-[1.667vw]">
          <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[16px] xl:gap-[0.833vw]">
            <div className="col-span-4">
              <div className="dark:bg-[#374151] bg-[#fff] px-[18px] xl:px-[18px] 3xl:px-[0.938vw] py-[27px] xl:py-[27px] xl:pb-[20px] 3xl:py-[1.406vw] rounded-lg">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-[20px] xl:gap-[1.042vw]">
                  {
                    populationData?.map((item, index) => {
                      return (<div key={index}>
                        <LoaderContainer loading={item.loading} width={"100%"} height={"150px"}>
                          <TotalPopulation
                            key={item.id}
                            data={item}
                            activeIngredient={activeIngredient}
                            onClick={handleIngredientChange}
                          />
                        </LoaderContainer>
                      </div>
                      )
                    })
                  }
                  {/* <div
                    className={` rounded-xl h-[188px] flex flex-col items-center justify-center relative ${
                      ingredient === "TotalPop" ? "bg-img" : "bg-[#ECEFF3] dark:bg-[#313a46]"
                    } `}
                  >
                    <RadioButton
                      inputId="ingredient1"
                      name="TotalPop"
                      value="TotalPop"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "TotalPop"}
                    />
                    <label
                      className={`text-[16px]  xl:text-[16px] 3xl:text-[0.781vw] font-medium leading-9 ${
                        ingredient === "TotalPop"
                          ? "text-[#fff] "
                          : "text-[#374151] dark:text-[#fff]"
                      }`}
                      htmlFor="ingredient1"
                    >
                      Total Population
                    </label>
                    <p
                      className={` text-[22px] xl:text-[24px] 3xl:text-[1.25vw] leading-10 ${
                        ingredient === "TotalPop"
                          ? "textgradi "
                          : "text-[#374151] font-light dark:text-[#fff]"
                      }`}
                    >
                      290,202
                    </p>
                    <div
                      className={` text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light  mb-[20px] xl:mb-[24px] 3xl:mb-[1.25vw] ${
                        ingredient === "TotalPop"
                          ? "text-[#fff] "
                          : "text-[#374151] dark:text-[#fff]"
                      }`}
                    >
                      2% from LY
                      <span className="text-[10px] text-[#31C48D] ml-1">
                        <i className="innivenrolment-population"></i>
                      </span>
                    </div>
                    {ingredient === "StudentPop" ||
                    ingredient === "StudentEnroll" ? (
                      <div className="absolute bottom-0 bg-[#F5F6F8] dark:bg-[#272e37] w-full p-1 text-center rounded-b-lg">
                        <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                          {" "}
                          83% of Potential
                        </div>
                      </div>
                    ) : null}
                  </div>


                  <div
                    className={` rounded-xl h-[188px] flex flex-col items-center justify-center relative ${
                      // ingredient === "StudentPop" ? "bg-img" : "bg-[#ECEFF3]"
                      ingredient === "StudentPop" ? "bg-img" : "bg-[#ECEFF3] dark:bg-[#313a46]"
                    } `}
                  >
                    <RadioButton
                      inputId="ingredient2"
                      name="StudentPop"
                      value="StudentPop"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "StudentPop"}
                    />
                    <label
                      className={`text-[16px] xl:text-[16px] 3xl:text-[0.781vw] font-medium text-center leading-tight ${
                        ingredient === "StudentPop"
                          ? "text-[#fff] dark:text-[#fff]"
                          : "text-[#374151] dark:text-[#fff] "
                      }`}
                      htmlFor="ingredient2"
                    >
                      Potential Student Population
                    </label>
                    <p
                      className={` text-[22px] xl:text-[24px] 3xl:text-[1.25vw] leading-10 ${
                        ingredient === "StudentPop"
                          ? "textgradi "
                          : "text-[#374151] font-light dark:text-[#fff]"
                      }`}
                    >
                      290,202
                    </p>
                    <div
                      className={` text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light  mb-[20px] xl:mb-[24px] 3xl:mb-[1.25vw] ${
                        ingredient === "StudentPop"
                          ? "text-[#fff] "
                          : "text-[#374151] dark:text-[#fff]"
                      }`}
                    >
                      2% from LY
                      <span className="text-[10px] text-[#31C48D] ml-1">
                        <i className="innivenrolment-population"></i>
                      </span>
                    </div>
                    {ingredient === "TotalPop" ||
                    ingredient === "StudentEnroll" ? (
                      <div className="absolute bottom-0 bg-[#F5F6F8] dark:bg-[#272e37]  w-full p-1 text-center rounded-b-lg">
                        <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                          {" "}
                          83% of Potential
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={` rounded-xl h-[188px] flex flex-col items-center justify-center relative ${
                      ingredient === "StudentEnroll" ? "bg-img" : "bg-[#ECEFF3] dark:bg-[#313a46]"
                    } `}
                  >
                    <RadioButton
                      inputId="ingredient3"
                      name="StudentEnroll"
                      value="StudentEnroll"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "StudentEnroll"}
                    />
                    <label
                      className={`text-[16px] xl:text-[16px] 3xl:text-[0.781vw] font-medium leading-9 ${
                        ingredient === "StudentEnroll"
                          ? "text-[#fff] "
                          : "text-[#374151] dark:text-[#fff]"
                      }`}
                      htmlFor="ingredient3"
                    >
                      Total Population
                    </label>
                    <p
                      className={` text-[22px] xl:text-[24px] 3xl:text-[1.25vw] leading-10 ${
                        ingredient === "StudentEnroll"
                          ? "textgradi "
                          : "text-[#374151] font-light  dark:text-[#fff]"
                      }`}
                    >
                      290,202
                    </p>
                    <div
                      className={` text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light  mb-[20px] xl:mb-[24px] 3xl:mb-[1.25vw] ${
                        ingredient === "StudentEnroll"
                          ? "text-[#fff] "
                          : "text-[#374151] dark:text-[#fff]"
                      }`}
                    >
                      2% from LY
                      <span className="text-[10px] text-[#31C48D] ml-1">
                        <i className="innivenrolment-population"></i>
                      </span>
                    </div>
                    {ingredient === "TotalPop" ||
                    ingredient === "StudentPop" ? (
                      <div className="absolute bottom-0 bg-[#F5F6F8] dark:bg-[#272e37] w-full p-1 text-center rounded-b-lg">
                        <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                          {" "}
                          83% of Potential
                        </div>
                      </div>
                    ) : null}
                  </div> */}

                </div>

                <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                  <div className="border border-[#E5E7EB] rounded-lg py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw]">
                    <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px]">
                      <h3 className="text-[#374151] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">
                        Zip code Distribution
                      </h3>


                    </div>
                    <div className="bg-[#ffffff] rounded-[12px] 3xl:rounded-[0.625vw] p-[8px] 3xl:p-[0.417vw]">

                      <div className="w-full h-[250px] 3xl:h-[14.063vw]">
                        <LoaderContainer loading={ZIPCODE_Distributionloading} width={'100%'} height={'100%'} className="dark:bg-[#374151]">

                          <PopulationChart data={ZIPCODE_DistributionData} name={["Zip Code Distrubution"]} />
                        </LoaderContainer>

                      </div>


                    </div>
                  </div>
                </div>
                <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                  <div className="border border-[#E5E7EB] rounded-lg py-[12px] xl:py-[12px] 3xl:py-[0.625vw] px-[16px] xl:px-[16px] 3xl:px-[0.833vw]">
                    <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px]">
                      <h3 className="text-[#374151] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">
                        Population Distribution
                      </h3>
                      <div className='customDropdown dark:bg-[#374151]'>
                        <Dropdown
                          value={metric}
                          onChange={(e) => setSelectedMetric(e.value)}
                          options={Metrics}
                          optionLabel="name"
                          placeholder="School Type"
                          className="w-full xl:w-[140px] 3xl:w-[5.688vw] dark:bg-[#374151]"
                        />
                      </div>
                    </div>

                    <div className="bg-[#ffffff] rounded-[12px] 3xl:rounded-[0.625vw] p-[8px] 3xl:p-[0.417vw]">
                      <div className="w-full h-[245px] 3xl:h-[14.063vw]">
                        <LoaderContainer loading={diistrubutionLoader == 1 ? Population_Distributionloading : diistrubutionLoader == 2 ? Potential_student_Population_Distributionloading : ""} width={'100%'} height={'100%'} className="dark:bg-[#374151]">
                          <PopulationChart data={Population_DistributionData} name={["Population  Distrubution"]} />
                        </LoaderContainer>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-2 gap-[24px] xl:gap-[1.25vw]">
                <div className="dark:bg-[#374151] bg-[#fff] p-[12px] xl:px-[12px] 3xl:p-[0.625vw] rounded-lg">
                  <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px]">
                    <h3 className="text-[#374151] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">
                      People Movement
                    </h3>
                  </div>
                  <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                    <div className="grid grid-cols-3 gap-[8px] xl:gap-[8px] 3xl:gap-[0.417vw] people-movement">
                      <LoaderContainer loading={People_Movementloading} width={"100%"} height={"80px"} className={"dark:bg-[#313a46]"}>


                        <div className="bg-[#F5F6F7] dark:bg-[#313a46] px-[10px] xl:px-[4px] 3xl:px-[0.625vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-md">
                          <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light  people-movement-title">
                            Incoming population
                          </div>
                          <div className="flex justify-between items-center mt-[16px] xl:mt-[16px] 3xl:mt-[1.042vw] gap-[2px] ">
                            <div className="text-[#374151] dark:text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-bold ">{People_Movement?.[0]?.INCOMING_POPULATION}</div>
                            <div>
                              <div className="text-[#9CA1AB] dark:text-[#fff] text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                                LP Var: <span className="text-[#069564] dark:text-[#fff] people-movement-population">{People_Movement?.[0]?.LY_VAR_INCOMING_POPULATION.toFixed(2)}% <i className="innivenrolment-arrow-up-line text-[10px]"></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LoaderContainer>
                      <LoaderContainer loading={People_Movementloading} width={"100%"} height={"80px"} className={"dark:bg-[#313a46]"}>

                        {/* Outgoing population card */}
                        <div className="bg-[#F5F6F7] dark:bg-[#313a46] px-[10px] xl:px-[4px] 3xl:px-[0.625vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-md">

                          <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light people-movement-title">
                            Outgoing population
                          </div>
                          <div className="flex justify-between items-center mt-[16px] xl:mt-[16px] 3xl:mt-[1.042vw] gap-[2px]">
                            <div className="text-[#374151] dark:text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-bold">{People_Movement?.[0]?.OUTGOING_POPULATION}</div>
                            <div>
                              <div className="text-[#9CA1AB] dark:text-[#fff] text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                                LP Var: <span className="text-[#069564] dark:text-[#fff]">{People_Movement?.[0]?.LY_VAR_OUTGOING_POPULATION.toFixed(2)}% <i className="innivenrolment-arrow-up-line text-[10px]"></i></span>
                              </div>
                            </div>
                          </div>


                        </div>
                      </LoaderContainer>
                      <LoaderContainer loading={People_Movementloading} width={"100%"} height={"80px"} className={"dark:bg-[#313a46]"}>

                        {/* Net movement card */}
                        <div className="bg-[#F5F6F7] dark:bg-[#313a46] px-[10px] xl:px-[4px] 3xl:px-[0.625vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-md">
                          <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light people-movement-title">
                            Net Movement
                          </div>
                          <div className="flex justify-between items-center mt-[16px] xl:mt-[16px] 3xl:mt-[1.042vw] gap-[2px]">
                            <div className="text-[#374151] dark:text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-bold">{People_Movement?.[0]?.NET_MOVEMENT_CY}</div>
                            <div>
                              <div className="text-[#9CA1AB] dark:text-[#fff] text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-light">
                                LP Var: <span className="text-[#069564] dark:text-[#fff]">{People_Movement?.[0]?.LY_VAR_NET_MOVEMENT.toFixed(2)}% <i className="innivenrolment-arrow-up-line text-[10px]"></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LoaderContainer>


                    </div>

                  </div>

                </div>

                <div className="dark:bg-[#374151] bg-[#fff] p-[12px] xl:px-[12px] 3xl:p-[0.625vw] rounded-lg">
                  <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px]">
                    <h3 className="text-[#374151] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">
                      Student Movement
                    </h3>
                  </div>
                  <div className="mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                    <div className="grid grid-cols-3 gap-[8px] xl:gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="bg-[#F5F6F7] dark:bg-[#313a46] px-[10px] xl:px-[4px] 3xl:px-[0.625vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-md">
                        <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light leading-tight">
                          Incoming students
                        </div>
                        <div className="text-[#4B586E] text-[9px] dark:text-[#fff] xl:text-[10px] 3xl:text-[0.521vw] font-light italic">
                          (transfer ins, new enrollments)
                        </div>
                        <div className="flex justify-between items-center mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] gap-[2px]">
                          <div className="text-[#374151] dark:text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-bold">0</div>
                          <div><div className="text-[#9CA1AB] text-[12px] dark:text-[#fff] xl:text-[12px] 3xl:text-[0.625vw] font-light">LP Var: <span className="text-[#069564] dark:text-[#fff]">0% <i className="innivenrolment-arrow-up-line text-[10px]"></i></span></div></div>
                        </div>
                      </div>
                      <div className="bg-[#F5F6F7] dark:bg-[#313a46] px-[10px] xl:px-[4px] 3xl:px-[0.625vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-md">
                        <div className="text-[#4B586E] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light leading-tight">
                          Outgoing students
                        </div>
                        <div className="text-[#4B586E] dark:text-[#fff] text-[9px] xl:text-[10px] 3xl:text-[0.521vw] font-light italic">
                          (transfer outs, dropouts, grad...)
                        </div>
                        <div className="flex justify-between items-center mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] gap-[2px]">
                          <div className="text-[#374151] dark:text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-bold">0</div>
                          <div><div className="text-[#9CA1AB] dark:text-[#fff] text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-light">LP Var: <span className="text-[#069564] dark:text-[#fff]">0% <i className="innivenrolment-arrow-up-line text-[10px]"></i></span></div></div>
                        </div>
                      </div>

                      <div className="bg-[#F5F6F7] dark:bg-[#313a46] px-[10px] xl:px-[4px] 3xl:px-[0.625vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-md">
                        <div className="text-[#4B586E] dark:text-[#fff] text-[10px] xl:text-[12px] 3xl:text-[0.625vw] font-light leading-tight">
                          Net Movement
                        </div>

                        <div className="flex justify-between items-center mt-[16px] xl:mt-[35px] 3xl:mt-[1.842vw]  gap-[2px]">
                          <div className="text-[#374151] dark:text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-bold">0</div>
                          <div><div className="text-[#9CA1AB] dark:text-[#fff] text-[12px] xl:text-[12px] 3xl:text-[0.625vw] font-light">LP Var: <span className="text-[#069564] dark:text-[#fff]">0% <i className="innivenrolment-arrow-up-line text-[10px]"></i></span></div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[24px] xl:gap-[1.25vw]  mt-[25px] xl:mt-[25px] 3xl:mt-[1.302vw]">
                <div className="col-span-8">
                  <h3 className="text-[#374151] dark:text-[#fff] text-[18px] 3xl:text-[0.938vw] font-semibold">
                    Enrollment Conversion
                  </h3>
                  <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[24px] xl:gap-[1.25vw] mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw]">
                    <div className=" col-span-7">
                      <div className="bg-[#fff]  pr-[12px] xl:pr-[12px] 3xl:pr-[0.625vw] rounded-lg">
                        <LoaderContainer loading={Enrollment_Conversion_Maleloading} width={"103%"} height={"145px"}>
                          <div className="xl:h-[165px] 3xl:h-[9.052vw] male_bg flex justify-end items-center">
                            <EnrollmentConversion Title={"Male"} count={Enrollment_Conversion_Male?.[0]?.["MALE_COUNT"]} percentage={Enrollment_Conversion_Male?.[0]?.["CONVERSION_PERCENT"]} className="dark:bg-[#374151]" />
                          </div>
                        </LoaderContainer>
                      </div>
                      <div className="bg-[#fff]  pr-[12px] xl:pr-[12px] 3xl:pr-[0.625vw] rounded-lg mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                        <LoaderContainer loading={Enrollment_Conversion_Femaleloading} width={"103%"} height={"145px"}>
                          <div className="xl:h-[165px] 3xl:h-[9.052vw] female_bg flex justify-end items-center">
                            <EnrollmentConversion Title={"Female"} count={Enrollment_Conversion_Female?.[0]?.["FEMALE_COUNT"]} percentage={Enrollment_Conversion_Female?.[0]?.["CONVERSION_PERCENT"]} className="dark:bg-[#374151]" />
                          </div>
                        </LoaderContainer>
                      </div>


                    </div>
                    <div className="bg-[#fff] dark:bg-[#374151] p-[12px] xl:px-[12px] 3xl:p-[0.625vw] rounded-lg col-span-5">
                      <div className="bg-[#ffffff] rounded-[12px] 3xl:rounded-[0.625vw] p-[8px] 3xl:p-[0.417vw]">
                        <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px]">
                          <h3 className="text-[#374151] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">
                            Ethnicity
                          </h3>


                        </div>
                        <LoaderContainer loading={Enrollment_Conversion_Ethnicityloading} width={"100%"} height={"250px"} className={"dark:bg-[#313a46]"}>

                          <div className="w-full h-[270px] 3xl:h-[15.063vw]">
                            <PopulationChart data={Enrollment_Conversion_EthnicityData} name={["Ethnicity"]} />
                          </div>
                        </LoaderContainer>

                      </div>
                    </div>
                  </div>

                  {/* /*************second **************/}
                  <div className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-12 gap-[24px] xl:gap-[1.25vw] mt-[12px] xl:mt-[12px] 3xl:mt-[0.825vw]">
                    <div className="bg-[#fff] dark:bg-[#374151] p-[12px] xl:px-[12px] 3xl:p-[0.625vw] rounded-lg col-span-5">
                      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px]">
                        <h3 className="text-[#374151] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">
                          ZipCode Conversion
                        </h3>


                      </div>
                      <div className="w-full h-[270px] 3xl:h-[15.063vw]">
                        <LoaderContainer loading={Zipcode_Enrollment_Conversionloading} width={'100%'} height={'100%'} className="dark:bg-[#374151]">

                          <PopulationChart data={ZIPCODE_ConversionData} name={["Zip Code"]} />
                        </LoaderContainer>

                      </div>
                    </div>
                    <div className=" col-span-7">
                      <div className="bg-[#fff]  pl-[12px] xl:pl-[12px] 3xl:pl-[0.625vw] rounded-lg">
                        <div className="xl:h-[160px] 3xl:h-[9.052vw] economically_img flex items-center">
                          <EnrollmentConversionContent Title={"Economically Disadvantage Student"} netMovement={Economically_Disadvantage_Student?.[0]?.["ECO_DISADV_STUDENT"]} percentage={Economically_Disadvantage_Student?.[0]?.["CONVERSION_PERCENT"]} />
                        </div>
                      </div>
                      <div className="bg-[#fff]  pl-[12px] xl:pl-[12px] 3xl:pl-[0.625vw] rounded-lg mt-[16px] xl:mt-[16px] 3xl:mt-[0.833vw]">
                        <div className="xl:h-[160px] 3xl:h-[9.052vw] ability_img flex items-center">
                          <div class="enrollment-conversion-content w-[50%] text-center">
                            <p class="text-[#4B586E] dark:text-[#fff] text-[16px] 3xl:text-[0.833vw] font-semibold">Net Movement</p>
                            <h6 class="text-[#4B586E] dark:text-[#fff] text-[30px] 3xl:text-[1.563vw] font-bold"> 00</h6>
                            <div class="text-[#9CA1AB] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-light">Percentage:
                              <span class="text-[#069564] text-[14px] font-bold">00%</span>
                              <i class="text-[14px] text-[#069564] innivenrolment-arrow-up-line ml-1"></i>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>

                  </div>


                </div>
                <div className="col-span-4 ">
                  <h3 className="text-[#374151] dark:text-[#fff] text-[18px] 3xl:text-[0.938vw] font-semibold">
                    Key Opportunity Areas
                  </h3>
                  <div className="bg-white rounded-lg 3xl:rounded-[0.417vw] h-[95%] mt-2.5">
                    <Image src={'/images/keyopportunityareas.png'} width={519} height={278} alt="keyopportunityareas" className="rounded-lg 3xl:rounded-[0.417vw]" />
                    <div className="h-[470px] w-full 3xl:px-[0.833vw] px-4">
                      <KeyOpportunityAreas />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
}
