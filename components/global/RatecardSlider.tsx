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
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_80/v1717932585/stepford/studio/5_e4wcyj.jpg",
    price: 35,
  },
  {
    title: "Lifestyle",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_80/v1717932594/stepford/studio/12_solz2l.jpg",
    price: 29,
  },

  {
    title: "Weddings",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_80/v1717932561/stepford/studio/43_zdtcdc.jpg",
    price: 49,
  },
  {
    title: "Commercials",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_80/v1717932548/stepford/studio/28_pkcazg.jpg",
    price: 99,
  },
  {
    title: "Events",
    image:
      "https://res.cloudinary.com/dg4k5afvg/image/upload/w_800,q_80/v1717932558/stepford/studio/41_kqv4sa.jpg",
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
          <CarouselItem key={index} className="-pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="relative flex h-screen w-full">
              <Image
                src={image.image}
                width={800}
                height={800}
                alt={image.title}
                className="absolute h-full w-full object-cover object-top"
              />
              <div className="absolute top-0 flex w-full flex-col items-center justify-center">
                <div className="h-[30px] w-[2px] bg-primary" />

                <p className="mt-2 text-lg font-bold uppercase text-slate-900">
                  {image.title}
                </p>

                <p className="mt-5 text-8xl font-bold uppercase tracking-wider text-black/90">
                  ${image.price}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
