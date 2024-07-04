declare module "react-scroll-trigger" {
  import { ComponentType, ReactNode } from "react";

  interface ScrollTriggerProps {
    onEnter?: () => void;
    onExit?: () => void;
    children?: ReactNode;
  }

  const ScrollTrigger: ComponentType<ScrollTriggerProps>;
  export default ScrollTrigger;
}
