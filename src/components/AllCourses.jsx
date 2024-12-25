import React from "react";
import { useData } from "../contexts/DataContexts";
import { IoMdArrowBack } from "react-icons/io";
import HomeNavbar from "./HomeNavbar";
import MenuSection from "./MenuSection";

const AllCourses = () => {
  const { courses, navigate , handleCourseClick, BACKEND_URL} = useData();

  const back = () => {
    navigate("/")
  }
  
  return (
    <div className=" w-full flex items-center justify-center flex-col gap-8 mt-2">
      {/* navbar */}
      <HomeNavbar />
      <hr className="w-full" />
      {/* menu */}
      <MenuSection />
      {/* all courses */}
      <section
        className="
      w-[90%] flex items-center justify-start gap-6
      "
      >
        <IoMdArrowBack className="text-2xl cursor-pointer" onClick={back} />
        <h2
          className="
      text-txtColor font-semibold
        xs:text-xl
        sm:text-2xl
        "
        >
          Top Courses
        </h2>
      </section>

      <section
        className="
       w-[90%] flex flex-wrap  gap-3 items-center p-2 transition-all duration-300 ease-in-out
       xs:justify-evenly
       md:justify-evenly
       lg:justify-between
      "
      >
        {courses.map((el) => {
          return (
            <div
              onClick={() => handleCourseClick(el)}
              key={el.id}
              className=" shadow-md mt-6
                flex flex-col gap-2 border border-[#E2E8F0] rounded-md items-center justify-center p-3 cursor-pointer
                xs:w-[60%]
                sm:w-[43%]
                md:w-[32%]
                lg:w-[23%]
                "
            >
              <img
                src={`${BACKEND_URL}/${el.thumbnail}`}
                alt="course_thumbnail"
              />
              <div className="
              w-full p-3 flex flex-col gap-2
              ">
                <h4
                  className="
                    text-sm font-medium text-txtBcolor
                    "
                >
                  {el.title}
                </h4>
                <p
                  className="
                    text-sm font-extralight text-txtColor
                    "
                >
                  {el.author}
                </p>
                <div
                  className="
                    flex items-center gap-3
                    "
                >
                  <img
                    className="w-14"
                    src={`${BACKEND_URL}/${el.rating_star}`}
                    alt="star"
                  />
                  <p
                    className="
                        text-xs font-normal
                        "
                  >{`(${el.rating_text})`}</p>
                </div>
                <div
                  className="
                    text-xxs font-extralight flex gap-2 text-txtColor
                    "
                >
                  <p>{el.course_hours}.</p>
                  <p>{`${el.lecture_counts} lectures.`}</p>
                  <p>
                    {el.course_level === "B" && "Beginner."}
                    {el.course_level === "I" && "Intermediate."}
                    {el.course_level === "A" && "Advanced."}
                    </p>
                </div>
                <h2 className="
                text-lg font-semibold text-txtColor
                ">{el.price}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllCourses;
