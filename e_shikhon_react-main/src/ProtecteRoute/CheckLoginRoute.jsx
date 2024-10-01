import React, { Fragment, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginRoute = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function getToken() {
      try {
        const data = window.localStorage.getItem("token");
        setToken(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    }

    getToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Fragment>{!token ? <Outlet /> : <Navigate to="/" />}</Fragment>;
};

export default CheckLoginRoute;
