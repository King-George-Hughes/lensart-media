import { staggerContainer } from "@/lib/motion";
import { MotionDiv } from "./MotionContainer";
import { ReactNode } from "react";

const StaggerContainerMotion = ({ children }: { children: ReactNode }) => {
  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      {children}
    </MotionDiv>
  );
};

export default StaggerContainerMotion;
