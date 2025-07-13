import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-serif">
          Hi i&apos;am Parvez Rahman <span className="wave-hand">👋</span>
        </p>
        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-serif font-black !leading-normal;">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
