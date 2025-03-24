import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "@/assets/LOGO.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-secondary  w-full fixed top-0 left-0 z-50 ">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between ">
        {/* Logo Section (Always Visible, Centered when Sidebar is Open) */}
        <div
          className={` md:mx-8 mx-4 w-full md:text-start text-center  ${
            isOpen ? "text-white" : "text-gray-800"
          }`}
        >
          {/* <h1 className="text-2xl font-bold">My Website</h1> */}
          <img
            src={LOGO}
            alt="Logo"
            className="h-auto w-12 md:w-24  md:mx-0 "
            loading="lazy"
          />
        </div>
        {/* Hamburger Menu (Hidden when Sidebar is Open) */}
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

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-6 mx-8">
          <NavLink to="/" className="text-gray-600  text-[15px] font-[500]">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-600  text-[15px] font-[500]"
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className="text-gray-600  text-[15px] font-[500]"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-600  text-[15px] font-[500]"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Sidebar Menu (Visible only on Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary1 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden `}
      >
        {/* Sidebar Header with Website Name */}
        <div className="text-center py-6 border-b border-white">
          {/* <h1 className="text-2xl font-bold">My Website</h1> */}
          <img
            src={LOGO}
            alt="Logo"
            className="h-auto w-16 md:w-24 mx-auto  md:mx-0 "
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

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className=" space-y-3 ">
            <li className="px-6 border-b pb-4  ">
              <NavLink
                to="/"
                className="text-white  text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="px-6 border-b pb-4  ">
              <NavLink
                to="/about"
                className="text-white  text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="px-6 border-b pb-4">
              <NavLink
                to="/service"
                className="text-white  text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="px-6 border-b pb-4 ">
              <NavLink
                to="/contact"
                className="text-white  text-[15px] font-[500]"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay Background (Visible only when the menu is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
