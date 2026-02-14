import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white fixed w-full z-50  h-16 md:h-20 ${isScrolled ? "shadow-lg" : ""}`}
    >
      <nav className="max-w-[1400px] mx-auto h-full flex justify-between items-center px-5 md:px-10 relative">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop Menu (ONLY DESKTOP) */}
        <ul className="hidden lg:flex items-center gap-x-10">
          {["Home", "About Us", "Process Us", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`font-semibold tracking-wider transition-colors ${
                  item === "Home"
                    ? "text-orange-500"
                    : "text-zinc-800 hover:text-orange-500"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-x-3 md:gap-x-5">
          {/* Search – desktop only */}
          <div className="hidden lg:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full md:text-xl">
              <IoSearch className="block leading-none text-lg" />
            </button>
          </div>

          <button
            aria-label="Wishlist"
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            <GoHeartFill />
          </button>
          <button
            aria-label="Cart"
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            <HiShoppingBag />
          </button>

          {/* Hamburger – mobile + tablet */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl lg:hidden"
            aria-label="Toggle Menu"
          >
            {showMenu ? <RiCloseLine /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <ul
          className={`lg:hidden absolute top-16 md:top-20 left-1/2 -translate-x-1/2 w-[90%] bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-8 flex flex-col items-center gap-y-8 transition-all duration-500 ${
            showMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          {["Home", "About Us", "Process Us", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setShowMenu(false)}
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile Search */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
            <input
              type="text"
              placeholder="Search..."
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
