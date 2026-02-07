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

const Hero = () => {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="absolute inset-0 w-screen h-screen z-10 top-0 left-0 pointer-events-none">
        <Pattern1 className="opacity-10" />
      </div>

      <Wrapper className="relative h-screen border-neutral-700 border-x z-40 bg-background py-16 flex flex-col items-center text-center overflow-hidden">
        <Grain />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)] z-0" />

        <div className="relative z-10 flex flex-col items-center text-center w-full">
          <ShimmerBadge />

          <h1 className="mt-8 bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-[450] leading-tighter max-w-5xl">
            A shadcn registry <br /> of beautifully crafted buttons
          </h1>

          <p className="mt-6 max-w-3xl text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed">
            Beautiful, interactive buttons built for landing pages and modern
            web apps — no packages, no lock-in. The perfect companion for
            shadcn.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Button className="group h-11 px-6 bg-neutral-100 text-black hover:bg-neutral-200 transition-all duration-300 hover:scale-105">
              View Components
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="ghost"
              className="group h-11 px-6 text-neutral-200 hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
            >
              Open Docs
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-neutral-400">
            <FaReact className="size-8" />
            <SiShadcnui className="size-5" />
            <TbBrandFramerMotion className="size-8" />
            <RiNextjsLine className="size-8" />
            <RiTailwindCssFill className="size-8" />
          </div>

          <Marquee />
        </div>

       
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      </Wrapper>
    </section>
  );
};

export default Hero;
