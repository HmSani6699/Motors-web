import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import SelectInput from "../../../../components/inputField/SelectInput";
import InputField from "../../../../components/inputField/InputField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { del, get, post, put } from "../../../../api/axious";
import Loading from "../../../../components/sheared/Loading";
import { Link } from "react-router-dom";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import plus_white from "../../../../assets/svg/plus_white.svg";
import ToggleButton from "../../../../components/inputField/ToggleButton";
import AuthSuggestion from "../../../../components/Common/AuthSuggestion";
import { MdRemoveRedEye } from "react-icons/md";
import SeminarParticipantsListModal from "../../../../components/Modal/SeminarParticipantsListModal";
import { AuthContext } from "../../../../layout/MainLayout";
import Swal from "sweetalert2";
import { timeFormat12 } from "../../../../../Hooks/timeFormate12";

const ManageSeminar = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [seminarDate, setSeminarDate] = useState("");
  const [seminarImage, setSeminarImage] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [type, setType] = useState("Online");
  const [typeOfOnline, setTypeOfOnline] = useState("Google Meet");
  const [offlineLoc, setOfflineLoc] = useState("Panthapath Signal, Green Road");
  const [seminarTime, setSeminarTime] = useState("");
  const [duration, setDuration] = useState("");
  const [durationParameter, setDurationParameter] = useState("");
  const [allSeminarData, setAllSeminarData] = useState([]);
  const [authLoading, setAuthLoading] = useState(false);
  const [searchAuthData, setSearchAuthData] = useState([]);
  const [showAuthSuggesstion, setShowAuthSuggesstion] = useState(false);
  const [initialParticipant, setInitialParticipant] = useState(0);

  const [editId, setEditId] = useState("");
  const [allParticipant, setAllParticipant] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleImage = (e) => {
    setSeminarImage(e.target.files[0]);
  };

  useEffect(() => {
    fetchAllSeminar();
  }, []);

  const fetchAllSeminar = async () => {
    try {
      const response = await get("/api/seminar/all");

      if (response?.data) {
        setAllSeminarData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
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

  let payload = {
    title,
    author: authorId,
    type,
    offlineLoc,
    typeOnline: typeOfOnline,
    seminar_duration: duration,
    seminar_duration_parameter: durationParameter,
    seminarStartDate: seminarDate,
    seminarStartTime: seminarTime,
    seminarPic: seminarImage,
    participants: initialParticipant,
  };

  // validate by offline and online location
  if (type === "Offline") {
    payload.typeOnline = "";
  }

  if (type === "Online") {
    payload.offlineLoc = "";
  }

  // post seminar
  const handleCreateSeminar = async () => {
    setLoading(true);
    // post
    if (!editId) {
      try {
        const res = await post("/api/seminar/add", payload, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (res?.success) {
          resetForm();
          fetchAllSeminar();
          setShowSeminarForm(false);
          toast.success(res.message);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to post");
        console.log("Failed to post/", error?.response?.data);
      } finally {
        setLoading(false);
      }
    }

    // update
    if (editId) {
      try {
        const res = await put(
          // there is api some problem here required backend problem
          `api/seminar/update/${editId}`,
          payload,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );
        console.log(res);
        if (res?.success) {
          resetForm();
          fetchAllSeminar();
          setShowSeminarForm(false);
          toast.success(res.message);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to post");
        console.log("Failed to post/", error?.response?.data);
      } finally {
        setLoading(false);
      }
    }
  };

  // delete seminar fn
  const handleDeleteSeminar = (id) => {
    console.log(id);
    deleteSeminar(id);
  };
  // delete seminar fn
  const deleteSeminar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await del(`/api/seminar/delete/${id}`);

          if (response?.success) {
            fetchAllSeminar();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } catch (error) {
          toast.error(error?.message);
          console.log("Error creating app:", error?.message);
        }
      }
    });
  };

  const resetForm = () => {
    setLoading(false);
    setTitle("");
    setAuthor("");
    setType("");
    setDuration("");
    setDurationParameter("");
    setSeminarDate("");
    setSeminarImage("");
    setOfflineLoc("");
    setSeminarTime("");
    setInitialParticipant(0);
  };
  const [showSeminarForm, setShowSeminarForm] = useState(false);

  const handleClickSeminarForm = () => {
    const customEvent = {
      target: {
        value: user?.fullName, // Assuming item is defined elsewhere in your code
      },
    };
    handleAuthorSuggesstion(customEvent);
    setShowSeminarForm(true);
    setEditId("");
  };
  const handleClickHideUnitForm = () => {
    setShowSeminarForm(false);
  };

  // handleEdit
  const handleEdit = (item) => {
    setShowSeminarForm(true);
    setEditId(item?.id);
    setTitle(item?.title);
    setAuthor(item?.author);
    setDurationParameter(item?.seminar_duration_parameter);
    setDuration(item?.seminar_duration);
    setTypeOfOnline(item?.typeOnline);
    setType(item?.type);
    setSeminarImage(item?.seminarPic);
    setSeminarDate(item?.seminarStartDate);
    setOfflineLoc(item?.offlineLoc);
    setInitialParticipant(item?.participants);
    setSeminarTime(item?.seminarStartTime);
    const customEvent = {
      target: {
        value: item?.author_info?.fullName, // Assuming item is defined elsewhere in your code
      },
    };
    if (item) {
      handleAuthorSuggesstion(customEvent);
    }
  };

  // handleViewSeminar
  const handleSeminarParticipant = (id) => {
    setOpenModal(!openModal);
    viewParticipant(id);
  };

  const viewParticipant = async (id) => {
    try {
      const response = await get(`/api/seminar/get_participants/${id}`);

      if (response?.success) {
        setAllParticipant(response?.data);
        console.log(response?.data);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("Error creating app:", error?.message);
    }
  };

  const handleAuthorSuggesstion = async (event) => {
    const query_text = event.target.value;
    setAuthor(query_text);

    if (query_text) {
      setShowAuthSuggesstion(true);
      setAuthLoading(true);
      try {
        const res = await get(`api/auth/search_non_student/${query_text}`);

        if (res) {
          setSearchAuthData(res.data);
          setAuthLoading(false);
        }
      } catch (error) {
        setAuthLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setAuthLoading(false);
      }
    } else {
      setShowSuggesstion(false);
      setSearchAuthData([]);
    }
  };

  return (
    <>
      {/* seminar modal  */}
      <div>
        {openModal && (
          <SeminarParticipantsListModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            allParticipant={allParticipant}
          />
        )}
      </div>

      {!showSeminarForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Seminar
                </h2>
              </div>
              <div>
                <button
                  onClick={handleClickSeminarForm}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                >
                  <img className="w-5" src={plus_white} alt="" />
                  Add New Seminar
                </button>
              </div>
            </div>

            <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
              <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
                <div>
                  <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                    Seminar List
                  </h1>
                </div>
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
                      Author
                    </th>
                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Participants
                    </th>
                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Start Time
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

                  {allSeminarData?.length > 0 ? (
                    allSeminarData?.map((item, i) => (
                      <tr className="">
                        <td className="h-10 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {item?.title}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {item?.author_info?.fullName}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {item?.participants}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {item?.seminarStartTime
                                ? timeFormat12(item?.seminarStartTime)
                                : "--"}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {item?.seminarStartDate}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {item?.id}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <div className="flex flex-row gap-2.5">
                            <button
                              onClick={() => handleEdit(item)}
                              className="hover:cursor-pointer"
                            >
                              <img src={file_edit} alt="" />
                            </button>
                            <button
                              onClick={() => handleSeminarParticipant(item?.id)}
                            >
                              <MdRemoveRedEye />
                            </button>
                            <button
                              onClick={() => handleDeleteSeminar(item?.id)}
                            >
                              <img src={delete_red} alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <span className="text-center my-5 text-xl text-black">
                      এখনো সার্টিফিকেট তৈরি হইনি
                    </span>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
                <div>
                  <button onClick={handleClickHideUnitForm} className="">
                    <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
                  </button>
                </div>
                <div>
                  <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                    Add New Seminar
                  </h2>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col gap-5 ">
              <div className="flex flex-row w-full gap-14">
                <InputField value={title} setValue={setTitle} title="Title" />

                <div className="w-full">
                  <label className="text-[16px] font-[400] leading-[22px]">
                    Author
                  </label>
                  <AuthSuggestion
                    obj_name="fullName"
                    loading={authLoading}
                    data={searchAuthData}
                    setInput={setAuthor}
                    setAuthorId={setAuthorId}
                    showSuggesstion={showAuthSuggesstion}
                    setShowSuggesstion={setShowAuthSuggesstion}
                  >
                    <input
                      type="text"
                      value={author}
                      onChange={(event) => handleAuthorSuggesstion(event)}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      placeholder={`Enter Author Name`}
                    />
                  </AuthSuggestion>
                </div>
              </div>

              <div className="flex flex-row w-full gap-14">
                <SelectInput
                  value={type}
                  setValue={setType}
                  title="Venue"
                  options={[
                    { id: 1, value: "Online" },
                    { id: 2, value: "Offline" },
                  ]}
                />
                {type === "Online" ? (
                  <SelectInput
                    isDisable={type === "Offline" && true}
                    value={typeOfOnline}
                    setValue={setTypeOfOnline}
                    title="Online System"
                    options={[
                      { id: 1, value: "Zoom" },
                      { id: 2, value: "Google Meet" },
                      { id: 3, value: "Skype" },
                    ]}
                  />
                ) : (
                  <InputField
                    value={offlineLoc}
                    setValue={setOfflineLoc}
                    title="Location"
                  />
                )}
              </div>

              <div className="flex flex-row w-full gap-14">
                <InputField
                  type="number"
                  value={duration}
                  setValue={setDuration}
                  title="Duration"
                />
                <SelectInput
                  value={durationParameter}
                  setValue={setDurationParameter}
                  title="Duration Parameter"
                  options={[
                    { id: 1, value: "Second" },
                    { id: 2, value: "Minute" },
                    { id: 3, value: "Day" },
                    { id: 3, value: "Weak" },
                    { id: 4, value: "Month" },
                    { id: 5, value: "Year" },
                  ]}
                />
              </div>

              <div className="flex flex-row w-full gap-14">
                <div className="w-full">
                  {/* date section  */}
                  <div className="w-full flex flex-col gap-2.5 ">
                    <h2 className="text-[16px] font-[400] text_black leading-[18px]">
                      Date
                    </h2>
                    <div className="">
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        type="date"
                        value={seminarDate}
                        onChange={(e) => setSeminarDate(e.target?.value)}
                        placeholder="Degree name"
                      />
                    </div>
                  </div>
                </div>

                {/* seminar start time  */}
                <div className="w-full">
                  {/* date section  */}
                  <div className="w-full flex flex-col gap-2.5 ">
                    <h2 className="text-[16px] font-[400] text_black leading-[18px]">
                      Time
                    </h2>
                    <div className="">
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        type="time"
                        value={seminarTime}
                        onChange={(e) => setSeminarTime(e.target?.value)}
                        placeholder="Degree name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ">
                {/* image section  */}
                <div className=" ">
                  <div>
                    <label className="text-lg ">Upload Image</label>
                    <br />
                    <input
                      onChange={handleImage}
                      id="upload1"
                      type="file"
                      className="border-gray-300 border p-2 rounded-md w-[100%] mb-5"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full relative pt-2.5">
                <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                  <button
                    onClick={handleCreateSeminar}
                    className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                  >
                    {loading ? <Loading /> : "Save Seminar"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageSeminar;
