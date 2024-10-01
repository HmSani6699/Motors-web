import React, { useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import layer from "../../assets/svg/layer.svg";
import SeminarCard from "../../components/sheared/seminarCard/SeminarCard";
import { scrollToTop } from "../../api/helper";
import SeminarModal from "./SeminarModal";
import { get } from "../../api/axious";
import toast from "react-hot-toast";

const Seminar = () => {
  scrollToTop();
  const [openModal, setOpenModal] = useState(false);
  const [allSeminarData, setAllSeminarData] = useState([]);
  const [selectOneSeminarData, setSelectOneSeminarData] = useState({});

  // fetching all seminar data
  useEffect(() => {
    fetchAllSeminar();
  }, []);

  const fetchAllSeminar = async () => {
    try {
      const response = await get("/api/seminar/all");

      if (response?.data) {
        setAllSeminarData(response?.data);
      }
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <>
      {/* seminar modal  */}
      <div>
        {openModal && (
          <SeminarModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            seminarId={selectOneSeminarData?.id}
          />
        )}
      </div>

      <div className="py-6 bg-[#F5F5F5]">
        <Wrapper>
          <div className=" flex items-center">
            <img src={home} alt="icon" className="mx-2 mb-1" />
            <p className="text-primary_color font-[500]">হোম</p>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">সেমিনার</p>
          </div>
        </Wrapper>
      </div>
      <div>
        <div className="contact_us_bg bg-[#F4FBFF] ">
          <Wrapper>
            <div>
              <div className="py-14 flex flex-col gap-3 text-center">
                <h1 className="text-[#2E3138] text-[21px] md:text-[24px] lg:text-[28px] font-[600] lg:font-[700] leading-[28px] md:leading-[36px] text-center ">
                  ফ্রি সেমিনারের সময়সূচি
                </h1>
                <p className="text-[#5D636F] text-[14px] lg:text-[16px] font-[400] lg:font-[500] leading-[18px] md:leading-[22px] w-[327px] md:w-[580px] lg:w-[752px] mx-auto">
                  কোন কোর্সে ভর্তি হবেন, সেই কোর্সে কাজের সুযোগ কেমন আর{" "}
                  <span className="text-[#20AC90]">ইশিখন.কম</span> -এ ভর্তি হলে
                  কি কি সুবিধা পাবেন- আপনার মনে এমন অসংখ্য প্রশ্ন রয়েছে নিশ্চয়ই?
                  আপনার যেকোনো প্রশ্নের সরাসরি উত্তর দিতে প্রতি সপ্তাহে আমরা
                  আয়োজন করি কোর্সভিত্তিক ফ্রি সেমিনার। এই সেমিনারগুলোতে অংশ নিয়ে
                  আপনি কোর্সের মেন্টরের কাছ থেকে কোর্স বিষয়ক যেকোনো পরামর্শ নিতে
                  পারেন।
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div>
        <Wrapper>
          <div className="mt-20 mb-20 p-10 bg-[#FFF] rounded-[32px]">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-5">
              <div className="flex items-center gap-2.5 ">
                <img alt="icon" src={layer} />
                <p className="text-[#5D636F] text-xl sm:text-5xl font-[600] leading-[28px] sm:leading-[36px]">
                  সেমিনার সমূহ
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[50px] text-[#F1F1F1] "
                >
                  সকল কোর্স
                </button>
                <button
                  type="button"
                  className="bg-[#C7CAD1] font-Baloo py-[10px] px-5  gap-2 rounded-[50px] text-[#5D636F] "
                >
                  অনলাইন
                </button>
                <button
                  type="button"
                  className="bg-[#C7CAD1] font-Baloo py-[10px] px-5  gap-2 rounded-[50px] text-[#5D636F] "
                >
                  অফলাইন
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {allSeminarData?.length > 0 &&
                allSeminarData?.map((item) => (
                  <SeminarCard
                    key={item?.id}
                    item={item}
                    baseUrl={baseUrl}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setSelectOneSeminarData={setSelectOneSeminarData}
                  />
                ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Seminar;
