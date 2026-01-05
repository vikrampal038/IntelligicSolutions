import React from "react";
import { motion } from "framer-motion";
import { HomeChooseUs } from "../../Data/HomeData";
import { HiSparkles } from "react-icons/hi2";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HomeChoosUs = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#0A1A2F] py-20">
      <div className="main w-full border">
        <div className=" w-full flex flex-col justify-center items-center gap-14 border">
          {/* Heading Section */}
          <div className="w-full flex flex-col gap-4 border ">
            {/* heading */}
            <div className="w-fit subheadingbg flex justify-start items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading ">Why Choose Us</h1>
            </div>
            {/* subHeading */}
            <div className="flex justify-between items-start">
              <h2 className="mainHeading w-1/2 text-[#CCCCCC] ">
                Amazing Software, Built For You​
              </h2>
            </div>
          </div>

          {/* Maine Section */}
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {HomeChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0px 18px 40px rgba(0,0,0,0.12)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className=" flex bg-[#f7f7f7] flex-col justify-center items-center gap-6 border w-100 border-black rounded-lg p-[20px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-center rounded-xl"
                />

                <div className="flex flex-col gap-4 justify-center items-center">
                  <h3 className="subHeading">{item.title}</h3>
                  <p className="mainParagraph text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeChoosUs;
