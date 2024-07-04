import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="inline-flex h-[50px] w-full items-center justify-center gap-7 bg-gray-100 tracking-wider text-slate-700">
        <Link href={"#!"} className="inline-flex items-center gap-2 text-xs">
          <FaTiktok /> tiktok
        </Link>
        <Link href={"#!"} className="inline-flex items-center gap-2 text-xs">
          <FaFacebookF /> facebook
        </Link>
        <Link href={"#!"} className="inline-flex items-center gap-2 text-xs">
          <FaInstagram /> instagram
        </Link>
      </div>

      <div className="pb-8 pt-5 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="container grid gap-10 text-slate-500 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-2xl font-extrabold uppercase tracking-wider text-slate-900">
              Logo
            </h4>
            <p className="mt-10 text-sm">
              The world without photography will be meaningless to us if there
              is no light and color, which opens up our minds and expresses
              passion
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-wider text-slate-900">
              Latest Photos
            </h4>

            <div className="mb-5 mt-3 h-[2px] w-[50px] border-none bg-primary" />

            <div className="grid grid-cols-4 gap-2">
              <Image
                width={200}
                height={200}
                src="/images/12357.jpg"
                alt="img"
                className="h-[80px] w-full object-cover duration-200 hover:scale-105"
              />
              <Image
                width={200}
                height={200}
                src="/images/12357.jpg"
                alt="img"
                className="h-[80px] w-full object-cover duration-200 hover:scale-105"
              />
              <Image
                width={200}
                height={200}
                src="/images/12357.jpg"
                alt="img"
                className="h-[80px] w-full object-cover duration-200 hover:scale-105"
              />
              <Image
                width={200}
                height={200}
                src="/images/12357.jpg"
                alt="img"
                className="h-[80px] w-full object-cover duration-200 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-wider text-slate-900">
              Contacts
            </h4>

            <div className="mb-5 mt-3 h-[2px] w-[50px] border-none bg-primary" />

            <p className="text-sm">
              <span className="font-semibold">Phone: </span> +233 245 792 480
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Email: </span>{" "}
              support@lensartmedia.com
            </p>

            <p className="mt-4 text-sm lg:whitespace-nowrap">
              Copyright © {new Date().getFullYear()} LensArt Media. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
