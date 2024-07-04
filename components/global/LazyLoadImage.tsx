import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

type TrackWinScroll = Props | any;

interface Props {
  image: string;
  alt?: string;
  scrollPosition?: { x: number; y: number };
  className?: string;
  effect?: "blur" | "black-and-white" | "opacity";
}

const LazyImage = ({
  image,
  alt,
  scrollPosition,
  className,
  effect = "blur",
}: Props) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={"100%"}
      src={image}
      scrollPosition={scrollPosition}
      width={"100%"}
      effect={effect}
      placeholderSrc={image}
      wrapperProps={{
        style: { transitionDelay: "0.3s", animationDuration: "0.5s" },
      }}
      className={className}
    />
  );
};

export default trackWindowScroll<TrackWinScroll>(LazyImage);
