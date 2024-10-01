import React, { useContext, useState } from "react";
import SelectInput from "../../../../../components/inputField/SelectInput";
import InputField from "../../../../../components/inputField/InputField";
import { AuthContext } from "../../../../../layout/MainLayout";

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
  bankName,
  branchName,
  routingNumber,
  acountName,
  acountNumber,
  setBankName,
  setBranchName,
  setRoutingNumber,
  setAcountName,
  setAcountNumber,
}) => {
  const { user, logout } = useContext(AuthContext);

  console.log(branchName);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div
        onClick={() => setWithdrawalModal(false)}
        className="fixed  inset-0 bg-[#9ccccaaf] "
      ></div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="relative bg-white w-1/2 my-[40px] rounded-lg p-[25px] ">
          <div className="flex justify-between ">
            <h2 className=" text-[36px] font-[600] text_black_gray leading-[40px] pb-3">
              Payment Withdrawal
            </h2>
            <h2
              className="text-[red]  font-semibold cursor-pointer"
              onClick={() => {
                setWithdrawalModal(false);
                setIsPaymentMethod("");
              }}
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
                { id: 1, value: "Mobile Banking" },
                { id: 2, value: "Bank" },
              ]}
            />
          </div>

          {/* main content */}
          {isPaymentMethod === "Mobile Banking" ? (
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
                defValue={withdrawlNumber}
                title="Number"
                type="number"
              />
              <InputField value={amount} setValue={setAmount} title="Amount" type="number" />
            </div>
          ) : isPaymentMethod === "Bank" ? (
            <div className="flex flex-col gap-[20px]">
              <SelectInput
                title="Selected Bank"
                value={bankName}
                setValue={setBankName}
                options={[
                  { id: 1, value: "AB Bank Limited" },
                  { id: 2, value: "Al-Arafah Islami Bank PLC" },
                  { id: 3, value: "Bangladesh Commerce Bank Ltd." },
                  { id: 4, value: "Bank Asia PLC" },
                  { id: 5, value: "Bengal Commercial Bank PLC" },
                  { id: 6, value: "Bank Asia Limited" },
                  { id: 7, value: "Agrani Bank PLC" },
                  { id: 8, value: "Bangladesh Krishi Bank" },
                  { id: 9, value: " Dhaka Bank Limited" },
                  { id: 10, value: "Islami Bank Bangladesh Ltd" },
                  { id: 11, value: "BRAC Bank Limited" },
                  { id: 12, value: "Citibank n a" },
                  { id: 13, value: "Community Bank Bangladesh PLC" },
                  { id: 14, value: "City Bank Limited" },
                  { id: 15, value: "Commercial Bank of Ceylon limited" },
                  { id: 16, value: "Jamuna Bank Limited" },
                  { id: 17, value: "Janata" },
                  { id: 18, value: "HSBC" },
                  { id: 19, value: "Woori Bank Ltd." },
                  { id: 20, value: "State Bank of India" },
                  { id: 21, value: "Standard Chartered Bank" },
                  { id: 22, value: "National Bank of Pakistan" },
                  { id: 23, value: "Habib Bank Ltd." },
                  { id: 24, value: "Commercial Bank of Ceylon" },
                  { id: 25, value: "CITI Bank NA" },
                  { id: 26, value: "Bank Al-Falah" },
                  { id: 27, value: "Uttara Bank PLC" },
                  { id: 28, value: "United Commercial Bank PLC" },
                  { id: 29, value: "Union Bank PLC" },
                  { id: 30, value: "Trust Bank Ltd." },
                  { id: 31, value: "Standard Bank PLC" },
                  { id: 32, value: "Southeast Bank PLC" },
                  { id: 33, value: "SBAC Bank PLC" },
                  { id: 34, value: "Social Islami Bank PLC" },
                  { id: 35, value: "Shimanto Bank PLC" },
                  { id: 36, value: "Shahjalal Islami Bank PLC" },
                  { id: 37, value: "Pubali Bank PLC" },
                  { id: 38, value: "Prime Bank PLC" },
                  { id: 39, value: " Premier Bank PLC" },
                  { id: 40, value: " Padma Bank PLC" },
                  { id: 41, value: "One Bank PLC" },
                  { id: 42, value: "NRB Commercial Bank PLC" },
                  { id: 43, value: "NRB Bank Ltd" },
                  { id: 44, value: "NCC Bank PLCv" },
                  { id: 45, value: "National Bank Ltd" },
                  { id: 46, value: "Mutual Trust Bank PLC" },
                  { id: 47, value: "Modhumoti Bank PLC" },
                  { id: 48, value: "Midland Bank PLC" },
                  { id: 49, value: "Mercantile Bank PLC" },
                  { id: 50, value: "Meghna Bank PLC" },
                  { id: 51, value: "IFIC Bank PLC" },
                  { id: 52, value: " ICB Islamic Bank" },
                  { id: 53, value: "Global Islami Bank PLC" },
                  { id: 54, value: "First Security Islami Bank PLC" },
                  { id: 55, value: "EXIM Bank PLC" },
                  { id: 56, value: "Eastern Bank PLC" },
                  { id: 57, value: "Dutch Bangla Bank PLC" },
                  { id: 58, value: "Citizens Bank PLC" },
                  { id: 59, value: "Midland Bank" },
                  { id: 60, value: "Bengal Commercial Bank Limited" },
                  { id: 61, value: "Mutual Trust Bank Limited" },
                  { id: 62, value: "EXIM Bank Limited" },
                  { id: 63, value: "IFIC Bank Limited" },
                  { id: 64, value: "Mercantile Bank Limite" },
                  { id: 65, value: "Sonali Bank" },
                  { id: 66, value: "Bank Alfalah Limited" },
                  { id: 67, value: "Bank Alfalah Limited" },
                  { id: 68, value: "Modhumoti Bank Limited" },
                  { id: 69, value: "Probashi Kallyan Bank" },
                  { id: 70, value: "Rupali Bank PLC" },
                  { id: 71, value: ">BASIC Bank" },
                  { id: 72, value: "Bangladesh Development Bank PLC" },
                  { id: 73, value: "Bangladesh Krishi Bank" },
                  { id: 74, value: "RAKUB" },
                ]}
              />
              <InputField
                value={branchName}
                setValue={setBranchName}
                defValue={branchName}
                title="Branch"
              />

              <InputField
                value={routingNumber}
                setValue={setRoutingNumber}
                defValue={routingNumber}
                title="Routing Number"
              />
              <InputField
                value={acountName}
                setValue={acountName}
                defValue={acountName}
                title="A/C Name"
              />
              <InputField
                value={acountNumber}
                setValue={setAcountNumber}
                defValue={acountNumber}
                title="A/C No."
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
