import React, { useContext, useEffect, useState } from "react";
import InputField from "../../components/inputField/InputField";
import SelectInput from "../../components/inputField/SelectInput";
import ReactQuill from "react-quill";
import Loading from "../../components/sheared/Loading";
import toast from "react-hot-toast";
import { AuthContext } from "../../layout/MainLayout";
import { get, post } from "../../api/axious";
import CustomSelectInput from "../../components/inputField/CustomSelectInput";
import SuggLoading from "../../components/Common/SuggLoading";

const AskQuestionModal = ({ modalRef, setIsUserModalOpen, notify }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [batchDropdown, setBatchDropdown] = useState([]);
  const [myCourse, setMyCourse] = useState([]);

  useEffect(() => {
    if (user?.id) {
      getMyCourse();
    }
  }, [user?.id]);

  useEffect(() => {
    if (categoryId) {
      getBatch(categoryId);
    }
  }, [categoryId]);

  const getMyCourse = async () => {
    setLoading(true);
    try {
      const response = await get(`api/auth/get_user/${user?.id}`);
      setMyCourse(response?.data?.progress);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const getBatch = async (id) => {
    try {
      const res = await get(`api/batch/by_course/${id}`);
      setBatchDropdown(res?.data);
    } catch (error) {
      console.log("Failed to post/", error?.response?.data);
    }
  };

  const handleCreate = async () => {
    if (!user?.id) {
      toast.error("Please Login First.");
    }
    const payload = {
      description,
      subCategory: parseInt(subCategoryId),
      category: parseInt(categoryId),
      title: topic,
      creator: user?.id,
    };
    console.log(payload);

    setSubmitLoading(true);
    try {
      const res = await post(`/api/public_forum/add`, payload);
      handleRest();
      notify();
      setIsUserModalOpen(false);
    } catch (error) {
      toast.error("Failed to post!!");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setSubmitLoading(false);
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

  const handleRest = () => {
    setDescription("");
    setSubCategoryId("");
    setCategoryId("");
    setTopic("");
  };

  return (
    <>
      <div className="fade-in-down justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-2.5 md:px-0">
        <div ref={modalRef} className="relative w-auto my-6 mx-auto">
          <div className="flex justify-center items-center absolute top-5 right-5 ">
            <span
              onClick={() => setIsUserModalOpen(false)}
              className="text-[25px] cursor-pointer z-50 hover:bg-slate-300/50 px-1 py-[6px] rounded-md leading-3 text-black bg-slate-200 shadow-xl"
            >
              &times;
            </span>
          </div>
          <div className="border-0 p-5 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none  w-full md:w-[1070px] h-[500px] focus:outline-none">
            <div className="relative pt-3 flex flex-col gap-3 overflow-auto h-full">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <SuggLoading />
                </div>
              ) : myCourse?.length > 0 ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row w-full gap-14">
                    <InputField
                      type="text"
                      value={topic}
                      setValue={setTopic}
                      title="Topic Title"
                    />
                  </div>
                  <div className="flex flex-row w-full gap-14">
                    <CustomSelectInput
                      obj_name="courses.courseTitle"
                      value_name="course_id"
                      value={categoryId}
                      setValue={setCategoryId}
                      title="Course"
                      options={myCourse}
                    />
                    {categoryId && batchDropdown?.length > 0 && (
                      <CustomSelectInput
                        obj_name="batch_no"
                        value={subCategoryId}
                        setValue={setSubCategoryId}
                        title="Batch"
                        options={batchDropdown}
                      />
                    )}
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
                  <div className="w-full relative pt-2.5">
                    <div className="flex flex-row gap-[30px] justify-center w-full">
                      <button
                        onClick={handleCreate}
                        className="px-3 py-2 rounded-[5px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                      >
                        {submitLoading ? <Loading /> : "Publish Question"}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <h1 className="text-[20px]">Please Enroll a Course First!</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#274458db]"></div>
    </>
  );
};

export default AskQuestionModal;
