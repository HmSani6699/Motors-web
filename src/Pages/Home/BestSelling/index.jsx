import React from "react";
import card_image1 from "../../../../public/card/image1.png";
import card_image2 from "../../../../public/card/image2.png";
import card_image3 from "../../../../public/card/image3.png";
import card_image4 from "../../../../public/card/image4.png";
import card_image5 from "../../../../public/card/image5.png";
import Card from "../../../component/Card";
import SubCard from "../../../component/SubCard";
import ViewCard from "../../../component/ViewCard";

const BestSelling = () => {
  return (
    <div className="max-w-[1376px] mx-auto mb-[121px]">
      <div className="flex mt-[90px] mb-[50px]">
        <div className="w-[40%]">
          <h2 className="text-[48px] font-[700] text-[#141414] leading-[57px] ">
            Our Best-Selling <br /> Models
          </h2>
        </div>
        <div className="w-[60%]">
          <p className="text-[24px] font-[400] text-[#141414] leading-[28px] pl-[50px]">
            These are the vehicles that have captured the hearts of drivers
            everywhere. Explore our top-selling models and see what makes them
            stand out.
          </p>
        </div>
      </div>

      {/* =======> Short Gallery <===== */}
      <div className="flex  gap-[32px]">
        {/* =========> Left Site <======= */}
        <div>
          <ViewCard image={card_image1} />
        </div>
        {/* =========> Right Site <======= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          <SubCard image={card_image2} title="Mercedes-Benz C-Class" />
          <SubCard image={card_image3} title="Kia Soul" />
          <SubCard image={card_image4} title="Chevrolet Impala" />
          <SubCard image={card_image5} title="Honda CR-V" />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
