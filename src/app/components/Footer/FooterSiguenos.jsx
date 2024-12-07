import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import Link from "next/link";

function FooterSiguenos() {
  return (
    <div>
      <p className="text-white font-bold text-center">SÍGUENOS</p>
      <div className=" flex text-white py-4 text-xl">
        <Link href={""}>
          <p className="mr-2 hover:text-[#A0737D]">
            <FaFacebookF />
          </p>
        </Link>
        <Link href={""}>
          <p className="mr-2 hover:text-[#A0737D]">
            <FaInstagram />
          </p>
        </Link>
        <Link href={""}>
          <p className="mr-2 hover:text-[#A0737D]">
            <FiYoutube />
          </p>
        </Link>
        <Link href={""}>
          <p className="mr-2 hover:text-[#A0737D]">
            <FaTelegramPlane />
          </p>
        </Link>
        <Link href={""}>
          <p className="mr-2 hover:text-[#A0737D]">
            <FaXTwitter />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default FooterSiguenos