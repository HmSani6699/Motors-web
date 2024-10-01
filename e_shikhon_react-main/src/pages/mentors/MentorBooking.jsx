import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import badge_green from "../../assets/svg/badge_green.svg";
import star_yellow from "../../assets/svg/star_yellow.svg";
import train_experience from "../../assets/svg/train_exparience.svg";
import total_student from "../../assets/svg/total_student.svg";
import work_experience from "../../assets/svg/work_experience.svg";
import technology_icon from "../../assets/images/technology.png";
import upWork_logo from "../../assets/images/upWork_logo.png";
import right_arrow_btn from "../../assets/svg/arrow-right-btn.svg";
import { scrollToTop } from "../../api/helper";
import { MdOutlineCalendarMonth } from "react-icons/md";
import DateConverter from "../../components/DateConverter/DateConverter";
import { get, post } from "../../api/axious";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../layout/MainLayout";

const MentorBooking = () => {
  const { user, logout } = useContext(AuthContext);
  // scrollToTop();
  const navigate = useNavigate();
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [allSlots, setAllSlots] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [topicID, setTopicID] = useState("");
  const [slotID, setSlotID] = useState("");
  const [mentorData, setMentorData] = useState();

  useEffect(() => {
    if (id) {
      handleGetMentorData(id);
    }
  }, [id]);
  const handleGetMentorData = async (id) => {
    setLoading(true);
    try {
      const res = await get(`api/auth/get_instructor/${id}`);
      console.log(res);
      if (res?.success) {
        setMentorData(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTopic(parseInt(id));
    fetchAllSlots(parseInt(id));
  }, []);

  // Get all Topic
  const fetchAllTopic = async (id) => {
    try {
      const res = await post("/api/instructorTopic/allTopics", {
        instructor_id: id,
      });
      console.log(res, "res");
      if (!res.error) {
        setAllTopics(res);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // Get all slots
  const fetchAllSlots = async (id) => {
    try {
      const res = await post("/api/slot/slotsWithDate", {
        instructor_id: id,
      });
      console.log(Object.keys(res.keys), "res");
      if (!res.error) {
        setAllSlots(res);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // handle booking Instructor
  const handleBooking = async () => {
    const formData = {
      user_id: user?.id,
      slot_id: slotID,
      topic_id: topicID,
      instructor_id: id,
    };

    setLoading(true);
    try {
      const res = await post("/api/booking/create-booking", formData);
      console.log(res);
      if (!res?.error) {
        setSlotID("");
        setTopicID("");
        toast.success(" Student Booking successfully");
        navigate("/student/booking-instructor");
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.error
          ? error?.response?.data?.error
          : "Failed to Booking create"
      );
      console.log("Faild to Login/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  console.log(mentorData, 'dhf');

  return (
    <>
      <div className="py-10 bg-[#F5F5F5]">
        <Wrapper>
          <div className="mb-5 flex items-center">
            <img src={home} alt="icon" className="mx-2 mb-1" />
            <p className="text-primary_color font-[500]">হোম</p>
            <img src={arrow} alt="icon" />
            <p className="text-primary_color font-[500]">আমাদের সম্পর্কে</p>
            <img src={arrow} alt="icon" />
            <p onClick={() => navigate("/mentorsList")} className="text-primary_color font-[500] cursor-pointer">শিক্ষক সমূহ</p>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">বুকিং শিক্ষক</p>
          </div>

          <div className="w-full justify-between flex flex-col md:flex-row ">
            <div className="max-w-[795px] w-full">
              <div className="overflow-hidden border border-[#E3E5E8] rounded-[10px] bg-[#EBF4FA]">
                <div className="">
                  <div className="p-4 flex items-center gap-4 ">
                    <div className="relative">


                      {mentorData?.pro_pic ? (
                        <img
                          className="relative inline-flex items-center justify-center rounded-full w-[100px] bg-[#D9D9D9]"
                          src={`${BASE_URL}${mentorData?.pro_pic?.path}`}
                          alt="instructor image"
                        />
                      ) : (
                        <img
                          className="relative inline-flex items-center justify-center rounded-full w-[100px] bg-[#D9D9D9]"
                          alt="instructor image"
                          src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
                          layout="fill"
                          objectFit="scale-down"
                        />
                      )}
                      {/* <img src={badge_green} alt=""
                                        className='absolute top-2 left-20 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white text-sm bg-white '
                                    /> */}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                          {mentorData?.fullName}
                        </h1>
                        {/* <h1 className='text-[#2E3138] text-[14px] font-[400] leading-[18px]'>Professional UI/UX Design</h1> */}
                        <div className="flex items-center">
                          <img className="w-[15px]" src={star_yellow} alt="" />
                          <h1 className="text-[#2E3138] text-[14px] font-[500] leading-[21px]">
                            {mentorData?.averageRating} (250 reviews)
                          </h1>
                        </div>
                      </div>
                      <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
                        Digital Marketing & eCom Site Development Trainer
                      </h1>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-2 items-center py-4 border-b-2 border-t-2 border-white">
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="bg-white rounded-full p-1">
                            <img src={train_experience} alt="" />
                          </div>
                          <h1 className="text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                            ট্রেইনিং এক্সপেরিয়েন্স
                          </h1>
                        </div>
                        <h1 className="mt-1 text-[16px] font-[400] leading-[22px] text-[#1D5276]">
                          ৮ বছর +
                        </h1>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="bg-white rounded-full p-1">
                            <img src={total_student} alt="" />
                          </div>

                          <h1 className="text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                            স্টুডেন্ট সংখ্যা
                          </h1>
                        </div>
                        <h1 className="mt-1 text-[16px] font-[400] leading-[22px] text-[#1D5276]">
                          ৩৫০০+
                        </h1>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="flex items-center gap-1">
                        <div className="bg-white rounded-full p-1">
                          <img src={work_experience} alt="" />
                        </div>
                        <h1 className="mt-1 text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                          ওয়ার্ক এক্সপেরিয়েন্স
                        </h1>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-1">
                            <img src={technology_icon} alt="" />
                            <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                              ফাউন্ডার অফ Technocastles
                            </h1>
                          </div>
                          <div className="flex items-center gap-1">
                            <img
                              className="w-[18px]"
                              src={upWork_logo}
                              alt=""
                            />
                            <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                              আপওয়ার্ক টপ রেটেদ ফ্রিল্যান্সার
                            </h1>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <img src={technology_icon} alt="" />
                            <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                              ফাউন্ডার অফ Technocastles
                            </h1>
                          </div>
                          <div className="flex items-center gap-1">
                            <img
                              className="w-[18px]"
                              src={upWork_logo}
                              alt=""
                            />
                            <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                              আপওয়ার্ক টপ রেটেদ ফ্রিল্যান্সার
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="overflow-hidden mt-5 rounded-[10px] bg-white p-3">
                  {/* topic select */}
                  <div>
                    <div className="flex items-center gap-1">
                      <div className="bg-white rounded-full p-1">
                        <img src={work_experience} alt="" />
                      </div>
                      <h1 className="mt-1 text-[18px] font-[600] leading-[22px] text-[#2E3138]">
                        টপিক সিলেক্ট করুন
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 py-3 border border-[#E3E5E8] mt-[15px] p-[12px]">
                    {allTopics?.length > 0 &&
                      allTopics?.map((topic) => (
                        <button
                          onClick={() => setTopicID(topic?.id)}
                          className={`${topicID === topic?.id
                            ? "bg-[#20ac90] hover:bg-[#20ac90] hover:text-[#fff] text-[#fff]"
                            : "bg-[#E3E5E8] hover:bg-[#A9EFE1] hover:border-[#20AC90] hover:text-[#20AC90]"
                            }  px-[16px] py-[3px] border border-[#ACB0B9] rounded-[20px]  cursor-pointer  text-[14px] font-[400] text-[#2E3138] whitespace-nowrap`}
                        >
                          {topic?.topic_name}
                        </button>
                      ))}
                  </div>
                  {/* slot select */}
                  <div>
                    <div className="flex items-center gap-1 mt-[20px]">
                      <div className="bg-white rounded-full p-1">
                        <img src={work_experience} alt="" />
                      </div>
                      <h1 className="mt-1 text-[18px] font-[600] leading-[22px] text-[#2E3138]">
                        তারিখ ও সময় সিলেক্ট করুন
                      </h1>
                    </div>
                    <div className="w-full border-t border-l border-r border-[#ACB0B9] rounded-[8px] mt-[15px]  overflow-hidden">
                      {allSlots?.length > 0 &&
                        allSlots?.map((slot, i) => (
                          <div className="flex  border-b border-[#ACB0B9] h-[50px]">
                            <div>
                              <h2
                                className={`text-[16px] w-[215px] bg-[#ADD2EB] px-[15px]  h-full flex items-center gap-[10px] font-[400] whitespace-nowrap`}
                              >
                                <MdOutlineCalendarMonth className="text-[#143952] h-[20px] w-[20px]" />
                                {/* {slot?.date} */}
                                <DateConverter date={slot?.date} />
                              </h2>
                            </div>

                            <div className="w-full  rounded-l-[8px] bg-white -ml-[5px]">
                              <div className="flex gap-[10px] pl-[20px] h-full items-center">
                                {slot?.slotList?.map((item) => (
                                  <h2
                                    onClick={() => setSlotID(item?.id)}
                                    className={`${slotID === item?.id
                                      ? "bg-[#20ac90] hover:bg-[#20ac90] hover:text-[#fff] text-[#fff]"
                                      : "bg-[#E3E5E8] hover:bg-[#A9EFE1] hover:border-[#20AC90] hover:text-[#20AC90]"
                                      }  px-[16px] py-[3px] border border-[#ACB0B9] rounded-[20px]  cursor-pointer  text-[14px] font-[400] text-[#2E3138] whitespace-nowrap`}
                                  >
                                    {item?.startTime} - {item?.endTime}
                                  </h2>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="py-5">
                    <button
                      onClick={handleBooking}
                      type="button"
                      className=" text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px]"
                    >
                      শিক্ষক বুকিং করুন
                      <img src={right_arrow_btn} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-[10px] p-4">
                <div className="mb-3">
                  <h1 className="text-[20px] font-[600] leading-[28px] text-[#1D5276]">
                    অন্যান্য মেন্টর’স সমূহ
                  </h1>
                </div>
                <div className="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
                  {
                    [1, 2, 3].map((item, i) => (
                      <div className="w-full overflow-hidden border border-[#E3E5E8] rounded-[10px]">
                        <div className="">
                          <div className="p-4 flex items-center gap-4 bg-[#EBF4FA]">
                            <div className="relative">
                              <img
                                src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740"
                                alt=""
                                className="relative inline-flex items-center justify-center rounded-full w-[100px] bg-[#D9D9D9]"
                              />

                              <img
                                src={badge_green}
                                alt=""
                                className="absolute top-2 left-20 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white text-sm bg-white "
                              />
                            </div>
                            <div>
                              <h1 className="text-[#2E3138] text-[20px] font-[600] leading-[21px]">
                                Jobayer
                              </h1>
                              <div className="flex items-center gap-2">
                                <img src={star_yellow} alt="" />
                                <h1 className="text-[#2E3138] text-[18px] font-[500] leading-[21px]">
                                  4.8 (250 reviews)
                                </h1>
                              </div>
                              <h1 className="text-[#2E3138] text-[14px] font-[400] leading-[18px]">
                                Digital Marketing & eCom Site <br /> Development
                                Trainer
                              </h1>
                            </div>
                          </div>

                          <div className="p-3">
                            <div className="flex items-center justify-between pb-2 border-b-2">
                              <div>
                                <div className="flex items-center gap-1">
                                  <img src={train_experience} alt="" />
                                  <h1 className="text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                                    ট্রেইনিং এক্সপেরিয়েন্স
                                  </h1>
                                </div>
                                <h1 className="mt-1 text-[16px] font-[400] leading-[22px] text-[#1D5276]">
                                  ৮ বছর +
                                </h1>
                              </div>
                              <div>
                                <div className="flex items-center gap-1">
                                  <img src={total_student} alt="" />
                                  <h1 className="text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                                    স্টুডেন্ট সংখ্যা
                                  </h1>
                                </div>
                                <h1 className="mt-1 text-[16px] font-[400] leading-[22px] text-[#1D5276]">
                                  ৩৫০০+
                                </h1>
                              </div>
                            </div>
                            <div className="py-2">
                              <div className="flex items-center gap-1">
                                <img src={work_experience} alt="" />
                                <h1 className="mt-1 text-[16px] font-[600] leading-[22px] text-[#2E3138]">
                                  ওয়ার্ক এক্সপেরিয়েন্স
                                </h1>
                              </div>
                              <div className="flex items-center gap-1">
                                <img src={technology_icon} alt="" />
                                <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                                  ফাউন্ডার অফ Technocastles
                                </h1>
                              </div>
                              <div className="flex items-center gap-1">
                                <img
                                  className="w-[18px]"
                                  src={upWork_logo}
                                  alt=""
                                />
                                <h1 className="mt-1 text-[14px] font-[400] leading-[20px] text-[#1D5276]">
                                  আপওয়ার্ক টপ রেটেদ ফ্রিল্যান্সার
                                </h1>
                              </div>
                            </div>
                            <div className="">
                              <button
                                type="button"
                                className="w-full text-center font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-[8px]"
                              >
                                বুকিং শিক্ষক
                                <img src={right_arrow_btn} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default MentorBooking;
