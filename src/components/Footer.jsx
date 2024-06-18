import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { footerLogo } from "../assets";

const Footer = () => {
  return (
    <footer className="footer py-16 bg-[#1B262F] text-white">
      <div className="container flex items-center justify-between">
        <div className="logo-wrapper flex items-center gap-8">
          <img src={footerLogo} alt="PayAPI's Logo" />
          <a href="#" className="text-xl font-thin min-h-[38px]">
            <span className="font-bold">pay</span>api
          </a>
          <ul className="footer__links flex items-center gap-4">
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <ul className="footer__social-links flex items-center gap-4 min-h-[38px]">
          <li>
            <a href="">
              <FaFacebookSquare size={24} />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
