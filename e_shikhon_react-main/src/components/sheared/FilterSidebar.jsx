import { useEffect, useState } from "react";
import { scrollToTop } from "../../api/helper";
import { Filter } from "../../assets/icon/Filter";
import { YellowStar } from "../../assets/icon/YellowStar";
import { get, post } from "../../api/axious";
import {
  starsData,
  scheduleData,
  weekData,
  durationData,
  timingData,
  coursePriceData,
} from "./FiltersAllDataByArray";

const FilterSidebar = ({
  setAllCourse = [],
  allCourseUrl,
  filterName,
  setLoading,
  loading,
  page,
  allCourse,
  setTotalCourses,
  setPage,
  newPage,
  setNewPage,
  setCheck,
  check,
}) => {
  const [categoryData, setCategoryData] = useState();
  const [teacherData, setTeacherData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    scrollToTop();
  }, []);

  const fetchTeacher = async () => {
    try {
      const response = await get("/api/auth/instructor_for_filter");
      setTeacherData(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
    // getAllCourse();
    fetchTeacher();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await get("/api/course-category/all");
      setCategoryData(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const [showTick, setShowTick] = useState(false);
  const handleTickShow = (e) => {
    // console.log(e, 71);
    setShowTick(e.target.checked);
  };

  // Function to handle checkbox click event
  const [filters, setFilters] = useState({
    courseCategory: [],
    courseType: [],
    courseLevel: [],
    teachers: [],
    freeCourse: [],
    averageRating: [],
    coursePrice: [],
    timing: [],
    courseDuration: [],
    week: [],
    schedule: [],
  });
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFilters((prevFilters) => {
      // Ensure the field is initialized as an array if it’s not
      const currentValue = prevFilters[name] || [];

      if (type === "checkbox") {
        if (checked) {
          return {
            ...prevFilters,
            [name]: Array.isArray(currentValue)
              ? [...currentValue, value] // Add to the array if it's checked
              : [value], // Initialize with the first value
          };
        } else {
          return {
            ...prevFilters,
            [name]: currentValue.filter((v) => v !== value), // Remove if unchecked
          };
        }
      } else {
        return {
          ...prevFilters,
          [name]: value, // Handle other input types (e.g., radio, text)
        };
      }
    });
  };
  useEffect(() => {
    const updateAPIParams = async () => {
      const params = [];
      Object.keys(filters).forEach((key) => {
        if (filters[key]?.length > 0) {
          params.push(
            `${key}=${filters[key]
              .map(encodeURIComponent)
              .join("&" + key + "=")}`
          );
        }
      });
      params.push(`page=${check ? newPage : page}`);
      console.log(params?.length);
      console.log(params);
      // const apiUrl = `/api/courses/all?${params.join("&")}`;
      const apiUrl = `${
        allCourseUrl ? allCourseUrl : "/api/courses/all"
      }?${params.join("&")}`; // For debugging, you can replace this with your API call
      setLoading(true);

      try {
        if (params.length > 1) {
          const res =
            filterName === "/upComingBatch"
              ? await get(apiUrl)
              : await post(apiUrl);

          if (res.success) {
            setPage(1);
            setCheck(true);

            if (newPage >= 2) {
              setAllCourse((pre) => [...pre, ...res?.data]);
            } else {
              setAllCourse(res?.data);
            }
            setTotalCourses(res.meta?.total);
            setLoading(false);
          }
        } else {
          const res =
            filterName === "/upComingBatch"
              ? await get(apiUrl)
              : await post(apiUrl);
          if (res.success) {
            setNewPage(1);
            setCheck(false);
            if (page >= 2) {
              setAllCourse((pre) => [...pre, ...res?.data]);
            } else {
              setAllCourse(res?.data);
            }
            setTotalCourses(res.meta?.total);
            setLoading(false);
          }
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
      // try {
      //   const res =
      //     filterName === "/upComingBatch"
      //       ? await get(apiUrl)
      //       : await post(apiUrl);
      //   if (res.success) {
      //     if (params.length > 1) {
      //       const res =
      //         filterName === "/upComingBatch"
      //           ? await get(apiUrl)
      //           : await post(apiUrl);
      //       if (res?.success) {
      //         if (page > 1) {
      //           setPage(1);
      //         }
      //         if (page >= 2) {
      //           setAllCourse((pre) => [...pre, ...res?.data]);
      //         } else {
      //           setAllCourse(res?.data);
      //         }
      //       }
      //     }
      //     if (page >= 2) {
      //       setAllCourse((pre) => [...pre, ...res?.data]);
      //     } else {
      //       setAllCourse(res?.data);
      //     }
      //     setTotalCourses(res.meta?.total);
      //     setLoading(false);
      //   }
      // } catch (error) {
      //   setLoading(false);
      //   console.log(error);
      // }
    };
    updateAPIParams();
  }, [filters, page, newPage]);

  console.log(filters);

  return (
    <div>
      {/* left side */}
      <div className="w-[285px] hidden lg:flex">
        <div className="w-[285px] overflow-hidden rounded-lg bg-white">
          {/* top content */}
          <div className="flex items-center justify-between bg-[#5BA5D7] p-3 text-white text-[14px] font-[400] rounded-se-lg rounded-ss-lg">
            <span className="flex gap-1">
              <Filter />
              ফিল্টার
            </span>
            <span>রিসেট</span>
          </div>

          <div className="p-3">
            {/* course category */}
            <section className="w-full divide-y rounded ">
              <details
                className="group border border-[#F1F2F3] rounded-md "
                open
              >
                <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] rounded-se-md rounded-ss-md ">
                  <span className="flex items-center text_blue text-[16px] font-[500]">
                    কোর্স ক্যাটাগরি
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ms-2"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z"
                        stroke="#ACB0B9"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      className="absolute opacity-100 group-open:opacity-0"
                      width="20"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-1 opacity-0 group-open:opacity-100"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="21"
                    >
                      <path d="M240-120v-80h480v80H240Z" />
                    </svg>
                  </span>
                </summary>

                <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400] ">
                  {categoryData?.map((data, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="courseCategory"
                        value={data.category}
                        id={data.id}
                        className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                        onClick={handleFilterChange}
                      />

                      <span className="py-1">{data.category}</span>
                    </label>
                  ))}
                </div>
              </details>
            </section>
            {/* course type */}
            {filterName !== "/onlineBatch" && (
              <section className="w-full divide-y rounded mt-4">
                <details
                  className="group border border-[#F1F2F3] rounded-md "
                  open
                >
                  <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                    <span className="text-[16px] font-[500]">কোর্স টাইপ</span>
                    <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        className="absolute opacity-100 group-open:opacity-0"
                        width="20"
                      >
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-1 opacity-0 group-open:opacity-100"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="21"
                      >
                        <path d="M240-120v-80h480v80H240Z" />
                      </svg>
                    </span>
                  </summary>

                  <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                    {/* অনলাইন */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="courseType"
                        value="অনলাইন"
                        className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                        onClick={handleFilterChange}
                      />

                      <span className="py-1">অনলাইন</span>
                    </label>
                    {/* অফলাইন */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="courseType"
                        value="অফলাইন"
                        className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                        onClick={handleFilterChange}
                      />

                      <span className="py-1">অফলাইন</span>
                    </label>
                    {/* ভিডিও কোর্স */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="courseType"
                        value="ভিডিও কোর্স"
                        className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                        onClick={handleFilterChange}
                      />

                      <span className="py-1"> ভিডিও কোর্স</span>
                    </label>
                  </div>
                </details>
              </section>
            )}
            {/* instructor */}
            <section className="w-full divide-y rounded mt-4">
              <details
                className="group border border-[#F1F2F3] rounded-md "
                open
              >
                <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-md rounded-ss-md ">
                  <span className="flex items-center text-[16px] font-[500]">
                    শিক্ষকসমূহ
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ms-2"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z"
                        stroke="#ACB0B9"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      className="absolute opacity-100 group-open:opacity-0"
                      width="20"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-1 opacity-0 group-open:opacity-100"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="21"
                    >
                      <path d="M240-120v-80h480v80H240Z" />
                    </svg>
                  </span>
                </summary>

                <div>
                  <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400] ">
                    {teacherData?.length ? (
                      teacherData
                        ?.slice(0, showMore ? teacherData.length : 8)
                        ?.map((data, i) => (
                          <label
                            key={i}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name="teachers"
                              value={data?.id}
                              id={data?.id}
                              className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                              onClick={handleFilterChange}
                            />
                            <span className="py-1">{data?.fullname}</span>
                          </label>
                        ))
                    ) : (
                      <p>No teachers found</p>
                    )}
                  </div>

                  {/* Button to toggle between show more and show less */}
                  {teacherData?.length > 8 && (
                    <button
                      className="mt-2 text-blue-500 underline"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "See Less" : "See More"}
                    </button>
                  )}
                </div>
              </details>
            </section>
            {/* course level */}
            <section className="w-full divide-y rounded mt-4">
              <details
                className="group border border-[#F1F2F3] rounded-md "
                open
              >
                <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                  <span className="text_blue text-[16px] font-[500]">
                    কোর্স লেভেল
                  </span>
                  <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      className="absolute opacity-100 group-open:opacity-0"
                      width="20"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-1 opacity-0 group-open:opacity-100"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="21"
                    >
                      <path d="M240-120v-80h480v80H240Z" />
                    </svg>
                  </span>
                </summary>

                <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                  {/* বিগিনার লেভেল */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="বিগিনার লেভেল"
                      className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                      onClick={handleFilterChange}
                    />
                    <span className="py-1"> বিগিনার লেভেল</span>
                  </label>
                  {/* ইন্টারমিডিয়েট লেভেল */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="ইন্টারমিডিয়েট লেভেল"
                      className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                      onClick={handleFilterChange}
                    />
                    <span className="py-1">ইন্টারমিডিয়েট লেভেল</span>
                  </label>
                  {/* এ্যাডভান্সড লেভেল */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="courseLevel"
                      value="এ্যাডভান্সড লেভেল"
                      className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                      onClick={handleFilterChange}
                    />
                    <span className="py-1"> এ্যাডভান্সড লেভেল</span>
                  </label>
                </div>
              </details>
            </section>
            {/* // ! 23 24 25 26 */}
            {/* agent office*/}
            {/* <section className="w-full divide-y rounded mt-4">
                  <details
                    className="group border border-[#F1F2F3] rounded-md "
                    open
                  >
                    <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-md rounded-ss-md ">
                      <span className="flex items-center text_blue text-[16px] font-[500]">
                        এজেন্ট অফিস
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ms-2"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z"
                            stroke="#ACB0B9"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          className="absolute opacity-100 group-open:opacity-0"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-1 opacity-0 group-open:opacity-100"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="21"
                        >
                          <path d="M240-120v-80h480v80H240Z" />
                        </svg>
                      </span>
                    </summary>

                    <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                      
                      <div className="relative flex flex-wrap items-center">
                        <CheckBox />
                        রেইনবো অফিস, বরিশাল
                      </div>
                     
                      <div className="relative flex flex-wrap items-center mt-4">
                        <CheckBox />
                        নাটোর অফিস
                      </div>
                     
                      <div className="relative flex flex-wrap items-center mt-4">
                        <CheckBox />
                        খুলনা অফিস
                      </div>
                      
                      <div className="relative flex flex-wrap items-center mt-4">
                        <CheckBox />
                        ব্রাম্মনবাড়িয়া অফিস
                      </div>
                    </div>
                  </details>
                </section> */}

            {/* institute */}
            {/* // ! 27 28 29 */}
            {/* <section className="w-full divide-y rounded mt-4">
                  <details
                    className="group border border-[#F1F2F3] rounded-md "
                    open
                  >
                    <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-md rounded-ss-md ">
                      <span className="flex items-center text_blue text-[16px] font-[500]">
                        ইন্সটিউট
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ms-2"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M14.5 14L10.5 10M11.8333 6.66667C11.8333 9.244 9.744 11.3333 7.16667 11.3333C4.58934 11.3333 2.5 9.244 2.5 6.66667C2.5 4.08934 4.58934 2 7.16667 2C9.744 2 11.8333 4.08934 11.8333 6.66667Z"
                            stroke="#ACB0B9"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          className="absolute opacity-100 group-open:opacity-0"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-1 opacity-0 group-open:opacity-100"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="21"
                        >
                          <path d="M240-120v-80h480v80H240Z" />
                        </svg>
                      </span>
                    </summary>

                    <div className="mt-1 p-3 text-[#5D636F] text-[14px] font-[400]">
                     
                      <div className="relative flex flex-wrap items-center">
                        <CheckBox />
                        নর্থ সাউথ ইউনিভার্সিটি
                      </div>
                      
                      <div className="relative flex flex-wrap items-center mt-4">
                        <CheckBox />
                        ব্র্যাক ইউনিভার্সিটি
                      </div>
                      
                      <div className="relative flex flex-wrap items-center mt-4">
                        <CheckBox />
                        ঢাকা ইউনিভার্সিটি
                      </div>
                    </div>
                  </details>
                </section> */}
            {/* course price */}
            <section className="w-full divide-y rounded mt-4">
              <details
                className="group border border-[#F1F2F3] rounded-md "
                open
              >
                <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                  <span className="text_blue text-[16px] font-[500]">
                    কোর্স দাম
                  </span>
                  <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      className="absolute opacity-100 group-open:opacity-0"
                      width="20"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-1 opacity-0 group-open:opacity-100"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="21"
                    >
                      <path d="M240-120v-80h480v80H240Z" />
                    </svg>
                  </span>
                </summary>

                {coursePriceData?.map((item) => (
                  <div
                    key={item}
                    className="mt-1 text-[#5D636F] text-[14px] font-[400]"
                  >
                    {/* 33 */}
                    <div className="relative flex flex-wrap items-center">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="freeCourse"
                          value={item?.value}
                          className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                          onClick={handleFilterChange}
                        />

                        <span className="py-1 flex justify-center ">
                          {item?.name}
                        </span>
                      </label>
                    </div>
                  </div>
                ))}
              </details>
            </section>

            {/* আপকামিং ব্যাচ filter section start */}
            {filterName === "/upComingBatch" && (
              <div>
                {/* timing */}
                <section className="w-full divide-y rounded mt-4">
                  <details
                    className="group border border-[#F1F2F3] rounded-md "
                    open
                  >
                    <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                      <span className="text_blue text-[16px] font-[500]">
                        টাইম
                      </span>
                      <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          className="absolute opacity-100 group-open:opacity-0"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-1 opacity-0 group-open:opacity-100"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="21"
                        >
                          <path d="M240-120v-80h480v80H240Z" />
                        </svg>
                      </span>
                    </summary>

                    {timingData?.map((item) => (
                      <div
                        key={item}
                        className="mt-1 text-[#5D636F] text-[14px] font-[400]"
                      >
                        {/* 33 */}
                        <div className="relative flex flex-wrap items-center">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="timing"
                              value={item?.value}
                              className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                              onClick={handleFilterChange}
                            />

                            <span className="py-1 flex justify-center ">
                              {item?.name}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </details>
                </section>

                {/* duration */}
                <section className="w-full divide-y rounded mt-4">
                  <details
                    className="group border border-[#F1F2F3] rounded-md "
                    open
                  >
                    <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                      <span className="text_blue text-[16px] font-[500]">
                        ডিউরেশন
                      </span>
                      <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          className="absolute opacity-100 group-open:opacity-0"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-1 opacity-0 group-open:opacity-100"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="21"
                        >
                          <path d="M240-120v-80h480v80H240Z" />
                        </svg>
                      </span>
                    </summary>

                    {durationData?.map((item) => (
                      <div
                        key={item}
                        className="mt-1 text-[#5D636F] text-[14px] font-[400]"
                      >
                        {/* 33 */}
                        <div className="relative flex flex-wrap items-center">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="courseDuration"
                              value={item?.value}
                              className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                              onClick={handleFilterChange}
                            />

                            <span className="py-1 flex justify-center ">
                              {item?.name}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </details>
                </section>

                {/* week */}
                <section className="w-full divide-y rounded mt-4">
                  <details
                    className="group border border-[#F1F2F3] rounded-md "
                    open
                  >
                    <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                      <span className="text_blue text-[16px] font-[500]">
                        শুরু কবে থেকে
                      </span>
                      <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          className="absolute opacity-100 group-open:opacity-0"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-1 opacity-0 group-open:opacity-100"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="21"
                        >
                          <path d="M240-120v-80h480v80H240Z" />
                        </svg>
                      </span>
                    </summary>

                    {weekData?.map((item) => (
                      <div
                        key={item}
                        className="mt-1 text-[#5D636F] text-[14px] font-[400]"
                      >
                        {/* 33 */}
                        <div className="relative flex flex-wrap items-center">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="week"
                              value={item?.value}
                              className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                              onClick={handleFilterChange}
                            />

                            <span className="py-1 flex justify-center ">
                              {item?.name}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </details>
                </section>
                {/* schedule */}
                <section className="w-full divide-y rounded mt-4">
                  <details
                    className="group border border-[#F1F2F3] rounded-md "
                    open
                  >
                    <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                      <span className="text_blue text-[16px] font-[500]">
                        সিডিউল
                      </span>
                      <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          className="absolute opacity-100 group-open:opacity-0"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute bottom-1 opacity-0 group-open:opacity-100"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="21"
                        >
                          <path d="M240-120v-80h480v80H240Z" />
                        </svg>
                      </span>
                    </summary>

                    {scheduleData?.map((item) => (
                      <div
                        key={item}
                        className="mt-1 text-[#5D636F] text-[14px] font-[400]"
                      >
                        {/* 33 */}
                        <div className="relative flex flex-wrap items-center">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="schedule"
                              value={item?.value?.value}
                              className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                              onClick={handleFilterChange}
                            />

                            <span className="py-1 flex justify-center ">
                              {item?.name}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </details>
                </section>
              </div>
            )}

            {/* আপকামিং ব্যাচ filter section end  */}

            {/* course review */}
            <section className="w-full divide-y rounded mt-4">
              <details
                className="group border border-[#F1F2F3] rounded-md "
                open
              >
                <summary className="relative cursor-pointer list-none pr-8 py-1 ps-1 transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden bg-[#F1F2F3] text_blue rounded-se-lg rounded-ss-lg ">
                  <span className="text-[#2E3138] text-[16px] font-[500]">
                    কোর্স রিভিউ
                  </span>
                  <span className="absolute right-1 w-4 h-4 transition duration-300 top-1 shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      className="absolute opacity-100 group-open:opacity-0"
                      width="20"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-1 opacity-0 group-open:opacity-100"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="21"
                    >
                      <path d="M240-120v-80h480v80H240Z" />
                    </svg>
                  </span>
                </summary>

                {starsData?.map((item) => (
                  <div
                    key={item}
                    className="mt-1 text-[#5D636F] text-[14px] font-[400]"
                  >
                    {/* 33 */}
                    <div className="relative flex flex-wrap items-center">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="averageRating"
                          value={item?.en}
                          className="h-4 w-4 rounded-md border-gray-200 bg-gray-500 shadow-sm"
                          onClick={handleFilterChange}
                        />

                        <span className="py-1 flex justify-center ">
                          {item?.bn}
                          <YellowStar />
                        </span>
                      </label>
                    </div>
                  </div>
                ))}
              </details>
            </section>
          </div>
        </div>
      </div>
      {/* left side end */}
    </div>
  );
};

export default FilterSidebar;
