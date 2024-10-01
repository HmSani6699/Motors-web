import React, { useEffect, useState } from 'react';
import arrow from "../../assets/svg/right-arrow.svg";
import success_icon from "../../assets/images/sucess-student-icon.png";
import img_1 from "../../assets/images/success-studen-img (1).png";
import img_2 from "../../assets/images/success-studen-img (2).png";
import img_3 from "../../assets/images/success-studen-img (3).png";
import img_4 from "../../assets/images/success-studen-img (4).png";
import img_5 from "../../assets/images/success-studen-img (5).png";
import img_6 from "../../assets/images/success-studen-img (6).png";
import fiverr from "../../assets/images/fiverr.png";
import upwork from "../../assets/images/upwork.png";
import icdd from "../../assets/images/icddr.png";
import general from "../../assets/images/general.png";
import generic from "../../assets/images/generics.png";
import SuccessCard from '../../components/homePage/SuccessCard';
import Wrapper from '../../components/sheared/Wrapper';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { get } from '../../api/axious';

const SuccessfulStudent = () => {
  const [allStudentData, setAllStudentData] = useState();
  useEffect(() => {
    fetchAllStudent();
  }, []);

  const fetchAllStudent = async () => {
    try {
      const response = await get(`/api/auth/all_users?role=Student`);
      if (response?.data) {
        setAllStudentData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };
  return (

    <div className="my-20 max-w-[1471px] mx-auto">
      <div className="flex items-center justify-center gap-2">
        <img width={30} height={30} alt="icon" src={success_icon} />
        <p className="font-Baloo text-[#1D5276]  text-xl sm:text-9xl leading-[28px] font-[600]">
          ক্যারিয়ারে সফল ছাত্রছাত্রী সমূহ
        </p>
      </div>
      <div className="flex items-center overflow-hidden mt-5 relative">
        <Marquee speed="40" pauseOnHover={true}>
          <div className="flex gap-5 mt-20">
            {allStudentData?.map((allStudent, i) => (
              <SuccessCard
                key={i}
                batch="২০১ তম ছাত্র"
                img={img_1}
                work="ইউ আই/ইউ এক্স ডিজাইন"
                company_1={fiverr}
                company_2={icdd}
                allStudent={allStudent}
              />
            ))}
          </div>
        </Marquee>
        <div className="absolute top-0 bottom-0 left-0 w-52 bg-gradient-to-r from-[#f5f5f5] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-52 bg-gradient-to-l from-[#f5f5f5] to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="flex justify-center mt-10">
        <Link to='allStudents'>
          <button
            type="button"
            className="font-Baloo text-white bg-secandary_color flex items-center justify-center py-[10px] px-5  gap-2 rounded-md"
          >
            সকল ছাত্রছাত্রী <img alt="icon" src={arrow} />
          </button>
        </Link>
      </div>
    </div>

  );
};

export default SuccessfulStudent;