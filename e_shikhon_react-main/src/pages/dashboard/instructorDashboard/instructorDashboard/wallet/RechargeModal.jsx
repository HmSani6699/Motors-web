import React from "react";
import InputField from "../../../../../components/inputField/InputField";
const RechargeModal = ({
  setRechargeModal,
  handleRecharge,
  rechargeAmount,
  setRechargeAmount,
}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div
        onClick={() => setRechargeModal(false)}
        className="fixed  inset-0 bg-[#9ccccaaf] "
      ></div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="relative bg-white w-1/2 rounded-lg h-[300px] p-[20px] ">
          <div className="flex justify-between">
            <h2 className=" text-[36px] font-[600] text_black_gray leading-[40px] pb-3">
              Recharge
            </h2>
            <h2
              className="text-[red]  font-semibold cursor-pointer"
              onClick={() => setRechargeModal(false)}
            >
              Close
            </h2>
          </div>
          {/* main content  */}
          <div className="mt-[20px]">
            <InputField
              value={rechargeAmount}
              setValue={setRechargeAmount}
              title="Amount"
            />
            <div className="flex justify-end mt-[30px] ">
              <button
                onClick={handleRecharge}
                className="primary_green py-3 px-5 rounded-[5px] text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeModal;
