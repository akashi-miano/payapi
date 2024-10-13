import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav role="navigation" className="pt-[2.813rem] pb-[0.875.rem] main-nav">
      <div className="container flex justify-between items-center">
        <div className="wrapper flex items-center gap-[3rem] lg:gap-[4.25rem] min-h-[44.8px]">
          <div className="logo-wrapper flex items-center gap-4">
            <Link
              to="/"
              className="text-xl font-thin min-h-[38px] text-[#36536B] flex items-center gap-4"
            >
              <img src={logo} className="w-[30px] h-[30px]" alt="logo" />
              <p>
                <span className="specialLogo">pay</span>api
              </p>
            </Link>
          </div>
          <ul className="md:flex items-center gap-[3.125rem] min-h-[38px] hidden">
            <li className="flex items-center">
              <Link to="/pricing" className="link">
                Pricing
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/contacts" className="link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-menu">
            <ul
              className={
                nav
                  ? "fixed right-0 bottom-0 bg-[#1B262F] w-[80%] h-full z-[999] flex flex-col justify-center items-center flow-content--m translate-x-0 duration-300"
                  : "fixed right-0 bottom-0 bg-[#1B262F] w-[80%] h-full z-[999] flex flex-col justify-center items-center flow-content--m translate-x-[100%] duration-300"
              }
            >
              <li>
                <Link to="/pricing" className="link text-4xl text-[#FBFCFE]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="link text-4xl text-[#FBFCFE]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="link text-4xl text-[#FBFCFE]">
                  Contact
                </Link>
              </li>
              <li>
                <a href="" className="main-btn">
                  Schedule a Demo
                </a>
              </li>
              <li className="absolute right-[10%] top-[3%] z-[1000]">
                <IoClose
                  className="text-white  text-4xl"
                  onClick={() => setNav(!nav)}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-wrapper">
          <a href="" className="main-btn md:!block !hidden">
            Schedule a Demo
          </a>
          <FaBars
            className="md:hidden text-[#36536B] text-xl"
            onClick={() => setNav(!nav)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
