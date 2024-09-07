import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative  lg:h-full">
      <div className="relative lg:h-full">
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
        <div className="flex  items-center justify-center h-[100%] w-full  ">
          <div className="flex lg:flex-row flex-col justify-between md:mt-10">
            <div className="lg:w-[55%] lg:space-y-5 md:space-y-3 space-y-5">
              <div className="p-1 h-[42px]">
                <span className="border-[0.5px] border-[#0DB760] rounded-2xl py-[2px] text-[#0DB760] font-medium">
                  Welcome
                </span>
              </div>
              <h1 className=" lg:text-[40px] md:text-[30px] text-[25px] font-semibold">
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
                <button className="px-[15px]  py-[6px]  font-medium rounded-[12px] flex items-center gap-2">
                  <span className="  text-sm text-black">View Portfolio</span>
                  <span>
                    {" "}
                    <Image
                      src="/arrow.png"
                      alt=""
                      width={1000}
                      height={1000}
                      className="w-full h-auto"
                    />{" "}
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[40%] lg:block hidden  relative">
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

            <div className="w-[100%] lg:hidden flex items-center p-[5%] mt-24 justify-center h-[500px] border-2   ">
              <div className="h-full w-full relative">
                <div className="border-2 border-black absolute left-0 z-20 w-[70%] h-full"></div>
                <div className="bg-[#0DB760] w-[70%] h-full absolute -top-16 left-9 ">
                  <div className="w-[100%] h-full overflow-hidden ">
                    <div className="z-30">
                      <Image
                        src="/image206.png"
                        width={1000}
                        height={1000}
                        className="w-[100%] h-auto overflow-hidden z-30"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center h-[100%] w-full  ">
          <div className="flex md:flex-row flex-col  justify-between md:mt-10">
            <div className="md:w-[55%] space-y-5">
             
              <div className="text-center w-[85px] h-[24px] rounded-full border-[0.2px] border-[#0DB760]">
                <span className="  text-[#0DB760] font-medium">Welcome</span>
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
                I am a passionate and adaptable individual, eager to learn and
                achieve. With a positive outlook and a growth mindset, I am
                poised to make a significant impact and accomplish great things.
              </p>
              <div className="flex items-center gap-3">
                <button className="px-[15px]  py-[6px]  bg-[#0DB760] text-center font-medium rounded-[12px]">
                  <span className="  text-sm text-white">Contact Me</span>
                </button>
                
                <button className="px-[15px]  py-[6px]  font-medium rounded-[12px]">
                  <span className="  text-sm text-black">View Portfolio</span>
                </button>
              </div>
            </div> 
             <div className="md:w-[40%]   relative">
              <div className="border-2 border-black z-10 md:w-[70%] w-[400px] h-[400px] md:h-[75%] absolute bottom-0 md:right-6 "></div>
              <div className="bg-[#0DB760] w-[70%] h-[75%] absolute bottom-10 md:right-0 right-6">
                <div className="w-full h-full ">
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
        </div>*/}
        <div className="absolute md:flex hidden  -right-24 top-0 h-full text-black z-50  items-center justify-center">
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
