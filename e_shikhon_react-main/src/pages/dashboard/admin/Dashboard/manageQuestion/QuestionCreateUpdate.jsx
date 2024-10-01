import React, { useEffect, useState } from "react";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import HookInput from "../../../../../components/inputField/HookInput";
import HookAuthSuggestion from "../../../../../components/Common/HookAuthSuggestion";
import HookNoLabelInput from "../../../../../components/inputField/HookNoLabelInput";
import HookSelect from "../../../../../components/inputField/HookSelect";
import { useForm } from "react-hook-form";
import Loading from "../../../../../components/sheared/Loading";
import { RxCrossCircled } from "react-icons/rx";
import { MdAddCircle } from "react-icons/md";
import TagSuggestion from "../../../../../components/Common/TagSuggestion";
import { get, post, put } from "../../../../../api/axious";
import { URL } from "../../../../../constants/Url";
import { modifyTag, transformTag } from "../../../../../api/helper";
import toast from "react-hot-toast";

const QuestionCreateUpdate = ({
  type,
  viewData,
  fetchAllQuestion,
  showQuestionForm,
  setShowQuestionForm,
}) => {
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [searchAuthData, setSearchAuthData] = useState([]);
  const [showAuthSuggestion, setShowAuthSuggestion] = useState(false);
  const [options, setOptions] = useState([""]);
  const [suggLoading, setSuggLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [showSuggesstion, setShowSuggesstion] = useState(false);
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const API_NAME = import.meta.env.VITE_API_NAME;
  const condition = API_NAME === "live";

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
      options,
      ...(condition
        ? { tag: modifyTag(tagList) }
        : { tag_id: tagList?.[0]?.tag }),
    };
    console.log("payload", payload);
    setLoading(true);
    let res;
    try {
      if (type === "create") {
        res = await post(URL.QUESTION.POST, payload);
      } else {
        res = await put(`${URL.QUESTION.PUT}/${viewData?.id}`, payload);
      }
      if (res?.success) {
        reset();
        fetchAllQuestion();
        setShowQuestionForm(!showQuestionForm);
        toast.success(res.message);
        setTag("");
        setTagList([]);
        setOptions("");
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

  // ===== > Question Options  Delete <=======//
  const handleDelete = (index) => {
    setOptions((prevCourse) => {
      const updatedCourse = prevCourse.filter((_, i) => i !== index);
      return updatedCourse;
    });
  };

  //==========> Set deafult input value <==========//
  useEffect(() => {
    if (viewData && type === "update") {
      setValue("title", viewData?.title);
      setValue("author_name", viewData?.author_data?.fullName);
      setValue("question_type", viewData?.question_type);
      setValue("question", viewData?.question);
      setOptions(viewData.options);
      setValue("correct_ans", viewData?.correct_ans);
      setValue("hint", viewData?.hint);
      setValue("code", viewData?.code);
      setTagList(transformTag(viewData.tag));
      setValue("attachment", viewData?.attachment);
    }
  }, [viewData, type]);
  return (
    <>
      <form className="pt-10 flex flex-col gap-5 ">
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button onClick={() => setShowQuestionForm(false)} className="">
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                {/* Add New Question */}
                {type === "create" ? "Add New Question " : "Update Question "}
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

            <div className="flex flex-row w-full gap-14">
              <HookSelect
                title="Question Type"
                register={register}
                name={`question_type`}
                required={true}
                label_name="value"
                error={errors?.question_type}
                options={[
                  { id: "MCQ", value: "MCQ" },
                  { id: "True/False", value: "True/False" },
                  { id: "Fill in the Blank", value: "Fill in the Blank" },
                ]}
              />
              <HookInput
                title="Question"
                register={register}
                name={`question`}
                required={true}
                error={errors?.question}
              />
            </div>
            <div className="flex flex-row w-full gap-14 items-center">
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Question Options
                </label>
                {options.map((data, i) => (
                  <div key={i} className="w-full flex items-center gap-2">
                    <div>
                      <p> {i + 1}:</p>
                    </div>
                    <input
                      type="text"
                      name="unit"
                      value={data}
                      onChange={(event) => {
                        const newValue = event.target.value;
                        setOptions((prevOptions) => {
                          const updatedOptions = [...prevOptions];
                          updatedOptions[i] = newValue;
                          return updatedOptions;
                        });
                      }}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      placeholder={`Enter Option`}
                    />
                    <div className="text-[18px] text-red-600 font-bold">
                      {i !== 0 && (
                        <RxCrossCircled onClick={() => handleDelete(i)} />
                      )}

                      <MdAddCircle
                        onClick={handleAddOptions}
                        className="text-green-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <HookInput
                title="Correct Answer"
                register={register}
                name={`correct_ans`}
                required={true}
                type="number"
                error={errors?.correct_ans}
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <HookInput
                title="Answer Hint"
                register={register}
                name={`hint`}
                required={true}
                error={errors?.hint}
              />
              <HookInput
                title="Code"
                register={register}
                name={`code`}
                required={true}
                error={errors?.code}
              />
            </div>
            <div className="flex flex-row w-full gap-14">
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
              <HookInput
                title="Attachment"
                register={register}
                name={`attachment`}
                required={true}
                type="file"
                error={errors?.attachment}
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
                    `${
                      type === "create" ? "Save Question " : "Update Question "
                    }`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuestionCreateUpdate;
