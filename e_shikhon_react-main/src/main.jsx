import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import useAuth from "./store/useAuth.js";
import { ToastProvider } from "./provider/ToastProvider.jsx";
// export const AuthContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthContext.Provider value={useAuth()}> */}
    <RouterProvider router={router} />
    <ToastProvider />
    {/* </AuthContext.Provider> */}
  </React.StrictMode>
);
