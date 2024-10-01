import { useEffect, useState } from "react";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const resolveDynamicPath = (obj, path) => {
  const parts = path.split(".");
  let result = obj;

  for (const part of parts) {
    if (result?.[part] !== undefined) {
      result = result[part];
    } else {
      return null;
    }
  }
  return result;
};

export function formatBDTaka(amount) {
  if (amount) {
    const str = amount.toString();
    const lastThree = str.slice(-3);
    const otherNumbers = str.slice(0, -3);

    if (otherNumbers !== "") {
      return (
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
      );
    } else {
      return lastThree;
    }
  } else {
    return 0;
  }
}

export function transformTag(inputArray) {
  if (!Array.isArray(inputArray)) {
    console.error("Error: inputArray is not an array.");
    return [];
  }
  if (inputArray.length === 0) {
    console.warn("Warning: inputArray is empty.");
    return [];
  }
  return inputArray.map((item) => ({
    tag: item.id,
    name: item?.tag,
  }));
}

export const transformCurriculum = (curriculum) => {
  if (curriculum) {
    const transformedData = [];
    let currentSection = null;

    curriculum.forEach((item) => {
      if (item.type === "section") {
        currentSection = {
          title: item.section,
          units: [],
          quiz: null,
          assignment: null,
        };
        transformedData.push(currentSection);
      } else if (item.type === "unit") {
        currentSection.units.push({ id: item.id });
      } else if (item.type === "quiz") {
        currentSection.quiz = item.id;
      } else if (item.type === "assignment") {
        currentSection.assignment = item.id;
      }
    });

    return transformedData;
  }
};
export const transformCurriculumNew = (curriculum) => {
  if (curriculum) {
    const transformedData = [];
    let currentSection = null;

    curriculum.forEach((item) => {
      if (item.type === "section") {
        currentSection = {
          title: item.section,
          units: [],
          quizId: null,
          assignmentId: null,
        };
        transformedData.push(currentSection);
      } else if (item.type === "unit") {
        currentSection.units.push({ id: item.id });
      } else if (item.type === "quiz") {
        currentSection.quizId = item.id;
      } else if (item.type === "assignment") {
        currentSection.assignmentId = item.id;
      }
    });

    return transformedData;
  }
};

export const transformCurriculumForBatch = (curriculum) => {
  if (curriculum) {
    const transformedData = [];
    let currentSection = null;

    curriculum.forEach((item) => {
      if (item.type === "section") {
        currentSection = {
          title: item.section,
          units: [],
          quiz: null,
          assignment: null,
        };
        transformedData.push(currentSection);
      } else {
        // If there's no section provided, create a default one
        if (!currentSection) {
          currentSection = {
            title: "defaultSection",
            units: [],
            quiz: null,
            assignment: null,
          };
          transformedData.push(currentSection);
        }

        if (item.type === "unit") {
          currentSection.units.push({ id: item.id });
        } else if (item.type === "quiz") {
          currentSection.quiz = item.id;
        } else if (item.type === "assignment") {
          currentSection.assignment = item.id;
        }
      }
    });

    return transformedData;
  }
};

export const modifyTag = (originalArray) => {
  if (originalArray) {
    return originalArray.map((item) => {
      return {
        tag: item.tag,
      };
    });
  }
};

export const uniqueId = `${Math.random().toString(36).substring(2, 15)}`;

export const transformData = (data) => {
  const result = [];

  data?.forEach((item) => {
    result.push({
      section: item.title,
      type: "section",
    });

    item.units.forEach((unit, index) => {
      result.push({
        unit: unit.title ? unit.title : "N/A",
        type: "unit",
        id: unit.id,
      });
    });

    if (item.quiz !== null) {
      result.push({
        quiz: item?.quiz?.title ? item?.quiz?.title : "N/A",
        type: "quiz",
        id: item?.quiz?.id,
      });
    }

    if (item.assignment !== null) {
      result.push({
        assignment: item?.assignment?.title ? item?.assignment?.title : "N/A",
        type: "assignment",
        id: item?.assignment?.id,
      });
    }
  });

  return result;
};
export const transformDataNew = (data) => {
  const result = [];

  data.forEach((item) => {
    result.push({
      section: item.title,
      type: "section",
    });

    item?.videos?.forEach((unit, index) => {
      result.push({
        unit: unit.unit?.title ? unit?.unit?.title : "N/A",
        type: "unit",
        id: unit?.unit?.id,
      });
    });

    if (item.quiz !== null) {
      result.push({
        quiz: item?.quiz?.title ? item?.quiz?.title : "N/A",
        type: "quiz",
        id: item?.quiz?.id,
      });
    }

    if (item.assignment !== null) {
      result.push({
        assignment: item?.assignment?.title ? item?.assignment?.title : "N/A",
        type: "assignment",
        id: item?.assignment?.id,
      });
    }
  });

  return result;
};

// export const todayDay = new Date()
//   .toLocaleString("en-US", {
//     timeZone: "Asia/Dhaka",
//   })
//   .split(",")[0];

// function convertDate(inputDate) {
//   let [month, day, year] = inputDate.split("/");
//   month = month.padStart(2, "0");
//   day = day.padStart(2, "0");
//   let formattedDate = `${year}-${month}-${day}`;
//   return formattedDate;
// }

// export const nowTime = new Date()
//   .toLocaleString("en-US", {
//     timeZone: "Asia/Dhaka",
//   })
//   .split(",")[1];

// export const convertTo24HourFormat = (time) => {
//   const [timePart, period] = time.split(" ");
//   let [hours, minutes, seconds] = timePart.split(":").map(Number);
//   if (period === "PM" && hours !== 12) {
//     hours += 12;
//   } else if (period === "AM" && hours === 12) {
//     hours = 0;
//   }
//   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//     2,
//     "0"
//   )}:${String(seconds).padStart(2, "0")}`;
// };

export const nowTime = () => {
  const nowTime = new Date()
    .toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    })
    .split(",")[1]
    .trim();

  const [timePart, period] = nowTime.split(" ");
  let [hours, minutes, seconds] = timePart.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
  // :${String(seconds).padStart(2, "0")}
};

export const addedTime = (startTime, durationHours) => {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  let hours = startHours + durationHours;
  let minutes = startMinutes;
  if (hours >= 24) {
    hours %= 24;
  }
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
};

export const todayDay = () => {
  const todayDay = new Date()
    .toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    })
    .split(",")[0]
    .trim();

  const convertDate = (inputDate) => {
    let [month, day, year] = inputDate.split("/");
    month = month.padStart(2, "0");
    day = day.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return convertDate(todayDay);
};

export function getCurrentTime24HourFormat() {
  let currentDate = new Date();
  let hours = currentDate.getHours().toString().padStart(2, "0");
  let minutes = currentDate.getMinutes().toString().padStart(2, "0");
  let currentTime = `${hours}:${minutes}`;
  return currentTime;
}

export function gettimeFormat(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const course_filter_data = [
  {
    id: 1,
    cetagory: "কোর্স ক্যাটাগরি",
    subCetagory: [
      {
        id: 1,
        name: "আইটি ভিডিও কোর্স",
      },
      {
        id: 2,
        name: "ভর্তি পরীক্ষা ভিডিও কোর্স",
      },
      {
        id: 3,
        name: "এইচএসসি ভিডিও কোর্স",
      },
      {
        id: 4,
        name: "অফলাইন কোর্স",
      },
      {
        id: 5,
        name: "বিসিএস পরীক্ষা",
      },
      {
        id: 6,
        name: "এসএসসি",
      },
      {
        id: 7,
        name: "ব্যবসা",
      },
      {
        id: 8,
        name: "আইইএলটিএস",
      },
      {
        id: 9,
        name: "কম্পিউটার ও তথ্য প্রযুক্তি",
      },
      {
        id: 10,
        name: "অনলাইন লাইভ ক্লাস",
      },
    ],
  },
  {
    id: 2,
    cetagory: "কোর্স টাইপ",
    subCetagory: [
      {
        id: 1,
        name: "অনলাইন",
      },
      {
        id: 2,
        name: "অফলাইন",
      },
      {
        id: 3,
        name: "ভিডিও কোর্স",
      },
    ],
  },
  {
    id: 3,
    cetagory: "শিক্ষকসমূহ",
    subCetagory: [
      {
        id: 1,
        name: "নাহিদ হাসান",
      },
      {
        id: 2,
        name: "তানভীর কুরাইশী",
      },
      {
        id: 3,
        name: "মো: শরিফুল ইসলাম(আলী)",
      },
      {
        id: 4,
        name: "সালমান মোহাম্মদ সুলতান",
      },
      {
        id: 5,
        name: "মাহবুব মাহী",
      },
      {
        id: 6,
        name: "মো: ফারহান সাদিক",
      },
    ],
  },
  {
    id: 4,
    cetagory: "কোর্স লেভেল",
    subCetagory: [
      {
        id: 1,
        name: "বিগিনার লেভেল",
      },
      {
        id: 2,
        name: "ইন্টারমিডিয়েট লেভেল",
      },
      {
        id: 3,
        name: "এ্যাডভান্সড লেভেল",
      },
    ],
  },
  {
    id: 5,
    cetagory: "এজেন্ট অফিস",
    subCetagory: [
      {
        id: 1,
        name: "রেইনবো অফিস, বরিশাল",
      },
      {
        id: 2,
        name: "নাটোর অফিস",
      },
      {
        id: 3,
        name: "খুলনা অফিস",
      },
      {
        id: 4,
        name: "ব্রাম্মনবাড়িয়া অফিস",
      },
    ],
  },
  {
    id: 6,
    cetagory: "কোর্স দাম",
    subCetagory: [
      {
        id: 1,
        name: "সব",
      },
      {
        id: 2,
        name: "ফ্রি কোর্স",
      },
      {
        id: 3,
        name: "পেইড কোর্স",
      },
    ],
  },
  {
    id: 7,
    cetagory: "কোর্স রিভিউ",
    subCetagory: [
      {
        id: 1,
        name: "৫.০ ⭐",
      },
      {
        id: 2,
        name: "৪.৫ ⭐",
      },
      {
        id: 3,
        name: "৩.৫ ⭐",
      },
      {
        id: 4,
        name: "৩.০ ⭐",
      },
      {
        id: 5,
        name: "২.০ ⭐",
      },
      {
        id: 6,
        name: "০.০ ⭐",
      },
    ],
  },
];

export const createVideoCourse = {
  id: 16,
  courseCategoryId: 2,
  courseCategory: "অনলাইন লাইভ ক্লাস",
  courseTitle: "Learn JavaScript Beginner to Advance(VIDEO_COURSE)",
  shortTitle: "Learn JS",
  courseDescription:
    '<p><strong style="color: rgb(32, 33, 34);">জাভাস্ক্রিপ্ট</strong><span style="color: rgb(32, 33, 34);">&nbsp;(</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%87%E0%A6%82%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF_%E0%A6%AD%E0%A6%BE%E0%A6%B7%E0%A6%BE" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">ইংরেজি</a><span style="color: rgb(32, 33, 34);">:&nbsp;JavaScript; উচ্চারণ:&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%AF%E0%A7%8D%E0%A6%AF:%E0%A6%86%E0%A6%A7%E0%A7%8D%E0%A6%AC%E0%A6%AC/%E0%A6%87%E0%A6%82%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c); background-color: initial;">/ˈdʒɑːvəˌskrɪpt/</a><a href="https://bn.wikipedia.org/wiki/%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F#cite_note-3" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c); background-color: initial;"><sup>[৩]</sup></a><span style="color: rgb(32, 33, 34);">)&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%A8%E0%A7%87%E0%A6%9F" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">ইন্টারনেটে</a><span style="color: rgb(32, 33, 34);">&nbsp;ব্যবহৃত অন্যতম সবচেয়ে জনপ্রিয়&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%82_%E0%A6%AD%E0%A6%BE%E0%A6%B7%E0%A6%BE" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">স্ক্রিপ্টিং ল্যাংগুয়েজ</a><span style="color: rgb(32, 33, 34);">। জাভাস্ক্রিপ্ট হল একটি ক্লায়েন্ট সাইড স্ক্রিপ্টিং বা&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%89%E0%A6%9C%E0%A6%BE%E0%A6%B0" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">ব্রাউজার</a><span style="color: rgb(32, 33, 34);">&nbsp;স্ক্রিপ্টিং ল্যাংগুয়েজ। জাভাস্ক্রিপ্ট (সংক্ষেপে JS বলা হয়) একটি&nbsp;</span><a href="https://bn.wikipedia.org/w/index.php?title=%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%9F%E0%A7%8B%E0%A6%9F%E0%A6%BE%E0%A6%87%E0%A6%AA-%E0%A6%AD%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95&amp;action=edit&amp;redlink=1" rel="noopener noreferrer" target="_blank" style="color: var(--color-link-red,#d73333);">প্রোটোটাইপ-ভিত্তিক</a><span style="color: rgb(32, 33, 34);">&nbsp;স্ক্রিপ্টিং ল্যাংগুয়েজ যাতে পরিবর্তনশীল, দুর্বল টাইপ এবং প্রথম শ্রেণীর ফাংশন আছে। এটি একটি&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%85%E0%A6%AC%E0%A6%9C%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F_%E0%A6%93%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%A1_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">অবজেক্ট ওরিয়েন্টেড</a><span style="color: rgb(32, 33, 34);">, কার্যকরী প্রোগ্রামিং শৈলী সমর্থনকারী ভাষা। জাভাস্ক্রিপ্ট একটি&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%85%E0%A6%AC%E0%A6%9C%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F_%E0%A6%93%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%A1_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">ওবজেক্ট-ওরিয়েন্টেড</a><span style="color: rgb(32, 33, 34);">, ডায়নামিক&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82_%E0%A6%AD%E0%A6%BE%E0%A6%B7%E0%A6%BE" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">প্রোগ্রামিং ভাষা</a><span style="color: rgb(32, 33, 34);">। এতে আছে ডেটা টাইপ, অপারেটর, গুরুত্বপূর্ণ কিছু অবজেক্ট (যেগুলো সব সময় আপনি ব্যবহার করতে পারবেন) আর ফাংশন বা মেথড।&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">জাভা</a><span style="color: rgb(32, 33, 34);">&nbsp;আর&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BF_(%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82_%E0%A6%AD%E0%A6%BE%E0%A6%B7%E0%A6%BE)" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c);">সি</a><span style="color: rgb(32, 33, 34);">&nbsp;প্রোগ্রামিং ভাষা থেকে বেশ কিছু সিনট্যাক্স ধার করে নেওয়ায় যারা এসব ভাষায় পারদর্শী তাদের জন্য এটি শেখা তুলনামূলকভাবে সহজ।&nbsp;</span><a href="https://bn.wikipedia.org/wiki/%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F#cite_note-4" rel="noopener noreferrer" target="_blank" style="color: var(--color-progressive,#36c); background-color: initial;"><sup>[৪]</sup></a></p>',
  whatWillBeTaught: [
    "ডকুমেন্ট অবজেক্ট মডেল (DOM)",
    "AJAX, Fetch AP",
    "রেগুলার এক্সপ্রেশন",
    "ECMAScript6 (ES6)",
    "জাভাস্ক্রিপ্ট প্রমিস (JavaScript Promises)",
    "অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং (OOP)",
    "অ্যাসিংক্রোনাস প্রোগ্রামিং (Asynchronous Programming)",
  ],
  courseType: "ভিডিও কোর্স",
  courseLanguage: "বাংলা",
  courseLevel: "বিগিনার লেভেল",
  courseStarDate: "2024-06-01",
  courseDuration: "3",
  courseDurationParameter: "Month",
  maximumStudents: 200,
  regularPrice: 5000,
  sellPrice: 3000,
  aboutCourse: [
    {
      title: "আপনাদের অফিসের লোকেশন? কোথায় এসে কোর্স করতে হবে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">কোথাও আসতে হবে না। এটি সম্পূর্ণ অনলাইন কোর্স, আপনি ঘরে বসে আপনার অ্যাকাউন্ট থেকে কোর্সটি করতে পারবেন। শুধু ভিডিও প্লে করার মতো ইন্টারনেট কানেকশন থাকলেই চলবে!</span></p>',
    },
    {
      title: "DVD আছে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">না, কোনো DVD নেই। আমরা কোনো ধরনের DVD দিই না।</span></p>',
    },
    {
      title: "অফলাইন কিংবা ভিডিও ডাউনলোড করার কোনো অপশন আছে কি না?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">না, অফলাইন বা ভিডিও ডাউনলোড করার কোনো অপশন এখানে নেই। কোর্স অবশ্যই লগইন করে অ্যাক্সেস করতে হবে।</span></p>',
    },
    {
      title: "আমার তো কম্পিউটার নেই। আমি পারবো কোর্স করতে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">অবশ্যই! যেকোনো স্মার্টফোন বা ট্যাবলেট থেকে কোর্স করতে পারবেন। তবে সফটওয়্যার ঠিকভাবে শেখার জন্য ল্যাপটপ/পিসি দরকার হবে।</span></p>',
    },
  ],
  freeCourse: "false",
  certificate: "",
  badge: "",
  support: "",
  firstSectionFree: "false",
  autoEvaluation: "false",
  showUnitContentCurriculum: "false",
  unitCompletionLock: "false",
  hideCourseButtonAfterSubscription: "false",
  displayCourseProgressOnCourseHome: "false",
  timeBasedCourseProgress: "false",
  postCourseReviewsFromCourseHome: "false",
  ForceBatchEnrollment: "false",
  SectionDripFeed: "false",
  badgePercentage: 100,
  badgeTitle: "Hero",
  // excellenceBadge: {
  //   path: "course_files/1717525693617-images (2).jpg",
  //   filename: "1717525693617-images (2).jpg",
  //   originalname: "images (2).jpg",
  // },
  prerequisiteCourse: 1,
  dripFeedDurationStatic: "1",
  courseStartingTimeDripFeedOrigin: "1",
  dripFeed: "false",
  courseForum: 1,
  certificatePassingPercentage: 60,
  certificateTemplate: 1,
  completionCertificate: "false",
  courseRetakes: "1",
  dripDurationParameter: "Second",
  dripDurationUnitDuration: "false",
  hideExpiredBatches: "false",
  courseGroup: "",
  courseSpecificInstructions: "<p>sdfds</p>",
  courseCompletionMessage: "<p>dsfsdf</p>",
  // thumbLinePicPath: {
  //   path: "course_files/1717525693618-learn Javascript.png",
  //   filename: "1717525693618-learn Javascript.png",
  //   originalname: "learn Javascript.png",
  // },
  videoUpload: "vimeoVideo",
  courseCurriculum: [
    {
      quiz: {
        id: 3,
        title: "What does HTML - 3",
        description:
          "<h1>What does HTML - 2</h1><h1>What does HTML - 2</h1><p><br></p>",
        author: "3",
        type: "Video",
        quiz_subtitle: null,
        connected_course: null,
        quiz_duration: null,
        quiz_duration_parameter: null,
        show_result_after_submission: null,
        negative_marks_per_quiz: null,
        number_of_quiz_per_page: null,
        auto_evaluate_results: null,
        number_of_extra_quiz_retakes: null,
        tags: [
          {
            tag: 5,
          },
        ],
        number_of_questions: null,
        marks: "12",
        randomize: "false",
        passing_marks: null,
        questions: null,
        result: null,
        code: "QZ-2343",
        attachment: null,
        createdAt: "2024-05-08T19:10:17.686Z",
        updatedAt: "2024-05-08T19:10:17.686Z",
      },
      title: "Course Curriculum - 1",
      units: [
        {
          id: 70,
          title: "Javascript class - 1",
          description:
            "<p>https://www.youtube.com/watch?v=xpP5L1NuMQU&amp;list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&amp;index=1https://www.youtube.com/watch?v=xpP5L1NuMQU&amp;list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&amp;index=1</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-6076",
          free_unit: "false",
          unit_duration: "15",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/rePN-VFo1Eo?si=OfVwCQeYssT1heAD",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/72939310929?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcyOTM5MzEwOTI5IiwiZXhwIjoxNzE3NTM0NjQxLCJpYXQiOjE3MTc1Mjc0NDEsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.LNU9p9fxiFqSIYbqTT0pFXRwfSWqx8F_rmuNgIqsT1w",
          zoom_info: {
            id: 72939310929,
            type: 2,
            uuid: "NQx9zMUGSYizRpeM5vff0g==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/72939310929?pwd=7VTyJEs5wr2QsxLFweamnOwimiyuOB.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/72939310929?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcyOTM5MzEwOTI5IiwiZXhwIjoxNzE3NTM0NjQxLCJpYXQiOjE3MTc1Mjc0NDEsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.LNU9p9fxiFqSIYbqTT0pFXRwfSWqx8F_rmuNgIqsT1w",
            created_at: "2024-06-04T18:57:21Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T18:57:21Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "7VTyJEs5wr2QsxLFweamnOwimiyuOB.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T18:57:21.922Z",
          updatedAt: "2024-06-04T18:57:21.922Z",
        },
        {
          id: 71,
          title: "JavaScript Class-2",
          description:
            "<p>JavaScript Class-2JavaScript Class-2JavaScript Class-2JavaScript Class-2JavaScript Class-2JavaScript Class-2JavaScript Class-2</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-9704",
          free_unit: "false",
          unit_duration: "13",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/lb7wT1gVU7Y?si=JtlPpHQS8nGAZnJH",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/73334427050?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjczMzM0NDI3MDUwIiwiZXhwIjoxNzE3NTM0NzA2LCJpYXQiOjE3MTc1Mjc1MDYsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.3SO5ugZzibIhFuF0DtOVVwjwbpt4cPrGo2wwNQr7uMA",
          zoom_info: {
            id: 73334427050,
            type: 2,
            uuid: "4FcE//AaTiafEdGgBDBv1w==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/73334427050?pwd=iPcenJMNUBYO7DVE6CXHosAl4ThQYP.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/73334427050?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjczMzM0NDI3MDUwIiwiZXhwIjoxNzE3NTM0NzA2LCJpYXQiOjE3MTc1Mjc1MDYsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.3SO5ugZzibIhFuF0DtOVVwjwbpt4cPrGo2wwNQr7uMA",
            created_at: "2024-06-04T18:58:26Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T18:58:26Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "iPcenJMNUBYO7DVE6CXHosAl4ThQYP.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T18:58:26.518Z",
          updatedAt: "2024-06-04T18:58:26.518Z",
        },
        {
          id: 72,
          title: "JavaScript Class-3",
          description:
            "<p>JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3JavaScript Class-3</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-7396",
          free_unit: "false",
          unit_duration: "22",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/PHy8h0BixKA?si=dq6_fnOwUJHhMJjC",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/76414089519?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc2NDE0MDg5NTE5IiwiZXhwIjoxNzE3NTM0Nzc4LCJpYXQiOjE3MTc1Mjc1NzgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.TqAKqaVNjQb9A4TsmVW7g2GZzF6zag1MGSEhPUZBJcY",
          zoom_info: {
            id: 76414089519,
            type: 2,
            uuid: "OzB8PQL4RhuWaMnC0/GIrg==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/76414089519?pwd=BvogHaGPiu41qnirVJ1C03xPgU0fDU.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/76414089519?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc2NDE0MDg5NTE5IiwiZXhwIjoxNzE3NTM0Nzc4LCJpYXQiOjE3MTc1Mjc1NzgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.TqAKqaVNjQb9A4TsmVW7g2GZzF6zag1MGSEhPUZBJcY",
            created_at: "2024-06-04T18:59:38Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T18:59:38Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "BvogHaGPiu41qnirVJ1C03xPgU0fDU.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T18:59:39.050Z",
          updatedAt: "2024-06-04T18:59:39.050Z",
        },
      ],
      assignment: {
        id: 8,
        title: "Javascript Assignment 1",
        author: 1,
        subTitle: "Javascript Assignment 1",
        description:
          '<p><span style="color: rgb(77, 81, 86);">Specify the level of expertise or background knowledge required. Outline the main topics, themes, or modules covered in the course.</span></p>',
        timelimit: 1,
        attachmentType: "",
        autoEvaluation: "true",
        attachmentSize: 5,
        includInCourse: 324,
        maximumMarks: 10,
        assignmentSubmissions: "Text Area",
        durationParameter: "Day",
        attachment: null,
        result: null,
        createdAt: "2024-06-04T16:11:51.535Z",
        updatedAt: "2024-06-04T16:11:51.535Z",
      },
    },
    {
      quiz: {
        id: 3,
        title: "What does HTML - 3",
        description:
          "<h1>What does HTML - 2</h1><h1>What does HTML - 2</h1><p><br></p>",
        author: "3",
        type: "Video",
        quiz_subtitle: null,
        connected_course: null,
        quiz_duration: null,
        quiz_duration_parameter: null,
        show_result_after_submission: null,
        negative_marks_per_quiz: null,
        number_of_quiz_per_page: null,
        auto_evaluate_results: null,
        number_of_extra_quiz_retakes: null,
        tags: [
          {
            tag: 5,
          },
        ],
        number_of_questions: null,
        marks: "12",
        randomize: "false",
        passing_marks: null,
        questions: null,
        result: null,
        code: "QZ-2343",
        attachment: null,
        createdAt: "2024-05-08T19:10:17.686Z",
        updatedAt: "2024-05-08T19:10:17.686Z",
      },
      title: "Course Curriculum - 2",
      units: [
        {
          id: 73,
          title: "JavaScript Class-4",
          description:
            "<p>JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4JavaScript Class-4</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-9426",
          free_unit: "false",
          unit_duration: "10",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/vXHefJiJM24?si=5snfSQy0XgJml4gt",
          video_link: null,
          instructor_link:
            "https://us04web.zoom.us/s/77099800424?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3MDk5ODAwNDI0IiwiZXhwIjoxNzE3NTM0ODQwLCJpYXQiOjE3MTc1Mjc2NDAsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ._XYuekGlNbWTLCovbwV6VUJLh3ZUwdlF8Dd4RFeSexs",
          zoom_info: {
            id: 77099800424,
            type: 2,
            uuid: "kZuk/CO2Tv2CRBHhvShn+Q==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/77099800424?pwd=th7gwWwT1Uf3C7AzEkocloexlr052G.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/77099800424?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3MDk5ODAwNDI0IiwiZXhwIjoxNzE3NTM0ODQwLCJpYXQiOjE3MTc1Mjc2NDAsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ._XYuekGlNbWTLCovbwV6VUJLh3ZUwdlF8Dd4RFeSexs",
            created_at: "2024-06-04T19:00:40Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T19:00:40Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "th7gwWwT1Uf3C7AzEkocloexlr052G.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T19:00:40.933Z",
          updatedAt: "2024-06-29T16:27:23.661Z",
        },
        {
          id: 74,
          title: "JavaScript Class-5",
          description:
            "<p>JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5JavaScript Class-5</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-5240",
          free_unit: "false",
          unit_duration: "24",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/xWujZw0yIqg?si=ZnnIYG42V0EIo4wH",
          video_link: null,
          instructor_link:
            "https://us04web.zoom.us/s/77570014962?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3NTcwMDE0OTYyIiwiZXhwIjoxNzE3NTM0ODc2LCJpYXQiOjE3MTc1Mjc2NzYsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.oe6Cd_HLWRcmvlfaRBwMVGMrR6uaClc3wCVN7EOy3z4",
          zoom_info: {
            id: 77570014962,
            type: 2,
            uuid: "LPARXxEmQt62qLzaz5iEDA==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/77570014962?pwd=aXmdrtpaSPsIb40DVpC3APV5sfp6Q3.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/77570014962?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3NTcwMDE0OTYyIiwiZXhwIjoxNzE3NTM0ODc2LCJpYXQiOjE3MTc1Mjc2NzYsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.oe6Cd_HLWRcmvlfaRBwMVGMrR6uaClc3wCVN7EOy3z4",
            created_at: "2024-06-04T19:01:16Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T19:01:16Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "aXmdrtpaSPsIb40DVpC3APV5sfp6Q3.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T19:01:16.925Z",
          updatedAt: "2024-06-29T16:27:23.661Z",
        },
        {
          id: 75,
          title: "JavaScript Class-6",
          description:
            "<p>JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6JavaScript Class-6</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-3019",
          free_unit: "false",
          unit_duration: "24",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/bH-xZqvPk8A?si=KbKZOjQnz9TpGiAv",
          video_link: null,
          instructor_link:
            "https://us04web.zoom.us/s/72035481556?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcyMDM1NDgxNTU2IiwiZXhwIjoxNzE3NTM0OTA4LCJpYXQiOjE3MTc1Mjc3MDgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.4dghQLSQevap-tCFq7LD0h2a5tvP55msCK-GCP6O2q8",
          zoom_info: {
            id: 72035481556,
            type: 2,
            uuid: "qKNAAqLaSOS1xs8D+BnQMw==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/72035481556?pwd=ZA57HHUKUNpDF9FxoviAXUtRVb5U7a.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/72035481556?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcyMDM1NDgxNTU2IiwiZXhwIjoxNzE3NTM0OTA4LCJpYXQiOjE3MTc1Mjc3MDgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.4dghQLSQevap-tCFq7LD0h2a5tvP55msCK-GCP6O2q8",
            created_at: "2024-06-04T19:01:48Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T19:01:48Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "ZA57HHUKUNpDF9FxoviAXUtRVb5U7a.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T19:01:48.826Z",
          updatedAt: "2024-06-29T16:27:23.661Z",
        },
      ],
      assignment: {
        id: 9,
        title: "Javascript Assignment 2",
        author: 1,
        subTitle: "Javascript Assignment 2",
        description:
          '<p><span style="color: rgb(77, 81, 86);">Specify the level of expertise or background knowledge required. Outline the main topics, themes, or modules covered in the course.</span></p>',
        timelimit: 0,
        attachmentType: "PDF",
        autoEvaluation: "true",
        attachmentSize: 10,
        includInCourse: 1,
        maximumMarks: 10,
        assignmentSubmissions: "Upload File",
        durationParameter: "Day",
        attachment: null,
        result: null,
        createdAt: "2024-06-04T16:12:59.118Z",
        updatedAt: "2024-06-04T16:12:59.118Z",
      },
    },
    {
      quiz: {
        id: 3,
        title: "What does HTML - 3",
        description:
          "<h1>What does HTML - 2</h1><h1>What does HTML - 2</h1><p><br></p>",
        author: "3",
        type: "Video",
        quiz_subtitle: null,
        connected_course: null,
        quiz_duration: null,
        quiz_duration_parameter: null,
        show_result_after_submission: null,
        negative_marks_per_quiz: null,
        number_of_quiz_per_page: null,
        auto_evaluate_results: null,
        number_of_extra_quiz_retakes: null,
        tags: [
          {
            tag: 5,
          },
        ],
        number_of_questions: null,
        marks: "12",
        randomize: "false",
        passing_marks: null,
        questions: null,
        result: null,
        code: "QZ-2343",
        attachment: null,
        createdAt: "2024-05-08T19:10:17.686Z",
        updatedAt: "2024-05-08T19:10:17.686Z",
      },
      title: "Course Curriculum - 3",
      units: [
        {
          id: 76,
          title: "JavaScript Class-7",
          description:
            "<p>JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7JavaScript Class-7</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-4973",
          free_unit: "false",
          unit_duration: "20",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/5WXXBGjmsiA?si=NUyLMBLmMic6S_qo",
          video_link: null,
          instructor_link:
            "https://us04web.zoom.us/s/78961114362?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc4OTYxMTE0MzYyIiwiZXhwIjoxNzE3NTM1MDIxLCJpYXQiOjE3MTc1Mjc4MjEsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.bACr5wBatAK277RQu781I04JSiWo1iha77JIXyQHRVM",
          zoom_info: {
            id: 78961114362,
            type: 2,
            uuid: "KZtKDLSfRX2CHR07DH+9Ww==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/78961114362?pwd=wi4DPRjfLa7LgWw3RCStXKB7i8dH9r.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/78961114362?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc4OTYxMTE0MzYyIiwiZXhwIjoxNzE3NTM1MDIxLCJpYXQiOjE3MTc1Mjc4MjEsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.bACr5wBatAK277RQu781I04JSiWo1iha77JIXyQHRVM",
            created_at: "2024-06-04T19:03:41Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T19:03:41Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "wi4DPRjfLa7LgWw3RCStXKB7i8dH9r.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T19:03:41.376Z",
          updatedAt: "2024-06-29T16:27:23.661Z",
        },
        {
          id: 77,
          title: "JavaScript Class-8",
          description:
            "<p>JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8JavaScript Class-8</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-1066",
          free_unit: "false",
          unit_duration: "5",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/HS6nkKeuP_M?si=d4FWR_eQsSXj3jr_",
          video_link: null,
          instructor_link:
            "https://us04web.zoom.us/s/77941580357?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3OTQxNTgwMzU3IiwiZXhwIjoxNzE3NTM1MDU1LCJpYXQiOjE3MTc1Mjc4NTUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.deR8k6k8P9Nom2x-ElvPIS7BC6nr092JdaYB-roXy_s",
          zoom_info: {
            id: 77941580357,
            type: 2,
            uuid: "Dn2SahC4RUWdCpd3kDIs1w==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/77941580357?pwd=tGvbzKr9rLZXw2LU7BbWYZBvVlaqRu.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/77941580357?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3OTQxNTgwMzU3IiwiZXhwIjoxNzE3NTM1MDU1LCJpYXQiOjE3MTc1Mjc4NTUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.deR8k6k8P9Nom2x-ElvPIS7BC6nr092JdaYB-roXy_s",
            created_at: "2024-06-04T19:04:15Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T19:04:15Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "tGvbzKr9rLZXw2LU7BbWYZBvVlaqRu.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T19:04:15.972Z",
          updatedAt: "2024-06-29T16:27:23.661Z",
        },
        {
          id: 78,
          title: "JavaScript Class-9",
          description:
            "<p>JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9JavaScript Class-9</p>",
          author: "4",
          start_time: "",
          start_date: "",
          type: "ভিডিও কোর্স",
          tag: null,
          code: "U-7251",
          free_unit: "false",
          unit_duration: "6",
          unit_duration_parameter: "Minute",
          unit_forum: null,
          connect_assigment: null,
          link: "https://youtu.be/DZHb10fzbOQ?si=JjLyzV98TbJgA_SW",
          video_link: null,
          instructor_link:
            "https://us04web.zoom.us/s/71136760812?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcxMTM2NzYwODEyIiwiZXhwIjoxNzE3NTM1MDkxLCJpYXQiOjE3MTc1Mjc4OTEsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.BSoKMPVldQocuDN8JHlniztOq2JSyleF7OPVklKGBpQ",
          zoom_info: {
            id: 71136760812,
            type: 2,
            uuid: "H1ZcSIjEQ126/22nZ6dJbw==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/71136760812?pwd=0AmuBRkJ7oYdUa1Elr3X6UTVqwIXEy.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/71136760812?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcxMTM2NzYwODEyIiwiZXhwIjoxNzE3NTM1MDkxLCJpYXQiOjE3MTc1Mjc4OTEsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.BSoKMPVldQocuDN8JHlniztOq2JSyleF7OPVklKGBpQ",
            created_at: "2024-06-04T19:04:51Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T19:04:51Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "0AmuBRkJ7oYdUa1Elr3X6UTVqwIXEy.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T19:04:52.002Z",
          updatedAt: "2024-06-29T16:27:23.661Z",
        },
      ],
      assignment: {
        id: 10,
        title: "Javascript Assignment 1",
        author: 1,
        subTitle: "Javascript Assignment 1",
        description:
          '<p><span style="color: rgb(77, 81, 86);">Specify the level of expertise or background knowledge required. Outline the main topics, themes, or modules covered in the course.</span></p>',
        timelimit: 1,
        attachmentType: "",
        autoEvaluation: "true",
        attachmentSize: 10,
        includInCourse: 1,
        maximumMarks: 10,
        assignmentSubmissions: "Text Area",
        durationParameter: "Day",
        attachment: null,
        result: null,
        createdAt: "2024-06-04T16:14:12.741Z",
        updatedAt: "2024-06-04T16:14:12.741Z",
      },
    },
  ],
  faqQuestions: [
    {
      title: "কীভাবে রেজিস্ট্রেশন করবো? পেমেন্ট কী দিয়ে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">বিকাশ, রকেট, নগদ, যেকোনো ব্যাংকের ডেবিট ও ক্রেডিট কার্ডসহ দেশের প্রচলিত প্রায় যেকোনো সিস্টেমেই পেমেন্ট করা যাবে। প্রোগ্রামে এনরোল করার জন্য ‘এখনই ভর্তি হোন’ বাটনে ক্লিক করে চেকআউট পেইজে যান। সেখানে আপনার অ্যাকাউন্টের ইনফো দিন। পরবর্তী পেইজে পেমেন্টের বিস্তারিত গাইডলাইন দেয়া থাকবে, সেগুলো ফলো করে ২ মিনিটের মধ্যে রেজিস্ট্রেশন কমপ্লিট করে ফেলতে পারবেন।</span></p>',
    },
    {
      title: "কোর্সটি কবে শুরু হবে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">কোর্সের নির্দিষ্ট কোনো টাইমলাইন নেই। কোর্সের সবগুলো লেসন, টপিক বা ম্যাটেরিয়াল অলরেডি আপলোড দেয়া আছে কোর্সের ভিতর। আপনি কোর্সটিতে এনরোল করার সাথে সাথেই সবগুলো ম্যাটেরিয়াল একসাথে আপনার ড্যাশবোর্ডে পেয়ে যাবেন। যখন ইচ্ছা অ্যাকাউন্টে ঢুকে যেকোনো লেসন, টপিক, কুইজ কমপ্লিট করবেন।</span></p>',
    },
    {
      title: "কোর্সটি কবে শুরু হবে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">কোর্সের নির্দিষ্ট কোনো টাইমলাইন নেই। কোর্সের সবগুলো লেসন, টপিক বা ম্যাটেরিয়াল অলরেডি আপলোড দেয়া আছে কোর্সের ভিতর। আপনি কোর্সটিতে এনরোল করার সাথে সাথেই সবগুলো ম্যাটেরিয়াল একসাথে আপনার ড্যাশবোর্ডে পেয়ে যাবেন। যখন ইচ্ছা অ্যাকাউন্টে ঢুকে যেকোনো লেসন, টপিক, কুইজ কমপ্লিট করবেন।</span></p>',
    },
    {
      title: "DVD আছে?",
      answer:
        '<p><span style="color: rgb(46, 47, 50);">না, কোনো DVD নেই। আমরা কোনো ধরনের DVD দিই না।</span></p>',
    },
  ],
  courseCreator: {
    fullName: "Srijon Talukdar",
    email: "srijon@gmail.com",
    phone_number: "01954665465",
  },
  totalEnrolledStudents: 30,
  review: null,
  topStudent: null,
  instructor: [
    {
      teacherName: "",
      teacherCategory: "",
    },
    {
      teacherName: "",
      teacherCategory: "",
    },
    {
      teacherName: "",
      teacherCategory: "",
    },
  ],
  successfullStudent: null,
  progress: null,
  enrolled: null,
  percentage: null,
  status: "hold",
  createdAt: "2024-06-04T18:28:13.632Z",
  updatedAt: "2024-07-11T11:43:10.920Z",
  course_creator: null,
};

export const dummy_course = {
  id: 20,
  course_id: 15,
  user_id: 8,
  scheduleDay: ["Sat", "Tue"],
  scheduleTime: "14:13",
  start_date: "2024-07-07T00:00:00.000Z",
  end_date: "2024-08-15T00:00:00.000Z",
  batch_no: "Learn JS-Batch-N24-1",
  seats: 10,
  participants: 6,
  dummy_participants: 16,
  courseCurriculum: [
    {
      quiz: {
        id: 20,
        title: "JavaScript Quiz -1 ",
        description: "",
        author: "4",
        type: "",
        quiz_subtitle: "",
        connected_course: "",
        quiz_duration: "6",
        quiz_duration_parameter: "Minute",
        show_result_after_submission: "",
        negative_marks_per_quiz: "",
        number_of_quiz_per_page: "",
        auto_evaluate_results: "",
        number_of_extra_quiz_retakes: "3",
        tags: [
          {
            tag: 16,
          },
        ],
        number_of_questions: "6",
        marks: "6",
        randomize: "false",
        passing_marks: "5",
        questions: [
          {
            id: 19,
            title: '<p id="demo">This is a demonstration.</p>',
            question_type: "MCQ",
            question: "2",
            options: [
              '#demo.innerHTML = "Hello World!";',
              'document.getElementByName("p").innerHTML = "Hello World!";',
              'document.getElementById("demo").innerHTML = "Hello World!";',
              'document.getElement("p").innerHTML = "Hello World!";',
            ],
            author: "2",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "3",
            code: "Q-3558",
            attachment: null,
            createdAt: "2024-06-04T16:17:32.453Z",
            updatedAt: "2024-06-04T16:17:32.453Z",
          },
          {
            id: 21,
            title: "Where is the correct place to insert a JavaScript?",
            question_type: "MCQ",
            question: "Where is the correct place to insert a JavaScript?",
            options: [
              "The <head> section",
              "Both the <head> section and the <body> section are correct",
              "The <body> section",
            ],
            author: "2",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "0",
            hint: "1",
            code: "Q-8991",
            attachment: null,
            createdAt: "2024-06-04T17:00:28.113Z",
            updatedAt: "2024-06-04T17:00:28.113Z",
          },
          {
            id: 30,
            title:
              "The external JavaScript file must contain the <script> tag.",
            question_type: "",
            question:
              "The external JavaScript file must contain the <script> tag.",
            options: ["False", "True"],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "",
            hint: "",
            code: "Q-9066",
            attachment: null,
            createdAt: "2024-06-04T17:42:50.233Z",
            updatedAt: "2024-06-04T17:42:50.233Z",
          },
          {
            id: 29,
            title:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            question_type: "MCQ",
            question:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            options: [
              '<script href="xxx.js">',
              '<script name="xxx.js">',
              '<script href="xxx.js">',
            ],
            author: "",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "1",
            code: "Q-8832",
            attachment: null,
            createdAt: "2024-06-04T17:38:55.822Z",
            updatedAt: "2024-06-04T17:38:55.822Z",
          },
          {
            id: 31,
            title: 'How do you write "Hello World" in an alert box?',
            question_type: "MCQ",
            question: 'How do you write "Hello World" in an alert box?',
            options: [
              'msgBox("Hello World");',
              'alert("Hello World");',
              'alertBox("Hello World");',
              'msg("Hello World");',
            ],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "3",
            hint: "1",
            code: "Q-2943",
            attachment: null,
            createdAt: "2024-06-04T17:44:37.858Z",
            updatedAt: "2024-06-04T17:44:37.858Z",
          },
          {
            id: 32,
            title: "How do you create a function in JavaScript?",
            question_type: "MCQ",
            question: "How do you create a function in JavaScript?",
            options: [
              "function myFunction()",
              "function = myFunction()",
              "function:myFunction()",
            ],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "3",
            code: "Q-7609",
            attachment: null,
            createdAt: "2024-06-04T17:45:59.866Z",
            updatedAt: "2024-06-04T17:45:59.866Z",
          },
        ],
        result: [
          {
            id: 7,
            quiz_id: 20,
            course_id: 16,
            user_id: 2,
            right_ans: 3,
            total_ques: 6,
            answers: ["2", "1", "1", "2", "1", "2"],
            quiz_mark: 3,
            quiz_ans: null,
            isComplete: "true",
            status: "complete",
            note: null,
            createdAt: "2024-06-04T19:05:27.895Z",
            updatedAt: "2024-06-04T19:05:27.895Z",
          },
        ],
        code: "QZ-1898",
        attachment: null,
        createdAt: "2024-06-04T18:06:08.537Z",
        updatedAt: "2024-06-04T18:06:08.537Z",
      },
      title: "JavaScript First Week - 1",
      units: [
        {
          id: 60,
          title: "What is JavaScript?   - 1",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "21:29",
          start_date: "2024-07-15",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-1427",
          free_unit: "true",
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/76698182173?pwd=aDBo5RZdH7gCnveOYylvLSETsn6Cq7.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/76698182173?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc2Njk4MTgyMTczIiwiZXhwIjoxNzE3NTI1MDA4LCJpYXQiOjE3MTc1MTc4MDgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.gJqrRkCQ2PHNWaA4TOs6_rS0IaueD6CxVoVvIj65_Wg",
          zoom_info: {
            id: 76698182173,
            type: 2,
            uuid: "Rliy2jzMR0eTFa1dnBHbWQ==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/76698182173?pwd=aDBo5RZdH7gCnveOYylvLSETsn6Cq7.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/76698182173?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc2Njk4MTgyMTczIiwiZXhwIjoxNzE3NTI1MDA4LCJpYXQiOjE3MTc1MTc4MDgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.gJqrRkCQ2PHNWaA4TOs6_rS0IaueD6CxVoVvIj65_Wg",
            created_at: "2024-06-04T16:16:48Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:16:48Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "aDBo5RZdH7gCnveOYylvLSETsn6Cq7.1",
          },
          quiz: null,
          attachment: null,
          class_status: "end",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:16:48.487Z",
          updatedAt: "2024-07-16T18:21:35.117Z",
        },
        {
          id: 66,
          title: "JS Introduction - 2",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "22:15",
          start_date: "2024-07-16",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-4248",
          free_unit: null,
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/72047943821?pwd=i56ombR5R8w70uFRPWHyaoAcUrBB4R.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/72047943821?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcyMDQ3OTQzODIxIiwiZXhwIjoxNzE3NTI2Njk1LCJpYXQiOjE3MTc1MTk0OTUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.iyC8F0-KeFmZXYrwt7y9cYZeT5vnkqw1GOQLX-nxPRg",
          zoom_info: {
            id: 72047943821,
            type: 2,
            uuid: "+S7/jus9SyeSUwQ2kT47dQ==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/72047943821?pwd=i56ombR5R8w70uFRPWHyaoAcUrBB4R.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/72047943821?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcyMDQ3OTQzODIxIiwiZXhwIjoxNzE3NTI2Njk1LCJpYXQiOjE3MTc1MTk0OTUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.iyC8F0-KeFmZXYrwt7y9cYZeT5vnkqw1GOQLX-nxPRg",
            created_at: "2024-06-04T16:44:55Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:44:55Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "i56ombR5R8w70uFRPWHyaoAcUrBB4R.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:44:55.946Z",
          updatedAt: "2024-07-15T15:36:08.401Z",
        },
        {
          id: 68,
          title: "The JavaScript language - 3",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "10:24",
          start_date: "2024-07-17",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-6286",
          free_unit: null,
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/77720615248?pwd=8QCrnuVma2fDSLPfk1HqaxAhmET8bs.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/77720615248?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3NzIwNjE1MjQ4IiwiZXhwIjoxNzE3NTI2NzgyLCJpYXQiOjE3MTc1MTk1ODIsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.VvUsq_MnaY-Z5gQjum59aPoDsVEcLFvr5LbxH7OjS84",
          zoom_info: {
            id: 77720615248,
            type: 2,
            uuid: "wz/3nLcKSTGe0OtIYeyUEA==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/77720615248?pwd=8QCrnuVma2fDSLPfk1HqaxAhmET8bs.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/77720615248?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc3NzIwNjE1MjQ4IiwiZXhwIjoxNzE3NTI2NzgyLCJpYXQiOjE3MTc1MTk1ODIsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.VvUsq_MnaY-Z5gQjum59aPoDsVEcLFvr5LbxH7OjS84",
            created_at: "2024-06-04T16:46:22Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:46:22Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "8QCrnuVma2fDSLPfk1HqaxAhmET8bs.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:46:22.871Z",
          updatedAt: "2024-07-15T15:36:56.574Z",
        },
        {
          id: 67,
          title: "How is JavaScript different from Java? - 4",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "22:45",
          start_date: "2024-07-18",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-6281",
          free_unit: null,
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/71699751103?pwd=LN2VCYPf6kFuwPcdiALWirFr4hjCTf.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/71699751103?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcxNjk5NzUxMTAzIiwiZXhwIjoxNzE3NTI2NzQ1LCJpYXQiOjE3MTc1MTk1NDUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.gn74VFtuGaq8uaRW2BU_q7yW86fPKk0tt0x51Z86SYU",
          zoom_info: {
            id: 71699751103,
            type: 2,
            uuid: "5aJvPidRRzK0+t3LnG1tWw==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/71699751103?pwd=LN2VCYPf6kFuwPcdiALWirFr4hjCTf.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/71699751103?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcxNjk5NzUxMTAzIiwiZXhwIjoxNzE3NTI2NzQ1LCJpYXQiOjE3MTc1MTk1NDUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.gn74VFtuGaq8uaRW2BU_q7yW86fPKk0tt0x51Z86SYU",
            created_at: "2024-06-04T16:45:45Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:45:45Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "LN2VCYPf6kFuwPcdiALWirFr4hjCTf.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:45:45.863Z",
          updatedAt: "2024-07-15T15:37:22.517Z",
        },
      ],
      assignment: {
        id: 10,
        title: "Javascript Assignment 2",
        author: 1,
        subTitle: "Javascript Assignment 2",
        description:
          '<p><span style="color: rgb(77, 81, 86);">Specify the level of expertise or background knowledge required. Outline the main topics, themes, or modules covered in the course.</span></p>',
        timelimit: 1,
        attachmentType: "",
        autoEvaluation: "true",
        attachmentSize: 10,
        includInCourse: 1,
        maximumMarks: 10,
        assignmentSubmissions: "Upload File",
        durationParameter: "Day",
        attachment: null,
        result: [
          // {
          //   id: 1,
          //   user_id: 2,
          //   course_id: 8,
          //   assignment_id: 10,
          //   assignment_mark: null,
          //   assignment_link: "",
          //   assignment_file: {},
          //   isComplete: "true",
          //   status: "complete",
          //   note: null,
          //   createdAt: "2024-05-26T14:04:06.332Z",
          //   updatedAt: "2024-05-26T14:04:06.332Z",
          // },
        ],
        createdAt: "2024-06-04T16:14:12.741Z",
        updatedAt: "2024-06-04T16:14:12.741Z",
      },
      assignmentRCount: 0,
    },
    {
      quiz: {
        id: 20,
        title: "JavaScript Quiz -1 ",
        description: "",
        author: "4",
        type: "",
        quiz_subtitle: "",
        connected_course: "",
        quiz_duration: "6",
        quiz_duration_parameter: "Minute",
        show_result_after_submission: "",
        negative_marks_per_quiz: "",
        number_of_quiz_per_page: "",
        auto_evaluate_results: "",
        number_of_extra_quiz_retakes: "3",
        tags: [
          {
            tag: 16,
          },
        ],
        number_of_questions: "6",
        marks: "6",
        randomize: "false",
        passing_marks: "5",
        questions: [
          {
            id: 19,
            title: '<p id="demo">This is a demonstration.</p>',
            question_type: "MCQ",
            question: "2",
            options: [
              '#demo.innerHTML = "Hello World!";',
              'document.getElementByName("p").innerHTML = "Hello World!";',
              'document.getElementById("demo").innerHTML = "Hello World!";',
              'document.getElement("p").innerHTML = "Hello World!";',
            ],
            author: "2",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "3",
            code: "Q-3558",
            attachment: null,
            createdAt: "2024-06-04T16:17:32.453Z",
            updatedAt: "2024-06-04T16:17:32.453Z",
          },
          {
            id: 21,
            title: "Where is the correct place to insert a JavaScript?",
            question_type: "MCQ",
            question: "Where is the correct place to insert a JavaScript?",
            options: [
              "The <head> section",
              "Both the <head> section and the <body> section are correct",
              "The <body> section",
            ],
            author: "2",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "0",
            hint: "1",
            code: "Q-8991",
            attachment: null,
            createdAt: "2024-06-04T17:00:28.113Z",
            updatedAt: "2024-06-04T17:00:28.113Z",
          },
          {
            id: 30,
            title:
              "The external JavaScript file must contain the <script> tag.",
            question_type: "",
            question:
              "The external JavaScript file must contain the <script> tag.",
            options: ["False", "True"],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "",
            hint: "",
            code: "Q-9066",
            attachment: null,
            createdAt: "2024-06-04T17:42:50.233Z",
            updatedAt: "2024-06-04T17:42:50.233Z",
          },
          {
            id: 29,
            title:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            question_type: "MCQ",
            question:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            options: [
              '<script href="xxx.js">',
              '<script name="xxx.js">',
              '<script href="xxx.js">',
            ],
            author: "",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "1",
            code: "Q-8832",
            attachment: null,
            createdAt: "2024-06-04T17:38:55.822Z",
            updatedAt: "2024-06-04T17:38:55.822Z",
          },
          {
            id: 31,
            title: 'How do you write "Hello World" in an alert box?',
            question_type: "MCQ",
            question: 'How do you write "Hello World" in an alert box?',
            options: [
              'msgBox("Hello World");',
              'alert("Hello World");',
              'alertBox("Hello World");',
              'msg("Hello World");',
            ],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "3",
            hint: "1",
            code: "Q-2943",
            attachment: null,
            createdAt: "2024-06-04T17:44:37.858Z",
            updatedAt: "2024-06-04T17:44:37.858Z",
          },
          {
            id: 32,
            title: "How do you create a function in JavaScript?",
            question_type: "MCQ",
            question: "How do you create a function in JavaScript?",
            options: [
              "function myFunction()",
              "function = myFunction()",
              "function:myFunction()",
            ],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "3",
            code: "Q-7609",
            attachment: null,
            createdAt: "2024-06-04T17:45:59.866Z",
            updatedAt: "2024-06-04T17:45:59.866Z",
          },
        ],
        result: [
          // {
          //   id: 7,
          //   quiz_id: 20,
          //   course_id: 16,
          //   user_id: 2,
          //   right_ans: null,
          //   total_ques: 6,
          //   answers: ["0", "1", "1", "1", "1", "1"],
          //   quiz_mark: 0,
          //   quiz_ans: null,
          //   isComplete: "true",
          //   status: "complete",
          //   note: null,
          //   createdAt: "2024-06-04T19:05:27.895Z",
          //   updatedAt: "2024-06-04T19:05:27.895Z",
          // },
        ],
        code: "QZ-1898",
        attachment: null,
        createdAt: "2024-06-04T18:06:08.537Z",
        updatedAt: "2024-06-04T18:06:08.537Z",
      },
      title: "JavaScript Second Week - 2",
      units: [
        {
          id: 65,
          title: "JavaScript — Dynamic client-side scripting - 5",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "23:00",
          start_date: "2024-07-20",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-5569",
          free_unit: "false",
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/78686431858?pwd=tGMAsQOthGsGmqkzGaYCeECZPudDL6.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/78686431858?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc4Njg2NDMxODU4IiwiZXhwIjoxNzE3NTI1OTEwLCJpYXQiOjE3MTc1MTg3MTAsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.Bg6f6EBO9JtCtML1raGTiv-bhsfoy_sdwnFAub4KUSs",
          zoom_info: {
            id: 78686431858,
            type: 2,
            uuid: "31mdYdwcSHa/q91hYph5Jw==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/78686431858?pwd=tGMAsQOthGsGmqkzGaYCeECZPudDL6.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/78686431858?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc4Njg2NDMxODU4IiwiZXhwIjoxNzE3NTI1OTEwLCJpYXQiOjE3MTc1MTg3MTAsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.Bg6f6EBO9JtCtML1raGTiv-bhsfoy_sdwnFAub4KUSs",
            created_at: "2024-06-04T16:31:50Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:31:50Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "tGMAsQOthGsGmqkzGaYCeECZPudDL6.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:31:51.023Z",
          updatedAt: "2024-07-15T15:37:53.846Z",
        },
        {
          id: 59,
          title: "JavaScript Functions - 6",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis,</p>",
          author: "",
          start_time: "11:01",
          start_date: "2024-07-21",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-7408",
          free_unit: "true",
          unit_duration: "2",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/71010497879?pwd=9532PR0tbxIett86vrybgqnJQYGbYy.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/71010497879?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcxMDEwNDk3ODc5IiwiZXhwIjoxNzE3NTI0ODQ4LCJpYXQiOjE3MTc1MTc2NDgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.WYHw0UuwiW9q2hJeo2-oNJFA3HiUi4lzei-qbo907qw",
          zoom_info: {
            id: 71010497879,
            type: 2,
            uuid: "+mTtG1PLQjet+miU4z+d1g==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/71010497879?pwd=9532PR0tbxIett86vrybgqnJQYGbYy.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/71010497879?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6IjcxMDEwNDk3ODc5IiwiZXhwIjoxNzE3NTI0ODQ4LCJpYXQiOjE3MTc1MTc2NDgsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.WYHw0UuwiW9q2hJeo2-oNJFA3HiUi4lzei-qbo907qw",
            created_at: "2024-06-04T16:14:07Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:14:07Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "9532PR0tbxIett86vrybgqnJQYGbYy.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:14:08.165Z",
          updatedAt: "2024-07-15T15:38:46.185Z",
        },
        {
          id: 64,
          title: "JavaScript Programming with Visual Studio Code - 7",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "19:35",
          start_date: "2024-06-15",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-8739",
          free_unit: "false",
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/74893655870?pwd=AAa4sWBXayNTheEtGzEkatMlm74xPH.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/74893655870?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc0ODkzNjU1ODcwIiwiZXhwIjoxNzE3NTI1NzQzLCJpYXQiOjE3MTc1MTg1NDMsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.hWV4Z8p5_pQcwtBlam7hvAGoW5BF1CV10QS1HIPjkO0",
          zoom_info: {
            id: 74893655870,
            type: 2,
            uuid: "czHD83mJRxinRMUd+kmzYA==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/74893655870?pwd=AAa4sWBXayNTheEtGzEkatMlm74xPH.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/74893655870?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc0ODkzNjU1ODcwIiwiZXhwIjoxNzE3NTI1NzQzLCJpYXQiOjE3MTc1MTg1NDMsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.hWV4Z8p5_pQcwtBlam7hvAGoW5BF1CV10QS1HIPjkO0",
            created_at: "2024-06-04T16:29:03Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:29:03Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "AAa4sWBXayNTheEtGzEkatMlm74xPH.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:29:03.801Z",
          updatedAt: "2024-06-10T19:18:21.740Z",
        },
        {
          id: 62,
          title: "JavaScript basics - Learn - 8 ",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "19:25",
          start_date: "2024-06-16",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-4470",
          free_unit: "false",
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/79372461286?pwd=Ue51wtRaLroAsj8a5TcbZLjkaTkQ9C.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/79372461286?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc5MzcyNDYxMjg2IiwiZXhwIjoxNzE3NTI1NDg1LCJpYXQiOjE3MTc1MTgyODUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.l65Pe71TPBlwRPmPKsluGT0nHVemN48qtXhzLe9aYt0",
          zoom_info: {
            id: 79372461286,
            type: 2,
            uuid: "yuBH0gCXRXS+rPdjQCKkSQ==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/79372461286?pwd=Ue51wtRaLroAsj8a5TcbZLjkaTkQ9C.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/79372461286?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc5MzcyNDYxMjg2IiwiZXhwIjoxNzE3NTI1NDg1LCJpYXQiOjE3MTc1MTgyODUsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.l65Pe71TPBlwRPmPKsluGT0nHVemN48qtXhzLe9aYt0",
            created_at: "2024-06-04T16:24:45Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:24:45Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "Ue51wtRaLroAsj8a5TcbZLjkaTkQ9C.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:24:45.511Z",
          updatedAt: "2024-06-10T19:18:47.510Z",
        },
      ],
      assignment: {
        id: 10,
        title: "Javascript Assignment 3",
        author: 1,
        subTitle: "Javascript Assignment 3",
        description:
          '<p><span style="color: rgb(77, 81, 86);">Specify the level of expertise or background knowledge required. Outline the main topics, themes, or modules covered in the course.</span></p>',
        timelimit: 1,
        attachmentType: "",
        autoEvaluation: "true",
        attachmentSize: 10,
        includInCourse: 1,
        maximumMarks: 10,
        assignmentSubmissions: "Text Area",
        durationParameter: "Day",
        attachment: null,
        result: [
          // {
          //   id: 1,
          //   user_id: 2,
          //   course_id: 8,
          //   assignment_id: 10,
          //   assignment_mark: null,
          //   assignment_link: "",
          //   assignment_file: {},
          //   isComplete: "true",
          //   status: "complete",
          //   note: null,
          //   createdAt: "2024-05-26T14:04:06.332Z",
          //   updatedAt: "2024-05-26T14:04:06.332Z",
          // },
        ],
        createdAt: "2024-06-04T16:14:12.741Z",
        updatedAt: "2024-06-04T16:14:12.741Z",
      },
      assignmentRCount: 0,
    },
    {
      quiz: {
        id: 20,
        title: "JavaScript Quiz -1 ",
        description: "",
        author: "4",
        type: "",
        quiz_subtitle: "",
        connected_course: "",
        quiz_duration: "6",
        quiz_duration_parameter: "Minute",
        show_result_after_submission: "",
        negative_marks_per_quiz: "",
        number_of_quiz_per_page: "",
        auto_evaluate_results: "",
        number_of_extra_quiz_retakes: "3",
        tags: [
          {
            tag: 16,
          },
        ],
        number_of_questions: "6",
        marks: "6",
        randomize: "false",
        passing_marks: "5",
        questions: [
          {
            id: 19,
            title: '<p id="demo">This is a demonstration.</p>',
            question_type: "MCQ",
            question: "2",
            options: [
              '#demo.innerHTML = "Hello World!";',
              'document.getElementByName("p").innerHTML = "Hello World!";',
              'document.getElementById("demo").innerHTML = "Hello World!";',
              'document.getElement("p").innerHTML = "Hello World!";',
            ],
            author: "2",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "3",
            code: "Q-3558",
            attachment: null,
            createdAt: "2024-06-04T16:17:32.453Z",
            updatedAt: "2024-06-04T16:17:32.453Z",
          },
          {
            id: 21,
            title: "Where is the correct place to insert a JavaScript?",
            question_type: "MCQ",
            question: "Where is the correct place to insert a JavaScript?",
            options: [
              "The <head> section",
              "Both the <head> section and the <body> section are correct",
              "The <body> section",
            ],
            author: "2",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "0",
            hint: "1",
            code: "Q-8991",
            attachment: null,
            createdAt: "2024-06-04T17:00:28.113Z",
            updatedAt: "2024-06-04T17:00:28.113Z",
          },
          {
            id: 30,
            title:
              "The external JavaScript file must contain the <script> tag.",
            question_type: "",
            question:
              "The external JavaScript file must contain the <script> tag.",
            options: ["False", "True"],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "",
            hint: "",
            code: "Q-9066",
            attachment: null,
            createdAt: "2024-06-04T17:42:50.233Z",
            updatedAt: "2024-06-04T17:42:50.233Z",
          },
          {
            id: 29,
            title:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            question_type: "MCQ",
            question:
              'What is the correct syntax for referring to an external script called "xxx.js"?',
            options: [
              '<script href="xxx.js">',
              '<script name="xxx.js">',
              '<script href="xxx.js">',
            ],
            author: "",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "1",
            code: "Q-8832",
            attachment: null,
            createdAt: "2024-06-04T17:38:55.822Z",
            updatedAt: "2024-06-04T17:38:55.822Z",
          },
          {
            id: 31,
            title: 'How do you write "Hello World" in an alert box?',
            question_type: "MCQ",
            question: 'How do you write "Hello World" in an alert box?',
            options: [
              'msgBox("Hello World");',
              'alert("Hello World");',
              'alertBox("Hello World");',
              'msg("Hello World");',
            ],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "3",
            hint: "1",
            code: "Q-2943",
            attachment: null,
            createdAt: "2024-06-04T17:44:37.858Z",
            updatedAt: "2024-06-04T17:44:37.858Z",
          },
          {
            id: 32,
            title: "How do you create a function in JavaScript?",
            question_type: "MCQ",
            question: "How do you create a function in JavaScript?",
            options: [
              "function myFunction()",
              "function = myFunction()",
              "function:myFunction()",
            ],
            author: "4",
            tag: [
              {
                tag: 16,
              },
            ],
            correct_ans: "2",
            hint: "3",
            code: "Q-7609",
            attachment: null,
            createdAt: "2024-06-04T17:45:59.866Z",
            updatedAt: "2024-06-04T17:45:59.866Z",
          },
        ],
        result: [
          // {
          //   id: 7,
          //   quiz_id: 20,
          //   course_id: 16,
          //   user_id: 2,
          //   right_ans: null,
          //   total_ques: 6,
          //   answers: ["0", "1", "1", "1", "1", "1"],
          //   quiz_mark: 0,
          //   quiz_ans: null,
          //   isComplete: "true",
          //   status: "complete",
          //   note: null,
          //   createdAt: "2024-06-04T19:05:27.895Z",
          //   updatedAt: "2024-06-04T19:05:27.895Z",
          // },
        ],
        code: "QZ-1898",
        attachment: null,
        createdAt: "2024-06-04T18:06:08.537Z",
        updatedAt: "2024-06-04T18:06:08.537Z",
      },
      title: "JavaScript  Third Week - 3",
      units: [
        {
          id: 61,
          title: "Legacy JavaScript Algorithms and Data Structures - 9 ",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "19:20",
          start_date: "2024-06-17",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-7978",
          free_unit: "false",
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/74977159278?pwd=cailA8zfbxehme0zFRwHClAsezCdds.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/74977159278?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc0OTc3MTU5Mjc4IiwiZXhwIjoxNzE3NTI1MzU5LCJpYXQiOjE3MTc1MTgxNTksImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.zvrnS44aciIYlBbtuyV5qUP4i9_ovMStn6NzNrDm0nY",
          zoom_info: {
            id: 74977159278,
            type: 2,
            uuid: "1wOujGefS/OAEoY8FkZIEw==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/74977159278?pwd=cailA8zfbxehme0zFRwHClAsezCdds.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/74977159278?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc0OTc3MTU5Mjc4IiwiZXhwIjoxNzE3NTI1MzU5LCJpYXQiOjE3MTc1MTgxNTksImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.zvrnS44aciIYlBbtuyV5qUP4i9_ovMStn6NzNrDm0nY",
            created_at: "2024-06-04T16:22:39Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:22:39Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "cailA8zfbxehme0zFRwHClAsezCdds.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:22:39.801Z",
          updatedAt: "2024-06-10T19:19:01.422Z",
        },
        {
          id: 63,
          title: "Javascript in react js - 10",
          description:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita soluta dicta omnis animi dolores excepturi nesciunt perferendis eum, eaque sint repudiandae velit architecto, reiciendis eius aliquam provident incidunt optio blanditiis.</p>",
          author: "",
          start_time: "19:30",
          start_date: "2024-06-18",
          type: "অনলাইন কোর্স",
          tag: null,
          code: "U-7018",
          free_unit: "false",
          unit_duration: "1",
          unit_duration_parameter: "Hours",
          unit_forum: null,
          connect_assigment: null,
          link: "https://us04web.zoom.us/j/76009165849?pwd=hjedgJAepctYzDP5yqijaKBXij4xX4.1",
          video_link:
            "https://drive.google.com/drive/folders/1ojPtdmV7j-BA3I4BlXwHSH-yBN8wfB8b",
          instructor_link:
            "https://us04web.zoom.us/s/76009165849?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc2MDA5MTY1ODQ5IiwiZXhwIjoxNzE3NTI1NjgyLCJpYXQiOjE3MTc1MTg0ODIsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.kzWIBWsyrcoNCgcGnaAWUviCx7Ao7EPEB15QxpknEvA",
          zoom_info: {
            id: 76009165849,
            type: 2,
            uuid: "vLFQjxlKTRmjpJnisPdxRw==",
            topic: "pp",
            status: "waiting",
            host_id: "QopKJDZMSRmb-DSKlpu-Ig",
            duration: 60,
            join_url:
              "https://us04web.zoom.us/j/76009165849?pwd=hjedgJAepctYzDP5yqijaKBXij4xX4.1",
            password: "12334",
            settings: {
              audio: "voip",
              use_pmi: false,
              jbh_time: 0,
              resources: [],
              watermark: false,
              cn_meeting: false,
              focus_mode: false,
              host_video: false,
              in_meeting: false,
              waiting_room: false,
              approval_type: 2,
              breakout_room: {
                enable: false,
              },
              enforce_login: false,
              auto_recording: "none",
              device_testing: false,
              show_join_info: false,
              encryption_type: "enhanced_encryption",
              mute_upon_entry: false,
              private_meeting: false,
              internal_meeting: false,
              join_before_host: true,
              meeting_invitees: [],
              alternative_hosts: "",
              participant_video: false,
              show_share_button: false,
              close_registration: false,
              email_notification: true,
              enforce_login_domains: "",
              host_save_video_order: false,
              allow_multiple_devices: false,
              meeting_authentication: false,
              continuous_meeting_chat: {
                enable: false,
                auto_add_invited_external_users: false,
              },
              push_change_to_calendar: false,
              email_in_attendee_report: false,
              auto_start_meeting_summary: false,
              enable_dedicated_group_chat: false,
              participant_focused_meeting: false,
              sign_language_interpretation: {
                enable: false,
              },
              alternative_host_update_polls: false,
              registrants_confirmation_email: true,
              registrants_email_notification: true,
              alternative_hosts_email_notification: true,
              approved_or_denied_countries_or_regions: {
                enable: false,
              },
              request_permission_to_unmute_participants: false,
            },
            timezone: "Asia/Dhaka",
            start_url:
              "https://us04web.zoom.us/s/76009165849?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlFvcEtKRFpNU1JtYi1EU0tscHUtSWciLCJpc3MiOiJ3ZWIiLCJzayI6IjE2ODQ5ODkyMDg3MTQ4MDk3NzMiLCJzdHkiOjEwMCwid2NkIjoidXMwNCIsImNsdCI6MCwibW51bSI6Ijc2MDA5MTY1ODQ5IiwiZXhwIjoxNzE3NTI1NjgyLCJpYXQiOjE3MTc1MTg0ODIsImFpZCI6ImNuMXlkaHFnUllLdjgtRlZOcTBjRkEiLCJjaWQiOiIifQ.kzWIBWsyrcoNCgcGnaAWUviCx7Ao7EPEB15QxpknEvA",
            created_at: "2024-06-04T16:28:02Z",
            host_email: "binsharf15@gmail.com",
            start_time: "2024-06-04T16:28:02Z",
            pre_schedule: false,
            h323_password: "12334",
            pstn_password: "12334",
            encrypted_password: "hjedgJAepctYzDP5yqijaKBXij4xX4.1",
          },
          quiz: null,
          attachment: null,
          class_status: "pending",
          started_time: null,
          ended_time: null,
          createdAt: "2024-06-04T16:28:02.564Z",
          updatedAt: "2024-06-10T19:19:14.152Z",
        },
      ],
      assignment: {
        id: 10,
        title: "Javascript Assignment 4",
        author: 1,
        subTitle: "Javascript Assignment 4",
        description:
          '<p><span style="color: rgb(77, 81, 86);">Specify the level of expertise or background knowledge required. Outline the main topics, themes, or modules covered in the course.</span></p>',
        timelimit: 1,
        attachmentType: "",
        autoEvaluation: "true",
        attachmentSize: 10,
        includInCourse: 1,
        maximumMarks: 10,
        assignmentSubmissions: "Text Area",
        durationParameter: "Day",
        attachment: null,
        result: [
          {
            id: 1,
            user_id: 2,
            course_id: 8,
            assignment_id: 10,
            assignment_mark: null,
            assignment_link: "",
            assignment_file: {},
            isComplete: "true",
            status: "complete",
            note: null,
            createdAt: "2024-05-26T14:04:06.332Z",
            updatedAt: "2024-05-26T14:04:06.332Z",
          },
        ],
        createdAt: "2024-06-04T16:14:12.741Z",
        updatedAt: "2024-06-04T16:14:12.741Z",
      },
      assignmentRCount: 1,
    },
  ],
  status: "pending",
  createdAt: "2024-06-04T18:49:09.184Z",
  updatedAt: "2024-07-14T18:10:24.686Z",
};
