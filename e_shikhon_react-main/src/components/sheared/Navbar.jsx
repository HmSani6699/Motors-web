import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import helpLineIcon from "../../assets/svg/help_line.svg";
import imoIcon from "../../assets/svg/imo.svg";
import whatsUpIcon from "../../assets/svg/whatsup.svg";
import clockIcon from "../../assets/svg/time.svg";
import facebookIcon from "../../assets/svg/facebook.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import instagramIcon from "../../assets/svg/Instragram.svg";
import youtubeIcon from "../../assets/svg/youtube.svg";
import shearIcon from "../../assets/svg/Google Plus.svg";
import LogoIcon from "../../assets/svg/Logo.svg";
import loginIcon from "../../assets/svg/login.svg";
import searchIcon from "../../assets/svg/search.svg";
import downArrowIcon from "../../assets/svg/down_arrow.svg";
import { AuthContext } from "../../layout/MainLayout";
import { FaUserCircle } from "react-icons/fa";
import Menu from "../Common/Menu";
import { TbShoppingCartCheck } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
import classPNG from "../../assets/images/up_comming_course (1).png";
import useStorageSync from "../../hooks/useStorageSync";
import { deleteCartItem, loadData } from "../../hooks/localStorage";
import HoverMenu from "../Common/HoverMenu";
import { del, get } from "../../api/axious";
import { useRef } from "react";

const Navbar = () => {
  const modalRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [allCourseData, setAllCourseData] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [allQuiz, setAllQuiz] = useState([]);
  const [clickPath, setClickPath] = useState("/");
  const quizPath = clickPath && clickPath.split("/")?.[1];

  const quizOptions = allQuiz?.map((item) => ({
    link: item?.title?.slice(0, 15),
    path: `/quiz/${item?.id}`,
  }));
  console.log(quizOptions);

  // console.log(user, "user +++++.");
  const handleCall = () => {
    window.location.href = "whatsapp://send?phone=+8801948858258";
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    let handlerClose = (e) => {
      if (!modalRef?.current?.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  });

  // =======> Get all course info <===========//
  // useEffect(() => {
  //   const getCourseJsonData = window.localStorage.getItem("courseInfo");
  //   const getCourseData = JSON.parse(getCourseJsonData);
  //   if (getCourseData) {
  //     setAllCourseData(getCourseData);
  //   }
  // }, []);

  // =====> Handle delete Select Course  <========//
  // const handleDeleteCourse = (id) => {
  //   console.log(id);
  //   const getCourses = JSON.parse(localStorage.getItem("courseInfo"));
  //   const filterCourse = getCourses?.filter((item) => item?.course_id !== id);
  //   window.localStorage.setItem("courseInfo", JSON.stringify(filterCourse));
  //   setAllCourseData(filterCourse);
  // };

  const handleDeleteItem = async (item) => {
    try {
      const res = await del(`/api/course/enroll/delete/${item?.userId}/${item?.course_id}/${item?.batch_id}`);
      if (res?.success) {
        toast.success("Course removed from cart successfully!");
        deleteCartItem("cart", item?.batch_id, item?.course_id);
      }
    } catch (error) {
      console.log(error);
    }
    setIsCartOpen(false);
  };

  // ===============================
  // const cartData = useStorageSync("cart");
  // useEffect(() => {
  //   if (cartData) {
  //     setAllCourseData(cartData?.items);
  //     const getCourseParse = cartData?.items;
  //     const totalPrice = getCourseParse?.reduce((total, item) => {
  //       return total + (item?.course_price || 0);
  //     }, 0);
  //     setTotalPrice(totalPrice);
  //   }
  // }, [cartData]);

  const cartData = useStorageSync("cart");
  useEffect(() => {
    if (cartData) {
      setAllCourseData(cartData?.items);
      const getCourseParse = cartData?.items;
      const totalPrice = getCourseParse?.reduce((total, item) => {
        return total + (item?.course_price || 0);
      }, 0);
      setTotalPrice(totalPrice);
    }
  }, [cartData]);

  // console.log(allCourseData);

  useEffect(() => {
    fetchAllQuiz();
  }, []);

  const fetchAllQuiz = async () => {
    try {
      const response = await get("/api/random_quiz/all");
      setAllQuiz(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  return (
    <>
      {/*<!-- Top bar --> */}
      <div className="hidden lg:block px-5 bg-[#1E567B] text-[#FFF] text-[16px] font-[500]">
        <div className=" max-w-[1200px] mx-auto gap-6 py-2.5 flex justify-between">
          <div className="flex gap-10 items-center ">
            <a href="tel:09639399399" className="flex items-center gap-2">
              <img src={helpLineIcon} alt="" />
              09639399399
            </a>
            <Link
              onClick={handleCall}
              href="javascript:void(0)"
              className="flex items-center gap-2"
            >
              <img src={imoIcon} alt="" />
              <img src={whatsUpIcon} alt="" />
              +88 01948858258
            </Link>
            <Link href="javascript:void(0)" className="flex items-center gap-2">
              <img src={clockIcon} alt="" />
              <span className="font-[400]">(10AM - 11PM)</span>
            </Link>
          </div>
          <div className="">
            <div className="flex items-center justify-end gap-2.5">
              <a target="blank" href="https://www.facebook.com/eshikhon/">
                <img src={facebookIcon} alt="icon" />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/company/eshikhon/"
              >
                {" "}
                <img src={linkedinIcon} alt="icon" />{" "}
              </a>
              <a target="blank" href="https://www.instagram.com/eshikhon/">
                <img src={instagramIcon} alt="icon" />
              </a>
              <img src={youtubeIcon} alt="" />
              <img src={shearIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/*<!-- Header --> */}
      <header className="relative z-20 w-full bg-[#FFF] px-5">
        <div className="relative mx-auto max-w-[1200px]">
          <nav
            aria-label="main navigation"
            className="flex justify-between items-center py-5"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link>
              <img src={LogoIcon} alt="" />
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                  ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
                `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`lg:mx-[67px] gap-5 absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
                }`}
            >
              <li role="none" className="flex ">
                <Link
                  to="/"
                  className={`flex items-center py-4  
                  ${location.pathname == "/"
                      ? "text-[#20AC90]"
                      : "text-[#2E3138]"
                    } text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95`}
                >
                  হোম
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/course"
                  className={`flex items-center py-4  
                  ${location.pathname == "/course"
                      ? "text-[#20AC90]"
                      : "text-[#2E3138]"
                    } text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95`}
                >
                  কোর্সসমূহ
                  <img src={downArrowIcon} alt="" />
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/upComingBatch"
                  className={`flex items-center py-4  
                  ${location.pathname == "/upComingBatch"
                      ? "text-[#20AC90]"
                      : "text-[#2E3138]"
                    } text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95`}
                >
                  আপকামিং ব্যাচ
                  <img src={downArrowIcon} alt="" />
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/onlineBatch"
                  className={`flex items-center py-4  
                  ${location.pathname == "/onlineBatch"
                      ? "text-[#20AC90]"
                      : "text-[#2E3138]"
                    } text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95`}
                >
                  অনলাইন ব্যাচ
                  <img src={downArrowIcon} alt="" />
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/aboutUs"
                  className={`flex items-center py-4  
                  ${location.pathname == "/aboutUs"
                      ? "text-[#20AC90]"
                      : "text-[#2E3138]"
                    } text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95`}
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/contactUs"
                  className={`flex items-center py-4  
                  ${location.pathname == "/contactUs"
                      ? "text-[#20AC90]"
                      : "text-[#2E3138]"
                    } text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95`}
                >
                  যোগাযোগ
                </Link>
              </li>
              <li role="none" className="relative flex items-stretch">
                <HoverMenu
                  setClickPath={setClickPath}
                  title={"আরও"}
                  // childOption={quizPath === "quiz"? quizOptions : []}
                  option={[
                    // { link: "আমাদের এজেন্ট’স", path: "/forum" },
                    // { link: "সেমিনার সমূহু", path: "/forum" },
                    {
                      link: "কুইজ সমূহু",
                      path: "/quiz",
                      childOptions: quizPath === "quiz" ? quizOptions : [],
                    },
                    { link: "ফ্রি কোর্স সমূহু", path: "/" },
                    { link: "ক্যারিয়ার", path: "/career" },
                    { link: "পাবলিক ফোরাম", path: "/forum" },
                    { link: "ব্লগ", path: "/blog" },
                  ]}
                />
              </li>
            </ul>

            {/*      <!-- Actions --> */}
            <div className="ml-auto hidden md:flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0 gap-7">
              <img src={searchIcon} alt="" />
              <button className="inline-flex justify-center rounded-md  px-4 py-2 items-center border border-[#9096A2]">
                <span className="text-[10px] font-[400] text-[#5D636F]">অ</span>
                <span className="mt-1 text-[10px] font-[400] text-[#5D636F]">
                  A
                </span>
                <span className="text-[14px] font-[500] ms-1 text-[#464A53]">
                  বাং
                </span>
              </button>
              <div className="flex gap-2 relative">
                {user?.id ? (
                  <>
                    <Menu />
                    {user?.roles?.roleName == "Student" && (
                      <div
                        onClick={() => {
                          setIsCartOpen(!isCartOpen);
                          // navigate("/cart")
                        }}
                        className="cursor-pointer "
                      >
                        <TbShoppingCartCheck className="text-[22px]" />

                        {allCourseData?.length > 0 && (
                          <span className="absolute bg-[#1d5276] text-blue-100 px-1 h-[20px] w-[20px] flex items-center justify-center text-xs rounded-full -top-3 -right-3">
                            {allCourseData && allCourseData?.length}
                          </span>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#20AC90] px-4 py-2 text-[#FFF] transition duration-300 ease-in-out  active:scale-95"
                  >
                    <span className="relative only:-mx-5">
                      <img src={loginIcon} alt="" />
                    </span>
                    <span className="text-[14px] font-[500]">লগইন</span>
                  </Link>
                )}
              </div>
            </div>

            {/* cart modal */}

            {isCartOpen && allCourseData?.length > 0 && (
              <div ref={modalRef}
                className={`absolute top-[70px] right-0 bg-white w-[400px]  shadow-lg rounded-md fade-in-down  border p-[20px]`}
              >
                {allCourseData &&
                  allCourseData?.length > 0 &&
                  allCourseData?.map((item) => (
                    <div className=" mb-[15px]">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          <div className="">
                            {item?.course_img ? (
                              <img
                                className="h-[70px] rounded-[5px]"
                                src={`${BASE_URL}${item?.course_img}`}
                                alt=""
                              />
                            ) : (
                              <img
                                className="h-[70px] rounded-[5px]"
                                src={classPNG}
                                alt=""
                              />
                            )}
                          </div>
                          <div className="w-full">
                            <h1 className="text-lg font-semibold line-clamp-1 leading-[20px]">
                              {item?.course_title}
                            </h1>
                            <span className="bg-[#e3e5e8] px-1 py-0.5 rounded-full text-base inline-block line-clamp-1 leading-[20px]">
                              {item?.batchNo}
                            </span>
                            <h2 className="text-[16px] font-[500] leading-[10px] text-[#20AC90]">
                              ৳ {item?.course_price}
                            </h2>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteItem(item?.course_id)}
                          className="text-xl text-red-600"
                        >
                          <RxCrossCircled />
                        </button>
                      </div>
                    </div>
                  ))}

                <div className="">
                  <span className="border-dashed border-t-2 border-[#ACB0B9] h-2 inline-block w-full"></span>
                  <div className="flex items-center justify-between mb-[15px] mt-[15px]">
                    <h1 className="text-[24px] font-[500] leading-[32px] text-[#2E3138]">
                      সর্বমোট মূল্য
                    </h1>
                    <h1 className="text-[20px] font-[500] leading-[32px] text-[#20AC90]">
                      ৳ {totalPrice || 0}
                    </h1>
                  </div>
                  <Link to="/cart">
                    <button
                      type="button"
                      className="w-full font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
                    >
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
};

export default Navbar;
