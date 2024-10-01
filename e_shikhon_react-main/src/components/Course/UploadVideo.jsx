import React, { useState } from "react";
import camera from "../../assets/svg/camera_black.svg";
import { Link } from "react-router-dom";
import right_arrow from "../../assets/svg/arrow-right-btn.svg";
import Checkbox from "../inputField/Checkbox";
import SelectInput from "../inputField/SelectInput";
import InputField from "../inputField/InputField";
import ToggleButton from "../inputField/ToggleButton";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CourseSuggestion from "../Common/CourseSuggestion";
import { get } from "../../api/axious";
import ObjectSuggestion from "../Common/ObjectSuggestion";
import toast from "react-hot-toast";

const UploadVideo = ({
  setPage,
  next,
  setCourseName,
  courseName,
  setCertificateName,
  certificateName,
  setCertificateId,
  setCourseId,
  setCourseThumbnail,
  videoCheckbox,
  setVideoCheckbox,
  badgePercentage,
  setBadgePercentage,
  certificatePassingPercentage,
  setCertificatePassingPercentage,
  badgeTitle,
  setBadgeTitle,
  setExcellenceBadgeFile,
  completionCertificate,
  setCompletionCertificate,
  courseRetakes,
  setCourseRetakes,
  dripFeedDurationStatic,
  setDripFeedDurationStatic,
  dripDurationParameterCourseForum,
  setDripDurationParameterCourseForum,
  setCourseForum,
  courseGroup,
  setCourseGroup,
  courseSpecificInstructions,
  setCourseSpecificInstructions,
  courseCompletionMessage,
  setCourseCompletionMessage,
  startingTimeEnabled,
  setStartingTimeEnabled,
  isDripFeedEnabled,
  setIsDripFeedEnabled,
  hideExpiredBatches,
  setHideExpiredBatches,
  dripDurationEnabled,
  setDripDurationEnabled,
  image,
  setImage,
  promoVideoLink,
  setPromoVideoLink,
  btnHide,
}) => {
  const handleCheckboxChange = (checkboxId) => {
    setVideoCheckbox(checkboxId);
  };
  // const handleCourseThumbnail = (e) => {
  //   setCourseThumbnail(e.target.files[0]);
  // };

  const handleCourseThumbnail = async (e) => {
    const fileInput = e.target;
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (file && allowedTypes.includes(file.type)) {
      setImage(URL.createObjectURL(file));
      setCourseThumbnail(file);
      fileInput.value = "";
    } else {
      fileInput.value = "";
      toast.error("Please upload PNG/JPG/JPEG format image");
      return;
    }
  };

  const handleExcellenceBadge = (e) => {
    console.log(e.target.files);
    setExcellenceBadgeFile(e.target.files[0]);
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

  // const [courseId, setCourseId] = useState("");
  const [course, setCourse] = useState("");
  const [courseList, setCourseList] = useState({
    loading: false,
    searchData: [],
    showSuggestion: false,
  });
  const handleCourseSuggestion = async (event) => {
    const query_text = event.target.value;
    setCourse(query_text);
    if (query_text) {
      setCourseList((prevState) => ({
        ...prevState,
        showSuggestion: true,
        loading: true,
      }));
      try {
        const res = await get(`api/courses/search/${query_text}`);
        if (res) {
          setCourseList((prevState) => ({
            ...prevState,
            searchData: res?.data,
          }));
        }
      } catch (error) {
        toast.error(error?.response.data?.message);
        console.log("Failed to get search/", error?.response.data?.message);
      } finally {
        setCourseList((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    } else {
      setCourseList((prevState) => ({
        ...prevState,
        showSuggestion: false,
      }));
      setCourseId("");
    }
  };

  const [certificateList, setCertificateList] = useState({
    loading: false,
    searchData: [],
    showSuggestion: false,
  });

  const handleCertificateSuggestion = async (event) => {
    const query_text = event.target.value;
    setCertificateName(query_text);
    if (query_text) {
      setCertificateList((prevState) => ({
        ...prevState,
        showSuggestion: true,
        loading: true,
      }));
      try {
        const res = await get(`api/certificate/search/${query_text}`);
        if (res) {
          setCertificateList((prevState) => ({
            ...prevState,
            searchData: res?.data,
          }));
        }
      } catch (error) {
        toast.error(error?.response.data?.message);
        console.log("Failed to get search/", error?.response.data?.message);
      } finally {
        setCertificateList((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    } else {
      setCertificateList((prevState) => ({
        ...prevState,
        showSuggestion: false,
      }));
      setCertificateId("");
    }
  };

  const [forum, setForum] = useState("");
  const [forumLoading, setForumLoading] = useState(false);
  const [searchForumData, setSearchForumData] = useState([]);
  const [showForumSuggesstion, setShowForumSuggesstion] = useState(false);

  const handleForumSuggesstion = async (event) => {
    const query_text = event.target.value;

    setForum(query_text);
    if (query_text && query_text.length >= 3) {
      setShowForumSuggesstion(true);
      setForumLoading(true);
      try {
        const res = await get(`api/forum/search/${query_text}`);
        console.log(res, "now ============>");
        if (res) {
          setSearchForumData(res.data);
          setForumLoading(false);
        }
      } catch (error) {
        setForumLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setForumLoading(false);
      }
    } else {
      setShowSuggestion(false);
      setSearchForumData([]);
    }
  };
  // console.log(courseThumbnail?.name, "courseThumbnail");
  return (
    <>
      <div>
        <div className={`py-5 px-2`}>
          <div>
            <h2 className="text-[24px] font-[700] text_black_gray leading-[32px] mb-4">
              Learners Accessibility & others
            </h2>
          </div>
          {/*  */}
          <div
            className={`flex flex-col gap-5 ${
              btnHide ? "pointer-events-none" : ""
            }`}
          >
            <div className="flex flex-row w-full gap-24 ">
              <InputField
                value={badgePercentage}
                setValue={setBadgePercentage}
                title="Badge Percentage ( Out of 100 )"
                type="number"
              />

              <InputField
                value={certificatePassingPercentage}
                setValue={setCertificatePassingPercentage}
                title="Certificate Passing Percentage ( Out of 100 )"
                type="number"
              />
            </div>

            <div className="flex flex-row w-full gap-24 ">
              <InputField
                value={badgeTitle}
                setValue={setBadgeTitle}
                title="Badge Title"
                type="text"
              />

              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Certificate Template
                </label>

                <ObjectSuggestion
                  obj_name="title"
                  suggestionList={certificateList}
                  setShowSuggestion={setCertificateList}
                  suggestionClick={(data) => {
                    // console.log(data);
                    setCertificateId(data?.id);
                    setCertificateName(data?.title);
                  }}
                >
                  <input
                    type="text"
                    value={certificateName}
                    onChange={(event) => handleCertificateSuggestion(event)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    placeholder={`Enter Course Name`}
                  />
                </ObjectSuggestion>
              </div>
            </div>

            <div className="flex flex-row w-full gap-24 ">
              <div className="w-full">
                <h1>Excellence Badge</h1>
                <div className="p-[1px] bg-white w-[475px] rounded-[5px] border border-[#E3E5E8] mt-1.5">
                  <input
                    type="file"
                    onChange={handleExcellenceBadge}
                    className="w-full text-black text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:bg-gray-100  file:text-black rounded "
                  />
                </div>
              </div>
              <ToggleButton
                value={completionCertificate}
                setValue={setCompletionCertificate}
                title="Completion Certificate"
              />
            </div>

            <div className="flex flex-row w-full gap-24 ">
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Prerequisite Course
                </label>
                <ObjectSuggestion
                  obj_name="courseTitle"
                  suggestionList={courseList}
                  setShowSuggestion={setCourseList}
                  suggestionClick={(data) => {
                    // console.log(data);
                    setCourse(data?.courseTitle);
                    setCourseId(data?.id);
                  }}
                >
                  <input
                    type="text"
                    value={course}
                    onChange={(event) => handleCourseSuggestion(event)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    placeholder={`Enter Course Name`}
                  />
                </ObjectSuggestion>
              </div>

              {/* <InputField
                value={prerequisiteCourse}
                setValue={setPrerequisiteCourse}
                title="Prerequisite Course"
                type="text"
              /> */}
              <InputField
                value={courseRetakes}
                setValue={setCourseRetakes}
                title="Course Retakes"
                type="number"
              />
            </div>

            <div className="flex flex-row w-full gap-24 ">
              <InputField
                value={dripFeedDurationStatic}
                setValue={setDripFeedDurationStatic}
                type="number"
                title="Drip Feed Duration (Static)"
              />
              <SelectInput
                value={dripDurationParameterCourseForum}
                setValue={setDripDurationParameterCourseForum}
                title="Drip Duration parameter"
                options={[
                  { id: 1, value: "Second" },
                  { id: 2, value: "Minute" },
                  { id: 3, value: "Day" },
                  { id: 3, value: "Weak" },
                  { id: 4, value: "Month" },
                  { id: 5, value: "Year" },
                ]}
              />
            </div>
            <div className="w-full pb-5 flex flex-row gap-24 ">
              <div className="w-full flex flex-col gap-7">
                <ToggleButton
                  value={startingTimeEnabled}
                  setValue={setStartingTimeEnabled}
                  title="Course Starting Time as Drip Feed Origin"
                />

                <ToggleButton
                  value={isDripFeedEnabled}
                  setValue={setIsDripFeedEnabled}
                  title="Drip Feed"
                />
              </div>
              <div className="w-full flex flex-col gap-7">
                <ToggleButton
                  value={dripDurationEnabled}
                  setValue={setDripDurationEnabled}
                  title="Drip Duration as Unit Duration"
                />
                <ToggleButton
                  value={hideExpiredBatches}
                  setValue={setHideExpiredBatches}
                  title="Hide Expired Batches"
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-24 ">
              {/* <InputField
                value={courseForum}
                setValue={setCourseForum}
                title="Course Forum"
                type="text"
              /> */}
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Course Forum
                </label>
                <CourseSuggestion
                  obj_name="title"
                  loading={forumLoading}
                  data={searchForumData}
                  setInput={setForum}
                  setAuthorId={setCourseForum}
                  showSuggesstion={showForumSuggesstion}
                  setShowSuggesstion={setShowForumSuggesstion}
                >
                  <input
                    type="text"
                    value={forum}
                    onChange={(event) => handleForumSuggesstion(event)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    placeholder={`Enter Course Name`}
                  />
                </CourseSuggestion>
              </div>
              <InputField
                value={courseGroup}
                setValue={setCourseGroup}
                title="Course Batch"
                type="text"
              />
            </div>
            <div>
              <div className="w-full relative">
                <label
                  htmlFor="HeadlineAct"
                  className="text-[16px] font-[400] leading-[22px] mb-4"
                >
                  Course specific instructions
                </label>

                <ReactQuill
                  modules={module}
                  theme="snow"
                  value={courseSpecificInstructions}
                  onChange={setCourseSpecificInstructions}
                  className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                />
              </div>
            </div>
            <div>
              <div className="w-full relative">
                <label
                  htmlFor="HeadlineAct"
                  className="text-[16px] font-[400] leading-[22px] mb-4"
                >
                  Course Completion Message
                </label>

                <ReactQuill
                  modules={module}
                  theme="snow"
                  value={courseCompletionMessage}
                  onChange={setCourseCompletionMessage}
                  className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                />
              </div>
            </div>

            <div>
              <h1 className="text-[16px] font-[400] leading-[22px] text-black mb-2">
                Course Thumbnail
              </h1>
              <div className="flex flex-row items-center gap-5">
                <div className="w-[370px] h-[233px] border border-[#E3E5E8] rounded-[5px] bg-white flex items-center justify-center overflow-hidden">
                  <input
                    onChange={handleCourseThumbnail}
                    id="upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                  <label
                    for="upload"
                    className="w-full h-full cursor-pointer relative"
                  >
                    {image ? (
                      <img
                        className="w-auto  p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src={image}
                      />
                    ) : (
                      <span className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img className="w-[24px]" src={camera} alt="" />
                        <h2 className="text-[16px] font-[400] text_black_gray leading-[22px]">
                          Image
                        </h2>
                      </span>
                    )}
                  </label>
                </div>
                <h2 className="text-[16px] font-[400] text_black_gray leading-[22px]">
                  Recomended image format & size: 575px X 450px (1MB) <br />{" "}
                  Accepted image filetype: jpg, jpeg, png
                </h2>
              </div>
            </div>

            <div>
              <Checkbox
                id="youtubeVideoCheckbox"
                label="Youtube Video"
                isChecked={videoCheckbox === "youtubeVideo"}
                onChange={() => handleCheckboxChange("youtubeVideo")}
              />
              <Checkbox
                id="vimeoVideoCheckbox"
                label="Vimeo Video"
                isChecked={videoCheckbox === "vimeoVideo"}
                onChange={() => handleCheckboxChange("vimeoVideo")}
              />
            </div>

            <div className="mb-6">
              <InputField
                value={promoVideoLink}
                setValue={setPromoVideoLink}
                title="Promo video link"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
            <Link to="/manageCourse">
              {btnHide ? (
                ""
              ) : (
                <button className="px-3 py-1.5 border rounded-[8px] border-[#17191C] text-[16px] font-[500] leading-[24px]">
                  Cancel
                </button>
              )}
            </Link>

            {btnHide ? (
              <button
                onClick={() => {
                  setPage("Course Curriculum");
                  next();
                }}
                className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
              >
                Next
                <img className="w-[12px]" src={right_arrow} alt="" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setPage("Course Curriculum");
                  next();
                }}
                className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
              >
                Save and Next
                <img className="w-[12px]" src={right_arrow} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideo;
