import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ViewCard from "../../component/ViewCard";
import Footer from "../Footer";
import { get } from "../../api/axios";
import Pagination from "../../component/Pagination";

const Gallery = () => {
  const [activeTab, setActiveTabe] = useState("all");
  const [cardData, setCardData] = useState([]);
  const [allcategoryData, setAllCategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    handleGetCardData(currentPage);
  }, [currentPage]);

  const handleGetCardData = async (page) => {
    try {
      const res = await get(
        `/api/cards?populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      );
      console.log(res);
      setCardData(res?.data);
      setTotalPages(Math.ceil(res?.meta?.pagination?.total / pageSize));

      // Scroll to top after fetching new data
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllCategoryData();
  }, []);

  const handleGetAllCategoryData = async () => {
    try {
      const res = await get(`/api/categories`);
      console.log(res);
      setAllCategoryData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="lg:pt-[120px] pt-[90px] max-w-[1376px] mx-auto">
        <h2>The Legacy Collection</h2>
        <div className="card_details max-w-[1376px] mx-auto overflow-x-scroll  flex items-center lg:gap-[89px] gap-[50px] mt-[56px]  mb-[30px] lg:mb-[64px]">
          <button
            onClick={() => setActiveTabe("all")}
            className={`py-[16px] px-[24px] text-[16px] font-[600] ${
              activeTab === "all"
                ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                : "text-[#7C7C7C]"
            } `}
          >
            All
          </button>
          {allcategoryData &&
            allcategoryData?.length > 0 &&
            allcategoryData?.map((item, i) => (
              <button
                onClick={() => setActiveTabe(item?.title)}
                className={`py-[16px] px-[24px] text-[16px] whitespace-nowrap  font-[600] ${
                  activeTab === item?.title
                    ? "border-b-2 border-[#2498E2] text-[#2498E2] bg-[#E2F0FC]"
                    : "text-[#7C7C7C]"
                } `}
              >
                {item?.title}
              </button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[33px]">
          {cardData?.length > 0 &&
            cardData?.map((item) => <ViewCard key={item.id} data={item} />)}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
