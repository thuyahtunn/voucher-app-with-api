import React from "react";
import { Link, NavLink } from "react-router-dom";
import reactUseCookie from "react-use-cookie";

const Header = () => {
  const [userCookie] = reactUseCookie("user");

  return (
    <header className=" sticky top-0 border-b-2 border-gray-200">
      <nav className="bg-white  px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Voucher App
            </span>
          </Link>
          {userCookie ? (
            <div className="flex items-center lg:order-2">
              <Link
                to={"/dashboard"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="flex items-center lg:order-2">
              <Link
                to={"/login"}
                className="text-gray-800  hover:bg-gray-50 bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to={"/register"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get started
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 block py-2 pr-4 pl-3  rounded bg-blue-300  lg:bg-transparent  lg:p-0 font-medium"
                      : "text-gray-500 block py-2 pr-4 pl-3  rounded bg-blue-300  lg:bg-transparent  lg:p-0 font-medium"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 block py-2 pr-4 pl-3  rounded bg-blue-300  lg:bg-transparent  lg:p-0 font-medium"
                      : "text-gray-500 block py-2 pr-4 pl-3  rounded bg-blue-300  lg:bg-transparent  lg:p-0 font-medium"
                  }
                  aria-current="page"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 block py-2 pr-4 pl-3  rounded bg-blue-300  lg:bg-transparent  lg:p-0 font-medium"
                      : "text-gray-500 block py-2 pr-4 pl-3  rounded bg-blue-300  lg:bg-transparent  lg:p-0 font-medium"
                  }
                  aria-current="page"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
