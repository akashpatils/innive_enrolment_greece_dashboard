import Link from "next/link";
import React, { useState } from "react";
import { Work_Sans } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Image from "next/image";

const myworksans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function FilterComponentGeospatial(props) {

  const [value, setValue] = useState('');
  const [value2, setValue2] = useState(200);

  const [selectedMonth, setSelectedMonth] = useState(false);
  const [selectedYear, setSelectedYear] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const monthOrder = {
    "January": 10,
    "February": 11,
    "March": 12,
    "April": 1,
    "May": 2,
    "June": 3,
    "July": 4,
    "August": 5,
    "September": 6,
    "October": 7,
    "November": 8,
    "December": 9
  };

  const selectedYear1 = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];
  const selectedMonth1 = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];
  const geography = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];
  const category = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];
  const type = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];
  // const year = [
  //   { name: "All", },
  //   { name: "Data 1", },
  //   { name: "Data 2", },
  // ];
  const halfYear = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];
  const quarter = [
    { name: "All", },
    { name: "Data 1", },
    { name: "Data 2", },
  ];

  return (
    <div className="filterFont relative z-10">
      <div className="min-h-[65px] bg-white flex flex-wrap justify-between rounded-md xl:rounded-full dark:bg-[#13161B] pl-2 xl:pr-0 pr-2 shadow-fillter">
        <div className="flex flex-wrap justify-start items-center gap-[18px] xl:gap-[20px] 3xl:gap-[1.042vw] pt-2 pb-1 xl:py-1">
          <div className=" lg:w-auto w-full">
            <div className="flex flex-wrap gap-[4px] items-center">

              <div className="flex items-center border border-[#E5E7EB] rounded-[63px] bg-[#F5F6F7]">
                <div className="border-r border-r-[#E5E7EB] rounded-[63px] bg-[#fff] pl-[29px] xl:pl-[26px] 3xl:pl-[1.51vw] pr-[15px] xl:pr-[12px] 3xl:pr-[0.781vw] py-[15px] xl:py-[12px] 3xl:py-[0.681vw]">
                  <div className="flex items-center gap-[55px] xl:gap-[2.865vw]">
                  
                    <InputText 
                      className="filterInput"
                      value={value} 
                      onChange={(e) => setValue(e.target.value)} 
                      placeholder="Lucas Ave, 3rd street - LA"
                      />
                    <div>
                    
                      <Image
                        src="/images/filter_icon.svg"
                        width={23}
                        height={23}
                        className="xl:w-[24px] 3xl:w-[1.25vw] xl:h-[24px] 3xl:h-[1.25vw]"
                        alt="filter"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-[16px] xl:px-[14px] 3xl:px-[0.833vw] py-[15px] xl:py-[12px] 3xl:py-[0.681vw]">
                  <div className="flex items-center gap-[10px]">
                  <i className="innivenrolment-navigation text-[20px] xl:text-[18px] 3xl:text-[1.042vw]"></i>
                  <div className="flex">
                    <InputText 
                      className="milesInput w-[2rem]"
                      value={value2} 
                      onChange={(e) => setValue2(e.target.value)} 
                      placeholder="200 miles"
                    />
                     <div className="text-[#4B586E] text-[14px] xl:text-[12px] 3xl:text-[0.729vw] font-normal"> miles</div> 

                  </div>
                  <div className="flex flex-col gap-[6px]  mr-2">
                    <i onClick={() => setValue2(value2+1)} className="innivenrolment-navigate-up text-[8px] xl:text-[0.417vw] text-[#9CA1AB] block cursor-pointer"></i>
                    <i onClick={() => setValue2(value2-1)} className="innivenrolment-navigate-down text-[8px] xl:text-[0.417vw] text-[#9CA1AB] block cursor-pointer"></i>
                  </div>
                  </div>
                </div>
              </div>

              {/* <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[85px] hover:max-w-[125px] ease-in duration-300 overflow-hidden bg-[#F6F7F9] dark:bg-[#24262D]">
                <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal leading-none ml-[-0.5rem]">
                  Year
                </span>
                <div className="custDropdown">

                  <Dropdown
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.value)}
                    placeholder='Year'
                    className="min-w-[120px] custom-class relative -left-4 pl-2"
                  // className="w-full md:w-14rem"
                  />

                </div>
              </div>
              <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[85px] hover:max-w-[125px] ease-in duration-300 overflow-hidden bg-[#F6F7F9] dark:bg-[#24262D]">
                <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal ml-[-0.5rem]">
                  Company
                </span>
                <div className="custDropdown">
                  <Dropdown
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.value)}
                    placeholder="All"
                    className="min-w-[120px] relative -left-4 pl-2"
                  />
                </div>
              </div>
              <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[85px] hover:max-w-[125px] ease-in duration-300 overflow-hidden bg-[#F6F7F9] dark:bg-[#24262D]">
                <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal ml-[-0.5rem]">
                  Department
                </span>
                <div className="custDropdown">
                  <Dropdown
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.value)}
                    placeholder="All"
                    className="min-w-[120px] relative -left-4 pl-2"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className={`${myworksans} text-[14px] 3xl:text-[0.729vw] text-[#9CA1AB]`}>
            No filter applied yet
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[8px] border border-[#ECEFF3] boxshadow1 bg-white text-[#374151]  text-center text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[8px] cursor-pointer"
            >
              Add <i className="innivenrolment-plus ml-2"></i>
            </div>
          </div>

        </div>
        <div className="flex xl:justify-end gap-2 xl:py-0 pt-1 pb-2 xl:w-auto w-full">
          <Link
            href=""
            className="p-2 xl:text-end text-center self-center xl:w-auto w-1/2 group"
            title="Applied Filters"
          >
            <i className="innivenrolment-arrow-left-line text-[12px] text-[#9CA1AB]"></i>
            <div className="text-[#9CA1AB] text-[12px] font-normal leading-tight">
              <div>
                Applied <br /> Filters
              </div>
            </div>
          </Link>
          <div className="xl:rounded-r-full flex items-center justify-center gap-2 px-[16px] bg-[#4F6484] xl:w-auto w-1/2 cursor-pointer"

          >
            <i className="innivenrolment-filter-search text-white text-[18px]"></i>
            <span className="text-[#FFF] text-[12px] font-normal leading-tight">
              <div>
                All <br /> Filters
              </div>
            </span>
          </div>
        </div>
      </div>



    </div>
  );
}
