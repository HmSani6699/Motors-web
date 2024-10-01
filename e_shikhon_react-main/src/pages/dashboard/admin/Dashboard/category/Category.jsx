import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import file_edit from "../../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../../assets/svg/delete-sweep-outline_red.svg";
import InputField from "../../../../../components/inputField/InputField";
import { del, get, post, put } from "../../../../../api/axious";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { URL } from "../../../../../constants/Url";

const Category = () => {
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [create, setCreate] = useState(false);
  const [roleData, setRoleData] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const [updateFrom, setUpdateFrom] = useState(false);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await get(URL.COURSE_CATEGORY.GET);

      if (response?.data) {
        setCategoryData(response?.data);
      } else {
        setCategoryData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const handleCreatePage = () => {
    setCreate(true);
  };

  const handleUpdateCategoryFrom = (data) => {
    setUpdateFrom(!updateFrom);
    setCreate(false);
    setCategoryId(data?.id);
    setCategoryInput(data?.category);
  };

  const handleCreateCategory = async (event) => {
    event.preventDefault();
    setCreate(false);
    const formData = {
      category: categoryInput,
    };
    setLoading(true);
    // console.log(formData, 'hiiii')
    try {
      const res = await post(URL.COURSE_CATEGORY.POST, formData);
      if (res.success) {
        fetchCategory();
        setLoading(false);
        setCategoryInput("");
        // toast.success('Create a ro successfully!')
      }
    } catch (error) {
      setLoading(false);
      // toast.error('failed to Post')
      console.log("Failed to post/", error?.response);
    } finally {
      setLoading(false);
    }
  };
  console.log(categoryData, "jjj");
  // const handleSetUpdate = async (data) => {
  //     setUpdate(true)
  //     setId(data?.id)
  //     setRole(data?.roleName)
  // }

  const [updateCategory, setUpdateCategory] = useState("");

  const handleUpdateCategory = async () => {
    const formData = {
      category: updateCategory,
    };
    setLoading(true);
    try {
      const res = await put(
        `${URL.COURSE_CATEGORY.PUT}/${categoryId}`,
        formData
      );

      if (res.success) {
        setUpdateCategory("");
        fetchCategory();
        setLoading(false);
        setUpdateFrom(!updateFrom);
        toast.success("Update role successfully!");
      }
    } catch (error) {
      setLoading(false);
      toast.error("faild to Update");
      console.log("Failed to post/", error?.response);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
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
          const response = await del(`${URL.COURSE_CATEGORY.DET}/${id}`);
          if (response) {
            fetchCategory();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
          }
        } catch (error) {
          toast.error(error?.message);
          console.log("Error creating app:", error?.message);
        }
        fetchCategory();
      }
    });
  };

  return (
    <>
      <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
        <div className="bg-white rounded-[10px]">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] p-2.5">
              Course Category
            </h2>
          </div>
        </div>
        {/*  */}
        {!updateFrom && (
          <div className="p-1 mt-10 rounded-[10px] border-2 bg-white">
            <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px]">
              <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
                <div className="flex items-center gap-2">
                  {create && (
                    <button onClick={() => setCreate(!create)} className="">
                      <img className="w-[25px]" src={leftArrowIcon} alt="" />
                    </button>
                  )}
                  <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                    {!create ? "Category List" : "Create new category"}
                  </h1>
                </div>
                <div className="flex flex-row gap-3">
                  {!create && (
                    <button
                      onClick={handleCreatePage}
                      className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]"
                    >
                      Add New Category
                    </button>
                  )}
                </div>
              </div>

              {/* form data */}

              {create ? (
                <div>
                  <div className="w-[650px] mx-auto">
                    <InputField
                      value={categoryInput}
                      setValue={setCategoryInput}
                      title="Category Name"
                    />
                  </div>
                  <button
                    onClick={handleCreateCategory}
                    className="mt-5 px-3 py-2 rounded-[8px] mx-auto text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                ""
              )}

              {/* list */}

              {!create ? (
                <table
                  className="w-[650px] mx-auto  text-left border-collapse w-overflow-x-auto table-auto "
                  cellSpacing="0"
                >
                  <tbody>
                    <tr className="bg-[#F1F2F3] ">
                      <th
                        scope="col"
                        className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                      >
                        Category Name
                      </th>
                      <th
                        scope="col"
                        className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                      >
                        Action
                      </th>
                    </tr>

                    {categoryData?.map((data, i) => (
                      <tr key={i} className="border-b">
                        <td className="h-10 ps-2.5 py-2">
                          <h1 className="text_black_gray text-[16px] font-[500]">
                            {i + 1}
                          </h1>
                        </td>
                        <td className="h-10 py-2">
                          <div>
                            <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                              {data?.category}
                            </h1>
                          </div>
                        </td>
                        <td className="h-10 py-2">
                          <div className="flex flex-row gap-2.5">
                            <button
                              onClick={() => handleUpdateCategoryFrom(data)}
                            >
                              <img src={file_edit} alt="" />
                            </button>
                            <button
                              onClick={() => handleDeleteCategory(data?.id)}
                            >
                              <img src={delete_red} alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {/* <tr className="">
                                    <td className="h-10 ps-2.5 py-2">
                                        <h1 className='text_black_gray text-[16px] font-[500]'>1</h1>
                                    </td>
                                    <td className="h-10 py-2">
                                        <div>
                                            <h1 className='text_black_gray text-[16px] font-[500] leading-[22px]'>UI/UX Designer</h1>
                                        </div>
                                    </td>
                                    <td className="h-10 py-2">
                                        <div className='flex flex-row gap-2.5'>
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

              {/* -- */}
            </div>
          </div>
        )}
      </div>
      {/* update category from */}
      {updateFrom && (
        <div className="w-full lg:w-[1070px] overflow-x-auto bg-white py-5 px-[13px] rounded-[10px] border-2 mx-auto">
          <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
            <div className="flex items-center gap-2">
              {
                <button onClick={() => setUpdateFrom(!updateFrom)} className="">
                  <img className="w-[25px]" src={leftArrowIcon} alt="" />
                </button>
              }
              <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                Update category
              </h1>
            </div>
          </div>
          <div>
            <div>
              <div className="w-[650px] mx-auto">
                <InputField
                  setValue={setUpdateCategory}
                  title="Category Name"
                  defValue={categoryInput}
                />
              </div>
              <button
                onClick={handleUpdateCategory}
                className="mt-5 px-3 py-2 rounded-[8px] mx-auto text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
