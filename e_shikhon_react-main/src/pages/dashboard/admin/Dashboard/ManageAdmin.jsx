import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import "react-quill/dist/quill.snow.css";
import plus_white from "../../../../assets/svg/plus_white.svg";
import threeDot from "../../../../assets/svg/dots-vertical_black.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import plusIcon from "../../../../assets/svg/plus_black.svg";
import camera from "../../../../assets/svg/camera_black.svg";
import { Link } from "react-router-dom";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { get, post } from "../../../../api/axious";

const ManageAdmin = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [instructorData, setInstructorData] = useState();

  const [showInstructorForm, setShowInstructorForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [instructorFullName, setInstructorFullName] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [instructorPassword, setInstructorPassword] = useState("");
  const [instructorEmail, setInstructorEmail] = useState("");
  const [instructorGender, setInstructorGender] = useState("");
  const [instructorPhoneNo, setInstructorPhoneNo] = useState("");
  const [instructorFacebookProfile, setInstructorFacebookProfile] =
    useState("");
  const [instructorLinkedInProfile, setInstructorLinkedInProfile] =
    useState("");
  const [instructorPortfolioLink, setInstructorPortfolioLink] = useState("");
  const [aboutInstructor, setAboutInstructor] = useState("");
  const [instructorImage, setInstructorImage] = useState("");

  const allInputReset = () => {
    setInstructorFullName("");
    setProfessionalTitle("");
    setInstructorPassword("");
    setInstructorEmail("");
    setInstructorGender("");
    setInstructorPhoneNo("");
    setInstructorFacebookProfile("");
    setInstructorLinkedInProfile("");
    setInstructorPortfolioLink("");
    setAboutInstructor("");
    setInstructorImage("");
  };

  const payload = {
    fullName: instructorFullName,
    prof_title: professionalTitle,
    password: instructorPassword,
    email: instructorEmail,
    gender: instructorGender,
    phone_number: instructorPhoneNo,
    fb: instructorFacebookProfile,
    linkedIn: instructorLinkedInProfile,
    portfolio: instructorPortfolioLink,
    intro: aboutInstructor,
    photo: instructorImage,
    role: 2,
  };

  const handleAddNewInstructor = async () => {
    // console.log(payload)
    setLoading(true);
    try {
      const res = await post("/api/instructor/add", payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res?.success) {
        fetchInstructorData();
        setShowInstructorForm(false);
        allInputReset();
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed to post", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructorData();
  }, []);

  const fetchInstructorData = async () => {
    try {
      const response = await get("/api/auth/all_users?role=Admin");
      console.log(response, "response");
      if (response?.data) {
        setInstructorData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  console.log(instructorData, "plplplp");

  const handleClickShowInstructorForm = () => {
    setShowInstructorForm(true);
  };
  const handleClickHideInstructorForm = () => {
    setShowInstructorForm(false);
  };

  const handleInstructorImage = (e) => {
    setInstructorImage(e.target.files[0]);
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
      {!showInstructorForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white rounded-[10px] flex justify-between p-2.5">
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Admin
              </h2>
            </div>
            <div>
              <button
                onClick={handleClickShowInstructorForm}
                className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
              >
                <img className="w-5" src={plus_white} alt="" />
                New Admin
              </button>
            </div>
          </div>

          {/* list */}

          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div>
                <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                  Admin List
                </h1>
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
                  {/* <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Course
                  </th> */}
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
                  {/* <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Batch
                  </th> */}
                  {/* <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Sale
                  </th> */}
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

                {instructorData?.map((studentData, i) => (
                  <tr key={i} className="">
                    <td key={i} className="h-10 ps-2.5 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500]">
                        {studentData?.fullName}
                      </h1>
                    </td>
                    {/* <td className="h-10 py-2">
                      <div>
                        <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                          UI/UX Designer
                        </h1>
                      </div>
                    </td> */}
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
                    {/* <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        01
                      </h1>
                    </td> */}
                    {/* <td className="h-10 py-2">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        01
                      </h1>
                    </td> */}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button onClick={handleClickHideInstructorForm} className="">
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Add Admin
              </h2>
            </div>
          </div>
          {/* all input  */}

          <div className="pt-10 flex flex-col gap-5 ">
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={instructorFullName}
                setValue={setInstructorFullName}
                title="Full Name *"
                placeholder="Full Name"
              />
              <InputField
                value={professionalTitle}
                setValue={setProfessionalTitle}
                title="Professional Title *"
                placeholder="Professional Title"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={instructorPassword}
                setValue={setInstructorPassword}
                title="Password *"
                placeholder="Password"
                type="password"
              />
              <InputField
                value={instructorEmail}
                setValue={setInstructorEmail}
                title="Email *"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={instructorGender}
                setValue={setInstructorGender}
                title="Gender *"
                placeholder="Gender"
              />
              <InputField
                value={instructorPhoneNo}
                setValue={setInstructorPhoneNo}
                title="Phone Number *"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-row w-full gap-14">
              <InputField
                value={instructorFacebookProfile}
                setValue={setInstructorFacebookProfile}
                title="Facebook Profile"
                placeholder="Facebook Profile"
              />
              <InputField
                value={instructorLinkedInProfile}
                setValue={setInstructorLinkedInProfile}
                title="LinkedIn Profile"
                placeholder="LinkedIn Profile"
              />
            </div>
            <div className="flex flex-row w-full gap-1">
              <InputField
                value={instructorPortfolioLink}
                setValue={setInstructorPortfolioLink}
                title="Portfolio Link"
                placeholder="Portfolio Link"
              />
              <button className="w-32 px-3 py-2 text-[16px] font-[500] leading-[24px] text-black flex flex-row items-center mt-7">
                <img src={plusIcon} alt="" />
                Add Link
              </button>
            </div>
            <div className="w-full relative pt-2.5">
              <label
                htmlFor="HeadlineIntroduction"
                className="text-[16px] font-[400] leading-[22px]"
              >
                Introduction
              </label>

              <div className="">
                <ReactQuill
                  modules={module}
                  theme="snow"
                  value={aboutInstructor}
                  onChange={setAboutInstructor}
                  className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8] mt-2"
                />
              </div>

              <div className="mt-5 mb-5">
                <h1 className="text-[16px] font-[400] leading-[22px] text-black mb-2">
                  Instructor Image
                </h1>
                <div className="flex flex-row items-center gap-5">
                  <div className="w-[308px] h-[233px] border border-[#E3E5E8] rounded-[5px] bg-white flex items-center justify-center overflow-hidden">
                    <input
                      onChange={handleInstructorImage}
                      id="upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      for="upload"
                      className="w-full h-full cursor-pointer relative"
                    >
                      {instructorImage ? (
                        <img
                          className="w-auto  p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          src={URL.createObjectURL(instructorImage)}
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
              <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
                <button
                  disabled={loading}
                  onClick={handleAddNewInstructor}
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

export default ManageAdmin;
