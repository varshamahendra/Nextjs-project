import React from "react";
import Profile from "../../public/assets/image-daniel.jpg";
import Image from "next/image";
const Testimonials = () => {
  const testimonials = [
    {
      image: Profile,
      name: "Colton smith",
      subtitle: "Verified Buyer",
      desc: " We needed the smae printed design as the one we had ordered a week  prior.Not only did thery find thr original order, but e als  received it in time. Wxcellent!",
    },
    {
      image: Profile,
      name: "Colton smith",
      subtitle: "Verified Buyer",
      desc: " We needed the smae printed design as the one we had ordered a week  prior.Not only did thery find thr original order, but e als  received it in time. Wxcellent!",
    },
    {
      image: Profile,
      name: "Colton smith",
      subtitle: "Verified Buyer",
      desc: " We needed the smae printed design as the one we had ordered a week  prior.Not only did thery find thr original order, but e als  received it in time. Wxcellent!",
    },
  ];

  return (
    <div className="grid grid-rows-3 lg:grid-cols-3 gap-7 ">
      {testimonials.map((item, index) => (
        <div key={index}>
          <div
            className={`
      bg-purple-900 p-8 rounded-xl
      ${index === 1 ? "mt-6" : ""}
      ${index === 2 ? "mt-12" : ""}
    `}
          >
            <div className="flex flex-col gap-7">
              <div className="flex gap-5">
                <Image src={item.image} alt="image" className="rounded-full " />
                <div className="flex flex-col">
                  <h2 className="text-white font-medium text-[20px]">
                    {item.name}
                  </h2>
                  <h6 className="text-pink-300">{item.subtitle}</h6>
                </div>
              </div>
              <p className="text-white font-medium max-w-[300px]">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
