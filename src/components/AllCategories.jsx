import React from "react";
import { useData } from "../contexts/DataContexts";
import { IoMdArrowBack } from "react-icons/io";
import HomeNavbar from "./HomeNavbar"
import MenuSection from "./MenuSection";

const AllCategories = () => {
  const { categories , navigateToBack , BACKEND_URL} = useData();

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
      {/* all categories */}
      <section
        className="
      w-[90%] flex items-center justify-start gap-6
      "
      >
        <IoMdArrowBack className="text-2xl cursor-pointer" onClick={navigateToBack} />
        <h2
          className="
        text-txtColor font-semibold
        xs:text-xl
        sm:text-2xl
        "
        >
          Top Categories
        </h2>
      </section>

      <section className="
      w-[90%] flex flex-wrap  gap-3 items-center p-2 transition-all duration-300 ease-in-out
      xs:justify-evenly
      md:justify-between
      ">
        {categories.map((el) => {
          return (
            <div key={el.id} className=" shadow-lg mt-6
            flex flex-col gap-3 border border-[#E2E8F0] rounded-md items-center justify-center p-6 cursor-pointer
            xs:w-[60%]
            sm:w-[30%]
            md:w-[20%]
            ">
              <img className="w-16" src={`${BACKEND_URL}/${el.icon}`} alt="categ_icon" />
              <h5 className="text-lg font-semibold">{el.name}</h5>
              <p className="text-sm font-light">{el.course_counts}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllCategories;
