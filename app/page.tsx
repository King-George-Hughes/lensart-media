import { CarouselHero } from "@/components/global/CarouselHero";
import FloatingSocialMedia from "@/components/global/FloatingSocialMedia";
import { RatecardSlider } from "@/components/global/RatecardSlider";
import HeroAbout from "@/components/partials/HeroAbout";
import TheGallery from "@/components/partials/TheGallery";
import { carouselData } from "@/lib/constant";

export default function Home() {
  return (
    <main>
      <CarouselHero data={carouselData} />

      <div className="h-full w-full bg-gray-100">
        <HeroAbout />
      </div>

      <div className="my-20" />
      <div className="mb-5 text-center">
        <h3 className="pb-5 text-3xl font-bold lg:text-4xl">
          Rate
          <span className="text-primary">cards</span>
        </h3>
      </div>
      <RatecardSlider />

      <div className="container">
        <TheGallery />
      </div>
    </main>
  );
}
