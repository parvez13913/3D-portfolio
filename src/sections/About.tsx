"use client";

import Button from "@/components/Button";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("parvezz13913@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* About Me */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full object-contain"
              height={200}
              width={200}
              priority
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-serif">
                Hi, I&apos;m Parvez Rahman
              </p>
              <p className="text-[#afb0b6] text-base font-serif">
                MERN stack developer with 3 years of experience building
                full-stack web applications. I focus on creating clean,
                scalable, and high-performance solutions — from front-end to
                back-end.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full object-contain"
              height={200}
              width={200}
              priority
            />
            <p className="text-xl font-semibold mb-2 text-white font-serif">
              Tech Stack
            </p>
            <p className="text-[#afb0b6] text-base font-serif">
              I specialize in JavaScript/TypeScript with a focus on the React
              and Next.js ecosystem.
            </p>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full h-[326px] flex justify-center items-center">
              <Globe
                width={300}
                height={300}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showGraticules
                showAtmosphere
                labelsData={[
                  {
                    lat: 23.6840828,
                    lng: 89.2419658,
                    text: "I'm here!!",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-serif">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="text-[#afb0b6] text-base font-serif">
                I&apos;m based in Jhenaidah, Bangladesh, and open to remote work
                worldwide.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10 bg-black/90"
              />
            </div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src="/assets/grid3.png"
              alt="grid-3"
              height={400}
              width={400}
              className="w-full sm:h-[266px] h-fit object-contain"
              priority
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-serif">
                My Passion for Coding
              </p>
              <p className="text-[#afb0b6] text-base font-serif">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession — it&apos;s my
                passion. I enjoy exploring new technologies and enhancing my
                skills.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Copy */}

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 justify-center">
            <Image
              src="/assets/grid4.png"
              alt="grid-4"
              height={200}
              width={200}
              className="w-full object-cover sm:object-top sm:h-[276px] md:h-[126px] h-fit"
              priority
            />
            <div className="space-y-2 text-center">
              <p className="text-[#afb0b6] text-base font-serif">Contact me</p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}
              >
                <Image
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy icon"
                  height={20}
                  width={20}
                />
                <p className="lg:text-xl md:text-md font-medium text-white font-serif">
                  parvezz13913@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
