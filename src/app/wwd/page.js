"use client";
import React, { useEffect, useState } from "react";
import Card from "../component/Home/card";
import fetchProjectType from "../functions/projectsFilter";
const WWD = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(fetchProjectType);
    // console.log(data);
  }, [data?.count]);
  return (
    <>
      <Card />
    </>
  );
};

export default WWD;
