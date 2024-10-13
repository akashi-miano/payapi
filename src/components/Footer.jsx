import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { footerLogo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-16 bg-[#1B262F] text-white">
      <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="logo-wrapper flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
          <div className="wrapper flex gap-2">
            <Link
              to="/"
              className="text-xl font-thin min-h-[38px] text-[#36536B] flex items-center gap-4"
            >
              <img src={footerLogo} className="w-[30px] h-[30px]" alt="logo" />
              <p className="text-white">
                <span className="specialLogo text-xl font-thin min-h-[38px] flex items-center md:inline text">
                  pay
                </span>
                api
              </p>
            </Link>
          </div>
          <ul className="footer__links flex flex-col sm:flex-row items-center gap-4 my-2 sm:my-0 sm:ml-8">
            <li className="flex items-center">
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-[#fbfcfe] duration-300"
              >
                Pricing
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/about"
                className="text-gray-300 hover:text-[#fbfcfe] duration-300"
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/contacts"
                className="text-gray-300 hover:text-[#fbfcfe] duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className="footer__social-links flex justify-center items-center gap-4 min-h-[38px]">
          <li>
            <a href="">
              <FaFacebookSquare
                size={24}
                className="hover:text-[#da6d97] duration-300"
              />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter
                size={24}
                className="hover:text-[#da6d97] duration-300"
              />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin
                size={24}
                className="hover:text-[#da6d97] duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
