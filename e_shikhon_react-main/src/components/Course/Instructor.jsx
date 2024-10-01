import React, { useEffect, useState } from "react";
import mentor_icon from "../../assets/images/mentor-icon.png";
import down_arrow from "../../assets/svg/down_arrow.svg";
import plus_green from "../../assets/svg/plus_Blue_Sapphire.svg";
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { get } from "../../api/axious";

const Instructor = ({ setPage, next, instructor, setInstructor,btnHide }) => {
  const [instructorData, setInstructorData] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await get("api/auth/all_users?role=Instructor");
      if (response?.data) {
        setInstructorData(response?.data);
      }
    } catch (error) {
      console.log("Error fetching instructors:", error);
    }
  };

  const handleAddInstructor = () => {
    setInstructor([
      ...instructor,
      {
        teacherName: "",
        teacherCategory: "",
      },
    ]);
  };

  const handleRemoveInstructor = (index) => {
    setInstructor((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  };

  const handleTeacherNameChange = (e, index) => {
    const { value } = e.target;
    setInstructor((prev) => {
      const updatedInstructor = [...prev];
      updatedInstructor[index].teacherName = value;
      return updatedInstructor;
    });
  };

  const handleTeacherCategoryChange = (e, index) => {
    const { value } = e.target;
    setInstructor((prev) => {
      const updatedInstructor = [...prev];
      updatedInstructor[index].teacherCategory = value;
      return updatedInstructor;
    });
  };

  return (
    <div className="py-5 px-2">
      <div className="flex items-center gap-2">
        <div className="bg-slate-300 rounded-[5px]">
          <img className="w-[24px]" src={mentor_icon} alt="mentor icon" />
        </div>
        <h2 className="text-[24px] font-[700] text_black_gray leading-[32px]">
          Instructor
        </h2>
      </div>
      <div className={`flex flex-col gap-2.5 py-3 ${btnHide ? 'pointer-events-none' : ''}`}>
        {instructor?.map((value, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row w-full gap-4">
              <div className="w-full relative">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Instructor Name
                </label>
                <select
                  value={value.teacherName}
                  onChange={(e) => handleTeacherNameChange(e, i)}
                  className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                >
                  <option value="">Please select</option>
                  {instructorData?.map((data, index) => (
                    <option key={index} value={data.id}>
                      {data.fullName}
                    </option>
                  ))}
                </select>
                <img
                  src={down_arrow}
                  alt="down arrow"
                  className="absolute top-[50px] right-2 transform -translate-y-1/2"
                />
              </div>

              <div className="w-full relative">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Instructor Category
                </label>
                <select
                  value={value.teacherCategory}
                  onChange={(e) => handleTeacherCategoryChange(e, i)}
                  className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                >
                  <option value="">Please select</option>
                  <option value="Lead instructor">Lead instructor</option>
                  <option value="Support instructor">Support instructor</option>
                </select>
                <img
                  src={down_arrow}
                  alt="down arrow"
                  className="absolute top-[50px] right-2 transform -translate-y-1/2"
                />
              </div>
            </div>

            {i !== 0 && (
              <div className="flex justify-start">
               {btnHide ? '' : <button
                  type="button"
                  onClick={() => handleRemoveInstructor(i)}
                  className="flex items-center gap-1 text-[16px] font-[500] leading-[20px] text-red-600"
                >
                  - Remove
                </button>}
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="flex justify-end mt-1">
          {btnHide ? '' : <button
            onClick={handleAddInstructor}
            className="flex items-center gap-1 second_text_color text-[16px] font-[400] leading-[20px]"
          >
            <img src={plus_green} alt="plus icon" />
            Add Instructor
          </button>}
        </div>
      </div>
      <div className="flex gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
        <Link to="/manageCourse4">
        { btnHide ? '' : <button className="px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]">
              Cancel
            </button>}
        </Link>

        { btnHide ? <button
          onClick={() => {
            setPage("FAQ");
            next();
          }}
          className="px-3 py-2 rounded-[8px] text-[16px] font-[500] leading-[24px] text-white primary_green flex items-center gap-2"
        >
          Next
          <img className="w-[12px]" src={right_arrow} alt="right arrow" />
        </button> :
        <button
          onClick={() => {
            setPage("FAQ");
            next();
          }}
          className="px-3 py-2 rounded-[8px] text-[16px] font-[500] leading-[24px] text-white primary_green flex items-center gap-2"
        >
          Save and Next
          <img className="w-[12px]" src={right_arrow} alt="right arrow" />
        </button>}
      </div>
    </div>
  );
};

export default Instructor;
