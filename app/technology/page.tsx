"use client";
import React, { useState } from "react";
import vehicleimage from "../../public/assets/technology/image-launch-vehicle-portrait.jpg";
import Image from "next/image";
const Technologypage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [1, 2, 3];

  return (
    <div className="flex flex-col md:gap-[50px] lg:gap-0 gap-[20px]">
      <div className="flex gap-5 items-center">
        <h3 className="text-gray-600 font-bold text-4xl"> 03</h3>
        <h4 className="text-white uppercase text-[20px] tracking-[4px] ">
          Space launch 101
        </h4>
      </div>
      <div className="flex justify-between flex-col-reverse lg:flex-row items-center md:gap-5 gap-[30px]">
        <div className="flex md:gap-25 gap-[30px] items-center">
          <div className="flex flex-col gap-[50px] ">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => setActiveIndex(index)}
                className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-lg font-['Bellefair'] transition-all duration-300 border cursor-pointer
        ${
          activeIndex === index
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white/25 hover:border-white"
        }`}
              >
                {step}
              </button>
            ))}
          </div>

          <div className="flex flex-col">
            <h5 className="text-[#D0D6F9] uppercase tracking-[2px]">
              The terminology...
            </h5>
            <h3 className="text-white uppercase md:text-[60px] text-[40px] font-['Barlow']">
              Lanuch vechicle
            </h3>
            <p className="max-w-110 text-[#D0D6F9] text-[18px] leading-8 font-['Barlow']">
              A launch vechicle or career rocket propelled vehicle used to carry
              a payload from Earth &apos:s surface to space, usally to Earth
              orbit or beyond.Our Web-c Carrier rocked is the most powerful in
              operation. Standing 150 metros tall, its wuite an awe-inspiring
              sihgt on the launch pad!
            </p>
          </div>
        </div>
        <div>
          <Image src={vehicleimage} alt="image" priority />
        </div>
      </div>
    </div>
  );
};
export default Technologypage;
