import React from "react";
import chart from "../../public/assets/illustration-schedule-posts.webp";
import twitter from "../../public/assets/illustration-multiple-platforms.webp";
import calendar from "../../public/assets/illustration-consistent-schedule.webp";
import content from "../../public/assets/illustration-ai-content.webp";
import growth from "../../public/assets/illustration-audience-growth.webp";
import followers from "../../public/assets/illustration-grow-followers.webp";
import Image from "next/image";

const Bento = () => {
  return (
    <div className="m-auto max-w-300 md:mt-10 m-2.5">
      <div className="grid md:grid-cols-[300px_1fr_300px_1fr] grid-cols-1 gap-5  lg:auto-rows-[90px] ">
        <div className="bg-amber-100 md:row-span-4  col-span-2 md:col-span-1 grid justify-center items-center rounded-xl p-8 order-7 md:order-1">
          <div className="flex flex-col">
            <h2 className="text-[40px] font-medium leading-[0.95] tracking-[-2px]">
              Create and
              <br />
              schedule
              <br />
              content
              <br />
              <span className="italic text-purple-500">quicker.</span>
            </h2>
            <button className="bg-yellow-200">Create Post</button>
          </div>
        </div>
        <div className="bg-purple-500 col-span-2 md:row-span-3 grid justify-center items-center rounded-xl p-8 order-1 md:order-2">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[40px] text-white font-medium">
              Social media 10x
              <br />
              Faster with AI
            </h2>
            <span className="text-yellow-400 text-xl text-center">
              ⭐⭐⭐⭐⭐
            </span>
            <span className="text-white text-[20px] text-center">
              Over 4,000 5 -star review
            </span>
          </div>
        </div>
        <div className="bg-purple-200 md:row-span-5 col-span-2 md:col-span-1 grid justify-center items-center rounded-xl p-8 order-4 md:order-3">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-[40px]  leading-[0.95] tracking-[-2px] text-center">
              Schedule to <br />
              social media.
            </h2>
            <div className="ml-[30px]">
              <Image src={chart} alt="image" loading="lazy" />
            </div>
            <span className="w-[155px] ">
              Optimize post timing to publish content at the perfect time for
              your audience
            </span>
          </div>
        </div>
        <div className="bg-white  md:row-span-2 p-8 rounded-xl col-span-2 md:col-span-1 order-2 md:order-4">
          <div className="flex flex-col gap-4">
            <Image src={twitter} alt="image" loading="lazy" />
            <h2 className="text-[25px] leading-[0.95] tracking-[-2px]">
              Manage <br />
              multiple
              <br /> accounts and <br />
              platforms
            </h2>
          </div>
        </div>
        <div className="bg-yellow-500 md:row-span-2 p-8 overflow-hidden rounded-xl col-span-2 md:col-span-1 order-3 md:order-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-[25px] leading-[0.95] tracking-[-2px]">
              Maintain a<br /> consistent <br /> posting <br /> schedule.
            </h2>
            <Image src={calendar} alt="image" loading="lazy" />
          </div>
        </div>
        <div className="bg-yellow-500  md:row-span-4 grid p-8 col-span-2 md:col-span-1 order-8 md:order-6">
          <div className="flex flex-col justify-between">
            <h2 className="text-[30px] leading-[0.95] tracking-[-2px]">
              Write your <br />
              content <br /> using AI.
            </h2>
            <Image src={content} alt="image" loading="lazy" />
          </div>
        </div>
        <div className="bg-white  md:row-span-3  rounded-xl p-8 col-span-2 md:col-span-1 order-6 md:order-7">
          <div className="flex flex-col gap-9">
            <h2 className="text-6xl font-medium">&gt; 56%</h2>{" "}
            <span className="text-[15px]"> faster audience growth</span>
            <Image src={growth} alt="image" loading="lazy" />
          </div>
        </div>
        <div className="bg-purple-500 md:row-span-3 p-8 col-span-2 md:col-span-2 order-5 md:order-8">
          <div className="flex flex-col md:flex-row">
            <Image src={followers} alt="image" className="w-50 h-50" />
            <h2 className="text-white text-[40px] leading-[0.95]">
              Grow folowers <br /> with non-stop <br />
              content.
            </h2>
          </div>
        </div>
      </div>
    </div>

    // <div className="m-auto max-w-300 mt-10">
    //   <div className="grid grid-cols-4 grid-rows-3 gap-5">
    //     <div className="bg-red-200 row-span-2">1</div>

    //     <div className="bg-purple-500 col-span-2">2</div>

    //     <div className="bg-purple-200 row-span-2">3</div>

    //     <div className="bg-yellow-200 row-span-2">4</div>

    //     <div className="bg-white">5</div>

    //     <div className="bg-orange-300">6</div>

    //     <div className="bg-white">7</div>

    //     <div className="bg-purple-500 col-span-2">8</div>
    //   </div>
    // </div>
  );
};

export default Bento;
