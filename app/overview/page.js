"use client";
import React, { useState } from "react";
import Layout from "../../components/layout/pagelayout";
import Overview from "./overview";
import { Provider } from "react-redux";

export default function Page() {

  return (
    <Layout pageTitle="Overview" parentPageName="Home" pageName="Current Page">

      <div className="">
        <div className=" px-[32px] 3xl:px-[1.667vw]">
          <Overview />
        </div>
      </div>

    </Layout>
  );
}
