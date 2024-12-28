import React, { useEffect } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useData } from "../contexts/DataContexts";
import { useAuth } from "../contexts/AuthContexts";
import axios from "axios";

const CourseInfo = () => {
  const { selectedCourse, navigate, getPurchasedCourses, BACKEND_URL , bnLoading , setBnLoading } =
    useData();
  const { user } = useAuth();
  const links = [
    { path: "/", label: "Home" },
    { path: "/all-courses", label: "Courses" },
    { path: "/course-details", label: `${selectedCourse.title}` },
  ];

  // Course Buy

  const fetchCSRFToken = async () => {
    try {
      setBnLoading(true);
      const response = await axios.get(`${BACKEND_URL}/api/get-csrf-token/`, {
        withCredentials: true, 
      });
      const csrfToken = response.data.csrfToken;

      // console.log("CSRF Token:", csrfToken);
      return csrfToken;
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      return null; 
    }
  };

  const handleBuyNow = async (courseId) => {
    if (!user) {
      alert("You must log in to purchase a course!");
      navigate("/login");
      return;
    }

    try {
      const csrfToken = await fetchCSRFToken();
      if (!csrfToken) {
        alert("Unable to fetch CSRF token. Please try again later.");
        return;
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/buy-course/${courseId}/`,
        {},
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );

      if (response.status === 200) {
        alert("Course purchased successfully!");
        getPurchasedCourses();
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("You already own this course");
      } else {
        console.error("Error purchasing course:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    }finally {
      setBnLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      // console.log(user.username);
      getPurchasedCourses();
    }
  }, [user]);

  return (
    <div
      className="
    bg-[#F8FAFC] w-full flex items-center justify-center m-0
    "
    >
      <section
        className="
      w-[90%] flex justify-between
      xs:flex-col xs:items-center xs:justify-center
      md:flex-row md:items-start md:justify-between
      "
      >
        {/* left */}
        <div
          className=" 
        xs:w-[90%] xs:mt-0
        sm:mt-8
        md:w-[56%]
        "
        >
          <Breadcrumbs links={links} />
          <h1
            className="
          text-txtBcolor text-4xl font-bold
          xs:mt-4
          sm:mt-8
          "
          >
            {selectedCourse.title}
          </h1>
          <p
            className="
          text-txtColor text-sm mt-4
          "
          >
            {selectedCourse.course_description}
          </p>
          <div
            className="
          flex items-center mt-4 text-txtColor
          xs:gap-1 xs:flex-col xs:items-start
          sm:gap-3 sm:flex-row sm:items-center
          "
          >
            <div
              className="
            flex gap-1
            "
            >
              <p
                className="
            text-sm text-[#FEC84B]
            "
              >
                {selectedCourse.rating_five_out_of}
              </p>
              <img className="w-5" src="/icons/ss.png" alt="star" />
            </div>
            <p
              className="
            text-xs
            "
            >{`(${selectedCourse.rating_text})`}</p>
            <hr
              className="w-4 rotate-90 border-txtColor
            xs:hidden
            sm:block
            "
            />
            <p className="text-xs">{`${selectedCourse.course_hours} total.`}</p>
            <p className="text-xs">{`${selectedCourse.lecture_counts} lectures.`}</p>
            <p className="text-xs">
              {selectedCourse.course_level === "B" && "Beginner."}
              {selectedCourse.course_level === "I" && "Intermediate."}
              {selectedCourse.course_level === "A" && "Advanced."}
            </p>
          </div>
          <div
            className="
          flex items-center gap-2 mt-4
          "
          >
            <img
              src={`${BACKEND_URL}${selectedCourse.author_icon}`}
              alt="author_icon"
            />
            <p
              className="
            text-xs font-light text-txtColor
            "
            >
              Created by{" "}
              <span className="text-blue-500">{selectedCourse.author}</span>
            </p>
          </div>
          <div
            className="
          flex items-center gap-2 mt-6 mb-6
          "
          >
            <img className="w-4" src="/icons/language.png" alt="languages" />
            <p className="text-xs font-light text-txtColor">
              {selectedCourse.course_languages}
            </p>
          </div>
        </div>

        {/* right */}
        <div
          className="
        right-24 mt-6 bg-white border border-[#E2E8F0] rounded-md shadow-md
        xs:w-[80%]
        md:w-[30%] md:absolute
        "
        >
          <section
            className="
          flex flex-col p-3"
          >
            <img
              src={`${BACKEND_URL}${selectedCourse.course_detail_thumbnail}`}
              alt="thumbnail"
            />
            <div className="flex items-center gap-3 mt-4">
              <p className="text-txtBcolor text-lg font-semibold">
                {selectedCourse.price}
              </p>
              <p className="text-[#94A3B8] text-sm line-through">
                {selectedCourse.strike_out_price}
              </p>
              <p className="text-sm text-[#16A34A]">50% off</p>
            </div>
            <button className="text-sm text-white bg-black py-2 px-2 rounded-md mt-4">
              Add to Cart
            </button>
            <button
              onClick={() => handleBuyNow(selectedCourse.id)}
              className="text-sm text-black border border-black py-2 px-2 rounded-md mt-4"
            >
              {bnLoading ? "Processing..." : "Buy Now"}
            </button>
          </section>

          <hr className="mt-4" />

          <section className="p-3 mt-2">
            <p className="text-sm">Share</p>
            <img className="w-52 mt-3" src="/icons/social-icons.png" alt="" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default CourseInfo;
