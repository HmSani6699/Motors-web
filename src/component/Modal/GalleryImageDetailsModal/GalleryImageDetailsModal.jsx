import React from "react";
const baseUrl = "http://localhost:1337";

const GalleryImageDetailsModal = ({ data, openModal, satShowModal }) => {
  return (
    <div
      className={`fixed z-[100] flex items-center justify-center ${
        openModal ? "opacity-1 visible" : "invisible opacity-0"
      } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
    >
      <div
        className={`absolute w-[80%]  rounded-[8px] bg-white p-3 pb-5 text-center drop-shadow-2xl ${
          openModal
            ? "scale-1 opacity-1 duration-300"
            : "scale-0 opacity-0 duration-150"
        } `}
      >
        <svg
          onClick={() => satShowModal(false)}
          className="mx-auto mr-0 w-8 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="#000"
            ></path>
          </g>
        </svg>

        <div className="lg:grid grid-cols-1 gap-[20px] lg:grid-cols-2 mt-[20px]">
          {data?.image?.length > 0 &&
            data?.image?.map((item, i) => (
              <div className="w-full h-[400px]">
                <img
                  className="w-full h-full"
                  src={`${baseUrl}${item?.url}`}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImageDetailsModal;
