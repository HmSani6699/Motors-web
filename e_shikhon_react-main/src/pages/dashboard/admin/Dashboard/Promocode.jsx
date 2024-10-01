import React, { useEffect, useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import plus_white from "../../../../assets/svg/plus_white.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import InputField from "../../../../components/inputField/InputField";
import SelectInput from "../../../../components/inputField/SelectInput";
import Loading from "../../../../components/sheared/Loading";
import { del, get, post } from "../../../../api/axious";
import toast, { Toaster } from "react-hot-toast";
import down_arrow from "../../../../assets/svg/down_arrow.svg";
import SuggLoading from "../../../../components/Common/SuggLoading";
import CourseSuggestion from "../../../../components/Common/CourseSuggestion";

const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

const Promocode = () => {
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [create, setCreate] = useState(false);
  const [promocode, setPromocode] = useState();
  const [description, setDescription] = useState();
  const [discount, setDiscount] = useState();
  const [discountType, setDiscountType] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [userLimit, setUserLimit] = useState();
  const [repeat, setRepeat] = useState();
  const [courseType, setCourseType] = useState();
  const [courseCategory, setCourseCategory] = useState();
  const [courseName, setCourseName] = useState();
  const [allCourseName, setAllCourseName] = useState();
  const [status, setStatus] = useState();
  const [getAllPromocode, setAllPromocode] = useState([]);
  const [fromErrors, setFromErrors] = useState({
    promo: "",
    discount_amount: "",
    discount_type: "",
  });
  const [courseId, setCourseId] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const [courseLoading, setCourseLoading] = useState(false);
  const [searchCourseData, setSearchCourseData] = useState([]);
  const [showCourseSuggestion, setShowCourseSuggestion] = useState(false);
  const [course2, setCourse2] = useState("");

  // Validation from
  const validateFrom = () => {
    let isValid = true;

    const errors = {
      promo: "",
      discount_amount: "",
      discount_type: "",
    };

    if (!promocode) {
      isValid = false;
      errors.promo = "Promocode is required !";
    }
    if (!discount) {
      isValid = false;
      errors.discount_amount = "Discount is required !";
    }
    if (!promocode) {
      isValid = false;
      errors.discount_type = "Discount Type is required !";
    }
    setFromErrors(errors);
    return isValid;
  };

  // useEffect(() => {
  //   if (courseType) {
  //     handleCourseType(courseType.value);
  //   }
  // }, [courseType]);

  // // Get course type
  // const handleCourseType = async (type) => {
  //   const newOptions = [];
  //   setLoading(true);

  //   try {
  //     const res = await get(`api/courses/by_type/${type}`);
  //     console.log(res);
  //     if (res.success) {
  //       res.data.map((item, i) =>
  //         newOptions.push({ id: item?.id, value: item.courseTitle })
  //       );
  //       setAllCourseName(newOptions);
  //       // toast.success("Course Type Successfull");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Get all  Promocode list
  useEffect(() => {
    handleGetAllPromocode();
  }, []);
  const handleGetAllPromocode = async () => {
    setTableLoading(true);
    try {
      if (condition) {
        const res = await get("api/pay/promo/all");
        console.log(res);
        if (res.success) {
          setAllPromocode(res?.data);
          setTableLoading(false);
        }
      } else {
        const res = await get("api/promo");
        console.log(res);
        if (res.success) {
          setAllPromocode(res?.data);
          setTableLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setTableLoading(false);
    } finally {
      setTableLoading(false);
    }
  };

  // Handle promocode create
  const handlePromocode = async () => {
    if (!validateFrom()) {
      return;
    }

    // console.log(courseType.id, courseName?.id, status.id);

    const payload = {
      promo: promocode,
      description,
      discount: parseInt(discount),
      discount_type: discountType,
      start_date: startDate,
      end_date: endDate,
      user_limit: parseInt(userLimit),
      repeat_usage: parseInt(repeat),
      course_category: courseCategory,
      course_type: courseType?.value,
      course: parseInt(courseId),
      status: parseInt(status?.id) || 0,
    };

    console.log(payload);

    setLoading(true);
    try {
      if (condition) {
        const res = await post("api/pay/promo/add", payload);
        console.log("=======>Srejun", res);
        setCreate(false);
        handleGetAllPromocode();
        setFromErrors({
          promo: "",
          discount_amount: "",
          discount_type: "",
        });
        setCourse2("");
        setCourseCategory("");
        setCourseType("");
        setStatus("");
        setRepeat("");
        setDescription("");
        setEndDate("");
        setStartDate("");
        setUserLimit("42342342423");
        toast.success("Promocode create successfully");
      } else {
        const res = await post("api/promo", payload);
        console.log("======>Emon", res);
        setCreate(false);
        handleGetAllPromocode();
        setFromErrors({
          promo: "",
          discount_amount: "",
          discount_type: "",
        });
        setCourse2("");
        setCourseCategory("");
        setCourseType("");
        setStatus("");
        setRepeat("");
        setDescription("");
        setEndDate("");
        setStartDate("");
        setUserLimit("42342342423");
        toast.success("Promocode create successfully");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get all course
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await get("/api/course-category/all");

      if (response?.data) {
        setCategoryData(response?.data);
      } else {
        setCategoryData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  // course suggestion
  const handleCourseSuggestion = async (event) => {
    const query_text = event.target.value;

    setCourse2(query_text);
    if (query_text && query_text.length >= 4) {
      setShowCourseSuggestion(true);
      setCourseLoading(true);
      try {
        const res = await get(`api/courses/search/${query_text}`);
        console.log(res, "now ============>");
        if (res) {
          setSearchCourseData(res.data);
          setCourseLoading(false);
        }
      } catch (error) {
        setCourseLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setCourseLoading(false);
      }
    } else {
      setShowSuggestion(false);
      setSearchCourseData([]);
    }
  };

  // handle delete Promocode
  const handleDeletePromo = async (id) => {
    console.log(id);
    try {
      if (condition) {
        const res = await del(`api/pay/promo/${id}`);
        console.log(res);
        handleGetAllPromocode();
        toast.success("Delete promocode successfully!");
      } else {
        const res = await del(`api/promo/${id}`);
        console.log(res);
        if (res?.success) {
          console.log("delete promo code ");

          handleGetAllPromocode();
          toast.success("Delete promocode successfully!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
      {/*  */}
      <div className="p-1 mt-10 rounded-[10px] border-2 bg-white">
        <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px]">
          <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5 ">
            <div>
              <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                {!create ? (
                  "Promocode List"
                ) : (
                  <div className="flex items-center gap-[5px]">
                    <button onClick={() => setCreate(false)} className="">
                      <img className="w-[25px] " src={leftArrowIcon} alt="" />
                    </button>
                    <h2> Create new Promocode</h2>
                  </div>
                )}
              </h1>
            </div>
            <div className="flex flex-row gap-3">
              {!create && (
                <button
                  onClick={() => setCreate(true)}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex items-center gap-[3px]"
                >
                  <img className="w-5" src={plus_white} alt="" />
                  Add
                </button>
              )}
            </div>
          </div>

          {/* Promocode list */}
          {!create && (
            <table
              className="w-[1000px] mx-auto  text-left border-collapse w-overflow-x-auto table-auto "
              cellSpacing="0"
            >
              <tbody>
                <tr className="bg-[#F1F2F3] ">
                  <th
                    scope="col"
                    className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                  >
                    Promocode
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Discount
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                  >
                    Discount Type
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
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

                {!loading &&
                  getAllPromocode?.length > 0 &&
                  getAllPromocode?.map((item) => (
                    <tr className="border-b">
                      <td className="h-10 ps-2.5 py-2">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {item?.createdAt.slice(0, 10)}
                        </h1>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {item?.promo}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {item?.discount}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {item?.discount_type}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {item?.status == 0 ? "Active" : "Inactive"}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div className="flex flex-row gap-2.5">
                          <button onClick={() => handleSetUpdate(data)}>
                            <img src={file_edit} alt="" />
                          </button>

                          <button onClick={() => handleDeletePromo(item?.id)}>
                            <img src={delete_red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}

          {/* Create new promocode list */}

          {create && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] px-[20px] py-[20px]">
                <div>
                  <InputField
                    value={promocode}
                    setValue={setPromocode}
                    title="Promocode*"
                    placeholder="Enter Promocode"
                  />
                  <p className="text-red-500 text-[14px]">
                    {fromErrors?.promo && fromErrors?.promo}
                  </p>
                </div>
                <InputField
                  value={description}
                  setValue={setDescription}
                  title="Description"
                />

                <div>
                  <InputField
                    value={discount}
                    setValue={setDiscount}
                    title="Discount*"
                    placeholder="Enter Discount"
                  />
                  <p className="text-red-500 text-[14px]">
                    {fromErrors?.discount_amount && fromErrors?.discount_amount}
                  </p>
                </div>

                <div>
                  <SelectInput
                    value={discountType}
                    setValue={setDiscountType}
                    title="Discount Type*"
                    options={[
                      { id: 1, value: "Amount" },
                      { id: 2, value: "Percentage" },
                    ]}
                  />
                  <p className="text-red-500 text-[14px]">
                    {fromErrors?.discount_type && fromErrors?.discount_type}
                  </p>
                </div>

                <InputField
                  type="date"
                  value={startDate}
                  setValue={setStartDate}
                  title="Start Date"
                />
                <InputField
                  type="date"
                  value={endDate}
                  setValue={setEndDate}
                  title="End Date"
                />
                <InputField
                  value={userLimit}
                  setValue={setUserLimit}
                  title="User Limit"
                />

                <InputField
                  value={repeat}
                  setValue={setRepeat}
                  title="Repeat Usaget"
                  type="number"
                />

                {/* <div className="w-full relative">
                  <p className={`text-[16px] font-[400] leading-[22px]}`}>
                    Repeat Usage
                  </p>
                  <select
                    value={repeat}
                    // disabled={isDisable && isDisable}
                    onChange={(e) => setRepeat(e.target.value)}
                    className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                  >
                    <option value="">Please select</option>
                    <option value="0">Allowed</option>
                    <option value="1">NO Allowed</option>
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                  />
                </div> */}

                {/* course type */}
                <div className="w-full relative">
                  <p className="text-[16px] font-[400] leading-[22px]">
                    Course Type
                  </p>
                  <select
                    value={JSON.stringify(courseType)}
                    onChange={(e) => {
                      const selectedValue = JSON.parse(e.target.value);
                      setCourseType(selectedValue); // Use selectedValue as needed
                    }}
                    className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                  >
                    <option value="">Please select</option>
                    <option value={JSON.stringify({ id: 0, value: "অনলাইন" })}>
                      অনলাইন
                    </option>
                    <option value={JSON.stringify({ id: 1, value: "অফলাইন" })}>
                      অফলাইন
                    </option>
                    <option
                      value={JSON.stringify({ id: 3, value: "ভিডিও কোর্স" })}
                    >
                      ভিডিও কোর্স
                    </option>
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                  />
                  <p className="text-red-500 text-[14px]">
                    {fromErrors?.course_type && fromErrors?.course_type}
                  </p>
                </div>

                {/* course Category */}
                <div className="w-full relative">
                  <p className="text-[16px] font-[400] leading-[22px]">
                    Course Category
                  </p>
                  <select
                    value={courseCategory}
                    onChange={(e) => setCourseCategory(e.target.value)}
                    className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                  >
                    <option value="">Please select</option>
                    {categoryData &&
                      categoryData?.map((item, i) => (
                        <option key={i} value={item?.category}>
                          {item?.category}
                        </option>
                      ))}
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                  />
                </div>

                {/* course Name */}
                <div className="w-full">
                  <label className="text-[16px] font-[400] leading-[22px]">
                    Course Name
                  </label>
                  <CourseSuggestion
                    obj_name="courseTitle"
                    loading={courseLoading}
                    data={searchCourseData}
                    setInput={setCourse2}
                    setAuthorId={setCourseId}
                    showSuggestion={showCourseSuggestion}
                    setShowSuggestion={setShowCourseSuggestion}
                  >
                    <input
                      type="text"
                      value={course2}
                      onChange={(event) => handleCourseSuggestion(event)}
                      className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                      placeholder={`Enter Course Name`}
                    />
                  </CourseSuggestion>
                </div>
                {/* Status */}
                <div className="w-full relative">
                  <p className="text-[16px] font-[400] leading-[22px]">
                    Status
                  </p>
                  <select
                    value={JSON.stringify(status)}
                    onChange={(e) => {
                      const selectedValue = JSON.parse(e.target.value);
                      setStatus(selectedValue); // Use selectedValue as needed
                    }}
                    className="w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
                  >
                    <option value="">Please select</option>
                    <option value={JSON.stringify({ id: 0, value: "Active" })}>
                      Active
                    </option>
                    <option
                      value={JSON.stringify({ id: 1, value: "Inactive" })}
                    >
                      Inactive
                    </option>
                    <option
                      value={JSON.stringify({ id: 1, value: "Inactive" })}
                    >
                      Pause
                    </option>
                  </select>
                  <img
                    src={down_arrow}
                    alt="icon"
                    className="absolute top-[50px] right-2 transform -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[30px] justify-end w-full px-[20px] py-[20px]">
                <button
                  disabled={loading}
                  onClick={handlePromocode}
                  className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Submit"}
                </button>
              </div>
            </>
          )}
        </div>

        {tableLoading && (
          <div className="flex justify-center items-center h-full">
            <SuggLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Promocode;
