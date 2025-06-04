"use client";
import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "Home",
    "Products",
    "Services",
    "Portfolio",
    "Contact Us",
  ];

  return (
    <div className="w-full md:px-6">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span className="w-28 h-10">
              {/* Logo for Light Mode */}
              <Image
                src="/img/logo-white.png"
                width={200}
                height={100}
                alt="Logo Light"
                className="block dark:hidden"
              />
              {/* Logo for Dark Mode */}
                <Image
                src="/img/logo-dark.png"
                width={200}
                height={100}
                alt="Logo Dark"
                className="hidden dark:block"
              />
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="nav__item lg:flex ml-auto lg:ml-0 lg:order-2">
          {/* <ThemeChanger /> */}
        </div>

        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <div className="w-full">
                  {navigation.map((item, index) => (
                    <Link key={index} href={item === "Contact Us" ? "/contactus" : "/"} className={`w-full px-4 py-2 -ml-4 rounded-md focus:outline-none ${
                      item === "Contact Us"
                        ? "text-center text-white bg-[#00bcb7] hover:bg-[#038A87] mt-3"
                        : "text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800"
                    }`}>
                      {item}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center lg:ml-auto">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu === "Home" ? "/" : menu === "Contact Us" ? "/contactus" : `/${menu.toLowerCase().replace(/\s+/g, '')}`}
                  className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md focus:outline-none ${
                    menu === "Contact Us" 
                      ? "text-white bg-[#00bcb7] hover:bg-[#038A87] focus:bg-[#038A87]" 
                      : "text-gray-800 dark:text-gray-200 hover:text-[#038A87] focus:text-[#00bcb7] focus:bg-indigo-100 dark:focus:bg-[#038A87]"
                  }`}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}