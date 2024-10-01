import React, { useEffect, useState } from "react";
import plus_green from "../../assets/svg/plus_Blue_Sapphire.svg";
import comment from "../../assets/svg/comment-question_green.svg";
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SelectInput from "../inputField/SelectInput";
import InputField from "../inputField/InputField";
import ToggleButton from "../inputField/ToggleButton";
import SelectInputTow from "../inputField/SelectInputTow";
import { get } from "../../api/axious";
import AddAboutCourse from "./AddAboutCourse";
import { RxCrossCircled } from "react-icons/rx";
import { MdAddCircle } from "react-icons/md";
import { URL } from "../../constants/Url";

const CourseOverview = ({
  setPage,
  next,
  category,
  setCategory,
  title,
  setTitle,
  courseType,
  setCourseType,
  language,
  setLanguage,
  level,
  setLevel,
  starDate,
  setStarDate,
  duration,
  setDuration,
  courseDurationParameter,
  setCourseDurationParameter,
  maximumStudents,
  setMaximumStudents,
  shortTitle,
  setShortTitle,
  paid,
  setPaid,
  regularPrice,
  setRegularPrice,
  sellPrice,
  setSellPrice,
  certificate,
  setCertificate,
  badge,
  setBadge,
  support,
  setSupport,
  courseDescription,
  setCourseDescription,
  about_course,
  setAbout_course,
  whatWillBeTaught,
  setWhatWillBeTaught,
  isFirstSectionFree,
  setIsFirstSectionFree,
  isAutoEvaluationEnabled,
  setIsAutoEvaluationEnabled,
  isUnitContentVisible,
  setIsUnitContentVisible,
  isUnitCompletionLocked,
  setIsUnitCompletionLocked,
  isCourseButtonHidden,
  setIsCourseButtonHidden,
  isCourseProgressDisplayed,
  setIsCourseProgressDisplayed,
  isTimeBasedProgressEnabled,
  setIsTimeBasedProgressEnabled,
  isReviewsEnabled,
  setIsReviewsEnabled,
  isBatchEnrollmentForced,
  setIsBatchEnrollmentForced,
  isSectionDripFeed,
  setIsSectionDripFeed,
  btnHide,
}) => {
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleAddAboutCourse = () => {
    setAbout_course([
      ...about_course,
      {
        title: "",
        answer: "",
      },
    ]);
  };

  const handleRemoveAboutCourse = (index) => {
    setAbout_course((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  };

  const fetchCategory = async () => {
    try {
      const response = await get(URL.COURSE_CATEGORY.GET);
      if (response?.data) {
        setCategoryData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  var toolbarOptions = [
    ["bold", "underline", "clean"],
    [{ font: [] }],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "video"],
    ["code-block", "blockquote", "image"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  // ---------------------

  const handleDelete = (index) => {
    setWhatWillBeTaught((prevTopic) => {
      const updatedTopic = prevTopic.filter((_, i) => i !== index);
      return updatedTopic;
    });
  };

  const handleAddTopics = () => {
    setWhatWillBeTaught((add) => [...add, ""]);
  };

  return (
    <>
      <div>
        {/*  */}
        <div className="py-5 px-2">
          <div>
            <h2 className="text-[24px] font-[700] text_black_gray leading-[32px] mb-4">
              Course Details
            </h2>
          </div>

          <div className={`flex flex-col gap-5 ${btnHide ? 'pointer-events-none' : ''}`}>
            <div className="flex flex-row w-full gap-14">
              <SelectInputTow
                value={category}
                setValue={setCategory}
                courseOverview={true}
                title="Course Category"
                options={categoryData}
              />
              <InputField
                value={title}
                setValue={setTitle}
                title="Course Title"
              />
            </div>

            <div>
              <div className="w-full relative">
                <label
                  htmlFor="HeadlineAct"
                  className="text-[16px] font-[400] leading-[22px] mb-3"
                >
                  Course Description
                </label>

                <ReactQuill
                  modules={module}
                  theme="snow"
                  value={courseDescription}
                  onChange={setCourseDescription}
                  className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                />
              </div>
            </div>

            <div>
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  What will be taught in the course?
                </label>
                {whatWillBeTaught.map((data, i) => (
                  <div key={i} className="w-full flex items-center gap-2">
                    <input
                      type="text"
                      name="unit"
                      value={data}
                      onChange={(event) => {
                        const newValue = event.target.value;
                        setWhatWillBeTaught((prevTopic) => {
                          const updatedTopic = [...prevTopic];
                          updatedTopic[i] = newValue;
                          return updatedTopic;
                        });
                      }}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      placeholder={`Enter topic name`}
                    />
                    {btnHide ? (
                      ""
                    ) : (
                      <div className="text-[18px] font-bold mt-2">
                        {i !== 0 && (
                          <RxCrossCircled
                            onClick={() => handleDelete(i)}
                            className="text-red-600 cursor-pointer"
                          />
                        )}
                        {i !== 100 && (
                          <MdAddCircle
                            onClick={handleAddTopics}
                            className="text-green-500 cursor-pointer"
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <SelectInput
                value={courseType}
                setValue={setCourseType}
                title="Course Type"
                options={[
                  { id: 1, value: "অনলাইন" },
                  { id: 2, value: "অফলাইন" },
                  { id: 3, value: "ভিডিও কোর্স" },
                ]}
              />
              <SelectInput
                value={language}
                setValue={setLanguage}
                title="Language"
                options={[
                  { id: 1, value: "বাংলা" },
                  { id: 1, value: "English" },
                  { id: 1, value: "हिन्दी" },
                ]}
              />
              <SelectInput
                value={level}
                setValue={setLevel}
                title="Level"
                options={[
                  { id: 1, value: "বিগিনার লেভেল" },
                  { id: 1, value: "ইন্টারমিডিয়েট লেভেল" },
                  { id: 1, value: "এ্যাডভান্সড লেভেল" },
                ]}
              />
              <InputField
                value={starDate}
                setValue={setStarDate}
                title="Course Start Date"
                type="date"
              />
              <InputField
                value={duration}
                setValue={setDuration}
                type="number"
                title="Total Duration of Course"
              />
              <SelectInput
                value={courseDurationParameter}
                setValue={setCourseDurationParameter}
                title="Course Duration Parameter"
                options={[
                  { id: 1, value: "Second" },
                  { id: 2, value: "Minute" },
                  { id: 3, value: "Day" },
                  { id: 3, value: "Weak" },
                  { id: 4, value: "Month" },
                  { id: 5, value: "Year" },
                ]}
              />
              {/* <InputField
                value={capacity}
                setValue={setCapacity}
                title="Student Capacity"
                type="number"
              /> */}
              {/* <InputField
                value={classTime}
                setValue={setClassTime}
                title="Class Time"
                type="number"
              /> */}
              {/* <InputField
                value={classDuration}
                setValue={setClassDuration}
                title="Class Duration"
                type="number"
              /> */}
              {/* <InputField
                value={classDays}
                setValue={setClassDays}
                title="Class Days"
                type="number"
              /> */}
              <InputField
                value={shortTitle}
                setValue={setShortTitle}
                title="Short Title"
                type="text"
              />
              <div>
                <h1>Price Section</h1>
                <div className="flex flex-row gap-2.5 ">
                  <InputField
                    value={regularPrice}
                    setValue={setRegularPrice}
                    placeholder="Regular price"
                    type="number"
                  />
                  <InputField
                    value={sellPrice}
                    setValue={setSellPrice}
                    placeholder="Sell price"
                    type="number"
                  />
                </div>
              </div>
              <InputField
                value={maximumStudents}
                setValue={setMaximumStudents}
                title="Maximum Students"
                type="number"
              />
            </div>

            <div className="flex flex-row items-center gap-2">
              <img src={comment} alt="" />
              <h2 className="text-[20px] font-[600] text_black_gray leading-[32px]">
                About Course (FAQ)
              </h2>
            </div>

            <div>
              <div className="w-full relative">
                {about_course.map((value, i) => (
                  <AddAboutCourse
                    key={i}
                    index={i}
                    value={value}
                    setValue={setAbout_course}
                    handleRemoveAboutCourse={handleRemoveAboutCourse}
                    btnHide={btnHide}
                  />
                ))}

                {btnHide ? (
                  ""
                ) : (
                  <div className="flex justify-start mt-3">
                    <button
                      type="button"
                      onClick={handleAddAboutCourse}
                      className="flex flex-row gap-1 items-center second_text_color text-[16px] font-[500] leading-[20px]"
                    >
                      <img src={plus_green} alt="" />
                      Add
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full pb-5 flex flex-row gap-24 border-b border-[#9096A2]">
              <div className="w-full flex flex-col gap-7">
                <ToggleButton
                  value={paid}
                  setValue={setPaid}
                  title="Free Course"
                />

                <ToggleButton
                  value={certificate}
                  setValue={setCertificate}
                  title="Certificate"
                />
                <ToggleButton value={badge} setValue={setBadge} title="Badge" />
                <ToggleButton
                  value={support}
                  setValue={setSupport}
                  title="Support"
                />
                <ToggleButton
                  value={isFirstSectionFree}
                  setValue={setIsFirstSectionFree}
                  title="Make First Section Free"
                />

                <ToggleButton
                  value={isAutoEvaluationEnabled}
                  setValue={setIsAutoEvaluationEnabled}
                  title="Auto Evaluation"
                />
                <ToggleButton
                  value={isUnitContentVisible}
                  setValue={setIsUnitContentVisible}
                  title="Show Unit content in Curriculum"
                />
              </div>

              <div className="w-full flex flex-col gap-7">
                <ToggleButton
                  value={isUnitCompletionLocked}
                  setValue={setIsUnitCompletionLocked}
                  title="Unit Completion Lock"
                />

                <ToggleButton
                  value={isCourseButtonHidden}
                  setValue={setIsCourseButtonHidden}
                  title="Hide Course Button after subscription"
                />
                <ToggleButton
                  value={isCourseProgressDisplayed}
                  setValue={setIsCourseProgressDisplayed}
                  title="Display Course Progress on Course home"
                />
                <ToggleButton
                  value={isTimeBasedProgressEnabled}
                  setValue={setIsTimeBasedProgressEnabled}
                  title="Time based Course Progress"
                />
                <ToggleButton
                  value={isReviewsEnabled}
                  setValue={setIsReviewsEnabled}
                  title="Post Course Reviews from Course Home"
                />
                <ToggleButton
                  value={isBatchEnrollmentForced}
                  setValue={setIsBatchEnrollmentForced}
                  title="Force Batch enrollment"
                />
                <ToggleButton
                  value={isSectionDripFeed}
                  setValue={setIsSectionDripFeed}
                  title="Section Drip Feed"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[30px] justify-end mt-5">
            {btnHide ? '' : <button className="px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]">
              Cancel
            </button>}

            {btnHide ? <button
              onClick={() => {
                setPage("Upload Video");
                next();
              }}
              className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
              Next
              <img className="w-[12px]" src={right_arrow} alt="" />
            </button> :
              <button
                onClick={() => {
                  setPage("Upload Video");
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
    </>
  );
};

export default CourseOverview;
