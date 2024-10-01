import React from "react";

const DateConverter = ({ date }) => {
  const formatDate = (inputDate) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const parts = inputDate.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    const dayOfWeek = days[date.getDay()];
    const monthName = months[month];

    return `${day} ${monthName} ${year}, ${dayOfWeek}`;
  };

  const inputDate = date;
  const formattedDate = formatDate(inputDate);

  return (
    <div>
      {/* <p>Input Date: {inputDate}</p> */}
      <p className="whitespace-nowrap text-[#143952] text-[16px]">
        {formattedDate}
      </p>
    </div>
  );
};

export default DateConverter;
