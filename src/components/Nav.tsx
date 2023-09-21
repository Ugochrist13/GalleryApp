import React, { useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="w-full relative p-2 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo and app name */}
        <a
          href="/"
          className="flex items-center justify-start gap-x-1 text-bg text-md font-semibold"
        >
          <img className="w-8" src={logo} alt="logo" />
          <p className="text-lg hover:text-hover">Gent Gallery</p>
        </a>
      </div>

      <div className="flex items-center">
        {/* Sign-in link */}
        <a href="#" className="text-bg hover:text-hover mr-4">
          Sign in
        </a>
        <div className="block">
          {/* Hamburger menu icon */}
          <div className="hamburger-menu">
            <IoMdMenu className="text-2xl text-white bg-pink-600 rounded-full p-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
