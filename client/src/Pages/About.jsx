import React from "react";
// import GlobalHero from "../common/GlobalHero";
// import { HeroData } from "../Data/HeroData";
import AboutSec from "../components/AboutUs/AboutSec";
import AboutChoose from "../components/AboutUs/AboutChoose";
import AboutSkill from "../components/AboutUs/AboutSkill";
import AboutValues from "../components/AboutUs/AboutValues";
import AboutCounter from "../components/AboutUs/AboutCounter";

const About = () => {
  // 👉 FIND + STORE
  // const heroItem = HeroData.find((item) => item.page === "about");

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* <GlobalHero item={heroItem} /> */}

      {/* Page Content */}
      <div>
        <AboutSec />
        <AboutCounter />
        <AboutValues />
        <AboutSkill />
        <AboutChoose />
      </div>
    </div>
  );
};

export default About;
