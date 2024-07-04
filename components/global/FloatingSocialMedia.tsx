import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FloatingSocialMedia = () => {
  return (
    <div className="hidden fixed w-[20px] h-screen z-10 lg:flex items-center justify-center flex-col gap-20 ml-10 text-sm text-slate-800">
      <Link href="#!" className="-rotate-90 inline-flex items-center gap-2">
        <FaInstagram /> instagram
      </Link>
      <Link href="#!" className="-rotate-90 inline-flex items-center gap-2">
        <FaXTwitter /> twitter
      </Link>
      <Link href="#!" className="-rotate-90 inline-flex items-center gap-2">
        <FaFacebookF /> facebook
      </Link>
    </div>
  );
};

export default FloatingSocialMedia;
