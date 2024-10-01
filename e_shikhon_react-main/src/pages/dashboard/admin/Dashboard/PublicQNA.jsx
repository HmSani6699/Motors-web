import React, { useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import { Link } from "react-router-dom";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";

const PublicQNA = () => {
  const [showReplySection, setShowReplySection] = useState(false);

  console.log(showReplySection);
  return (
    <>
      <div className="px-[13px] w-full lg:w-[1100px] mb-8 mx-auto">
        <div className="bg-white rounded-[10px] flex justify-between p-2.5">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
              All Public QNA
            </h2>
          </div>
        </div>
        {/*  */}

        <div className="w-full overflow-x-auto bg-white py-5 px-3 rounded-[10px] mt-8">
          {showReplySection ? (
            <div>
              <div className="flex gap-5">
                <button
                  onClick={() => setShowReplySection(!showReplySection)}
                  className=""
                >
                  <img className="w-[25px]" src={leftArrowIcon} alt="" />
                </button>
                <h2 className="text-[22px] font-[600] text_black_gray leading-[40px] ">
                  Answer reply
                </h2>
              </div>
              <div className="bg-zinc-100  rounded  px-4">
                <div className="grid grid-cols-2">
                  <div>
                    <h2 className="text-[14px] font-[500] text_black_gray leading-[40px] ">
                      Person Name :
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-[14px] font-[500] text_black_gray leading-[40px] ">
                      Person Phone Number :
                    </h2>
                  </div>
                </div>
                <div>
                  <h2 className="text-[14px] font-[500] text_black_gray leading-[40px] ">
                    Course :
                  </h2>
                </div>
                <div>
                  <h2 className="text-[14px] font-[500] text_black_gray leading-[22px] ">
                    Person Question : Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Neque deserunt in culpa dolore natus
                    voluptates, molestiae corporis quasi alias qui ab fuga
                    quaerat saepe repellat dolorum sint atque sunt, tempora
                    delectus laborum magni nesciunt? Corporis, recusandae!
                    Suscipit, perspiciatis asperiores alias fugit beatae iure
                    accusantium ipsa unde minus. Assumenda, obcaecati fuga
                    magni, non sit adipisci, corporis ducimus quaerat ipsum
                    itaque debitis deserunt quae in vero minima consequatur
                    laborum at hic tenetur similique! Ipsa repellendus,
                    explicabo tempora harum dolorum laudantium nesciunt maiores,
                    voluptates voluptate voluptatibus obcaecati? Culpa sequi
                    beatae sed in explicabo!
                  </h2>
                </div>
                <div>
                  <label
                    htmlFor="OrderNotes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Your Reply{" "}
                  </label>

                  <textarea
                    id="OrderNotes"
                    className="mt-2 p-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm outline-[#20ac90]"
                    rows="6"
                    placeholder="Enter any additional order notes..."
                  ></textarea>
                </div>

                <div className="flex flex-row gap-[30px] justify-center w-full pt-5 pb-5">
                  <button className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2">
                    Submit
                    {/* {loading ? <Loading /> : "Save Instructor"} */}
                  </button>
                </div>
              </div>
            </div>
          ) : (
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Course
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Action
                  </th>
                </tr>

                <tr className="border-b">
                  <td className="h-10 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Hasan Mahmud
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      019255663999
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Digital Marketing
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <div className="flex flex-row gap-2.5">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        Not answered yet
                      </h1>
                    </div>
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
                <tr className="border-b">
                  <td className="h-10 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Hasan Mahmud
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      019255663999
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Digital Marketing
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <div className="flex flex-row gap-2.5">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        Not answered yet
                      </h1>
                    </div>
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
                <tr className="border-b">
                  <td className="h-10 ps-2.5 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Hasan Mahmud
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      019255663999
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Digital Marketing
                    </h1>
                  </td>
                  <td className="h-10 py-2">
                    <div className="flex flex-row gap-2.5">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        Not answered yet
                      </h1>
                    </div>
                  </td>
                  <td className="h-10 py-2">
                    <div className="flex flex-row gap-2.5">
                      <button
                        onClick={() => setShowReplySection(!showReplySection)}
                      >
                        <img src={file_edit} alt="" />
                      </button>
                      <button>
                        <img src={delete_red} alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default PublicQNA;
