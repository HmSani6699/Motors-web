import education from "../../assets/svg/education.svg";

const MentorEducation = ({ data }) => {
  console.log(data);

  return (
    <div className="mt-10">
      {data?.length > 0 ? (
        <div className="flex flex-col gap-4 ">
          {data?.map((item, i) => (
            <div className="flex items-center gap-4">
              <span className="">
                <img
                  className="p-2 bg-[#D6E9F5] rounded"
                  src={education}
                  alt=""
                />
              </span>
              <h2 className="text-[#464A53] text-[14px] md:text-[16px] lg:text-[20px] font-[500] leading-[24px]">
                {item?.instituteName}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-[20px] text-center font-semibold ">
            No Data Found !
          </h2>
        </div>
      )}
    </div>
  );
};

export default MentorEducation;
