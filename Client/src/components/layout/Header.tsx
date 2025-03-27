"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/LOGO.png"; // Ensure the image is inside the "public" folder
import { Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-secondary w-full sticky top-0 left-0 z-50    ">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className={`md:mx-8 mx-4 w-full md:text-start text-center`}>
          <Image
            src={LOGO}
            alt="Logo"
            width={96} // Adjust size as needed
            height={96}
            className="h-auto w-12 md:w-24 md:mx-0"
            loading="lazy"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        {!isOpen && (
          <button
            className="md:hidden flex flex-col w-8 z-50 mx-8"
            onClick={toggleMenu}
          >
            <div className="w-8 h-1 bg-primary1 rounded mb-[7px]"></div>
            <div className="w-5 h-1 bg-primary1 rounded mb-[7px]"></div>
            <div className="w-8 h-1 bg-primary1 rounded"></div>
          </button>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 mx-12 md:items-center">
          <Link
            href="/"
            prefetch={true}
            className="text-gray-600 text-[15px] font-[500]"
          >
            Home
          </Link>
          <Link
            href="/about-jay-jinendra-health-care"
            prefetch={true}
            className="text-gray-600 text-[15px] font-[500]"
          >
            About
          </Link>
          <Link
            href="/our-health-care-services"
            prefetch={true}
            className="text-gray-600 text-[15px] font-[500]"
          >
            Services
          </Link>
          <Link
            href="/contact-jay-jinendra-health-care"
            prefetch={true}
            className="text-secondary1 text-[15px] font-[500]"
          >
            Contact
          </Link>
          {/* <button className="hidden md:flex w-36 items-center justify-center bg-primary1 text-white px-4 py-3 rounded-md">
            Book Now
          </button> */}
          {/* <li className="register-btn"> */}
          <Link
            href={"/book-caregiver"}
            className=" rounded-lg btn hover:cursor-pointer   hidden md:flex items-center  justify-center w-36"
          >
            <Phone className="w-6 h-6 mr-2" />
            <span className="flex">Book Now</span>
          </Link>
          {/* </li> */}
        </nav>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary1 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="text-center py-6 border-b border-white">
          <Image
            src={LOGO}
            alt="Logo"
            width={96}
            height={96}
            className="h-auto w-16 md:w-24 mx-auto"
            loading="lazy"
          />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-5 text-white text-2xl"
          onClick={toggleMenu}
        >
          &times;
        </button>

        {/* Mobile Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-3">
            <li className="px-6 border-b pb-4">
              <Link
                href="/"
                prefetch={true}
                className="text-white text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="px-6 border-b pb-4">
              <Link
                href="/about-jay-jinendra-health-care"
                prefetch={true}
                className="text-white text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="px-6 border-b pb-4">
              <Link
                href="/our-health-care-services"
                prefetch={true}
                className="text-white text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li className="px-6 border-b pb-4">
              <Link
                href="/contact-jay-jinendra-health-care"
                prefetch={true}
                className="text-white text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li className="px-6 border-b pb-4">
              <Link
                href="/book-caregiver"
                prefetch={true}
                className="text-white text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Book Caregiver
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
