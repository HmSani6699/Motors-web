import React, { useContext, useEffect, useState } from "react";
import plus_white from "../../../../assets/svg/plus_white.svg";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import { Link } from "react-router-dom";
import { del, get, post } from "../../../../api/axious";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../layout/MainLayout";
import DateTimePicker from "react-datetime-picker";
// import moment from "moment-timezone";
import TimePicker from "react-time-picker";
import SlotUpdateModal from "./SlotUpdateModal";

const BookingList = () => {
  const [isOpen, setIsOpen] = useState("স্লট_লিস্ট");
  const [newSlotOpen, setNewSlotOpen] = useState(false);
  const [newTopicOpen, setNewTopicOpen] = useState(false);
  const [slotDate, setSlotDate] = useState("");
  // const [startTime, setStartTime] = useState(new Date());
  // const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [loading, setLoading] = useState(false);
  const [slots, setAllSlotList] = useState([]);
  const [topics, setAllTopics] = useState([]);
  const [bookings, setAllBookings] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [topicError, setTopicError] = useState("");
  const { user, logout } = useContext(AuthContext);
  const [slotUpdateModalOpen, setslotUpdateModalOpen] = useState(false);
  const [singleSlot, setSingleSlot] = useState();
  const [formErrors, setFormErrors] = useState({
    date: "",
    start_time: "",
    end_time: "",
  });
  const [buttonText, setButtonText] = useState("Join Class");

  const validateForm = () => {
    let isValid = true;
    const errors = {
      date: "",
      start_time: "",
      end_time: "",
    };

    if (!slotDate) {
      isValid = false;
      errors.date = "Date is required.";
    }
    if (!startTime) {
      isValid = false;
      errors.start_time = "Start time is required.";
    }
    if (!endTime) {
      isValid = false;
      errors.end_time = "End time is required.";
    }
    setFormErrors(errors);
    return isValid;
  };

  // ==============================================================//
  // Function to format time
  // const formatTime = (time) => {
  //   let [hours, minutes] = time.split(":");
  //   hours = parseInt(hours);
  //   let period = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
  //   return `${hours}:${minutes} ${period}`;
  // };

  // const handleChange = (e) => {
  //   const time = e.target.value;
  //   setEndTime(time);
  // };

  // let [currentTime, setCurrentTime] = useState();
  // let [currentDate, setCurrentDate] = useState();

  // useEffect(() => {
  //   const getCurrentTime = () => {
  //     const now = new Date();
  //     const hours = String(now.getHours()).padStart(2, "0");
  //     const minutes = String(now.getMinutes()).padStart(2, "0");
  //     setCurrentTime(formatTime(`${hours}:${minutes}`));
  //     setCurrentDate(new Date());
  //     return `${hours}:${minutes}`;
  //   };
  //   getCurrentTime();
  // }, []);

  // console.log(currentDate, currentTime);

  // ===================================================================//

  useEffect(() => {
    if (user?.id) {
      fetchAllSlot(user?.id);
      fetchAllTopic(user?.id);
      fetchAllBooking(user?.id);
    }
  }, [user?.id]);

  // =======> slot created and get  function <=======//
  const handleAddNewSlot = async (id) => {
    if (!validateForm()) {
      return;
    }

    const formData = {
      instructor_id: user?.id,
      date: slotDate,
      start_time: startTime,
      end_time: endTime,
    };

    console.log(formData);

    setLoading(true);

    try {
      const res = await post("api/slot/create-slot", formData);
      console.log(res);
      if (!res?.error) {
        setLoading(false);
        setSlotDate("");
        setStartTime("");
        setEndTime("");
        if (id) {
          fetchAllSlot(id);
        }
        setNewSlotOpen(false);
        toast.success("Slot create successfully");
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.error
          ? error?.response?.data?.error
          : "Faild to solt create"
      );
      console.log("Faild to Login/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllSlot = async (id) => {
    const payload = { instructor_id: id };

    try {
      const res = await post("/api/slot", payload);
      console.log(res, "res");
      console.log(payload);
      if (!res.error) {
        setAllSlotList(res);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // =====> Slote Delete <======//
  const handleSloteDelete = async (id) => {
    try {
      const res = await del(`api/slot/delete-slots/${id}`);
      console.log(res);
      if (res?.message) {
        toast.success(res?.message);
        if (user?.id) {
          fetchAllSlot(user?.id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Topic create and get function
  const handleAddNewTopic = async (id) => {
    if (!topicName) {
      setTopicError("Topic name is required.");
      return;
    }

    const formData = {
      instructor_id: id,
      topic_name: topicName,
    };

    setLoading(true);

    try {
      const res = await post("api/instructorTopic/createTopic", formData);
      console.log(res);
      if (!res?.error) {
        setLoading(false);
        setTopicName("");
        if (id) {
          fetchAllTopic(id);
        }
        setNewTopicOpen(false);
        toast.success("Topic create successfully");
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.error
          ? error?.response?.data?.error
          : "Failed to Topic create"
      );
      console.log("Faild to Login/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllTopic = async (id) => {
    try {
      const res = await post("/api/instructorTopic/allTopics", {
        instructor_id: id,
      });
      console.log(res[0]?.topic_name, "res");
      if (!res.error) {
        setAllTopics(res);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // booking create and get function
  const fetchAllBooking = async (id) => {
    try {
      const res = await post("/api/booking/getBookingsForInstructor", {
        instructor_id: id,
      });
      console.log(res, "res");
      if (!res.error) {
        setAllBookings(res);
        res?.map((item) => {
          handleJoinClass(
            item?.slot?.date?.slice(0, 10),
            item?.slot?.start_time,
            item?.slot?.end_time
          );
        });
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // Join cass and close class
  const handleJoinClass = (date, startT, endT) => {
    // console.log(date, startT, endT);

    const targetDate = new Date(`${date}T${startT}:00`);
    const endTime = new Date(`${date}T${endT}:00`);
    const currentDate = new Date();

    // console.log(targetDate, endTime);
    // console.log(currentDate);

    // if (targetDate >= currentDate) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }

    if (currentDate < endTime) {
      console.log(true);
    } else {
      console.log(false);
    }

    if (currentDate >= targetDate && currentDate <= endTime) {
      setButtonText("Join Class");
    } else {
      setButtonText("Close");
    }
  };

  // const [moment, setMoment] = useState(null);

  // useEffect(() => {
  //   import("moment-timezone").then((mod) => {
  //     setMoment(mod.default);
  //   });
  // }, []);

  // const handleTimeChange = (date) => {
  //   if (moment) {
  //     const bstTime = moment(date).tz("Asia/Dhaka");
  //     setStartTime(bstTime.toDate());
  //   }
  // };

  console.log(endTime, startTime, slotDate);

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[25px] bg-[#ffff] py-[35px] mb-[50px] rounded-lg">
        <div className="border-b border-[#C7CAD1]">
          <div className="mb-[20px] flex gap-4">
            <button
              onClick={() => {
                setIsOpen("স্লট_লিস্ট");
                setNewSlotOpen(false);
              }}
              className={`px-[15px] py-[4px] rounded-[20px]  ${
                isOpen === "স্লট_লিস্ট"
                  ? "primary_green text-white"
                  : "bg-[#E3E5E8]"
              } text-[18px] font-[400] text-black`}
            >
              স্লট লিস্ট
            </button>
            <button
              onClick={() => {
                setIsOpen("টপিক_লিস্ট");
                setNewTopicOpen(false);
              }}
              className={`px-[15px] py-[4px] rounded-[20px]  ${
                isOpen === "টপিক_লিস্ট"
                  ? "primary_green  text-white"
                  : "bg-[#E3E5E8]"
              } text-[18px] font-[400] text-black `}
            >
              টপিক লিস্ট
            </button>
            <button
              onClick={() => setIsOpen("বুকিং_লিস্ট")}
              className={`px-[15px] py-[4px] rounded-[20px]  ${
                isOpen === "বুকিং_লিস্ট"
                  ? "primary_green  text-white"
                  : "bg-[#E3E5E8]"
              } text-[18px] font-[400] text-black `}
            >
              বুকিং লিস্ট
            </button>
          </div>
        </div>

        {/* courrent display element */}

        {isOpen === "স্লট_লিস্ট" ? (
          <>
            <div className="flex justify-end py-5">
              {!newSlotOpen && (
                <button
                  onClick={() => setNewSlotOpen(!newSlotOpen)}
                  className="primary_green py-2 px-5 rounded-[5px] text-white flex flex-row"
                >
                  <img src={plus_white} alt="" />
                  New Slot
                </button>
              )}
            </div>
            {!newSlotOpen ? (
              <div className="w-full overflow-x-auto">
                <table
                  className="w-full bg-white rounded-[10px] text-left border-collapse w-overflow-x-auto "
                  cellSpacing="0"
                >
                  <tbody>
                    <tr className="bg-[#E3E5E8] ">
                      <th
                        scope="col"
                        className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] rounded-ss-[10px]"
                      >
                        ID No
                      </th>
                      <th
                        scope="col"
                        className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Slot Date
                      </th>
                      <th
                        scope="col"
                        className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Start Time
                      </th>
                      <th
                        scope="col"
                        className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        End Time
                      </th>
                      <th
                        scope="col"
                        className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] rounded-se-[10px]"
                      >
                        Action
                      </th>
                    </tr>

                    {slots?.length > 0 &&
                      slots?.map((slot, i) => (
                        <tr className="border-b border-[#C7CAD1]">
                          <td className="h-12 ps-2.5 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {i + 1}
                            </h1>
                          </td>
                          <td className="h-12 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {slot?.date.slice(0, 10)}
                            </h1>
                          </td>
                          <td className="h-12 py-2">
                            <h1 className="second_text_color text-[16px] font-[500]">
                              {slot?.start_time}
                            </h1>
                          </td>
                          <td className="h-12 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {slot?.end_time}
                            </h1>
                          </td>
                          <td className="h-10 py-2">
                            <div className="flex flex-row gap-2.5">
                              <button
                                onClick={() =>
                                  // handleSlotUpdateDefaultValue(slot)
                                  {
                                    setSingleSlot(slot);
                                    setslotUpdateModalOpen(true);
                                  }
                                }
                              >
                                <img src={file_edit} alt="" />
                              </button>
                              <button
                                onClick={() => handleSloteDelete(slot?.id)}
                              >
                                <img src={delete_red} alt="" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2.5 w-full">
                    <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                      Slot Date
                    </h2>
                    <div className="">
                      <input
                        value={slotDate}
                        defaultValue={slotDate}
                        onChange={(e) => setSlotDate(e.target.value)}
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        type="date"
                        placeholder="Slot Date"
                      />
                      {formErrors.date && (
                        <p className="text-red-500 text-sm mt-1 ml-[15px]">
                          {formErrors.date}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* start time */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                      Start Time
                    </h2>
                    <div className="">
                      <input
                        value={startTime}
                        defaultValue={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        type="time"
                        placeholder="Start Time"
                      />
                      {formErrors.start_time && (
                        <p className="text-red-500 text-sm mt-1 ml-[15px]">
                          {formErrors.start_time}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* end time */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                      End Time
                    </h2>
                    <div className="">
                      <input
                        value={endTime}
                        defaultValue={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        type="time"
                        placeholder="End Time"
                      />
                      {formErrors.end_time && (
                        <p className="text-red-500 text-sm mt-1 ml-[15px]">
                          {formErrors.end_time}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end py-5">
                  <button
                    onClick={() => handleAddNewSlot(user?.id)}
                    className="primary_green py-2 px-5 rounded-[5px] text-white mt-[10px]"
                  >
                    {/* <img src={plus_white} alt="" /> */}
                    Submit
                  </button>
                </div>
              </div>
            )}
          </>
        ) : isOpen === "টপিক_লিস্ট" ? (
          <>
            <div className="flex justify-end py-5">
              {!newTopicOpen && (
                <button
                  onClick={() => setNewTopicOpen(!newTopicOpen)}
                  className="primary_green py-2 px-5 rounded-[5px] text-white flex flex-row"
                >
                  <img src={plus_white} alt="" />
                  New Topic
                </button>
              )}
            </div>
            {!newTopicOpen ? (
              <div className="w-full overflow-x-auto">
                <table
                  className="w-full bg-white rounded-[10px] text-left border-collapse w-overflow-x-auto "
                  cellSpacing="0"
                >
                  <tbody>
                    <tr className="bg-[#E3E5E8] ">
                      <th
                        scope="col"
                        className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] rounded-ss-[10px]"
                      >
                        ID No
                      </th>
                      <th
                        scope="col"
                        className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Topic Name
                      </th>
                      <th
                        scope="col"
                        className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] rounded-se-[10px]"
                      >
                        Action
                      </th>
                    </tr>

                    {topics?.length > 0 &&
                      topics?.map((item, i) => (
                        <tr className="border-b border-[#C7CAD1]">
                          <td className="h-12 ps-2.5 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {i + 1}
                            </h1>
                          </td>
                          <td className="h-12 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {item?.topic_name}
                            </h1>
                          </td>
                          <td className="h-10 py-2">
                            <div className="flex flex-row gap-2.5">
                              <Link>
                                <img src={file_edit} alt="" />
                              </Link>
                              <button>
                                <img src={delete_red} alt="" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <div className="flex flex-col gap-2.5 w-full">
                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                    Topic Name
                  </h2>
                  <div className="w-full ">
                    <input
                      value={topicName}
                      onChange={(e) => setTopicName(e.target.value)}
                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                      type="taxt"
                      placeholder="Topic Name"
                    />
                    {topicError && (
                      <p className="text-red-500 text-sm mt-1 ml-[15px]">
                        {topicError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end py-5">
                  <button
                    onClick={() => handleAddNewTopic(user?.id)}
                    className="primary_green py-2 px-5 rounded-[5px] text-white mt-[10px]"
                  >
                    {/* <img src={plus_white} alt="" /> */}
                    Submit
                  </button>
                </div>
              </div>
            )}
          </>
        ) : isOpen === "বুকিং_লিস্ট" ? (
          <>
            <div className="flex justify-end py-5">
              <button className="primary_green py-2 px-5 rounded-[5px] text-white flex flex-row">
                <img src={plus_white} alt="" />
                New Booking
              </button>
            </div>
            {/*  */}
            <div className="w-full overflow-x-auto">
              <table
                className="w-full bg-white rounded-[10px] text-left border-collapse w-overflow-x-auto "
                cellSpacing="0"
              >
                <tbody>
                  <tr className="bg-[#E3E5E8] ">
                    <th
                      scope="col"
                      className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] rounded-ss-[10px]"
                    >
                      ID
                    </th>

                    <th
                      scope="col"
                      className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Student Name
                    </th>
                    <th
                      scope="col"
                      className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Phone No.
                    </th>
                    <th
                      scope="col"
                      className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Booking Date
                    </th>
                    <th
                      scope="col"
                      className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Topic
                    </th>
                    <th
                      scope="col"
                      className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] rounded-se-[10px]"
                    >
                      Action
                    </th>
                  </tr>

                  {bookings?.length > 0 &&
                    bookings?.map((booking, i) => (
                      <tr className="border-b border-[#C7CAD1]">
                        <td className="h-12 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {i + 1}
                          </h1>
                        </td>
                        <td className="h-12 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {booking?.user?.fullName}
                          </h1>
                        </td>
                        <td className="h-12 py-2">
                          <div>
                            <h1 className="text-[#2E3138] text-[18px] font-[600] leading-[22px]">
                              {booking?.user?.phone_number}
                            </h1>
                          </div>
                        </td>
                        <td className="h-12 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {booking?.slot?.date?.slice(0, 10)}
                          </h1>
                        </td>
                        <td className="h-12 py-2">
                          <h1 className="second_text_color text-[16px] font-[500]">
                            {booking?.slot?.start_time} -
                            {booking?.slot?.end_time}
                          </h1>
                        </td>
                        <td className="h-12 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {booking?.topic?.topic_name}
                          </h1>
                        </td>
                        <td className="h-12 py-2">
                          <div className="flex flex-row gap-2.5">
                            <Link
                              to={`${booking?.slot?.instructor_link}`}
                              target="_blank"
                            >
                              <button className="px-4 py-[8px] bg-[#20AC90] rounded-[5px] text-white">
                                জয়েন ক্লাস
                              </button>
                            </Link>

                            {/* {handleJoinClass(
                              booking?.slot?.date?.slice(0, 10),
                              booking?.slot?.start_time,
                              booking?.slot?.end_time
                            )} */}

                            {/* {buttonText} */}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}

        {/* =====> Slot update modal <===== */}
        {slotUpdateModalOpen && (
          <SlotUpdateModal
            data={singleSlot}
            user={user}
            setslotUpdateModalOpen={setslotUpdateModalOpen}
            fetchAllSlot={fetchAllSlot}
            endTime={endTime}
            setEndTime={setEndTime}
            startTime={startTime}
            setStartTime={setStartTime}
            slotDate={slotDate}
            setSlotDate={setSlotDate}
          />
        )}
      </div>
    </>
  );
};

export default BookingList;
