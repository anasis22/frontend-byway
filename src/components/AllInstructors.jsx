import React from "react";
import { useData } from "../contexts/DataContexts";
import { IoMdArrowBack } from "react-icons/io";
import HomeNavbar from "./HomeNavbar";
import MenuSection from "./MenuSection";

const AllInstructors = () => {
  const { instructors, navigateToBack, BACKEND_URL } = useData();

  return (
    <div
      className="
      w-full flex items-center justify-center flex-col gap-8 mt-2
    "
    >
      {/* navbar */}
      <HomeNavbar />
      <hr className="w-full" />
      {/* menu */}
      <MenuSection />
      {/* all instructors */}
      <section
        className="
      w-[90%] flex items-center justify-start gap-6
      "
      >
        <IoMdArrowBack
          className="text-2xl cursor-pointer"
          onClick={navigateToBack}
        />
        <h2
          className="
         text-txtColor font-semibold
        xs:text-xl
        sm:text-2xl
        "
        >
          Top Instructors
        </h2>
      </section>

      <section
        className="
       w-[90%] flex flex-wrap  gap-3 items-center p-4 transition-all duration-300 ease-in-out
       xs:justify-evenly
       md:justify-evenly
       lg:justify-between
      "
      >
        {instructors.map((el) => {
          return (
            <div
              key={el.id}
              className=" shadow-md mt-6
                flex flex-col gap-2 border border-[#E2E8F0] rounded-md items-center justify-center p-3 cursor-pointer
                xs:w-[70%]
                sm:w-[43%]
                md:w-[32%]
                lg:w-[23%]
                "
            >
              <img
                src={`${BACKEND_URL}${el.instructor_image}`}
                alt="img"
              />

              <h3 className="text-base font-medium text-txtBcolor">
                {el.name}
              </h3>
              <p
                className="
                    text-xs font-extralight text-txtColor
                    "
              >
                {el.course_name}
              </p>
              <hr className="w-full" />
              <div className="flex items-center gap-12 justify-between">
                <section className="flex items-center gap-2">
                  <img
                    className="w-5"
                    src={`${BACKEND_URL}${el.rating_star}`}
                    alt="star"
                  />
                  <p className="text-xs font-medium">{el.rating_text}</p>
                </section>
                <p className="text-xxs font-extralight">
                  {el.students_enrolled_count}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllInstructors;
