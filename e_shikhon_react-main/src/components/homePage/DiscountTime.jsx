import React, { useEffect, useRef, useState } from 'react';
import Wrapper from '../sheared/Wrapper';
import bg from "../../assets/svg/admit_bg.svg";
import blue_dot from "../../assets/svg/blue_three_dot.svg";
import green_dot from "../../assets/svg/green_three_dot.svg";
import click_icon from "../../assets/svg/click_icon.svg";
import cross_icon from "../../assets/svg/cross.svg";
import Timer from './Timer';
import { Link } from 'react-router-dom';

const DiscountTime = ({ handleDiscountPopup }) => {

  const future = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

  const countdownDate = new Date(future.toLocaleDateString("en-US")).getTime();
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      if (countdownDate) {
        const currentTime = new Date().getTime();

        const difference = countdownDate - currentTime;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }

        setDate({ days: days, hours: hours, minutes, seconds });
      }
    }, 1000);
  }, [countdownDate]);

  return (
    <>

      <div className="w-full h-[200px] bg-promotion-bg bg-no-repeat md:bg-center bg-cover relative">
        <Wrapper className="h-full">
          <Link to='/course'>
            <div className="flex  justify-center sm:justify-evenly lg:justify-between items-center h-full">
              <div className="hidden sm:block">
                <div className="relative -rotate-[28.485deg] md:rotate-0">
                  <p className="bg-primary_color px-2 md:px-3 py-1 md:py-2 rounded-md text-white font-Baloo w-fit text-[8px] sm:text-xs md:text-xl font-bold leading-[28px]">
                    অনলাইন ব্যাচ
                  </p>
                  <img
                    className="absolute -top-6 -right-10"
                    alt="background"
                    src={blue_dot}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p>
                  <span className="font-bangle_font text-9xl text_gradiyent leading-[36px]">
                    সর্বোচ্চ
                  </span>{" "}
                  <span className="font-[700] font-Baloo text-secandary_color text-5xl leading-[36px]">
                    ডিসকাউন্টে
                  </span>
                </p>

                <div className="relative w-[264px] h-[38px] mt-[-3px] text-base text-white">
                  <img
                    className="absolute top-[-0.5px] left-[0px] w-[264px] h-[38.5px]"
                    alt="background"
                    width={264}
                    src={bg}
                  />
                  <div className="absolute top-[14px] left-[18px] leading-[22px] font-medium  font-Baloo">
                    যেকোনো ধরনের কোর্সে ভর্তি হয়ে যান
                  </div>
                </div>
                <div className="flex gap-3 md:gap-5 mt-5">
                  {/* <Timer firstNum="১" SecNum="৫" text="দিন" />
              <Timer firstNum="০" SecNum="৫" text="ঘন্টা" />
              <Timer firstNum="২" SecNum="৫" text="মিনিট" />
              <div className="hidden md:block">
                <Timer firstNum="২" SecNum="৫" date={date.seconds}  text="সেকেন্ড" />
              </div> */}
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex gap-1 md:gap-2">
                      <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
                        {/* {SecNum} */}
                        {date.days}
                      </p>
                    </div>
                    <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
                      দিন
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex gap-1 md:gap-2">
                      <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
                        {/* {SecNum} */}
                        {date.hours}
                      </p>
                    </div>
                    <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
                      ঘন্টা
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex gap-1 md:gap-2">
                      <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
                        {/* {SecNum} */}
                        {date.minutes}
                      </p>
                    </div>
                    <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
                      মিনিট
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex gap-1 md:gap-2">
                      <p className="rounded-[3px] bg-primary_100 w-7 py-[3px] px-[5px] box-border font-Baloo text-white flex flex-col items-center justify-center leading-[22px]">
                        {/* {SecNum} */}
                        {date.seconds}
                      </p>
                    </div>
                    <p className="text-primary_color leading-[22px] text-center font-Baloo font-[500]">
                      সেকেন্ড
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex flex-col items-center relative -rotate-[19.475deg] md:rotate-0">
                  <p className="font-Baloo leading-[28px] text-primary_color text-xs md:text-xl">
                    কোর্সে ভর্তি হতে
                  </p>
                  <p className="bg-secandary_color px-2 md:px-3 py-1 md:py-2 rounded-md text-white font-Baloo w-fit flex gap-1 md:gap-2 text-[8px] sm:text-sm md:text-xl font-bold leading-[28px]">
                    <img alt="background" src={click_icon} />
                    ক্লিক করুন
                  </p>
                  <img
                    className="absolute -top-3 -right-7"
                    alt="background"
                    src={green_dot}
                  />
                </div>
              </div>
            </div>
          </Link>
          <img
            onClick={handleDiscountPopup}
            className="absolute top-0 right-0 cursor-pointer"
            alt="background"
            src={cross_icon}
          />
        </Wrapper>
      </div>


    </>
  );
};

export default DiscountTime;