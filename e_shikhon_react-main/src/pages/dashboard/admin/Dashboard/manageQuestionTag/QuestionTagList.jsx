import React from "react";
import file_edit from "../../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../../assets/svg/delete-sweep-outline_red.svg";

const QuestionTagList = ({
  allQuestionTag,
  handleUpdateQuestionTag,
  handleDeleteQuestionTag,
}) => {
  console.log(allQuestionTag);

  return (
    <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
      <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
        <div>
          <h1 className="text-[28px] font-[600] text_black leading-[36px]">
            Question Tag List
          </h1>
        </div>
      </div>
      <table
        className="w-[650px] mx-auto  text-left border-collapse w-overflow-x-auto table-auto "
        cellSpacing="0"
      >
        <tbody>
          <tr className="bg-[#F1F2F3] ">
            <th
              scope="col"
              className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
            >
              No
            </th>
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Tag Name
            </th>
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
            >
              Action
            </th>
          </tr>

          {allQuestionTag?.map((data, i) => (
            <tr key={i} className="border-b">
              <td className="h-10 ps-2.5 py-2">
                <h1 className="text_black_gray text-[16px] font-[500]">
                  {i + 1}
                </h1>
              </td>
              <td className="h-10 py-2">
                <div>
                  <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                    {data?.tag}
                  </h1>
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex flex-row gap-2.5">
                  <button onClick={() => handleUpdateQuestionTag(data)}>
                    <img src={file_edit} alt="" />
                  </button>

                  <button onClick={() => handleDeleteQuestionTag(data?.id)}>
                    <img src={delete_red} alt="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTagList;
