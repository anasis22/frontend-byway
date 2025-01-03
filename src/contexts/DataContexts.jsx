import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [customerFeedbacks, setCustomerFeedbacks] = useState([]);
  const [menuSection, setMenuSection] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllInstructors, setShowAllInstructors] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [isCourseClicked, setIsCourseClicked] = useState(false);
  const [buyedCourses,setBuyedCourses] = useState([]);
  const [categLoading, setCategLoading] = useState(false); 
  const [courseLoading, setCoursesLoading] = useState(false); 
  const [instructorsLoading, setInstructorsLoading] = useState(false); 
  const [cfLoading, setCfLoading] = useState(false); 
  const [bnLoading, setBnLoading] = useState(false); 
  let buyedCoursesCount = buyedCourses.length
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    getCourses();
    getInstructors();
    getCustomerFeedbacks();
  }, []);

  useEffect(() => {
    if (menuSection) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup to remove class on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuSection]);

  // // get the categories from the backend
  const getCategories = async () => {
    try {
      setCategLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/top-categories/`);
      setCategories(res.data);
      // console.log(res.data);
    } catch (err) {
      console.error(err);
    }finally {
      setCategLoading(false); 
    }
  };

  // // get the course details from the backend
  const getCourses = async () => {
    try {
      setCoursesLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/top-courses/`);
      setCourses(res.data);
      // console.log(res.data);
    } catch (err) {
      console.error(err);
    }finally {
      setCoursesLoading(false); 
    }
  };

  // get the intstructors details from the backend
  const getInstructors = async () => {
    try {
      setInstructorsLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/top-instructors/`);
      setInstructors(res.data);
      // console.log(res.data);
    } catch (err) {
      console.err(err);
    }finally {
      setInstructorsLoading(false); 
    }
  };

  // get the customer feedback details from the backend
  const getCustomerFeedbacks = async () => {
    try {
      setCfLoading(true);
      const res = await axios.get(
        `${BACKEND_URL}/api/customer-feedbacks/`
      );
      setCustomerFeedbacks(res.data);
      // console.log(res.data);
    } catch (err) {
      console.err(err);
    } finally {
      setCfLoading(false); 
    }
  };

  // nav to Back
  const navigateToBack = () => {
    navigate(-1);
  };

  // navigate to home
  const navigateHomePage = () => {
    navigate("/")
  }

  // nav to Cart
  const navigateCart = () => {
      setMenuSection(false);
      navigate("/cart")
  };

  // nav to Login
  const navigateLoginPage = () => {
    navigate("/login")
  };

  // nav to Sign up
  const navigateSignupPage = () => {
    navigate("/register")
  };

  // Handle the Course Click
  const handleCourseClick = async (course) => {
    setSelectedCourse(course);
    navigate("/all-courses/course-details");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle More Course Like This
  const handleMoreCourseClick = (course) => {
    setSelectedCourse(course);
    navigate("/all-courses/course-details");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  // Fetch the Purchased Courses
  const getPurchasedCourses = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/purchased-courses/`, {
        withCredentials: true,
      });
      // console.log(response.data.purchased_courses);
      setBuyedCourses(response.data.purchased_courses)

    } catch (error) {
      console.error("Error fetching purchased courses", error);
      // alert("Error fetching purchased courses", error);
    }
  };

  const value = {
    categories,
    courses,
    instructors,
    menuSection,
    setMenuSection,
    navigate,
    showAllCourses,
    setShowAllCourses,
    showAllInstructors,
    setShowAllInstructors,
    customerFeedbacks,
    selectedCourse,
    setSelectedCourse,
    navigateToBack,
    navigateHomePage,
    navigateLoginPage,
    navigateSignupPage,
    navigateCart,
    isCourseClicked,
    handleCourseClick,
    handleMoreCourseClick,
    getPurchasedCourses,
    buyedCourses,
    setBuyedCourses,
    buyedCoursesCount,
    BACKEND_URL,
    categLoading,
    courseLoading,
    instructorsLoading,
    cfLoading,
    bnLoading,
    setBnLoading
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
