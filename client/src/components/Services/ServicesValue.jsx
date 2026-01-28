import React from "react";
import servicebg from "/Assets/All Images/Servicevaluebg.jpg";
import { ValueData } from "../../Data/ServiceData";
import Progress from "../../common/Progress";
import { HiSparkles } from "react-icons/hi2";

const ServicesValue = () => {
  return (
    <section
      className="topmain pb-25"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
        url(${servicebg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="main flex flex-row justify-between items-center  w-full">
        {/* left Side Bar */}
        <div className="w-1/2 flex flex-col justify-center items-start gap-8">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-start gap-4 ">
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Our Value</h1>
            </div>
            {/* <h1 className="subHeading text-white">Our Value</h1> */}
            <h2 className="mainHeading text-[#C5C5C5]">Big Data Analyzer</h2>
            <p className="mainParagraph text-[#CCCCCC]">
              We build custom digital solutions with unwavering integrity, while
              our innovative spirit drives us to exceed your expectations in
              every project.
            </p>
          </div>

          {/* Video   */}
          <div className="w-full grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2  gap-6  ">
            {ValueData.map((item, index) => {
              const Icon = item.icons;
              return (
                <div
                  key={index}
                  className="normal-shadow relative overflow-hidden group flex bg-transparent justify-center items-center gap-6 rounded-lg p-[20px] transition-transform duration-700 ease-in-out"
                >
                  {/* Square overlay */}
                  <span className=" absolute inset-0 bg-[#dad7d263] -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-in-out z-0"></span>

                  <Icon className="icon text-[45px] z-10" />
                  <div className="flex flex-col gap-4 justify-center items-start relative z-10">
                    <h3 className="subHeading text-white">{item.title}</h3>
                    <p className="mainParagraph text-[#CCCCCC]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side SECTION */}
        <div className="cart-shadow w-1/3 px-15 py-10 flex justify-center items-start rounded-xl  bg-white ">
          <Progress />
        </div>
      </div>
    </section>
  );
};

export default ServicesValue;
