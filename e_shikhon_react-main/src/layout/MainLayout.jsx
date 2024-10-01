import React, { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/sheared/Footer";
import Navbar from "../components/sheared/Navbar";
import useAuth from "../store/useAuth";
import socketIO from "socket.io-client";
const API_URL = import.meta.env.VITE_BASE_URL;
export const AuthContext = createContext();
export const SocketContext = createContext();
const socket = socketIO.connect(API_URL);
const socketInfo = {
  socket,
};

const MainLayout = () => {
  const location = useLocation();
  const noNavbarFooter =
    location.pathname.includes("admin") ||
    location.pathname.includes("student") ||
    location.pathname.includes("instructor") ||
    location.pathname.includes("parent") ||
    location.pathname.includes("agent") ||
    location.pathname.includes("zoom-meeting");
  return (
    <>
      <AuthContext.Provider value={useAuth()}>
        <SocketContext.Provider value={socketInfo}>
          {noNavbarFooter || <Navbar />}
          <Outlet />
          <Footer></Footer>
        </SocketContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default MainLayout;
