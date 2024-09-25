import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navlink = ({ url, title }) => {
  const { pathname } = useLocation();

  return (
    // <Link
    //   to={url}
    //   className={`${
    //     pathname === url ? "bg-white text-black" : "bg-[#00000029] text-white"
    //   } rounded-[20px] py-[8px] px-[12px] font-[500]`}
    // >
    //   {title}
    // </Link>

    <Link
      to={url}
      className={`${
        pathname === url
          ? "bg-[#2498E2] text-white"
          : "bg-[#E2F0FC] text-[#5D5D5D]"
      } rounded-[20px] py-[8px] px-[12px] font-[500]`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
