"use client";
import Top from "./top";
import Left from "./left";
import { useState } from "react";
import { Inter } from "next/font/google";
import Bottom from "./bottom";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children, ...pageProps }) {

  const [topShow, setTopShow] = useState(true);

  return (
    <>
      {topShow === true ?
        <Top topTab={pageProps.topTab} pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} parentPageName={pageProps.parentPageName} />
        : null
      }
      <Left />
      <div className={`${inter.className} pl-[95px] pb-[50px] lg:pb-[50px] xl:pb-[4.25vw] dark:bg-black `}>
        <main>
          {children}
        </main>
      </div>
      <Bottom />
    </>
  );
}
