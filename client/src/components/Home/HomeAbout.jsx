import React from "react";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { HomeSocial } from "../../Data/HomeData";

const HomeAbout = () => {
  return (
    <section className="topmain bg-white">
      <div className="main flex flex-row justify-between items-center w-full">
        {/* Left Side Sction */}
        <motion.div
          className="w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="Assets/All Images/HomeAbout.avif"
            className="cart w-100  rounded-2xl bg-white p-2"
            alt="OurSkill Section Image"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 22px 45px rgba(0,0,0,0.14)",
              filter: "brightness(1.05)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Right Side Bar */}
        <div className="  w-1/2 flex flex-col justify-start items-center gap-12">
          {/* Heading */}
          <div className="w-full flex flex-col justify-start items-start gap-8 ">
            {/* heading */}
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading text-black">About Us</h1>
            </div>
            {/* details */}
            <div className="flex flex-col gap-4">
              <p className="mainParagraph text-[#7A7A7A]">
                At Intelligic Solution, we believe technology should make life
                easier and business smarter. Our team of skilled developers,
                designers, and strategists works closely with clients to craft
                innovative IT solutions tailored to their unique goals.
              </p>
              <p className="mainParagraph text-[#7A7A7A]">
                We specialize in scalable web applications, custom software, and
                enterprise systems built for performance, security, and growth.
                Every project is guided by our commitment to quality,
                transparency, and lasting value. From idea to implementation, we
                transform visions into powerful, future-ready solutions that
                help businesses thrive in an ever-evolving digital world.
              </p>
            </div>

            {/* social icons */}
            <div className=" flex flex-col gap-6">
              <div className="flex justify-center items-center gap-4">
                {HomeSocial.map((item, index) => {
                  const Icon = item.icons;
                  return (
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 transition"
                    >
                      <Icon className="footerIcon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
