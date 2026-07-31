import React from "react";

const Ratingcard = () => {
  const ratings = [
    {
      text: "Rated 5 Stars in Reviews",
      margin: "lg:mr-16",
    },
    {
      text: "Rated 5 Stars in Report Guru",
      margin: "lg:mx-8",
    },
    {
      text: "Rated 5 Stars in BestTech",
      margin: "lg:ml-16",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {ratings.map((item, index) => (
        <div key={index}>
          <div
            key={index}
            className={`bg-gray-100 p-4 rounded-lg ${item.margin}`}
          >
            <div className="flex justify-between flex-col lg:flex-row gap-4">
              <span>⭐⭐⭐⭐⭐</span>
              <h4>{item.text}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratingcard;
