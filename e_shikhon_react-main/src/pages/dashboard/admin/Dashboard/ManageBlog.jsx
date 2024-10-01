const BASE_URL = import.meta.env.VITE_BASE_URL;
import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import plus_white from "../../../../assets/svg/plus_white.svg";
import threeDot from "../../../../assets/svg/dots-vertical_black.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import plusIcon from "../../../../assets/svg/plus_black.svg";
import camera from "../../../../assets/svg/camera_black.svg";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import { Link } from "react-router-dom";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { del, get, post, put } from "../../../../api/axious";
import toast, { Toaster } from "react-hot-toast";
import ToggleButton from "../../../../components/inputField/ToggleButton";
import SelectInputTow from "../../../../components/inputField/SelectInputTow";
import TagSuggestion from "../../../../components/Common/TagSuggestion";
import { RxCrossCircled } from "react-icons/rx";
import { modifyTag } from "../../../../api/helper";
import { AuthContext } from "../../../../layout/MainLayout";
import ManageAdminBlog from "./ManageAdminBlog";
import ManageInstructorBlog from "../../instructorDashboard/instructorDashboard/ManageInstructorBlog";
import Swal from "sweetalert2";

const ManageBlog = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { user } = useContext(AuthContext);
  const [blogData, setBlogData] = useState();
  const [blogForm, setBlogForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [date, setDate] = useState("");
  const [addLink, setAddLink] = useState("");
  const [blogDecription, setBlogDecription] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [authorInfo, setAuthorInfo] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState("");
  const [suggLoading, setSuggLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [showSuggesstion, setShowSuggesstion] = useState(false);
  const [blogUpdate, setBlogUpdate] = useState(false);
  const [setStateValue, setSetStateValue] = useState();
  const [singleBlogID, setsingleBlogID] = useState();

  const allInputReset = () => {
    setBlogTitle("");
    setSubTitle("");
    setBlogCategory("");
    setMetaTag("");
    setDate("");
    setAddLink("");
    setBlogDecription("");
    setBlogImage("");
    setAuthorInfo("");
  };

  // ========> Get all Category <=========//
  useEffect(() => {
    handleGetAllCategory();
  }, []);

  const handleGetAllCategory = async () => {
    try {
      const res = await get("api/blog_category");
      console.log(res);
      if (res?.success) {
        setCategoryData(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ======> Get all blog <=======//
  useEffect(() => {
    fetchblogData();
  }, []);

  const fetchblogData = async () => {
    try {
      const response = await get("api/blog/all");
      console.log(response, "response");
      if (response?.data) {
        setBlogData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // ======> Create new blog <=======//
  const handleAddNewBlog = async () => {
    const payload = {
      title: blogTitle,
      subTitle: subTitle,
      category: blogCategory?.id,
      tag: modifyTag(tagList),
      date: date,
      link: addLink,
      description: blogDecription,
      photo: blogImage,
      author: user?.id,
      authorToggle: false,
    };

    setLoading(true);
    try {
      console.log("Payload:", payload);
      const res = await post("api/blog/add", payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res?.success) {
        fetchblogData();
        setBlogForm(false);
        allInputReset();
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed to post blog", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // =======> Blog Update  <=======//
  useEffect(() => {
    if (setStateValue) {
      handleSetStateValue(setStateValue);
    }
  }, [setStateValue, blogUpdate]);

  const handleSetStateValue = (data) => {
    console.log(data);

    setBlogTitle(data?.title);
    setSubTitle(data?.subTitle);
    setBlogCategory({
      categoryName: data?.category_info?.category,
      id: data?.category_info?.id,
    });
    setDate(data?.date);
    setAddLink(data?.link);
    setBlogDecription(data?.description);
    setBlogImage({ photo: data?.photo?.path });
    let tag = [];
    data?.tags?.map((item, i) => tag.push({ id: item?.id, name: item?.tag }));
    setTagList(tag);
    setsingleBlogID(data?.id);
  };

  const handleBlogUpdate = async (id) => {
    const payload = {
      title: blogTitle,
      subTitle: subTitle,
      category: blogCategory?.id,
      tag: modifyTag(tagList),
      date: date,
      link: addLink,
      description: blogDecription,
      photo: blogImage,
      author: user?.id,
      authorToggle: false,
    };

    console.log(payload);

    try {
      const res = await put(`/api/blog/update/${id}`, payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        setBlogForm(false);
        fetchblogData();
        allInputReset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ======> Delete blog <=======//
  const handleDeleteBlog = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await del(`/api/blog/delete/${id}`);
          console.log(res);
          if (res?.success) {
            fetchblogData(); // Refresh categories after deletion
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting category:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the category.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleblogImage = (e) => {
    setBlogImage(e.target.files[0]);
  };

  // ======> Tag suggesstion <=======//
  const handleTagSuggesstion = async (query_text) => {
    setTag(query_text);
    if (query_text) {
      setShowSuggesstion(true);
      setSuggLoading(true);
      try {
        const res = await get(`/api/question/tag/search/${query_text}`);
        console.log("response data", res);
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

  return (
    <>
      {!blogForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white rounded-[10px] flex justify-between p-2.5">
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Blog
              </h2>
            </div>
            <div>
              <button
                onClick={() => setBlogForm(true)}
                className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
              >
                <img className="w-5" src={plus_white} alt="" />
                Create New Blog
              </button>
            </div>
          </div>

          {user?.roles?.roleName === "Admin" ? (
            <ManageAdminBlog
              blogData={blogData}
              setBlogForm={setBlogForm}
              setBlogUpdate={setBlogUpdate}
              setSetStateValue={setSetStateValue}
              handleDeleteBlog={handleDeleteBlog}
            />
          ) : (
            <ManageInstructorBlog
              setBlogForm={setBlogForm}
              setBlogUpdate={setBlogUpdate}
              setSetStateValue={setSetStateValue}
            />
          )}
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          {!blogUpdate ? (
            <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
              <div>
                <button onClick={() => setBlogForm(false)} className="">
                  <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
                </button>
              </div>
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Create Blog
                </h2>
              </div>
            </div>
          ) : (
            <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
              <div>
                <button
                  onClick={() => {
                    setBlogForm(false);
                    setBlogUpdate(false);
                  }}
                  className=""
                >
                  <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
                </button>
              </div>
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Update Blog
                </h2>
              </div>
            </div>
          )}

          <div className="pt-10 flex flex-col gap-5 ">
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={blogTitle}
                setValue={setBlogTitle}
                title="Blog Title *"
                placeholder="Blog Title"
              />
              <InputField
                value={subTitle}
                setValue={setSubTitle}
                title="Blog Sub Title *"
                placeholder="Blog Sub Title"
                defValue={subTitle}
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <SelectInputTow
                value={blogCategory}
                setValue={setBlogCategory}
                courseOverview={true}
                title="Blog Category *"
                options={categoryData}
              />
              <div className="w-full">
                <label className="text-[16px] font-[400] leading-[22px]">
                  Meta Tag *
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
                  <div className="flex gap-2 flex-wrap w-full py-1.5 px-1 text-[16px] font-[400] leading-[22px] border  border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5 bg-white">
                    {tagList &&
                      tagList.map((data, i) => (
                        <p
                          key={i}
                          className=" bg-slate-200 px-1 flex items-center justify-center gap-1"
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
              {/* <InputField
                value={metaTag}
                setValue={setMetaTag}
                title="Meta Tag *"
                placeholder="Meta Tag"
              /> */}
            </div>
            <div className="flex flex-row w-full gap-1">
              <InputField
                title="Date"
                value={date}
                setValue={setDate}
                type="date"
              />
            </div>
            <div className="flex flex-row w-full gap-1">
              <InputField
                value={addLink}
                setValue={setAddLink}
                title="Add Link"
                placeholder="Add Link"
              />
              {/* <button className="w-32 px-3 py-2 text-[16px] font-[500] leading-[24px] text-black flex flex-row items-center mt-7">
                <img src={plusIcon} alt="" />
                Add Link
              </button> */}
            </div>
            <div className="flex flex-row gap-1">
              <ToggleButton
                className="px-3"
                setValue={setAuthorInfo}
                title="Show author information"
              />
            </div>

            <div className="w-full relative pt-2.5">
              <label
                htmlFor="HeadlineIntroduction"
                className="text-[16px] font-[400] leading-[22px]"
              >
                Description
              </label>
              <div className="">
                <ReactQuill
                  modules={module}
                  theme="snow"
                  value={blogDecription}
                  onChange={setBlogDecription}
                  className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8] mt-2"
                />
              </div>
              {/* <h2 className="mt-2">Description Preview</h2> */}
              {/* <div className="h-[0px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8] mt-2">
                <p>{stripHtmlTags(blogDecription)}</p>
              </div> */}
              <div className="mt-5 mb-5">
                <h1 className="text-[16px] font-[400] leading-[22px] text-black mb-2">
                  Add Image
                </h1>
                <div className="flex flex-row items-center gap-5">
                  <div className="w-[308px] h-[233px] border border-[#E3E5E8] rounded-[5px] bg-white flex items-center justify-center overflow-hidden">
                    <input
                      onChange={handleblogImage}
                      id="upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      for="upload"
                      className="w-full h-full cursor-pointer relative"
                    >
                      {!blogImage?.photo && blogImage ? (
                        <img
                          className="w-auto  p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          src={URL.createObjectURL(blogImage)}
                        />
                      ) : blogImage?.photo ? (
                        <img
                          className="w-auto  p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          src={`${BASE_URL}${blogImage?.photo}`}
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

              {!blogUpdate ? (
                <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
                  <button
                    disabled={loading}
                    onClick={handleAddNewBlog}
                    className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                  >
                    {loading ? <Loading /> : "Publish Blog"}
                  </button>
                </div>
              ) : (
                <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
                  <button
                    disabled={loading}
                    onClick={() => handleBlogUpdate(singleBlogID)}
                    className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                  >
                    {loading ? <Loading /> : "Update Blog"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ManageBlog;
