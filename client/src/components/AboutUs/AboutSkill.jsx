import React from "react";
import SkillsSection from "../../common/SkillsSection";

const AboutSkill = () => {
  return (
    <section className="w-full flex flex-col justify-between items-center bg-[#F6EEE3] py-20">
      <div className="main flex flex-row justify-between items-center  w-full">
        {/* left Side Bar */}
        <div className="w-1/2 flex flex-col justify-center items-start gap-8">
        {/* Heading */}
          <div className="w-full flex flex-col justify-center items-start gap-4 ">
            <h1 className="subHeading text-black">Our Skills</h1>
            <h2 className="mainHeading text-[##505050] ">
              The Software of Your Thoughts
            </h2>
            <p className="mainParagraph text-[#7A7A7A]">
              We transform your ideas into powerful, user-friendly software
              solutions, combining creativity and technology to turn visions
              into impactful digital realities.
            </p>
          </div>
          {/* Progress Bar  */}
          <div className="w-full flex flex-col justify-center items-center">
            <SkillsSection />
          </div>
        </div>

        {/* Right Side sECTION */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="cart w-140 h-auto rounded-2xl"
            src="Assets/All Images/AboutSkill.png"
            alt="OurSkill Section Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSkill;
