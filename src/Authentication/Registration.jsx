import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContexts";
import { useData } from "../contexts/DataContexts";
import { IoIosCloseCircle } from "react-icons/io";

const Registration = () => {
  const { login } = useAuth();
  const { navigateLoginPage, navigateHomePage } = useData();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, passwordConfirm } = formData;

    // Validate passwords
    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/register/`, {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        // Successful registration
        login({ username });
        alert("Registration successful. Please log in to your account.");
        setError(null);
        navigate("/login");
      }
    } catch (err) {
      // Display specific error messages from the backend
      setError(
        err.response?.data?.errors || 
        err.response?.data?.error || 
        "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="p-6 flex flex-col items-center justify-center relative border border-[#E2E8F0] rounded-md shadow-md
      xs:w-[85%]
      sm:w-[70%]
      md:w-[60%]
      lg:w-[40%]">
        <div className="flex items-center gap-2">
          <img className="w-7" src="/icons/byway-logo.png" alt="logo" />
          <p className="text-sm font-light">Byway</p>
        </div>
        <h2 className="xs:text-center text-2xl mt-4 font-semibold">Register your Account</h2>
        <form className="flex flex-col mt-4
        xs:w-[95%]
        sm:w-[65%]" onSubmit={handleRegister}>
          {/* Username */}
          <section className="flex flex-col text-txtColor">
            <label className="text-lg font-light" htmlFor="username">
              Username
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </section>
          {/* Email */}
          <section className="flex flex-col text-txtColor mt-4">
            <label className="text-lg font-light" htmlFor="email">
              Email
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </section>
          {/* Password */}
          <section className="flex flex-col text-txtColor mt-4">
            <label className="text-lg font-light" htmlFor="password">
              Password
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </section>
          {/* Confirm Password */}
          <section className="flex flex-col text-txtColor mt-4">
            <label className="text-lg font-light" htmlFor="passwordConfirm">
              Confirm Password
            </label>
            <input
              className="border mt-2 p-2 rounded-md"
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </section>
          {/* Register Button */}
          <button
            className="bg-blue-400 text-sm font-light p-2 rounded-md mt-10 text-white"
            type="submit"
          >
            Register
          </button>
        </form>
        {/* Navigate to Login */}
        <p className="mt-8 text-xs text-txtColor font-light text-center ">
          Already have an Account?
          <span
            onClick={navigateLoginPage}
            className="ml-1 text-sm text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
        {/* Close Registration */}
        <IoIosCloseCircle
          onClick={navigateHomePage}
          className="text-lg cursor-pointer absolute top-6 right-8"
        />
        {error && (
          <p className="text-xs text-red-500 text-center font-light">
            *{typeof error === "string" ? error : "Registration Failed"}*
          </p>
        )}
      </div>
    </div>
  );
};

export default Registration;
