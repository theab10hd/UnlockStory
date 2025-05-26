import React from "react";

const ServiceBlock = ({ title, description, image }) => {
  return (
    <div className="p-5 flex flex-col justify-start gap-2 border-b-2 md:border-none border-gray-200/50 text-gradient">
      <img src={image} alt="" className="w-15 h-15 object-contain" />

      <h1 className="text-xl font-bold ">{title}</h1>
      <p className=" text-md">{description}</p>
    </div>
  );
};

export default ServiceBlock;
