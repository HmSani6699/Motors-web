import React, { useEffect, useState } from "react";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";
import InputField from "../../../../components/inputField/InputField";
import { del, get, post, put } from "../../../../api/axious";

const ManageRole = () => {
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [create, setCreate] = useState(false);
  const [roleData, setRoleData] = useState();
  const [id, setId] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [updateRole, setUpdateRole] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchRole();
  }, []);

  const fetchRole = async () => {
    try {
      const response = await get("/api/role/get_role");
      if (response?.data) {
        setRoleData(response?.data);
      } else {
        setRoleData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const handleCreatePage = () => {
    setCreate(true);
  };

  const handleCreateCategory = async (event) => {
    event.preventDefault();
    setCreate(false);
    const formData = {
      roleName: roleInput,
    };
    setLoading(true);
    // console.log(formData, 'hiiii')
    try {
      const res = await post("/api/role/add_role", formData);
      if (res.success) {
        fetchRole();
        setLoading(false);
        setRoleInput("");
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

  const deleteRoleHandler = (id) => {
    const deleteRole = async (id) => {
      try {
        const res = await del(`/api/role/delete_role/${id}`);
        // console.log(res)
        if (res.success) {
          fetchRole();
          setLoading(false);
          // toast.success('Delete role successfully!')
        }
      } catch (error) {
        setLoading(false);
        // toast.error('faild to Delete')
        console.log("Failed to post/", error?.response);
      } finally {
        setLoading(false);
      }
    };
    deleteRole(id);
  };

  const handleSetUpdate = async (data) => {
    setUpdate(true);
    setId(data?.id);
    setRole(data?.roleName);
  };

  const handleRoleUpdate = async () => {
    const formData = {
      roleName: updateRole,
    };
    setLoading(true);
    console.log(formData);
    try {
      const res = await put(`api/role/update_role/${id}`, formData);
      console.log(id);
      console.log(res);
      if (res.success) {
        setRole("");
        setId("");
        setUpdate(false);
        fetchRole();
        setLoading(false);
        // toast.success('Update role successfully!')
      }
    } catch (error) {
      setLoading(false);
      toast.error("faild to Update");
      console.log("Failed to post/", error?.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
        <div className="bg-white rounded-[10px]">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] p-2.5">
              Role Management
            </h2>
          </div>
        </div>
        {/*  */}
        <div className="p-1 mt-10 rounded-[10px] border-2 bg-white">
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px]">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div>
                <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                  {!create ? "Role List" : "Create new role"}
                </h1>
              </div>
              <div className="flex flex-row gap-3">
                <button
                  onClick={handleCreatePage}
                  className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]"
                >
                  Add New Role
                </button>
              </div>
            </div>

            {/* form data */}

            {create && !update ? (
              <div>
                <div className="w-[650px] mx-auto">
                  <InputField
                    value={roleInput}
                    setValue={setRoleInput}
                    title="Role Name"
                  />
                </div>
                <button
                  onClick={handleCreateCategory}
                  className="mt-5 px-3 py-2 rounded-[8px] mx-auto text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  Submit
                </button>
              </div>
            ) : null}

            {/* update role */}

            {update ? (
              <div>
                <div className="w-[650px] mx-auto">
                  <InputField
                    value={updateRole}
                    setValue={setUpdateRole}
                    title="Update Role Name"
                    defValue={role}
                  />
                </div>
                <button
                  onClick={handleRoleUpdate}
                  className="mt-5 px-3 py-2 rounded-[8px] mx-auto text-[16px] font-[500] leading-[24px] text-white primary_green flex flex-row items-center gap-2"
                >
                  Update
                </button>
              </div>
            ) : null}

            {/* list */}

            {!create && !update ? (
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
                      Role Name
                    </th>
                    <th
                      scope="col"
                      className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                    >
                      Action
                    </th>
                  </tr>

                  {roleData?.map((data, i) => (
                    <tr key={i} className="border-b">
                      <td className="h-10 ps-2.5 py-2">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {i + 1}
                        </h1>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {data?.roleName}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div className="flex flex-row gap-2.5">
                          <button onClick={() => handleSetUpdate(data)}>
                            <img src={file_edit} alt="" />
                          </button>

                          <button onClick={() => deleteRoleHandler(data?.id)}>
                            <img src={delete_red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}

            {/* -- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageRole;
