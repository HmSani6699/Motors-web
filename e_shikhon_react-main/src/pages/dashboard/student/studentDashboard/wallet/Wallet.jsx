import React, { useContext, useEffect, useState } from "react";
import bdt_icon_black from "../../../../../assets/svg/bdt_icon_black.svg";
import RechargeModal from "./RechargeModal";
import WithdrawalModal from "./WithdrawalModal";
import { get, post } from "../../../../../api/axious";
import { AuthContext } from "../../../../../layout/MainLayout";
import Recharge_history from "./Recharge_history";
import Withdrawal_history from "./Withdrawal_history";
import toast from "react-hot-toast";

const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

const Wallet = () => {
  const [loading, setLoading] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [rechargeModal, setRechargeModal] = useState(false);
  const [withdrawalModal, setWithdrawalModal] = useState(false);
  const [withdrawlMethod, setWithdrawalMethod] = useState("");
  const [withdrawlNumber, setWithdrawalNumber] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const [isPaymentMethod, setIsPaymentMethod] = useState("");
  const [amount, setAmount] = useState();
  const [rechargeAmount, setRechargeAmount] = useState();
  const [walletAmount, setWalletAmount] = useState();
  const [isOpen, setIsOpen] = useState("Withdrawal");
  const [bankName, setBankName] = useState();
  const [branchName, setBranchName] = useState();
  const [routingNumber, setRoutingNumber] = useState();
  const [acountName, setAcountName] = useState();
  const [acountNumber, setAcountNumber] = useState();

  const [allWithdrawalsData, setAllWithdrawalsData] = useState([]);

  //   Fetch all withdrawal request
  useEffect(() => {
    if (user?.id) {
      console.log(user?.id);
      fetchWithdrawalRequest(user?.id);
    }
  }, [user?.id]);
  const fetchWithdrawalRequest = async (id) => {
    setLoading(true);
    try {
      const res = await post(`api/pay/all_request_withdrawal`, { user_id: id });
      console.log(res);
      if (res?.success) {
        setAllWithdrawalsData(res?.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // console.log(allWithdrawalsData);

  // Handle Withdrawal Function
  const handleWithdrawal = async () => {
    const formData = {
      user_id: user?.id,
      type: isPaymentMethod,
      method: withdrawlMethod,
      acc_no: bankNumber,
      phone_no: withdrawlNumber,
      amount,
    };

    console.log(formData);

    setLoading(true);
    try {
      if (condition) {
        const res = await post("api/pay/request_withdrawal", formData);
        console.log(res);
        if (res?.success) {
          setWithdrawalModal("");
          setIsPaymentMethod("");
          setWithdrawalMethod("");
          setBankNumber("");
          setWithdrawalNumber("");
          fetchWithdrawalRequest(user?.id);
          toast.success("Withdrawal Request Successfull!");
        }
      } else {
        console.log("Emon ");

        const res = await post("api/pay/request_withdrawal", formData);
        console.log(res);
        if (res?.success) {
          setWithdrawalModal("");
          setIsPaymentMethod("");
          setWithdrawalMethod("");
          setBankNumber("");
          setWithdrawalNumber("");
          fetchWithdrawalRequest(user?.id);
          toast.success("Withdrawal Request Successfull!");
        }
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // Handle Recharge Function
  const handleRecharge = async () => {
    const payload = {
      user_id: user?.id,
      course_id: 122,
      batch_id: 122,
      type: "recharge",
      amount: parseInt(rechargeAmount),
    };
    console.log(payload, "huhuhu");
    setLoading(true);

    try {
      if (condition) {
        const response = await post(`/api/pay/aamar_pay`, payload);
        setLoading(false);
        console.log(response?.url, "++++++++.");
        if (response?.url) {
          setRechargeModal(false);
          toast.success("Recharge Request Successfull!");
          window.location.href = response.url; // Redirect the user
        }
      } else {
        const response = await post(`/api/pay/aamar_pay`, payload);
        setLoading(false);
        console.log("emon ===> ", response?.url);
        if (response?.url) {
          setRechargeModal(false);
          toast.success("Recharge Request Successfull!");
          window.location.href = response.url; // Redirect the user
        }
      }
    } catch (error) {
      setLoading(false);
      // toast.error(error?.response?.data?.error);
      console.log("Faild to Login/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // Get user Wallet
  useEffect(() => {
    if (user?.id) {
      fetchUserWallet(user?.id);
    }
  }, [user?.id]);

  const fetchUserWallet = async (id) => {
    setLoading(true);
    try {
      const res = await get(`api/pay/wallet-by-user/${id}`);
      console.log(res?.data);
      if (res?.success) {
        setWalletAmount(res?.data?.balance);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get user info
  useEffect(() => {
    if (isPaymentMethod === "Bank") {
      if (user?.finance[0]?.bank_name) {
        setBankName(user?.finance[0]?.bank_name);
      }
      if (user?.finance[0]?.branch_name) {
        setBranchName(user?.finance[0]?.branch_name);
      }
      if (user?.finance[0]?.routing_number) {
        setRoutingNumber(user?.finance[0]?.routing_number);
      }
      if (user?.finance[0]?.acount_name) {
        setAcountName(user?.finance[0]?.acount_name);
      }
      if (user?.finance[0]?.acount_number) {
        setAcountNumber(user?.finance[0]?.acount_number);
      }
    }

    if (withdrawlMethod && user) {
      if (withdrawlMethod === "Bkash") {
        setWithdrawalNumber(user?.finance[0]?.bkash);
      }
      if (withdrawlMethod === "Nagod") {
        setWithdrawalNumber(user?.finance[0]?.nagad);
      }
      if (withdrawlMethod === "Rocket") {
        setWithdrawalNumber(user?.finance[0]?.rocket);
      }
    }
  }, [withdrawlMethod || isPaymentMethod]);

  // console.log(withdrawlNumber);

  return (
    <>
      <div className="w-[1015px] mx-auto pb-[50px]">
        <div className="border-b border-[#C7CAD1]">
          <div>
            <h2 className="text-[36px] font-[600] text_black_gray leading-[40px] pb-3">
              Wallet
            </h2>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between py-5">
          <div className="bg-[#E3E5E8] p-5 rounded-[5px]">
            <h2 className="text-[16px] font-[500] text_black_gray leading-[24px] ">
              My Balance
            </h2>
            <div className="flex items-center gap-1">
              <img className="mb-4" src={bdt_icon_black} alt="" />
              <h2 className="text-[36px] font-[600] text_black_gray leading-[40px] ">
                {(walletAmount && walletAmount) || 0}
              </h2>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div>
              <button
                onClick={() => setWithdrawalModal(!withdrawalModal)}
                className="primary_green py-3 px-5 rounded-[5px] text-white"
              >
                Request Withdrawal
              </button>
            </div>
            {/* <div>
              <button className="bg-[#2872A4] py-3 px-5 rounded-[5px] text-white">
                Beneficiary
              </button>
            </div> */}

            <div>
              <button
                onClick={() => setRechargeModal(!rechargeModal)}
                className="bg-[#C47F08] py-3 px-5 rounded-[5px] text-white"
              >
                Recharge
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-5 border-b border-[#C7CAD1] mb-5 mt-2.5">
          {/* <div>
            <button className="text-[24px] font-[500] text_black_gray leading-[32px] ">
              Transaction history
            </button>
          </div> */}
          <div>
            <button
              onClick={() => setIsOpen("Withdrawal")}
              className={`text-[24px] font-[500] ${isOpen === "Withdrawal" ? "text-[#20AC90]" : "text_black_gray"
                }  leading-[32px]`}
            >
              Withdrawal history
            </button>
          </div>
          <div>
            <button
              onClick={() => setIsOpen("Recharge")}
              className={`text-[24px] font-[500] ${isOpen === "Recharge" ? "text-[#20AC90]" : "text_black_gray"
                }  leading-[32px]`}
            >
              Wallet Recharge history
            </button>
          </div>
        </div>

        {/*Withdrawal and Recharge history component  */}
        {isOpen === "Withdrawal" ? (
          <Withdrawal_history allWithdrawalsData={allWithdrawalsData} loading={loading} />
        ) : isOpen === "Recharge" ? (
          <Recharge_history />
        ) : null}

        {/* Withdrawal Modal */}
        {withdrawalModal && (
          <WithdrawalModal
            setWithdrawalModal={setWithdrawalModal}
            handleWithdrawal={handleWithdrawal}
            withdrawlMethod={withdrawlMethod}
            setWithdrawalMethod={setWithdrawalMethod}
            withdrawlNumber={withdrawlNumber}
            setWithdrawalNumber={setWithdrawalNumber}
            bankNumber={bankNumber}
            setBankNumber={setBankNumber}
            isPaymentMethod={isPaymentMethod}
            setIsPaymentMethod={setIsPaymentMethod}
            amount={amount}
            setAmount={setAmount}
            bankName={bankName}
            branchName={branchName}
            routingNumber={routingNumber}
            acountName={acountName}
            acountNumber={acountNumber}
            setBankName={setBankName}
            setBranchName={setBranchName}
            setRoutingNumber={setRoutingNumber}
            setAcountName={setAcountName}
            setAcountNumber={setAcountNumber}
          />
        )}

        {/* Recharge Modal */}
        {rechargeModal && (
          <RechargeModal
            setRechargeModal={setRechargeModal}
            handleRecharge={handleRecharge}
            rechargeAmount={rechargeAmount}
            setRechargeAmount={setRechargeAmount}
          />
        )}
      </div>
    </>
  );
};

export default Wallet;
