import React from "react";
// import { NavLink } from "react-router-dom";
// import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import ServicePopup from "../common/ServicePopup";
import { ServiceDetails } from "../Data/ServiceDetails";

const ServiceSection = ({ section }) => {
  return (
    <div
      id={section.id}
      className=" w-full flex flex-col justify-center items-center gap-6 scroll-mt-10"
    >
      <div className="w-full flex flex-col justify-center items-start gap-5">
        <h3 className="subHeading">{section.sectionTitle}</h3>
        <p className="mainParagraph w-1/2">{section.sectionPara}</p>
      </div>

      {/* Service Cart */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-6">
        {section.cards.map((card, index) => {
          const Icon = card.icons;

          // 🔑 MATCH CARD WITH DETAILS (by id)
          const serviceDetail = ServiceDetails.find(
            (item) => item.id === card.id
          );

          return (
            <div
              key={index}
              className="card flex bg-white flex-col justify-center items-start gap-2 md:gap-4 2xl:gap-6 border border-black rounded-lg p-[10px] md:p-[20px] 2xl:p-[30px] "
            >
              <Icon className="icon" />
              <div className=" flex flex-col gap-4 justify-center items-start">
                <h3 className="subHeading">{card.title}</h3>
                <p className="mainParagraph ">{card.description}</p>
                {/* <NavLink
                  to="/contact"
                  className="group bg-transparent text-[#54B4CD] text-[30px] border-2 rounded-lg border-black px-3 py-2 font-bold inline-flex items-center justify-center"
                >
                  <PiArrowBendDoubleUpRightBold className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                </NavLink> */}

                {ServiceDetails && <ServicePopup service={serviceDetail} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
