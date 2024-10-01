import React from "react";

// StarSvg Component that renders the SVG
const StarSvg = ({ isFilled, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={isFilled ? "red" : "none"}
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer" }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default StarSvg;
