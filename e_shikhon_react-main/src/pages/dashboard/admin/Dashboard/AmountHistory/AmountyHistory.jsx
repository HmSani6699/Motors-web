import React, { useEffect, useState } from "react";
import Withdrawal_history from "./Withdrawal_history";
import Payment_history from "./Payment_history";
import Recharge_history from "./Recharge_history";

const AmountyHistory = () => {
  const [isOpen, setIsOpen] = useState("Withdrawal");

  return (
    <div className="w-[1015px] mx-auto my-[50px] ">
      <div>
        <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
          পেমেন্ট
        </h2>
      </div>
      <div className="flex items-center gap-5 border-b border-[#C7CAD1] mb-5 mt-2.5">
        {/* <div>
          <button
            onClick={() => setIsOpen("Transaction")}
            className={`text-[24px] font-[500]  ${
              isOpen === "Transaction" ? "text-[#20AC90]" : "text_black_gray"
            } leading-[32px] `}
          >
            Transaction history
          </button>
        </div> */}
        <div>
          <button
            onClick={() => setIsOpen("Withdrawal")}
            className={`text-[24px] font-[500]  ${
              isOpen === "Withdrawal" ? "text-[#20AC90]" : "text_black_gray"
            } leading-[32px] `}
          >
            Withdrawal history
          </button>
        </div>
        <div>
          <button
            onClick={() => setIsOpen("Payment")}
            className={`text-[24px] font-[500]  ${
              isOpen === "Payment" ? "text-[#20AC90]" : "text_black_gray"
            } leading-[32px] `}
          >
            Payment history
          </button>
        </div>
        <div>
          <button
            onClick={() => setIsOpen("Wallet")}
            className={`text-[24px] font-[500]  ${
              isOpen === "Wallet" ? "text-[#20AC90]" : "text_black_gray"
            } leading-[32px] `}
          >
            Wallet Recharge history
          </button>
        </div>
      </div>

      {/* {isOpen === "Transaction" ? (
        <Transaction_history />
      ) :null } */}

      {isOpen === "Withdrawal" ? (
        <Withdrawal_history />
      ) : isOpen === "Payment" ? (
        <Payment_history />
      ) : isOpen === "Wallet" ? (
        <Recharge_history />
      ) : null}
    </div>
  );
};

export default AmountyHistory;
