"use client";
import Button from "@/components/Button";
import CanvasLoader from "@/components/CanvasLoader";
import Cube from "@/components/Cube";
import HackerRoom from "@/components/HackerRom";
import HeroCamera from "@/components/HeroCamera";
import ReactLogo from "@/components/ReactLogo";
import Rings from "@/components/Rings";
import Target from "@/components/Target";
import { calculateSizes } from "@/constans";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 440, maxWidth: 1024 });
  const size = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="w-full mx-auto flex flex-col sm:mt-36 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-serif">
          Hi i&apos;am Parvez Rahman <span className="wave-hand">👋</span>
        </p>
        <p className="text-center xl:text-3xl md:text-5xl sm:text-4xl text-3xl font-serif font-black !leading-normal;">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0 mt-4">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={size.deskScale}
                position={size.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={size.targetPosition} />
              <ReactLogo position={size.reactLogoPosition} />
              <Cube position={size.cubePosition} />
              <Rings position={size.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-10 sm:px-10 px-5">
        <Link href="/contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 bg-black/90"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
