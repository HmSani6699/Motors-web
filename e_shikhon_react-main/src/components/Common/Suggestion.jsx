import React, { useEffect, useRef } from "react";
import SuggLoading from "./SuggLoading";

const Suggestion = ({
  showSuggesstion,
  loading,
  data = [],
  setShowSuggesstion,
  obj_name = "id",
  children,
  i,
  type,
  handleInputChange,
}) => {
  let suggestionRef = useRef();

  useEffect(() => {
    let handlerClose = (e) => {
      if (!suggestionRef?.current?.contains(e.target)) {
        setShowSuggesstion(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  });

  return (
    <div className="flex-1 relative" ref={suggestionRef}>
      <div className="flex gap-3">
        <div className={`flex-1`}>
          {children}
          <div
            className={`w-full h-40 bg-gray-100 absolute top-12 left-0 rounded-md overflow-hidden shadow-lg overflow-y-scroll custom_scroll z-10 ${
              showSuggesstion ? "block" : "hidden"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <SuggLoading />
              </div>
            ) : data?.length > 0 ? (
              data.map((data, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleInputChange(i, {
                      target: {
                        name: type,
                        value: data?.[obj_name]
                          ? `${data?.[obj_name]}`
                          : data?.id,
                      },
                    });
                    handleInputChange(i, {
                      target: {
                        name: "id",
                        value: data?.id,
                      },
                    });
                    setShowSuggesstion(false);
                  }}
                  className="px-4 py-2 border-b hover:bg-[#BBDEFF] cursor-pointer"
                >
                  {data?.[obj_name] ? `${data?.[obj_name]}` : data?.id}
                </p>
              ))
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>Not Data found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
