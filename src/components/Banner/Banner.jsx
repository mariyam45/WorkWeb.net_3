import React from "react";
import manImg from "../../../assets/images/user.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-10">
      <div className="hero h-full  hero_bg ">
        <div className="hero-content flex-col lg:flex-row-reverse  md:w-4/6 ">
          <div className="w-3/5 ">
            <img src={manImg} className=" rounded-lg  mx-auto w-full" />
          </div>
          <div className="w-2/5">
            <h1 className="text-5xl font-bold leading-tight">
              One Step Closer To Your{" "}
              <span className="dream-txt">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn start_btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
