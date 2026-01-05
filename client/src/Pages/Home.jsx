import React from "react";
import HomeHero from "../components/Home/HomeHero.jsx";
import HomeAbout from "../components/Home/HomeAbout.jsx";
import HomeChoosUs from "../components/Home/HomeChoosUs.jsx";
import HomeServices from "../components/Home/HomeServices.jsx";
import HomePortfolio from "../components/Home/HomePortfolio.jsx";
import HomeBlog from "../components/Home/HomeBlog.jsx";
import HomeTestimonial from "../components/Home/HomeTestimonial.jsx";

const Home = () => {
  // 👉 FIND + STORE
  return (
    <div>
      {/* Hero Section */}
        <HomeHero />
      <div>
        <HomeAbout />
        <HomeChoosUs />
        <HomeServices />
        <HomePortfolio />
        <HomeBlog />
        <HomeTestimonial />
      </div>
    </div>
  );
};

export default Home;
