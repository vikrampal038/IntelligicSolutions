import React from "react";
import AccordionBlock from "../../common/AccordionBlock";
import { ContactData, FeaturesData } from "../../Data/AccordionData";
import { FaQuora } from "react-icons/fa6";
const ContactFaq = () => {
  return (
    // bg-[#FEFEFF]
    <section className="w-full flex flex-col justify-center items-center bg-[#FEEFE1] py-20">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-14">
          {/* SectionHeading Section */}
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="subHeading">FAQS</h1>
            <h2 className="mainHeading">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Faq Section  */}
          <div className="w-full flex justify-center items-center gap-14">
            {/* About Company */}
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <div className="flex  justify-center items-center gap-4">
                <FaQuora  className="icon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                <h3 className="subHeading">About Company</h3>
              </div>
              <AccordionBlock
                className="w-full xl:max-w-[700px]"
                data={ContactData}
              />
            </div>

            {/* About Features */}
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <div className="flex  justify-center items-center gap-4">
                <FaQuora  className="icon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                <h3 className="subHeading">About Features</h3>
              </div>
              <AccordionBlock
                className="w-full xl:max-w-[700px]"
                data={FeaturesData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
