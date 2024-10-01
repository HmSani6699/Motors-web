import React, { useContext, useEffect, useRef, useState } from "react";
import image_upload from "../../../assets/images/image_upload_gray.png";
import camera_white from "../../../assets/svg/camera_white.svg";
import left_arrow from "../../../assets/svg/arrow-sm-left.svg";
import plus_white from "../../../assets/svg/plus_white.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../../../layout/MainLayout";
import { put } from "../../../api/axious";
import InputField from "../../../components/inputField/InputField";
import toast from "react-hot-toast";
import down_arrow from "../../../assets/svg/down_arrow.svg";
import fb_icon from "../../../assets/svg/fb-color.svg";
import messenger_icon from "../../../assets/svg/fb_messenger.svg";
import whatsapp_icon from "../../../assets/svg/whatsapp.svg";
import linkedin_icon from "../../../assets/svg/lindein-color.svg";
import github_icon from "../../../assets/svg/gitHub_coloer.svg";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [altPhoneNumber, setAltPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");

  const [profilePhoto, setProfilePhoto] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [biography, setBiography] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [progressNumber, setProgressNumber] = useState(Number);
  const [isPaymentOpen, setPaymentOpen] = useState("mobileBanking");
  const [bankNumber, setBankNumber] = useState("");

  const [addEdu, setAddEdu] = useState([
    {
      instituteName: "",
      degreeName: "",
      duration: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [addExperience, setAddExperience] = useState([
    {
      jobTitle: "",
      jobPosition: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [financial, setFinancial] = useState({
    bkash: "",
    rocket: "",
    nagad: "",
    bank_name: "",
    branch_name: "",
    routing_number: "",
    acount_name: "",
    acount_number: "",
  });

  const [addSocial, setAddSocial] = useState([{ fbLink: "" }]);
  const [addSkills, setAddSkills] = useState([{ skill: "" }]);

  const handleProfilePhoto = (e) => {
    setProfilePhoto(e.target.files[0]);
  };
  const handleCoverPhoto = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  // dynamic add education section
  const handleAddEdu = () => {
    setAddEdu((pre) => [
      ...pre,
      {
        instituteName: "",
        degreeName: "",
        duration: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  // dynamic add Experience section
  const handleAddExperience = () => {
    setAddExperience((pre) => [
      ...pre,
      {
        jobTitle: "",
        jobPosition: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  // add social field section
  const handleAddSocial = () => {
    setAddSocial((pre) => [...pre, { fbLink: "" }]);
  };
  // add skill field section
  const handleAddSkill = () => {
    setAddSkills((pre) => [...pre, { skill: "" }]);
  };

  // changing education value
  const handleChangeEdu = (index, field, value) => {
    setAddEdu((prevState) => {
      const updatedAddEdu = [...prevState];
      updatedAddEdu[index] = { ...updatedAddEdu[index], [field]: value }; // there is getting index and field name  end of set the value
      return updatedAddEdu;
    });
  };

  // changing social value
  const handleChangeSocial = (index, field, value) => {
    setAddSocial((prevState) => {
      const updatedAddSocial = [...prevState];
      updatedAddSocial[index] = { ...updatedAddSocial[index], [field]: value }; // there is getting index and field name  end of set the value
      return updatedAddSocial;
    });
  };
  // changing experience value
  const handleChangeExperience = (index, field, value) => {
    setAddExperience((prevState) => {
      const updateAddExperience = [...prevState];
      updateAddExperience[index] = {
        ...updateAddExperience[index],
        [field]: value,
      };
      return updateAddExperience;
    });
  };
  // changing skill value
  const handleChangeSkill = (index, field, value) => {
    setAddSkills((prevState) => {
      const updateAddSkill = [...prevState];
      updateAddSkill[index] = {
        ...updateAddSkill[index],
        [field]: value,
      };
      return updateAddSkill;
    });
  };

  const handleSubmit = async () => {
    const payload = {
      fullName: fullName,
      email: email,
      phone_number: phoneNumber,
      alter_phone: altPhoneNumber,
      password: password,
      pro_pic: profilePhoto,
      cov_pic: coverPhoto,
      about:
        { title: title, description: description, biography: biography } || {},
      edu: addEdu || [],
      social_connect: addSocial || [],
      exp: addExperience || [],
      skill: addSkills || [],
      finance: [financial],
    };
    console.log(payload, "payload");
    setLoading(true);
    try {
      const res = await put(`api/auth/update_user/${user?.id}`, payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.success) {
        setResponseData(res?.data);
        toast.success("User Info Update Successfully!");
        console.log("Update role successfully!");
      }
    } catch (error) {
      setLoading(false);
      console.log("Failed to post/", error?.response);
    } finally {
      setLoading(false);
    }
  };

  if (responseData) {
    // update localStorage data  user information
    let userData = JSON.parse(localStorage.getItem("user"));
    userData = responseData;
    localStorage.setItem("user", JSON.stringify(userData));
  }

  useEffect(() => {
    if (user) {
      if (user?.edu?.length >= 1) {
        setAddEdu(user?.edu);
      }
      if (user?.skill?.length >= 1) {
        setAddSkills(user?.skill);
      }
      if (user?.skill?.length >= 1) {
        setFinancial(user?.finance[0]);
      }
      if (user?.social_connect?.length >= 1) {
        setAddSocial(user?.social_connect);
      }
      if (user?.experience?.length >= 1) {
        setAddExperience(user?.experience);
      }
      setTitle(user?.about?.title);
      setDescription(user?.about?.description);
      setBiography(user?.about?.biography);

      setAltPhoneNumber(user?.alter_phone);
      setPhoneNumber(user?.phone_number);
      setEmail(user?.email);
      setFullName(user?.fullName);
    }
  }, [user]);
  // console.log(fullName, email);
  useEffect(() => {
    // Function to calculate progress based on user data
    const calculateProgress = () => {
      let progress = 0;

      if (email && fullName) {
        progress += 20;
      }

      if (profilePhoto && coverPhoto) {
      }
      if (
        user?.cov_pic?.path &&
        user?.pro_pic?.path &&
        !profilePhoto &&
        !coverPhoto
      ) {
        progress += 20;
      }

      if (
        !user?.cov_pic?.path &&
        !user?.pro_pic?.path &&
        profilePhoto &&
        coverPhoto
      ) {
        progress += 20;
      }

      if (title && description) {
        progress += 20;
      }
      if (
        addEdu?.length >= 1 &&
        addEdu[0]?.instituteName &&
        addEdu[0]?.degreeName
      ) {
        progress += 10;
      }
      if (
        addExperience?.length >= 1 &&
        addExperience[0]?.jobTitle &&
        addExperience[1]?.jobPosition
      ) {
        progress += 10;
      }

      if (addSkills?.length >= 1 && addSkills[0]?.skill) {
        progress += 10;
      }
      if (addSocial?.length >= 1 && addSocial[0]?.fbLink) {
        progress += 10;
      }

      return progress;
    };

    // Update progress when user data changes
    setProgressNumber(calculateProgress());
  }, [
    fullName,
    email,
    addEdu,
    addExperience,
    title,
    description,
    addSocial,
    addSkills,
    profilePhoto,
    coverPhoto,
  ]);

  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 8,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let progressBarWidth = `${Math.floor(1015 * (progressNumber / 100))}px`;

  if (progressBarWidth === "0px") {
    progressBarWidth = "1px";
  }

  // console.log(user?.finance[0]);
  console.log(addSocial);

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className="border-b border-[#C7CAD1]">
          <div>
            <h2 className="text-[36px] font-[600] text_black_gray leading-[40px] pb-3">
              Profile Settings
            </h2>
          </div>
        </div>
        {/*  */}
        <div>
          <div>
            <div className="pt-2.5 pb-1 flex flex-row items-center justify-between">
              <h1 className="text_black_gray text-[18px] font-[600]">
                Profile Complete
              </h1>
              <h1 className="text_black_gray text-[18px] font-[600]">
                {progressNumber}%
              </h1>
            </div>
          </div>
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow="50"
              className="block rounded-full bg-[#E3E5E8] w-[1015px]"
            >
              <span
                className="block h-4 rounded-full bg-[#20AC90] text-center text-[10px]/4 "
                style={{ width: progressBarWidth }}
              ></span>
            </span>
          </div>
        </div>

        {/* tab */}
        <div className="py-2.5">
          <section className="max-w-full" aria-multiselectable="false">
            <ul
              className="flex items-center gap-3"
              role="tablist"
              ref={wrapperRef}
            >
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed rounded-[50px] ${
                    tabSelected.currentTab === 1
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-1e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="1"
                  tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                  aria-controls="tab-panel-1e"
                  aria-selected={`${
                    tabSelected.currentTab === 1 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 1 })
                  }
                >
                  <span>Basic Information</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 2
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-2e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="2"
                  tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                  aria-controls="tab-panel-2e"
                  aria-selected={`${
                    tabSelected.currentTab === 2 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 2 })
                  }
                >
                  <span>Images</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 3
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-3e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="3"
                  tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                  aria-controls="tab-panel-3e"
                  aria-selected={`${
                    tabSelected.currentTab === 3 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 3 })
                  }
                >
                  <span>About</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 4
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-4e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="4"
                  tabindex={`${tabSelected.currentTab === 4 ? "0" : "-1"}`}
                  aria-controls="tab-panel-3e"
                  aria-selected={`${
                    tabSelected.currentTab === 4 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 4 })
                  }
                >
                  <span>Education</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 5
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-5e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="5"
                  tabindex={`${tabSelected.currentTab === 5 ? "0" : "-1"}`}
                  aria-controls="tab-panel-3e"
                  aria-selected={`${
                    tabSelected.currentTab === 5 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 5 })
                  }
                >
                  <span>Experience</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 6
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-6e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="6"
                  tabindex={`${tabSelected.currentTab === 6 ? "0" : "-1"}`}
                  aria-controls="tab-panel-3e"
                  aria-selected={`${
                    tabSelected.currentTab === 6 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 6 })
                  }
                >
                  <span>Skills</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 7
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-7e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="7"
                  tabindex={`${tabSelected.currentTab === 7 ? "0" : "-1"}`}
                  aria-controls="tab-panel-3e"
                  aria-selected={`${
                    tabSelected.currentTab === 7 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 7 })
                  }
                >
                  <span>Financial</span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[50px] px-4 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 8
                      ? "bg-[#D6E9F5] text-[#20AC90]"
                      : "w-full bg-[#E3E5E8] justify-self-center text_black"
                  }`}
                  id="tab-label-8e"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="8"
                  tabindex={`${tabSelected.currentTab === 8 ? "0" : "-1"}`}
                  aria-controls="tab-panel-3e"
                  aria-selected={`${
                    tabSelected.currentTab === 8 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 8 })
                  }
                >
                  <span>Social Connect</span>
                </button>
              </li>
            </ul>
            <div className="pt-10">
              {/* Basic Information */}
              <div
                className={` ${tabSelected.currentTab === 1 ? "" : "hidden"}`}
                id="tab-panel-1e"
                aria-hidden={`${
                  tabSelected.currentTab === 1 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-1e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b border-[#C7CAD1]">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        Basic Information
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-[30px]">
                    <div className="flex flex-row items-center gap-12">
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                      />
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="flex flex-row items-center gap-12">
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="number"
                        placeholder="Phone Number"
                      />
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        value={altPhoneNumber}
                        onChange={(e) => setAltPhoneNumber(e.target.value)}
                        type="number"
                        placeholder="Alternate Phone Number"
                      />
                    </div>
                    <div className="flex flex-row items-center gap-12">
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        value={reTypePassword}
                        onChange={(e) => setReTypePassword(e.target.value)}
                        type="password"
                        placeholder="Re-type password"
                      />
                    </div>

                    <div className="mt-5">
                      <button
                        onClick={() => {
                          setTabSelected({ ...tabSelected, currentTab: 2 });
                          handleSubmit();
                        }}
                        className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                      >
                        Save & Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* image */}
              <div
                className={`${tabSelected.currentTab === 2 ? "" : "hidden"}`}
                id="tab-panel-2e"
                aria-hidden={`${
                  tabSelected.currentTab === 2 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-2e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b border-[#C7CAD1]">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        Images
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <div className="flex flex-col gap-5">
                      <h1 className="text-[16px] font-[400] text-black leading-[16px] text-center">
                        Recommended size: 300 X 300
                      </h1>
                      <div className="w-[208px] h-[208px] mx-auto bg-[#E3E5E8] rounded-full flex items-center justify-center overflow-hidden">
                        {profilePhoto && (
                          <img
                            className="className='w-[108px] "
                            src={URL.createObjectURL(profilePhoto)}
                          />
                        )}

                        {!profilePhoto && !user?.pro_pic && (
                          <img
                            className="w-[108px]"
                            src={image_upload}
                            alt=""
                          />
                        )}

                        {user?.pro_pic && !profilePhoto ? (
                          <img
                            className="className='w-[108px] object-cover "
                            src={baseUrl + user?.pro_pic?.path}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <input
                          onChange={handleProfilePhoto}
                          id="upload1"
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                        <label
                          for="upload1"
                          className="bg-[#2872A4] py-3.5 px-6 rounded-[5px] text-white flex flex-row gap-2 cursor-pointer"
                        >
                          <img src={camera_white} alt="" />
                          Select Profile Picture
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <h1 className="text-[16px] font-[400] text-black leading-[16px] text-center">
                        Recommended size: 718 X 300
                      </h1>
                      <div className="w-[524px] h-[208px] mx-auto bg-[#E3E5E8] rounded-[10px] flex items-center justify-center overflow-hidden">
                        {coverPhoto && (
                          <img
                            className="className='w-[108px] "
                            src={URL.createObjectURL(coverPhoto)}
                          />
                        )}

                        {!coverPhoto && !user?.cov_pic && (
                          <img
                            className="w-[108px]"
                            src={image_upload}
                            alt=""
                          />
                        )}

                        {user?.cov_pic && !coverPhoto ? (
                          <img
                            className="className='w-[108px] object-cover "
                            src={baseUrl + user?.cov_pic?.path}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mx-auto">
                        <input
                          onChange={handleCoverPhoto}
                          id="upload2"
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                        <label
                          for="upload2"
                          className="bg-[#2872A4] py-3.5 px-6 rounded-[5px] text-white flex flex-row gap-2 "
                        >
                          <img src={camera_white} alt="" />
                          Select Cover Picture
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        setTabSelected({ ...tabSelected, currentTab: 1 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        setTabSelected({ ...tabSelected, currentTab: 3 });
                        handleSubmit();
                      }}
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              {/* about */}
              <div
                className={`${tabSelected.currentTab === 3 ? "" : "hidden"}`}
                id="tab-panel-3e"
                aria-hidden={`${
                  tabSelected.currentTab === 3 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-3e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b border-[#C7CAD1]">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        About
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 flex ">
                    <div className="w-full flex flex-col gap-10">
                      <div className="flex flex-col gap-2.5">
                        <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                          Title
                        </h2>
                        <div className="">
                          <input
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your Title"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                          Short Description
                        </h2>
                        <div className="">
                          <textarea
                            type="text"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            className=" w-full rounded-[10px] bg-[#F1F2F3]  p-4 outline-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                          Biography
                        </h2>
                        <div className="">
                          <ReactQuill
                            modules={module}
                            theme="snow"
                            value={biography}
                            onChange={setBiography}
                            className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        setTabSelected({ ...tabSelected, currentTab: 2 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        setTabSelected({ ...tabSelected, currentTab: 4 });
                        handleSubmit();
                      }}
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Education */}
              <div
                className={`${tabSelected.currentTab === 4 ? "" : "hidden"}`}
                id="tab-panel-4e"
                aria-hidden={`${
                  tabSelected.currentTab === 3 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-4e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b pb-2 border-[#C7CAD1] flex flex-row justify-between">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        Education
                      </h2>
                    </div>
                    <button
                      onClick={handleAddEdu}
                      className="primary_green py-2 px-4 rounded-[5px] text-white flex flex-row gap-2"
                    >
                      <img src={plus_white} alt="" />
                      Add Education
                    </button>
                  </div>
                  <div className="mt-5 flex ">
                    <div className="w-full flex flex-col gap-10">
                      <div className="flex flex-col gap-5">
                        {addEdu?.map((item, i) => (
                          <div
                            key={i}
                            className="w-full flex flex-col gap-10 mt-10"
                          >
                            <div className="flex flex-col gap-2.5">
                              <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                School/Institute/University name
                              </h2>
                              <div className="">
                                <input
                                  className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                  type="text"
                                  value={item?.instituteName}
                                  onChange={(e) =>
                                    handleChangeEdu(
                                      i,
                                      "instituteName",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Institute name"
                                />
                              </div>
                            </div>
                            <div className="flex w-full gap-10">
                              <div className="w-full flex flex-col gap-2.5">
                                <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                  Degree name
                                </h2>
                                <div className="">
                                  <input
                                    className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                    type="text"
                                    value={item?.degreeName}
                                    onChange={(e) =>
                                      handleChangeEdu(
                                        i,
                                        "degreeName",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Degree name"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2.5 w-full ">
                                <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                  Duration
                                </h2>
                                <div className="">
                                  <input
                                    className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                    type="text"
                                    value={item?.duration}
                                    onChange={(e) =>
                                      handleChangeEdu(
                                        i,
                                        "duration",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Duration"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex w-full gap-10">
                              <div className="w-full flex flex-col gap-2.5">
                                <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                  Start Date
                                </h2>
                                <div className="">
                                  <input
                                    className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                    type="date"
                                    value={item?.startDate}
                                    onChange={(e) =>
                                      handleChangeEdu(
                                        i,
                                        "startDate",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Degree name"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2.5 w-full ">
                                <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                  End Date
                                </h2>
                                <div className="">
                                  <input
                                    className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                    type="date"
                                    value={item?.endDate}
                                    onChange={(e) =>
                                      handleChangeEdu(
                                        i,
                                        "endDate",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Duration"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        setTabSelected({ ...tabSelected, currentTab: 3 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        setTabSelected({ ...tabSelected, currentTab: 5 });
                        handleSubmit();
                      }}
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Expreience */}
              <div
                className={` ${tabSelected.currentTab === 5 ? "" : "hidden"}`}
                id="tab-panel-5e"
                aria-hidden={`${
                  tabSelected.currentTab === 5 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-5e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b pb-2 border-[#C7CAD1] flex flex-row justify-between">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        Experience
                      </h2>
                    </div>
                    <button
                      onClick={handleAddExperience}
                      className="primary_green py-2 px-4 rounded-[5px] text-white flex flex-row gap-2"
                    >
                      <img src={plus_white} alt="" />
                      Add Experience
                    </button>
                  </div>
                  <div className="mt-5 flex ">
                    <div className="w-full flex flex-col gap-10">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                          {addExperience?.map((item, i) => (
                            <div
                              key={i}
                              className="w-full flex flex-col gap-10 mt-12"
                            >
                              <div className="flex w-full gap-10">
                                <div className="w-full flex flex-col gap-2.5">
                                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                    Job Title
                                  </h2>
                                  <div className="">
                                    <input
                                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                      type="text"
                                      value={item?.jobTitle}
                                      onChange={(e) =>
                                        handleChangeExperience(
                                          i,
                                          "jobTitle",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Job Title"
                                    />
                                  </div>
                                </div>
                                <div className="w-full flex flex-col gap-2.5">
                                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                    Job Position
                                  </h2>
                                  <div className="">
                                    <input
                                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                      type="text"
                                      value={item?.jobPosition}
                                      onChange={(e) =>
                                        handleChangeExperience(
                                          i,
                                          "jobPosition",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Position Name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-full gap-10">
                                <div className="flex flex-col gap-2.5 w-full ">
                                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                    Description
                                  </h2>
                                  <div className="">
                                    <input
                                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                      type="text"
                                      value={item?.jobDescription}
                                      onChange={(e) =>
                                        handleChangeExperience(
                                          i,
                                          "jobDescription",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Details"
                                    />
                                  </div>
                                </div>
                                <div className="w-full flex flex-col gap-2.5">
                                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                    Total Experience
                                  </h2>
                                  <div className="w-full relative">
                                    <select
                                      onChange={(e) =>
                                        handleChangeExperience(
                                          i,
                                          "totalExperience",
                                          e.target.value
                                        )
                                      }
                                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                    >
                                      <option value="">
                                        ---Select Year---
                                      </option>
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                      <option value={6}>6</option>
                                      <option value={7}>7</option>
                                      <option value={8}>8</option>
                                      <option value={9}>9</option>
                                      <option value={10}>10</option>
                                    </select>
                                    <img
                                      src={down_arrow}
                                      alt="icon"
                                      className="absolute top-[20px] right-2 transform -translate-y-1/2"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-full gap-10">
                                <div className="w-full flex flex-col gap-2.5">
                                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                    Start Date
                                  </h2>
                                  <div className="">
                                    <input
                                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                      type="date"
                                      value={item?.startDate}
                                      onChange={(e) =>
                                        handleChangeExperience(
                                          i,
                                          "startDate",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Degree name"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2.5 w-full ">
                                  <h2 className="text-[14px] font-[400] text_black leading-[18px]">
                                    End Date
                                  </h2>
                                  <div className="">
                                    <input
                                      className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                                      type="date"
                                      value={item?.endDate}
                                      onChange={(e) =>
                                        handleChangeExperience(
                                          i,
                                          "endDate",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Duration"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        setTabSelected({ ...tabSelected, currentTab: 4 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        setTabSelected({ ...tabSelected, currentTab: 6 });
                        handleSubmit();
                      }}
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Skill */}
              <div
                className={`${tabSelected.currentTab === 6 ? "" : "hidden"}`}
                id="tab-panel-6e"
                aria-hidden={`${
                  tabSelected.currentTab === 6 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-6e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b border-[#C7CAD1]">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        Skills
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 flex ">
                    <div className="w-full flex flex-col gap-10">
                      {addSkills.map((item, i) => (
                        <div key={i} className="flex flex-col gap-5">
                          <div className="relative">
                            <input
                              className="w-full px-9 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                              value={item.skill}
                              onChange={(e) =>
                                handleChangeSkill(i, "skill", e.target.value)
                              }
                              type="text"
                              placeholder="Enter Social Link"
                            />
                          </div>
                        </div>
                      ))}
                      <div className="ml-2">
                        <button
                          onClick={handleAddSkill}
                          className="pe-1.5 scroll-py-1.5 bg-[#1E567B] rounded-[3px] text-white flex flex-row "
                        >
                          <img src={plus_white} alt="" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        setTabSelected({ ...tabSelected, currentTab: 5 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        // change currentTab 7
                        {
                          setTabSelected({ ...tabSelected, currentTab: 7 });
                          handleSubmit();
                        }
                      }
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Financial */}
              <div
                className={` ${tabSelected.currentTab === 7 ? "" : "hidden"}`}
                id="tab-panel-7e"
                aria-hidden={`${
                  tabSelected.currentTab === 7 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-7e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b border-[#C7CAD1]">
                    <div className="flex gap-[30px]">
                      <button
                        onClick={() => setPaymentOpen("mobileBanking")}
                        className={`text-[20px] font-[600]  leading-[40px] ${
                          isPaymentOpen === "mobileBanking"
                            ? "text-[#20ac90]"
                            : "text_black"
                        }`}
                      >
                        Mobile Banking
                      </button>
                      <button
                        onClick={() => setPaymentOpen("bank")}
                        className={`text-[20px] font-[600]  leading-[40px] ${
                          isPaymentOpen === "bank"
                            ? "text-[#20ac90]"
                            : "text_black"
                        }`}
                      >
                        Bank
                      </button>
                    </div>
                  </div>

                  {/* Mobile banking  */}
                  {isPaymentOpen === "mobileBanking" ? (
                    <div className="mt-[30px] lg:w-[700px] mx-auto ">
                      {/* <select
                        onChange={(e) =>
                          setFinancial({
                            ...financial,
                            mobile: e.target.value,
                          })
                        }
                        className="w-full rounded-[50px] bg-[#F1F2F3] outline-none px-3 py-2.5"
                      >
                        <option value="">Please select</option>
                        <option value="Bkash">Bkash</option>
                        <option value="Nagod">Nagod</option>
                        <option value="Rocket">Rocket</option>
                      </select> */}

                      <div className="flex gap-[20px] items-center ">
                        <h2 className="text-[18px]">Bkash</h2>
                        <div className="pl-[5px] w-full">
                          <input
                            value={financial?.bkash}
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                bkash: e.target.value,
                              })
                            }
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                            placeholder={"11 Digit Bkash Number"}
                          />
                        </div>
                      </div>
                      <div className="flex gap-[20px] items-center my-[20px]">
                        <h2 className="text-[18px]">Rocket</h2>
                        <input
                          value={financial?.rocket}
                          onChange={(e) =>
                            setFinancial({
                              ...financial,
                              rocket: e.target.value,
                            })
                          }
                          className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                          placeholder={"12 Digit Rocket Number"}
                        />
                      </div>
                      <div className="flex gap-[20px] items-center">
                        <h2 className="text-[18px]">Nagad</h2>
                        <div className="pl-[5px] w-full">
                          <input
                            value={financial?.nagad}
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                nagad: e.target.value,
                              })
                            }
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                            placeholder={"11 Digit Nagad Number"}
                          />
                        </div>
                      </div>
                    </div>
                  ) : isPaymentOpen === "bank" ? (
                    <div className="mt-[30px] lg:w-[800px] mx-auto ">
                      <div className="flex gap-[20px] items-center mb-[20px]">
                        <h2 className="text-[18px] whitespace-nowrap">
                          Selected Bank
                        </h2>
                        <div className="pl-[35px] w-full">
                          <select
                            value={financial?.bank_name}
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                bank_name: e.target.value,
                              })
                            }
                            className="w-full rounded-[50px] bg-[#F1F2F3] outline-none px-3 py-2.5"
                          >
                            <option value="">Please select</option>
                            <option value="AB Bank Limited">
                              AB Bank Limited
                            </option>
                            <option value="Al-Arafah Islami Bank PLC">
                              Al-Arafah Islami Bank PLC
                            </option>
                            <option value="Bangladesh Commerce Bank Ltd.">
                              Bangladesh Commerce Bank Ltd.
                            </option>
                            <option value="Bank Asia PLC">Bank Asia PLC</option>
                            <option value="Bengal Commercial Bank PLC">
                              Bengal Commercial Bank PLC
                            </option>
                            <option value="Bank Asia Limited">
                              Bank Asia Limited
                            </option>
                            <option value="Agrani Bank PLC">
                              Agrani Bank PLC
                            </option>
                            <option value="Bangladesh Krishi Bank">
                              Bangladesh Krishi Bank
                            </option>
                            <option value="Dhaka Bank Limited">
                              Dhaka Bank Limited
                            </option>
                            <option value="Islami Bank Bangladesh Ltd">
                              Islami Bank Bangladesh Ltd
                            </option>
                            <option value="BRAC Bank Limited">
                              BRAC Bank Limited
                            </option>
                            <option value="Citibank n a">Citibank n a</option>
                            <option value="Community Bank Bangladesh PLC">
                              Community Bank Bangladesh PLC
                            </option>
                            <option value="City Bank Limited">
                              City Bank Limited
                            </option>
                            <option value="Commercial Bank of Ceylon limited">
                              Commercial Bank of Ceylon limited
                            </option>
                            <option value="Jamuna Bank Limited">
                              Jamuna Bank Limited
                            </option>
                            <option value="Janata">Janata</option>
                            <option value="HSBC">HSBC</option>
                            <option value="Woori Bank Ltd.">
                              Woori Bank Ltd.
                            </option>
                            <option value="State Bank of India">
                              State Bank of India
                            </option>
                            <option value="Standard Chartered Bank">
                              Standard Chartered Bank
                            </option>
                            <option value="National Bank of Pakistan">
                              National Bank of Pakistan
                            </option>
                            <option value="Habib Bank Ltd.">
                              Habib Bank Ltd.
                            </option>
                            <option value="Commercial Bank of Ceylon">
                              Commercial Bank of Ceylon
                            </option>
                            <option value="CITI Bank NA">CITI Bank NA</option>
                            <option value="Bank Al-Falah ">
                              Bank Al-Falah{" "}
                            </option>
                            <option value="Uttara Bank PLC">
                              Uttara Bank PLC
                            </option>
                            <option value="United Commercial Bank PLC">
                              United Commercial Bank PLC
                            </option>
                            <option value="Union Bank PLC">
                              Union Bank PLC
                            </option>
                            <option value="Trust Bank Ltd.">
                              Trust Bank Ltd.
                            </option>
                            <option value="Standard Bank PLC">
                              Standard Bank PLC
                            </option>
                            <option value="Southeast Bank PLC">
                              Southeast Bank PLC
                            </option>
                            <option value="SBAC Bank PLC">SBAC Bank PLC</option>
                            <option value="Social Islami Bank PLC">
                              Social Islami Bank PLC
                            </option>
                            <option value="Shimanto Bank PLC ">
                              Shimanto Bank PLC{" "}
                            </option>
                            <option value="Shahjalal Islami Bank PLC">
                              Shahjalal Islami Bank PLC
                            </option>
                            <option value="Pubali Bank PLC">
                              Pubali Bank PLC
                            </option>
                            <option value="Prime Bank PLC ">
                              Prime Bank PLC
                            </option>
                            <option value="Premier Bank PLC">
                              Premier Bank PLC
                            </option>
                            <option value="Padma Bank PLC">
                              Padma Bank PLC
                            </option>
                            <option value="One Bank PLC">One Bank PLC</option>
                            <option value="NRB Commercial Bank PLC">
                              NRB Commercial Bank PLC
                            </option>
                            <option value="NRB Bank Ltd">NRB Bank Ltd</option>
                            <option value="NCC Bank PLC">NCC Bank PLC</option>
                            <option value="National Bank Ltd">
                              National Bank Ltd
                            </option>
                            <option value="Mutual Trust Bank PLC">
                              Mutual Trust Bank PLC{" "}
                            </option>
                            <option value="Modhumoti Bank PLC">
                              Modhumoti Bank PLC
                            </option>
                            <option value="Midland Bank PLC">
                              Midland Bank PLC
                            </option>
                            <option value="Mercantile Bank PLC">
                              Mercantile Bank PLC
                            </option>
                            <option value="Meghna Bank PLC">
                              Meghna Bank PLC
                            </option>
                            <option value="IFIC Bank PLC">IFIC Bank PLC</option>
                            <option value="ICB Islamic Bank">
                              ICB Islamic Bank
                            </option>
                            <option value="Global Islami Bank PLC">
                              Global Islami Bank PLC
                            </option>
                            <option value="First Security Islami Bank PLC">
                              First Security Islami Bank PLC
                            </option>
                            <option value="EXIM Bank PLC">EXIM Bank PLC</option>
                            <option value="Eastern Bank PLC">
                              Eastern Bank PLC
                            </option>
                            <option value="Dutch Bangla Bank PLC">
                              Dutch Bangla Bank PLC
                            </option>
                            <option value="Citizens Bank PLC">
                              Citizens Bank PLC
                            </option>
                            <option value="Midland Bank">Midland Bank</option>
                            <option value="Bengal Commercial Bank Limited">
                              Bengal Commercial Bank Limited
                            </option>
                            <option value="Mutual Trust Bank Limited">
                              Mutual Trust Bank Limited
                            </option>
                            <option value="EXIM Bank Limited">
                              EXIM Bank Limited
                            </option>
                            <option value="IFIC Bank Limited">
                              IFIC Bank Limited
                            </option>
                            <option value="Mercantile Bank Limited">
                              Mercantile Bank Limited
                            </option>
                            <option value="Sonali Bank">Sonali Bank</option>
                            <option value="Bank Alfalah Limited">
                              Bank Alfalah Limited
                            </option>
                            <option value="Jubilee Bank">Jubilee Bank</option>
                            <option value="Modhumoti Bank Limited">
                              Modhumoti Bank Limited
                            </option>
                            <option value="Probashi Kallyan Bank">
                              Probashi Kallyan Bank
                            </option>
                            <option value="Rupali Bank PLC">
                              Rupali Bank PLC
                            </option>
                            <option value="BASIC Bank">BASIC Bank</option>
                            <option value="Bangladesh Development Bank PLC">
                              Bangladesh Development Bank PLC
                            </option>
                            <option value="Bangladesh Krishi Bank">
                              Bangladesh Krishi Bank
                            </option>
                            <option value="RAKUB">RAKUB</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-[20px] items-center ">
                        <h2 className="text-[18px]">Branch</h2>
                        <div className="pl-[90px] w-full">
                          <input
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                branch_name: e.target.value,
                              })
                            }
                            value={financial?.branch_name}
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                            placeholder={"11 Digit Bkash Number"}
                          />
                        </div>
                      </div>
                      <div className="flex gap-[20px] items-center my-[20px]">
                        <h2 className="text-[18px] whitespace-nowrap">
                          Routing Number
                        </h2>
                        <div className="w-full pl-[20px]">
                          <input
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                routing_number: e.target.value,
                              })
                            }
                            value={financial?.routing_number}
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                            placeholder={"12 Digit Rocket Number"}
                          />
                        </div>
                      </div>
                      <div className="flex gap-[20px] items-center">
                        <h2 className="text-[18px] whitespace-nowrap">
                          A/C Name
                        </h2>
                        <div className="pl-[75px] w-full">
                          <input
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                acount_name: e.target.value,
                              })
                            }
                            value={financial?.acount_name}
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                            placeholder={"11 Digit Nagad Number"}
                          />
                        </div>
                      </div>
                      <div className="flex gap-[20px] items-center mt-[20px]">
                        <h2 className="text-[18px] whitespace-nowrap">
                          A/C NO.
                        </h2>
                        <div className="pl-[95px] w-full">
                          <input
                            onChange={(e) =>
                              setFinancial({
                                ...financial,
                                acount_number: e.target.value,
                              })
                            }
                            value={financial?.acount_number}
                            className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none "
                            placeholder={"11 Digit Nagad Number"}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        setTabSelected({ ...tabSelected, currentTab: 6 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        setTabSelected({ ...tabSelected, currentTab: 8 });
                        handleSubmit();
                      }}
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Social Connect */}
              <div
                className={` ${tabSelected.currentTab === 8 ? "" : "hidden"}`}
                id="tab-panel-8e"
                aria-hidden={`${
                  tabSelected.currentTab === 8 ? "true" : "false"
                }`}
                role="tabpanel"
                aria-labelledby="tab-label-8e"
                tabindex="-1"
              >
                <div className="bg-white px-10 pt-5 pb-10 rounded-[20px]">
                  <div className="border-b border-[#C7CAD1]">
                    <div>
                      <h2 className="text-[20px] font-[600] text_black leading-[40px]">
                        Social Connect
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 flex ">
                    <div className="w-full flex flex-col gap-10">
                      {addSocial.map((item, i) => (
                        <div key={i} className="flex flex-col gap-5">
                          <div className="relative">
                            {i === 0 ? (
                              <img
                                className="absolute top-[7px] left-[10px] w-7"
                                src={fb_icon}
                                alt=""
                              />
                            ) : i === 1 ? (
                              <img
                                className="absolute top-[7px] left-[10px] w-7"
                                src={messenger_icon}
                                alt=""
                              />
                            ) : i === 2 ? (
                              <img
                                className="absolute top-[7px] left-[10px] w-7"
                                src={whatsapp_icon}
                                alt=""
                              />
                            ) : i === 3 ? (
                              <img
                                className="absolute top-[7px] left-[10px] w-7"
                                src={linkedin_icon}
                                alt=""
                              />
                            ) : i === 4 ? (
                              <img
                                className="absolute top-[7px] left-[10px] w-7"
                                src={github_icon}
                                alt=""
                              />
                            ) : null}
                            <input
                              className="w-full pl-[50px] py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                              value={item.fbLink}
                              onChange={(e) =>
                                handleChangeSocial(i, "fbLink", e.target.value)
                              }
                              type="text"
                              placeholder="Enter Social Link"
                            />
                          </div>
                        </div>
                      ))}

                      {addSocial?.length < 5 && (
                        <div className="ml-2">
                          <button
                            onClick={handleAddSocial}
                            className="pe-1.5 scroll-py-1.5 bg-[#1E567B] rounded-[3px] text-white flex flex-row "
                          >
                            <img src={plus_white} alt="" />
                            Add
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-10 items-center justify-end flex gap-10">
                    <button
                      onClick={() =>
                        // change currentTab 7
                        setTabSelected({ ...tabSelected, currentTab: 7 })
                      }
                      className="border border-[#5D636F] py-3.5 px-6 rounded-[5px] text-black flex items-center gap-2.5"
                    >
                      <img src={left_arrow} alt="" />
                      Previous
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="primary_green py-3.5 px-6 rounded-[5px] text-white"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
