"use client";

import CanvasLoader from "@/components/CanvasLoader";
import { DemoComputer } from "@/components/DemoComputer";
import { myProjects } from "@/constans";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useState } from "react";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction: "previous" | "next") => {
    const projectCount = myProjects.length;

    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="sm:px-10 px-5 my-20">
      <p className="text-xl font-semibold mb-2 text-white font-serif">
        My Works
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 w-full gap-5">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0">
            <Image
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-[96px] object-cover rounded-xl"
              height={400}
              width={400}
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <Image
              src={currentProject.logo}
              alt="logo"
              className="w-7 h-7 shadow-sm"
              height={10}
              width={10}
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white font-semibold text-2xl font-serif animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText font-serif">{currentProject.desc}</p>
            <p className="animatedText font-serif">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className=" w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                >
                  <img src={tag?.path} alt={tag?.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              className="flex items-center gap-2 cursor-pointer text-white-600"
              target="_blank"
            >
              <p className="font-serif">Check Live site</p>
              <Image
                src="/assets/arrow-up.png"
                alt="arrow"
                className="w-4 h-4"
                height={4}
                width={4}
              />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("previous")}
            >
              <Image
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="h-4 w-4"
                height={4}
                width={4}
              />
            </button>
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("next")}
            >
              <Image
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="h-4 w-4"
                height={4}
                width={4}
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <pointLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
