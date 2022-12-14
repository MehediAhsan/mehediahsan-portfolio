import React from "react";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div class="relative w-full">
      <nav class="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
        <div class="container m-auto px-2 md:px-12 lg:px-7">
          <div class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a
                href="/"
                aria-label="logo"
                class="flex space-x-2 items-center"
              >
                
                <span class="text-2xl font-bold text-teal-500">
                  Mehedi <span class="text-gray-700">Ahsan</span>
                </span>
              </a>

              <button
                aria-label="humburger"
                id="hamburger"
                class="relative w-10 h-10 -mr-2 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
              </button>
            </div>

            <div class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div class="text-gray-600 lg:pr-4">
                <ul class="space-y-6 tracking-wide font-medium text-base md:flex md:space-y-0">
                  <li>
                   <Link
                      to={'about'}
                      smooth 
                      duration={500}
                      class="block md:px-4 transition hover:text-teal-700 cursor-pointer"
                    >
                      <span>About Me</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'skills'}
                      smooth 
                      duration={500}
                      class="block md:px-4 transition hover:text-teal-700 cursor-pointer"
                    >
                      <span>Skills</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'projects'}
                      smooth 
                      duration={500}
                      class="block md:px-4 transition hover:text-teal-700 cursor-pointer"
                    >
                      <span>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'contact'}
                      smooth 
                      duration={500}
                      class="block md:px-4 transition hover:text-teal-700 cursor-pointer"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
