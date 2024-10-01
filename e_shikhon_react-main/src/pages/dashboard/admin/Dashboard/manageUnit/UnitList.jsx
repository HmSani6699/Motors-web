import React from "react";
import file_edit from "../../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../../assets/svg/delete-sweep-outline_red.svg";
import { LuView } from "react-icons/lu";

const UnitList = ({
  allUnit,
  handleUnitView,
  handleDeleteUnit,
  handleUpdateUnit,
}) => {
  return (
    <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
      <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
        <h1 className="text-[28px] font-[600] text_black leading-[36px] text-center">
          Unit List
        </h1>
      </div>
      <table
        className="w-full bg-white  text-left border-collapse w-overflow-x-auto table-auto "
        cellSpacing="0"
      >
        <tbody>
          <tr className="bg-[#F1F2F3] ">
            <th
              scope="col"
              className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
            >
              Title
            </th>
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Type
            </th>
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Author
            </th>

            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Date
            </th>
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              ID
            </th>
            <th
              scope="col"
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
            >
              Action
            </th>
          </tr>

          {allUnit &&
            allUnit?.map((unitData, i) => (
              <tr key={i} className="odd:bg-gray-200">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {unitData?.title}
                  </h1>
                </td>
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {unitData?.type}
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      {unitData?.author_data
                        ? unitData?.author_data.fullName
                        : "N/A"}
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {unitData?.createdAt}
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {unitData?.code}
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <button onClick={() => handleUpdateUnit(unitData)}>
                      <img src={file_edit} alt="" />
                    </button>
                    <button onClick={() => handleDeleteUnit(unitData?.id)}>
                      <img src={delete_red} alt="" />
                    </button>
                    <button onClick={() => handleUnitView(unitData)}>
                      <LuView />
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

export default UnitList;
