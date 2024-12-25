import React from "react";
import { useData } from "../contexts/DataContexts";

const Categories = () => {
  const { categories , navigate, BACKEND_URL} = useData();
  
  const displayedCategories = categories.slice(0,4)

  const handleSeeAll = () => {
    navigate("/all-categories")
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
          Top Categories
        </h2>
        <h6
          className="
        text-xs text-bColor hover:underline cursor-pointer
        " onClick={handleSeeAll}
        >
          See All
        </h6>
      </section>

      <section className="
      w-full flex flex-wrap  gap-3 items-center p-2 transition-all duration-300 ease-in-out
      xs:justify-evenly
      md:justify-between
      ">
        {displayedCategories.map((el) => {
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

export default Categories;
