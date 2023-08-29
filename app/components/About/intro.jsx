import React from "react";

const intro = () => {
  return (
    <>
      <div class="relative overflow-hidden before:absolute before:top-0 before:left-1/2  before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url()]">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* < />!-- Title --> */}
          <div class=" max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              We help
              <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent ml-2 mr-2">
                Developer Tools Companies
              </span>
              turn software developers into lifetime users.
            </h1>
          </div>
          {/* < />!-- End Title --> */}
        </div>
      </div>
    </>
  );
};

export default intro;
