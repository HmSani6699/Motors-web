import React, { useCallback, useState } from "react";
import comment from "../../assets/svg/comment-question_green.svg";
import plus_white from "../../assets/svg/plus_white.svg";
import quiz_icon from "../../assets/svg/quiz.svg";
// import quiz_icon from "../../assets/svg/as";
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import CurriculumInput from "./CurriculumInput";
import { transformCurriculum } from "../../api/helper";
import ViewEditModal from "./ViewEditModal";

const CorseCurriculum = ({ setPage, next, course, setCourse, btnHide }) => {
  const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);

  // console.log(transformCurriculum(course));
  // console.log(course);

  const handleClickSection = () => {
    setCourse((pre) =>
      pre
        ? [...pre, { section: "", type: "section" }]
        : [{ section: "", type: "section" }]
    );
  };
  const handleClickUnit = () => {
    setCourse((pre) =>
      pre
        ? [...pre, { unit: "", type: "unit", id: "" }]
        : [{ unit: "", type: "unit", id: "" }]
    );
  };
  const handleClickQuiz = () => {
    setCourse((pre) =>
      pre
        ? [...pre, { quiz: "", type: "quiz", id: "" }]
        : [{ quiz: "", type: "quiz", id: "" }]
    );
  };
  const handleClickAssignment = () => {
    setCourse((pre) =>
      pre
        ? [...pre, { assignment: "", type: "assignment", id: "" }]
        : [{ assignment: "", type: "assignment", id: "" }]
    );
  };

  const handleDelete = (index) => {
    setCourse((prevCourse) => {
      const updatedCourse = prevCourse.filter((_, i) => i !== index);
      return updatedCourse;
    });
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;

    setCourse((prevCourse) => {
      const updatedCourse = prevCourse.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return updatedCourse;
    });
  };

  const handleDragStart = (index) => {
    setDraggedTaskIndex(index);
  };

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event, index) => {
      event.preventDefault();
      if (draggedTaskIndex !== null && draggedTaskIndex !== index) {
        const newItems = [...course];
        const [removed] = newItems.splice(draggedTaskIndex, 1);
        const insertIndex = draggedTaskIndex < index ? index : index + 1;
        newItems.splice(insertIndex, 0, removed);
        setCourse(newItems);
      }
      setDraggedTaskIndex(null);
    },
    [draggedTaskIndex, course]
  );

  const handleEdit = (data, type) => {
    // console.log(data, type, "========>");
    setModal(true);
    setData(data);
  };
  const handleView = (data, type) => {
    // console.log(data, type, "========>");
    setModal(true);
    setData(data);
  };

  // console.log(transformCurriculum(course));

  return (
    <>
      <div>
        <div className="py-5 px-2">
          <div className="flex flex-row gap-2 ">
            <img src={comment} alt="" />
            <h2 className="text-[24px] font-[700] text_black_gray leading-[32px] ">
              Course Curriculum
            </h2>
          </div>

          <div className={`mb-5 ${btnHide ? 'pointer-events-none' : ''}`}>
            {course &&
              course.map((data, i) => (
                <CurriculumInput
                  key={i}
                  i={i}
                  data={data}
                  handleInputChange={handleInputChange}
                  handleDelete={handleDelete}
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  btnHide={btnHide}
                  handleView={handleView}
                  handleEdit={handleEdit}
                />
              ))}
          </div>

          {btnHide ? (
            ""
          ) : (
            <div className="relative mx-auto ">
              <div className="mb-5 flex justify-center gap-4 mt-5">
                <button
                  onClick={handleClickSection}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Section
                </button>
                <button
                  onClick={handleClickUnit}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Unit
                </button>
                <button
                  onClick={handleClickQuiz}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img className="w-[25px]" src={quiz_icon} alt="" />
                  Add Quiz
                </button>
                <button
                  onClick={handleClickAssignment}
                  className="px-3 py-2 rounded-[4px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center"
                >
                  <img src={plus_white} alt="" />
                  Add Assignment
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2] ">
            <Link to="/manageCourse2">
              {btnHide ? '' : <button className="px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]">
                Cancel
              </button>}
            </Link>

          { btnHide ?  <button
              onClick={() => {
                setPage("Instructor");
                next();
              }}
              className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
             Next
              <img className="w-[12px]" src={right_arrow} alt="" />
            </button> :
            <button
              onClick={() => {
                setPage("Instructor");
                next();
              }}
              className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
              Save and Next
              <img className="w-[12px]" src={right_arrow} alt="" />
            </button>}
          </div>
        </div>
      </div>
      {modal && (
        <ViewEditModal
          unitViewData={data}
          unitViewModal={modal}
          setUnitViewModal={setModal}
        />
      )}
    </>
  );
};

export default CorseCurriculum;
