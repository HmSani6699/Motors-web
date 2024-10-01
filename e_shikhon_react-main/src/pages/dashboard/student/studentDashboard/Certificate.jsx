import React, { useContext, useEffect, useState } from "react";
import white_certificate from "../../../../assets/images/white_certificate.png";
import facebook_icon from "../../../../assets/svg/facebook.svg";
import linkedin_icon from "../../../../assets/svg/linkedin_icon_white_pading.svg";
import instagram_icon from "../../../../assets/svg/Instragram.svg";
import green_shear_icon from "../../../../assets/svg/Google Plus.svg";
import badgeIcon from "../../../../assets/svg/badge_star.svg";
import { AuthContext } from "../../../../layout/MainLayout";
import { post } from "../../../../api/axious";
import moment from "moment";

const Certificate = () => {
  const [showBadge, setShowBadge] = useState(false);
  const [certificateData, setCertificateData] = useState([]);
  const API_URL = import.meta.env.VITE_BASE_URL;
  const handleMyBadge = () => {
    setShowBadge(true);
  };
  const handleCertificate = () => {
    setShowBadge(false);
  };

  const { user } = useContext(AuthContext);
  console.log(user?.id);

  const getCertificateData = async () => {
    // setLoading(true);
    try {
      const response = await post(`api/courses/all_certificate`, {
        user_id: user?.id,
      });
      // api/courses/get_1/:id
      if (response?.data) {
        console.log(response);
        setCertificateData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    } finally {
    }
  };
  useEffect(() => {
    getCertificateData();
  }, []);

  console.log(certificateData);

  return (
    <>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className="border-b border-[#C7CAD1] flex justify-between">
          <div>
            {!showBadge ? (
              <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
                সার্টিফিকেট
              </h2>
            ) : (
              <h2 className="text-[18px] md:text-[24px] lg:text-[36px] font-[600] text_black_gray leading-[18px] md:leading-[32px] lg:leading-[40px] pb-3">
                ব্যাজ{" "}
              </h2>
            )}
          </div>

          <div>
            <div className="flex gap-5">
              <button
                onClick={handleCertificate}
                className={` py-2 px-5 rounded-[5px]  ${
                  !showBadge
                    ? "primary_green text-white"
                    : "border border-[#C7CAD1] text-black"
                }`}
              >
                Certificate
              </button>
              <button
                onClick={handleMyBadge}
                className={` py-2 px-5 rounded-[5px]  ${
                  showBadge
                    ? "primary_green text-white"
                    : "border border-[#C7CAD1] text-black"
                }`}
              >
                My Badge
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        {!showBadge ? (
          <div className="w-full overflow-x-auto mt-5">
            <table
              className="table-auto overflow-x-scroll w-[790px] md:w-full  text-left border-collapse rounded w-overflow-x-auto overflow-scroll "
              cellSpacing="0"
            >
              <tbody>
                <tr className="">
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Certificate
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Course Name
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Grade Achieved
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Accomplished Date
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Share
                  </th>
                </tr>
                {certificateData?.length ? (
                  certificateData?.map((item) => (
                    <tr>
                      <td className="h-12 py-2">
                        <img
                          src={API_URL + item?.courses?.thumbLinePicPath?.path}
                          alt=""
                          className="size-20 object-contain"
                        />
                      </td>
                      <td className="h-12 py-2">
                        <div>
                          <h1 className="text-[#2E3138] text-[16px] font-[600] leading-[22px]">
                            {item?.courses?.courseTitle}
                          </h1>
                          <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                            Batch: {item?.batch_info?.batch_no}
                          </h1>
                        </div>
                      </td>
                      <td className="h-12 py-2">
                        <h1 className="text_black_gray text-[14px] font-[400]">
                          {item?.courses?.percentage}%
                        </h1>
                      </td>
                      <td className="h-12 py-2">
                        <h1 className="text_black_gray text-[14px] font-[400]">
                          {moment(item?.batch_info?.end_date).format(
                            "D MMMM YYYY"
                          )}
                        </h1>
                      </td>
                      <td className="h-12 py-2">
                        <div className="flex flex-row gap-2.5">
                          <div>
                            <img src={facebook_icon} alt="" />
                          </div>
                          <div>
                            <img src={linkedin_icon} alt="" />
                          </div>
                          <div>
                            <img src={instagram_icon} alt="" />
                          </div>
                          <div>
                            <img src={green_shear_icon} alt="" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <span className="text-xl font-semibold text-center">
                    You have no certificate{" "}
                  </span>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full overflow-x-auto mt-5">
            <table
              className="table-auto overflow-x-scroll w-[790px] md:w-full  text-left border-collapse rounded w-overflow-x-auto overflow-scroll "
              cellSpacing="0"
            >
              <tbody>
                <tr className="">
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Badge
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Course Name
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Grade Achieved
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Accomplished Date
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-0 text-sm font-medium stroke-slate-700 text-slate-700 "
                  >
                    Share
                  </th>
                </tr>
                <tr>
                  <td className="h-12 py-2">
                    <img className="w-8" src={badgeIcon} alt="" />
                  </td>
                  <td className="h-12 py-2">
                    <div>
                      <h1 className="text-[#2E3138] text-[16px] font-[600] leading-[22px]">
                        সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স
                      </h1>
                      <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                        Batch: BB202306
                      </h1>
                    </div>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      90.31%
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      15 June 2023
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <div className="flex flex-row gap-2.5">
                      <div>
                        <img src={facebook_icon} alt="" />
                      </div>
                      <div>
                        <img src={linkedin_icon} alt="" />
                      </div>
                      <div>
                        <img src={instagram_icon} alt="" />
                      </div>
                      <div>
                        <img src={green_shear_icon} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-[#C7CAD1]">
                  <td className="h-12 py-2">
                    <img className="w-8" src={badgeIcon} alt="" />
                  </td>
                  <td className="h-12 py-2">
                    <div>
                      <h1 className="text-[#2E3138] text-[16px] font-[600] leading-[22px]">
                        সোস্যাল মিডিয়া মার্কেটিং লাইভ কোর্স
                      </h1>
                      <h1 className="text_black_gray text-[14px] font-[400] leading-[18px]">
                        Batch: BB202306
                      </h1>
                    </div>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      90.31%
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <h1 className="text_black_gray text-[14px] font-[400]">
                      15 June 2023
                    </h1>
                  </td>
                  <td className="h-12 py-2">
                    <div className="flex flex-row gap-2.5">
                      <div>
                        <img src={facebook_icon} alt="" />
                      </div>
                      <div>
                        <img src={linkedin_icon} alt="" />
                      </div>
                      <div>
                        <img src={instagram_icon} alt="" />
                      </div>
                      <div>
                        <img src={green_shear_icon} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Certificate;
certificateData: [
  {
    id: 176,

    user_id: 1,

    course_id: 69,

    batch_id: 63,

    progress: null,

    quiz_progress: null,

    assignment_progress: null,

    createdAt: "2024-09-17T20:53:47.991Z",

    updatedAt: "2024-09-17T20:53:47.991Z",

    courses: {
      id: 69,

      courseTitle: "fx test",

      courseCurriculum: [
        {
          title: "s_test1",

          units: [{ id: "183" }],
        },

        {
          title: "s_test2",

          units: [{ id: "184" }],
        },
      ],

      thumbLinePicPath: {
        path: "course_files/1726604186455-WhatsApp Image 2024-09-14 at 23.38.31_7a163e68.jpg",

        filename:
          "1726604186455-WhatsApp Image 2024-09-14 at 23.38.31_7a163e68.jpg",

        originalname: "WhatsApp Image 2024-09-14 at 23.38.31_7a163e68.jpg",
      },

      courseStarDate: "2024-06-01",

      regularPrice: 200,

      sellPrice: 190,

      percentage: "0.00",
    },

    batch_info: {
      id: 63,

      course_id: 69,

      user_id: 4,

      scheduleDay: ["Wed", "Thur", "Fri"],

      scheduleTime: "02:25",

      start_date: "2024-09-18T00:00:00.000Z",

      end_date: "2024-09-20T00:00:00.000Z",

      batch_no: "fx2-Batch-N24-1",

      seats: 3,

      participants: 4,

      dummy_participants: 1,

      courseCurriculum: [
        {
          quiz: 55,

          title: "s_tx",

          units: [{ id: 183 }],

          assignment: 40,
        },

        {
          quiz: 51,

          title: "s_tx",

          units: [{ id: 184 }],

          assignment: 44,
        },
      ],

      status: "approved",

      createdAt: "2024-09-17T20:23:44.751Z",

      updatedAt: "2024-09-17T20:56:07.532Z",
    },
  },
];
