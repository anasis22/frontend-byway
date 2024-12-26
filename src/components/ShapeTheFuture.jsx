import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ShapeTheFuture = () => {
  
  return (
    <div
      className="
     w-[85%] mt-12 
    "
    >
      {/* first */}
      <section
        className="
      flex items-center justify-evenly
      xs:flex-col
      md:flex-row
      "
      >
        <img
          className="
        xs:w-[80%]
        sm:w-[60%]
        md:w-[30%]
        "
          src="/images/stf-1.png"
          alt="stf-1"
        />
        <div>
          <h4
            className="
          text-lg font-semibold
          xs:mt-10
          md:mt-0
          "
          >
            Become an Instructor
          </h4>
          <p
            className="
          text-sm font-light mt-2 text-[#1D2939]
          "
          >
            Instructors from around the world teach millions of students on
            Byway. <br /> We provide the tools and skills to teach what you
            love.
          </p>
          <button
            className="
          bg-black text-white flex items-center justify-center gap-3 px-4 mt-3 py-2 rounded-md
          "
          >
            <p
              className="
            text-sm font-light
            "
            >
              Start Your Instructor Journey
            </p>
            <FaArrowRight className="text-sm font-light" />
          </button>
        </div>
      </section>


      {/* second */}
      <section
        className="
      flex items-center justify-evenly mt-8
      xs:flex-col
      md:flex-row-reverse
      "
      >
        <img
          className="
          xs:w-[80%]
          sm:w-[60%]
          md:w-[30%]
        "
          src="/images/stf-2.png"
          alt="stf-1"
        />
        <div>
          <h4
            className="
          text-lg font-semibold
          xs:mt-10
          md:mt-0
          "
          >
            Transform your life through education
          </h4>
          <p
            className="
          text-sm font-light mt-2 text-[#1D2939]
          "
          >
            Learners around the world are launching new careers, advancing in{" "}
            <br /> their fields, and enriching their lives.
          </p>
          <button
            className="
          bg-black text-white flex items-center justify-center gap-3 px-4 mt-3 py-2 rounded-md
          "
          >
            <p
              className="
            text-sm font-light
            "
            >
              Checkout Courses
            </p>
            <FaArrowRight className="text-sm font-light" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShapeTheFuture;
