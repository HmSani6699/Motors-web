import React, { useEffect, useRef } from "react";
import SuggLoading from "./SuggLoading";
import { get } from "../api/axious";

const Suggestion = ({
  obj_name = "id",
  children,
  setData,
  handleCourseSuggestion,
}) => {
  let suggestionRef = useRef();
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    let handlerClose = (e) => {
      if (!suggestionRef?.current?.contains(e.target)) {
        setShowSuggestion(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  });

  const handleCourseSuggestion = async (event) => {
    const query_text = event.target.value;
    setData(query_text);
    if (query_text) {
      setShowSuggestion(true);
      setLoading(true);
      try {
        const res = await get(`api/courses/search/${query_text}`);
        console.log(res, "now ============>");
        if (res) {
          setSearchData(res.data);
        }
      } catch (error) {
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    } else {
      setShowSuggestion(false);
      setSearchData([]);
    }
  };

  return (
    <div className="flex-1 relative" ref={suggestionRef}>
      <div className="flex gap-3">
        <div className={`flex-1`}>
          {children}
          <div
            className={`w-full h-40 bg-gray-100 absolute top-12 left-0 rounded-md overflow-hidden shadow-lg overflow-y-scroll custom_scroll z-10 ${
              showSuggestion ? "block" : "hidden"
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
                    setInput(data?.[obj_name]);
                    setAuthorId(data?.id);
                    setShowSuggestion(false);
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
