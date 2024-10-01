import React, { useState, useCallback } from "react";
import downArrowIcon from "../../assets/svg/down_arrow.svg";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HoverMenu = React.memo(({ title, option, setClickPath, childOption }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [BgColor, setBgColor] = useState(0);

  const handleMouseEnter = useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsOpen(false), []);
  const handlePathClick = useCallback((path) => setClickPath(path || "/"), [setClickPath]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        className={`flex items-center py-4  
          ${location.pathname === "/onlineBatch"
            ? "text-[#20AC90]"
            : "text-[#2E3138]"
          } text-[16px] font-[600] transition duration-300 ease-in-out active:scale-95`}
      >
        {title}
        <img src={downArrowIcon} alt="" />
      </Link>

      <div
        className={`${isOpen
          ? "bg-white z-10 rounded-md shadow-2xl absolute top-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 opacity-100 min-w-[200px]"
          : "hidden opacity-0"
          }`}
      >
        <ul className="relative">
          {option?.map((data, i) => (
            <li key={i}>
              <Link
                to={data?.path || "/"}
                onMouseEnter={() => {
                  handlePathClick(data?.path)
                  setBgColor(i)
                }}
                onMouseLeave={() => handlePathClick("/")}
                className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-blue-200/50 ${BgColor === i ? "bg-blue-200/50" : ""}`}
              >
                {data?.link || "N/A"} <MdOutlineKeyboardArrowRight />
              </Link>
              {/* Only render childOption if it's passed */}
              {data?.childOptions && (
                <ul className="ml-4 absolute bg-white -right-[132px] top-0">
                  {data?.childOptions.map((childData, i) => (
                    <li key={i}>
                      <Link
                        to={childData?.path || "/"}
                        onMouseEnter={() => handlePathClick(childData?.path)}
                        onMouseLeave={() => handlePathClick("/")}
                        className="flex items-center justify-between text-[14px] font-[500] transition duration-300 ease-in-out active:scale-95 py-2 w-full px-3 hover:bg-blue-200/50"
                      >
                        {childData?.link || "N/A"} <MdOutlineKeyboardArrowRight />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default HoverMenu;
