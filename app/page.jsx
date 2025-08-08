"use client";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";

import { TypeAnimation } from "react-type-animation";
import Bloob from "../../components/Bloob";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar.png";
import { inflate } from "zlib";
import Social from "../../components/Social";
import Pattern from "../../components/Pattern";

export const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex  items-center"
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm Reza,
            <br />
            <TypeAnimation
              sequence={["Web Developer", 1000, "Blockchain Dev", 1000]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              className="text-accent"
              repeat={Infinity}
              cursor={true}
            />
          </h1>

          <p className="max-w-[500px] mb-[44px]">
            I build visually and modern, user-friendly-websites and Blockchain
            apps that transform your ideas into seamless, and help people to be
            free with blockchain technology.{" "}
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>
          {/* conntact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent text-2xl">
                <HiOutlineMail />
              </span>
              <a href="">
                <span className="hover:text-slate-300 transition-all ease-in-out">
                  rikireza3r@gmail.com
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg my-3 ">
              <span className="text-accent text-2xl">
                <CiLinkedin />
              </span>
              <a
                href="https://www.linkedin.com/in/riki-reza-ryansyah-3b534523b/"
                className="hover:text-slate-300 transition-all ease-in-out"
              >
                <span>Riki Reza Ryansyah</span>
              </a>
            </div>
          </div>

          {/* social */}
          <Social
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 
            2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2 "
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-12 h-12 text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
          {/* bloob */}
          <Bloob containerStyles="w-[540px] h-[510px]" />
          {/* Avatar Iamage*/}
          <Image
            src={avatarImg}
            alt=""
            width={630}
            height={800}
            quality={100}
            className="absolute -top-14 "
          />

          {/* overlay */}
          <div className="w-full h-[90px]    absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
