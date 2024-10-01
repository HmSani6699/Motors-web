import React from "react";
import SuggLoading from "./SuggLoading";

const ObjectSuggestion = ({
  children,
  obj_name = "id",
  suggestionList,
  suggestionClick,
  setShowSuggestion,
}) => {
  return (
    <div className="flex-1">
      <div className="flex gap-3">
        <div className={`relative flex-1`}>
          {children}

          <div
            className={`w-full h-40 bg-gray-100 absolute top-10 left-0 z-50 rounded-md overflow-hidden shadow-lg overflow-y-scroll custom_scroll ${
              suggestionList?.showSuggestion ? "block" : "hidden"
            }`}
          >
            {suggestionList?.loading ? (
              <div className="flex justify-center items-center h-full">
                <SuggLoading />
              </div>
            ) : suggestionList?.searchData?.length > 0 ? (
              suggestionList?.searchData?.map((data, i) => (
                <p
                  key={i}
                  onClick={() => {
                    suggestionClick(data);
                    setShowSuggestion((prevState) => ({
                      ...prevState,
                      showSuggestion: false,
                    }));
                  }}
                  className="px-4 py-2 border-b hover:bg-[#BBDEFF] cursor-pointer"
                >
                  {data?.[obj_name] ? data?.[obj_name] : data?.id}
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

export default ObjectSuggestion;
