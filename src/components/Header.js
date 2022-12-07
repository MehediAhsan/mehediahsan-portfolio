import React from "react";

const Header = () => {
  return (
    <div className="relative w-full">
      <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a
                href="https://tailus.io/blocks/hero-section"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                
                <span className="text-2xl font-bold text-teal-900">
                  Mehedi <span className="text-gray-700">Ahsan</span>
                </span>
              </a>

              <button
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
              </button>
            </div>

            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="text-gray-600 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base md:flex md:space-y-0">
                  <li>
                    <a
                      href="/"
                      className="block md:px-4 transition hover:text-yellow-700"
                    >
                      <span>About Me</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block md:px-4 transition hover:text-yellow-700"
                    >
                      <span>Skills</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block md:px-4 transition hover:text-yellow-700"
                    >
                      <span>Projects</span>
                    </a>
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
