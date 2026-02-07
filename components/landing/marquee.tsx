"use client"

import { motion } from "framer-motion"
import ExpandButton from "../buttoncn/expand-button"
import FoldButton from "../buttoncn/fold-button"
import GlassyButton from "../buttoncn/glass-button"
import GlowButton from "../buttoncn/glow-button"
import MarchButton from "../buttoncn/march-button"
import PixelButton from "../buttoncn/pixel-button"
import RainbowButton from "../buttoncn/rainbow-button"
import ShadowPopButton from "../buttoncn/shadow-pop-button"
import ShimmerButton from "../buttoncn/shimmer-button"
import { SplashButton } from "../buttoncn/splash-button"
import SweepButton from "../buttoncn/sweep-button"
import WaveButton from "../buttoncn/wave-button"

const buttons = [
  <SplashButton key="1">Splash</SplashButton>,
  <FoldButton key="2">Fold</FoldButton>,
  <SweepButton key="3">Sweep</SweepButton>,
  <RainbowButton key="4">Rainbow</RainbowButton>,
  <WaveButton key="5">Wave</WaveButton>,
  <ShimmerButton key="6">Shimmer</ShimmerButton>,
  <ExpandButton key="7">Expand</ExpandButton>,
  <GlowButton key="8">Glow</GlowButton>,
  <ShadowPopButton key="9">Shadow</ShadowPopButton>,
  <MarchButton key="10">March</MarchButton>,
  <PixelButton key="11">Pixel</PixelButton>,
  <GlassyButton key="12">Glassy</GlassyButton>,
]

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden mt-12">

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 35, // slightly slower = more premium
          repeat: Infinity,
        }}
      >
        {[...buttons, ...buttons].map((button, index) => (
          <div
            key={index}
            className="bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center justify-center shadow-md"
          >
            <div className="scale-90">
              {button}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
