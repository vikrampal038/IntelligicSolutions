import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-brand-500-300-200 border-b z-40">
      <div className="flex items-center justify-between xl:px-35 px-5 sm:px-10 md:px-15 lg:px-20 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="inline-flex items-center">
            <img
              src="/Assets/Logo/intelligic.png"
              alt="Intelligic – Technology & Digital Solutions"
              className="w-28 sm:w-30 md:w-35 lg:w-48 xl:w-42 h-auto object-contain transition-transform duration-300 hover:scale-105"/>
          </NavLink>
        </div>

        {/* Nav Links */}
        <div className="flex gap-8 text-lg tracking-wider font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* WhatsApp / CTA */}
        <div className="cart-shadow  relative group p-2.5 overflow-hidden rounded w-56 text-center border border-[#00AEEF] hover:scale-110 transition-all duration-1000 ease-in-out">
          {/* Hover background */}
          <span className="absolute inset-0 bg-[#4fd3ff3f] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

          {/* WhatsApp link */}
          <a
            href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services.%20I’d%20like%20to%20discuss%20how%20we%20can%20work%20together%20to%20grow%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10  subHeading  xl:text-[18px]  rounded w-full"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
