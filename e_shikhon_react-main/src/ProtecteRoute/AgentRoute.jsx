import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AgentRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getUserToken() {
      try {
        const token = window.localStorage.getItem("token");
        const json = localStorage.getItem("user");
        const user = JSON.parse(json);
        setToken(token);
        setUser(user);
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    }

    getUserToken();
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (token && user?.roles?.roleName === "Agent") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default AgentRoute;
