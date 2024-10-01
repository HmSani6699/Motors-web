import React from "react";
import arrowRight from "../../../assets/svg/arrow-right-btn.svg";

const StartQuiz = ({ courseData, quiz, setQuizPage, quizResult }) => {
  // console.log(quizResult);
  // console.log(quiz);

  return (
    <div className="w-full py-7 md:py-14 px-5 flex flex-col gap-2 md:gap-4 lg:gap-8">
      <div>
        <h1 className="text-[#5D636F] text-[14px] lg:text-[16px] font-[400] lg:font-[400] leading-[18px] md:leading-[22px] w-full px-8 mx-auto text-center">
          আসসালামু আলাইকুম, {quiz?.title} কুইজ এ আপনাকে স্বাগতম।
        </h1>
      </div>
      <div>
        <h1 className="text-[#1D5276] text-[18px] md:text-[24px] font-[600] md:font-[600] leading-[28px] md:leading-[30px] text-center ">
          {quiz?.title}
        </h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[500] leading-[24px] md:leading-[22px] text-center ">
          কুইজ সময়: {quiz?.quiz_duration} মিনিট
        </h1>
        <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[500] leading-[24px] md:leading-[22px] text-center ">
          সর্বমোট প্রশ্ন: {quiz?.number_of_questions} টি
        </h1>
      </div>
      <div className="w-full mx-auto px-6">
        <ul className="list-disc  text-[#2E3138]">
          <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
            কুইজ শুরু করতে উপরে ডান পাশে ‘Start Quiz’ বাটনে ক্লিক কর।
          </li>
        </ul>
        <ul className="list-disc  text-[#2E3138]">
          <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
            মোট {quiz?.number_of_questions} টি প্রশ্ন থাকবে একটি প্রশ্নের উত্তর
            দেয়ার পার নিচে ডান পাশে “Next Question” বাটনে ক্লিক করে পরবর্তি
            প্রশ্নে যান। এভাবে সবগুলো প্রশ্ন সম্পন্ন করুন।
          </li>
        </ul>
        <ul className="list-disc  text-[#2E3138]">
          <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
            উপরে বামপাশে কুইজের চলমান সময় দেখতে পাবেন।
          </li>
        </ul>
        <ul className="list-disc  text-[#2E3138]">
          <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
            কুইজ শেষ হলে উপরে ডান পাশে ‘Submit Quiz’ বাটনে ক্লিক করুন। এরপর
            ‘Confirm’ বাটনে ক্লিক করুন।
          </li>
        </ul>
        <ul className="list-disc  text-[#2E3138]">
          <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
            কিভাবে কুইজ দিবেন, তা দেখতে{" "}
            <a
              href="https://www.youtube.com/watch?v=ZUVTNTgf2lE"
              target="blank"
              className="text-[#20AC90] underline"
            >
              এই ভিডিওটিও দেখতে পারেন।
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-center ">
          <span className="text-[#1E567B]">বিশেষ দ্রষ্টব্যঃ</span> আপনি{" "}
          {/* {quizResult?.retakes} */}
          {parseFloat(quiz?.number_of_extra_quiz_retakes || 0) -
            parseFloat(quizResult?.retakes || 0)}{" "}
          বারই পরীক্ষা দেওয়ার সুযোগ পাবেন। প্রতিবার কিছু বা সবগুলো প্রশ্নই ভিন্ন
          থাকতে পারে।
        </h1>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setQuizPage("quiz")}
          type="button"
          className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center"
        >
          কুইজ শুরু করুন
          <img src={arrowRight} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default StartQuiz;
