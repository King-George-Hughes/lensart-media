import { slideIn } from "@/lib/motion";
import Image from "next/image";
import { MotionDiv } from "../motion/MotionContainer";
import StaggerContainerMotion from "../motion/StaggerContainer";

const HeroAbout = () => {
  const words = ["Photographer.", "Video Director.", "Content Creator."];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="container flex flex-col items-center justify-between gap-20 py-20 md:flex-row md:gap-5">
        <StaggerContainerMotion>
          <MotionDiv
            variants={slideIn("left", "tween", 0.1, 0.5)}
            className="relative mx-auto h-[400px] w-full overflow-hidden rounded-sm md:h-[500px] lg:h-[600px]"
          >
            <Image
              src="/images/IMG_8205.jpg"
              // src="/images/whats-new.png"
              width={800}
              height={800}
              alt="Stepford Studios"
              className="absolute h-full w-full object-cover"
            />
          </MotionDiv>
        </StaggerContainerMotion>

        <StaggerContainerMotion>
          <MotionDiv
            variants={slideIn("right", "tween", 0.1, 0.5)}
            className="flex items-center justify-center"
          >
            <div>
              <h4 className="md:text-md text-sm font-bold uppercase text-primary">
                About Us
              </h4>
              <h2 className="my-3 max-w-md text-[1.7rem] font-bold lg:text-4xl">
                We Are Nova <br />
                <span className="text-primary">Creative Studio.</span>
              </h2>

              <div className="my-5 h-[1.5px] w-[40px] bg-primary" />
              <h1 className="mt-5 max-w-lg text-sm font-light leading-loose tracking-wider text-slate-700">
                The world without photography will be meaningless to us if there
                is no light and color, which opens up our minds and expresses
                passion.
              </h1>

              <p className="mt-5 max-w-lg text-xs font-light leading-loose tracking-wider text-slate-500">
                My style is a combination between photojournalism and fine-art
                photography with a touch of fashion and creative lighting. My
                photos are inspired by light, color, techniques from black &
                white processing, vintage photos, creative perspective, and of
                course, most importantly, the personalities of the people I
                photograph!
              </p>
            </div>
          </MotionDiv>
        </StaggerContainerMotion>
      </div>
    </div>
  );
};

export default HeroAbout;
