import { ArrowRight } from "lucide-react";
import Wrapper from "./wrapper";
import { Button } from "../ui/button";
import ShimmerBadge from "./badge";
import Pattern1 from "../svg/pattern-1";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import Marquee from "./marquee";
import Grain from "./grain";
import Features from "./features";
import FAQ from "./faq";
import Footer from "./footer";

const Hero = () => {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="absolute inset-0 w-screen min-h-screen z-10 top-0 left-0 pointer-events-none">
        <Pattern1 className="opacity-10" />
      </div>

      <Wrapper className="relative min-h-[calc(100vh-3.5rem)]  border-neutral-700 border-x z-40 bg-background pt-8 sm:pt-12 md:pt-16  flex flex-col items-center text-center overflow-hidden">
        <Grain />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)] z-0" />

        <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
          <ShimmerBadge className="text-xs sm:text-sm" />

          <h1 className="mt-6 sm:mt-8 bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-[450] leading-tight sm:leading-tighter px-4">
            A shadcn registry <br className="hidden sm:block" />
            <span className="sm:hidden">of </span>
            <span className="hidden sm:inline">of </span>
            beautifully crafted buttons
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl text-neutral-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
            Beautiful, interactive buttons built for landing pages and modern
            web apps — no packages, no lock-in. The perfect companion for
            shadcn.
          </p>

          <div className="mt-6 sm:mt-8 px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto px-4">
            <Button className="group h-10 text-sm sm:h-11 px-5 sm:px-6 w-full sm:w-auto bg-neutral-100 text-black hover:bg-neutral-200 transition-all duration-300 hover:scale-105  sm:text-base">
              View Components
              <ArrowRight className="ml-2 size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="ghost"
              className="group h-10 sm:h-11 px-5 sm:px-6 w-full sm:w-auto text-neutral-200 hover:bg-neutral-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Open Docs
              <ArrowRight className="ml-2 size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6 text-neutral-500">
            <FaReact className="size-6 sm:size-7 md:size-8" />
            <SiShadcnui className="size-4 sm:size-5" />
            <TbBrandFramerMotion className="size-6 sm:size-7 md:size-8" />
            <RiNextjsLine className="size-6 sm:size-7 md:size-8" />
            <RiTailwindCssFill className="size-6 sm:size-7 md:size-8" />
          </div>
        </div>

        <Marquee />

        <Features/>

        <FAQ/>

        <Footer/>
      </Wrapper>



      
      
    </section>
  );
};

export default Hero;
