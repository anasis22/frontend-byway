import React from "react";
import { DataProvider } from "./contexts/DataContexts";
import { AuthProvider } from "./contexts/AuthContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Registration from "./Authentication/Registration";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import AllCategories from "./components/AllCategories";
import AllCourses from "./components/AllCourses";
import AllInstructors from "./components/AllInstructors";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <Router>
        <DataProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-categories" element={<AllCategories />} />
              <Route path="/all-courses" element={<AllCourses />} />
              <Route path="/all-instructors" element={<AllInstructors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/all-courses/course-details" element={<CourseDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </AuthProvider>
        </DataProvider>
      </Router>
    </div>
  );
};

export default App;
