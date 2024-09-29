import React, { useEffect, useState } from "react";

const TextareaFiled = ({ placeholder = "Write your message" }) => {
  const [rows, setRows] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 || window.innerWidth >= 1024) {
        // adjust breakpoint as needed
        setRows(15);
      } else {
        setRows(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <textarea
        className="py-[16px] px-[24px] border border-[#EFEFEF] rounded-[8px] w-full outline-none bg-[#FFF] shadow-sm"
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextareaFiled;
