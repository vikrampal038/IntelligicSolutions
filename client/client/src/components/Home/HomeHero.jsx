import React from 'react'
import GlobalHero from "../../common/GlobalHero";
import { HeroData } from "../../Data/HeroData";

const HomeHero = () => {
  // 👉 FIND + STORE
    const heroItem = HeroData.find((item) => item.page === "/");
  return (
    <div className='border w-full'>
       <GlobalHero item={heroItem} />
    </div>
  )
}

export default HomeHero
