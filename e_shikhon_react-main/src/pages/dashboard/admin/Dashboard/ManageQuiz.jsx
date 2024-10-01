import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import toast, { Toaster } from "react-hot-toast";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { del, get, post, put } from "../../../../api/axious";
import "react-quill/dist/quill.snow.css";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import plus_white from "../../../../assets/svg/plus_white.svg";
import { Link } from "react-router-dom";
import SelectInput from "../../../../components/inputField/SelectInput";
import TagSuggestion from "../../../../components/Common/TagSuggestion";
import { RxCrossCircled } from "react-icons/rx";
import ToggleButton from "../../../../components/inputField/ToggleButton";
import { modifyTag, transformTag } from "../../../../api/helper";
import moment from "moment";
import Suggestion from "../../../../components/Common/Suggestion";
import AuthSuggestion from "../../../../components/Common/AuthSuggestion";
import Swal from "sweetalert2";
import { LuView } from "react-icons/lu";
import QuizViewModal from "./manageQuiz/QuizViewModal";
import { URL } from "../../../../constants/Url";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";
// console.log(condition, "condition");

const ManageQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [type, setType] = useState("");
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const [attachment, setAttachment] = useState(null);

  const [quizSubtitle, setQuizSubtitle] = useState("");
  const [connectedCourse, setConnectedCourse] = useState("");
  const [quizDuration, setQuizDuration] = useState("");
  const [quizDurationParameter, setQuizDurationParameter] = useState("");
  const [showResultAfterSubmission, setShowResultAfterSubmission] =
    useState("");
  const [negativeMarksPerQuiz, setNegativeMarksPerQuiz] = useState("");
  const [numberOfQuizPerPage, setNumberOfQuizPerPage] = useState("");
  const [autoEvaluateResults, setAutoEvaluateResults] = useState("");
  const [numberOfExtraQuizRetakes, setNumberOfExtraQuizRetakes] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [marks, setMarks] = useState("");
  const [randomize, setRandomize] = useState(false);
  const [passingMarks, setPassingMarks] = useState("");
  const [start_date, setStart_date] = useState("");

  const [allQuiz, setAllQuiz] = useState();

  const [suggLoading, setSuggLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [showSuggesstion, setShowSuggesstion] = useState(false);

  const [authLoading, setAuthLoading] = useState(false);
  const [searchAuthData, setSearchAuthData] = useState([]);
  const [showAuthSuggesstion, setShowAuthSuggesstion] = useState(false);

  useEffect(() => {
    fetchAllQuiz();
  }, []);

  const fetchAllQuiz = async () => {
    try {
      const response = await get(URL.QUIZ.GET);
      setAllQuiz(response?.data);
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
  console.log(modifyTag(tagList), tagList, "tagList===========>");
  const payload = {
    title,
    description,
    author: authorId,
    type,
    ...(condition
      ? { tags: modifyTag(tagList) }
      : { tag_id: tagList?.[0]?.tag }),
    attachment,
    quiz_subtitle: quizSubtitle,
    connected_course: connectedCourse,
    quiz_duration: quizDuration,
    quiz_duration_parameter: quizDurationParameter,
    show_result_after_submission: showResultAfterSubmission,
    negative_marks_per_quiz: negativeMarksPerQuiz,
    number_of_quiz_per_page: numberOfQuizPerPage,
    auto_evaluate_results: autoEvaluateResults,
    number_of_extra_quiz_retakes: numberOfExtraQuizRetakes,
    passing_marks: passingMarks,
    randomize,
    marks,
    start_date,
    number_of_questions: numberOfQuestions,
  };

  // console.log(payload);

  const resetForm = () => {
    setLoading(false);
    setTitle("");
    setAuthorId("");
    setDescription("");
    setAuthor("");
    setTagList("");
    setAttachment(null);
    setQuizSubtitle("");
    setConnectedCourse("");
    setQuizDuration("");
    setQuizDurationParameter("");
    setShowResultAfterSubmission("");
    setNegativeMarksPerQuiz("");
    setNumberOfQuizPerPage("");
    setAutoEvaluateResults("");
    setRandomize(false);
    setNumberOfExtraQuizRetakes("");
    setNumberOfQuestions("");
    setMarks("");
    setPassingMarks("");
    setType("");
    setTag("");
    setStart_date("");
  };

  const handleCreateQuiz = async () => {
    console.log(payload);
    setLoading(true);
    try {
      const res = await post(URL.QUIZ.POST, payload);
      console.log(res);
      if (res?.success) {
        resetForm();
        fetchAllQuiz();
        setShowUnitForm(false);
        toast.success(res.message);
        // navigate("/admin/manage-course");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to post");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const [showUnitForm, setShowUnitForm] = useState(false);

  const handleClickUnitForm = () => {
    setShowUnitForm(true);
  };
  const handleClickHideUnitForm = () => {
    setShowUnitForm(false);
  };

  const handleTagSuggesstion = async (query_text) => {
    setTag(query_text);
    if (query_text) {
      setShowSuggesstion(true);
      setSuggLoading(true);
      try {
        const res = await get(`${URL.QUESTION_TAG.SUGGESTION}/${query_text}`);
        console.log(res);
        if (res) {
          setSearchData(res.data);
          setSuggLoading(false);
        }
      } catch (error) {
        setSuggLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setSuggLoading(false);
      }
    } else {
      setShowSuggesstion(false);
      setSearchData([]);
    }
  };

  const handleDeleteTag = (index) => {
    setTagList((prevCourse) => {
      const updatedCourse = prevCourse.filter((_, i) => i !== index);
      return updatedCourse;
    });
  };

  const handleAuthorSuggesstion = async (event) => {
    const query_text = event.target.value;
    setAuthor(query_text);

    if (query_text) {
      setShowAuthSuggesstion(true);
      setAuthLoading(true);
      try {
        const res = await get(`api/auth/search_non_student/${query_text}`);
        console.log(res, "now ============>");
        if (res) {
          setSearchAuthData(res.data);
        }
      } catch (error) {
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setAuthLoading(false);
      }
    } else {
      setShowSuggesstion(false);
      setSearchAuthData([]);
    }
  };

  // quiz update functionality
  const [quizUpdateFrom, setQuizUpdateFrom] = useState(false);
  const [getOldQuizId, setGetOldQuizId] = useState();

  const handleQuizUpdate = async (quizData) => {
    // console.log(quizData, "quizData");
    setQuizUpdateFrom(!quizUpdateFrom);
    setAuthor(quizData?.author_data?.fullName);
    setAuthorId(quizData?.author_data?.id);
    setGetOldQuizId(quizData.id);
    setTitle(quizData.title);
    setAuthorId(quizData.author);
    setDescription(quizData.description);
    setType(quizData.type);
    setTagList(transformTag(quizData.tags));
    setAttachment(quizData.attachment);
    setQuizSubtitle(quizData.quiz_subtitle);
    setConnectedCourse(quizData.connected_course);
    setQuizDuration(quizData.quiz_duration);
    setQuizDurationParameter(quizData.quiz_duration_parameter);
    setShowResultAfterSubmission(quizData.show_result_after_submission);
    setNegativeMarksPerQuiz(quizData.negative_marks_per_quiz);
    setNumberOfQuizPerPage(quizData.number_of_quiz_per_page);
    setAutoEvaluateResults(quizData.auto_evaluate_results);
    setNumberOfExtraQuizRetakes(quizData.number_of_extra_quiz_retakes);
    setNumberOfQuestions(quizData.number_of_questions);
    setMarks(quizData.marks);
    setRandomize(quizData.randomize);
    setPassingMarks(quizData.passing_marks);
    setStart_date(quizData.start_date);
  };

  const handleQuizUpdateSubmit = async () => {
    const fromData = {
      title,
      description,
      author: authorId,
      type,
      ...(condition
        ? { tags: modifyTag(tagList) }
        : { tag_id: tagList?.[0]?.tag }),
      attachment,
      quiz_subtitle: quizSubtitle,
      connected_course: connectedCourse,
      quiz_duration: quizDuration,
      quiz_duration_parameter: quizDurationParameter,
      show_result_after_submission: showResultAfterSubmission,
      negative_marks_per_quiz: negativeMarksPerQuiz,
      number_of_quiz_per_page: numberOfQuizPerPage,
      auto_evaluate_results: autoEvaluateResults,
      number_of_extra_quiz_retakes: numberOfExtraQuizRetakes,
      passing_marks: passingMarks,
      randomize,
      marks,
      start_date,
      number_of_questions: numberOfQuestions,
    };

    setLoading(true);
    try {
      const res = await put(`${URL.QUIZ.PUT}/${getOldQuizId}`, fromData);
      if (res.success) {
        fetchAllQuiz();
        setQuizUpdateFrom(!quizUpdateFrom);
        toast.success("Update role successfully!");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to Update");
      console.log("Failed to post/", error?.response);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuiz = async (id) => {
    setLoading(true);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = del(`${URL.QUIZ.DET}/${id}`);
          if (response) {
            fetchAllQuiz();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            fetchAllQuiz();
          }
        } catch (error) {
          setLoading(false);
          toast.error("Failed to delete");
          console.log("Failed to delete/", error?.response);
        }
        fetchAllQuiz();
      }
    });
    setLoading(false);
  };
  // console.log(tag, "tag ")
  // quiz view functionality
  const [quizViewModal, setQuizViewModal] = useState(false);
  const [quizViewData, setQuizViewData] = useState({});
  const handleQuizView = (quizData) => {
    setQuizViewData(quizData);
    setQuizViewModal(!quizViewModal);
  };
  return (
    <>
      {!showUnitForm || quizUpdateFrom ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Quiz
                </h2>
              </div>
              <div>
                {!quizUpdateFrom && (
                  <button
                    onClick={handleClickUnitForm}
                    className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                  >
                    <img className="w-5" src={plus_white} alt="" />
                    Add New Quiz
                  </button>
                )}
              </div>
            </div>

            {!quizUpdateFrom && (
              <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
                <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
                  <div>
                    <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                      Quiz List
                    </h1>
                  </div>
                </div>
                <table
                  className="w-full bg-white  text-left border-collapse w-overflow-x-auto table-auto "
                  cellSpacing="0"
                >
                  <tbody>
                    <tr className="bg-[#F1F2F3] ">
                      <th
                        scope="col"
                        className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Author
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                      >
                        Action
                      </th>
                    </tr>

                    {allQuiz &&
                      allQuiz?.map((quizData, i) => (
                        <tr key={i} className="">
                          <td className="h-10 ps-2.5 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {quizData?.title}
                            </h1>
                          </td>
                          <td className="h-10 py-2">
                            <div>
                              <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                {quizData?.author_data?.fullName}
                              </h1>
                            </div>
                          </td>
                          <td className="h-10 py-2">
                            <div>
                              <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                {quizData?.type}
                              </h1>
                            </div>
                          </td>
                          <td className="h-10 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {moment(quizData?.createdAt).format("ll")}
                            </h1>
                          </td>
                          <td className="h-10 py-2">
                            <h1 className="text_black_gray text-[16px] font-[500]">
                              {quizData?.code}
                            </h1>
                          </td>
                          <td className="h-10 py-2">
                            <div className="flex flex-row gap-2.5">
                              <button
                                onClick={() => handleQuizUpdate(quizData)}
                              >
                                <img src={file_edit} alt="" />
                              </button>
                              <button
                                onClick={() => handleDeleteQuiz(quizData?.id)}
                              >
                                <img src={delete_red} alt="" />
                              </button>
                              <button onClick={() => handleQuizView(quizData)}>
                                <LuView />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button onClick={handleClickHideUnitForm} className="">
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Add New Quiz
              </h2>
            </div>
          </div>
          {/* all input  */}
          <div className="pt-10 flex flex-col gap-5 ">
            <div className="flex flex-row w-full gap-14">
              <InputField value={title} setValue={setTitle} title="Title" />
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Author
                </label>
                <AuthSuggestion
                  obj_name="fullName"
                  loading={authLoading}
                  data={searchAuthData}
                  setInput={setAuthor}
                  setAuthorId={setAuthorId}
                  showSuggesstion={showAuthSuggesstion}
                  setShowSuggesstion={setShowAuthSuggesstion}
                >
                  <input
                    type="text"
                    value={author}
                    onChange={(event) => handleAuthorSuggesstion(event)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    placeholder={`Enter Author Name`}
                  />
                </AuthSuggestion>
              </div>
            </div>
            <div className="w-full relative">
              <label
                htmlFor="HeadlineAct"
                className="text-[16px] font-[400] leading-[22px] mb-3"
              >
                Description
              </label>

              <ReactQuill
                modules={module}
                theme="snow"
                value={description}
                onChange={(value) => setDescription(value)}
                className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={quizSubtitle}
                setValue={setQuizSubtitle}
                title="Sub Title"
              />
              <InputField
                value={connectedCourse}
                setValue={setConnectedCourse}
                title="Connected Course"
              />
            </div>
            <div className="flex flex-row w-full gap-14 my-3">
              <ToggleButton
                value={showResultAfterSubmission}
                setValue={setShowResultAfterSubmission}
                title="Show result after submission"
              />
              <ToggleButton
                value={autoEvaluateResults}
                setValue={setAutoEvaluateResults}
                title="Auto evaluate results"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={negativeMarksPerQuiz}
                setValue={setNegativeMarksPerQuiz}
                title="Negative marks per Quiz"
              />
              <InputField
                type="number"
                value={numberOfQuizPerPage}
                setValue={setNumberOfQuizPerPage}
                title="Number of Quiz per page"
              />
            </div>
            <div className="flex items-center flex-row w-full gap-14">
              <SelectInput
                value={type}
                setValue={setType}
                title="Type"
                options={[
                  { id: 1, value: "Generale" },
                  { id: 2, value: "Audio" },
                  { id: 3, value: "Video" },
                  { id: 3, value: "PodCast" },
                ]}
              />

              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Tag
                </label>
                <TagSuggestion
                  obj_name="tag"
                  loading={suggLoading}
                  data={searchData}
                  setTagList={setTagList}
                  setTag={setTag}
                  showSuggesstion={showSuggesstion}
                  setShowSuggesstion={setShowSuggesstion}
                >
                  <div className="flex gap-2 flex-wrap w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border  border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 bg-white">
                    {tagList &&
                      tagList.map((data, i) => (
                        <p
                          key={i}
                          className=" bg-slate-200 px-2 flex items-center justify-center gap-1"
                        >
                          {data.name}
                          <span className="text-[13px] text-red-600 cursor-pointer">
                            <RxCrossCircled
                              onClick={() => handleDeleteTag(i)}
                            />
                          </span>
                        </p>
                      ))}
                    <input
                      value={tag}
                      onChange={(e) => handleTagSuggesstion(e.target.value)}
                      className="h-full  text-[16px] font-[400] leading-[22px]  outline-none bg-transparent px-2"
                      type="text"
                      placeholder={`Enter Tag`}
                    />
                  </div>
                </TagSuggestion>
              </div>
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={numberOfExtraQuizRetakes}
                setValue={setNumberOfExtraQuizRetakes}
                title="Number of extra Quiz retakes"
              />
              <InputField
                type="number"
                value={numberOfQuestions}
                setValue={setNumberOfQuestions}
                title="Number of Questions"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={marks}
                setValue={setMarks}
                title="Marks"
              />
              <InputField
                type="number"
                value={passingMarks}
                setValue={setPassingMarks}
                title="Passing marks"
              />
            </div>

            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={quizDuration}
                setValue={setQuizDuration}
                title="Quiz Duration"
              />
              <SelectInput
                value={quizDurationParameter}
                setValue={setQuizDurationParameter}
                title="Quiz Duration Parameter"
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
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={attachment}
                setValue={setAttachment}
                title="Attachment"
                type="file"
              />
              <ToggleButton
                value={randomize}
                setValue={setRandomize}
                title="Randomize"
              />
            </div>
            <div className="flex flex-row  w-1/2 gap-14">
              <InputField
                type="date"
                value={start_date}
                setValue={setStart_date}
                title="Start Date"
              />
            </div>

            <div className="w-full relative pt-2.5">
              <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                <button
                  onClick={handleCreateQuiz}
                  className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Save Quiz"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {quizUpdateFrom && (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button
                onClick={() => setQuizUpdateFrom(!quizUpdateFrom)}
                className=""
              >
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Update Quiz
              </h2>
            </div>
          </div>
          {/* all update input  */}
          <div className="pt-10 flex flex-col gap-5 ">
            <div className="flex flex-row w-full gap-14">
              <InputField value={title} setValue={setTitle} title="Title" />
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Author
                </label>
                <AuthSuggestion
                  obj_name="fullName"
                  loading={authLoading}
                  data={searchAuthData}
                  setInput={setAuthor}
                  setAuthorId={setAuthorId}
                  showSuggesstion={showAuthSuggesstion}
                  setShowSuggesstion={setShowAuthSuggesstion}
                >
                  <input
                    type="text"
                    value={author}
                    onChange={(event) => handleAuthorSuggesstion(event)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                    placeholder={`Enter Author Name`}
                  />
                </AuthSuggestion>
              </div>
            </div>
            <div className="w-full relative">
              <label
                htmlFor="HeadlineAct"
                className="text-[16px] font-[400] leading-[22px] mb-3"
              >
                Description
              </label>

              <ReactQuill
                modules={module}
                theme="snow"
                value={description}
                onChange={(value) => setDescription(value)}
                className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={quizSubtitle}
                setValue={setQuizSubtitle}
                title="Sub Title"
              />
              <InputField
                value={connectedCourse}
                setValue={setConnectedCourse}
                title="Connected Course"
              />
            </div>
            <div className="flex flex-row w-full gap-14 my-3">
              <ToggleButton
                value={showResultAfterSubmission}
                setValue={setShowResultAfterSubmission}
                title="Show result after submission"
              />
              <ToggleButton
                value={autoEvaluateResults}
                setValue={setAutoEvaluateResults}
                title="Auto evaluate results"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={negativeMarksPerQuiz}
                setValue={setNegativeMarksPerQuiz}
                title="Negative marks per Quiz"
              />
              <InputField
                type="number"
                value={numberOfQuizPerPage}
                setValue={setNumberOfQuizPerPage}
                title="Number of Quiz per page"
              />
            </div>
            <div className="flex items-center flex-row w-full gap-14">
              <SelectInput
                value={type}
                setValue={setType}
                title="Type"
                options={[
                  { id: 1, value: "Generale" },
                  { id: 2, value: "Audio" },
                  { id: 3, value: "Video" },
                  { id: 3, value: "PodCast" },
                ]}
              />

              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Tag
                </label>
                <TagSuggestion
                  obj_name="tag"
                  loading={suggLoading}
                  data={searchData}
                  setTagList={setTagList}
                  setTag={setTag}
                  showSuggesstion={showSuggesstion}
                  setShowSuggesstion={setShowSuggesstion}
                >
                  <div className="flex gap-2 flex-wrap w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border  border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 bg-white">
                    {tagList &&
                      tagList.map((data, i) => (
                        <p
                          key={i}
                          className=" bg-slate-200 px-2 flex items-center justify-center gap-1"
                        >
                          {data.name}
                          <span className="text-[13px] text-red-600 cursor-pointer">
                            <RxCrossCircled
                              onClick={() => handleDeleteTag(i)}
                            />
                          </span>
                        </p>
                      ))}
                    <input
                      value={tag}
                      onChange={(e) => handleTagSuggesstion(e.target.value)}
                      className="h-full  text-[16px] font-[400] leading-[22px]  outline-none bg-transparent px-2"
                      type="text"
                      placeholder={`Enter Tag`}
                    />
                  </div>
                </TagSuggestion>
              </div>
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={numberOfExtraQuizRetakes}
                setValue={setNumberOfExtraQuizRetakes}
                title="Number of extra Quiz retakes"
              />
              <InputField
                type="number"
                value={numberOfQuestions}
                setValue={setNumberOfQuestions}
                title="Number of Questions"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField value={marks} setValue={setMarks} title="Marks" />
              <InputField
                type="number"
                value={passingMarks}
                setValue={setPassingMarks}
                title="Passing marks"
              />
            </div>

            <div className="flex flex-row w-full gap-14">
              <InputField
                type="number"
                value={quizDuration}
                setValue={setQuizDuration}
                title="Quiz Duration"
              />
              <SelectInput
                value={quizDurationParameter}
                setValue={setQuizDurationParameter}
                title="Quiz Duration Parameter"
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
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={attachment}
                setValue={setAttachment}
                title="Attachment"
                type="file"
              />
              <ToggleButton
                value={randomize}
                setValue={setRandomize}
                title="Randomize"
              />
            </div>
            <div className="flex flex-row w-1/2 gap-14">
              <InputField
                type="date"
                value={start_date}
                setValue={setStart_date}
                title="Start Date"
              />
            </div>

            <div className="w-full relative pt-2.5">
              <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                <button
                  onClick={handleQuizUpdateSubmit}
                  className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Update Quiz"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {quizViewModal && (
        <QuizViewModal
          quizViewData={quizViewData}
          quizViewModal={quizViewModal}
          setQuizViewModal={setQuizViewModal}
        />
      )}
    </>
  );
};

export default ManageQuiz;
