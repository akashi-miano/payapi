import { logo } from "../assets";

const Nav = () => {
  return (
    <nav role="navigation" className="pt-[2.813rem] pb-[0.875.rem] main-nav">
      <div className="container flex justify-between items-start">
        <div className="wrapper flex items-center gap-[6.25rem] min-h-[44.8px]">
          <div className="logo-wrapper flex items-center gap-4">
            <img src={logo} className="" alt="logo" />
            <a href="" className="text-xl font-thin min-h-[38px]">
              <span className="specialLogo">pay</span>api
            </a>
          </div>
          <ul className="flex items-center gap-[3.125rem] min-h-[38px]">
            <li>
              <a href="" className="link">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="link">
                About
              </a>
            </li>
            <li>
              <a href="" className="link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-wrapper">
          <a href="" className="btn main-btn">
            Schedule a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
