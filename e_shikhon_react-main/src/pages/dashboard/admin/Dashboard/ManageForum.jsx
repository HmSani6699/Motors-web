import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import plus_white from "../../../../assets/svg/plus_white.svg";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import { Link } from "react-router-dom";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { get, post } from "../../../../api/axious";

const ManageForum = () => {
  const [loading, setLoading] = useState(false);

  const [showBatchForm, setShowForumForm] = useState(false);
  const [forumTitle, setForumTitle] = useState("");
  const [allForumData, setAllForumData] = useState();

  const handleClickShowForumForm = () => {
    setShowForumForm(true);
  };
  const handleClickHideBatchForm = () => {
    setShowForumForm(false);
  };

  useEffect(() => {
    fetchAllForum();
  }, []);

  const fetchAllForum = async () => {
    try {
      const response = await get("/api/forum/all");
      setAllForumData(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };
  console.log(allForumData, "hhh");
  const handleCreateForum = async (event) => {
    event.preventDefault();

    const formData = {
      title: forumTitle,
    };
    setLoading(true);
    try {
      const res = await post("/api/forum/add", formData);
      if (res.success) {
        fetchAllForum();
        setLoading(false);
        setForumTitle("");
        setShowForumForm(false);
        // toast.success("Create successfully!");
        console.log("Create successfully!");
      }
    } catch (error) {
      setLoading(false);
      // toast.error('failed to Post')
      console.log("Failed to post/", error?.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
        <div className="bg-white rounded-[10px] flex justify-between p-2.5">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
              Manage Forum
            </h2>
          </div>
          <div>
            <button
              onClick={handleClickShowForumForm}
              className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
            >
              <img className="w-5" src={plus_white} alt="" />
              New Forum
            </button>
          </div>
        </div>

        {showBatchForm ? (
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="w-[650px] mx-auto">
              <InputField
                value={forumTitle}
                setValue={setForumTitle}
                title="Forum Title"
              />
            </div>
            <button
              onClick={handleCreateForum}
              className="mt-5 px-3 py-2 rounded-[8px] mx-auto text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
            >
              {loading ? <Loading /> : "Submit"}
            </button>
          </div>
        ) : null}

        {/*  */}

        {!showBatchForm ? (
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <table
              className="w-full  text-left border-collapse w-overflow-x-auto table-auto "
              cellSpacing="0"
            >
              <tbody>
                <tr className="bg-[#F1F2F3] ">
                  <th
                    scope="col"
                    className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Forum Name
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Forum No
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Student
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Action
                  </th>
                </tr>

                {allForumData?.map((forumData, i) => (
                  <tr key={i} className="">
                    <td className="h-10 ps-2.5 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {forumData?.title}
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <div>
                        <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                          {forumData?.id}
                        </h1>
                      </div>
                    </td>
                    <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        {forumData?.participants}
                      </h1>
                    </td>

                    <td className="h-10 py-2">
                      <div className="flex flex-row gap-2.5">
                        <Link>
                          <img src={file_edit} alt="" />
                        </Link>
                        <button>
                          <img src={delete_red} alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ManageForum;
