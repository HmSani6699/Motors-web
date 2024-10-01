import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AuthContext } from "../../../../layout/MainLayout";
import Loading from "../../../../components/sheared/Loading";
import { post } from "../../../../api/axious";
import { MdPendingActions } from "react-icons/md";

const CreateCourse = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  console.log(user, "user +++++.");

  const updateIs_instructore = async () => {
    const payload = {
      user_id: user?.id,
      target_role: 3,
      present_role: user?.roles?.id,
    };
    setLoading(true);
    try {
      const res = await post(`api/promotion/apply`, payload);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        const updatedUser = {
          ...JSON.parse(window.localStorage.getItem("user")),
          status: "pending",
        };
        window.localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      }
    } catch (error) {
      toast.error("Failed to Apply");
      console.log("Failed to Apply/", error?.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full max-w-[1015px] mx-auto px-[13px]">
        <div className=" px-6 bg-white p-2.5 rounded-[10px] w-full mb-5">
          <h2 className="text-[16px] md:text-[24px]  font-[600] text-[#464A53] leading-[40px] text-center mt-5">
            Your have to Apply first for To Become an instructor to Create
            Course.
          </h2>
          <div className="flex justify-center mt-5 mb-5 ">
            {user?.status == "pending" ? (
              <p className="px-4 py-2.5 bg-[#20AC90] rounded-[5px] text-white flex justify-center items-center gap-2">
                <MdPendingActions /> Waiting for Approval
              </p>
            ) : (
              <button
                onClick={updateIs_instructore}
                className="px-4 py-2.5 bg-[#20AC90] rounded-[5px] text-white flex justify-center items-center gap-2 transition duration-300 ease-in-out  active:scale-95"
              >
                {loading ? (
                  <Loading />
                ) : (
                  <span className="flex items-center justify-center  gap-2">
                    <FaChalkboardTeacher /> Apply
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
