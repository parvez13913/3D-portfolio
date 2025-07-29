"use client";

import { myProjects } from "@/constans";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[0];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex - 1;
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
                <div key={index}>
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
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
