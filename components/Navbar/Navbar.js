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
          <Image
            src="/SiteLogo/seg.png"
            alt="Flowbite Logo"
            width={70}
            height={100}
          
          />
         
        </a>

        {/* Buttons & Hamburger */}
        <div className="flex md:order-2 items-center space-x-3">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Contact Us
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 items-center justify-between`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 Semi-bold border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Industries
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Case Studies
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
