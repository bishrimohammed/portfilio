import React from "react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-16 text-sm">
      <div className="border-t-[1px] border-[#BEC0BF] flex justify-between py-5">
        <div>@ 2024. All Rights Reserved</div>
        <div>Developed By Bishri.</div>
        <div className="flex gap-x-4 px-2">
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
