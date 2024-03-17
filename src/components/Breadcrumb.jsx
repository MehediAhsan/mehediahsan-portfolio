import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaHome } from "react-icons/fa";

const Breadcrumb = ({ main, sub }) => {
  return (
    <div
        class="flex text-gray-700 p-5 bg-gray-900"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link
              to="/"
              class="text-sm inline-flex items-center text-gray-300 hover:text-white"
            >
              <FaHome className="mr-2 text-lg" />
              Home
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <FaAngleRight className="text-xl text-gray-300" />
              <Link
                to={`/${main}`}
                class="ml-1 md:ml-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                {main}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <FaAngleRight className="text-xl text-gray-300" />
              <span class="ml-1 md:ml-2 text-sm font-medium text-gray-400">
                {sub}
              </span>
            </div>
          </li>
        </ol>
      </div>
  );
};

export default Breadcrumb;
