import React, { createContext, useState, useContext, useEffect } from "react";
import { useData } from "./DataContexts";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const {setBuyedCourses , getPurchasedCourses} = useData()

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); 
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setBuyedCourses([])
    localStorage.removeItem("user");
    alert("Logged Out Successfully")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
