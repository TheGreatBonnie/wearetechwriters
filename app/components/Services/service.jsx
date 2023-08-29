import React from "react";

const service = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <div class="relative">
        <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-2xl mx-auto text-center mb-10">
            <h2 class="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">
              Our Services
            </h2>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
            {/* <!-- Card --> */}
            <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
              <span class="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                Technical Content
              </span>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Blog Posts
                  </span>
                </li>

                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Tutorials
                  </span>
                </li>

                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    How-to Guides
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700"
                href="#">
                Get started
              </a>
            </div>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
              <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                Content Distribution
              </span>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Social Media Posts
                  </span>
                </li>

                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Social Media Promotion
                  </span>
                </li>

                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Developer Blogging Platforms Cross-Posting
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700"
                href="#">
                Get started
              </a>
            </div>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
              <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
                SEO + Content Ideation
              </span>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    SEO Keyword Research
                  </span>
                </li>

                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Topic Ideas
                  </span>
                </li>

                <li class="flex space-x-2">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-violet-900"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-800 dark:text-gray-400">
                    Topic Clusters
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700"
                href="#">
                Get started
              </a>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
};

export default service;
