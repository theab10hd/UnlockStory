import React from "react";

const Project = ({ title, description, image, link, client }) => {
  return (
    <div className="flex flex-col p-3 gap-4 md:gap-4 lg:flex-row bg-gradient-to-b to-[var(--dark)] from-[var(--dark-light)] justify-between border-1 border-gray-800/50 w-full h-full rounded-xl hover:shadow-xl hover:scale-101 transition-all duration-300">
      <div className="w-full lg:w-2/3 h-[10rem] md:h-[20rem] ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-xl aspect-[1/2]"
        />
      </div>
      <div className="flex flex-col justify-start gap-4 w-full h-full">
        <div className="flex w-full items-center gap-2 text-[var(--green)]">
          <h3 className="text-xl font-medium md:text-2xl">{title}</h3>
        </div>
        <p className="text-gray-400 text-md md:mt-2">{description}</p>
        <div className="flex">
          <p className="text-gray-400">{client}</p>
          <span className="text-gray-400 mx-2">|</span>
          <a
            href={link}
            target="_blank"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            View <i class="fa-solid fa-arrow-up-right-from-square "></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
