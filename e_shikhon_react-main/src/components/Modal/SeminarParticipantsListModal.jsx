import React from "react";

const SeminarParticipantsListModal = ({
  openModal,
  setOpenModal,
  allParticipant,
}) => {
  console.log(allParticipant);
  return (
    <div
      className={`fixed z-[100] flex items-center justify-center ${
        openModal ? "opacity-1 visible" : "invisible opacity-0"
      } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
    >
      <div
        className={`absolute w-[80%]  rounded-sm bg-white p-3 pb-5 text-center drop-shadow-2xl ${
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
        {/* participant list  */}
        <div>
          <table
            className="w-full bg-white  text-left border-collapse w-overflow-x-auto table-auto "
            cellSpacing="0"
          >
            <tbody>
              <tr className="bg-[#F1F2F3] ">
                <th
                  scope="col"
                  className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Student
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                >
                  Action
                </th>
              </tr>

              {allParticipant?.length > 0
                ? allParticipant?.map((item, i) => (
                    <tr className="">
                      <td className="h-10 ps-2.5 py-2">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {item?.studentName}
                        </h1>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {item?.studentEmail}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <div>
                          <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                            {item?.studentAddress}
                          </h1>
                        </div>
                      </td>
                      <td className="h-10 py-2">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {item?.studentPhone}
                        </h1>
                      </td>
                      <td className="h-10 py-2">
                        <h1 className="text_black_gray text-[16px] font-[500]">
                          {item?.eshikhonStudent}
                        </h1>
                      </td>
                      <td className="h-10 py-2">
                        <div className="flex flex-row gap-2.5">Action</div>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        {allParticipant?.length <= 0 && (
          <div className="flex justify-center">
            <span className="text-center my-5 text-xl text-black">
              এখনো কোন ডাটা নেই
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeminarParticipantsListModal;

const participantData = [
  {
    studentName: "John Doe",
    studentEmail: "john.doe@example.com",
    studentPhone: "123-456-7890",
    studentAddress: "123 Main St",
    studentDivision: "New York",
    seminarSelect: "Workshop",
    studentOccupation: "Student",
    eshikhonStudent: "Yes",
    haveComputer: "Yes",
    purpose: "Learning new skills",
    seminarId: 1,
    studentId: 101,
  },
  {
    studentName: "Jane Smith",
    studentEmail: "jane.smith@example.com",
    studentPhone: "987-654-3210",
    studentAddress: "456 Elm St",
    studentDivision: "California",
    seminarSelect: "Conference",
    studentOccupation: "Engineer",
    eshikhonStudent: "No",
    haveComputer: "Yes",
    purpose: "Networking",
    seminarId: 2,
    studentId: 102,
  },
  {
    studentName: "Alice Johnson",
    studentEmail: "alice.johnson@example.com",
    studentPhone: "555-123-4567",
    studentAddress: "789 Oak St",
    studentDivision: "Texas",
    seminarSelect: "Seminar",
    studentOccupation: "Artist",
    eshikhonStudent: "Yes",
    haveComputer: "No",
    purpose: "Improving skills",
    seminarId: 3,
    studentId: 103,
  },
];
