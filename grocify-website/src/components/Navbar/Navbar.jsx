import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="max-w-[1400px] mx-auto h-[12vh] md:h-[14vh] flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-15  ">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors duration-300"
            >
              Process Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-3 md:gap-x-5">
          {/* Input Field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="search"
              id="search-desktop"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />

            <button className="bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          <a href="#" aria-label="Wishlist" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="#" aria-label="Cart" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          {/* Hamburge */}
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <RiCloseLine /> : <HiOutlineMenu />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center md:hidden gap-x-15 absolute top-[14vh] -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? "left-1/2" : ""}`}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors duration-300"
            >
              Process Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="search"
              id="search-mobile"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />

            <button className="bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
