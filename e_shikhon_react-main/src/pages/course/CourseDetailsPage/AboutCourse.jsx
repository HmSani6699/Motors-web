import React from "react";
import layer_icon from "../../../assets/svg/layer.svg";
const htmlRemoveRegex = /(<([^>]+)>)/gi;

const AboutCourse = ({ courseData }) => {
  return (
    <div id="aboutCourse" className="relative ">
      <div className="flex flex-row gap-2.5 mb-2">
        <img src={layer_icon} alt="" />
        <h3 className="text-[20px] lg:text-[24px] font-[600] leading-[28px] md:leading-[36px] lg:leading-[32px] text_black">
          কোর্স সম্পর্কিত প্রশ্নাবলী
        </h3>
      </div>

      <div className="py-5 px-2 md:px-5 bg-white rounded-[10px] border_gray border">
        <div className="space-y-4">
          {courseData?.data?.aboutCourse.map((data, i) => (
            <details
              close
              key={i}
              className={`group [&_summary::-webkit-details-marker]:hidden pb-2.5 ${courseData?.data?.aboutCourse.length == i + 1
                  ? ""
                  : "border-b-2 border-dashed"
                }  `}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg">
                <h3 className="text-[14px] md:text-[18px] lg:text-[20px] font-[500] md:font-[600] lg:font-[500] leading-[18px] md:leading-[28px] text_black">
                  {data?.title}
                </h3>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <h3 className="py-4 text-[12px] md:text-[14px] font-[400] leading-[18px] text_black">
                {data?.answer.replace(htmlRemoveRegex, "")}
              </h3>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
