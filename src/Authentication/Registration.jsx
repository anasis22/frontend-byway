import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContexts";
import { useData } from "../contexts/DataContexts";
import { IoIosCloseCircle } from "react-icons/io";

const Registration = () => {
  const { login } = useAuth();
  const { navigateLoginPage, navigateHomePage, BACKEND_URL} = useData();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/register/`, {
        username,
        email,
        password,
        password_confirm: passwordConfirm,
      });

      if (response.status === 201) {
        // console.log("Login Successfull", response.data);
        login({ username });
        alert("Registration successful, Now Log in to Your Account");
        setError("");
        navigate("/login");
      }
    } catch (error) {
      setError(
        "Registration failed: " +
          (error.response?.data?.error || "Unknown error")
      );
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
        <h2 className="xs:text-center text-2xl mt-4 font-semibold">Register your Account</h2>
        <form className="flex flex-col mt-4
        xs:w-[95%]
        sm:w-[65%]
        " onSubmit={handleRegister}>
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
          {/* email */}
          <section className="flex flex-col text-txtColor mt-4">
            <label className="text-lg font-light" htmlFor="email">
              Email
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </section>
          {/* password */}
          <section className="flex flex-col text-txtColor mt-4">
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
          {/* confirm password */}
          <section className="flex flex-col text-txtColor mt-4">
            <label className="text-lg font-light" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </section>
          {/* sign up button */}
          <button
            className="bg-blue-400 text-sm font-light p-2 rounded-md mt-10 text-white"
            type="submit"
          >
            Register
          </button>
        </form>
        {/* if user dont have an account */}
        <p className="mt-8 text-xs text-txtColor font-light text-center ">
            Already have an Account
            <span
              onClick={navigateLoginPage}
              className="ml-1 text-sm text-blue-400 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

          {/* to close login page */}
          <IoIosCloseCircle
            onClick={navigateHomePage}
            className="text-lg cursor-pointer absolute top-6 right-8"
          />
          {error && <p className="text-xs text-red-500 text-center font-light">*Registration Failed*</p>}
      </div>
    </div>
  );
};

export default Registration;
