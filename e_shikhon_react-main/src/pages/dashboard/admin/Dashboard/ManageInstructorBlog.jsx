const BASE_URL = import.meta.env.VITE_BASE_URL;
import React, { useContext, useEffect, useState } from "react";
import { get, put } from "../../../../api/axious";
import Loading from "../../../../components/sheared/Loading";
import { Link } from "react-router-dom";
import SuggLoading from "../../../../components/Common/SuggLoading";
import { AuthContext } from "../../../../layout/MainLayout";
import view_icon from "../../../../assets/svg/eye-view-.svg";
import three_dot_icon from "../../../../assets/svg/dots-vertical_black.svg";
import ViewBlogModal from "./ViewBlogModal";
import { LuView } from "react-icons/lu";

const ManageInstructorBlog = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [blogData, setBlogData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [singleBlog, setSingleBlog] = useState({});
  const [getBlogID, setGetBlogID] = useState();
  const [blogStatus, setBlogStatus] = useState();

  // ========> Update blog Status <===========//
  useEffect(() => {
    handleGetAllBlog();
  }, []);

  const handleGetAllBlog = async () => {
    setLoading(true);
    try {
      const res = await get("/api/blog/pendingBlog");
      console.log(res);
      if (res?.success) {
        setBlogData(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // =======> Update Status <========//

  useEffect(() => {
    if (blogStatus) {
      handleUpdateBlogStatus(blogStatus);
    }
  }, [blogStatus]);

  const handleUpdateBlogStatus = async (blogStatus) => {
    const payload = {
      user_id: user?.id,
      status: blogStatus,
    };
    setLoading(true);
    try {
      const res = await put(`/api/blog/update_status/${getBlogID}`, payload);
      console.log(res);
      if (res.success) {
        setLoading(false);
        handleGetAllBlog();
        setGetBlogID(false);
        toast.success(res?.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("faild to Delete");
      console.log("Failed to delete/", error?.response);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
        <div className="bg-white rounded-[10px] flex justify-between p-2.5">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
              Manage Instructors
            </h2>
          </div>
        </div>

        {/* list */}

        <div className="w-full   mt-10">
          <div className="w-full h-full overflow-x-auto bg-white py-5 px-2.5 min-h-screen rounded-[10px] mt-10">
            {loading ? (
              <div className="flex justify-center items-center h-full py-20">
                <SuggLoading />
              </div>
            ) : (
              <table
                className="w-full  text-left border-collapse w-overflow-x-auto  table-auto "
                cellSpacing="0"
              >
                <tbody>
                  <tr className="bg-[#F1F2F3] ">
                    <th
                      scope="col"
                      className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="h-10 ps-3 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Blog Title
                    </th>
                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Blog Category
                    </th>
                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Blog Creator
                    </th>
                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                    >
                      Action
                    </th>
                  </tr>

                  {blogData &&
                    blogData?.map((blog, i) => (
                      <tr
                        key={i}
                        className={`border-b ${
                          blog?.id === getBlogID
                            ? "bg-green-200"
                            : "odd:bg-gray-200"
                        }`}
                      >
                        <td className="h-10 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500] line-clamp-1 cursor-pointer ">
                            {i + 1}
                          </h1>
                        </td>
                        <td className="h-10 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500] line-clamp-1 cursor-pointer ">
                            {blog?.title}
                          </h1>
                        </td>
                        <td className="h-10 ps-3 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {blog?.category_info?.category}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {blog?.author_info?.fullName}
                            </h1>
                          </div>
                        </td>

                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {blog?.status === "approved" ? (
                                <span className="text-green-500 font-bold bg-green-100 px-2 rounded-md">
                                  {blog?.status?.charAt(0)?.toUpperCase() +
                                    blog?.status?.slice(1).toLowerCase() ||
                                    "N/A"}
                                </span>
                              ) : (
                                <span
                                  className={`font-bold px-2 rounded-md
                                ${
                                  blog?.status === "rejected" &&
                                  "text-red-500 bg-red-100"
                                }
                                ${
                                  blog?.status === "hold" &&
                                  "text-blue-400 bg-blue-100"
                                }
                                ${
                                  blog?.status === "lock" &&
                                  "text-cyan-400 bg-cyan-100"
                                }
                                ${
                                  blog?.status === "pending" &&
                                  "text-orange-400 bg-orange-100"
                                }

                               `}
                                >
                                  {blog?.status?.charAt(0)?.toUpperCase() +
                                    blog?.status?.slice(1).toLowerCase() ||
                                    "N/A"}
                                </span>
                              )}
                            </h1>
                          </div>
                        </td>

                        <td className="h-10 py-2">
                          <div className="flex flex-row justify-center items-center gap-2.5 relative">
                            {/* <button onClick={() => handleUpdateCourse(course)}>
                              <img src={file_edit} alt="" />
                            </button> */}
                            <button
                              onClick={() => {
                                setModalOpen(true);
                                setSingleBlog(blog);
                              }}
                            >
                              <LuView className="" />
                            </button>

                            <button
                              onClick={() =>
                                getBlogID
                                  ? setGetBlogID(false)
                                  : setGetBlogID(blog?.id)
                              }
                              className=" rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                            >
                              {/* {loadingApproved && index === i ? (
                                <Loading />
                              ) : (
                                "Approve"
                              )} */}
                              <img src={three_dot_icon} alt="" />
                            </button>

                            {getBlogID === blog?.id && (
                              <div
                                className="absolute top-7 right-0 w-[100px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
                                "
                              >
                                <div className="flex flex-col gap-2">
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBlogStatus("approved")}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBlogStatus("rejected")}
                                  >
                                    Reject
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBlogStatus("hold")}
                                  >
                                    On Hold
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setBlogStatus("lock")}
                                  >
                                    Lock
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    // onClick={handleDeleteCourse}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>

          {blogData?.length < 0 && (
            <div className="mt-20 flex justify-center items-center w-full ">
              <p className="text-center text-[25px] font-semibold">
                Not Data found.
              </p>
            </div>
          )}

          {/* =======> View blog <======== */}
          <div className="">
            {modalOpen && (
              <ViewBlogModal data={singleBlog} setModalOpen={setModalOpen} />
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInstructorBlog;
