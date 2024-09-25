import React from "react";

const NavLInk_1 = ({ url }) => {
  return (
    <Link
      to={url}
      className={`${
        pathname === url ? "bg-white text-black" : "bg-[#00000029] text-white"
      } rounded-[20px] py-[8px] px-[12px] font-[500]`}
    >
      {title}
    </Link>
  );
};

export default NavLInk_1;
