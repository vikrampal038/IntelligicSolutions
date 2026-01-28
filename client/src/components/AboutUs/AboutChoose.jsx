import React from "react";
import { ChooseUs } from "../../Data/AboutData";
import { HiSparkles } from "react-icons/hi2";

const AboutChoose = () => {
  return (
    <section className="topmain pb-25 bg-[#f7f7f7] ">
      <div className="main w-full">
        <div className="  w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <div className="w-full flex flex-col gap-4 ">
            {/* heading */}
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Why Choose Us</h1>
            </div>
            {/* subHeading */}
            <div className="flex justify-between items-start">
              <h2 className="mainHeading w-1/2 ">
                The Ultimate Source of Software
              </h2>
              <p className="mainParagraph w-1/2  ">
                Delivering innovative, reliable, and customized software
                solutions that empower businesses, enhance efficiency, and drive
                growth in today’s competitive digital landscape.
              </p>
            </div>
          </div>

          {/* Maine Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
            {ChooseUs.map((item, index) => {
              const Icon = item.icons;
              return (
                <div
                  key={index}
                  className="cart flex bg-white flex-col justify-center items-start gap-6 rounded-lg p-[30px]"
                >
                  <Icon className="icon" />
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <h3 className="subHeading">{item.title}</h3>
                    <p className="mainParagraph ">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChoose;
