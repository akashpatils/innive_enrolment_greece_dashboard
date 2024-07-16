import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Bottom(props) {
  return (
    <>
      <div className="fixed bottom-0 z-[10] max-md:w-full w-full">
       <div className="bg-white dark:bg-[#191A1E] w-full flex items-center justify-between py-2.5 3xl:py-[0.521vw] pl-[95px] 3xl:pr-[1.771vw] pr-8">
            <div>
                <Image src={'/images/left-menu-icons/logo-big.svg'} width={108} height={40} alt="" className="3xl:w-[5.625vw] 3xl:h-[2.083vw]" />
            </div>
            <div className="flex dark:text-[#fff] items-center gap-7 3xl:gap-[1.563vw] text-[#37445E] text-[14px] xl:text-[12px] font-normal leading-[18px] 3xl:text-[0.729vw] 3xl:leading-[0.938vw]">
                <Link href=''>Conditions of Use</Link>
                <Link href=''>Privacy Notice</Link>
                <span>@2014-2022, Innive Inc. Copyrighted</span>
            </div>
       </div>
      </div>
    </>
  );
}
