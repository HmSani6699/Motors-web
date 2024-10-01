import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Course from "../pages/course/Course";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ResetPassword from "../pages/login/ResetPassword";
import Cart from "../pages/cartPage/Cart";
import Payment from "../pages/cartPage/Payment";
import AgentOfficeDetails from "../pages/agentOffice/AgentOfficeDetails";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog/BlogDetails";
import MentorsList from "../pages/mentors/MentorsList";
import MentorDetails from "../pages/mentors/MentorDetails";
import ContactUs from "../pages/contactUs/ContactUs";
import TermsAndCondition from "../pages/termsAndCondition/TermsAndCondition";
import Career from "../pages/career/Career";
import CareerDetails from "../pages/career/CareerDetails";
import Seminar from "../pages/seminar/Seminar";
import LearnPage from "../pages/learnPage/LearnPage";
import InstitutePage from "../pages/institutePage/InstitutePage";
import InstitutePageDetails from "../pages/institutePage/InstitutePageDetails";
import SignUp from "../pages/signUp/SignUp";
import OTPConfirmation from "../pages/signUp/OTPConfirmation";
import UserInformation from "../pages/userInformation/UserInformation";
import CourseDetails from "../pages/course/CourseDetails";
import Admin from "../pages/dashboard/admin";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import ManageCourse from "../pages/dashboard/admin/Dashboard/ManageCourse";
import AddCourse from "../pages/dashboard/admin/Dashboard/AddCourse";

import StudentDashboardSideBar from "../pages/dashboard/student";
import CreateBundleCourse from "../pages/dashboard/admin/Dashboard/createBundleCourse/CreateBundleCourse";
import BundleCourse from "../pages/dashboard/admin/Dashboard/BundleCourse";
import MyCourse from "../pages/dashboard/student/studentDashboard/MyCourse";
import StudentDashboardCourseDetails from "../pages/dashboard/student/studentDashboard/studentDashboardCourseDetails/StudentDashboardCourseDetails";
import MyQuiz from "../pages/dashboard/student/studentDashboard/myQuiz/MyQuiz.jsx";
import LiveClass from "../pages/dashboard/student/studentDashboard/LiveClass";
import Commission from "../pages/dashboard/student/studentDashboard/Commission";
import Wallet from "../pages/dashboard/student/studentDashboard/wallet/Wallet";
import Commission_Instructor from "../pages/dashboard/instructorDashboard/instructorDashboard/Commission.jsx";
import Wallet_Instructor from "../pages/dashboard/instructorDashboard/instructorDashboard/wallet/Wallet.jsx";
import StudentDashboardPayment from "../pages/dashboard/student/studentDashboard/StudentDashboardPayment";
import Certificate from "../pages/dashboard/student/studentDashboard/Certificate";
import StudentDashboard from "../pages/dashboard/student/studentDashboard";
import InstructorDashboardSideBar from "../pages/dashboard/instructorDashboard";
import InstructorDashboard from "../pages/dashboard/instructorDashboard/instructorDashboard/InstructorDashboard";
import CourseList from "../pages/dashboard/instructorDashboard/instructorDashboard/CourseList";
import BookingList from "../pages/dashboard/instructorDashboard/instructorDashboard/BookingList";
import ParentDashboardSideBar from "../pages/dashboard/parentDashboard";
import ParentDashboard from "../pages/dashboard/parentDashboard/parentDashboard/ParentDashboard";
import Category from "../pages/dashboard/admin/Dashboard/category/Category";
import ManageInstructor from "../pages/dashboard/admin/Dashboard/ManageInstructor";
import ManageStudent from "../pages/dashboard/admin/Dashboard/ManageStudent";
import ManageUser from "../pages/dashboard/admin/Dashboard/ManageUser";
import AboutUs from "../pages/aboutUs/AboutUs";
import ManageBatch from "../pages/dashboard/admin/Dashboard/ManageBatch";
import UpComingBatch from "../pages/home/UpComingBatch";
import CourseCurriculum from "../pages/course/CourseCurriculum";
import StudentProfile from "../pages/studentProfile/StudentProfile";
import ParentProfile from "../pages/parentProfile/ParentProfile.jsx";
import Form from "../pages/applicationForm/Form.jsx";
import AllActivity from "../pages/allActivity/AllActivity.jsx";
import UserProfile from "../pages/dashboard/userProfile/UserProfile.jsx";
import ManageRole from "../pages/dashboard/admin/Dashboard/ManageRole.jsx";
import UpComingBatchPage from "../pages/UpComingBatch/UpComingBatchPage.jsx";
import ManageAdmin from "../pages/dashboard/admin/Dashboard/ManageAdmin.jsx";
import CreateCourse from "../pages/dashboard/student/studentDashboard/CreateCourse.jsx";
import AllStudents from "../pages/allStudents/AllStudents.jsx";
import PublicQNA from "../pages/dashboard/admin/Dashboard/PublicQNA.jsx";
import AgentOfficePage from "../pages/agentOffice/AgentOffice.jsx";
import ManageUnit from "../pages/dashboard/admin/Dashboard/ManageUnit.jsx";
import ManageSection from "../pages/dashboard/admin/Dashboard/ManageSection.jsx";
// import ManageQuiz from "../pages/dashboard/admin/Dashboard/ManageQuiz.jsx";

import ManageAssignment from "../pages/dashboard/admin/Dashboard/ManageAssignment.jsx";
import QuestionTag from "../pages/dashboard/admin/Dashboard/QuestionTag.jsx";
import Quiz from "../pages/quiz/Quiz.jsx";
import ManageBlog from "../pages/dashboard/admin/Dashboard/ManageBlog.jsx";
import ManageCertificate from "../pages/dashboard/admin/Dashboard/ManageCertificate.jsx";
import ManageSeminar from "../pages/dashboard/admin/Dashboard/ManageSeminar.jsx";
import ManageForum from "../pages/dashboard/admin/Dashboard/ManageForum.jsx";
import MentorBooking from "../pages/mentors/MentorBooking.jsx";
import MyCoursePlyer from "../pages/dashboard/student/studentDashboard/MyCoursePlyer.jsx";
import AmountyHistory from "../pages/dashboard/admin/Dashboard/AmountHistory/AmountyHistory.jsx";
import CartPage from "../pages/cartPage/CartPage.jsx";
import LiveCourseCurriculum from "../pages/course/LiveCourseCurriculum.jsx";
import MyBatch from "../pages/dashboard/student/studentDashboard/MyBatch.jsx";
import BookingInstructor from "../pages/dashboard/student/studentDashboard/BookingInstructor.jsx";
import Promocode from "../pages/dashboard/admin/Dashboard/Promocode.jsx";
import InstructorPayment from "../pages/dashboard/instructorDashboard/instructorDashboard/InstructorPayment.jsx";
// import ManageQuestion from "../pages/dashboard/admin/Dashboard/manageQuestion/index.jsx";
import VideoCourseList from "../pages/dashboard/admin/Dashboard/ManageVideoCourse/VideoCourseList.jsx";
import InstructorLiveClass from "../pages/dashboard/instructorDashboard/instructorDashboard/LiveClass.jsx";
import ManageRolePermission from "../pages/dashboard/admin/Dashboard/ManageRolePermission.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import ZoomMeeting from "../pages/course/ZoomMeeting.jsx";
import AssignmentHome from "../pages/dashboard/instructorDashboard/instructorDashboard/assignment/AssignmentHome.jsx";
import AgentDashboardSideBar from "../pages/dashboard/agentDashboard/index.jsx";
import AgentDashboard from "../pages/dashboard/agentDashboard/agentDeshboard/AgentDashboard.jsx";
import SingleBatchAssignment from "../pages/dashboard/instructorDashboard/instructorDashboard/assignment/SingleBatchAssignment.jsx";
import SingleBatchAssignmentDetails from "../pages/dashboard/instructorDashboard/instructorDashboard/assignment/SingleBatchAssignmentDetails.jsx";
import Forum from "../pages/forum/Forum.jsx";
import ManageBlogCategory from "../pages/dashboard/admin/Dashboard/ManageBlogCategory.jsx";
import ManageInstructorBlog from "../pages/dashboard/admin/Dashboard/ManageInstructorBlog.jsx";
import BlogCard from "../components/sheared/blog/BlogCard.jsx";
import BlogList from "../pages/blog/BlogList.jsx";
import AdminRoute from "../ProtecteRoute/AdminRoute.jsx";
import StudentRoute from "../ProtecteRoute/StudentRoute.jsx";
import AgentRoute from "../ProtecteRoute/AgentRoute.jsx";
import ParentRoute from "../ProtecteRoute/ParentRoute.jsx";
import InstructorRoute from "../ProtecteRoute/InstructorRoute.jsx";
import OnlineBatch from "../pages/onlineBatch/OnlineBatch.jsx";
import RandomQuizByAdmin from "../pages/dashboard/admin/Dashboard/Random Quiz/RandomQuizByAdmin.jsx";
import QuizDetails from "../pages/dashboard/student/studentDashboard/myQuiz/QuizDetails.jsx";
import ManageQuestionTag from "../pages/dashboard/admin/Dashboard/manageQuestionTag/index.jsx";
import ManageQuestion from "../pages/dashboard/admin/Dashboard/manageQuestion/index.jsx";
import ManageQuiz from "../pages/dashboard/admin/Dashboard/manageQuiz/index.jsx";
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import LearningPath from "../pages/dashboard/student/studentDashboard/LearningPath.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/zoom-meeting",
        element: <ZoomMeeting />,
      },
      {
        path: "/linkedin",
        element: <LinkedInCallback />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails />,
      },
      {
        path: "/courseCurriculum/:id",
        element: <CourseCurriculum />,
      },
      {
        path: "/liveCourseCurriculum/:id",
        element: <LiveCourseCurriculum />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/otpConfirmation",
        element: <OTPConfirmation />,
      },
      {
        path: "/userInformation",
        element: <UserInformation />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/agentOfficeDetails",
        element: <AgentOfficeDetails />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/blogList/:id",
        element: <BlogList />,
      },
      {
        path: "/mentorsList",
        element: <MentorsList />,
      },
      {
        path: "/mentorDetails/:id",
        element: <MentorDetails />,
      },
      {
        path: "/mentorBooking/:id",
        element: <MentorBooking />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/termAndCondition",
        element: <TermsAndCondition />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/careerDetails",
        element: <CareerDetails />,
      },
      {
        path: "/seminar",
        element: <Seminar />,
      },
      {
        path: "/learnPage",
        element: <LearnPage />,
      },
      {
        path: "/institutePage",
        element: <InstitutePage />,
      },
      {
        path: "/institutePageDetails",
        element: <InstitutePageDetails />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },

      {
        path: "/studentProfile",
        element: <StudentProfile />,
      },
      {
        path: "/parentProfile",
        element: <ParentProfile />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/allActivity",
        element: <AllActivity />,
      },
      {
        path: "/upComingBatch",
        element: <UpComingBatchPage />,
      },
      {
        path: "/onlineBatch",
        element: <Course />,
      },
      {
        path: "/agentOffice",
        element: <AgentOfficePage />,
      },
      {
        path: "/allStudents",
        element: <AllStudents />,
      },
      {
        path: "/quiz/:id",
        element: (
          <StudentRoute>
            <Quiz />,
          </StudentRoute>
        ),
      },
      {
        path: "/forum",
        element: <Forum />,
      },

      // Admin
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        ),
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "manage-course",
            element: <ManageCourse />,
          },
          {
            path: "all-payment",
            element: <AmountyHistory />,
          },
          {
            path: "random-quiz",
            element: <RandomQuizByAdmin />,
          },
          {
            path: "userProfile",
            element: <UserProfile />,
          },
          {
            path: "manage-course-course-category",
            element: <Category />,
          },
          {
            path: "add-course",
            element: <AddCourse />,
          },
          {
            path: "bundle-course",
            element: <BundleCourse />,
          },
          {
            path: "create-bundle-course",
            element: <CreateBundleCourse />,
          },
          {
            path: "manage-batch",
            element: <ManageBatch />,
          },
          {
            path: "manage-video-course",
            element: <VideoCourseList />,
          },
          {
            path: "manage-unit",
            element: <ManageUnit />,
          },
          {
            path: "manage-section",
            element: <ManageSection />,
          },
          {
            path: "manage-certificate",
            element: <ManageCertificate />,
          },
          {
            path: "manage-seminar",
            element: <ManageSeminar />,
          },
          {
            path: "manage-quiz",
            element: <ManageQuiz />,
          },
          {
            path: "manage-question",
            element: <ManageQuestion />,
          },
          {
            path: "question-tag",
            // element: <QuestionTag />,
            element: <ManageQuestionTag />,
          },
          {
            path: "manage-assignment",
            element: <ManageAssignment />,
          },
          {
            path: "manage-role",
            element: <ManageRole />,
          },
          {
            path: "promocode",
            element: <Promocode />,
          },
          {
            path: "manage-role-permission",
            element: <ManageRolePermission />,
          },
          {
            path: "manage-instructor",
            element: <ManageInstructor />,
          },
          {
            path: "manage-student",
            element: <ManageStudent />,
          },
          {
            path: "manage-user",
            element: <ManageUser />,
          },
          {
            path: "public-qna",
            element: <PublicQNA />,
          },
          {
            path: "manage-admin",
            element: <ManageAdmin />,
          },
          {
            path: "manage-blog-category",
            element: <ManageBlogCategory />,
          },
          {
            path: "manage-blog",
            element: <ManageBlog />,
          },
          {
            path: "instructor-blog",
            element: <ManageInstructorBlog />,
          },
          {
            path: "manage-forum",
            element: <ManageForum />,
          },
        ],
      },
      // student
      {
        path: "/student",
        element: (
          <StudentRoute>
            <StudentDashboardSideBar />
          </StudentRoute>
        ),
        children: [
          {
            path: "",
            element: <StudentDashboard />,
          },
          {
            path: "my-course",
            element: <MyCourse />,
          },
          {
            path: "my-course-details",
            element: <StudentDashboardCourseDetails />,
          },
          {
            path: "my-course/:id",
            element: <MyCoursePlyer />,
          },
          {
            path: "userProfile",
            element: <UserProfile />,
          },
          {
            path: "my-quiz",
            element: <MyQuiz />,
          },
          {
            path: "quiz-Details/:id",
            element: (
              <StudentRoute>
                <QuizDetails />,
              </StudentRoute>
            ),
          },
          {
            path: "my-batch",
            element: <MyBatch />,
          },
          {
            path: "live-class",
            element: <LiveClass />,
          },
          {
            path: "booking-instructor",
            element: <BookingInstructor />,
          },
          {
            path: "commission",
            element: <Commission />,
          },
          {
            path: "commission-wallet",
            element: <Wallet />,
          },
          {
            path: "payment",
            element: <StudentDashboardPayment />,
          },
          {
            path: "paymentCart",
            element: <Payment />,
          },
          {
            path: "certificate",
            element: <Certificate />,
          },
          {
            path: "add-course",
            element: <CreateCourse />,
          },
          {
            path: "learningPath",
            element: <LearningPath />,
          },
        ],
      },
      // instructor
      {
        path: "/instructor",
        element: (
          <InstructorRoute>
            <InstructorDashboardSideBar />
          </InstructorRoute>
        ),
        children: [
          {
            path: "",
            element: <InstructorDashboard />,
          },
          {
            path: "manage-course",
            element: <CourseList />,
          },
          {
            path: "add-course",
            element: <AddCourse />,
          },
          {
            path: "manage-course-course-category",
            element: <Category />,
          },
          {
            path: "manage-batch",
            element: <ManageBatch />,
          },
          {
            path: "manage-video-course",
            element: <VideoCourseList />,
          },
          {
            path: "manage-unit",
            element: <ManageUnit />,
          },
          {
            path: "manage-section",
            element: <ManageSection />,
          },
          {
            path: "manage-certificate",
            element: <ManageCertificate />,
          },
          {
            path: "manage-seminar",
            element: <ManageSeminar />,
          },
          {
            path: "manage-quiz",
            element: <ManageQuiz />,
          },
          {
            path: "manage-question",
            element: <ManageQuestion />,
          },
          {
            path: "question-tag",
            element: <QuestionTag />,
          },
          {
            path: "manage-assignment",
            element: <ManageAssignment />,
          },
          {
            path: "course-list",
            element: <CourseList />,
          },
          {
            path: "userProfile",
            element: <UserProfile />,
          },
          {
            path: "manage-blog",
            element: <ManageBlog />,
          },
          {
            path: "live-class",
            element: <InstructorLiveClass />,
          },
          {
            path: "booking-list",
            element: <BookingList />,
          },
          {
            path: "commission",
            element: <Commission_Instructor />,
          },
          {
            path: "assignment",
            element: <AssignmentHome />,
          },
          {
            path: "batch-assignments/:id",
            element: <SingleBatchAssignment />,
          },
          {
            path: "batch-assignments/assignment/:id",
            element: <SingleBatchAssignmentDetails />,
          },
          {
            path: "commission-wallet",
            element: <Wallet_Instructor />,
          },
          {
            path: "payment",
            element: <InstructorPayment />,
          },
        ],
      },
      // agent
      {
        path: "/agent",
        element: (
          <AgentRoute>
            <AgentDashboardSideBar />
          </AgentRoute>
        ),
        children: [
          {
            path: "",
            element: <AgentDashboard />,
          },
          {
            path: "manage-course",
            element: <CourseList />,
          },
          {
            path: "add-course",
            element: <AddCourse />,
          },
          {
            path: "manage-course-course-category",
            element: <Category />,
          },
          {
            path: "manage-batch",
            element: <ManageBatch />,
          },
          {
            path: "manage-video-course",
            element: <VideoCourseList />,
          },
          {
            path: "manage-unit",
            element: <ManageUnit />,
          },
          {
            path: "manage-section",
            element: <ManageSection />,
          },
          {
            path: "manage-certificate",
            element: <ManageCertificate />,
          },
          {
            path: "manage-seminar",
            element: <ManageSeminar />,
          },
          {
            path: "manage-quiz",
            element: <ManageQuiz />,
          },
          {
            path: "manage-question",
            element: <ManageQuestion />,
          },
          {
            path: "question-tag",
            element: <QuestionTag />,
          },
          {
            path: "manage-assignment",
            element: <ManageAssignment />,
          },
          {
            path: "course-list",
            element: <CourseList />,
          },
          {
            path: "userProfile",
            element: <UserProfile />,
          },
          {
            path: "live-class",
            element: <InstructorLiveClass />,
          },
          {
            path: "booking-list",
            element: <BookingList />,
          },
          {
            path: "commission",
            element: <Commission_Instructor />,
          },
          {
            path: "assignment",
            element: <AssignmentHome />,
          },
          {
            path: "commission-wallet",
            element: <Wallet_Instructor />,
          },
          {
            path: "payment",
            element: <InstructorPayment />,
          },
        ],
      },
      // parent
      {
        path: "/parent",
        element: (
          <ParentRoute>
            <ParentDashboardSideBar />
          </ParentRoute>
        ),
        children: [
          {
            path: "",
            element: <ParentDashboard />,
          },
        ],
      },
    ],
  },
]);
export default router;
