import React, { useEffect, useState } from "react";
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
import image_upload from "../../../../assets/images/image_upload_gray.png";

const ManageCertificate = () => {
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [certificateHeight, setCertificateHeight] = useState("");
  const [certificateWidth, setCertificateWidth] = useState("");
  const [issueDateValue, setIssueDateValue] = useState("");

  const [certificatePic, setCertificatePic] = useState(null);
  const [signaturePic, setSignaturePic] = useState(null);
  const [enablePrint, setEnablePrint] = useState(false);
  const [selectOneCertificateId, setSelectOneCertificateId] = useState(null);
  const [allCertificateData, setAllCertificateData] = useState();

  const handleSignaturePic = (e) => {
    setSignaturePic(e.target.files[0]);
  };
  const handleCertificatePic = (e) => {
    setCertificatePic(e.target.files[0]);
  };

  useEffect(() => {
    fetchAllCertificates();
  }, []);

  const fetchAllCertificates = async () => {
    try {
      const response = await get("/api/certificate/all");

      if (response?.data) {
        setAllCertificateData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error?.message);
    }
  };

  console.log(selectOneCertificateId);

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

  const payload = {
    title,
    description,
    enable_print: enablePrint,
    certificate_height: parseInt(certificateHeight),
    certificate_width: parseInt(certificateWidth),
    certificate_pic: certificatePic,
    signature_pic: signaturePic,
    issue_date: issueDateValue,
  };

  const handleCreateUnit = async () => {
    console.log(payload);
    setLoading(true);

    // post certificate data
    if (!selectOneCertificateId) {
      try {
        const res = await post("/api/certificate/add", payload, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(res);
        if (res?.success) {
          resetForm();
          fetchAllCertificates();
          setShowCertificateForm(false);
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
    //  update certificate
    if (selectOneCertificateId) {
      console.log(payload);
      try {
        const res = await put(
          // there is api some problem here required backend problem
          `/api/certificate/update/${selectOneCertificateId}`,
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
          fetchAllCertificates();
          setShowCertificateForm(false);
          toast.success(res.message);
          // navigate("/admin/manage-course");
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

  const resetForm = () => {
    setLoading(false);
    setTitle("");
    setDescription("");
    setSignaturePic("");
    setCertificateHeight("");
    setCertificateWidth("");
    setEnablePrint(false);
    setCertificatePic(null);
  };
  const [showCertificateForm, setShowCertificateForm] = useState(false);

  const handleClickCertificateForm = () => {
    setShowCertificateForm(true);
  };
  const handleClickHideCertificateForm = () => {
    setShowCertificateForm(false);
  };

  // edit fn
  const handleEdit = (item) => {
    setShowCertificateForm(true);
    setSelectOneCertificateId(item?.id);
    setTitle(item?.title);
    setDescription(item?.description);
    setSignaturePic(item?.signature_pic);
    setCertificatePic(item?.certificate_pic);
    setIssueDateValue(item?.issue_date);
    setEnablePrint(item?.enable_print);
    setCertificateHeight(item?.certificate_height);
    setCertificateWidth(item?.certificate_width);
  };

  // delete certificate fn
  const handleDeleteCertificate = (id) => {
    console.log(id);
    deleteCertificate(id);
  };
  // delete certificate fn
  const deleteCertificate = async (id) => {
    try {
      const response = await del(`/api/certificate/delete/${id}`);

      if (response?.success) {
        fetchAllCertificates();
        toast.success(response?.message);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("Error creating app:", error?.message);
    }
  };

  return (
    <>
      {!showCertificateForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Certificate
                </h2>
              </div>
              <div>
                <button
                  onClick={handleClickCertificateForm}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                >
                  <img className="w-5" src={plus_white} alt="" />
                  Add New Certificate
                </button>
              </div>
            </div>

            <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
              <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
                <div>
                  <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                    Certificate List
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
                    {/* <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                    >
                      Author
                    </th> */}
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

                  {allCertificateData?.length > 0 ? (
                    allCertificateData?.map((item, i) => (
                      <tr key={item?.id} className="">
                        <td className="h-10 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {item?.title}
                          </h1>
                        </td>
                        {/* <td className="h-10 py-2">
                      <div>
                        <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                          {unitData?.author}
                        </h1>
                      </div>
                    </td> */}
                        <td className="h-10 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {item?.issue_date}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {item?.id}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <div className="flex flex-row gap-2.5">
                            <div
                              onClick={() => handleEdit(item)}
                              className="hover:cursor-pointer"
                            >
                              <img src={file_edit} alt="" />
                            </div>
                            <button
                              onClick={() => handleDeleteCertificate(item?.id)}
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
                  <button onClick={handleClickHideCertificateForm} className="">
                    <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
                  </button>
                </div>
                <div>
                  <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                    Add New Certificate
                  </h2>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col gap-5 ">
              <div className="flex flex-row w-full gap-14">
                <InputField value={title} setValue={setTitle} title="Title" />

                <div className="w-full">
                  <div className="w-full flex flex-col gap-2.5">
                    <h2 className="text-[16px] font-[400] text_black leading-[18px]">
                      Issue Date
                    </h2>
                    <div className="">
                      <input
                        className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
                        type="date"
                        value={issueDateValue}
                        onChange={(e) => setIssueDateValue(e.target?.value)}
                        placeholder="Degree name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative">
                <label
                  htmlFor="HeadlineAct"
                  className="text-[16px] font-[400] leading-[22px] mb-3"
                >
                  Description
                </label>

                <ReactQuill
                  modules={module}
                  theme="snow"
                  value={description}
                  onChange={(value) => setDescription(value)}
                  className="h-[185px] bg-white overflow-hidden rounded-[5px] border border-[#E3E5E8]"
                />
              </div>

              <div className="flex flex-row w-full gap-14">
                <InputField
                  value={certificateHeight}
                  setValue={setCertificateHeight}
                  title="Height"
                  type={"number"}
                />
                <InputField
                  value={certificateWidth}
                  setValue={setCertificateWidth}
                  title="Width"
                  type={"number"}
                />
              </div>

              <div className="w-1/2 my-3">
                <ToggleButton
                  value={enablePrint}
                  setValue={setEnablePrint}
                  title="Enable Print"
                />
              </div>
              <div className="grid grid-cols-2 w-full gap-14 justify-between">
                {/* certificate field  */}
                <div>
                  <label className="text-lg">Upload Certificate</label>
                  <br />
                  <input
                    onChange={handleCertificatePic}
                    id="upload1"
                    type="file"
                    className="border-gray-300 border p-2 rounded-md"
                    accept="image/*"
                  />
                </div>

                {/* signature field  */}
                <div>
                  <label className="text-lg">Upload Signature</label>
                  <br />
                  <input
                    onChange={handleSignaturePic}
                    id="upload2"
                    type="file"
                    className="border-gray-300 border p-2 rounded-md"
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-14">
                {/* certificate image  */}
                <div className="w-[524px] h-[408px] mx-auto bg-[#E3E5E8] rounded-[10px] flex items-center justify-center overflow-hidden">
                  {certificatePic ? (
                    <img
                      className="object-cover overflow-hidden "
                      src={
                        certificatePic?.path
                          ? baseUrl + certificatePic?.path
                          : URL.createObjectURL(certificatePic)
                      }
                      alt=""
                    />
                  ) : (
                    <img className="w-[108px]" src={image_upload} alt="" />
                  )}
                </div>
                {/* signature image  */}
                <div className="w-[524px] h-[408px] mx-auto bg-[#E3E5E8] rounded-[10px] flex items-center justify-center overflow-hidden">
                  {signaturePic ? (
                    <img
                      className="object-cover overflow-hidden"
                      src={
                        signaturePic?.path
                          ? baseUrl + signaturePic?.path
                          : URL.createObjectURL(signaturePic)
                      }
                      alt=""
                    />
                  ) : (
                    <img className="w-[108px]" src={image_upload} alt="" />
                  )}
                </div>
              </div>

              <div className="w-full relative pt-2.5">
                <div className="flex flex-row gap-[30px] justify-center w-full pt-5 border-t border-[#9096A2]">
                  <button
                    onClick={handleCreateUnit}
                    className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                  >
                    {loading ? <Loading /> : "Save Certificate"}
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

export default ManageCertificate;
