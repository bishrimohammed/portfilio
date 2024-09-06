import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative h-full">
      <div className="relative h-full ">
        <header className="absolute top-3 w-full z-30">
          <div className="flex items-center  justify-between">
            <div className="logo">
              <Image src="/logo.png" width={100} height={100} alt="Logo" />
              {/* <h1>Design</h1> */}
            </div>
            <ul className="flex gap-[40px] font-medium leading-10">
              <li>About</li>
              <li>Skills</li>
              <li>Portfolio</li>
              <li>Testimonial</li>
            </ul>
            <button className="border-[2px]   w-[150px] border-[#0DB760] font-medium rounded-[12px]">
              <span className="leading-[30px] text-sm">Download CV</span>
            </button>
          </div>
        </header>
        <div className="flex items-center justify-center h-[100%] w-full  ">
          <div className="flex justify-between md:mt-10">
            <div className="w-[55%] space-y-5">
              <div className="p-1 h-[42px]">
                <span className="border-[0.5px] border-[#0DB760] rounded-2xl py-[2px] text-[#0DB760] font-medium">
                  Welcome
                </span>
              </div>
              <h1 className=" leading-[50px] text-[40px] font-semibold">
                I am{" "}
                <span className="text-[#0DB760]">
                  Creative <br /> Software
                </span>{" "}
                Developer
              </h1>
              <p className="text-[#323433] text-">
                I’m Bishri.
                {/* a creative Product Designer. I’ve been helping
                businesses to solve their problems with my design for 2 years. */}
                I am a passionate and adaptable individual, eager to learn and
                achieve. With a positive outlook and a growth mindset, I am
                poised to make a significant impact and accomplish great things.
              </p>
              <div className="flex items-center gap-3">
                <button className="px-[15px]  py-[6px]  bg-[#0DB760] text-center font-medium rounded-[12px]">
                  <span className="  text-sm text-white">Contact Me</span>
                </button>
                {/* <button className="  w-[110px]  font-medium ">
                <span className="leading-[35px] text-black"> */}
                <button className="px-[15px]  py-[6px]  font-medium rounded-[12px]">
                  <span className="  text-sm text-black">View Portfolio</span>
                </button>
              </div>
            </div>
            <div className="w-[40%]  relative">
              <div className="border-2 border-black z-10 w-[70%] h-[75%] absolute bottom-0 right-6"></div>
              <div className="bg-[#0DB760] w-[70%] h-[75%] absolute bottom-10 right-0">
                <div className="w-full h-full overflow-hidden ">
                  <div className="absolute bottom-0 z-[11]">
                    <Image
                      src="/image206.png"
                      width={1000}
                      height={1000}
                      className="w-[full] h-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-24 top-0 h-full text-black z-50 flex  items-center justify-center">
          <div className="h-full flex flex-col items-center justify-center gap-[25px]">
            {" "}
            <span className="rotate-90 font-medium text-[#0DB760] text-sm mb-7">
              Follow me on:
            </span>
            <div className="w-[1px] h-[50px] bg-[#0DB760]"></div>
            {/* <div className="flex flex-col gap-2"></div> */}
            <FaSquareFacebook color="0DB760" />
            <FaLinkedin color="0DB760" />
            <FaInstagramSquare color="0DB760" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
