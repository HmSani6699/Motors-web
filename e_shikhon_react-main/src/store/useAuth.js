import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const Token = localStorage.getItem("token");
    if (Token) {
      getUserData(Token);
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const getUserData = (token) => {
    if (token) {
      const Token = localStorage.getItem("token");
      setToken(Token);
      const Data = localStorage.getItem("user");
      const parse = Data ? JSON.parse(Data) : {};
      setUser(parse);
    } else {
      console.log("Token not found. Please login");
    }
  };

  return {
    user,
    setUser,
    token,
    logout,
    getUserData,
  };
};

export default useAuth;
