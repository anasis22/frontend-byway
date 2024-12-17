import React from "react";
import { useData } from "../contexts/DataContexts";

const OtherDetailsOfCourse = () => {
  const { selectedCourse } = useData();

  return (
    <div
      className=" w-[90%]
    xs:flex flex-col items-center justify-center
    md:block
    "
    >
      {/* first */}
      <section
        className="flex mt-8
      xs:w-full xs:gap-3
      md:w-[35%] md:gap-6
      "
      >
        <button className="bg-[#EFF6FF] border border-[#E2E8F0] rounded-md px-4 py-3 text-xs font-light text-txtBcolor">
          Description
        </button>
        <button className="border border-[#E2E8F0] rounded-md px-4 py-3 text-xs font-light text-txtBcolor">
          Instructor
        </button>
        <button className="border border-[#E2E8F0] rounded-md px-4 py-3 text-xs font-light text-txtBcolor">
          Syllabus
        </button>
        <button className="border border-[#E2E8F0] rounded-md px-4 py-3 text-xs font-light text-txtBcolor">
          Reviews
        </button>
      </section>

      {/* hr */}
      <hr
        className="mt-6
      xs:w-full
      md:w-[55%]
      "
      />

      {/* second */}
      <section
        className="flex flex-col gap-6
       xs:w-full
       md:w-[55%]
      "
      >
        <div className="mt-6">
          <h2 className="text-txtBcolor font-semibold">Course Description</h2>
          <p className="mt-2 text-xs text-txtColor font-light break-words">
            {selectedCourse.course_description}
          </p>
        </div>
        <div className="w-full">
          <h2 className="text-txtBcolor font-semibold">Certification</h2>
          <p className="mt-2 w-full text-xs text-txtColor font-light break-words">
            At Byway, we understand the significance of formal recognition for
            your hard work and dedication to continuous learning. Upon
            successful completion of our courses, you will earn a prestigious
            certification that not only validates your expertise but also opens
            doors to new opportunities in your chosen field.
          </p>
        </div>
      </section>

      {/* hr */}
      <hr
        className="mt-6
      xs:w-full
      md:w-[55%]
      "
      />

      {/* third */}
      <section
        className="flex flex-col gap-5
      xs:w-full
      md:w-[55%]
      "
      >
        <h2 className="text-txtBcolor font-semibold mt-5">Instructor</h2>
        <div>
          <h2 className="text-blue-500 font-semibold">
            {selectedCourse.author}
          </h2>
          <p className="text-sm font-light text-txtColor">
            {selectedCourse.title}
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <img
            className="w-24"
            src={`http://127.0.0.1:8000/${selectedCourse.author_icon}`}
            alt="author"
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img className="w-4 h-5" src="/icons/achive.png" alt="achive" />
              <p className="text-xs font-light">40,445 Reviews</p>
            </div>
            <div className="flex gap-2">
              <img className="w-4 h-5" src="/icons/cap.png" alt="cap" />
              <p className="text-xs font-light">500 Students</p>
            </div>
            <div className="flex gap-2">
              <img className="w-4 h-5" src="/icons/play.png" alt="play" />
              <p className="text-xs font-light">15 Courses</p>
            </div>
          </div>
        </div>
        <p className="mt-2 w-full text-xs text-txtColor font-light break-words">
          With over a decade of industry experience, Ronald brings a wealth of
          practical knowledge to the classroom. He has played a pivotal role in
          designing user-centric interfaces for renowned tech companies,
          ensuring seamless and engaging user experiences.
        </p>
      </section>

      {/* hr */}
      <hr
        className="mt-6
      xs:w-full
      md:w-[55%]
      "
      />

      {/* fourth */}

      <section
        className="flex flex-col gap-5
      xs:w-full
      md:w-[55%]
      "
      >
        <h2 className="text-txtBcolor font-semibold mt-5">Syllabus</h2>
        <section
          className="
      w-full
      "
        >
          <div
            className="
        flex items-center justify-between border rounded-tr-md rounded-tl-md border-b-0 p-4
        "
          >
            <div className="flex items-center gap-6">
              <img className="w-3" src="/icons/down-arrow.png" alt="down" />
              <h2
                className="text-txtBcolor
              xs:text-sm xs:font-medium
              md:text-base md:font-semibold
              "
              >
                Introduction to UX Design
              </h2>
            </div>
            <div
              className="flex items-center gap-6 text-txtColor
            xs:text-xxs xs:font-extralight
            md:text-xs md:font-light
            "
            >
              <p>5 Lessons</p>
              <p>1 hour</p>
            </div>
          </div>
          <div
            className="
        flex items-center justify-between border p-4 border-b-0
        "
          >
            <div className="flex items-center gap-6">
              <img className="w-3" src="/icons/down-arrow.png" alt="down" />
              <h2
                className="text-txtBcolor
               xs:text-sm xs:font-medium
               md:text-base md:font-semibold
              "
              >
                Basics of User-Centered Design
              </h2>
            </div>
            <div
              className="flex items-center gap-6 text-txtColor
             xs:text-xxs xs:font-extralight
             md:text-xs md:font-light
            "
            >
              <p>7 Lessons</p>
              <p>1.5 hour</p>
            </div>
          </div>
          <div
            className="
        flex items-center justify-between border p-4 border-b-0 
        "
          >
            <div className="flex items-center gap-6">
              <img className="w-3" src="/icons/down-arrow.png" alt="down" />
              <h2
                className="text-txtBcolor
               xs:text-sm xs:font-medium
               md:text-base md:font-semibold
              "
              >
                Elements of User Experience
              </h2>
            </div>
            <div
              className="flex items-center gap-6 text-txtColor
             xs:text-xxs xs:font-extralight
             md:text-xs md:font-light
            "
            >
              <p>5 Lessons</p>
              <p>2 hour</p>
            </div>
          </div>
          <div
            className="
        flex items-center justify-between border p-4 rounded-br-md rounded-bl-md
        "
          >
            <div className="flex items-center gap-6">
              <img className="w-3" src="/icons/down-arrow.png" alt="down" />
              <h2
                className="text-txtBcolor
               xs:text-sm xs:font-medium
               md:text-base md:font-semibold
              "
              >
                Visual Design Principles
              </h2>
            </div>
            <div
              className="flex items-center gap-6 text-txtColor
             xs:text-xxs xs:font-extralight
             md:text-xs md:font-light
            "
            >
              <p>3 Lessons</p>
              <p>1 hour</p>
            </div>
          </div>
        </section>
      </section>

      {/* hr */}
      <hr
        className="mt-6
      xs:w-full
      md:w-[55%]
      "
      />
    </div>
  );
};

export default OtherDetailsOfCourse;
