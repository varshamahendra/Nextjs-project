"use client";
import Image from "next/image";
import Worldimage from "../../public/assets/destination/image-mars.png";
import { useState } from "react";

const data = [
  {
    name: "Moon",
    description:
      "Don't forget to pack your hiking boots.You'll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. it's two and half times the size of Everest !",
    distance: "225 mil. km",
    Time: "9 Month",
  },
  {
    name: "Mars",
    description:
      "Don't forget to pack your hiking boots.You'll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. it's two and half times the size of Everest !",
    distance: "225 mil. km",
    Time: "9 Month",
  },
  {
    name: "Europa",
    description:
      "Don't forget to pack your hiking boots.You'll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. it's two and half times the size of Everest !",
    distance: "225 mil. km",
    Time: "9 Month",
  },
  {
    name: "Titan",
    description:
      "Don't forget to pack your hiking boots.You'll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. it's two and half times the size of Everest !",
    distance: "225 mil. km",
    Time: "9 Month",
  },
];
const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex gap-12.5 flex-col">
        <div className="flex gap-5 items-center">
          <h3 className="text-gray-600 font-bold text-4xl"> 01</h3>
          <h4 className="text-white uppercase text-[20px] tracking-[4px] ">
            Pick Your Destination
          </h4>
        </div>
        <div className="grid lg:grid-cols-2  justify-center items-center gap-5">
          <Image src={Worldimage} alt="image" priority />
          <div className="flex flex-col gap-[50px]">
            <ul className="flex gap-8">
              {data.map((item, index) => (
                <li
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  className={`font-['Bellefair'] tracking-[3px] cursor-pointer uppercase pb-2 border-b-2 transition-all duration-200 text-white text-[15px]
        ${
          activeIndex === index
            ? "border-b-gray-500 text-white"
            : "border-b-transparent hover:border-b-gray-500 opacity-[0.3]"
        }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="text-white flex flex-col lg:gap-[50px] md:gap-[30px] ">
              <h1 className="font-['Bellefair'] text-[100px] uppercase text-white leading-none">
                {data[activeIndex].name}
              </h1>
              <div className="max-w-[445px] flex flex-col lg:gap-[50px] md:gap-7">
                <p className="text-[#D0D6F9] text-[18px] leading-8 font-['Barlow']">
                  {data[activeIndex].description}
                </p>
                <div className="flex flex-col gap-3.5">
                  <div className="border-b border-b-gray-500"></div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-3.5">
                      <h4 className="text-[#D0D6F9] uppercase">
                        Avg. Distance
                      </h4>
                      <h5 className="text-[30px] uppercase font-['Barlow'] tracking-[2px]">
                        {data[activeIndex].distance}
                      </h5>
                    </div>
                    <div className="flex flex-col gap-3.5 ">
                      <h4 className="text-[#D0D6F9] uppercase">
                        Est. Travel Time
                      </h4>
                      <h5 className="text-[30px] uppercase font-['Barlow'] tracking-[2px]">
                        {data[activeIndex].Time}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
