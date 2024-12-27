import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContexts";
import { IoIosCloseCircle } from "react-icons/io";
import { useData } from "../contexts/DataContexts";

const Login = () => {
  const { login } = useAuth();
  const { navigateHomePage, navigateSignupPage, BACKEND_URL } = useData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState()
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/login/`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // console.log("Login Successfull", response.data);
        login({ username });
        setError("");
        navigate("/");
      }
    } catch (error) {
      setError("Invalid credentials");
    }finally {
      setLoading(false); 
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="p-6 flex flex-col items-center justify-center relative border border-[#E2E8F0] rounded-md shadow-md
      xs:w-[85%]
      sm:w-[70%]
      md:w-[60%]
      lg:w-[40%]
      ">
        <div className="flex items-center gap-2">
          <img className="w-7" src="/icons/byway-logo.png" alt="logo" />
          <p className="text-sm font-light">Byway</p>
        </div>
        <h2 className="xs:text-center text-2xl mt-4 font-semibold">Login to your Account</h2>
        <form className="flex flex-col mt-4
         xs:w-[95%]
         sm:w-[65%]
        " onSubmit={handleLogin}>
          {/* username */}
          <section className="flex flex-col text-txtColor">
            <label className="text-lg font-light" htmlFor="username">
              Username
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </section>
          {/* password */}
          <section
            className="
          flex flex-col mt-4 text-txtColor
          "
          >
            <label className="text-lg font-light" htmlFor="password">
              Password
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </section>
          {/* login button */}
          <button
            className="bg-blue-400 text-sm font-light p-2 rounded-md mt-10 text-white"
            type="submit"
            disabled={loading} 
          >
            {loading ? "Logging in..." : "Login"} 
          </button>
        </form>
        {/* if user dont have an account */}
        <p className="mt-8 text-xs text-txtColor font-light text-center">
          Create an account
          <span
            onClick={navigateSignupPage}
            className="ml-1 text-sm text-blue-400 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
        {/* to close login page */}
        <IoIosCloseCircle
          onClick={navigateHomePage}
          className="text-lg cursor-pointer absolute top-6 right-8"
        />
      </div>
      {error && <p className="text-xs text-red font-light text-center">*Login failed*</p>}
    </div>
  );
};

export default Login;
