import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import HookInput from "../../../../../components/inputField/HookInput";
import HookAuthSuggestion from "../../../../../components/Common/HookAuthSuggestion";
import HookNoLabelInput from "../../../../../components/inputField/HookNoLabelInput";
import HookToggle from "../../../../../components/inputField/HookToggle";
import HookSelect from "../../../../../components/inputField/HookSelect";
import { useForm } from "react-hook-form";
import { get, post, put } from "../../../../../api/axious";
import toast from "react-hot-toast";
import Loading from "../../../../../components/sheared/Loading";
import { URL } from "../../../../../constants/Url";

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

const UnitCreateUpdate = ({
  type,
  fetchAllUnit,
  viewData,
  showUnitForm,
  setShowUnitForm,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [searchAuthData, setSearchAuthData] = useState([]);
  const [showAuthSuggestion, setShowAuthSuggestion] = useState(false);

  // console.log("errors", errors);

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

  // console.log("viewData", viewData);

  useEffect(() => {
    if (viewData && type === "update") {
      setValue("title", viewData?.title);
      setValue("auth", viewData?.author_data?.id);
      setValue("author_name", viewData?.author_data?.fullName);
      setValue("type", viewData?.type);
      setValue("unit_duration", viewData?.unit_duration);
      setValue("unit_duration_parameter", viewData?.unit_duration_parameter);
      setValue("start_date", viewData?.start_date);
      setValue("start_time", viewData?.start_time);
      setValue("video_link", viewData?.video_link);
      setValue("marks", viewData?.marks);
      setValue("free_unit", viewData?.free_unit);
      setDescription(viewData?.description);
    }
  }, [viewData, type]);

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
        res = await post(URL.UNIT.POST, payload);
      } else {
        res = await put(`${URL.UNIT.PUT}/${viewData?.id}`, payload);
      }
      if (res?.success) {
        reset();
        fetchAllUnit();
        setShowUnitForm(!showUnitForm);
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Failed Operation!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // const handleUpdateCategory = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await put(`${URL.UNIT.PUT}/${viewData?.id}`, formData);

  //     if (res.success) {
  //       toast.success("Unit Update successfully!");
  //       resetForm();
  //       fetchAllUnit();
  //       setUpdateUnitFromOpen(!updateUnitFromOpen);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error("Failed to Update");
  //     console.log("Failed to post/", error?.response);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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

      <div className="flex  w-full gap-14">
        <HookSelect
          title="Unit for"
          register={register}
          name={`type`}
          required={true}
          label_name="value"
          error={errors?.type}
          options={[
            { id: "ভিডিও কোর্স", value: "ভিডিও কোর্স" },
            { id: "অনলাইন কোর্স", value: "অনলাইন কোর্স" },
            { id: "অফলাইন কোর্স", value: "অফলাইন কোর্স" },
          ]}
        />

        <HookToggle title="Free Unit" register={register} name={`free_unit`} />
      </div>
      <div className="flex flex-row w-full gap-14">
        <HookInput
          type="number"
          title="Duration"
          register={register}
          name={`unit_duration`}
          required={true}
          error={errors?.unit_duration}
        />

        <HookSelect
          title="Duration Parameter"
          register={register}
          name={`unit_duration_parameter`}
          required={true}
          label_name="value"
          error={errors?.unit_duration_parameter}
          options={[
            { id: "Second", value: "Second" },
            { id: "Minute", value: "Minute" },
            { id: "Hours", value: "Hours" },
            { id: "Day", value: "Day" },
            { id: "Weak", value: "Weak" },
            { id: "Month", value: "Month" },
            { id: "Year", value: "Year" },
          ]}
        />
      </div>

      {watch("type") === "অনলাইন কোর্স" || watch("type") === "অফলাইন কোর্স" ? (
        <div className="flex flex-row w-full gap-14">
          <HookInput
            required={true}
            title="Start Date"
            type="date"
            register={register}
            name={`start_date`}
            error={errors?.start_date}
          />
          <HookInput
            required={true}
            type="time"
            title="Start Time"
            register={register}
            name={`start_time`}
            error={errors?.start_time}
          />
        </div>
      ) : null}

      <div className="flex flex-row w-full gap-14 ">
        {watch("type") === "ভিডিও কোর্স" ? (
          <HookInput
            title="Video Link"
            register={register}
            name={`video_link`}
            required={true}
            error={errors?.video_link}
          />
        ) : null}
        <HookInput
          type="number"
          title="Marks"
          register={register}
          name={`marks`}
          required={true}
          error={errors?.marks}
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
              `${type === "create" ? "Save Unit" : "Update Unit"}`
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UnitCreateUpdate;
