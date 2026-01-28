import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex flec-col justify-center align-center border w-full  xl:px-20 '>
      <div className='flex justify-between align-center w-full border '>
        {/* for logo */}
        <div> logo</div>
        {/* for navlink */}
        <div className='flex gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {/* <NavLink to='/service_enquiry'>ServiceEnquiry</NavLink> */}
        </div>

        {/* for whatsap button  */}
        <div>
            <button>Let's Talk</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
