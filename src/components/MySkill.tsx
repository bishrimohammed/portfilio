import Image from "next/image";
import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";

export const MySkill = () => {
  return (
    <div className="">
      <div className="flex justify-between pb-10  pt-0">
        <div className="flex gap-1 flex-col font-poppins ">
          <h2 className="text-[#0DB760] text-4xl font-semibold">80+</h2>
          <p className="text-black font-normal">Satisfied clients</p>
        </div>
        <div className="w-[0.5px] bg-[#0DB760]"></div>
        <div className="flex gap-1 flex-col font-poppins ">
          <h2 className="text-[#0DB760] text-4xl font-semibold">80+</h2>
          <p className="text-black font-normal">Satisfied clients</p>
        </div>
        <div className="w-[0.5px] bg-[#0DB760]"></div>

        <div className="flex gap-1 flex-col font-poppins ">
          <h2 className="text-[#0DB760] text-4xl font-semibold">80+</h2>
          <p className="text-black ">Satisfied clients</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  justify-between items-center pt-2 mb-5 space-y-10">
        <div className="md:w-[50%] space-y-5">
          <div className="text-center w-[70px] h-[24px] rounded-full border-[0.2px] border-[#0DB760]">
            <span className="text-[#0DB760] font-medium">My Skill</span>
          </div>

          <h1 className=" text-[25px] font-semibold">
            Why Hire Me For Your <br />
            Next
            <span className="text-[#0DB760]"> Project?</span>{" "}
          </h1>
          <p className="text-[#323433] text-">
            I’m specialist in UI/UX Designe. My passion is designing & solving
            problems through user experience and research.
          </p>
          <div className="flex items-center gap-3">
            <button className="px-[15px]  py-[5px]  bg-[#0DB760] text-center font-medium rounded-[12px]">
              <span className="  text-sm text-white">Hire Me</span>
            </button>
          </div>
        </div>
        <div className="md:w-[47%] text-black flex justify-end">
          <div className="md:w-[80%]  flex gap-3 flex-col md: ">
            <div className=" ">
              <div className="flex items-center gap-3">
                <GoGoal color="0DB760" size={30} />
                {/* <img src="/attention-to-detail.png" width={30} /> */}
                <h2 className="text-black md:text-lg text-2xl font-semibold my-[2px] font-poppins">
                  Deadline Oriented
                </h2>
              </div>
              <p className="md:text-xs text-base font-inter mt-1 ps-1">
                Focusing on timely delivery while maintaining high-quality
                standards and innovative design solutions.
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <BsFillEyeFill color="0DB760" size={25} />
                {/* <img src="/attention-to-detail.png" width={30} /> */}
                <h2 className="text-black md:text-lg text-2xl font-semibold my-[2px] font-poppins ">
                  Attention to Detail
                </h2>
              </div>
              <p className="md:text-xs text-base font-inter mt-1 ps-1">
                Focusing on timely delivery while maintaining high-quality
                standards and innovative design solutions.
              </p>
            </div>
            <div className="">
              {/* <GoGoal color="0DB760" size={25} /> */}
              <div className="flex items-center gap-3">
                <img src="/creative-thinking.png" width={30} />
                <h2 className="text-black md:text-lg text-2xl font-semibold my-[2px] font-poppins">
                  Creative Thinking
                </h2>
              </div>
              <p className="md:text-xs text-base font-inter mt-1 ps-1">
                Approaching problems with originality and innovation to generate
                unique solutions and ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
