import React, { useEffect, useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import { del, get, post, put } from "../../../../api/axious";
import Swal from "sweetalert2";
import SuggLoading from "../../../../components/Common/SuggLoading";
import Loading from "../../../../components/sheared/Loading";
import three_dot_icon from "../../../../assets/svg/dots-vertical_black.svg";
import toast from "react-hot-toast";

const ManageRolePermission = () => {
  const [rolePermissionList, setRolePermissionList] = useState([]);
  const [index, setIndex] = useState("");
  const [loadingApproved, setLoadingApproves] = useState(false);
  const [loading, setLoading] = useState(true);

  const [getSingleUserID, setGetSingleUserID] = useState();
  const [userStatus, setUserStatus] = useState("");

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
      confirmButtonText: "Yes Approve!",
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
              title: "Approved!",
              text: "role Approved Successful.",
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
  const handleComplete = async (status, id) => {

    const payload = {
      status: status,
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Approve!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingApproves(true);
        try {
          const res = await put(`api/promotion/update/${id}`, payload);
          console.log(res, "response");
          if (res.success) {
            fetchRolePermissionList();
            Swal.fire({
              title: "Approved!",
              text: "role Approved Successful.",
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

  }

  return (
    <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
      <div className="bg-white rounded-[10px] flex justify-between p-2.5">
        <div className="flex gap-2">
          <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
            Manage All Role Permission
          </h2>
        </div>
      </div>

      <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
        {loading ? (
          <div className="flex justify-center items-center h-full py-20">
            <SuggLoading />
          </div>
        ) : (
          <>
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
                    <tr key={instructorRole.id}
                      className={`border-b ${instructorRole?.id === getSingleUserID ? 'bg-green-200' : 'even:bg-gray-200'}`}
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
                              instructorRole?.status?.slice(1).toLowerCase() || "N/A"}
                          </span>
                        ) : (
                          <span className={`font-bold px-2 rounded-md 
                            ${instructorRole?.status === "rejected" && 'text-red-500 bg-red-100'}
                            ${instructorRole?.status === "hold" && 'text-blue-400 bg-blue-100'}
                            ${instructorRole?.status === "lock" && 'text-cyan-400 bg-cyan-100'}
                            ${instructorRole?.status === "pending" && 'text-orange-400 bg-orange-100'}
                            `}>
                            {instructorRole?.status?.charAt(0)?.toUpperCase() +
                              instructorRole?.status?.slice(1).toLowerCase() || "N/A"}
                          </span>
                        )}
                      </td>
                      <td className="h-10 ps-2.5 py-2 text_black_gray text-[16px] font-[500]">
                        <div className="flex flex-row justify-end items-center gap-1.5 relative">
                          {instructorRole?.status === "pending" && (
                            <button
                              onClick={() =>
                                handleComplete("approved", instructorRole?.id)
                              }
                              className="px-2.5 bg-[#20AC90] rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                            >
                              {loadingApproved && index === i ? (
                                <Loading />
                              ) : (
                                "Approve"
                              )}
                            </button>
                          )}
                          <button
                            onClick={() => {
                              getSingleUserID ? setGetSingleUserID(false) : setGetSingleUserID(instructorRole?.id);
                            }}
                            className=" rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
                          >
                            <img src={three_dot_icon} alt="" />
                          </button>
                          {
                            getSingleUserID === instructorRole?.id && (

                              <div className="absolute top-7 right-0 w-[113px] bg-slate-100 shadow-md rounded-md p-1.5 z-10
                                ">
                                <div className="flex flex-col gap-2">
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() => setUserStatus("approved")}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() =>
                                      setUserStatus("rejected")
                                    }
                                  >
                                    Reject
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() =>
                                      setUserStatus("hold")
                                    }
                                  >
                                    On Hold
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() =>
                                      setUserStatus("lock")
                                    }
                                  >
                                    Lock
                                  </button>
                                  <button
                                    className="text-black text-[14px] font-[400] leading-[18px] hover:bg-[#20ac90] hover:text-white rounded p-0.5"
                                    onClick={() =>
                                      setUserStatus("pending")
                                    }
                                  >
                                    Pending
                                  </button>
                                </div>
                              </div>

                            )
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageRolePermission;
