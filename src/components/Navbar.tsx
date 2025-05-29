"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "Home",
    "Products",
    "Services",
    "Portfolio",
  ];

  return (
    <div className="w-full md:px-6">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              {/* Logo for Light Mode */}
              <Image
                src="/img/logo-white.png"
                width={60}
                height={60}
                alt="Logo Light"
                className="w-28 block dark:hidden"
              />
              {/* Logo for Dark Mode */}
              <Image
                src="/img/logo-dark.png"
                width={60}
                height={60}
                alt="Logo Dark"
                className="w-28 hidden dark:block"
              />
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/contactus" className="px-6 py-2 text-white bg-[#00bcb7] hover:bg-[#038A87] rounded-md md:ml-5">
              Contact Us
            </Link>
          </div>
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
                    <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      {item}
                    </Link>
                  ))}
                  <Link href="/contactus" className="w-full px-6 py-2 mt-3 text-center text-white bg-[#00bcb7] hover:bg-[#038A87] rounded-md lg:ml-5">
                    Contact Us
                  </Link>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu === "Home" ? "/" : `/${menu.toLowerCase().replace(/\s+/g, '')}`}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#038A87] focus:text-[#00bcb7] focus:bg-indigo-100 focus:outline-none dark:focus:bg-[#038A87]">
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