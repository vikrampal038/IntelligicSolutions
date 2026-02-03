import React from "react";
import MainRouter from "./appRouter/MainRouter";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import "react-phone-input-2/lib/style.css";
import SocialIcons from "./common/SocialIcons";

const App = () => {
  return (
    <div className="flex flex-col w-full items-center overflow-x-hidden">
      {/* Fixed Side Icons */}
      <SocialIcons />

      {/* Fixed Top Navbar */}
      <Navbar />

      {/* Page Content (offset for fixed navbar) */}
      <div className="w-full pt-16">
        <MainRouter />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;




































// import react from 'react'
// import MainRouter from './appRouter/MainRouter'
// import Navbar from './common/Navbar'
// import Footer from './common/Footer'
// import "react-phone-input-2/lib/style.css";
// import SocialIcons from './common/SocialIcons';

// const App = () => {
//   return (
//     <div className='flex flex-col w-full justify-center items-cente'>
//        <SocialIcons />
//       <Navbar />
//       <div className='flex flex-col w-full'>
//       <MainRouter />
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App
