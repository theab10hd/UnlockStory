import React from "react";

const Project = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col p-3 gap-4 md:gap-4 lg:flex-row justify-between bg-gradient-to-b from-white to-gray-300 border-1 border-white w-full h-full rounded-xl hover:shadow-lg hover:scale-101 transition-all duration-300">
      <img
        src={image}
        alt=""
        className="w-full md:w-1/3 h-[15rem] lg:h-[20rem] object-cover rounded-xl"
      />
      <div>
        <div className="flex w-full items-center gap-2 text-[var(--dark)]">
          <h3 className="text-xl font-bold md:text-3xl">{title}</h3>
          <a href={link} target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square md:text-xl"></i>
          </a>
        </div>
        <p className="text-gray-700 text-md md:mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Project;
