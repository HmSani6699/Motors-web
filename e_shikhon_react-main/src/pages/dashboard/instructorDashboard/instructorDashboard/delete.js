// import React, { useState, useEffect } from "react";

// const ClassButton = () => {
//   const [buttonText, setButtonText] = useState("Join Class");

//   useEffect(() => {
//     const targetDate = new Date("2024-05-08T02:15:00");
//     const endTime = new Date("2024-05-08T02:30:00");

//     const updateButtonText = () => {
//       const currentDate = new Date();
//       if (currentDate >= targetDate && currentDate <= endTime) {
//         setButtonText("Close");
//       } else {
//         setButtonText("Join Class");
//       }
//     };

//     // Check immediately on component mount
//     updateButtonText();

//     // Set an interval to check every second
//     const intervalId = setInterval(updateButtonText, 1000);

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return <button>{buttonText}</button>;
// };

// export default ClassButton;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../layout/MainLayout";
import { del, get } from "../../../../api/axious";
import SuggLoading from "../../../../components/Common/SuggLoading";
import EditVideoCourse from "../../admin/Dashboard/ManageVideoCourse/EditVideoCourse";
import plus_white from "../../../../assets/svg/plus_white.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import video_camera_icon from "../../../../assets/svg/video-camera_white.svg";
import file_certificate_icon from "../../../../assets/svg/file-document-edit-outline_white.svg";
import delete_icon from "../../../../assets/svg/delete-sweep-outline_white.svg";
import timer_11_white from "../../../../assets/svg/av-timer.svg";
import user_group from "../../../../assets/svg/user-group.svg";
import layer_white from "../../../../assets/svg/layer_white.svg";

const CourseList = () => {
  const { user } = useContext(AuthContext);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(true);
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    fetchCourseList();
  }, []);

  const fetchCourseList = async () => {
    setLoading(true);
    try {
      const response = await get("/api/courses/by_admin");
      setCourseList(response?.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCourse = (data) => {
    setIsUpdate(!isUpdate);
    setSingleData(data);
  };

  const handleDeleteCourse = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await del(`api/courses/destroy/${id}`);
          if (response) {
            fetchCourseList();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
            });
          }
        } catch (error) {
          console.error("Error deleting course:", error);
        }
      }
    });
  };

  return (
    <div className="w-full max-w-[1015px] mx-auto px-[13px]">
      <div className="border-b pb-5 border-[#C7CAD1] flex flex-row items-center justify-between">
        <div className="flex items-center justify-center gap-2.5">
          {!isUpdate && (
            <img
              className="w-[25px] cursor-pointer"
              src={leftArrowIcon}
              onClick={() => setIsUpdate(!isUpdate)}
              alt="Back"
            />
          )}
          <h2 className="text-[36px] font-[600] text_black_gray leading-[40px]">
            কোর্স লিস্ট
          </h2>
        </div>

        {isUpdate && (
          <div>
            <Link to="/instructor/add-course">
              <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1">
                <img className="w-[20px]" src={plus_white} alt="Add" />
                New Course
              </button>
            </Link>
          </div>
        )}
      </div>

      {isUpdate ? (
        <div className="w-full overflow-x-auto px-2.5 rounded-[10px]">
          {loading ? (
            <div className="flex justify-center items-center h-full my-[200px]">
              <SuggLoading />
            </div>
          ) : (
            <div className="py-5 flex flex-col gap-10">
              {courseList
                ?.filter((course) => course?.courseCreator?.id === user?.id)
                ?.map((courseData, index) => (
                  <CourseItem
                    key={index}
                    courseData={courseData}
                    BASE_URL={BASE_URL}
                    handleUpdateCourse={handleUpdateCourse}
                    handleDeleteCourse={handleDeleteCourse}
                  />
                ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full overflow-x-auto py-5 px-2.5  mt-5">
          <EditVideoCourse singleData={singleData} setIsUpdate={setIsUpdate} />
        </div>
      )}
    </div>
  );
};

const CourseItem = ({
  courseData,
  BASE_URL,
  handleUpdateCourse,
  handleDeleteCourse,
}) => (
  <div className="flex flex-row">
    <div className="w-[356px] h-[220px]">
      <img
        className="h-full w-full object-fit rounded-s-[10px]"
        src={`${BASE_URL}${courseData?.thumbLinePicPath.path}`}
        alt={courseData?.courseTitle}
      />
    </div>
    <div className="w-[625px] h-[220px] p-4 bg-[#0A1D29] rounded-e-[10px]">
      <div className="px-2 py-1.5 flex flex-row justify-between border border-[#5D636F] rounded-[20px]">
        <InfoItem icon={video_camera_icon} text="Video Course" />
        <InfoItem icon={timer_11_white} text="Duration" />
        <InfoItem icon={user_group} text="Enroll" />
        <InfoItem icon={layer_white} text="Batch" />
      </div>
      <div className="py-1 mt-1">
        <h2 className="text-[18px] font-[600] text-white leading-[28px]">
          {courseData?.courseTitle}
        </h2>
      </div>
      <div className="flex items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-2">
          <StatusBadge status={courseData?.status} />
          <div className="flex flex-row gap-2.5">
            <Price
              original={courseData?.regularPrice}
              sale={courseData?.sellPrice}
            />
          </div>
          <ActionButtons
            courseData={courseData}
            handleUpdateCourse={handleUpdateCourse}
            handleDeleteCourse={handleDeleteCourse}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button text="Resource" className="primary_green" />
          <Button text="Quiz" className="bg-[#1E567B]" />
          <Button text="Assignment" className="bg-[#C47F08]" />
        </div>
      </div>
    </div>
  </div>
);

const InfoItem = ({ icon, text }) => (
  <div className="flex flex-row gap-1.5">
    <img src={icon} alt={text} />
    <h1 className="text-[#C7CAD1] text-[14px] font-[400]">{text}</h1>
  </div>
);

const StatusBadge = ({ status }) => {
  const statusClasses = {
    approved: "text-green-500 bg-green-100",
    rejected: "text-red-500 bg-red-100",
    hold: "text-blue-400 bg-blue-100",
    lock: "text-cyan-400 bg-cyan-100",
    pending: "text-orange-400 bg-orange-100",
  };

  return (
    <div
      className={`text-center py-2.5 text-[16px] font-[500] rounded-[8px] ${
        statusClasses[status] || "bg-gray-100"
      }`}
    >
      {status?.charAt(0)?.toUpperCase() + status?.slice(1).toLowerCase() ||
        "N/A"}
    </div>
  );
};

const Price = ({ original, sale }) => (
  <>
    <h2 className="text-[16px] font-[500] text-[#9096A2] leading-[22px]">
      ৳ <strike>{original} </strike>
    </h2>
    <h2 className="text-[16px] font-[500] text-[#53DFC3] leading-[22px]">
      ৳ {sale}
    </h2>
  </>
);

const ActionButtons = ({
  courseData,
  handleUpdateCourse,
  handleDeleteCourse,
}) => (
  <div className="flex items-center gap-[30px]">
    {courseData?.status !== "lock" && (
      <>
        <Button
          text="Edit"
          icon={file_certificate_icon}
          onClick={() => handleUpdateCourse(courseData)}
        />
        <Button
          text="Delete"
          icon={delete_icon}
          onClick={() => handleDeleteCourse(courseData?.id)}
        />
      </>
    )}
  </div>
);

const Button = ({ text, icon, className, onClick }) => (
  <button onClick={onClick} className={`flex flex-row gap-1.5 ${className}`}>
    {icon && <img src={icon} alt={text} />}
    <h2 className="text-[14px] font-[400] text-[#FFF] leading-[22px]">
      {text}
    </h2>
  </button>
);

export default CourseList;
