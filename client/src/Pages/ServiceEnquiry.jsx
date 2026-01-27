import React from 'react'
import Enquirysec from '../components/ServiceEnquiry/Enquirysec';
// import { HeroData } from "../Data/HeroData";
// import GlobalHero from "../common/GlobalHero";


const ServiceEnquiry = () => {
  // 👉 FIND + STORE
  // const heroItem = HeroData.find((item) => item.page === "service_enquiry");

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* <GlobalHero item={heroItem} /> */}

      {/* Page Content */}
      <div>
        <Enquirysec />
      </div>
    </div>
  );
};

export default ServiceEnquiry
