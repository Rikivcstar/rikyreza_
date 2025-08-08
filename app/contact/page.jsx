"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { motion } from "framer-motion";

function contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible ">
        <div className="w-full ">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-6">
              <div>
                <h2 className="h2 mb-6">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia tempora velit maxime eveniet quod quasi. Nulla beatae
                  aperiam{" "}
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-xl" />
                  </span>
                  <span>+62 882 2197 5726</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-xl" />
                  </span>
                  <span>rikireza3r@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineLocationMarker className="text-xl" />
                  </span>
                  <span>Bojonggede-Bogor</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1 ">
              <form action="" className="flex flex-col gap-6 items-start">
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firsname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      className=""
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      className="my-2"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    className=""
                    name="email"
                    id="email"
                    placeholder="youremail@gmail.com.."
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="name">
                    I'm interest <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Delevopment</SelectItem>
                      <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                      <SelectItem value="web3dev">Web3 Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Messages <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write A Message"
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>
                {/* button */}
                <button className="btn btn-lg btn-accent hover:btn-accent-hover">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default contact;
