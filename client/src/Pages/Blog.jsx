import React from "react";
// import GlobalHero from "../common/GlobalHero.jsx";
// import { HeroData } from "../Data/HeroData.js";
import Blogsec from "../components/Blog/Blogsec.jsx";

const Blog = () => {
  // const heroItem = HeroData.find((item) => item.page === "blog");
  return (
    <div>
      {/* Hero Section */}
      {/* <GlobalHero item={heroItem} /> */}
      {/* Page Contain */}
      <div>
        <Blogsec />
      </div>
    </div>
  );
};

export default Blog;
