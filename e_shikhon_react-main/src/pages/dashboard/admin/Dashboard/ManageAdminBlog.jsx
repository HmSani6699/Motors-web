import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../layout/MainLayout";
import { get } from "../../../../api/axious";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";

const ManageAdminBlog = ({
  setBlogForm,
  setBlogUpdate,
  setSetStateValue,
  handleDeleteBlog,
  blogData,
}) => {
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
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
            >
              Action
            </th>
          </tr>
          {blogData && blogData.length > 0 ? (
            blogData.map((blog) => (
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

                    <button onClick={() => handleDeleteBlog(blog?.id)}>
                      <img src={delete_red} alt="" />
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

export default ManageAdminBlog;
