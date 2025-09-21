"use client";
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-bg-primary fixed w-full z-20 top-0  ">
      <div className="max-w-[1800px] flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
       <div className="w-[100px] aspect-[7/10] relative">
  <Image
    src="/SiteLogo/seg.png"
    alt="Flowbite Logo"
    fill
    className="object-contain"
  />
</div>


        </a>

        {/* Buttons & Hamburger */}
        <div className="flex md:order-2 items-center space-x-3">
          <button className="border border-white bg-transparent text-white font-barlow font-semibold px-6 md:py-1.7 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition">
            Contact Us
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              {isOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l15 12M16 1L1 13"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1 items-center justify-between`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 Semi-bold border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-blue-500"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-blue-500"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 hover:text-blue-500"
              >
                Insights
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
