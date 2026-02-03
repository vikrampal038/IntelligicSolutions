import React from "react";
import AboutSec from "../components/AboutUs/AboutSec";
import AboutChoose from "../components/AboutUs/AboutChoose";
import AboutSkill from "../components/AboutUs/AboutSkill";
import AboutValues from "../components/AboutUs/AboutValues";
import AboutCounter from "../components/AboutUs/AboutCounter";

const About = () => {
  return (
    <div className="w-full">
        <section className="bg-gradient-brand-50-100-200 pb-24 pt-14 ">
          <AboutSec />
        </section>
        <section className="bg-gradient-brand-200-100-50 pb-24">
          <AboutCounter />
        </section>
        <section>
          <AboutValues />
        </section>
        <section className="bg-gradient-brand-50-100-200 pt-24">
          <AboutSkill />
        </section>
        <section className="bg-gradient-brand-200-100-50 py-24">
          <AboutChoose />
        </section>
    </div>
  );
};

export default About;
