import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full">
      <div className="container flex flex-col justify-center pt-24 md:pt-32">
        <h3 className="text-center text-3xl font-bold md:text-start md:text-4xl">
          Contacts
        </h3>
        <div className="my-8 grid w-full grid-cols-1 gap-5 font-light md:grid-cols-3">
          <div className="mt-2 flex w-full max-w-md flex-col gap-5 tracking-wide">
            <p className="text-center font-light md:max-w-xs md:text-start">
              The world without photography will be meaningless to us if there
              is no light and color.
            </p>
            <p className="text-center text-sm font-light text-gray-500 md:max-w-xs md:text-start">
              My photos are inspired by light, color, techniques from black &
              white processing, vintage photos, creative perspective, and of
              course, most importantly, the personalities of the people I
              photograph!
            </p>
          </div>

          <div className="mt-5 flex w-full flex-col items-center gap-5 md:mt-0">
            <div className="inline-flex w-full items-center gap-5">
              <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[1.5px] border-primary">
                <Phone size={20} />
              </div>
              <p>+(233) 245 792 480</p>
            </div>

            <div className="inline-flex w-full items-center gap-5">
              <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[1.5px] border-primary">
                <Mail size={20} />
              </div>
              <p>info@stepfordstudios.com</p>
            </div>

            <div className="inline-flex w-full flex-row items-center gap-5">
              <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[1.5px] border-primary">
                <MapPin size={20} />
              </div>
              <p>
                Lakeside Estate Community 8, <br /> University Avenue
              </p>
            </div>
          </div>

          <div className="mt-5 flex w-full flex-col gap-5 md:mt-0">
            <div className="w-full max-w-lg p-2">
              <div className="flex w-full flex-col items-center space-y-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-none border-b-[1.5px] border-primary px-5 py-2 text-center outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full rounded-none border-b-[1.5px] border-primary px-5 py-2 text-center outline-none"
                />
                <textarea
                  placeholder="Enter Your Message"
                  rows={4}
                  className="w-full rounded-none border-b-[1.5px] border-primary px-5 py-2 text-center outline-none"
                ></textarea>

                <Button
                  variant={"outline"}
                  className="rounded-none border-primary hover:bg-primary hover:text-white"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-20 w-full px-2 md:my-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5330414153636!2d-0.24111502520161307!3d5.635716294345413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf998b56dcbd0d%3A0xe05ae43ef38e9ab0!2sButterfly%20Print!5e0!3m2!1sen!2sgh!4v1717247277793!5m2!1sen!2sgh"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
