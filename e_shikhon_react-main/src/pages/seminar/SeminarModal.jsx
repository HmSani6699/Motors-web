import React, { useContext, useState } from "react";
import InputField from "../../components/inputField/InputField";
import SelectInput from "../../components/inputField/SelectInput";
import Loading from "../../components/sheared/Loading";
import { AuthContext } from "../../layout/MainLayout";
import toast from "react-hot-toast";
import { post } from "../../api/axious";

const SeminarModal = ({ setOpenModal, openModal, seminarId }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromPhone, setFromPhone] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [fromDivision, setFromDivision] = useState("");
  const [fromSeminarSelect, setFromSeminarSelect] = useState("");
  const [fromOccupation, setFromOccupation] = useState("");
  const [fromIsStudent, setFromIsStudent] = useState("");
  const [fromHaveComputer, setFromHaveComputer] = useState("");
  const [fromPurpose, setFromPurpose] = useState("");

  // handleSubmit
  const payload = {
    studentName: fromName,
    studentEmail: fromEmail,
    studentPhone: fromPhone,
    studentAddress: fromAddress,
    studentDivision: fromDivision,
    seminarSelect: fromSeminarSelect,
    studentOccupation: fromOccupation,
    eshikhonStudent: fromIsStudent,
    haveComputer: fromHaveComputer,
    purpose: fromPurpose,
    seminarId,
    studentId: user?.id,
  };
  const handleSubmitSeminar = async () => {
    setLoading(true);

    try {
      const res = await post("/api/seminar/participant/add", payload);

      if (res?.success) {
        toast.success(res.message);
        setOpenModal(false);
      }
    } catch (error) {
      setLoading(false);

      error?.response?.data?.errors.forEach((error) => {
        const errorMessage = Object.values(error)[0];
        toast.error(`Failed to post. Error: ${errorMessage}`);
      });
      console.log("Failed to post/", error?.response?.data?.errors);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`fixed z-[100] flex items-center justify-center ${
        openModal ? "opacity-1 visible" : "invisible opacity-0"
      } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
    >
      <div
        className={`absolute   rounded-sm bg-white p-3 pb-5 text-center drop-shadow-2xl ${
          openModal
            ? "scale-1 opacity-1 duration-300"
            : "scale-0 opacity-0 duration-150"
        } `}
      >
        <svg
          onClick={() => setOpenModal(false)}
          className="mx-auto mr-0 w-8 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="#000"
            ></path>
          </g>
        </svg>
        <h1 className="mb-2 text-xl font-semibold">ইশিখন ফ্রি সেমিনার</h1>
        <p className="px-1 mb-3 text-sm opacity-80">
          ফ্রি সেমিনারে অংশগ্রহনের জন্য সঠিক তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন ।
          পরবর্তীতে ইশিখন থেকে কল করে আপনার আসন নিশ্চিত করা হবে ।
        </p>
        {/* from section field  */}

        <div className="flex flex-row w-full gap-14 mb-7">
          {/* name section  */}
          <InputField
            value={fromName}
            setValue={setFromName}
            title="Name"
            displayPosition={"flex "}
          />
          {/* email section  */}
          <InputField
            value={fromEmail}
            setValue={setFromEmail}
            title="Email"
            displayPosition={"flex "}
          />
        </div>

        <div className="flex flex-row w-full gap-14  mb-7">
          {/* phone section  */}
          <InputField
            value={fromPhone}
            setValue={setFromPhone}
            title="Phone"
            displayPosition={"flex "}
          />
          {/* address section  */}
          <InputField
            value={fromAddress}
            setValue={setFromAddress}
            title="Address"
            displayPosition={"flex "}
          />
        </div>

        <div className="flex flex-row w-full gap-14  mb-7">
          {/* division section  */}
          <SelectInput
            value={fromDivision}
            setValue={setFromDivision}
            title="Division"
            options={divisions}
            displayPosition={"flex"}
          />
          {/* সেমিনারের বিষয় বাছাই করুন section  */}
          <SelectInput
            value={fromSeminarSelect}
            setValue={setFromSeminarSelect}
            title="সেমিনারের বিষয় বাছাই করুন"
            options={seminarValue}
            displayPosition={"flex"}
          />
        </div>

        <div className="flex flex-row w-full gap-14  mb-7">
          {/* পেশায় section  */}
          <SelectInput
            value={fromOccupation}
            setValue={setFromOccupation}
            title="আপনি কোন পেশায় নিয়োজিত আছেন?"
            options={occupations}
            displayPosition={"flex"}
          />
          {/* আপনি কি আমাদের প্রশিক্ষণরত শিক্ষার্থী? section  */}
          <SelectInput
            value={fromIsStudent}
            setValue={setFromIsStudent}
            title="আপনি কি আমাদের প্রশিক্ষণরত শিক্ষার্থী?"
            options={[
              { id: 1, value: "হ্যাঁ" },
              { id: 2, value: "না" },
            ]}
            displayPosition={"flex"}
          />
        </div>

        <div className="flex flex-row w-full gap-14  mb-7">
          {/* computer section  */}
          <SelectInput
            value={fromHaveComputer}
            setValue={setFromHaveComputer}
            title="আপনার বাসায় কি কম্পিউটার বা ল্যাপটপ আছে?"
            options={[
              { id: 1, value: "হ্যাঁ" },
              { id: 2, value: "না" },
            ]}
            displayPosition={"flex"}
          />
          {/* ইশিখন ফ্রি সেমিনারে অংশগ্রহণে আপনার উদ্দেশ্য কি? section  */}
          <SelectInput
            value={fromPurpose}
            setValue={setFromPurpose}
            title="ইশিখন ফ্রি সেমিনারে অংশগ্রহণে আপনার উদ্দেশ্য কি?"
            options={[
              { id: 1, value: "ইশিখনে কোর্স করতে চাই" },
              { id: 2, value: "বেসিক ধারণা নিতে চাই" },
            ]}
            displayPosition={"flex"}
          />
        </div>

        <button
          onClick={() => {
            // setOpenModal(false); // to do  setOpenModal(false) use when success api post here
            handleSubmitSeminar();
          }}
          className="px-3 py-2 rounded-[8px]  text-[16px] font-[500] leading-[24px] text-white primary_green  gap-2"
        >
          {loading ? <Loading /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default SeminarModal;

const divisions = [
  { id: 1, value: "ঢাকা" },
  { id: 2, value: "চট্টগ্রাম" },
  { id: 3, value: "খুলনা" },
  { id: 4, value: "রাজশাহী" },
  { id: 5, value: "সিলেট" },
  { id: 6, value: "বরিশাল" },
  { id: 7, value: "রংপুর" },
  { id: 8, value: "ময়মনসিংহ" },
];
const seminarValue = [
  { id: 1, value: "ডিজিটাল মার্কেটিং" },
  { id: 2, value: "গ্রাফিক্স ডিজাইন" },
  { id: 3, value: "ইথিক্যাল হ্যাকিং" },
  { id: 4, value: "ওয়েব ডিজাইন & ডেভেলপমেন্ট" },
  { id: 5, value: "অন্যান্য" },
];
const occupations = [
  { id: 1, value: "শিক্ষার্থী" },
  { id: 2, value: "চাকুরীজীবী" },
  { id: 3, value: "ব্যবসা" },
  { id: 4, value: "ফ্রিল্যান্সিং" },
  { id: 5, value: "বেকার" },
  { id: 6, value: "অন্যান্য" },
];
