import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CourseOverview from "../../../../../components/Course/CourseOverview";
import UploadVideo from "../../../../../components/Course/UploadVideo";
import CorseCurriculum from "../../../../../components/Course/CorseCurriculum";
import FAQ from "../../../../../components/Course/FAQ.jsx";
import Instructor from "../../../../../components/Course/Instructor";
import SubmitProcess from "../../../../../components/Course/SubmitProcess";
import leftArrowIcon from "../../../../../assets/svg/arrow-sm-left.svg";
import tickMark from "../../../../../assets/svg/white_tickMark_bg_green.svg";
import { useNavigate } from "react-router-dom";
import {
  scrollToTop,
  transformCurriculum,
  transformData,
  transformDataNew,
} from "../../../../../api/helper.js";
import { AuthContext } from "../../../../../layout/MainLayout.jsx";
const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CourseViewModal = ({
  courseViewData,
  courseViewModal,
  setCourseViewModal,
}) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // ----------------------------------------------------------------
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [courseType, setCourseType] = useState("");
  const [level, setLevel] = useState("");
  const [starDate, setStarDate] = useState("");
  const [duration, setDuration] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [whatWillBeTaught, setWhatWillBeTaught] = useState([""]);

  const [courseDurationParameter, setCourseDurationParameter] = useState("");
  const [maximumStudents, setMaximumStudents] = useState("");

  const [paid, setPaid] = useState(false);
  const [shortTitle, setShortTitle] = useState("");

  const [isFirstSectionFree, setIsFirstSectionFree] = useState(false);
  const [isAutoEvaluationEnabled, setIsAutoEvaluationEnabled] = useState(false);
  const [isUnitContentVisible, setIsUnitContentVisible] = useState(false);
  const [isUnitCompletionLocked, setIsUnitCompletionLocked] = useState(false);
  const [isCourseButtonHidden, setIsCourseButtonHidden] = useState(false);
  const [isCourseProgressDisplayed, setIsCourseProgressDisplayed] =
    useState(false);
  const [isTimeBasedProgressEnabled, setIsTimeBasedProgressEnabled] =
    useState(false);
  const [isReviewsEnabled, setIsReviewsEnabled] = useState(false);
  const [isBatchEnrollmentForced, setIsBatchEnrollmentForced] = useState(false);
  const [isSectionDripFeed, setIsSectionDripFeed] = useState(false);

  const [regularPrice, setRegularPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [certificate, setCertificate] = useState("");
  const [badge, setBadge] = useState("");
  const [support, setSupport] = useState("");

  const [badgePercentage, setBadgePercentage] = useState("");
  const [certificatePassingPercentage, setCertificatePassingPercentage] =
    useState("");
  const [badgeTitle, setBadgeTitle] = useState("");
  const [certificateTemplate, setCertificateTemplate] = useState("1");
  const [excellenceBadgeFile, setExcellenceBadgeFile] = useState(null);
  const [prerequisiteCourse, setPrerequisiteCourse] = useState("1");
  const [courseRetakes, setCourseRetakes] = useState("");
  const [dripFeedDurationStatic, setDripFeedDurationStatic] = useState("");
  const [
    dripDurationParameterCourseForum,
    setDripDurationParameterCourseForum,
  ] = useState("");
  const [courseForum, setCourseForum] = useState("1");
  const [courseGroup, setCourseGroup] = useState("");
  const [courseSpecificInstructions, setCourseSpecificInstructions] =
    useState("");
  const [courseCompletionMessage, setCourseCompletionMessage] = useState("");

  const [videoCheckbox, setVideoCheckbox] = useState(null);
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [promoVideoLink, setPromoVideoLink] = useState("");
  const [image, setImage] = useState("");

  const [completionCertificate, setCompletionCertificate] = useState(false);
  const [startingTimeEnabled, setStartingTimeEnabled] = useState(false);
  const [isDripFeedEnabled, setIsDripFeedEnabled] = useState(false);
  const [hideExpiredBatches, setHideExpiredBatches] = useState(false);
  const [dripDurationEnabled, setDripDurationEnabled] = useState(false);

  const [course, setCourse] = useState(null);

  const [faqQuestionsAndAnswer, setFAQQuestionsAndAnswer] = useState([
    {
      title: "",
      answer: "",
    },
  ]);

  const [instructor, setInstructor] = useState([
    {
      teacherName: "",
      teacherCategory: "",
    },
  ]);

  const [about_course, setAbout_course] = useState([
    {
      title: "",
      answer: "",
    },
  ]);

  useEffect(() => {
    if (courseViewData) {
      setCategory({
        categoryName: courseViewData.courseCategory,
        id: courseViewData.courseCategoryId,
      });
      setTitle(courseViewData.courseTitle);
      setCourseType(courseViewData.courseType);
      setLanguage(courseViewData.courseLanguage);
      setLevel(courseViewData.courseLevel);
      setStarDate(courseViewData.courseStarDate);
      setDuration(courseViewData.courseDuration);
      setCourseDurationParameter(courseViewData.courseDurationParameter);
      setMaximumStudents(courseViewData.maximumStudents);
      setCourseDescription(courseViewData.courseDescription);
      setAbout_course(courseViewData.aboutCourse);
      setWhatWillBeTaught(courseViewData.whatWillBeTaught);
      setRegularPrice(courseViewData.regularPrice);
      setSellPrice(courseViewData.sellPrice);
      setShortTitle(courseViewData.shortTitle);
      setIsFirstSectionFree(courseViewData.firstSectionFree === "true");
      setIsAutoEvaluationEnabled(courseViewData.autoEvaluation === "true");
      setIsUnitContentVisible(
        courseViewData.showUnitContentCurriculum === "true"
      );
      setIsUnitCompletionLocked(courseViewData.unitCompletionLock === "true");
      setIsCourseButtonHidden(
        courseViewData.hideCourseButtonAfterSubscription === "true"
      );
      setIsCourseProgressDisplayed(
        courseViewData.displayCourseProgressOnCourseHome === "true"
      );
      setIsTimeBasedProgressEnabled(
        courseViewData.timeBasedCourseProgress === "true"
      );
      setIsReviewsEnabled(
        courseViewData.postCourseReviewsFromCourseHome === "true"
      );
      setIsBatchEnrollmentForced(
        courseViewData.ForceBatchEnrollment === "true"
      );
      setIsSectionDripFeed(courseViewData.SectionDripFeed === "true");
      setBadgePercentage(courseViewData.badgePercentage);
      setBadgeTitle(courseViewData.badgeTitle);
      setExcellenceBadgeFile(courseViewData.excellenceBadge);
      setPrerequisiteCourse(courseViewData.prerequisiteCourse);
      setDripFeedDurationStatic(courseViewData.dripFeedDurationStatic);
      setCourseForum(courseViewData.courseForum);
      setCertificatePassingPercentage(
        courseViewData.certificatePassingPercentage
      );
      setCertificateTemplate(courseViewData.certificateTemplate);
      setCompletionCertificate(courseViewData.completionCertificate === "true");
      setCourseRetakes(courseViewData.courseRetakes);
      setDripDurationParameterCourseForum(courseViewData.dripDurationParameter);
      setDripDurationEnabled(
        courseViewData.dripDurationUnitDuration === "true"
      );
      setHideExpiredBatches(courseViewData.hideExpiredBatches === "true");
      setCourseGroup(courseViewData.courseGroup);
      setCourseSpecificInstructions(courseViewData.courseSpecificInstructions);
      setCourseCompletionMessage(courseViewData.courseCompletionMessage);
      setCourseThumbnail(courseViewData.thumbLinePicPath);
      setPromoVideoLink(courseViewData.videoLink);
      setVideoCheckbox(courseViewData.videoUpload);
      setInstructor(courseViewData.instructor);
      setFAQQuestionsAndAnswer(courseViewData.faqQuestions);
      if (condition) {
        setCourse(transformData(courseViewData.courseCurriculum));
      } else {
        setCourse(transformDataNew(courseViewData.courseCurriculums));
      }
      setImage(`${BASE_URL}${courseViewData?.thumbLinePicPath?.path}`);
    }
  }, [courseViewData]);

  console.log(instructor, "instructor ==========>");

  const payload = {
    courseCategoryId: category.id,
    courseCategory: category.categoryName,
    courseTitle: title,
    courseDescription: courseDescription,
    whatWillBeTaught: whatWillBeTaught,
    courseType: courseType,
    courseLanguage: language,
    courseLevel: level,
    courseStarDate: starDate,
    courseDuration: duration,
    courseDurationParameter: courseDurationParameter,
    maximumStudents: maximumStudents,

    regularPrice: regularPrice,
    sellPrice: sellPrice,
    aboutCourse: about_course,

    shortTitle: shortTitle,

    freeCourse: paid,
    certificate: certificate,
    badge: badge,
    support: support,
    firstSectionFree: isFirstSectionFree,
    autoEvaluation: isAutoEvaluationEnabled,
    showUnitContentCurriculum: isUnitContentVisible,
    unitCompletionLock: isUnitCompletionLocked,
    hideCourseButtonAfterSubscription: isCourseButtonHidden,
    displayCourseProgressOnCourseHome: isCourseProgressDisplayed,
    timeBasedCourseProgress: isTimeBasedProgressEnabled,
    postCourseReviewsFromCourseHome: isReviewsEnabled,
    ForceBatchEnrollment: isBatchEnrollmentForced,
    SectionDripFeed: isSectionDripFeed,

    badgePercentage: badgePercentage,
    badgeTitle: badgeTitle,
    // excellenceBadge: excellenceBadgeFile,
    prerequisiteCourse: prerequisiteCourse,
    dripFeedDurationStatic: dripFeedDurationStatic,
    courseStartingTimeDripFeedOrigin: dripFeedDurationStatic,
    dripFeed: isDripFeedEnabled,
    courseForum: courseForum,
    certificatePassingPercentage: certificatePassingPercentage,
    certificateTemplate: certificateTemplate,
    completionCertificate: completionCertificate,
    courseRetakes: courseRetakes,
    dripDurationParameter: dripDurationParameterCourseForum,
    dripDurationUnitDuration: dripDurationEnabled,
    hideExpiredBatches: hideExpiredBatches,
    courseGroup: courseGroup,
    courseSpecificInstructions: courseSpecificInstructions,
    courseCompletionMessage: courseCompletionMessage,
    thumbLinePicPath: courseThumbnail,
    videoUpload: videoCheckbox,
    courseCurriculum: transformCurriculum(course),

    instructor: instructor,

    faqQuestions: faqQuestionsAndAnswer,
    courseCreator: user?.id,

    totalEnrolledStudents: 30,
    review: [],
    topStudent: [],
    successfullStudent: [],
  };

  const handleCreateCourse = async () => {
    // console.log(JSON.stringify(payload), "payload======");
    setLoading(true);
    try {
      const res = await put(
        `api/courses/update/${courseViewData?.id}`,
        payload
      );
      // console.log(res);
      if (res?.success) {
        toast.success("Course Update Successfully");
        setIsUpdate(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to post");
      console.log("Failed to post/", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const formArray = [1, 2, 3, 4, 5, 6];
  const formArray_new = [
    { id: 1, title: "Course Overview" },
    { id: 2, title: "Upload Video" },
    { id: 3, title: "Course Curriculum" },
    { id: 5, title: "Instructor" },
    { id: 4, title: "FAQ" },
    { id: 6, title: "Submit Process" },
  ];

  const [formNo, setFormNo] = useState(formArray[0]);
  const [page, setPage] = useState("Course Overview");
  useEffect(() => {
    scrollToTop();
  }, [formNo]);

  const next = () => {
    if (formNo === 1) {
      setFormNo(formNo + 1);
    } else if (formNo === 2) {
      setFormNo(formNo + 1);
    } else if (formNo === 3) {
      setFormNo(formNo + 1);
    } else if (formNo === 4) {
      setFormNo(formNo + 1);
    } else if (formNo === 5) {
      setFormNo(formNo + 1);
    } else if (formNo === 6) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fill up all input field");
    }
  };
  const pre = () => {
    setPage(formArray_new[formNo - 2].title);
    setFormNo(formNo - 1);
  };
  const btnHide = true;
  return (
    <>
      <div className="p justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto  my-6 mx-auto ">
          <div className="flex justify-center items-center absolute top-5 right-10 ">
            <span
              onClick={() => setCourseViewModal(!courseViewModal)}
              className="text-[25px] cursor-pointer z-50 hover:bg-slate-300/50 px-1 py-[6px] rounded-md leading-3 text-black bg-slate-200 shadow-xl"
            >
              &times;
            </span>
          </div>
          <div className="border-0 p-5 rounded-[10px] shadow-lg relative flex flex-col bg-white outline-none w-[1168px] h-[570px] focus:outline-none overflow-auto">
            <div className="flex justify-between   ">
              <div className="flex items-center gap-2">
                {/* <img src={batch_icon} alt="" /> */}
                <h1 className="text-[#1D5276] text-[20px] font-[700] leading-[28px] ">
                  Course
                </h1>
              </div>

              {/* <button
                className="flex items-center gap-1 text-[#D42428] text-[16px] font-[400] "
                onClick={() => setCourseViewModal(!courseViewModal)}
              >
                Close
              </button> */}
            </div>

            <div className="w-full ">
              <div className="whitespace-nowrap px-14 pb-14 pt-5 bg-white rounded-[10px] border border-[#E3E5E8]">
                <div className="flex justify-center items-center">
                  {formArray_new.map((v, i) => (
                    <>
                      <div
                        key={i}
                        onClick={() => {
                          setFormNo(i + 1);
                          setPage(v.title);
                        }}
                        className={`w-[34px] my-3 text-[#2E3138] rounded-full relative text-sm ${i <= formNo - 1
                            ? "bg-[#20AC90]"
                            : "p-3 border-4 border-[#20AC90]"
                          } h-[34px] flex justify-center items-center`}
                      >
                        {i <= formNo - 1 ? <img src={tickMark} alt="" /> : ""}
                        <span
                          key={i}
                          className={`absolute -bottom-10 text font-[500] ${i <= formNo - 1
                              ? "text-[#2E3138]"
                              : "text-[#2E3138]"
                            }`}
                        >
                          {v.title}
                        </span>
                      </div>

                      {i !== formArray_new.length - 1 && (
                        <div
                          key={i}
                          className={`flex-1 h-[2px] ${i + 1 <= formNo - 1
                              ? "bg-[#20AC90]"
                              : "bg-[#D9D9D9]"
                            }`}
                        ></div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              {page === "Course Overview" ? (
                <CourseOverview
                  next={next}
                  pre={pre}
                  setPage={setPage}
                  category={category}
                  setCategory={setCategory}
                  courseType={courseType}
                  setCourseType={setCourseType}
                  title={title}
                  setTitle={setTitle}
                  language={language}
                  setLanguage={setLanguage}
                  level={level}
                  setLevel={setLevel}
                  starDate={starDate}
                  setShortTitle={setShortTitle}
                  shortTitle={shortTitle}
                  setStarDate={setStarDate}
                  duration={duration}
                  setDuration={setDuration}
                  whatWillBeTaught={whatWillBeTaught}
                  setWhatWillBeTaught={setWhatWillBeTaught}
                  courseDurationParameter={courseDurationParameter}
                  setCourseDurationParameter={setCourseDurationParameter}
                  maximumStudents={maximumStudents}
                  setMaximumStudents={setMaximumStudents}
                  aboutTitle={aboutTitle}
                  setAboutTitle={setAboutTitle}
                  courseDescription={courseDescription}
                  setCourseDescription={setCourseDescription}
                  paid={paid}
                  setPaid={setPaid}
                  regularPrice={regularPrice}
                  setRegularPrice={setRegularPrice}
                  sellPrice={sellPrice}
                  setSellPrice={setSellPrice}
                  certificate={certificate}
                  setCertificate={setCertificate}
                  badge={badge}
                  setBadge={setBadge}
                  support={support}
                  setSupport={setSupport}
                  about_course={about_course}
                  setAbout_course={setAbout_course}
                  completionCertificate={completionCertificate}
                  setCompletionCertificate={setCompletionCertificate}
                  isFirstSectionFree={isFirstSectionFree}
                  setIsFirstSectionFree={setIsFirstSectionFree}
                  isAutoEvaluationEnabled={isAutoEvaluationEnabled}
                  setIsAutoEvaluationEnabled={setIsAutoEvaluationEnabled}
                  isUnitContentVisible={isUnitContentVisible}
                  setIsUnitContentVisible={setIsUnitContentVisible}
                  isUnitCompletionLocked={isUnitCompletionLocked}
                  setIsUnitCompletionLocked={setIsUnitCompletionLocked}
                  isCourseButtonHidden={isCourseButtonHidden}
                  setIsCourseButtonHidden={setIsCourseButtonHidden}
                  isCourseProgressDisplayed={isCourseProgressDisplayed}
                  setIsCourseProgressDisplayed={setIsCourseProgressDisplayed}
                  isTimeBasedProgressEnabled={isTimeBasedProgressEnabled}
                  setIsTimeBasedProgressEnabled={setIsTimeBasedProgressEnabled}
                  isReviewsEnabled={isReviewsEnabled}
                  setIsReviewsEnabled={setIsReviewsEnabled}
                  isBatchEnrollmentForced={isBatchEnrollmentForced}
                  setIsBatchEnrollmentForced={setIsBatchEnrollmentForced}
                  isSectionDripFeed={isSectionDripFeed}
                  setIsSectionDripFeed={setIsSectionDripFeed}
                  btnHide={btnHide}
                />
              ) : page === "Upload Video" ? (
                <UploadVideo
                  next={next}
                  setPage={setPage}
                  courseThumbnail={courseThumbnail}
                  setCourseThumbnail={setCourseThumbnail}
                  videoCheckbox={videoCheckbox}
                  setVideoCheckbox={setVideoCheckbox}
                  promoVideoLink={promoVideoLink}
                  setPromoVideoLink={setPromoVideoLink}
                  badgePercentage={badgePercentage}
                  setBadgePercentage={setBadgePercentage}
                  certificatePassingPercentage={certificatePassingPercentage}
                  setCertificatePassingPercentage={
                    setCertificatePassingPercentage
                  }
                  badgeTitle={badgeTitle}
                  setBadgeTitle={setBadgeTitle}
                  setCertificateTemplate={setCertificateTemplate}
                  setExcellenceBadgeFile={setExcellenceBadgeFile}
                  setPrerequisiteCourse={setPrerequisiteCourse}
                  courseRetakes={courseRetakes}
                  setCourseRetakes={setCourseRetakes}
                  dripFeedDurationStatic={dripFeedDurationStatic}
                  setDripFeedDurationStatic={setDripFeedDurationStatic}
                  dripDurationParameterCourseForum={
                    dripDurationParameterCourseForum
                  }
                  setDripDurationParameterCourseForum={
                    setDripDurationParameterCourseForum
                  }
                  setCourseForum={setCourseForum}
                  courseGroup={courseGroup}
                  setCourseGroup={setCourseGroup}
                  courseSpecificInstructions={courseSpecificInstructions}
                  setCourseSpecificInstructions={setCourseSpecificInstructions}
                  courseCompletionMessage={courseCompletionMessage}
                  setCourseCompletionMessage={setCourseCompletionMessage}
                  startingTimeEnabled={startingTimeEnabled}
                  setStartingTimeEnabled={setStartingTimeEnabled}
                  isDripFeedEnabled={isDripFeedEnabled}
                  setIsDripFeedEnabled={setIsDripFeedEnabled}
                  hideExpiredBatches={hideExpiredBatches}
                  setHideExpiredBatches={setHideExpiredBatches}
                  dripDurationEnabled={dripDurationEnabled}
                  setDripDurationEnabled={setDripDurationEnabled}
                  image={image}
                  setImage={setImage}
                  btnHide={btnHide}
                />
              ) : page === "Course Curriculum" ? (
                <CorseCurriculum
                  pre={pre}
                  setCourse={setCourse}
                  setPage={setPage}
                  next={next}
                  course={course}
                  btnHide={btnHide}
                />
              ) : page === "Instructor" ? (
                <Instructor
                  next={next}
                  pre={pre}
                  setPage={setPage}
                  instructor={instructor}
                  setInstructor={setInstructor}
                  btnHide={btnHide}
                />
              ) : page === "FAQ" ? (
                <FAQ
                  next={next}
                  pre={pre}
                  setPage={setPage}
                  faqQuestionsAndAnswer={faqQuestionsAndAnswer}
                  setFAQQuestionsAndAnswer={setFAQQuestionsAndAnswer}
                  btnHide={btnHide}
                />
              ) : page === "Submit Process" ? (
                <SubmitProcess
                  isUpdate={true}
                  next={next}
                  pre={pre}
                  setPage={setPage}
                  loading={loading}
                  handleCreateCourse={handleCreateCourse}
                  btnHide={btnHide}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed inset-0 z-40 bg-[#08324FDB]"></div>
    </>
  );
};

export default CourseViewModal;
