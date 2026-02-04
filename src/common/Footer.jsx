import React from "react";
import { useState } from "react";
import { validateForm } from "../utils/formValidation";
import { submitWithToast } from "../hooks/useFormSubmit";
import EmailInputField from "../components/Form/EmailInputField";

import { NavLink } from "react-router-dom";
import { SeoData } from "../Data/FooterData";
import { Service } from "../Data/FooterData";
import { Social } from "../Data/FooterData";
import { Contact } from "../Data/FooterData";
import { Legal } from "../Data/FooterData";
// import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  const [data, setData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const rules = {
    email: "email",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(data, rules);

    if (!data.phone || data.phone.length < 10) {
      validationErrors.phone = "Enter valid phone number";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    await submitWithToast({
      data,
      pageKey: "contact-info",
      successMsg: "Thanks! We will contact you soon.",
      failMsg: "Submission failed. Try again.",
      resetForm: () =>
        setData({
          email: "",
        }),
      setLoading,
    });
  };
  const columns = 4;
  const itemsPerColumn = Math.ceil(SeoData.length / columns);

  const seoColumns = Array.from({ length: columns }, (_, i) =>
    SeoData.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn),
  );

  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center items-center w-full bg-gradient-brand-400-300-400">
        {/* For First Section */}
        <div className=" px-5 sm:px-50 md:px-25 lg:px-35 w-full py-16 flex justify-center flex-col items-center gap-10 bg-gradient-brand-400-300-400">
          {/* For Logo And Email Section */}
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-start gap-6 ">
            <div className="flex justify-start items-start">
              <img
                src="./Assets/Logo/intelligic.png"
                alt="Footer logo"
                className="w-32 sm:w-40 md:w-48 h-auto object-contain"
              />
            </div>

            {/* Email Subscription */}
            <div className="flex flex-col  gap-3 w-full">
              <span className="footertext font-semibold">
                Subscribe to our newsletter for latest updates
              </span>

              <div className="flex flex-col sm:flex-row w-150 items-stretch gap-2 sm:gap-3 border  border-slate-500 rounded-lg p-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-center items-start gap-4 w-full"
                >
                  <EmailInputField
                    label={false}
                    value={data.email}
                    onChange={(value) => setData({ ...data, email: value })}
                    error={errors?.email}
                    className="borer-none"
                  />
                  {/* <button type="submit" className="button w-full sm:w-auto">
                    Subscribe
                  </button> */}

                  <button
                    className="relative group overflow-hidden button w-full sm:w-auto   inline-flex items-center justify-center"
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 bg-[#8be0ff5b] border rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

                    {/* Button text */}
                    <span className="relative z-10">Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* For Links And Contacts */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* For Services Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Services</h1>
              <div className="flex flex-col gap-3">
                {Service.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="flex items-center gap-3 transition"
                  >
                    <FaAngleDoubleRight className="footerIcon" />
                    <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                      <span className="footertext animationtext">
                        {item.label}
                      </span>
                      <span className="footertext animationtexthover">
                        {item.label}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* For Explore Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Explore</h1>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className="flex items-center gap-3 transition"
                >
                  <FaAngleDoubleRight className="footerIcon" />
                  <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                    <span className="footertext animationtext">
                      {item.label}
                    </span>
                    <span className="footertext animationtexthover">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* For Follow Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Follow Us</h1>
              <div className="flex flex-col gap-4">
                {Social.map((item, index) => {
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
                      <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                        <span className="footertext animationtext">
                          {item.label}
                        </span>
                        <span className="footertext animationtexthover">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* For Contacts Link */}
            <div className="flex flex-col gap-6">
              <h1 className="footerHeading">Contact</h1>
              <div className="flex flex-col gap-4">
                {Contact.map((item, index) => {
                  const Icon = item.icons;

                  const Content = (
                    <div className="flex items-start gap-4">
                      <Icon className="footerIcon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                      <span className="footertext tracking-wider leading-6 hover:text-gray-800 transition-all duration-700 ease-in-out">
                        {item.label}
                      </span>
                    </div>
                  );

                  return item.to ? (
                    <a
                      key={index}
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={index}>{Content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* For Second Section  */}
        <div className="px-5 sm:px-15 md:px-25 lg:px-35 w-full bg-[#8a8a8a8e] py-6 ">
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {seoColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {column.map((item, index) => (
                  <div
                    key={index}
                    to={item.path}
                    className="footertext text-sm hover:text-gray-200 transition-all duration-900 ease-in-out"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* For Third Section */}
        <div className=" px-5 sm:px-15 md:px-25 lg:px-35 w-full py-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-between items-center gap-6 bg-gradient-brand-400-300-400">
          {/* for copy write */}
          <div className="footertext tracking-wider  transition-all duration-1200  hover:text-gray-600">
            <span className="text-start">
              © 2025 Intelligic Solutions. All rights reserved.
            </span>
          </div>

          {/* for legals Links */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex gap-6 text-center justify-end md:col-span-3">
              {Legal.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-end transition text-center"
                >
                  <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                    <span className="footertext animationtext text-center">
                      {item.label}
                    </span>
                    <span className="footertext animationtexthover text-center">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
