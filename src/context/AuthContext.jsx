import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("taskUser"));
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  const login = (user) => {
    localStorage.setItem("taskUser", JSON.stringify(user));
    setCurrentUser(user);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("taskUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;