import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Suggestion from "../Common/Suggestion";
import { get } from "../../api/axious";
import { AiFillEdit } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

const CurriculumInput = ({
  i,
  handleInputChange,
  handleDelete,
  data,
  handleDragOver,
  handleDragStart,
  handleDrop,
  btnHide,
  handleView,
  handleEdit,
}) => {
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [showSuggesstion, setShowSuggesstion] = useState(false);

  const handleUnitSuggesstion = async (i, event) => {
    handleInputChange(i, event);
    const query_text = event.target.value;
    if (query_text) {
      setShowSuggesstion(true);
      setLoading(true);
      try {
        const res = await get(`api/unit/search/${query_text}`);
        console.log(res);
        if (res) {
          setSearchData(res.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    } else {
      setShowSuggesstion(false);
      setSearchData([]);
    }
  };
  const handleQuizSuggesstion = async (i, event) => {
    handleInputChange(i, event);
    const query_text = event.target.value;
    if (query_text) {
      setShowSuggesstion(true);
      setLoading(true);
      try {
        const res = await get(`api/quiz/search/${query_text}`);
        console.log(res);
        if (res) {
          setSearchData(res.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    } else {
      setShowSuggesstion(false);
      setSearchData([]);
    }
  };

  const handleAssigenmentSuggesstion = async (i, event) => {
    handleInputChange(i, event);
    const query_text = event.target.value;
    if (query_text) {
      setShowSuggesstion(true);
      setLoading(true);
      try {
        const res = await get(`api/assignment/search/${query_text}`);
        console.log(res);
        if (res) {
          setSearchData(res.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log("Failed to get search/", error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    } else {
      setShowSuggesstion(false);
      setSearchData([]);
    }
  };

  return (
    <div key={data.id}>
      {data.type === "section" ? (
        <div
          draggable
          onDragStart={() => handleDragStart(i)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, i)}
          className="flex items-center  gap-2"
        >
          <input
            type="text"
            name="section"
            autoComplete="off"
            value={data.section}
            onChange={(event) => handleInputChange(i, event)}
            className="text-black w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#7EE7D2] input_filed_gray mt-1.5"
            placeholder={`Enter ${data.type}`}
          />
          {btnHide ? (
            ""
          ) : (
            <div className="text-[18px] text-red-600 font-bold mt-2 cursor-pointer">
              <RxCrossCircled onClick={() => handleDelete(i)} />
            </div>
          )}
        </div>
      ) : data.type === "unit" ? (
        <div
          draggable
          onDragStart={() => handleDragStart(i)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, i)}
          className="pl-5 flex items-center gap-2"
        >
          <p>Unit :</p>
          <Suggestion
            i={i}
            type="unit"
            obj_name="title"
            loading={loading}
            data={searchData}
            handleInputChange={handleInputChange}
            showSuggesstion={showSuggesstion}
            setShowSuggesstion={setShowSuggesstion}
          >
            <input
              type="text"
              name="unit"
              autoComplete="off"
              value={data.unit}
              onChange={(event) => handleUnitSuggesstion(i, event)}
              className="text-black w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-yellow-500 outline-[#7EE7D2] input_filed_gray mt-1.5"
              placeholder={`Enter ${data.type}`}
            />
          </Suggestion>
          {btnHide ? (
            ""
          ) : (
            <div className="flex items-center gap-1">
              <div className="text-[18px] text-gray-500 font-bold mt-2 cursor-pointer">
                <GrDocumentText onClick={() => handleView(data, "unit")} />
              </div>

              <div className="text-[20px] text-gray-500 font-bold mt-2 cursor-pointer">
                <AiFillEdit onClick={() => handleEdit(data, "unit")} />
              </div>

              <div className="text-[18px] text-red-600 font-bold mt-2 cursor-pointer">
                <RxCrossCircled onClick={() => handleDelete(i)} />
              </div>
            </div>
          )}
        </div>
      ) : data.type === "quiz" ? (
        <div
          draggable
          onDragStart={() => handleDragStart(i)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, i)}
          className=" flex items-center gap-2"
        >
          <p>Quiz :</p>
          <Suggestion
            i={i}
            type="quiz"
            obj_name="title"
            loading={loading}
            data={searchData}
            handleInputChange={handleInputChange}
            showSuggesstion={showSuggesstion}
            setShowSuggesstion={setShowSuggesstion}
          >
            <input
              type="text"
              name="quiz"
              value={data.quiz}
              autoComplete="off"
              onChange={(event) => handleQuizSuggesstion(i, event)}
              className="text-black w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-orange-500 outline-[#7EE7D2] input_filed_gray mt-1.5"
              placeholder={`Enter ${data.type}`}
            />
          </Suggestion>
          {btnHide ? (
            ""
          ) : (
            <div className="flex items-center gap-1">
              <div className="text-[18px] text-gray-500 font-bold mt-2 cursor-pointer">
                <GrDocumentText onClick={() => handleView(data, "quiz")} />
              </div>

              <div className="text-[20px] text-gray-500 font-bold mt-2 cursor-pointer">
                <AiFillEdit onClick={() => handleEdit(data, "quiz")} />
              </div>

              <div className="text-[18px] text-red-600 font-bold mt-2 cursor-pointer">
                <RxCrossCircled onClick={() => handleDelete(i)} />
              </div>
            </div>
          )}
        </div>
      ) : data.type === "assignment" ? (
        <div
          draggable
          onDragOver={handleDragOver}
          onDragStart={() => handleDragStart(i)}
          onDrop={(event) => handleDrop(event, i)}
          className=" flex items-center gap-2"
        >
          <p>Assignment :</p>
          <Suggestion
            i={i}
            type="assignment"
            obj_name="title"
            loading={loading}
            data={searchData}
            handleInputChange={handleInputChange}
            showSuggesstion={showSuggesstion}
            setShowSuggesstion={setShowSuggesstion}
          >
            <input
              type="text"
              name="assignment"
              autoComplete="off"
              value={data.assignment}
              onChange={(event) => handleAssigenmentSuggesstion(i, event)}
              className="text-black w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-orange-500 outline-[#7EE7D2] input_filed_gray mt-1.5"
              placeholder={`Enter ${data.type}`}
            />
          </Suggestion>
          {btnHide ? (
            ""
          ) : (
            <div className="flex items-center gap-1">
              <div className="text-[18px] text-gray-500 font-bold mt-2 cursor-pointer">
                <GrDocumentText
                  onClick={() => handleView(data, "assignment")}
                />
              </div>

              <div className="text-[20px] text-gray-500 font-bold mt-2 cursor-pointer">
                <AiFillEdit onClick={() => handleEdit(data, "assignment")} />
              </div>

              <div className="text-[18px] text-red-600 font-bold mt-2 cursor-pointer">
                <RxCrossCircled onClick={() => handleDelete(i)} />
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default CurriculumInput;
