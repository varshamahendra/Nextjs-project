const Homepage = () => {
  return (
    <div className="flex  items-center flex-col lg:flex-row  w-full min-h-screen">
      <div className="flex flex-col lg:gap-[50px] md:gap-5 flex-1 justify-center">
        <div className="flex flex-col md:items-center lg:items-start">
          <h4 className="font-['Barlow_Condensed'] lg:text-[28px] md:text-[20px] tracking-[4.75px] md:tracking-[2px] uppercase text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO
          </h4>

          <h1 className="font-['Bellefair'] md:text-[160px] text-[120px] leading-none uppercase text-white">
            SPACE
          </h1>
        </div>
        <p className="font-['Barlow'] text-[18px] leading-8 text-[#D0D6F9] md:max-w-[450px] max-w-[390px] md:text-center lg:text-start text-center">
          Let&apos;s face it: if you want to go to the space,you might as well
          genuinely go to outer space and not.hover kind on the edge of it. Well
          sit back, and relax because we&apos;ll give you a truly out of this
          world experience!
        </p>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <div className="bg-white  w-50 h-50 rounded-full flex justify-center items-center">
          {" "}
          Explore
        </div>
      </div>
    </div>
  );
};

export default Homepage;
