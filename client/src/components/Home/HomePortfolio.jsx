import React from "react";
import HomeHeading from "../../common/HomeHeading";
import PortfolioCard from "../../common/PortfolioCard";

// images
import site1 from "../../Assets/Images/amengineers.png";
import site2 from "../../Assets/Images/marigoldpaints.png";
import site3 from "../../Assets/Images/orienteeringfederationofindia.png";
import site4 from "../../Assets/Images/riseonelevators.png";
import site5 from "../../Assets/Images/sevatirthcharitabletrust.png";
import site6 from "../../Assets/Images/technokraftsol.png";

const HomePortfolio = () => {
  return (
    <section className="topmain">
      <div className="main w-full ">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Our Portfolio"
            subHeading="These are our portfolio and still adding"
          />
          {/* Portfolio Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
            <PortfolioCard title="AM Engineers" image={site1} />
            <PortfolioCard title="Orienteering Federation Of India" image={site3} />
            <PortfolioCard title="Riseon Elevators" image={site4} />
            <PortfolioCard title="Technokraft Solution" image={site6} />
            {/* <PortfolioCard title="Sevatirth Charitable Trust" image={site5} /> */}
            {/* <PortfolioCard title="Marigold Paints" image={site2} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
