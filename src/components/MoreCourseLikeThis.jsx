import React from "react";
import { useData } from "../contexts/DataContexts";
import { useNavigate } from "react-router-dom";

const MoreCourseLikeThis = () => {
  const { courses, handleMoreCourseClick, BACKEND_URL } = useData();
  const displayedCourses = courses.slice(0,4)
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate("/all-courses")
  }
  
  return (
    <div className=" w-[90%] mt-10">
      <section
        className="
      w-full flex items-center justify-between 
      "
      >
        <h2
          className="
      text-txtColor font-semibold
        xs:text-xl
        sm:text-2xl
        "
        >
          More Course Like This
        </h2>
        <h6
          className="
        text-xs text-bColor hover:underline cursor-pointer
        "
        onClick={handleSeeAll}
        >
          See All
        </h6>
      </section>

      <section
        className="
       w-full flex flex-wrap  gap-3 items-center p-2 transition-all duration-300 ease-in-out
       xs:justify-evenly
       md:justify-evenly
       lg:justify-between
      "
      >
        {displayedCourses.map((el) => {
          return (
            <div
              onClick={() => handleMoreCourseClick(el)}
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

export default MoreCourseLikeThis;
