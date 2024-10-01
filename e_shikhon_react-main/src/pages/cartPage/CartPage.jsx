import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Payment from "./Payment";
import { useLocation } from "react-router-dom";
import Wrapper from "../../components/sheared/Wrapper";
import useStorageSync from "../../hooks/useStorageSync";

const CartPage = () => {
  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState("cart");
  const [isOpenPromo, setIsOpenPromo] = useState(false);
  const [descountAmount, seDescountAmount] = useState([]);
  const [allCourseInfo, setAllCourseInfo] = useState([]);
  const [coursePrice, setCoursePrice] = useState(0);

  const cartData = useStorageSync("cart");
  useEffect(() => {
    if (cartData) {
      setAllCourseInfo(cartData?.items);
      const getCourseParse = cartData?.items;
      const totalPrice = getCourseParse?.reduce((total, item) => {
        return total + (item?.course_price || 0);
      }, 0);
      setCoursePrice(totalPrice);
    }
  }, [cartData]);

  return (
    <div className="py-10 bg-[#F5F5F5]">
      <Wrapper>
        {isOpen === "cart" ? (
          <Cart
            allCourseInfo={allCourseInfo}
            coursePrice={coursePrice}
            setIsOpen={setIsOpen}
            isOpenPromo={isOpenPromo}
            setIsOpenPromo={setIsOpenPromo}
            descountAmount={descountAmount}
            seDescountAmount={seDescountAmount}
          />
        ) : isOpen === "payment" ? (
          <Payment
            data={state}
            setIsOpen={setIsOpen}
            coursePrice={coursePrice}
            descountAmount={descountAmount}
            seDescountAmount={seDescountAmount}
            allCourseInfo={allCourseInfo}
          />
        ) : null}
      </Wrapper>
    </div>
  );
};

export default CartPage;
