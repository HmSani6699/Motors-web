import React, { useEffect, useState } from "react";
import Loading from "../../../../../components/sheared/Loading";
import { get, post, put } from "../../../../../api/axious";
import { URL } from "../../../../../constants/Url";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import HookInput from "../../../../../components/inputField/HookInput";
import HookAuthSuggestion from "../../../../../components/Common/HookAuthSuggestion";
import HookNoLabelInput from "../../../../../components/inputField/HookNoLabelInput";
import ReactQuill from "react-quill";
import HookToggle from "../../../../../components/inputField/HookToggle";
import HookSelect from "../../../../../components/inputField/HookSelect";
import ToggleButton from "../../../../../components/inputField/ToggleButton";
import { useForm } from "react-hook-form";
import TagSuggestion from "../../../../../components/Common/TagSuggestion";
import { modifyTag, transformTag } from "../../../../../api/helper";
import { RxCrossCircled } from "react-icons/rx";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

const QuizCreateUpdate = ({
  type,
  viewData,
  fetchAllQuiz,
  showQuizForm,
  setShowQuizForm,
}) => {
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [searchAuthData, setSearchAuthData] = useState([]);
  const [showAuthSuggestion, setShowAuthSuggestion] = useState(false);
  const [suggLoading, setSuggLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSuggesstion, setShowSuggesstion] = useState(false);
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //========> Assignment create and update <=========//
  const submit = async (formData) => {
    const payload = {
      ...formData,
      description,
      ...(condition
        ? { tags: modifyTag(tagList) }
        : { tag_id: tagList?.[0]?.tag }),
    };
    console.log("payload", payload);
    setLoading(true);
    let res;
    try {
      if (type === "create") {
        res = await post(URL.QUIZ.POST, payload);
      } else {
        res = await put(`${URL.QUIZ.PUT}/${viewData?.id}`, payload);
      }
      if (res?.success) {
        reset();
        fetchAllQuiz();
        setShowQuizForm(!showQuizForm);
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Failed Operation!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  //=========> Auth Suggestion <========//
  const handleAuthorSuggestion = async (data) => {
    setValue("author_name", data);
    if (data) {
      setShowAuthSuggestion(true);
      setAuthLoading(true);
      try {
        const res = await get(`api/auth/search_non_student/${data}`);
        setSearchAuthData(res.data);
      } catch (error) {
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setAuthLoading(false);
      }
    } else {
      setShowAuthSuggestion(false);
      setSearchAuthData([]);
      setValue("author", "");
    }
  };

  // ======> Tag suggestion <======//
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

  // ===== > Question Options  Add <=======//
  const handleAddOptions = () => {
    setOptions((pre) => [...pre, ""]);
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

  //==========> Set deafult input value <==========//
  useEffect(() => {
    if (viewData && type === "update") {
      setValue("title", viewData?.title);
      setValue("author_name", viewData?.author_data?.fullName);
      setDescription(viewData?.description);
      setValue("quiz_subtitle", viewData?.quiz_subtitle);
      setValue("connected_course", viewData?.connected_course);
      setValue(
        "show_result_after_submission",
        viewData?.show_result_after_submission
      );
      setValue("auto_evaluate_results", viewData?.auto_evaluate_results);
      setValue("negative_marks_per_quiz", viewData?.negative_marks_per_quiz);
      setValue("number_of_quiz_per_page", viewData?.number_of_quiz_per_page);
      setValue(
        "number_of_extra_quiz_retakes",
        viewData?.number_of_extra_quiz_retakes
      );
      setValue("number_of_questions", viewData?.number_of_questions);
      setValue("marks", viewData?.marks);
      setValue("passing_marks", viewData?.passing_marks);
      setValue("quiz_duration", viewData?.quiz_duration);
      setValue("quiz_duration_parameter", viewData?.quiz_duration_parameter);
      setValue("type", viewData?.type);
      setTagList(transformTag(viewData.tags));
      setValue("attachment", viewData?.attachment);
      setValue("randomize", viewData?.randomize);
      setValue("start_date", viewData?.start_date);
    }
  }, [viewData, type]);

  console.log(viewData);

  return (
    <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
      <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
        <div>
          <button onClick={() => setShowQuizForm(false)} className="">
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
          <HookInput
            title="Title"
            register={register}
            name={`title`}
            required={true}
            error={errors?.title}
          />

          <div className="w-full">
            <label className="text-[16px] font-[400] leading-[22px]">
              Author
            </label>
            <HookAuthSuggestion
              obj_name="fullName"
              loading={authLoading}
              data={searchAuthData}
              showSuggestion={showAuthSuggestion}
              setShowSuggestion={setShowAuthSuggestion}
              suggestionClick={(data) => {
                setValue("author", data?.id);
                setValue("author_name", data?.fullName);
              }}
            >
              <HookNoLabelInput
                name={`author_name`}
                required={true}
                errors={errors?.author_name}
                register={register}
                placeholder="Search User"
                handleOnChange={(data) => handleAuthorSuggestion(data)}
              />
            </HookAuthSuggestion>
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
          <HookInput
            title="Sub Title"
            register={register}
            name={`quiz_subtitle`}
            required={true}
            error={errors?.quiz_subtitle}
          />

          <HookInput
            title="Connected Course"
            register={register}
            name={`connected_course`}
            required={true}
            error={errors?.connected_course}
          />
        </div>
        <div className="flex flex-row w-full gap-14 my-3">
          <HookToggle
            title="Show result after submission"
            register={register}
            name={`show_result_after_submission`}
          />

          <HookToggle
            title="Auto evaluate results"
            register={register}
            name={`auto_evaluate_results`}
          />
        </div>
        <div className="flex flex-row w-full gap-14">
          <HookInput
            title="Negative marks per Quiz"
            register={register}
            name={`negative_marks_per_quiz`}
            required={true}
            error={errors?.negative_marks_per_quiz}
            type="number"
          />

          <HookInput
            title="Number of Quiz per page"
            register={register}
            name={`number_of_quiz_per_page`}
            required={true}
            error={errors?.number_of_quiz_per_page}
            type="number"
          />
        </div>
        <div className="flex items-center flex-row w-full gap-14">
          <HookSelect
            title="Type"
            register={register}
            name={`type`}
            required={true}
            label_name="value"
            error={errors?.type}
            options={[
              { id: "Generale", value: "Generale" },
              { id: "Audio", value: "Audio" },
              { id: "Video", value: "Video" },
              { id: "PodCast", value: "PodCast" },
            ]}
          />

          <div className="w-full">
            <label className="text-[16px] font-[400] leading-[22px]">Tag</label>
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
                        <RxCrossCircled onClick={() => handleDeleteTag(i)} />
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
          <HookInput
            title="Number of extra Quiz retakes"
            register={register}
            name={`number_of_extra_quiz_retakes`}
            required={true}
            error={errors?.number_of_extra_quiz_retakes}
            type="number"
          />

          <HookInput
            title="Number of Questions"
            register={register}
            name={`number_of_questions`}
            required={true}
            error={errors?.number_of_questions}
            type="number"
          />
        </div>
        <div className="flex flex-row w-full gap-14">
          <HookInput
            title="Marks"
            register={register}
            name={`marks`}
            required={true}
            error={errors?.marks}
            type="number"
          />

          <HookInput
            title="Passing marks"
            register={register}
            name={`passing_marks`}
            required={true}
            error={errors?.passing_marks}
            type="number"
          />
        </div>

        <div className="flex flex-row w-full gap-14">
          <HookInput
            title="Quiz Duration"
            register={register}
            name={`quiz_duration`}
            required={true}
            error={errors?.quiz_duration}
            type="number"
          />

          <HookSelect
            title="Quiz Duration Parameter"
            register={register}
            name={`quiz_duration_parameter`}
            required={true}
            label_name="value"
            error={errors?.quiz_duration_parameter}
            options={[
              { id: "Second", value: "Second" },
              { id: "Minute", value: "Minute" },
              { id: "Day", value: "Day" },
              { id: "Weak", value: "Weak" },
              { id: "Month", value: "Month" },
              { id: "Year", value: "Year" },
            ]}
          />
        </div>
        <div className="flex flex-row w-full gap-14">
          <HookInput
            title="Attachment"
            register={register}
            name={`attachment`}
            error={errors?.attachment}
            type="file"
          />

          <HookToggle
            title="Randomize"
            register={register}
            name={`randomize`}
          />
        </div>
        <div className="flex flex-row  w-1/2 gap-14">
          <HookInput
            title="Start Date"
            register={register}
            name={`start_date`}
            required={true}
            error={errors?.start_date}
            type="date"
          />
        </div>

        <div className="w-full relative pt-2.5">
          <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
            <button
              onClick={handleSubmit(submit)}
              className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
              {loading ? (
                <Loading />
              ) : (
                `${type === "create" ? "Save Quiz " : "Update Quiz "}`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCreateUpdate;
