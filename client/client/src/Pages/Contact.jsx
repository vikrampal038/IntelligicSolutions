import React from "react";
// import GlobalHero from "../common/GlobalHero";
import { HeroData } from "../Data/HeroData";
import Contacform from "../components/Contact/Contactform";
import ContactFaq from "../components/Contact/ContactFaq";
import ContactHero from "../components/Contact/ContactHero";
import ContactSocial from "../components/Contact/ContactSocial";
import Allbg from "/Assets/All Images/Aacontact.jpg";

const Contact = () => {
  // const heroItem = HeroData.find((item) => item.page === "contact");
  return (
    <div>
      {/* for Hero Section */}
      {/* <GlobalHero item={heroItem} /> */}
      {/* for Page Contain */}
      <div
        style={{
          backgroundImage: `url(${Allbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "110%",
          backgroundAttachment: "scroll", // instead of fixed
        }}
      >
        <ContactHero />
        <Contacform />
        <ContactSocial />
        <ContactFaq />
      </div>
    </div>
  );
};

export default Contact;
