import React, { useState } from "react";
import SelectInput from "../../../../../components/inputField/SelectInput";
import InputField from "../../../../../components/inputField/InputField";

const WithdrawalModal = ({
  handleWithdrawal,
  setWithdrawalModal,
  withdrawlMethod,
  setWithdrawalMethod,
  withdrawlNumber,
  setWithdrawalNumber,
  bankNumber,
  setBankNumber,
  isPaymentMethod,
  setIsPaymentMethod,
  amount,
  setAmount,
}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div
        onClick={() => setWithdrawalModal(false)}
        className="fixed  inset-0 bg-[#9ccccaaf] "
      ></div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="relative bg-white w-1/2 rounded-lg p-[25px] ">
          <div className="flex justify-between ">
            <h2 className=" text-[36px] font-[600] text_black_gray leading-[40px] pb-3">
              Payment Withdrawal
            </h2>
            <h2
              className="text-[red]  font-semibold cursor-pointer"
              onClick={() => setWithdrawalModal(false)}
            >
              Close
            </h2>
          </div>

          <div className="text-[24px] font-[500] text_black_gray leading-[32px] mt-[20px] mb-[15px] border-b flex gap-[25px]">
            <SelectInput
              value={isPaymentMethod}
              setValue={setIsPaymentMethod}
              title="Payment Method"
              options={[
                { id: 1, value: "Mobile" },
                { id: 2, value: "Bank" },
              ]}
            />
          </div>

          {/* main content */}
          {isPaymentMethod === "Mobile" ? (
            <div className="flex flex-col gap-[20px]">
              <SelectInput
                value={withdrawlMethod}
                setValue={setWithdrawalMethod}
                title="Payment Method"
                options={[
                  { id: 1, value: "Bkash" },
                  { id: 2, value: "Nagod" },
                  { id: 3, value: "Rocket" },
                ]}
              />
              <InputField
                value={withdrawlNumber}
                setValue={setWithdrawalNumber}
                title="Number"
                type="number"
              />
              <InputField value={amount} setValue={setAmount} title="Amount" type="number" />
            </div>
          ) : isPaymentMethod === "Bank" ? (
            <div className="flex flex-col gap-[20px]">
              <InputField
                value={bankNumber}
                setValue={setBankNumber}
                title="Number"
              />
              <InputField value={amount} setValue={setAmount} title="Amount" />
            </div>
          ) : null}

          <div className="flex justify-end mt-[20px] ">
            <button
              onClick={handleWithdrawal}
              className="primary_green py-3 px-5 rounded-[5px] text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModal;
