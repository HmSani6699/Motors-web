{
  !newSlotOpen ? (
    <div className="w-full overflow-x-auto">
      <table
        className="w-full bg-white rounded-[10px] text-left border-collapse w-overflow-x-auto "
        cellSpacing="0"
      >
        <tbody>
          <tr className="bg-[#E3E5E8] ">
            <th
              scope="col"
              className="h-9 ps-2.5 text-[#2E3138] text-[16px] font-[500] rounded-ss-[10px]"
            >
              ID No
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Slot Date
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              Start Time
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] "
            >
              End Time
            </th>
            <th
              scope="col"
              className="h-9 px-0 text-[#2E3138] text-[16px] font-[500] rounded-se-[10px]"
            >
              Action
            </th>
          </tr>

          {slots?.length > 0 &&
            slots?.map((slot, i) => (
              <tr className="border-b border-[#C7CAD1]">
                <td className="h-12 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {i + 1}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {slot?.date.slice(0, 10)}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="second_text_color text-[16px] font-[500]">
                    {slot?.start_time}
                  </h1>
                </td>
                <td className="h-12 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    {slot?.end_time}
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <Link>
                      <img src={file_edit} alt="" />
                    </Link>
                    <button>
                      <img src={delete_red} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2.5 w-full">
          <h2 className="text-[14px] font-[400] text_black leading-[18px]">
            Slot Date
          </h2>
          <div className="">
            <input
              value={slotDate}
              onChange={(e) => setSlotDate(e.target.value)}
              className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
              type="date"
              placeholder="Slot Date"
            />
            {formErrors.date && (
              <p className="text-red-500 text-sm mt-1 ml-[15px]">
                {formErrors.date}
              </p>
            )}
          </div>
        </div>
        {/* start time */}
        <div className="flex flex-col gap-2.5 w-full">
          <h2 className="text-[14px] font-[400] text_black leading-[18px]">
            Start Time
          </h2>
          <div className="">
            <input
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
              type="time"
              placeholder="Start Time"
            />
            {formErrors.start_time && (
              <p className="text-red-500 text-sm mt-1 ml-[15px]">
                {formErrors.start_time}
              </p>
            )}
          </div>
        </div>
        {/* end time */}
        <div className="flex flex-col gap-2.5 w-full">
          <h2 className="text-[14px] font-[400] text_black leading-[18px]">
            End Time
          </h2>
          <div className="">
            <input
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
              type="time"
              placeholder="End Time"
            />
            {formErrors.end_time && (
              <p className="text-red-500 text-sm mt-1 ml-[15px]">
                {formErrors.end_time}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <h2 className="text-[14px] font-[400] text_black leading-[18px]">
            End Time
          </h2>
          <div className="">
            <input
              value={endTime}
              onChange={handleChange}
              className="w-full px-5 py-2.5 bg-[#F1F2F3] rounded-[50px] outline-none"
              type="time"
              placeholder="End Time"
            />
            {formErrors.end_time && (
              <p className="text-red-500 text-sm mt-1 ml-[15px]">
                {formErrors.end_time}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end py-5">
        <button
          onClick={() => handleAddNewSlot(user?.id)}
          className="primary_green py-2 px-5 rounded-[5px] text-white mt-[10px]"
        >
          {/* <img src={plus_white} alt="" /> */}
          Submit
        </button>
      </div>
    </div>
  );
}
