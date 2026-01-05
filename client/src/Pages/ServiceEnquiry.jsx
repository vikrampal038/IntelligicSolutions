import React from "react";
import Enquirysec from "../components/ServiceEnquiry/Enquirysec";
import Allbg from "/Assets/All Images/contactbg1.png";
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
      <div
        style={{
          backgroundImage: `url(${Allbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundAttachment: "scroll", // instead of fixed
        }}
      >
        <Enquirysec />
      </div>
    </div>
  );
};

export default ServiceEnquiry;
