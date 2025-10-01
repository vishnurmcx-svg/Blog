import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Resources", path: "/resources" },
    { id: 4, text: "Contact Us", path: "/contact" },
    // { id: 5, text: "Contact Us" },
    // { id: 5, text: 'Sign Up' },
  ];

  return (
    <div className="bg-gray-800 flex justify-between  items-center h-18 max-w-full  px-10 text-white">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-[#00df9a]">MERN BLOG.</h1>

      <div className="rightArea flex items-center ">
        {/* Serach  */}
        <form action="" className="flex gap-1">
          <input
            name="query"
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className=" border-white border-1 hover:border-[#00df9a] outline-0 text-white bg-none p-1"
          />
          <Button variant="contained">
            <AiOutlineSearch size={20} />
          </Button>
        </form>

        {/* Dark/White Thmem */}
        <div className="">
          <Button className="w-10 h-8">
            <FaMoon className="fill-white" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <Link to={item.path}>
              <li
                key={item.id}
                className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
        <Link to="/sign-in" className="border-1 border-white">
          <Button>Sign In</Button>
        </Link>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
