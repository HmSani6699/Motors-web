import React, { useEffect, useState } from "react";
import Loading from "../../../../../components/sheared/Loading";
import { useForm } from "react-hook-form";
import HookInput from "../../../../../components/inputField/HookInput";
import { post, put } from "../../../../../api/axious";
import { URL } from "../../../../../constants/Url";
import toast from "react-hot-toast";

const QuestionTagCreateUpdate = ({
  type,
  viewData,
  fetchAllQuestionTag,
  showQuestionTagForm,
  setShowQuestionTagForm,
}) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //========> Question Tag create and update <=========//
  const submit = async (formData) => {
    const payload = {
      formData,
    };
    console.log("payload", payload);
    setLoading(true);
    let res;
    try {
      if (type === "create") {
        res = await post(URL.QUESTION_TAG.POST, formData);
      } else {
        res = await put(`${URL.QUESTION_TAG.PUT}/${viewData?.id}`, payload);
      }
      if (res?.success) {
        reset();
        fetchAllQuestionTag();
        setShowQuestionTagForm(!showQuestionTagForm);
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Failed Operation!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  //==========> Set deafult input value <==========//
  useEffect(() => {
    if (viewData && type === "update") {
      setValue("tag", viewData?.tag);
    }
  }, [viewData, type]);

  return (
    <div>
      <div className="w-[650px] mx-auto">
        {/* <HookToggle title="Tag Name" register={register} name={`roleInput`} /> */}
        <HookInput
          title="Tag Name"
          register={register}
          name={`tag`}
          required={true}
          error={errors?.tag}
        />
      </div>
      <div className="w-full relative pt-2.5">
        <div className="flex items-center justify-center w-full pt-5 ">
          <button
            onClick={handleSubmit(submit)}
            className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
          >
            {loading ? (
              <Loading />
            ) : (
              `${
                type === "create" ? "Save Question Tag" : "Update Question Tag"
              }`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionTagCreateUpdate;
