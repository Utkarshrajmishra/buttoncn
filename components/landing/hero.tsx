import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Pattern1 from "../svg/pattern-1";
import { Button } from "../ui/button";
import ShimmerBadge from "./badge";
import FAQ from "./faq";
import Features from "./features";
import Footer from "./footer";
import Grain from "./grain";
import Marquee from "./marquee";
import Wrapper from "./wrapper";

const Hero = () => {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 top-0 left-0 z-10 min-h-screen w-screen">
        <Pattern1 className="opacity-10" />
      </div>

      <Wrapper className="bg-background relative z-40 flex min-h-[calc(100vh-3.5rem)] flex-col items-center overflow-hidden border-x border-neutral-700 pt-8 text-center sm:pt-12 md:pt-16">
        <Grain />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
          <ShimmerBadge className="text-xs sm:text-sm" />

          <h1 className="sm:leading-tighter mt-6 bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 bg-clip-text px-4 text-3xl leading-tight font-[450] tracking-tight text-transparent sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            A shadcn registry <br className="hidden sm:block" />
            <span className="sm:hidden">of </span>
            <span className="hidden sm:inline">of </span>
            beautifully crafted buttons
          </h1>

          <p className="mt-4 max-w-xs px-4 text-sm leading-relaxed text-neutral-500 sm:mt-6 sm:max-w-md sm:text-base md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl">
            Beautiful, interactive buttons built for landing pages and modern
            web apps — no packages, no lock-in. The perfect companion for
            shadcn.
          </p>

          <div className="mt-6 flex w-full flex-col items-center gap-3 px-4 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4 sm:px-6 md:gap-6">
            <Link href="/docs/components">
              <Button className="group h-10 w-full bg-neutral-100 px-5 text-sm text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200 sm:h-11 sm:w-auto sm:px-6 sm:text-base">
                View Components
                <ArrowRight className="ml-2 size-3 transition-transform group-hover:translate-x-1 sm:size-4" />
              </Button>
            </Link>

            <Link href="/docs">
              <Button
                variant="ghost"
                className="group h-10 w-full px-5 text-sm text-neutral-200 transition-all duration-300 hover:scale-105 hover:bg-neutral-800 sm:h-11 sm:w-auto sm:px-6 sm:text-base"
              >
                Open Docs
                <ArrowRight className="ml-2 size-3 transition-transform group-hover:translate-x-1 sm:size-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-4 text-neutral-500 sm:mt-8 sm:gap-6">
            <FaReact className="size-6 sm:size-7 md:size-8" />
            <SiShadcnui className="size-4 sm:size-5" />
            <TbBrandFramerMotion className="size-6 sm:size-7 md:size-8" />
            <RiNextjsLine className="size-6 sm:size-7 md:size-8" />
            <RiTailwindCssFill className="size-6 sm:size-7 md:size-8" />
          </div>
        </div>

        <Marquee />

        <Features />

        <FAQ />

        <Footer />
      </Wrapper>
    </section>
  );
};

export default Hero;
