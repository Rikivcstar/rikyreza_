"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft } from "react-icons/im";

// Data

const testimonial = [
  {
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit amet consectetur.",
    name: "RIKI REZA",
  },
  {
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit amet consectetur.",
    name: "RIKI REZA",
  },
  {
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit amet consectetur.",
    name: "RIKI REZA",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-3">
                <p>{person.message}</p>
                <p className="self-end text-accent font-bold">
                  - {person.name} -{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
