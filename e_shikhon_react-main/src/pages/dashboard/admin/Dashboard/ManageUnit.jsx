import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import leftArrowIcon from "../../../../assets/svg/arrow-sm-left.svg";
import "react-quill/dist/quill.snow.css";
import { del, get } from "../../../../api/axious";
import plus_white from "../../../../assets/svg/plus_white.svg";
import SuggLoading from "../../../../components/Common/SuggLoading";
import Swal from "sweetalert2";
import UnitViewModal from "./manageUnit/UnitViewModal";
import { URL } from "../../../../constants/Url";
import UnitList from "./manageUnit/UnitList";
import UnitCreateUpdate from "./manageUnit/UnitCreateUpdate";

const ManageUnit = () => {
  const [type, setType] = useState("create");
  const [allUnit, setAllUnit] = useState([]);
  const [viewData, setViewData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showUnitForm, setShowUnitForm] = useState(false);

  const [unitViewModal, setUnitViewModal] = useState(false);
  const [unitViewData, setUnitViewData] = useState({});

  useEffect(() => {
    fetchAllUnit();
  }, []);

  const fetchAllUnit = async () => {
    setLoading(true);
    try {
      const response = await get(URL.UNIT.GET);
      setAllUnit(response.data);
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickUnitForm = () => {
    setShowUnitForm(true);
    setType("create");
  };

  const handleUpdateUnit = (unitData) => {
    setType("update");
    setViewData(unitData);
    setShowUnitForm(true);
  };

  const handleDeleteUnit = (id) => {
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
          const res = del(`${URL.UNIT.DET}/${id}`);
          if (res) {
            fetchAllUnit();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            fetchAllUnit();
          }
        } catch (error) {
          setLoading(false);
          toast.error("Failed to delete");
          console.log("Failed to delete/", error?.response);
        } finally {
          setLoading(false);
        }
        fetchAllUnit();
      }
    });

    setLoading(false);
  };

  const handleUnitView = (unitData) => {
    setUnitViewData(unitData);
    setUnitViewModal(!unitViewModal);
  };
  return (
    <>
      {!showUnitForm ? (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
            <div className="bg-white rounded-[10px] flex justify-between p-2.5">
              <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                Manage Unit
              </h2>

              <button
                onClick={handleClickUnitForm}
                className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px] flex flex-row items-center gap-1"
              >
                <img className="w-5" src={plus_white} alt="" />
                Add New Unit
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-full my-[200px]">
                <SuggLoading />
              </div>
            ) : (
              <UnitList
                allUnit={allUnit}
                handleUnitView={handleUnitView}
                handleDeleteUnit={handleDeleteUnit}
                handleUpdateUnit={handleUpdateUnit}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
          <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
            <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
              <div className=" flex items-center justify-center gap-2 ">
                <button onClick={() => setShowUnitForm(false)}>
                  <img className="w-[25px]" src={leftArrowIcon} alt="" />
                </button>
                <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] ">
                  {type === "create" ? "Add New Unit" : "Update Unit"}
                </h2>
              </div>
            </div>
            <UnitCreateUpdate
              type={type}
              viewData={viewData}
              fetchAllUnit={fetchAllUnit}
              showUnitForm={showUnitForm}
              setShowUnitForm={setShowUnitForm}
            />
          </div>
        </div>
      )}

      {unitViewModal && (
        <UnitViewModal
          unitViewData={unitViewData}
          unitViewModal={unitViewModal}
          setUnitViewModal={setUnitViewModal}
        />
      )}
    </>
  );
};

export default ManageUnit;
