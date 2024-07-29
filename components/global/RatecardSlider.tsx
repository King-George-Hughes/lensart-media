"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ratecardImages = [
  {
    title: "Studio",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252792/lensart/page_0_oryalr.jpg",
    price: 35,
  },
  {
    title: "Lifestyle",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252788/lensart/PAGE_2_cdzyvv.jpg",
    price: 29,
  },

  {
    title: "Weddings",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252787/lensart/PAGE_3_bndbnc.jpg",
    price: 49,
  },
  {
    title: "Shoots",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252787/lensart/PAGE_5_kpkxdc.jpg",
    price: 50,
  },
  {
    title: "Shoots",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252784/lensart/PAGE_1_io4zzl.jpg",
    price: 50,
  },
  {
    title: "Shoots",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252784/lensart/PAGE_4_jytvse.jpg",
    price: 50,
  },
  {
    title: "Shoots",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252783/lensart/PAGE_8_raqdye.jpg",
    price: 50,
  },
  {
    title: "Shoots",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252783/lensart/PAGE_7_tyxcrq.jpg",
    price: 50,
  },
  {
    title: "Shoots",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_90/v1722252783/lensart/PAGE_6_w9duag.jpg",
    price: 50,
  },
];

export function RatecardSlider() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnLastSnap: false,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
      opts={{
        align: "start",
        loop: true,
        // duration: 100,
      }}
    >
      {/* <CarouselPrevious  /> */}
      <CarouselContent className="-ml-1">
        {ratecardImages.map((image, index) => (
          <CarouselItem key={index} className="-pl-1 md:basis-1/2 xl:basis-1/3">
            <div className="relative flex h-full w-full">
              <Image
                src={image.image}
                width={800}
                height={800}
                alt={"ratecard"}
                className="h-full w-full object-contain object-top lg:px-1"
              />
              <div className="absolute right-0 top-0 flex w-[50%] flex-col items-center justify-center">
                {/* <div className="h-[30px] w-[2px] bg-primary" /> */}

                {/* <p className="mt-2 text-lg font-bold uppercase text-slate-900">
                  {image.title}
                </p>

                <p className="mt-5 text-5xl font-bold uppercase tracking-wider text-black/90 lg:text-8xl">
                  ${image.price}
                </p> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
