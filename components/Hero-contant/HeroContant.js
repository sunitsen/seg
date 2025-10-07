import React from "react";

const HeroContant = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full px-4 py-8 space-y-6">
      <div className="max-w-screen-xl mx-auto text-center md:text-start hero-content">
        <h1 className="hero-heading font-bold leading-snug">
          Where bold brands <br />
          break through <br />
          the noise
        </h1>

        <p className="text-lg text-gray-300 max-w-xl text-center md:text-start hero-subtext">
          From startups to enterprise, we help brands break barriers with
          tailored ad strategies, striking visuals, and data-driven results.
        </p>

        <button
          className="
            bg-[#656565] text-gray-100 font-semibold
            px-6 py-2                      /* smaller padding on mobile */
            sm:bg-gray-300 sm:text-gray-900 /* revert color on larger screens */
            sm:px-8 sm:py-2.5
            md:px-10 md:py-2.5
            hover:bg-gray-400
            transition
            hero-btn
            cursor-pointer
            rounded-lg
            text-base sm:text-lg
            mt-4
          "
        >
          Connect With Us
        </button>
      </div>
    </div>
  );
};

export default HeroContant;
