import { NavLink } from "react-router-dom";
import bgMain from '/Assets/All Images/ServiceConnect.png'; // agar public folder me hai to ye path '/Assets/...'
import bgInner from '/Assets/All Images/connectblue.png';


const Section = () => {
  return (
    <section
      className="topmain pb-25"
      style={{
        backgroundImage: `url(${bgMain})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="main w-full">
        <div
          className="cart-shadow rounded-4xl flex flex-col justify-center items-center gap-14 py-14 px-5"
          style={{
            backgroundImage: `url(${bgInner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="mainHeading  w-320 text-center text-black">Let's Build Something Amazing Together! Connect with Us Today!</h1>
            <p className="mainParagraph w-250 text-black text-center">We are passionate about bringing great ideas to life. Let’s combine our expertise with your unique vision to build something truly amazing together.</p>
            <NavLink to="/contact" className="button ">Get Started</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
