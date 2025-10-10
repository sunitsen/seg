"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll to toggle sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        isSticky ? "bg-black shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-fluid mx-auto px-3 sm:px-10">
        <div className="flex flex-wrap items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="relative w-[45px] h-[45px] md:w-[60px] md:h-[60px]">
              <Image
                src="/SiteLogo/seg.png"
                alt="Site Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Buttons & Hamburger */}
          <div className="flex md:order-2 items-center">

            {/* Contact Us Button */}
            <button
              onClick={() => (window.location.href = "#")}
              className={`contact-us-btn border font-bold font-sans rounded-[14px] cursor-pointer md:pb-1 pb-0 px-6 md:px-8 transition
                ${isSticky ? "border-white text-white" : "border-white text-white md:bg-white md:text-black hover:bg-white hover:text-black"}
              `}
            >
              Contact Us
            </button>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center w-10 h-10 justify-center text-sm text-white md:hidden focus:outline-none ml-3"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  // X icon
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 4L20 20M20 4L4 20"
                  />
                ) : (
                  // Hamburger
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M3 6h18M3 14h18"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1 items-center justify-between transition-all duration-500`}
          >
            <ul className="flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:border-0 mt-5">
              {[
                "Home",
                "About",
                "Services",
                "Industries",
                "Case Studies",
                "Insights",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 font-sans font-bold text-[16px] md:text-[20px] hover:text-gray-300 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
