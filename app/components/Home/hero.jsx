import React from "react";
import Image from "next/image";
import Link from "next/link";

import Visual from "../../../public/agencyvisual.jpg";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const hero = () => {
  return (
    <>
      <div class="relative overflow-hidden before:absolute before:top-0 before:left-1/2  before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url()]">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* < />!-- Title --> */}
          <div class=" max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Creating Tech Content For
              <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent ml-2">
                Developer Tools Companies
              </span>
            </h1>
          </div>
          {/* < />!-- End Title --> */}

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              We are tech writers creating blog posts, tutorials and how-to
              guides for developer tools companies.
            </p>
          </div>

          {/* < />!-- Buttons --> */}
          <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <Link href="/contact" legacyBehavior>
              <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800">
                Work With Us
                <svg
                  class="w-3 h-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </Link>
          </div>
          {/* < />!-- End Buttons --> */}
        </div>
      </div>
    </>
  );
};

export default hero;
