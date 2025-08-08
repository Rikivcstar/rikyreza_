"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// swiper modelu
import { Pagination } from "swiper/modules";
// swiper style
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

const project = [
  {
    id: 1,
    category: "FullStack",
    title: "Sistem Pengaduan Masyarakat",
    description: "Bootstrap + php & mysql Web App",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Php", "Bootstrap 5", "Mysql"],
  },
  {
    id: 2,
    category: "FullStack",
    title: "Sistem Absensi Karyawan",
    description: "Tailwind Css + php & mysql Web App",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Php", "Tailwind Css", "Mysql"],
  },
  {
    id: 3,
    category: "FullStack",
    title: "Sistem Blog & Edukasi Free",
    description: "Tailwind Css + Laravel & Sqlite Web App",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Laravel 12", "Tailwind Css", "Sqlite"],
  },
  {
    id: 4,
    category: "frontend",
    title: "Launchave Landing Page",
    description: "Bootstrap + React Landing Page",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["React js", "TailwindCss", "Framer Motion"],
  },
  {
    id: 5,
    category: "frontend",
    title: "Company Profile",
    description: "Bootstrap + NextJs company Profile",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["React", "NextJs", "TailwindCss", "Framer Motion"],
  },
  {
    id: 6,
    category: "BlockChain",
    title: "The Decentralized Zakat",
    description: "Tailwind + NextJs Web3 app",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["React", "NextJs", "Tailwind Css", "Framer Motion", "Solidty"],
  },
  {
    id: 7,
    category: "BlockChain",
    title: "Information Transaktion Pemilu",
    description: "Bootstrap + NextJs Web3 App",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["React", "NextJs", "Tailwind Css", "Framer Motion", "Solidty"],
  },
  {
    id: 8,
    category: "ui/ux",
    title: "Company Profile",
    description: "Bootstrap + NextJs company Profile",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["React", "NextJs", "Tailwind Css", "Framer Motion"],
  },
];
const categories = ["frontend", "FullStack", "ui/ux", "BlockChain"];
const work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0 ">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "ui/ux" ? "UI/UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {project
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full ">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3"> {project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff] px-[14px] h-[28px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-lg" />
                                      <span>Live More</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-lg" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* image */}
                              <div className="w-full h-[230px] md:h-[320px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default work;
