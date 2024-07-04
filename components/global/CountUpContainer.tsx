"use client";

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

interface Props {
  end: number;
  start?: number;
  delay?: number;
  duration?: number;
}

const CountUpContainer = ({
  start = 0,
  end,
  delay = 0,
  duration = 5,
}: Props) => {
  const [onScreenView, setOnScreenView] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setOnScreenView(true)}
      onExit={() => setOnScreenView(false)}
    >
      {onScreenView && (
        <CountUp start={start} end={end} duration={duration} delay={delay} />
      )}
    </ScrollTrigger>
  );
};

export default CountUpContainer;
