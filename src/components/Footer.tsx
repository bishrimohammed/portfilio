import React from "react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="md:pt-3 text-sm">
      <div className="border-t-[1px] border-[#BEC0BF] flex md:flex-row flex-col gap-y-4 md:justify-between justify-center py-5">
        <div className="text-center order-2 md:order-none">
          Copyright © 2024 Bishri Mohammed. All rights reserved.
        </div>
        {/* <div>Developed By Bishri.</div> */}
        <div className="md:hidden flex gap-x-4 px-2 justify-center md:order-none order-1">
          <FaFacebook size={23} color="0DB760" className="cursor-pointer" />
          <FaInstagramSquare
            size={23}
            color="0DB760"
            className="cursor-pointer"
          />
          <FaLinkedin size={23} color="0DB760" className="cursor-pointer" />
          <FaGithubSquare size={23} color="0DB760" className="cursor-pointer" />
        </div>
        <div className="md:flex hidden gap-x-4 px-2 justify-center md:order-none order-1">
          <FaFacebook color="0DB760" className="cursor-pointer" />
          {/* <FaInstagram /> */}
          <FaLinkedin color="0DB760" className="cursor-pointer" />
          <FaInstagramSquare color="0DB760" className="cursor-pointer" />
          <FaGithubSquare color="0DB760" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
