import React, { useContext, useEffect, useRef, useState } from "react";
import downArrowIcon from "../../assets/svg/down_arrow.svg";
import { AuthContext } from "../../layout/MainLayout";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { get } from "../../api/axious";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Menu = () => {
  let menuRef = useRef();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isOpen, setIsOpen] = useState(false);
  const { getUserData, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    let handlerClose = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  });

  // =====> switch acount tto instructor <======//
  const handleSwitchInstructorAcount = async (id) => {
    console.log(id);

    try {
      const res = await get(`/api/auth/new_instructor/${id}`);
      console.log(res);
      if (res?.success) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        window.localStorage.setItem("token", res?.token);
        window.localStorage.setItem("user", JSON.stringify(res?.user));
        getUserData(res.token);
        // notify(res.message);
        // navigate("/instructor");
        window.location.reload();
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
      // toast.error(error?.response?.data?.error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.error}`,
      });
    }
  };
  // =====> switch acount to student  <======//
  const handleSwitchStudentAcount = async (id) => {
    console.log(id);

    try {
      const res = await get(`api/auth/switched_user/${id}`);
      console.log(res);
      if (res?.success) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        window.localStorage.setItem("token", res?.token);
        window.localStorage.setItem("user", JSON.stringify(res?.user));
        getUserData(res.token);
        // notify(res.message);
        // navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        className=" relative cursor-pointer text-black flex justify-center items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[22px]">
          <FaUserCircle />
        </p>
        <p className="leading-tight ">{user?.fullName?.slice(0, 3) + "..."}</p>
        <img src={downArrowIcon} />
      </div>

      <div
        className={`${
          isOpen
            ? "bg-white z-10 rounded-md shadow-2xl absolute top-12 left-0 transition-opacity duration-300 opacity-100 min-w-[200px]"
            : "hidden opacity-0"
        }`}
      >
        <ul>
          {user?.instructor && (
            <li>
              <button
                onClick={() => handleSwitchInstructorAcount(user?.id)}
                className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-blue-200/50`}
              >
                Switch to Instructor {/*<MdOutlineKeyboardArrowRight />  */}
              </button>
            </li>
          )}
          {user?.user_id && (
            <li>
              <button
                onClick={() => handleSwitchStudentAcount(user?.user_id)}
                className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-blue-200/50`}
              >
                Switch to Student {/*<MdOutlineKeyboardArrowRight />  */}
              </button>
            </li>
          )}
          <li>
            <Link
              // to="/admin"
              to={`${
                user?.roles?.roleName == "Admin"
                  ? "/admin"
                  : user?.roles?.roleName == "Student"
                  ? "/student"
                  : user?.roles?.roleName == "Instructor"
                  ? "/instructor"
                  : user?.roles?.roleName == "Institute"
                  ? "/instructor"
                  : user?.roles?.roleName == "Agent"
                  ? "/instructor"
                  : user?.roles?.roleName == "Parent"
                  ? "/parent"
                  : null
              }`}
              className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-blue-200/50`}
            >
              Dashboard {/*<MdOutlineKeyboardArrowRight />  */}
            </Link>
          </li>
          <li>
            <Link
              to={`${
                user?.roles?.roleName == "Admin"
                  ? "/admin/userProfile"
                  : user?.roles?.roleName == "Student"
                  ? "/student/userProfile"
                  : user?.roles?.roleName == "Instructor"
                  ? "/instructor/userProfile"
                  : user?.roles?.roleName == "Institute"
                  ? "/instructor"
                  : user?.roles?.roleName == "Agent"
                  ? "/instructor"
                  : user?.roles?.roleName == "Parent"
                  ? "/parent"
                  : null
              }`}
              className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95 border-b-2 py-2 w-full px-3 hover:bg-blue-200/50`}
            >
              Profile {/*<MdOutlineKeyboardArrowRight />  */}
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              type="button"
              className={`flex items-center justify-between text-[16px] font-[600] transition duration-300 ease-in-out  active:scale-95  py-2 w-full px-3 hover:bg-blue-200/50`}
            >
              Logout {/*<MdOutlineKeyboardArrowRight />  */}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
