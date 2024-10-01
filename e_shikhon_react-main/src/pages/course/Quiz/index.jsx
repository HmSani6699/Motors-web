import React, { useContext, useEffect, useState } from "react";
import { post, put } from "../../../api/axious";
import { AuthContext } from "../../../layout/MainLayout";
import CheckResult from "./CheckResult";
import StartQuiz from "./StartQuiz";
import PlayQuiz from "./PlayQuiz";
import QuizResult from "./QuizResult";
import toast from "react-hot-toast";

const QuizCard = ({
  quiz,
  courseData,
  setCourseData,
  setQuizProgress,
  curriculumIndex,
  unitIndex,
  type,
}) => {
  const { user } = useContext(AuthContext);
  const condition = quiz?.result?.[0]?.isComplete;
  console.log(quiz);
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quiz?.questions?.length).fill(null)
  );
  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [quizPage, setQuizPage] = useState("startQuiz");
  const [timer, setTimer] = useState(120);
  const [timerActive, setTimerActive] = useState(false);

  const quizResult = quiz?.result?.[0];
  const quizResultId = quiz?.result?.[0]?.id;

  useEffect(() => {
    if (condition) {
      setQuizPage("result");
    } else {
      setQuizPage("startQuiz");
    }
  }, [condition, curriculumIndex]);

  const clearAll = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setProgress(0);
    setTimerActive(true);
    if (quiz?.quiz_duration) {
      setTimer(parseInt(quiz?.quiz_duration) * 60);
    }
  };

  useEffect(() => {
    if (quiz?.result?.[0]?.isComplete !== "true") {
      setTimer(parseInt(quiz?.quiz_duration) * 60);
      setTimerActive(true);
      setCurrentQuestion(0);
      setProgress(0);
      setSelectedOptions("");
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

    const quiz_payload = {
      quiz_id: quiz.id,
      course_id: courseData?.id,
      user_id: user?.id,
      quiz_mark: parseFloat(correctAnswers) * parseFloat(quiz?.marks || 0),
      isComplete: true,
      status: "complete",
      total_ques: quiz?.questions?.length,
      answers: selectedOptions,
    };

    const payload = {
      quiz_progress: { quizId: quiz.id },
    };

    setLoading(true);
    try {
      const res = await post(`/api/quiz_result/add`, quiz_payload);
      console.log("quiz res", res);

      if (res?.success) {
        if (type === "video") {
          setCourseData((previous) => {
            const newCourseData = { ...previous };
            if (
              newCourseData.courseCurriculum?.[curriculumIndex]?.units?.[
                unitIndex
              ]?.quiz
            ) {
              newCourseData.courseCurriculum[curriculumIndex].units[
                unitIndex
              ].quiz = {
                ...newCourseData.courseCurriculum[curriculumIndex].units[
                  unitIndex
                ].quiz,
                result: [res.data],
              };
            }
            return newCourseData;
          });
        } else {
          setCourseData((previous) => {
            const newCourseData = { ...previous };
            if (newCourseData.courseCurriculum?.[curriculumIndex]?.quiz) {
              newCourseData.courseCurriculum[curriculumIndex].quiz = {
                ...newCourseData.courseCurriculum[curriculumIndex].quiz,
                result: [res.data],
              };
            }
            return newCourseData;
          });
        }

        clearAll();
        setQuizPage("result");
      }
      if (type === "video") {
        const resProgress = await put(
          `/api/course/enroll/progress/update/${courseData?.progress?.[0]?.id}`,
          payload
        );
        console.log("resProgress", resProgress);
        const json_data = JSON.parse(resProgress?.data?.quiz_progress);
        setQuizProgress(json_data);
      }
    } catch (error) {
      console.log("Failed/", error?.response);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const updateQuizResult = async () => {
    const payload = {
      isComplete: false,
    };

    setUpdateLoading(true);
    try {
      const res = await put(`/api/quiz_result/update/${quizResultId}`, payload);
      console.log(res, "update quiz mark  response======>");
      if (res?.success) {
        if (type === "video") {
          setCourseData((previous) => {
            const newCourseData = { ...previous };
            if (
              newCourseData.courseCurriculum?.[curriculumIndex]?.units?.[
                unitIndex
              ]?.quiz
            ) {
              newCourseData.courseCurriculum[curriculumIndex].units[
                unitIndex
              ].quiz = {
                ...newCourseData.courseCurriculum[curriculumIndex].units[
                  unitIndex
                ].quiz,
                result: [res.data],
              };
            }
            return newCourseData;
          });
        } else {
          setCourseData((previous) => {
            const newCourseData = { ...previous };
            if (newCourseData.courseCurriculum?.[curriculumIndex]?.quiz) {
              newCourseData.courseCurriculum[curriculumIndex].quiz = {
                ...newCourseData.courseCurriculum[curriculumIndex].quiz,
                result: [res.data],
              };
            }
            return newCourseData;
          });
        }
        setQuizPage("startQuiz");
      }
    } catch (error) {
      console.log("Failed to Post/", error?.response?.data);
      toast.error(error?.response?.data?.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion) {
      setProgress(currentQuestion);
    }
  }, [currentQuestion]);

  return (
    <div className="mt-5">
      {quizPage === "startQuiz" && (
        <StartQuiz
          quiz={quiz}
          quizResult={quizResult}
          courseData={courseData}
          setQuizPage={setQuizPage}
        />
      )}
      {quizPage === "quiz" && (
        <PlayQuiz
          quiz={quiz}
          timer={timer}
          quizResult={quizResult}
          progress={progress}
          loading={loading}
          onSubmit={onSubmit}
          handleNextQuestion={handleNextQuestion}
          courseData={courseData}
          currentQuestion={currentQuestion}
          selectedOptions={selectedOptions}
          handleOptionChange={handleOptionChange}
        />
      )}
      {quizPage === "result" && (
        <QuizResult
          quiz={quiz}
          curriculumIndex={curriculumIndex}
          quizResult={quizResult}
          courseData={courseData}
          setQuizPage={setQuizPage}
          updateQuizResult={updateQuizResult}
        />
      )}
      {quizPage === "checkResult" && (
        <CheckResult
          quiz={quiz}
          courseData={courseData}
          quizResult={quizResult}
          setQuizPage={setQuizPage}
        />
      )}
    </div>
  );
};

export default QuizCard;
