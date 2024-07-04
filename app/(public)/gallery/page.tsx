import { faqs } from "@/lib/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TheGallery from "@/components/partials/TheGallery";

const FAQs = () => {
  return (
    <div className="mt-24 md:mt-32">
      <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <TheGallery title="Our" subtitle="Gallery" />
      </div>
    </div>
  );
};

export default FAQs;
