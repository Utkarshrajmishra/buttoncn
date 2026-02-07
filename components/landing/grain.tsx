const Grain=()=>{
    return(
            <div className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay opacity-[1]">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="1"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
    )
}

export default Grain;