import React, { useContext, useEffect, useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import { AuthContext } from "../../../../layout/MainLayout";
import { get } from "../../../../api/axious";

const ManageInstructorBlog = ({
  setBlogForm,
  setBlogUpdate,
  setSetStateValue,
}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { user } = useContext(AuthContext);
  const [allBlogByInstructor, setAllBlogByInstructor] = useState();

  // ======> Get all blog by instructor <=======//
  useEffect(() => {
    if (user?.id) {
      handleGetAllBlogByInstructor(user?.id);
    }
  }, [user?.id]);

  const handleGetAllBlogByInstructor = async () => {
    try {
      const response = await get(`/api/blog/blogs_for_instructor/${user?.id}`);
      console.log(response, "response");
      if (response?.data) {
        setAllBlogByInstructor(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  return (
    <div className="w-full overflow-x-auto  mt-10">
      <table
        className="w-full  text-left border-collapse w-overflow-x-auto table-auto "
        cellSpacing="0"
      >
        <tbody>
          <tr className="bg-[#E3E5E8] ">
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
            >
              ID
            </th>
            <th
              scope="col"
              className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
            >
              Blog Title
            </th>
            <th
              scope="col"
              className="h-10 ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
            >
              Blog category
            </th>

            <th
              scope="col"
              className="h-10 ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
            >
              Date
            </th>

            <th
              scope="col"
              className="h-10 ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
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
          {allBlogByInstructor && allBlogByInstructor.length > 0 ? (
            allBlogByInstructor.map((blog) => (
              <tr key={blog?.id}>
                <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {blog?.id}
                  </h1>
                </td>
                <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {blog?.title}
                  </h1>
                </td>
                <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      {blog?.category_info?.category}
                    </h1>
                  </div>
                </td>
                <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      {blog?.date}
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] text-center font-[500] leading-[22px]">
                      {blog?.status === "approved" ? (
                        <span className="text-green-500 font-bold bg-green-100 px-2 rounded-md">
                          {blog?.status?.charAt(0)?.toUpperCase() +
                            blog?.status?.slice(1).toLowerCase() || "N/A"}
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
                            blog?.status?.slice(1).toLowerCase() || "N/A"}
                        </span>
                      )}
                    </h1>
                  </div>
                </td>

                <td className="h-10 ps-2.5">
                  <div className="flex flex-row gap-5 items-center justify-center">
                    <button
                      onClick={() => {
                        setSetStateValue(blog);
                        setBlogUpdate(true);
                        setBlogForm(true);
                      }}
                    >
                      <img src={file_edit} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No blogs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInstructorBlog;
