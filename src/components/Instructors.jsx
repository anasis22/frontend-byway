import React from "react";
import { useData } from "../contexts/DataContexts";

const Instructors = () => {
  const { instructors, showAllInstructors, navigate } = useData();

  const displayedInstructors = instructors.slice(0,4)

  const handleSeeAll = () => {
    navigate("/all-instructors")
  }
  return (
    <div
      className="
    w-[90%] mt-10
    "
    >
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
          Top Instructors
        </h2>
        <h6
          className="
        text-xs text-bColor hover:underline cursor-pointer
        "
          onClick={handleSeeAll}
        >
          {showAllInstructors ? "Show Less" : "See All"}
        </h6>
      </section>

      <section
        className="
       w-full flex flex-wrap  gap-3 items-center p-4 transition-all duration-300 ease-in-out
       xs:justify-evenly
       md:justify-evenly
       lg:justify-between
      "
      >
        {displayedInstructors.map((el) => {
          return (
            <div
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
                src={`http://127.0.0.1:8000/${el.instructor_image}`}
                alt="img"
              />

              <h3 className="text-base font-medium text-txtBcolor">{el.name}</h3>
              <p
                className="
                    text-xs font-extralight text-txtColor
                    "
              >
                {el.course_name}
              </p>
              <hr className="w-full"/>
              <div className="flex items-center gap-12 justify-between">
                <section className="flex items-center gap-2">
                  <img
                  className="w-5"
                    src={`http://127.0.0.1:8000/${el.rating_star}`}
                    alt="star"
                  />
                  <p className="text-xs font-medium">{el.rating_text}</p>
                </section>
                <p className="text-xxs font-extralight">{el.students_enrolled_count}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Instructors;
