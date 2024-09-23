import React from "react";
import logo from "../../../public/images/logo.svg";
import Navlink from "../../component/Navlink/Navlink";

const Navbar = () => {
  return (
    <nav className="relative z-10">
      <div className="max-w-[1376px] mx-auto flex items-center justify-between h-[60px]">
        {/* =======> Left site <======= */}
        <div className="flex items-center gap-[10px]">
          <img src={logo} alt="" />
          <h2 className="text-[21px] font-[600] font-avenir">Motors Bay</h2>
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
          <button className="py-[16px] px-[35px] rounded-[8px] bg-[#2498E2] font-[500] text-white">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
