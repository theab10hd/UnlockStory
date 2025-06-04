// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[var(--dark)] text-white border-t border-white/20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 translate-x-1/3 z-0 ">
          <h1
            style={{ WebkitTextStroke: ".5px var(--green-50)" }}
            className="text-7xl md:text-9xl text-transparent tracking-tighter"
          >
            #Unlock
            <br />
            Story
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <img
              src="/logos/Unlock Story_White.png"
              alt="Brand Logo"
              className="h-12 object-contain"
            />
            <p className="text-sm text-white/70 max-w-xs">
              Drone Shoots, Video Production, Graphic Design, Social Media
              Management, All Under One Roof.
            </p>
          </div>

          <div className="flex flex-col md:mx-auto gap-2">
            <h3 className="text-lg font-semibold mb-2 text-[var(--light)]">
              Quick Links
            </h3>
            <Link
              to="/"
              className="hover:text-[var(--green)] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[var(--green)] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[var(--green)] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <h3 className="text-lg font-semibold mb-2 text-[var(--light)]">
              Follow Us
            </h3>
            <a
              href="https://instagram.com/unlockstory.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--green)] transition-colors"
            >
              <i className="fa-brands fa-instagram"></i> unlockstory.in
            </a>
            <a
              href="https://facebook.com/unlockstory"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--green)] transition-colors"
            >
              <i className="fa-brands fa-facebook"></i> unlockstory
            </a>
          </div>
        </div>
      </footer>
      <div className="border-t bg-gray-950 border-white/10 mt-6 py-4 text-center text-sm text-white/50 relative z-10">
        © {new Date().getFullYear()} Unlock Story. All rights reserved |
        Designed and Developed by{" "}
        <a
          href="https://www.instagram.com/itsabhijithhere/"
          target="_blank"
          className="hover:text-white"
        >
          Abhijith Gaganan
        </a>
      </div>
    </>
  );
};

export default Footer;
