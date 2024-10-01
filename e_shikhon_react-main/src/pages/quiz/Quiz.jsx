import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/sheared/Wrapper";
import home from "../../assets/svg/home_icon.svg";
import arrow from "../../assets/svg/right_gray_icon.svg";
import arrowRight from "../../assets/svg/arrow-right-btn.svg";
import { useNavigate, useParams } from "react-router-dom";
import { get, post } from "../../api/axious";
import {
  getDurationInSeconds,
  secondToFormatTime,
} from "../../utils/timeFormate";
import { AuthContext } from "../../layout/MainLayout";
import toast from "react-hot-toast";
import Loading from "../../components/sheared/Loading";
import { englishToBanglaNumberConvert } from "../../utils/englishToBanglaNumberConvert";

const Quiz = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [quiz, setQuizData] = useState({});
  const [quizPage, setQuizPage] = useState("start");

  const initialTime = getDurationInSeconds(
    quiz?.quiz_duration,
    quiz?.quiz_duration_parameter
  );
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    fetchQuiz();
  }, [id]);

  const fetchQuiz = async () => {
    try {
      const response = await get(`/api/random_quiz/${id}`);
      setQuizData(response?.data);
    } catch (error) {
      console.log("Error creating app:", error);
    }
  };

  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quiz?.questions?.length).fill(null)
  );
  const [progress, setProgress] = useState(0);

  const [showAnswersPage, setShowAnswersPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [timer, setTimer] = useState(120);
  const [timerActive, setTimerActive] = useState(false);

  const quizResult = quiz?.result?.[0];
  const quizResultId = quiz?.result?.[0]?.id;

  useEffect(() => {
    if (quiz?.result?.[0]?.isComplete !== "true") {
      setTimer(parseInt(quiz?.quiz_duration) * 60);
      setTimerActive(true);
      setCurrentQuestion(0);
      setProgress(0);
      setTotalCorrectAnswers(null);
      setSelectedOptions("");
      setShowAnswersPage(false);
    }
  }, [quiz]);

  useEffect(() => {
    if (timerActive && timer > 0 && quizPage === "quiz") {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    } else if (timer === 0) {
      onSubmit();
    }
  }, [timer, timerActive, quizPage]);

  const handleOptionChange = (e) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = e.target.value;
    setSelectedOptions(updatedOptions);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const onSubmit = async () => {
    setProgress(currentQuestion + 1);
    setTimerActive(false);
    let correctAnswers = 0;
    let storedAnswers = [];
    selectedOptions?.forEach((selectedOption, index) => {
      storedAnswers.push(quiz?.questions?.[index]?.correct_ans);
      if (selectedOption === quiz?.questions?.[index]?.correct_ans) {
        correctAnswers++;
      }
    });
    setTotalCorrectAnswers(correctAnswers);

    const quiz_payload = {
      quiz_id: quiz.id,
      user_id: user?.id,
      quiz_mark: parseFloat(correctAnswers) * parseFloat(quiz?.marks || 0),
      // isComplete: true,
      // status: "complete",
      total_ques: quiz?.questions?.length,
      answers: selectedOptions,
    };
    console.log(quiz_payload);

    setLoading(true);
    const toastId = toast.loading("Result Submit ....");
    try {
      const res = await post(
        `/api/random_quiz_result/submitAnswer`,
        quiz_payload
      );
      console.log(res, "add quiz mark response======>");
      if (res?.success) {
        toast.success("Result Submit Done", { id: toastId, duration: 3000 });
        navigate("/student/my-quiz");
      }
    } catch (error) {
      console.log("Failed to Post/", error?.response?.data);
      toast.error(error?.response?.data?.message, {
        id: toastId,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateStrokeOffset = () => {
    const radius = 120; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (timer / initialTime) * circumference;
    return offset;
  };

  const formattedTime = secondToFormatTime(timer);

  console.log(quiz);

  return (
    <>
      <div className="py-6 bg-[#F5F5F5]">
        <Wrapper>
          <div className=" flex items-center">
            <img src={home} alt="icon" className="mx-2 mb-1" />
            <p className="text-primary_color font-[500]">হোম</p>
            <img src={arrow} alt="icon" />
            <p className="text-[#9096A2]">কুইজ</p>
          </div>

          {/* quiz section */}

          {quizPage === "start" && (
            <div className="flex flex-col gap-7 py-10">
              <div className="justify-end flex">
                <button
                  onClick={() => setQuizPage("quiz")}
                  type="button"
                  className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center"
                >
                  কুইজ শুরু করুন
                  <img src={arrowRight} alt="icon" />
                </button>
              </div>

              <div className="contact_us_bg bg-[#F4FBFF] border-2 border_gray rounded-[20px] py-7 md:py-14 px-5 flex flex-col gap-2 md:gap-4 lg:gap-8">
                <div>
                  <h1 className="text-[#5D636F] text-[14px] lg:text-[16px] font-[400] lg:font-[400] leading-[18px] md:leading-[22px] w-[327px] md:w-[580px] lg:w-[872px] mx-auto text-center">
                    আসসালামু আলাইকুম, {quiz?.title} সেমিনার কুইজ এ আপনাকে
                    স্বাগতম। {quiz?.description}। কুইজে এ প্রাপ্ত মার্কসমূহের
                    উপর ভিত্তি করে সর্বোচ্চ ৫ জন কে ১০% ডিস্কাউন্ট প্রদান করা
                    হবে।
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#1D5276] text-[18px] md:text-[24px] font-[600] md:font-[600] leading-[28px] md:leading-[36px] text-center ">
                    {quiz?.title}
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[500] leading-[24px] md:leading-[22px] text-center ">
                    কুইজ সময়: {quiz?.quiz_duration}{" "}
                    {quiz?.quiz_duration_parameter}
                  </h1>
                  <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[500] leading-[24px] md:leading-[22px] text-center ">
                    সর্বমোট প্রশ্ন:{" "}
                    {englishToBanglaNumberConvert(
                      parseInt(quiz?.number_of_questions)
                    )}{" "} টি
                  </h1>
                </div>
                <div className="w-full md:w-[653px] mx-auto px-4">
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      কুইজ শুরু করতে উপরে ডান পাশে ‘Start Quiz’ বাটনে ক্লিক কর।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      মোট{" "}
                      {englishToBanglaNumberConvert(
                        parseInt(quiz?.number_of_questions)
                      )}{" "}
                      টি প্রশ্ন থাকবে একটি প্রশ্নের উত্তর দেয়ার পার নিচে ডান
                      পাশে “Next Question” বাটনে ক্লিক করে পরবর্তি প্রশ্নে যান।
                      এভাবে সবগুলো প্রশ্ন সম্পন্ন করুন।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      উপরে বামপাশে কুইজের চলমান সময় দেখতে পাবেন।
                    </li>
                  </ul>
                  <ul className="list-disc  text-[#2E3138]">
                    <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                      কুইজ শেষ হলে উপরে ডান পাশে ‘Submit Quiz’ বাটনে ক্লিক করুন।
                      এরপর ‘Confirm’ বাটনে ক্লিক করুন।
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
                    <span className="text-[#1E567B]">বিশেষ দ্রষ্টব্যঃ</span>{" "}
                    একজন ১ বারই পরীক্ষা দেওয়ার সুযোগ পাবেন। প্রতিবার কিছু বা
                    সবগুলো প্রশ্নই ভিন্ন থাকতে পারে।
                  </h1>
                </div>
              </div>
            </div>
          )}

          {/* start section */}

          {quizPage === "quiz" && (
            <div>
              <div className="flex justify-between pt-10">
                <h1 className="text-[#1D5276] text-[18px] md:text-[32px] font-[600] md:font-[600] leading-[28px] md:leading-[40px] text-center ">
                  {quiz?.title}
                </h1>
                {/* <button
                  // onClick={() => setQuizPage("result")}
                  type="button"
                  className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
                >
                  জমা দিন
                  <img src={arrowRight} alt="icon" />
                </button> */}
              </div>
              <div className="flex w-full justify-center flex-col md:flex-row mx-auto gap-4 pt-8">
                <div className="w-[362px] h-[376px] relative rounded-[10px] bg-[#ADD2EB] flex items-center justify-center">
                  <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                    <svg className="absolute w-[290px] h-[290px]">
                      <circle
                        className="text-[#9EC9E7]"
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="transparent"
                        r="120"
                        cx="145"
                        cy="145"
                      />
                      <circle
                        className="text-[#5BA5D7]"
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="transparent"
                        r="120"
                        cx="145"
                        cy="145"
                        strokeDasharray="753.98"
                        strokeDashoffset={calculateStrokeOffset()}
                        style={{
                          transition: "stroke-dashoffset 1s linear",
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-4xl font-bold">
                      <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[500] leading-[22px] text-center">
                        টাইম বাকি আছে
                      </h1>
                      <h1 className="text-[#20AC90] text-[40px] font-[700] leading-[22px] text-center">
                        {formattedTime}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="w-[809px] bg-white rounded-[10px] p-4">
                  {/* <div className="border-b border-[#ACB0B9] pb-2">
                  <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[500] md:font-[500] leading-[22px] md:leading-[22px] text-start">
                    <span className="text-black">Qsn:</span> To hold row and
                    column titles in place so that they do not scroll when you
                    scroll a worksheet click the
                  </h1>
                </div> */}
                  {/* <div className="flex flex-col gap-2 py-8">
                  <div className="flex w-1/2 gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center">
                    <div className="relative flex items-center">
                      <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="huey"
                        id="huey"
                        name="drone"
                        onChange={onValueChange}
                      />
                      <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-1 description-1"
                        role="graphics-symbol"
                      >
                        <circle cx="8" cy="8" r="4" />
                      </svg>
                    </div>
                    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
                      Unfreeze panes command on the window menu
                    </h1>
                  </div>
                  <div className="flex w-1/2 gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center">
                    <div className="relative flex items-center">
                      <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="huey"
                        id="huey"
                        name="drone"
                        onChange={onValueChange}
                      />
                      <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-1 description-1"
                        role="graphics-symbol"
                      >
                        <circle cx="8" cy="8" r="4" />
                      </svg>
                    </div>
                    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
                      Hold titles command on the edit menu
                    </h1>
                  </div>
                  <div className="flex w-1/2 gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center">
                    <div className="relative flex items-center">
                      <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="huey"
                        id="huey"
                        name="drone"
                        onChange={onValueChange}
                      />
                      <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-1 description-1"
                        role="graphics-symbol"
                      >
                        <circle cx="8" cy="8" r="4" />
                      </svg>
                    </div>
                    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
                      Split command on the window menu
                    </h1>
                  </div>
                  <div className="flex w-1/2 gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center">
                    <div className="relative flex items-center">
                      <input
                        className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                        type="radio"
                        value="huey"
                        id="huey"
                        name="drone"
                        onChange={onValueChange}
                      />
                      <svg
                        className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="title-1 description-1"
                        role="graphics-symbol"
                      >
                        <circle cx="8" cy="8" r="4" />
                      </svg>
                    </div>
                    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
                      Unfreeze panes command on the window menu
                    </h1>
                  </div>
                </div> */}
                  <>
                    {renderQuestion(
                      quiz?.questions?.[currentQuestion],
                      currentQuestion,
                      handleOptionChange,
                      selectedOptions
                    )}
                    {renderNavigation(
                      currentQuestion,
                      loading,
                      handleNextQuestion,
                      quiz,
                      onSubmit
                    )}
                  </>
                  {/* <div className="flex flex-row justify-between p-2 items-center rounded-[10px] border border-[#F5F5F5]">
                  <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
                    <span className="font-semibold">1</span> of{" "}
                    <span className="font-semibold">30</span> Questions
                  </h1>
                  <button
                    type="button"
                    className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
                  >
                    Next Question
                    <img src={arrowRight} alt="icon" />
                  </button>
                </div> */}
                </div>
              </div>
            </div>
          )}

          {/* check mark */}

          {timer === "00:00" && (
            <div>
              <div className="flex justify-between pt-8 mb-4">
                <h1 className="text-[#1D5276] text-[18px] md:text-[32px] font-[600] md:font-[600] leading-[28px] md:leading-[40px] text-center ">
                  বেসিক কম্পিউটার এন্ড গ্রাফিক ডিজাইন কুইজ
                </h1>
                <button
                  onClick={() => setQuizPage("start")}
                  type="button"
                  className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
                >
                  জমা দিন
                  <img src={arrowRight} alt="icon" />
                </button>
              </div>
              <div className="flex w-full justify-center flex-col md:flex-row mx-auto gap-4 pt-8">
                <div className="w-[362px] h-[376px] relative rounded-[10px] bg-[#ADD2EB] flex items-center justify-center">
                  <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                    <svg className="absolute w-[290px] h-[290px]">
                      <circle
                        className="text-[#5BA5D7]"
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="transparent"
                        r="120"
                        cx="145"
                        cy="145"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-4xl font-bold">
                      <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[500] leading-[22px] text-center">
                        টাইম বাকি আছে
                      </h1>
                      <h1 className="text-[#1D5276] text-[25px] font-[700] leading-[22px]  text-center">
                        টাইম শেষ <br /> হয়ে গেছে
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="w-[809px] bg-white rounded-[10px] p-4">
                  <div className="border-b border-[#ACB0B9] pb-2">
                    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-center ">
                      <span className="text-[#1E567B] font-semibold">
                        অভিনন্দন!{" "}
                      </span>{" "}
                      আপনি সফলভাবে SEO Seminar কুইজ সম্পন্ন করেছেন!
                    </h1>
                  </div>
                  <div className="flex flex-col gap-2 py-8">
                    <div className="ps-5">
                      <ul className="list-disc  text-[#2E3138]">
                        <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                          অন্যান্যদের ফলাফল এবং আপনার র‌্যাংকিং দেখতে উপরে
                          ডানপাশের সবুজ আইকনের পাশের সাদা-কালো আইকনটিতে ক্লিক
                          করুন। আপনার কুইজ ফলাফল দেখতে উপরে ডান পাশে ‘CHECK
                          RESULTS’ এ ক্লিক করুন। এরপর একদম নিচের দিকে ফলাফল
                          দেখতে পাবেন।
                        </li>
                        <li lassName=" text-[18px] md:text-[14px] font-[400] md:font-[400] leading-[22px] md:leading-[22px]">
                          আপনার কুইজ ফলাফল দেখতে উপরে ডান পাশে ‘CHECK RESULTS’ এ
                          ক্লিক করুন। এরপর একদম নিচের দিকে ফলাফল দেখতে পাবেন।
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Wrapper>
      </div>
    </>
  );
};

export default Quiz;

const renderQuestion = (
  question,
  index,
  handleOptionChange,
  selectedOptions
) => (
  <div key={index}>
    <div className=" mt-5">
      <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[500] md:font-[500] leading-[22px] md:leading-[22px] text-start border-b border-[#ACB0B9] pb-4">
        <span className="text-black">Qsn {index + 1}: </span>
        {question?.question}
      </h1>
    </div>
    <div className="flex flex-col gap-2 pb-8 pt-5">
      {question?.options ? (
        question?.options.map((option, i) => (
          <label
            key={i}
            htmlFor={`option_${i + 1}`}
            className="flex gap-1 bg-[#F5F5F5] p-2 rounded-[5px] items-center cursor-pointer"
          >
            <input
              className="w-4 h-4 cursor-pointer border-slate-500 border-2 rounded-full"
              type="radio"
              value={i + 1} // Change to index value
              id={`option_${i + 1}`}
              name={`quiz_option_${index}`}
              checked={selectedOptions[index] === (i + 1).toString()} // Compare with index
              onChange={handleOptionChange}
            />
            <span className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
              {option}
            </span>
          </label>
        ))
      ) : (
        <h1>No Option Found!</h1>
      )}
    </div>
  </div>
);

const renderNavigation = (
  currentQuestion,
  loading,
  handleNextQuestion,
  quiz,
  onSubmit
) => (
  <div className="flex flex-row justify-between p-2 items-center rounded-[10px] border border-[#F5F5F5]">
    <h1 className="text-[#2E3138] text-[18px] md:text-[16px] font-[400] md:font-[400] leading-[22px] md:leading-[22px] text-start">
      <span className="font-semibold">{currentQuestion + 1}</span> of{" "}
      <span className="font-semibold">{quiz?.questions?.length}</span> Questions
    </h1>
    {currentQuestion < quiz?.questions?.length - 1 ? (
      <button
        type="button"
        className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
        onClick={handleNextQuestion}
      >
        Next Question
        <img src={arrowRight} alt="icon" />
      </button>
    ) : (
      <button
        onClick={onSubmit}
        type="button"
        className="bg-[#20AC90] font-Baloo py-[10px] px-5  gap-2 rounded-[5px] text-[#F1F1F1] flex items-center shrink-0"
      >
        {loading ? (
          <Loading />
        ) : (
          <p className="flex justify-center items-center gap-2">
            Submit
            <img src={arrowRight} alt="icon" />
          </p>
        )}
      </button>
    )}
  </div>
);
