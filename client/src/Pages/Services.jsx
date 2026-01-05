import React from "react";
// import GlobalHero from "../common/GlobalHero";
// import { HeroData } from "../Data/HeroData";
import ServiceSec from "../components/Services/ServiceSec";
import ServicesAnalyzer from "../components/Services/ServicesAnalyzer";
import ServicesConnect from "../components/Services/ServicesConnect";
import ServiceValue from "../components/Services/ServicesValue"

const Services = () => {
  // const heroItem = HeroData.find((item) => item.page === "services");
  return (
    <div>
      {/* Hero Section */}
      {/* <GlobalHero item={heroItem} /> */}
      {/* Page Contain */}
      <div>
        <ServiceSec />
        <ServiceValue />
        <ServicesAnalyzer />
        <ServicesConnect />
      </div>
    </div>
  );
};

export default Services;
