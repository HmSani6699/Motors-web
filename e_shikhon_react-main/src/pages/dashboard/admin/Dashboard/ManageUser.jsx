import React, { useEffect, useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import { Link } from "react-router-dom";
import { get } from "../../../../api/axious";
import InputField from "../../../../components/inputField/InputField";

const ManageUser = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [allUserData, setAllUserData] = useState();

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      const response = await get("/api/auth/all_users");

      if (response?.data) {
        setAllUserData(response?.data);
      } else {
        setAllUserData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };
  // console.log(allUserData)

  const handleUpdateUserData = (userData) => {
    setShowUpdateForm(true);
  };

  return (
    <>
      <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
        <div className="bg-white rounded-[10px] flex justify-between p-2.5">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
              Manage User
            </h2>
          </div>
          <div>
            <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
              New User
            </button>
          </div>
        </div>

        {/*  */}

        <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
          <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
            <div>
              <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                User List
              </h1>
            </div>
          </div>

          {showUpdateForm ? (
            <div className="px-[13px] mx-auto">
              {/* all input  */}

              <div className="pt-10 flex flex-col gap-5 ">
                <div className="flex flex-row w-full gap-14">
                  <InputField
                    value=""
                    setValue=""
                    title="Full Name *"
                    placeholder="Full Name"
                  />
                  <InputField
                    value=""
                    setValue=""
                    title="Course Title *"
                    placeholder="Course Title"
                  />
                </div>
                <div className="flex flex-row w-full gap-14">
                  <InputField
                    value=""
                    setValue=""
                    title="Password *"
                    placeholder="Password"
                    type="password"
                  />
                  <InputField
                    value=""
                    setValue=""
                    title="Email *"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="flex flex-row w-full gap-14">
                  <InputField
                    value=""
                    setValue=""
                    title="Gender *"
                    placeholder="Gender"
                  />
                  <InputField
                    value=""
                    setValue=""
                    title="Phone Number *"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex flex-row w-full gap-14">
                  <InputField
                    value=""
                    setValue=""
                    title="Facebook Profile"
                    placeholder="Facebook Profile"
                  />
                  <InputField
                    value=""
                    setValue=""
                    title="LinkedIn Profile"
                    placeholder="LinkedIn Profile"
                  />
                </div>
                <div className="flex flex-row w-full gap-1">
                  <InputField
                    value=""
                    setValue=""
                    title="Portfolio Link"
                    placeholder="Portfolio Link"
                  />
                </div>
                <div className="w-full relative pt-2.5">
                  <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
                    <button className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2">
                      Update
                      {/* {loading ? <Loading /> : "Save Instructor"} */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {!showUpdateForm ? (
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
                    Role
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
                    E-mail
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
                    Sale
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

                {allUserData?.map((userData, i) => (
                  <tr key={i} className="">
                    <td className="h-10 ps-2.5 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {userData?.fullName}
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <div>
                        <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                          {userData?.roles?.roleName}
                        </h1>
                      </div>
                    </td>
                    <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {userData?.phone_number}
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {userData?.email}
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        01
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <div className="flex flex-row gap-2.5">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          01
                        </h1>
                      </div>
                    </td>
                    <td className="h-10 py-2">
                      <div className="flex flex-row gap-2.5">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          Approved
                        </h1>
                      </div>
                    </td>
                    <td className="h-10 py-2">
                      <div className="flex flex-row gap-2.5">
                        <button onClick={() => handleUpdateUserData(userData)}>
                          <img src={file_edit} alt="" />
                        </button>
                        <button>
                          <img src={delete_red} alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {/* <tr className="bg-[#F1F2F3]">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Rashedul Islam
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        Motion Designer
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Hasan Mahmud
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        Web Developer
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="bg-[#F1F2F3]">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Dibar hossaain
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        IELTS
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Md. nahid Afridi
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        Spoken English
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="bg-[#F1F2F3]">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Md. Asraful Islam
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        Full Stack
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Md. Al Amin
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        UI/UX Designer
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="bg-[#F1F2F3]">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Rashed Boruya
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        Graphics Designer
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        <tr className="">
                            <td className="h-10 ps-2.5 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    Din islam
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <div>
                                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                                        Mern Developer
                                    </h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    019255663999
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">
                                    rashed3210+@gmail.com
                                </h1>
                            </td>
                            <td className="h-10 py-2">
                                <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                                </div>
                            </td>
                            <td className="h-10 py-2">
                                <div className="flex flex-row gap-2.5">
                                    <h1 className="text_black_gray text-[16px] font-[500]">
                                        Approved
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
                        </tr> */}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ManageUser;
