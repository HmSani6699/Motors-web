import React, { useEffect, useRef } from "react";
import SuggLoading from "./SuggLoading";

const TagSuggestion = ({
  showSuggesstion,
  loading,
  data = [],
  setShowSuggesstion,
  obj_name = "id",
  children,
  z_index = "z-10",
  setTagList,
  setTag,
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
    <div className="flex-1" ref={suggestionRef}>
      <div className="flex gap-3 ">
        <div className={`relative ${z_index} flex-1`}>
          {children}
          <div
            className={`w-full h-40 bg-gray-100 absolute bottom-0-0 left-0 rounded-md overflow-hidden shadow-lg overflow-y-scroll custom_scroll ${
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
                    setTagList((pre) =>
                      pre
                        ? [...pre, { tag: data.id, name: data?.[obj_name] }]
                        : [{ tag: data.id, name: data?.[obj_name] }]
                    );
                    setTag("");
                    setShowSuggesstion(false);
                  }}
                  className="px-4 py-2 border-b hover:bg-[#BBDEFF] cursor-pointer"
                >
                  {data?.[obj_name]
                    ? `${data?.[obj_name]} (${data?.questionCount})`
                    : data?.id}
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

export default TagSuggestion;
