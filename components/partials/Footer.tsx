import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-black/90 pb-8 pt-5 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="container grid gap-10 border-b-2 pb-4 text-slate-200 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-xl font-extrabold uppercase tracking-wider text-slate-100">
              Lensart Media
            </h4>
            <p className="mt-10 text-sm">
              The world without photography will be meaningless to us if there
              is no light and color, which opens up our minds and expresses
              passion
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-wider text-slate-100">
              Useful Links
            </h4>

            <div className="mb-5 mt-3 h-[2px] w-[50px] border-none bg-primary" />

            <div className="grid gap-2 lg:grid-cols-2">
              <Link href={"/gallery"}>Gallery</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/contact"}>Contact us</Link>
              <Link href={"/about"}>About</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-wider text-slate-100">
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
          </div>
        </div>

        <div className="inline-flex h-[50px] w-full items-center justify-center gap-7 bg-white tracking-wider text-slate-800">
          <Link href={"#!"} className="inline-flex items-center gap-2 text-xs">
            <FaTiktok size={20} />
          </Link>
          <Link href={"#!"} className="inline-flex items-center gap-2 text-xs">
            <FaFacebookF size={20} />
          </Link>
          <Link href={"#!"} className="inline-flex items-center gap-2 text-xs">
            <FaInstagram size={20} />
          </Link>
        </div>

        <p className="mt-4 text-center text-sm text-slate-200 lg:whitespace-nowrap">
          Copyright © {new Date().getFullYear()} LensArt Media. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
