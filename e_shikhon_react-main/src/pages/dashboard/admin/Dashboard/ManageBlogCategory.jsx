import React, { useEffect, useState } from "react";
import plus_white from "../../../../assets/svg/plus_white.svg";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import InputField from "../../../../components/inputField/InputField";
import Loading from "../../../../components/sheared/Loading";
import { del, get, post, put } from "../../../../api/axious";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageBlogCategory = () => {
  const [loading, setLoading] = useState(false);
  const [categoryForm, setCategoryForm] = useState(false);
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryID, setCategoryID] = useState();

  // ========> Get all Category <=========//
  useEffect(() => {
    handleGetAllCategory();
  }, []);

  const handleGetAllCategory = async () => {
    try {
      const res = await get("api/blog_category");
      console.log(res);
      if (res?.success) {
        setAllCategoryData(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // =====> Category Created  <=======//
  const handleAddNewCategory = async () => {
    const payload = {
      category: categoryName,
    };
    setLoading(true);
    try {
      const res = await post("api/blog_category", payload);
      console.log(res);
      if (res?.success) {
        setLoading(false);
        setCategoryName("");
        handleGetAllCategory();
        setCategoryForm(false);
      }
    } catch (error) {
      console.log(res);
      setLoading(false);
    }
  };

  // ========> Category updated <=======//
  const handleEditCategory = async (id) => {
    const payload = {
      category: categoryName,
    };
    setLoading(true);
    try {
      const res = await put(`/api/blog_category/${id}`, payload);
      console.log(res);
      if (res?.success) {
        setLoading(false);
        setCategoryName("");
        handleGetAllCategory();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(res);
      setLoading(false);
    }
  };

  // ======> Category Delete <=======//
  const handleCategoryDelete = async (id) => {
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
          const res = await del(`/api/blog_category/${id}`);
          console.log(res);
          if (res?.success) {
            handleGetAllCategory(); // Refresh categories after deletion
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting category:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the category.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      {!categoryForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white rounded-[10px] flex justify-between p-2.5">
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Category
              </h2>
            </div>
            <div>
              <button
                onClick={() => setCategoryForm(true)}
                className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
              >
                <img className="w-5" src={plus_white} alt="" />
                Create New Category
              </button>
            </div>
          </div>
          <div className="w-full overflow-x-auto  mt-10">
            <table
              className="w-full  text-left border-collapse w-overflow-x-auto table-auto "
              cellSpacing="0"
            >
              <tbody>
                <tr className="bg-[#E3E5E8] ">
                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center"
                  >
                    ID
                  </th>
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
                    Date
                  </th>

                  <th
                    scope="col"
                    className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
                  >
                    Action
                  </th>
                </tr>

                {allCategoryData && allCategoryData.length > 0 ? (
                  allCategoryData.map((category, i) => (
                    <tr key={category?.id}>
                      <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {i + 1}
                        </h1>
                      </td>
                      <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {category?.category}
                        </h1>
                      </td>

                      <td className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500] border-e-4 border-white text-center">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {category.createdAt?.slice(0, 10)}
                          </h1>
                        </div>
                      </td>

                      <td className="h-10 ps-2.5">
                        <div className="flex flex-row gap-5 items-center justify-center">
                          <button
                            onClick={() => {
                              setIsModalOpen(true);
                              setCategoryName(category?.category);
                              setCategoryID(category?.id);
                            }}
                          >
                            <img src={file_edit} alt="" />
                          </button>
                          <button
                            onClick={() => handleCategoryDelete(category?.id)}
                          >
                            <img src={delete_red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No blogs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="bg-white flex items-center gap-2 rounded-[10px] p-2.5">
            <div>
              <button onClick={() => setCategoryForm(false)} className="">
                <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
              </button>
            </div>
            <div>
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Create Category
              </h2>
            </div>
          </div>
          <div className="pt-10 flex items-center justify-center w-full ">
            <div className="flex flex-row w-full gap-5">
              <div className="w-[85%]">
                <InputField
                  value={categoryName}
                  setValue={setCategoryName}
                  title="Category Title "
                  placeholder="Category Title"
                />
              </div>
              <div className="w-[10%] mt-[30px]">
                <button
                  disabled={loading}
                  onClick={handleAddNewCategory}
                  className="px-3 py-2 rounded-[8px] whitespace-nowrap  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  {loading ? <Loading /> : "Add Category"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========>  Update category modal  <====== */}
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#8bbf96c9] ">
            <div className="p-[15px] w-full lg:w-[500px] mb-10 mx-auto bg-[#f5f5f5] rounded-md">
              <div className=" flex items-center gap-2  p-2.5">
                <div>
                  <button onClick={() => setIsModalOpen(false)} className="">
                    <img className="w-[25px] mt-2" src={leftArrowIcon} alt="" />
                  </button>
                </div>
                <div>
                  <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                    Edit Category
                  </h2>
                </div>
              </div>

              <div className="mt-[15px]">
                <InputField
                  value={categoryName}
                  setValue={setCategoryName}
                  title="Category Title "
                  placeholder="Category Title"
                />
                <div className="flex justify-end mt-[30px]">
                  <button
                    disabled={loading}
                    onClick={() => handleEditCategory(categoryID)}
                    className="px-3 py-2 rounded-[8px] whitespace-nowrap  text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                  >
                    {loading ? <Loading /> : "Edit Category"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ManageBlogCategory;
