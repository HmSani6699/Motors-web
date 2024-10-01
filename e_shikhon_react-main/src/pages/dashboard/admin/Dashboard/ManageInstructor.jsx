// import React, { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import plus_white from "../../../../assets/svg/plus_white.svg";
// import threeDot from "../../../../assets/svg/dots-vertical_black.svg";
// import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
// import plusIcon from "../../../../assets/svg/plus_black.svg";
// import camera from "../../../../assets/svg/camera_black.svg";
// import { Link } from "react-router-dom";
// import InputField from "../../../../components/inputField/InputField";
// import Loading from "../../../../components/sheared/Loading";
// import { get, post, put } from "../../../../api/axious";
// import toast from "react-hot-toast";
// import three_dot_icon from "../../../../assets/svg/dots-vertical_black.svg";
// import Swal from "sweetalert2";

// const ManageInstructor = () => {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const [instructorData, setInstructorData] = useState();
//   const [isOpenThreeDot, setIsOpenThreeDot] = useState(false);
//   const [showInstructorForm, setShowInstructorForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [instructorFullName, setInstructorFullName] = useState("");
//   const [professionalTitle, setProfessionalTitle] = useState("");
//   const [instructorPassword, setInstructorPassword] = useState("");
//   const [instructorEmail, setInstructorEmail] = useState("");
//   const [instructorGender, setInstructorGender] = useState("");
//   const [instructorPhoneNo, setInstructorPhoneNo] = useState("");
//   const [instructorFacebookProfile, setInstructorFacebookProfile] =
//     useState("");
//   const [instructorLinkedInProfile, setInstructorLinkedInProfile] =
//     useState("");
//   const [instructorPortfolioLink, setInstructorPortfolioLink] = useState("");
//   const [aboutInstructor, setAboutInstructor] = useState("");
//   const [instructorImage, setInstructorImage] = useState("");
//   const [rolePermissionList, setRolePermissionList] = useState([]);
//   const [index, setIndex] = useState("");
//   const [loadingApproved, setLoadingApproves] = useState(false);
//   const [getSingleUserID, setGetSingleUserID] = useState();
//   const [userStatus, setUserStatus] = useState("");

//   const allInputReset = () => {
//     setInstructorFullName("");
//     setProfessionalTitle("");
//     setInstructorPassword("");
//     setInstructorEmail("");
//     setInstructorGender("");
//     setInstructorPhoneNo("");
//     setInstructorFacebookProfile("");
//     setInstructorLinkedInProfile("");
//     setInstructorPortfolioLink("");
//     setAboutInstructor("");
//     setInstructorImage("");
//   };

//   const payload = {
//     fullName: instructorFullName,
//     prof_title: professionalTitle,
//     password: instructorPassword,
//     email: instructorEmail,
//     gender: instructorGender,
//     phone_number: instructorPhoneNo,
//     fb: instructorFacebookProfile,
//     linkedIn: instructorLinkedInProfile,
//     portfolio: instructorPortfolioLink,
//     intro: aboutInstructor,
//     photo: instructorImage,
//     role: 3,
//   };

//   const handleAddNewInstructor = async () => {
//     // console.log(payload)
//     setLoading(true);
//     try {
//       const res = await post("/api/instructor/add", payload, {
//         headers: {
//           "content-type": "multipart/form-data",
//         },
//       });
//       console.log(res);
//       if (res?.success) {
//         fetchInstructorData();
//         setShowInstructorForm(false);
//         allInputReset();
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log("Failed to post", error?.response?.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInstructorData();
//   }, []);

//   const fetchInstructorData = async () => {
//     try {
//       const response = await get("/api/auth/all_users?role=Instructor");
//       console.log(response, "response");
//       if (response?.data) {
//         setInstructorData(response?.data);
//       }
//     } catch (error) {
//       console.log("Error creating app:", error);
//     }
//   };

//   const updateIs_instructore = async (id) => {
//     const payload = {
//       id,
//       status: "Approved",
//       // role: 5,
//     };
//     setLoading(true);
//     try {
//       const res = await put(`api/auth/update_user_instructore`, payload);
//       console.log(res);
//       if (res.success) {
//         setLoading(false);
//         fetchInstructorData();
//         toast.success(res?.message);
//       }
//     } catch (error) {
//       setLoading(false);
//       toast.error("faild to Delete");
//       console.log("Failed to delete/", error?.response);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInstructorImage = (e) => {
//     setInstructorImage(e.target.files[0]);
//   };

//   var toolbarOptions = [
//     ["bold", "underline", "clean"],
//     [{ font: [] }],
//     [{ color: [] }, { background: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     [{ align: [] }],
//     [{ indent: "-1" }, { indent: "+1" }],
//     ["link", "video"],
//     ["code-block", "blockquote", "image"],
//   ];
//   const module = {
//     toolbar: toolbarOptions,
//   };

//   useEffect(() => {
//     fetchRolePermissionList();
//   }, []);

//   const fetchRolePermissionList = async () => {
//     setLoading(true);
//     try {
//       const response = await get("api/promotion/all");
//       console.log(response?.data, "response ======>");
//       setRolePermissionList(response?.data);
//     } catch (error) {
//       console.log("Error creating app:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (userStatus) {
//       updateStatus(getSingleUserID);
//     }
//   }, [userStatus]);

//   const updateStatus = async (id, index) => {
//     setIndex(index);
//     const payload = {
//       status: userStatus,
//     };

//     Swal.fire({
//       title: "Are you sure?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes Approve!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         setLoadingApproves(true);
//         try {
//           const res = await put(`api/promotion/update/${id}`, payload);
//           console.log(res, "response");
//           if (res.success) {
//             fetchRolePermissionList();
//             setGetSingleUserID("");
//             setUserStatus("");
//             Swal.fire({
//               title: "Approved!",
//               text: "role Approved Successful.",
//               icon: "success",
//               showConfirmButton: false,
//               timer: 2000,
//             });
//           }
//         } catch (error) {
//           toast.error("faild to Delete");
//           console.log("Failed to delete/", error?.response);
//         } finally {
//           setLoadingApproves(false);
//           setIndex("");
//         }
//       }
//     });
//   };

//   console.log(instructorData);

//   return (
//     <div>
//       {!showInstructorForm ? (
//         <div className="px-5">
//           <div className="bg-white rounded-[10px] flex justify-between p-2.5">
//             <div>
//               <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
//                 Manage Instructors
//               </h2>
//             </div>
//             <div>
//               <button
//                 onClick={() => setShowInstructorForm(true)}
//                 className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
//               >
//                 <img className="w-5" src={plus_white} alt="" />
//                 New Instructor
//               </button>
//             </div>
//           </div>

//           <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
//             <table className="w-full ">
//               <thead className="bg-[#F1F2F3] ">
//                 <tr>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
//                     Name
//                   </th>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
//                     Email
//                   </th>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
//                     Phone Number
//                   </th>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
//                     Current Role
//                   </th>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
//                     Wanted Role
//                   </th>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
//                     Status
//                   </th>
//                   <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] ">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="text-[12px]">
//                 {instructorData &&
//                   instructorData.map((instructorRole, i) => (
//                     <tr
//                       key={instructorRole.id}
//                       className={`border-b ${
//                         instructorRole?.id === getSingleUserID
//                           ? "bg-green-200"
//                           : "even:bg-gray-200"
//                       }`}
//                     >
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
//                         {instructorRole?.fullName}
//                       </td>
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
//                         {instructorRole?.email}
//                       </td>
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
//                         {instructorRole?.phone_number}
//                       </td>
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
//                         {instructorRole?.roles?.roleName}
//                       </td>
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
//                         {instructorRole?.roleName}
//                       </td>
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
//                         {instructorRole?.status === "approved" ? (
//                           <span className="text-green-500 font-bold bg-green-100 px-2 rounded-md">
//                             {instructorRole?.status?.charAt(0)?.toUpperCase() +
//                               instructorRole?.status?.slice(1).toLowerCase() ||
//                               "N/A"}
//                           </span>
//                         ) : (
//                           <span
//                             className={`font-bold px-2 rounded-md
//                             ${
//                               instructorRole?.status === "rejected" &&
//                               "text-red-500 bg-red-100"
//                             }
//                             ${
//                               instructorRole?.status === "hold" &&
//                               "text-blue-400 bg-blue-100"
//                             }
//                             ${
//                               instructorRole?.status === "lock" &&
//                               "text-cyan-400 bg-cyan-100"
//                             }
//                             ${
//                               instructorRole?.status === "pending" &&
//                               "text-orange-400 bg-orange-100"
//                             }
//                             `}
//                           >
//                             {instructorRole?.status?.charAt(0)?.toUpperCase() +
//                               instructorRole?.status?.slice(1).toLowerCase() ||
//                               "N/A"}
//                           </span>
//                         )}
//                       </td>
//                       <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
//                         <div className="flex flex-row justify-end items-center gap-1.5 relative">
//                           <button
//                             onClick={() => {
//                               getSingleUserID
//                                 ? setGetSingleUserID(false)
//                                 : setGetSingleUserID(instructorRole?.id);
//                             }}
//                             className=" rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
//                           >
//                             <img src={three_dot_icon} alt="" />
//                           </button>

//                           {getSingleUserID === instructorRole?.id && (
//                             <div
//                               className="absolute top-7 right-0 w-[113px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
//                                 "
//                             >
//                               <div className="flex flex-col gap-2">
//                                 <button
//                                   className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
//                                   onClick={() => setUserStatus("approved")}
//                                 >
//                                   Approve
//                                 </button>
//                                 <button
//                                   className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
//                                   onClick={() => setUserStatus("rejected")}
//                                 >
//                                   Reject
//                                 </button>
//                                 <button
//                                   className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
//                                   onClick={() => setUserStatus("hold")}
//                                 >
//                                   On Hold
//                                 </button>
//                                 <button
//                                   className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
//                                   onClick={() => setUserStatus("lock")}
//                                 >
//                                   Lock
//                                 </button>
//                                 <button
//                                   className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
//                                   onClick={() => setUserStatus("pending")}
//                                 >
//                                   Pending
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <div className="px-[30px] py-[50px]">
//           <div className="bg-white rounded-[10px] flex justify-between p-2.5">
//             <div className="flex items-center gap-2">
//               <button onClick={() => setShowInstructorForm(false)} className="">
//                 <img className="w-[25px] " src={leftArrowIcon} alt="" />
//               </button>
//               <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
//                 New Instructor
//               </h2>
//             </div>
//           </div>
//           <div className="pt-10 flex flex-col gap-5 ">
//             <div className="flex flex-row w-full gap-14">
//               <InputField
//                 value={instructorFullName}
//                 setValue={setInstructorFullName}
//                 title="Full Name *"
//                 placeholder="Full Name"
//               />
//               <InputField
//                 value={professionalTitle}
//                 setValue={setProfessionalTitle}
//                 title="Professional Title *"
//                 placeholder="Professional Title"
//               />
//             </div>
//             <div className="flex flex-row w-full gap-14">
//               <InputField
//                 value={instructorPassword}
//                 setValue={setInstructorPassword}
//                 title="Password *"
//                 placeholder="Password"
//                 type="password"
//               />
//               <InputField
//                 value={instructorEmail}
//                 setValue={setInstructorEmail}
//                 title="Email *"
//                 placeholder="Email"
//                 type="email"
//               />
//             </div>
//             <div className="flex flex-row w-full gap-14">
//               <InputField
//                 value={instructorGender}
//                 setValue={setInstructorGender}
//                 title="Gender *"
//                 placeholder="Gender"
//               />
//               <InputField
//                 value={instructorPhoneNo}
//                 setValue={setInstructorPhoneNo}
//                 title="Phone Number *"
//                 placeholder="Phone Number"
//               />
//             </div>
//             <div className="flex flex-row w-full gap-14">
//               <InputField
//                 value={instructorFacebookProfile}
//                 setValue={setInstructorFacebookProfile}
//                 title="Facebook Profile"
//                 placeholder="Facebook Profile"
//               />
//               <InputField
//                 value={instructorLinkedInProfile}
//                 setValue={setInstructorLinkedInProfile}
//                 title="LinkedIn Profile"
//                 placeholder="LinkedIn Profile"
//               />
//             </div>
//             <div className="flex flex-row w-full gap-1">
//               <InputField
//                 value={instructorPortfolioLink}
//                 setValue={setInstructorPortfolioLink}
//                 title="Portfolio Link"
//                 placeholder="Portfolio Link"
//               />
//               <button className="w-32 px-3 py-2 text-[16px] font-[500] leading-[24px] text-black flex flex-row items-center mt-7">
//                 <img src={plusIcon} alt="" />
//                 Add Link
//               </button>
//             </div>
//             <div className="w-full relative pt-2.5">
//               <label
//                 htmlFor="HeadlineIntroduction"
//                 className="text-[16px] font-[400] leading-[22px]"
//               >
//                 Introduction
//               </label>

//               <div className="">
//                 <ReactQuill
//                   modules={module}
//                   theme="snow"
//                   value={aboutInstructor}
//                   onChange={setAboutInstructor}
//                   className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8] mt-2"
//                 />
//               </div>

//               <div className="mt-5 mb-5">
//                 <h1 className="text-[16px] font-[400] leading-[22px] text-black mb-2">
//                   Instructor Image
//                 </h1>
//                 <div className="flex flex-row items-center gap-5">
//                   <div className="w-[308px] h-[233px] border border-[#E3E5E8] rounded-[5px] bg-white flex items-center justify-center overflow-hidden">
//                     <input
//                       onChange={handleInstructorImage}
//                       id="upload"
//                       type="file"
//                       className="hidden"
//                       accept="image/*"
//                     />
//                     <label
//                       for="upload"
//                       className="w-full h-full cursor-pointer relative"
//                     >
//                       {instructorImage ? (
//                         <img
//                           className="w-auto  p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                           src={URL.createObjectURL(instructorImage)}
//                         />
//                       ) : (
//                         <span className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                           <img className="w-[24px]" src={camera} alt="" />
//                           <h2 className="text-[16px] font-[400] text_black_gray leading-[22px]">
//                             Image
//                           </h2>
//                         </span>
//                       )}
//                     </label>
//                   </div>
//                   <h2 className="text-[16px] font-[400] text_black_gray leading-[22px]">
//                     Recomended image format & size: 575px X 450px (1MB) <br />{" "}
//                     Accepted image filetype: jpg, jpeg, png
//                   </h2>
//                 </div>
//               </div>
//               <div className="flex flex-row gap-[30px] justify-end w-full pt-5 border-t border-[#9096A2]">
//                 <button
//                   disabled={loading}
//                   onClick={handleAddNewInstructor}
//                   className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
//                 >
//                   {loading ? <Loading /> : "Save Instructor"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageInstructor;

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import plus_white from "../../../../assets/svg/plus_white.svg";
import threeDot from "../../../../assets/svg/dots-vertical_black.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import plusIcon from "../../../../assets/svg/plus_black.svg";
import camera from "../../../../assets/svg/camera_black.svg";
import { Link } from "react-router-dom";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { get, post, put } from "../../../../api/axious";
import toast from "react-hot-toast";
import three_dot_icon from "../../../../assets/svg/dots-vertical_black.svg";
import Swal from "sweetalert2";

const ManageInstructor = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [instructorData, setInstructorData] = useState();

  const [isOpenThreeDot, setIsOpenThreeDot] = useState(false);

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

  const [hide, setHide] = useState(true);
  const [rolePermissionList, setRolePermissionList] = useState([]);
  const [index, setIndex] = useState("");
  const [loadingApproved, setLoadingApproves] = useState(false);
  const [getSingleUserID, setGetSingleUserID] = useState();
  const [userStatus, setUserStatus] = useState("");

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
    role: 3,
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
      const response = await get("/api/auth/all_users?role=Instructor");
      console.log(response, "response");
      if (response?.data) {
        setInstructorData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const updateIs_instructore = async (id) => {
    const payload = {
      id,
      status: "Approved",
      // role: 5,
    };
    setLoading(true);
    try {
      const res = await put(`api/auth/update_user_instructore`, payload);
      console.log(res);
      if (res.success) {
        setLoading(false);
        fetchInstructorData();
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

  const handleClickShowInstructorForm = () => {
    setShowInstructorForm(true);
    setHide(false);
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

  useEffect(() => {
    fetchRolePermissionList();
  }, []);

  const fetchRolePermissionList = async () => {
    setLoading(true);
    try {
      const response = await get("api/promotion/all");
      console.log(response?.data, "response ======>");
      setRolePermissionList(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userStatus) {
      updateStatus(getSingleUserID);
    }
  }, [userStatus]);

  const updateStatus = async (id, index) => {
    setIndex(index);
    const payload = {
      status: userStatus,
    };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes ${userStatus}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingApproves(true);
        try {
          const res = await put(`api/promotion/update/${id}`, payload);
          console.log(res, "response");
          if (res.success) {
            fetchRolePermissionList();
            setGetSingleUserID("");
            setUserStatus("");
            Swal.fire({
              title: `${userStatus}`,
              text: `Role ${userStatus} Successful.`,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } catch (error) {
          toast.error("faild to Delete");
          console.log("Failed to delete/", error?.response);
        } finally {
          setLoadingApproves(false);
          setIndex("");
        }
      }
    });
  };

  console.log(getSingleUserID);

  return (
    <>
      {!hide ? (
        <>
          {!showInstructorForm ? (
            <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
              <div className="bg-white rounded-[10px] flex justify-between p-2.5">
                <div>
                  <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                    Manage Instructors
                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleClickShowInstructorForm}
                    className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                  >
                    <img className="w-5" src={plus_white} alt="" />
                    New Instructor
                  </button>
                </div>
              </div>

              {/* list */}

              {/* <div className="w-full overflow-x-auto bg-white  mt-10"> */}
              <div className="bg-white rounded-[10px] mt-10 w-full flex justify-between p-2.5">
                <table
                  className="w-full  text-left border-collapse w-overflow-x-auto table-auto "
                  cellSpacing="0"
                >
                  <thead className="bg-[#F1F2F3] ">
                    <tr>
                      <th
                        scope="col"
                        className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="h-10 ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                      >
                        E-mail
                      </th>

                      <th
                        scope="col"
                        className="h-10 ps-2.5 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                      >
                        Status
                      </th>

                      {/* <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                  >
                    Course
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                  >
                    Batch
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                  >
                    Sale
                  </th> */}
                      {/* <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                      >
                        Sales Amont
                      </th> */}
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {instructorData?.map(
                      (data, i) =>
                        (data?.roles?.roleName === "Instructor" ||
                          data?.is_instructore !== null) && (
                          <tr
                            key={i}
                            className={`border-b ${
                              getSingleUserID == data?.id
                                ? "bg-green-200"
                                : "even:bg-gray-200"
                            }`}
                          >
                            <td className="h-10 p-2.5">
                              <h1 className="text_black_gray leading-[18px] text-center text-[16px] font-[500]">
                                {data?.fullName}
                              </h1>
                            </td>
                            {/* <td className="h-10 p-2.5 py-2.5  flex items-center mt-2 gap-2 text-center">               */}

                            {/* <img
                        className="w-[36px] rounded-full"
                        src={`${BASE_URL}${data?.photo?.path}`}
                        alt=""
                      /> */}
                            {/* <span>
                        <h1 className="text_black_gray text-[16px] font-[500] leading-[18px]">
                          {data?.fullName}
                        </h1>
                        <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                          {data?.prof_title}
                        </h1>
                      </span> */}
                            {/* </td> */}
                            <td className="h-10 p-2.5">
                              <div>
                                <h1 className="text_black_gray text-[14px] font-[400] leading-[18px] text-center">
                                  {data?.email}
                                </h1>
                              </div>
                            </td>
                            <td className="h-10 p-2.5">
                              <h1 className="text_black_gray text-[14px] font-[400] leading-[18px] text-center">
                                {data?.phone_number}
                              </h1>
                            </td>
                            <td className="h-10 p-2.5">
                              <h1 className="text_black_gray text-[16px] font-[500] text-center">
                                {data?.roles?.roleName === "Instructor"
                                  ? "Approved"
                                  : data?.is_instructore}
                              </h1>
                            </td>
                            {/* <td className="h-10 p-2.5">
                              <h1 className="text_black_gray text-[16px] font-[500] text-center">
                                ৳ 20,000.00
                              </h1>
                            </td> */}

                            {/* <td className="h-10 p-2.5">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        12
                      </h1>
                    </td>
                    <td className="h-10 p-2.5">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        20
                      </h1>
                    </td>
                    <td className="h-10 p-2.5">
                      <h1 className="text_black_gray text-[16px] font-[500] text-center">
                        ৳ 20,000.00
                      </h1>
                    </td> */}
                            {/* <td className="h-10 p-2.5 relative">
                              <div className="flex items-center justify-center gap-2.5">
                                {data?.roles?.roleName === "Instructor" ? (
                                  <button
                                    onClick={() =>
                                      setIsOpenThreeDot(!isOpenThreeDot)
                                    }
                                  >
                                    <img
                                      className="h-[15px]"
                                      src={threeDot}
                                      alt=""
                                    />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() =>
                                      updateIs_instructore(data.id)
                                    }
                                    className="px-2 py-1 bg-[#20AC90] rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                                  >
                                    {loading ? (
                                      <Loading />
                                    ) : (
                                      <span className="flex items-center justify-center  gap-2">
                                        Approve
                                      </span>
                                    )}
                                  </button>
                                )}
                                <div
                                  className={`${
                                    isOpenThreeDot
                                      ? "bg-white z-10 rounded-md shadow-2xl absolute top-0 right-10 transition-opacity duration-300 opacity-100 min-w-[50px] "
                                      : "hidden opacity-0"
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link
                                        to={`${"/student/userProfile"}`}
                                        className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-blue-200/50`}
                                      >
                                        Profile
                                      </Link>
                                    </li>
                                    <li>
                                      <button
                                        type="button"
                                        className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95  py-2 w-full px-3 hover:bg-blue-200/50`}
                                      >
                                        Logout
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td> */}
                            <td className="h-10 p-2.5 relative">
                              <div className="flex items-center justify-center gap-2.5">
                                <button
                                  onClick={() =>
                                    getSingleUserID
                                      ? setGetSingleUserID(false)
                                      : setGetSingleUserID(data?.id)
                                  }
                                >
                                  <img src={three_dot_icon} alt="" />
                                </button>

                                {getSingleUserID == data?.id && (
                                  <>
                                    {/* <button
                                      onClick={() =>
                                        updateIs_instructore(data.id)
                                      }
                                      className="px-2 py-1 bg-[#20AC90] rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                                    >
                                      {loading ? (
                                        <Loading />
                                      ) : (
                                        <span className="flex items-center justify-center  gap-2">
                                          Approve
                                        </span>
                                      )}
                                    </button> */}
                                    <div
                                      className="absolute top-[40px] right-[1px] w-[113px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
                                "
                                    >
                                      <ul>
                                        <li>
                                          <Link
                                            to={`${"/student/userProfile"}`}
                                            className={`flex items-center justify-between text-center text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-[#20AC90] hover:text-white`}
                                          >
                                            Profile
                                          </Link>
                                        </li>
                                        <li>
                                          <button
                                            type="button"
                                            className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95  py-2 w-full px-3 hover:bg-[#20AC90] hover:text-white`}
                                          >
                                            Logout
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        )
                    )}
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
                    Add Instructors
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
                        Recomended image format & size: 575px X 450px (1MB){" "}
                        <br /> Accepted image filetype: jpg, jpeg, png
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
      ) : (
        <div className="px-5">
          <div className="bg-white rounded-[10px] flex justify-between p-2.5">
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Instructors
              </h2>
            </div>
            <div>
              <button
                onClick={handleClickShowInstructorForm}
                className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
              >
                <img className="w-5" src={plus_white} alt="" />
                New Instructor
              </button>
            </div>
          </div>
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <table className="w-full ">
              <thead className="bg-[#F1F2F3] ">
                <tr>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                    Name
                  </th>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                    Email
                  </th>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                    Phone Number
                  </th>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                    Current Role
                  </th>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                    Wanted Role
                  </th>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] text-start">
                    Status
                  </th>
                  <th className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] ">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="text-[12px]">
                {rolePermissionList &&
                  rolePermissionList.map((instructorRole, i) => (
                    <tr
                      key={instructorRole.id}
                      className={`border-b  ${
                        instructorRole?.id === getSingleUserID
                          ? "bg-green-200"
                          : "even:bg-gray-200"
                      }`}
                    >
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        {instructorRole?.user_info?.fullName}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        {instructorRole?.user_info?.email}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500] ">
                        {instructorRole?.user_info?.phone_number}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
                        {instructorRole?.present_role_info?.roleName}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
                        {instructorRole?.target_role_info?.roleName}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
                        {instructorRole?.status === "approved" ? (
                          <span className="text-green-500 font-bold bg-green-100 px-2 rounded-md">
                            {instructorRole?.status?.charAt(0)?.toUpperCase() +
                              instructorRole?.status?.slice(1).toLowerCase() ||
                              "N/A"}
                          </span>
                        ) : (
                          <span
                            className={`font-bold px-2 rounded-md 
                            ${
                              instructorRole?.status === "rejected" &&
                              "text-red-500 bg-red-100"
                            }
                            ${
                              instructorRole?.status === "hold" &&
                              "text-blue-400 bg-blue-100"
                            }
                            ${
                              instructorRole?.status === "lock" &&
                              "text-cyan-400 bg-cyan-100"
                            }
                            ${
                              instructorRole?.status === "pending" &&
                              "text-orange-400 bg-orange-100"
                            }
                            `}
                          >
                            {instructorRole?.status?.charAt(0)?.toUpperCase() +
                              instructorRole?.status?.slice(1).toLowerCase() ||
                              "N/A"}
                          </span>
                        )}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
                        <div className="flex flex-row justify-end items-center gap-1.5 relative">
                          <button
                            onClick={() => {
                              getSingleUserID
                                ? setGetSingleUserID(false)
                                : (setGetSingleUserID(instructorRole?.id),
                                  setUserStatus(""));
                            }}
                            className=" rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                          >
                            <img src={three_dot_icon} alt="" />
                          </button>

                          {getSingleUserID === instructorRole?.id && (
                            <div
                              className="absolute top-7 right-0 w-[113px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
                                "
                            >
                              <div className="flex flex-col gap-2">
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setUserStatus("approved")}
                                >
                                  Approve
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setUserStatus("rejected")}
                                >
                                  Reject
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setUserStatus("hold")}
                                >
                                  On Hold
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setUserStatus("lock")}
                                >
                                  Lock
                                </button>
                                <button
                                  className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                  onClick={() => setUserStatus("pending")}
                                >
                                  Pending
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
          </div>
        </div>
      )}
    </>
  );
};

export default ManageInstructor;
