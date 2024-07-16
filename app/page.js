"use client";

import React, { useState, useEffect } from "react";
import LogIn from "./Login";

const MainContent = () => {

  return (
    <div className="App">
      <LogIn />
    </div>
  );
};

export default function Index() {
  return (
    <>

      <MainContent />
    </>
  );
}
