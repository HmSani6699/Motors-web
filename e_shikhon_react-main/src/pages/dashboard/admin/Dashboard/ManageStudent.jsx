import React, { useEffect, useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import plusIcon from "../../../../assets/svg/plus_black.svg";
import plus_white from "../../../../assets/svg/plus_white.svg";
import { Link } from "react-router-dom";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { get } from "../../../../api/axious";

const ManageStudent = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allStudentData, setAllStudentData] = useState();
  useEffect(() => {
    fetchAllStudent();
  }, []);

  const fetchAllStudent = async () => {
    try {
      const response = await get(`/api/auth/all_users?role=Student`);
      if (response?.data) {
        setAllStudentData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const [studentFullName, setStudentFullName] = useState("");
  const [studentCourseTitle, setStudentCourseTitle] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [studentPhoneNo, setStudentPhoneNo] = useState("");
  const [studentFacebookProfile, setStudentFacebookProfile] = useState("");
  const [studentLinkedInProfile, setStudentLinkedInProfile] = useState("");
  const [studentPortfolioLink, setStudentPortfolioLink] = useState("");

  const allInputReset = () => {
    setStudentFullName("");
    setStudentCourseTitle("");
    setStudentPassword("");
    setStudentEmail("");
    setStudentGender("");
    setStudentPhoneNo("");
    setStudentFacebookProfile("");
    setStudentLinkedInProfile("");
    setStudentPortfolioLink("");
  };

  const payload = {
    studentFullName,
    studentCourseTitle,
    studentPassword,
    studentEmail,
    studentGender,
    studentPhoneNo,
    studentFacebookProfile,
    studentLinkedInProfile,
    studentPortfolioLink,
  };

  const handleClickShowStudentForm = () => {
    setShowStudentForm(true);
  };
  const handleClickHideStudentForm = () => {
    setShowStudentForm(false);
  };

  const handleAddNewStudent = () => {
    console.log(payload);
  };

  return (
    <>
      {!showStudentForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white rounded-[10px] flex justify-between p-2.5">
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Students
              </h2>
            </div>
            <div>
              <button
                onClick={handleClickShowStudentForm}
                className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
              >
                <img className="w-5" src={plus_white} alt="" />
                New Student
              </button>
            </div>
          </div>

          {/*  */}

          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div>
                <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                  Students List
                </h1>
              </div>
              <div className="flex flex-row gap-3">
                <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
                  All Students
                </button>
                <button className="p-2.5 text-black bg-[#F5F5F5] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                  Top Students
                </button>
                <button className="p-2.5 text-black bg-[#F5F5F5] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                  New Students
                </button>
              </div>
            </div>
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
                    Course
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
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Batch
                  </th>
                  {/* <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Sale
                  </th> */}
                  {/* <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Status
                  </th> */}
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Action
                  </th>
                </tr>

                {allStudentData?.map((studentData, i) => (
                  <tr key={i} className="">
                    <td key={i} className="h-10 ps-2.5 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {studentData?.fullName}
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
                        {studentData?.phone_number}
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {studentData?.email}
                      </h1>
                    </td>
                    <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        01
                      </h1>
                    </td>
                    {/* <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        01
                      </h1>
                    </td> */}
                    {/* <td className="h-10 py-2">
                      <div className="flex flex-row gap-2.5">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          Approved
                        </h1>
                      </div>
                    </td> */}
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
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button onClick={handleClickHideStudentForm} className="">
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Add Student
              </h2>
            </div>
          </div>
          {/* all input  */}

          <div className="pt-10 flex flex-col gap-5 ">
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={studentFullName}
                setValue={setStudentFullName}
                title="Full Name *"
                placeholder="Full Name"
              />
              <InputField
                value={studentCourseTitle}
                setValue={setStudentCourseTitle}
                title="Course Title *"
                placeholder="Course Title"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={studentPassword}
                setValue={setStudentPassword}
                title="Password *"
                placeholder="Password"
                type="password"
              />
              <InputField
                value={studentEmail}
                setValue={setStudentEmail}
                title="Email *"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={studentGender}
                setValue={setStudentGender}
                title="Gender *"
                placeholder="Gender"
              />
              <InputField
                value={studentPhoneNo}
                setValue={setStudentPhoneNo}
                title="Phone Number *"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={studentFacebookProfile}
                setValue={setStudentFacebookProfile}
                title="Facebook Profile"
                placeholder="Facebook Profile"
              />
              <InputField
                value={studentLinkedInProfile}
                setValue={setStudentLinkedInProfile}
                title="LinkedIn Profile"
                placeholder="LinkedIn Profile"
              />
            </div>
            <div className="flex flex-row w-full gap-1">
              <InputField
                value={studentPortfolioLink}
                setValue={setStudentPortfolioLink}
                title="Portfolio Link"
                placeholder="Portfolio Link"
              />
              <button className="w-32 px-3 py-2 text-[16px] font-[500] leading-[24px] text-black flex flex-row items-center mt-7">
                <img src={plusIcon} alt="" />
                Add Link
              </button>
            </div>
            <div className="w-full relative pt-2.5">
              <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
                <button
                  disabled={loading}
                  onClick={handleAddNewStudent}
                  className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Save Instructor"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageStudent;
