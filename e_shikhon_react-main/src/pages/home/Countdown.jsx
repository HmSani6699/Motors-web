import React, { useEffect, useState } from 'react';
import img_1 from "../../assets/images/student.png";
import img_2 from "../../assets/images/teacher.png";
import img_3 from "../../assets/images/office.png";
import img_4 from "../../assets/images/globe.png";
import CountdownCard from './CountdownCard';
import { get } from '../../api/axious';


const Countdown = () => {

  const [countData, setCountData] = useState([])

  const fetchCountData = async () => {
    try {
      const response = await get("/api/auth/userCourseCount");
      console.log(response, "response");
      if (response?.data) {
        setCountData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  }

  useEffect(() => {
    fetchCountData();
  }, []);

  console.log(countData, "countData");


  return (
    <div className="w-full max-w-[1280px] px-0 md:px-10 mx-auto absolute md:-bottom-20 z-10 left-1/2 transform -translate-x-1/2 ">
      <div className="px-5 py-5 sm:py-10 coundown_box bg-white rounded-[0px] sm:rounded-[10px] grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <CountdownCard img={img_1} num={countData?.studentCount} title="জন+" office="শিক্ষার্থী" />
        <CountdownCard img={img_2} num={countData?.instructorCount} title="জন+" office="অভিজ্ঞ মেন্টর" />
        <CountdownCard img={img_3} num='20' title="টি+" office="এজেন্ট অফিস" />
        <CountdownCard img={img_4} num={countData?.courseCount} title="টি+" office=" লার্নিং কোর্স" />
      </div>
      {/* --------- */}

    </div>
  );
};

export default Countdown;