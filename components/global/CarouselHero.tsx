"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MotionDiv, MotionP } from "../motion/MotionContainer";

interface ImageDataProps {
  title: string;
  image: string;
  url?: string;
  urlName?: string;
}

interface Props {
  data: ImageDataProps[];
}

const textVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
};

export function CarouselHero({ data }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnLastSnap: false }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {data.map((image, index) => (
          <CarouselItem key={index} className="-pl-1 md:basis">
            <div className="relative flex h-screen w-full items-center justify-center">
              <Image
                src={image.image}
                width={1200}
                height={1200}
                priority
                alt={image.title}
                className="absolute h-full w-full object-cover"
              />

              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-32 border-none bg-gradient-to-b from-black/80" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 border-none bg-gradient-to-t from-black/80" />
              </>

              <MotionDiv
                initial="initial"
                animate="visible"
                variants={textVariants}
                className="container z-50 flex flex-col items-center"
              >
                <MotionP className="py-4 text-center font-bold text-white/90">
                  <span className="text-xl md:text-5xl">Welcome to</span> <br />
                  <span className="text-xl text-primary md:text-5xl">
                    Lensart Media
                  </span>
                </MotionP>
              </MotionDiv>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

// "use client";

// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import Link from "next/link";
// import * as React from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { MotionDiv, MotionP } from "../motion/MotionContainer";

// interface ImageDataProps {
//   title: string;
//   image: string;
//   url?: string;
//   urlName?: string;
// }

// interface Props {
//   data: ImageDataProps[];
// }

// const textVariants = {
//   initial: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.2,
//       duration: 0.8,
//     },
//   },
// };

// export function CarouselHero({ data }: Props) {
//   const plugin = React.useRef(
//     Autoplay({ delay: 5000, stopOnInteraction: false, stopOnLastSnap: false }),
//   );

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.play}
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//     >
//       <CarouselContent className="-ml-1">
//         {data.map((image, index) => (
//           <CarouselItem key={index} className="-pl-1 md:basis">
//             <div className="relative flex h-screen w-full items-center justify-center">
//               <Image
//                 src={image.image}
//                 fill
//                 priority
//                 alt={image.title}
//                 className="absolute h-full w-full object-cover"
//               />

//               <>
//                 <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-32 border-none bg-gradient-to-b from-black/60" />
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 border-none bg-gradient-to-t from-black/60" />
//               </>

//               <MotionDiv
//                 initial="initial"
//                 animate="visible"
//                 variants={textVariants}
//                 className="container z-50 flex flex-col items-center"
//               >
//                 <MotionP className="py-4 text-center text-xl font-bold text-white/90 md:text-5xl">
//                   {image.title}
//                 </MotionP>
//                 <Link
//                   href={image.url!}
//                   className="relative mt-2 border border-primary/50 bg-primary/40 px-4 py-2 text-center text-white backdrop-blur-sm md:mt-4"
//                 >
//                   <span>{image.urlName}</span>
//                   <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
//                 </Link>
//               </MotionDiv>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }
