import Image from "next/image";
import { Pattern } from "@/components/Icons";
import Profile from "../../public/assets/image-daniel.jpg";
import profiletwo from "../../public/assets/image-jonathan.jpg";
const page = () => {
  return (
    <div className="m-auto max-w-300 md:mt-10 m-2.5">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 lg:auto-rows-[120px]">
        <div className="bg-purple-800 lg:col-span-2 col-span-1 lg:row-span-3 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col gap-8">
            <div className="flex  justify-between items-center">
              <div className="flex gap-4">
                <Image
                  src={Profile}
                  alt="image"
                  loading="lazy"
                  className="rounded-full"
                />
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-white">Danial cliffort</h4>
                  <span className="text-white">Verified Graduate</span>
                </div>
              </div>
              <Pattern />
            </div>
            <p className="text-white font-medium text-[20px]">
              I received a job odder mid-course,and the subjects, i learned were
              current, if not more so, in the company i joined.I honestly feel i
              got every penny &apos:s worth
            </p>
            <p className="text-white text-[15px]">
              {" "}
              i was an emt for many years before i joined the bootcamp. i've
              been looking to make a transistion and have heard some people who
              had an amaxing experience here.
            </p>
          </div>
        </div>
        <div className="bg-gray-700 rounded-xl lg:row-span-3 row-span-1 col-span-1 p-8 shadow-lg">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={profiletwo}
                alt="image"
                loading="lazy"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2.5">
                <h4 className="text-white">Jonathan Walters</h4>
                <p className="text-white">Verfied Graduate</p>
              </div>
            </div>
            <p className="text-white font-medium">
              The team was very supportive and kept me motivated
            </p>
            <span className="text-white">
              I started as a total newbie with virtually no coding skills. i now
              work as a mobile engineer for a big company. This was one of the
              best investments I've made in myself
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl lg:row-span-6 p-8 shadow-lg">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={profiletwo}
                alt="image"
                loading="lazy"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2.5">
                <h4>Jonathan Walters</h4>
                <p>Verfied Graduate</p>
              </div>
            </div>
            <p className="text-black font-medium">
              The team was very supportive and kept me motivated
            </p>
            <span className="text-black">
              I started as a total newbie with virtually no coding skills. i now
              work as a mobile engineer for a big company. This was one of the
              best investments I've made in myself
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl lg:row-span-3 p-8 shadow-lg">
          {" "}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={profiletwo}
                alt="image"
                loading="lazy"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2.5">
                <h4>Jonathan Walters</h4>
                <p>Verfied Graduate</p>
              </div>
            </div>
            <p className="text-black font-medium">
              The team was very supportive and kept me motivated
            </p>
            <span className="text-black">
              I started as a total newbie with virtually no coding skills. i now
              work as a mobile engineer for a big company. This was one of the
              best investments I've made in myself
            </span>
          </div>
        </div>
        <div className="bg-gray-800 lg:col-span-2 lg:row-span-3 p-8 shadow-lg">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={profiletwo}
                alt="image"
                loading="lazy"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2.5">
                <h4 className="text-white">Jonathan Walters</h4>
                <p className="text-white">Verfied Graduate</p>
              </div>
            </div>
            <p className="text-white font-medium">
              The team was very supportive and kept me motivated
            </p>
            <span className="text-white">
              I started as a total newbie with virtually no coding skills. i now
              work as a mobile engineer for a big company. This was one of the
              best investments I've made in myself
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
