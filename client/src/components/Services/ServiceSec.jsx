import React from "react";
import { ServicesSections } from "../../Data/ServiceData";
import ServiceSection from "../../common/ServiceSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ServiceSec = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#F6EEE3] py-20 ">
      <div className="main w-full">
        <div className="  w-full flex flex-col justify-center items-center gap-14">
          {/* SectionHeading Section */}
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="subHeading">Our Services</h1>
            <h2 className="mainHeading ">Website Design And Development</h2>
          </div>

          {/* Maine Section */}
          {ServicesSections.map((section, index) => (
            <ServiceSection key={index} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSec;
