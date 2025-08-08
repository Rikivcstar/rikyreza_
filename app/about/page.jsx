"use client";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Social from "@/components/Social";
import Bloob from "@/components/Bloob";
import Testimonial from "@/components/Testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

function about() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row gap-24 items-center w-full h-[680px]">
          {/* image & Social media */}
          <div className=" hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            <Image
              src="/assets/avatar.png"
              width={450}
              height={510}
              className="z-20 relative right-20"
              alt=""
            />
            {/* overlay */}
            <div className="w-full h-[65px] absolute left-0 right-0 top-[420px] bg-gradient-to-t from-primary via-primary/90 z-30 "></div>
            <div className="absolute top-[60px] -left-[70px] z-10">
              <Bloob containerStyles="w-[420px] h-[420px] " />
            </div>
            <Social
              containerStyles="flex gap-4 z-40 w-max transfrom translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[27px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer "
            />
          </div>

          {/* Scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <p>About Me</p>
            </div>
            <h2 className="h2 mb-6">
              <span className="text-accent">Riki</span> Reza
            </h2>
            <p className="max-w-[540px] mb-12">
              I am a Web Developer and Web Designer with a strong focus on
              creating modern, responsive, and user-friendly digital
              experiences. I have hands-on experience in building clean and
              dynamic web interfaces using HTML, CSS, JavaScript, React, Laravel
              and TailwindCSS. I’m also exploring the world of Blockchain
              Development, particularly working with smart contracts using
              Solidity and understanding the fundamentals of Web3 technologies.
            </p>
            <div className="flex flex-col items-start gap-10">
              <Stats />
              <Testimonial />
              <Info />
              <Journey />
              <Skills />
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
}

export default about;
