"use client";

import { motion } from "framer-motion";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modelu
import { Pagination } from "swiper/modules";
// swiper style
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const service = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Front-end Developer",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Back-end Developer",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "Search Engine Optimization",
  },
  {
    icon: "/assets/services/block.svg",
    href: "",
    title: "Blockchain Developer",
  },
];

function services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Custom <span className="text-accent">Web Solution</span> to Boots
            your Business
          </h2>
          {/* button  */}
          <button className="btn btn-lg btn-accent flex gap-2">
            All Services <MdArrowRightAlt className="text-2xl" />
          </button>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {service.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full bg-secondary h-[280px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-12">
                    <Image src={item.icon} width={48} height={48} alt="" />
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h2 className="text-[22px] font-medium max-w-[240px]">
                    {item.title}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default services;
