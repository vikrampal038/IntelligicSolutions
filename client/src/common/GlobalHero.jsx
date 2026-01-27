import React from 'react'


const GlobalHero = ({ item }) => {
  if (!item) return null;

  return (
    <div
      className="relative w-full lg:h-[400px] h-[260px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4 animate-slide-up-delay">
        <h1 className="text-white text-3xl lg:text-5xl font-bold">
          {item.title}
        </h1>

        <p className="text-gray-200 max-w-3xl mt-3 animate-slide-up-delay">
          {item.Description}
        </p>
      </div>
    </div>
  );
};


export default GlobalHero
