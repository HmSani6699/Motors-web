import React, { useEffect, useRef, useState } from "react";
import downArrowIcon from "../assets/svg/uparrow-icon.svg";

const CurriculamCard = ({ title, content }) => {
  let accorionRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let handlerClose = (e) => {
      if (!accorionRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  });

  return (
    <div
      ref={accorionRef}
      onClick={() => setIsOpen(!isOpen)}
      className={`py-4 px-5 text-white rounded-md box_shadow_cart cursor-pointer`}
    >
      <div className="flex justify-between items-center font-[500]">
        <h3>{title}</h3>
        <div className="px-2">
          <img
            src={downArrowIcon}
            alt="icon"
            className={`transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="mt-5">{content}</p>
      </div>
    </div>
  );
};

export default CurriculamCard;
