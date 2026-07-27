import React from "react";
import Profileimage from "../../public/assets/crew/image-anousheh-ansari.png";
import Image from "next/image";
const Crewpage = () => {
  return (
    <div className="flex flex-col gap-[50px] lg:gap-0">
      <div className="flex gap-5 items-center">
        <h3 className="text-gray-600 font-bold text-4xl"> 02</h3>
        <h4 className="text-white uppercase text-[20px] tracking-[4px] ">
          Meet Your crew
        </h4>
      </div>
      <div className="grid lg:grid-cols-2 justify-center items-center justify-items-center lg:justify-items-start">
        <div className="flex flex-col justify-center gap-7.5 ">
          <div className="flex flex-col">
            <h4 className="text-white uppercase text-[40px] font-['Barlow']">
              flight Engineer
            </h4>
            <h3 className="text-white uppercase text-[30px] lg:text-[60px] font-['Barlow']">
              ANOUSHEH ANSARI
            </h3>
          </div>
          <p className=" max-w-[430px] text-[#D0D6F9] text-[18px] leading-8 font-['Barlow']">
            Anousheh Ansari is an iranian American engineer and co-founder of
            prodea systems.Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first iranian in
            space
          </p>
        </div>
        <Image src={Profileimage} alt="image" />
      </div>
    </div>
  );
};

export default Crewpage;
