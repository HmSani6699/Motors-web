import React, { useEffect, useState } from "react";
import HookInput from "../../../../../components/inputField/HookInput";
import HookAuthSuggestion from "../../../../../components/Common/HookAuthSuggestion";
import HookNoLabelInput from "../../../../../components/inputField/HookNoLabelInput";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import HookSelect from "../../../../../components/inputField/HookSelect";
import HookToggle from "../../../../../components/inputField/HookToggle";
import Loading from "../../../../../components/sheared/Loading";
import { get, post } from "../../../../../api/axious";
import { URL } from "../../../../../constants/Url";
import toast from "react-hot-toast";

const AssignmentCreateUpdaate = ({
  type,
  viewData,
  fetchAllAssignment,
  showAssignmentForm,
  setShowAssignmentForm,
}) => {
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [searchAuthData, setSearchAuthData] = useState([]);
  const [showAuthSuggestion, setShowAuthSuggestion] = useState(false);
  const [description, setDescription] = useState("");
  const [assignmentSubmissions, setAssignmentSubmissions] = useState("");

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
    };
    console.log("payload", payload);
    setLoading(true);
    let res;
    try {
      if (type === "create") {
        res = await post(URL.ASSIGNMENT.POST, payload);
      } else {
        res = await post(`${URL.ASSIGNMENT.PUT}/${viewData?.id}`, payload);
      }
      if (res?.success) {
        reset();
        fetchAllAssignment();
        setShowAssignmentForm(!showAssignmentForm);
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Failed Operation!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
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

  //==========> Set deafult input value <==========//
  useEffect(() => {
    if (viewData && type === "update") {
      setValue("title", viewData?.title);
      setValue("author_name", viewData?.author_data?.fullName);
      setValue("type", viewData?.type);
      setValue("subTitle", viewData?.subTitle);
      setValue("maximumMarks", viewData?.maximumMarks);
      setValue("timelimit", viewData?.timelimit);
      setValue("start_date", viewData?.start_date);
      setValue("includInCourse", viewData?.includInCourse);
      setValue("assignmentSubmissions", viewData?.assignmentSubmissions);
      setValue("attachmentType", viewData?.attachmentType);
      setValue("durationParameter", viewData?.durationParameter);
      setValue("autoEvaluation", viewData?.autoEvaluation);
      setValue("attachmentSize", viewData?.attachmentSize);
      setDescription(viewData?.description);
    }
  }, [viewData, type]);

  return (
    <form className="pt-10 flex flex-col gap-5 ">
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
          title="Assignment Sub-Title"
          register={register}
          name={`subTitle`}
          required={true}
          error={errors?.subTitle}
        />
        <HookInput
          title="Assignment Maximum Marks"
          register={register}
          name={`maximumMarks`}
          required={true}
          error={errors?.maximumMarks}
          type="number"
        />
      </div>
      <div className="flex flex-row w-full gap-14">
        <HookInput
          title="Assignment Maximum Time limit ( Days )"
          register={register}
          name={`timelimit`}
          required={true}
          error={errors?.timelimit}
          type="number"
        />
        <HookInput
          title="Start Date"
          register={register}
          name={`start_date`}
          required={true}
          error={errors?.start_date}
          type="date"
        />
      </div>
      <div className="flex flex-row w-full gap-14">
        <HookInput
          title="Include in Course"
          register={register}
          name={`includInCourse`}
          required={true}
          error={errors?.includInCourse}
          type="number"
        />
        <HookSelect
          title="Assignment Submissions"
          register={register}
          name={`assignmentSubmissions`}
          required={true}
          label_name="value"
          error={errors?.assignmentSubmissions}
          options={[
            { id: "Upload File", value: "Upload File" },
            { id: "Text Area", value: "Text Area" },
          ]}
        />
      </div>
      <div className="flex flex-row w-full gap-14">
        {assignmentSubmissions === "Text Area" ? (
          ""
        ) : (
          <HookSelect
            title="Attachment Type"
            register={register}
            name={`attachmentType`}
            required={true}
            label_name="value"
            error={errors?.attachmentType}
            options={[
              { id: "PDF", value: "PDF" },
              { id: "Doc", value: "Doc" },
              { id: "Xel", value: "Xel" },
              { id: "PPT", value: "PPT" },
              { id: "JPG", value: "JPG" },
            ]}
          />
        )}
        <HookSelect
          title="Duration Parameter"
          register={register}
          name={`durationParameter`}
          required={true}
          label_name="value"
          error={errors?.durationParameter}
          options={[
            { id: "Minute", value: "Minute" },
            { id: "Second", value: "Second" },
            { id: "Day", value: "Day" },
            { id: "Weak", value: "Weak" },
            { id: "Month", value: "Month" },
            { id: "Year", value: "Year" },
          ]}
        />
      </div>
      <div className="flex flex-row w-full gap-14">
        <HookToggle
          title="Include in Course Evaluation"
          register={register}
          name={`autoEvaluation`}
        />
        <HookInput
          title="Attachment Size (in MB)"
          register={register}
          name={`attachmentSize`}
          required={true}
          error={errors?.attachmentSize}
          type="number"
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
              `${type === "create" ? "Save Assignment" : "Update Assignment"}`
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AssignmentCreateUpdaate;
