import React from "react";

const CardsDetail = ({ image, cardStyle }) => {
  const cardClasses = `bg-gray-200 p-8 ${cardStyle}`;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={cardClasses}>
        <div className="w-[12rem] h-[16rem] bg-slate-500">
          <img src={image} alt="" className="object-contain w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
