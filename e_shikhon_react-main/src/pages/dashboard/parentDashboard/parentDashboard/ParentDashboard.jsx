import React from "react";
import { Link } from "react-router-dom";
import course_icon from "../../../../assets/svg/dashboard_course_color_icon.svg";
import dashboard_star_rating_icon from "../../../../assets/svg/dashboard_star_rating.svg";
import dashboard_green_bdt_icon from "../../../../assets/svg/dashboard_green_bdt_icon.svg";
import user_add_icon from "../../../../assets/svg/dashboard_user_add_color_icon.svg";
import admin_chart from "../../../../assets/images/admin_chart.png";
import admin_chart_2 from "../../../../assets/images/admin_chart_2.png";
import file_edit from "../../../../assets/svg/file-document-edit-outline_green.svg";
import delete_red from "../../../../assets/svg/delete-sweep-outline_red.svg";

const ParentDashboard = () => {
  return (
    <>
      <div className="px-[13px] w-full lg:w-[1015px] mb-10 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10">
          <div className="p-4 bg-[#FFE2E5] rounded-[16px]">
            <div className="flex flex-row lg:flex-col  gap-4">
              <div>
                <img src={course_icon} alt="" />
              </div>
              <h1 className="text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0">
                ১০
              </h1>
            </div>
            <h1 className="mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]">
              মোট ইন্সট্রাক্টর
            </h1>
          </div>
          <div className=" p-5 bg-[#F3E8FF] rounded-[16px]">
            <div className="flex flex-row lg:flex-col gap-4">
              <div>
                <img src={user_add_icon} alt="" />
              </div>
              <h1 className="text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0">
                ২০০০+
              </h1>
            </div>
            <h1 className="mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]">
              ছাত্রছাত্রী সংখ্যা
            </h1>
          </div>
          <div className=" p-5 bg-[#FFF4DE] rounded-[16px]">
            <div className="flex flex-row lg:flex-col gap-4">
              <div>
                <img src={dashboard_star_rating_icon} alt="" />
              </div>
              <h1 className="text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0">
                4.5/5
              </h1>
            </div>
            <h1 className="mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]">
              এ্যাক্টিভ কোর্স
            </h1>
          </div>
          <div className=" p-5 bg-[#DCFCE7] rounded-[16px]">
            <div className="flex flex-row lg:flex-col gap-4">
              <div>
                <img src={dashboard_green_bdt_icon} alt="" />
              </div>
              <h1 className="text-[32px] font-[700] text-[#151D48]  leading-[30px] mt-1 md:mt-0">
                2,000k
              </h1>
            </div>
            <h1 className="mt-5 lg:mt-0 text-[18px] font-[500] text-[#425166] leading-[28px]">
              মোট কোর্স
            </h1>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-5 py-7">
          <div className="w-full lg:max-w-[466px] bg-white rounded-[10px] py-5 ">
            <div className="border-b ps-5">
              <h1 className="text-[28px] font-[600] text_black leading-[28px] mb-2">
                Top Course sale
              </h1>
            </div>
            <div className="py-7 flex justify-center">
              <img className="w-[279px]" src={admin_chart} alt="" />
            </div>
            <div className="flex flex-row items-center justify-center gap-7">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-[#C47F08] rounded-full"></div>
                  <div>
                    <h1 className="text-[16px] font-[500] text-black leading-[18px]">
                      গ্রাফিক্স ডিজাইন
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-[400] text_black leading-[18px]">
                    ৬০% সেল
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-[#1A8C75] rounded-full"></div>
                  <div>
                    <h1 className="text-[16px] font-[500] text-black leading-[18px]">
                      ডিজিটাল মার্কেটিং
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-[400] text_black leading-[18px]">
                    ৩০% সেল
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-[#BA1217] rounded-full"></div>
                  <div>
                    <h1 className="text-[16px] font-[500] text-black leading-[18px]">
                      ওয়েব ডেভেলপমেন্ট
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-[400] text_black leading-[18px]">
                    ১০% সেল
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[527px] bg-white rounded-[10px] p-4 ">
            <div className="border-b ps-5">
              <h1 className="text-[21px] font-[600] text_black leading-[28px] mb-2">
                Students Statistics
              </h1>
            </div>
            <div className="mt-4">
              <img className="w-full" src={admin_chart_2} alt="" />
            </div>
          </div>
        </div>
        {/* list */}

        <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px]">
          <div className="border-b px-2.5 flex flex-wrap flex-row justify-between pb-2.5 mb-5">
            <div>
              <h1 className="text-[28px] font-[600] text_black leading-[36px]">
                Instructor List
              </h1>
            </div>
            <div className="flex flex-row gap-3">
              <button className="p-2.5 text-white primary_green rounded-[5px] text-[14px] font-[400] leading-[18px]">
                All Instructor
              </button>
              <button className="p-2.5 text-black bg-[#F5F5F5] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                Top Instructor
              </button>
              <button className="p-2.5 text-black bg-[#F5F5F5] rounded-[5px] text-[14px] font-[400] leading-[18px]">
                New Instructor
              </button>
            </div>
          </div>
          <table
            className="w-full  text-left border-collapse w-overflow-x-auto table-auto "
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
                  Role
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  E-mail
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Course
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Sale
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]"
                >
                  Action
                </th>
              </tr>

              <tr className="">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Rashed Boruya
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      UI/UX Designer
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="bg-[#F1F2F3]">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Rashedul Islam
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      Motion Designer
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Hasan Mahmud
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      Web Developer
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="bg-[#F1F2F3]">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Dibar hossaain
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      IELTS
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Md. nahid Afridi
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      Spoken English
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="bg-[#F1F2F3]">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Md. Asraful Islam
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      Full Stack
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Md. Al Amin
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      UI/UX Designer
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="bg-[#F1F2F3]">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Rashed Boruya
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      Graphics Designer
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
              <tr className="">
                <td className="h-10 ps-2.5 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    Din islam
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <div>
                    <h1 className="text_black_gray text-[16px] font-[500] leading-[22px]">
                      Mern Developer
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    019255663999
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">
                    rashed3210+@gmail.com
                  </h1>
                </td>
                <td className="h-10 py-2">
                  <h1 className="text_black_gray text-[16px] font-[500]">01</h1>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      01
                    </h1>
                  </div>
                </td>
                <td className="h-10 py-2">
                  <div className="flex flex-row gap-2.5">
                    <h1 className="text_black_gray text-[16px] font-[500]">
                      Approved
                    </h1>
                  </div>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ParentDashboard;
