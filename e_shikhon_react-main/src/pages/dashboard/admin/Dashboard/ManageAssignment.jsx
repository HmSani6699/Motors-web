import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import plus_white from "../../../../assets/svg/plus_white.svg";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import "react-quill/dist/quill.snow.css";
import { del, get } from "../../../../api/axious";
import Swal from "sweetalert2";
import AssignmentViewModal from "./manageAssignment/AssignmentViewModal";
import { URL } from "../../../../constants/Url";
import AssignmentList from "./manageAssignment/AssignmentList";
import AssignmentCreateUpdaate from "./manageAssignment/AssignmentCreateUpdaate";

const ManageAssignment = () => {
  const [loading, setLoading] = useState(false);
  const [showAssignmentForm, setShowAssignmentForm] = useState(false);
  const [type, setType] = useState("create");
  const [viewData, setViewData] = useState({});
  const [assignment, setAllAssignment] = useState([]);
  const [assignmentViewModal, setAssignmentViewModal] = useState(false);
  const [assignmentViewData, setAssignmentViewData] = useState({});
  const [assignmentUpdateFrom, setAssignmentUpdateFrom] = useState(false);

  //========> Get all assignment <=======//
  useEffect(() => {
    fetchAllAssignment();
  }, []);

  const fetchAllAssignment = async () => {
    setLoading(true);
    try {
      const response = await get(URL.ASSIGNMENT.GET);
      console.log(response);
      if (response?.success) {
        setAllAssignment(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickAssignmentForm = () => {
    setShowAssignmentForm(true);
    setType("create");
  };

  // ========> Assignment Update Modal <=========//
  const handleUpdateAssignment = (assignmentData) => {
    setType("update");
    setViewData(assignmentData);
    setShowAssignmentForm(true);
  };

  // =========> Assignment View <============//
  const handleAssignmentView = (assignmentData) => {
    setAssignmentViewData(assignmentData);
    setAssignmentViewModal(!assignmentViewModal);
  };

  // ==========> Delete Assignment <=========//
  const handleDeleteAssignment = async (id) => {
    setLoading(true);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = del(`${URL.ASSIGNMENT.DET}/${id}`);
          if (response) {
            fetchAllAssignment();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            fetchAllAssignment();
          }
        } catch (error) {
          setLoading(false);
          toast.error("Failed to delete");
          console.log("Failed to delete/", error?.response);
        }
        fetchAllAssignment();
      }
    });
    setLoading(false);
  };

  return (
    <>
      {!showAssignmentForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <div>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  Manage Assignment
                </h2>
              </div>
              {!assignmentUpdateFrom && (
                <div>
                  <button
                    onClick={handleClickAssignmentForm}
                    className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
                  >
                    <img className="w-5" src={plus_white} alt="" />
                    Add New Assignment
                  </button>
                </div>
              )}
            </div>

            {!assignmentUpdateFrom && (
              <AssignmentList
                assignment={assignment}
                handleAssignmentView={handleAssignmentView}
                handleDeleteAssignment={handleDeleteAssignment}
                handleUpdateAssignment={handleUpdateAssignment}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div className=" flex items-center justify-center gap-2 ">
                <button onClick={() => setShowAssignmentForm(false)}>
                  <img className="w-[25px]" src={leftArrowIcon} alt="" />
                </button>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  {type === "create"
                    ? "Add New Assignment"
                    : "Update Assignment"}
                </h2>
              </div>
            </div>
            <AssignmentCreateUpdaate
              type={type}
              viewData={viewData}
              fetchAllAssignment={fetchAllAssignment}
              showAssignmentForm={showAssignmentForm}
              setShowAssignmentForm={setShowAssignmentForm}
            />
          </div>
        </div>
      )}

      {assignmentViewModal && (
        <AssignmentViewModal
          assignmentViewData={assignmentViewData}
          setAssignmentViewModal={setAssignmentViewModal}
          assignmentViewModal={assignmentViewModal}
        />
      )}
    </>
  );
};

export default ManageAssignment;
