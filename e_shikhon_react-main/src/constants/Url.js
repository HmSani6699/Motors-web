const API_NAME = import.meta.env.VITE_API_NAME;
const condition = API_NAME === "live";

export const URL = {
  UNIT: {
    POST: `api/${condition ? `unit/add` : `unit`}`,
    GET: `api/${condition ? `unit/all` : `unit`}`,
    PUT: `api/${condition ? `unit/update` : `unit`}`,
    DET: `api/${condition ? `unit/delete` : `unit`}`,
  },
  ASSIGNMENT: {
    POST: `api/${condition ? `assignment/add` : `assignment`}`,
    GET: `api/${condition ? `assignment/all` : `assignment`}`,
    PUT: `api/${condition ? `assignment/update` : `assignment`}`,
    DET: `api/${condition ? `assignment/delete` : `assignment`}`,
  },
  QUIZ: {
    POST: `api/${condition ? `quiz/add` : `quiz`}`,
    GET: `api/${condition ? `quiz/all` : `quiz`}`,
    PUT: `api/${condition ? `quiz/update` : `quiz`}`,
    DET: `api/${condition ? `quiz/delete` : `quiz`}`,
  },
  QUESTION: {
    POST: `api/${condition ? `question/add` : `question`}`,
    GET: `api/${condition ? `question/all` : `question`}`,
    PUT: `api/${condition ? `question/update` : `question`}`,
    DET: `api/${condition ? `question/delete` : `question`}`,
  },

  QUESTION_TAG: {
    POST: `api/${condition ? `question/tag/add` : `question_tag`}`,
    GET: `api/${condition ? `question/tag/all` : `question_tag`}`,
    PUT: `api/${condition ? `question/tag/update` : `question_tag`}`,
    DET: `api/${condition ? `question/tag/delete` : `question_tag`}`,
    SUGGESTION: `api/${condition ? `question/tag/search` : `question_tag`}`,
  },
  COURSE: {
    COURSE: `api/${condition ? `courses/all` : `course`}`,
    POST: `api/${condition ? `courses/add` : `course`}`,
    GET: `api/${condition ? `courses/by_admin` : `course`}`,
    PUT: `api/${condition ? `courses/update` : `course`}`,
    DET: `api/${condition ? `courses/destroy` : `course`}`,
  },
  BATCH: {
    POST: `api/${condition ? `batch/add` : `batch`}`,
    GET: `api/${condition ? `batch/all` : `batch`}`,
    PUT: `api/${condition ? `batch/update` : `batch`}`,
    DET: `api/${condition ? `batch/delete` : `batch`}`,
  },
  COURSE_CATEGORY: {
    POST: `api/${condition ? `course-category/add` : `course_category`}`,
    GET: `api/${condition ? `course-category/all` : `course_category`}`,
    PUT: `api/${
      condition ? `course-category/update_course_category` : `course_category`
    }`,
    DET: `api/${
      condition ? `course-category/delete_course_category` : `course_category`
    }`,
  },
  REGISTRATION: {
    SEND_OTP: `api/${condition ? `auth/send_otp` : `send_otp`}`,
    VERIFY_OTP: `api/${condition ? `auth/verify_otp` : `verify_otp`}`,
    GET: `api/${condition ? `registration/all` : `registration`}`,
    PUT: `api/${condition ? `registration/update` : `registration`}`,
    DET: `api/${condition ? `registration/delete` : `registration`}`,
  },
  LOGIN: {
    POST: "api/auth/login",
  },
};
