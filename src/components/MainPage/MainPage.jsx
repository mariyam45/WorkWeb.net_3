import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Features from "../Features/Features";

const MainPage = () => {
  const featureJob = useLoaderData();

  return (
    <>
      <Banner />
      <Categories></Categories>
      <Features featureJob={featureJob}></Features>
    </>
  );
};

export default MainPage;
