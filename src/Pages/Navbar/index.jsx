import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import Navlink from "../../component/Navlink/Navlink";
import menu from "../../../public/images/menu-alt-2.png";
import { Link } from "react-router-dom";

const Navbar = ({ viewNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 w-full z-10 lg:mt-[15px]">
      {/* =========> PC nav <====== */}
      <div className="max-w-[1376px] mx-auto  items-center justify-between h-[60px] hidden lg:flex">
        {/* =======> Left site <======= */}
        <div className="flex items-center gap-[10px]">
          <img src={logo} alt="" />
          <h2
            className={`${
              viewNav === "home" || viewNav === "cardDetails"
                ? "text-white"
                : "text-black"
            } text-[24px] font-[600] leading-[28px] font-avenir `}
          >
            Motors Bay
          </h2>
        </div>
        {/* =======> Middle site <======= */}
        <div className=" flex items-center gap-[60px] mt-[25px]">
          <Navlink url="/" title="Home" />
          <Navlink url="/about" title="About Us" />
          <Navlink url="/stock" title="Stock" />
          <Navlink url="/blog" title="Blog" />
        </div>

        {/* =======> Right site <======= */}
        <div>
          <Link to="/contact">
            <button className="py-[16px] px-[35px] rounded-[8px] bg-[#2498E2] font-[500] text-white">
              Contact us
            </button>
          </Link>
        </div>
      </div>
      {/* =========> Mobile and Tab nav <====== */}
      <div className="w-full py-[20px] relative lg:hidden ">
        <div
          className={`flex items-center justify-between px-[20px] ${
            isOpen && "border-b-2 pb-[10px]"
          }`}
        >
          {/* =======> Left site <======= */}
          <div className="flex items-center gap-[6px]">
            <img className="w-[27px] h-[24px]" src={logo} alt="" />
            <h2 className="text-[16px] font-[600] font-avenir">Motors Bay</h2>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            <img className="w-[24px] h-[24px]" src={menu} alt="" />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "h-[365px] " : "h-0 hidden"
          } bg-white absolute top-[60px] w-full px-[20px]`}
        >
          <div className=" flex flex-col  gap-[24px] mt-[25px]">
            <Link to={"/"} className="text-[#141414] text-[20px] font-[400]">
              Home
            </Link>
            <Link
              to={"about"}
              className="text-[#141414] text-[20px] font-[400]"
            >
              About Us
            </Link>
            <Link
              to={"/stock"}
              className="text-[#141414] text-[20px] font-[400]"
            >
              Stock
            </Link>
            <Link
              to={"/blog"}
              className="text-[#141414] text-[20px] font-[400]"
            >
              Blog
            </Link>
            <div>
              <Link to="/contact">
                <button className="py-[16px] px-[35px] rounded-[8px] bg-[#2498E2] font-[500] text-white">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
