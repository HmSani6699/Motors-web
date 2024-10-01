import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CourseOverview from "./CourseOverview";
import UploadVideo from "./UploadVideo";
import CorseCurriculum from "./CorseCurriculum";
import FAQ from "./FAQ";
import Instructor from "./Instructor";
import SubmitProcess from "./SubmitProcess";
import leftArrowIcon from "../../assets/svg/arrow-sm-left.svg";
import tickMark from "../../assets/svg/white_tickMark_bg_green.svg";
import { post } from "../../api/axious";
import { useNavigate } from "react-router-dom";
import {
  createVideoCourse,
  scrollToTop,
  transformCurriculum,
  transformCurriculumNew,
} from "../../api/helper.js";
import { AuthContext } from "../../layout/MainLayout.jsx";
import { URL } from "../../constants/Url";
const API_NAME = import.meta.env.VITE_API_NAME;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const condition = API_NAME === "live";

const AllCoursePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const [dummyData, setDummyData] = useState(createVideoCourse || {});

  // ----------------------------------------------------------------
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [courseType, setCourseType] = useState("");
  const [language, setLanguage] = useState("");
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

  const [certificateId, setCertificateId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [certificateName, setCertificateName] = useState("");
  const [courseName, setCourseName] = useState("");

  const [excellenceBadgeFile, setExcellenceBadgeFile] = useState(null);
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

  const [singleData, setSingleData] = useState(createVideoCourse || {});
  // console.log(createVideoCourse);

  // const reset = () => {
  //   setCategory("");
  //   setTitle("");
  //   setCourseType("");
  //   setLanguage("");
  //   setLevel("");
  //   setStarDate("");
  //   setDuration("");
  //   setCapacity("");
  //   setClassTime("");
  //   setClassDuration("");
  //   setClassDays("");
  //   setCourseDescription("");
  //   setAboutTitle("");
  //   setPaid("");
  //   setRegularPrice("");
  //   setAnswer("");
  //   setSellPrice("");
  //   setAssignment("");
  //   setCertificate("");
  //   setBadge("");
  //   setSupport("");
  //   setInstructorMessage("");
  //   setVideoCheckbox(null);
  //   setRequestCourse("");
  //   setDripContent("");
  //   setCourseThumbnail("");
  //   setCurriculumTitle("");
  //   setCurriculumTopic("");
  //   setQuiz("");
  //   setCurriculumAnswer("");
  //   setQuestionCheckbox(null);
  //   setQuestions("");
  //   setTeacherName("");
  //   setTeacherCategory("");
  //   setIntroduction("");
  //   setGitHub("");
  //   setGitHubLink("");
  //   setBehance("");
  //   setCourse(null);
  // };

  // console.log(singleData?.thumbLinePicPath?.path, "=========== BASE_URL>");

  useEffect(() => {
    if (singleData) {
      setCategory({
        categoryName: singleData.courseCategory,
        id: singleData.courseCategoryId,
      });
      setTitle(singleData.courseTitle);
      setCourseType(singleData.courseType);
      setLanguage(singleData.courseLanguage);
      setLevel(singleData.courseLevel);
      setStarDate(singleData.courseStarDate);
      setDuration(singleData.courseDuration);
      setCourseDurationParameter(singleData.courseDurationParameter);
      setMaximumStudents(singleData.maximumStudents);
      setCourseDescription(singleData.courseDescription);
      setAbout_course(singleData.aboutCourse);
      setWhatWillBeTaught(singleData.whatWillBeTaught);
      setRegularPrice(singleData.regularPrice);
      setSellPrice(singleData.sellPrice);
      setShortTitle(singleData.shortTitle);
      setIsFirstSectionFree(singleData.firstSectionFree === "true");
      setIsAutoEvaluationEnabled(singleData.autoEvaluation === "true");
      setIsUnitContentVisible(singleData.showUnitContentCurriculum === "true");
      setIsUnitCompletionLocked(singleData.unitCompletionLock === "true");
      setIsCourseButtonHidden(
        singleData.hideCourseButtonAfterSubscription === "true"
      );
      setIsCourseProgressDisplayed(
        singleData.displayCourseProgressOnCourseHome === "true"
      );
      setIsTimeBasedProgressEnabled(
        singleData.timeBasedCourseProgress === "true"
      );
      setIsReviewsEnabled(
        singleData.postCourseReviewsFromCourseHome === "true"
      );
      setIsBatchEnrollmentForced(singleData.ForceBatchEnrollment === "true");
      setIsSectionDripFeed(singleData.SectionDripFeed === "true");
      setBadgePercentage(singleData.badgePercentage);
      setBadgeTitle(singleData.badgeTitle);
      setExcellenceBadgeFile(singleData.excellenceBadge);
      setCourseId(singleData.prerequisiteCourse);
      setDripFeedDurationStatic(singleData.dripFeedDurationStatic);
      setCourseForum(singleData.courseForum);
      setCertificatePassingPercentage(singleData.certificatePassingPercentage);
      setCertificateId(singleData?.certificate_data?.id);
      setCertificateName(singleData?.certificate_data?.title);
      setCompletionCertificate(singleData.completionCertificate === "true");
      setCourseRetakes(singleData.courseRetakes);
      setDripDurationParameterCourseForum(singleData.dripDurationParameter);
      setDripDurationEnabled(singleData.dripDurationUnitDuration === "true");
      setHideExpiredBatches(singleData.hideExpiredBatches === "true");
      setCourseGroup(singleData.courseGroup);
      setCourseSpecificInstructions(singleData.courseSpecificInstructions);
      setCourseCompletionMessage(singleData.courseCompletionMessage);
      setCourseThumbnail(singleData.thumbLinePicPath);
      setVideoCheckbox(singleData.videoUpload);
      setInstructor(singleData.instructor);
      setFAQQuestionsAndAnswer(singleData.faqQuestions);
      setImage(`${BASE_URL}${singleData?.thumbLinePicPath?.path}`);
      // setCourse(transformData(singleData.courseCurriculum));
    }
  }, [singleData]);

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
    excellenceBadge: excellenceBadgeFile,
    prerequisiteCourse: courseId,
    dripFeedDurationStatic: dripFeedDurationStatic,
    courseStartingTimeDripFeedOrigin: dripFeedDurationStatic,
    dripFeed: isDripFeedEnabled,
    courseForum: courseForum,
    certificatePassingPercentage: certificatePassingPercentage,
    certificateTemplate: certificateId,
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
    videoLink: promoVideoLink,
    courseCurriculum: condition
      ? transformCurriculum(course)
      : transformCurriculumNew(course),
    instructor: instructor,
    faqQuestions: faqQuestionsAndAnswer,
    courseCreator: user?.id,
    user_role: user?.role,
    totalEnrolledStudents: 0,
    review: [],
    topStudent: [],
    successfullStudent: [],
  };

  // console.log(course, transformCurriculumNew(course));

  const handleCreateCourse = async () => {
    console.log(payload);
    setLoading(true);
    try {
      const res = await post(URL.COURSE.POST, payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res?.success) {
        // reset();
        toast.success(" Created Successfully");
        if (user?.roles?.roleName === "Admin") {
          navigate("/admin/manage-course");
        } else {
          navigate("/instructor/manage-course");
        }
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

  return (
    <>
      <div className="px-[13px] w-full lg:w-[1100px] mb-10 mx-auto">
        <div className="bg-white rounded-[10px]">
          <div>
            <h2 className="text-[28px] font-[600] text_black_gray leading-[40px] p-2.5 flex flex-row items-center gap-3 ml-3">
              {formNo !== 1 && (
                <img className="w-[25px] " src={leftArrowIcon} onClick={pre} />
              )}
              Add New Course
            </h2>
          </div>
        </div>
        <div className="whitespace-nowrap px-14 pb-14 pt-5 my-10 bg-white rounded-[10px] border border-[#E3E5E8]">
          <div className="flex justify-center items-center">
            {formArray_new.map((v, i) => (
              <React.Fragment key={i}>
                <div
                  onClick={() => {
                    setFormNo(i + 1);
                    setPage(v.title);
                  }}
                  className={`w-[34px] my-3 text-[#2E3138] rounded-full relative text-sm ${
                    i <= formNo - 1
                      ? "bg-[#20AC90]"
                      : "p-3 border-4 border-[#20AC90]"
                  } h-[34px] flex justify-center items-center`}
                >
                  {i <= formNo - 1 ? <img src={tickMark} alt="" /> : ""}
                  <span
                    key={i}
                    className={`absolute -bottom-10 text font-[500] ${
                      i <= formNo - 1 ? "text-[#2E3138]" : "text-[#2E3138]"
                    }`}
                  >
                    {v.title}
                  </span>
                  {/* <span key={i} className="text-white"> {v.id} </span> */}
                  {/* <div key={i} className={`absolute -bottom-10 text font-[500] ${
                      i <= formNo - 1 ? "text-[#2E3138]" : "text-[#2E3138]"
                    }`}> <img src={tickMark} alt="" /> </div> */}
                </div>

                {i !== formArray_new.length - 1 && (
                  <div
                    key={i}
                    className={`flex-1 h-[2px] ${
                      i + 1 <= formNo - 1 ? "bg-[#20AC90]" : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                )}
              </React.Fragment>
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
          />
        ) : page === "Upload Video" ? (
          <UploadVideo
            next={next}
            setPage={setPage}
            setCourseId={setCourseId}
            setCertificateId={setCertificateId}
            setCourseName={setCourseName}
            courseName={courseName}
            setCertificateName={setCertificateName}
            certificateName={certificateName}
            courseThumbnail={courseThumbnail}
            setCourseThumbnail={setCourseThumbnail}
            videoCheckbox={videoCheckbox}
            setVideoCheckbox={setVideoCheckbox}
            badgePercentage={badgePercentage}
            setBadgePercentage={setBadgePercentage}
            certificatePassingPercentage={certificatePassingPercentage}
            setCertificatePassingPercentage={setCertificatePassingPercentage}
            badgeTitle={badgeTitle}
            setBadgeTitle={setBadgeTitle}
            setExcellenceBadgeFile={setExcellenceBadgeFile}
            courseRetakes={courseRetakes}
            setCourseRetakes={setCourseRetakes}
            dripFeedDurationStatic={dripFeedDurationStatic}
            setDripFeedDurationStatic={setDripFeedDurationStatic}
            dripDurationParameterCourseForum={dripDurationParameterCourseForum}
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
            promoVideoLink={promoVideoLink}
            setPromoVideoLink={setPromoVideoLink}
          />
        ) : page === "Course Curriculum" ? (
          <CorseCurriculum
            pre={pre}
            setCourse={setCourse}
            setPage={setPage}
            next={next}
            course={course}
          />
        ) : page === "Instructor" ? (
          <Instructor
            next={next}
            pre={pre}
            setPage={setPage}
            instructor={instructor}
            setInstructor={setInstructor}
          />
        ) : page === "FAQ" ? (
          <FAQ
            next={next}
            pre={pre}
            setPage={setPage}
            faqQuestionsAndAnswer={faqQuestionsAndAnswer}
            setFAQQuestionsAndAnswer={setFAQQuestionsAndAnswer}
          />
        ) : page === "Submit Process" ? (
          <SubmitProcess
            next={next}
            pre={pre}
            setPage={setPage}
            loading={loading}
            handleCreateCourse={handleCreateCourse}
          />
        ) : null}
      </div>
    </>
  );
};

export default AllCoursePage;
