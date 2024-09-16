import React from "react";
import { BiCurrentLocation, BiLocationPlus, BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <section className="py-10 ">
      <div className="flex  flex-col items-center justify-center gap-2 space-y-2">
        <div className="text-center w-[70px] h-[24px] rounded-full border-[0.2px] border-[#0DB760]">
          <span className="text-[#0DB760] font-medium">Contact</span>
        </div>
        <h1 className=" lg:text-[30px] text-[24px] lg:text-start text-center font-semibold font-inter">
          Let’s Discuss Your
          <span className="text-[#0DB760]"> Project?</span>{" "}
        </h1>
        <p className="md:w-[50%]  text-[#323433] text-sm text-center">
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="flex md:flex-row flex-col  md:mt-10 gap-x-20">
        <div className="md:block hidden md:space-y-8 space-y-4 md:mb-0  ">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-[#0DB760]">
              <BiPhone color="white" />
            </div>
            <div className="space-y-1">
              <h2 className="text-[#92929D]  font-medium text-xs">Phone</h2>
              <p className="text-[#11142D] text-xs">0966540229</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-[#0DB760]">
              <MdEmail color="white" />
            </div>
            <div className="space-y-1">
              <h2 className="text-[#92929D] font-medium text-sm">Email</h2>
              <p className="text-[#11142D] text-xs">bishri60@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-[#0DB760]">
              <CiLocationOn color="white" />
            </div>
            <div className="space-y-1">
              <h2 className="text-[#92929D] font-medium text-sm">Adress</h2>
              <p className="text-[#11142D] text-xs">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        <div className="md:flex-1 px-3 md:mt-0 sm:mt-10 mt-6">
          <div className="flex flex-wrap w-full justify-between  gap-y-3">
            <div className="md:w-[48%] w-full border-[1px] border-[#BEC0BF]">
              <input
                type="text"
                className="px-2 py-3 text-xs md:w-[70%] w-full outline-none placeholder:text-xs"
                placeholder="Full Name"
              />
            </div>
            <div className="md:w-[48%] w-full border-[1px] border-[#BEC0BF]">
              <input
                type="text"
                className="px-2 py-3 text-xs md:w-[70%] w-full outline-none placeholder:text-xs"
                placeholder="Your Email"
              />
            </div>

            <div className="md:w-[48%] w-full border-[1px] border-[#BEC0BF]">
              <input
                type="text"
                className="px-2 py-3 text-xs w-[70%] outline-none placeholder:text-xs"
                placeholder="Phone Number"
              />
            </div>
            <div className="md:w-[48%] w-full border-[1px] border-[#BEC0BF]">
              <input
                type="text"
                className="px-2 py-3 text-xs w-[70%] outline-none placeholder:text-xs"
                placeholder="Budget"
              />
            </div>
            <div className="w-full">
              <textarea
                name=""
                className="text-sm border-[1px] h-[80px] border-[#BEC0BF] py-2 px-3 w-full outline-none placeholder:text-xs"
                id=""
                placeholder="Message"
              />
            </div>
          </div>
          <div className="flex justify-end items-center mt-4">
            <button className="px-[20px]  py-[10px] flex justify-center items-center  bg-[#0DB760] text-center font-medium rounded-[12px]">
              <span className="  text-xs text-white">Submit Message</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
