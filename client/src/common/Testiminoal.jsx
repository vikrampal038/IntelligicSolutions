import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonial } from "../Data/HomeData";
import Autoplay from "embla-carousel-autoplay";

const Testiminoal = () => {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 relative">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[
            Autoplay({
              delay: 4000, // slow autoplay
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="embla"
        >
          <CarouselContent className="items-center">
            {testimonial.map((item, index) => (
              <CarouselItem
                key={index}
                className={`md:basis-1/3 basis-full flex justify-center ${
                  selectedIndex === index ? "is-selected" : ""
                }`}
              >
                <div className=" w-[330px] h-[310px] bg-[#9f9a93] text-center rounded-xl p-6 shadow-lg transition-all duration-500 flex flex-col gap-4">
                  <div className="flex justify-center">
                    <FaUsers className="text-black text-6xl" />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="subHeading">{item.name}</h3>

                    <p className="label">{item.title}</p>

                    <p className="text-[12px] lg:text-[14px] text-black font-normal  tracking-wide text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-14" />
          <CarouselNext className="-right-14" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testiminoal;
