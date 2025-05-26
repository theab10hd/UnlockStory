import React from "react";

const ThoughtProcessBlock = ({ title, description, margin }) => {
  return (
    <div
      className={`flex ${margin} justify-start  sm:w-full md:w-[25rem] lg:w-[30rem] hover:scale-102 hover:shadow-lg shadow-green-400/50 transition-all ease-in-out duration-300 md:items-center p-5 rounded-xl bg-gradient-to-b from-[var(--green-50)] to-[var(--dark)] text-white gap-4 border-1 border-[var(--green)]`}
    >
      <h3 className="flex justify-center items-center backdrop-blur-3xl shadow-md h- p-3 rounded-xl border-1 border-green-400/10 text-7xl text-[var(--green)] font-bold">
        <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
      </h3>
      <div className="text-gradient text-xs sm:text-sm md:text-md">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ThoughtProcessBlock;
