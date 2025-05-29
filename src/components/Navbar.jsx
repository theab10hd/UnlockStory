import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mainContent = document.getElementById("main-content");

    const handleClickOutside = (e) => {
      setTimeout(() => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
        if (mainContent) {
          mainContent.classList.remove("brightness-50", "pointer-events-none");
        }
      }, 100);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (mainContent) {
        mainContent.classList.add("brightness-30", "pointer-events-none");
      }
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      if (mainContent) {
        mainContent.classList.remove("brightness-30", "pointer-events-none");
      }
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="w-screen relative">
      <div className="fixed top-0 left-0 w-full h-16  flex items-center z-50 navbar border-b-1 border-white/30 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <img
              src="/logos/Unlock Story_White.png"
              alt="Brand Logo"
              className="h-18 w-18 object-contain"
            />
          </Link>

          <div
            className={`w-10 h-10 ${
              isOpen && "bg-[var(--dark)]"
            } flex items-center justify-center rounded-full  hover:bg-[var(--dark)] hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <i
              className={`fa-solid  text-white transition-all duration-300 ${
                isOpen ? "fa-xmark text-[var(--light)]" : "fa-bars"
              }  fa-lg`}
            ></i>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-16 right-0 h-dvh w-1/2 md:w-1/6 bg-[var(--green)] border-s-2 border-gray-200/50 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col  justify-between items-center pt-`}
      >
        <div className="flex flex-col font-medium text-center w-full">
          <Link
            to="/"
            className="w-full text-[var(--dark)] py-5 border-b-2 border-gray-200/50 hover:border-white hover:bg-[var(--dark-50)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="w-full text-[var(--dark)] py-5 border-b-2 border-gray-200/50 hover:border-white hover:bg-[var(--dark-50)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="w-full text-[var(--dark)] py-5 border-b-2 border-gray-200/50 hover:border-white hover:bg-[var(--dark-50)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="w-full absolute bottom-30">
          <a
            href=""
            target="_blank"
            className="text-[var(--dark)] font-medium flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-instagram"></i> unlockstory.in
          </a>
          <a
            href=""
            target="_blank"
            className="text-[var(--dark)] font-medium flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-facebook"></i> unlockstory
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
