import React from "react";
import Ratingcard from "./Ratingcard";
import Terminols from "./Terminols";
import Testimonials from "./Terminols";

const page = () => {
  return (
    <div className="m-auto max-w-[1400px] md:mt-10">
      <div className="grid gap-25  p-5">
        <div className="grid lg:grid-cols-2 gap-[100px] ">
          <div className="flex flex-col gap-6">
            <h4 className="text-amber-900 font-bold text-[50px] max-w-[350px] leading-[50px]">
              10,000+ of our users love our products.
            </h4>
            <p className="text-amber-900 max-w-[420px]">
              We only provide great products combined with excellent customer
              service.See what our satisfied customers are saying about our
              services
            </p>
          </div>
          <Ratingcard />
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
