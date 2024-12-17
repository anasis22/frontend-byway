import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-statsBG w-full flex items-center justify-center p-8 mt-10">
      <section className=" w-[90%] flex items-center justify-center  text-txtBcolor
      xs:flex-wrap xs:gap-10
      sm:flex-row sm:flex-nowrap sm:gap-3
      ">
        <div className="text-center">
          <h4 className="font-bold
          xs:text-xl
          md:text-2xl
          ">250+</h4>
          <p
          className="
          xs:text-xs
          md:text-base
          " 
          >Courses by our best mentors</p>
        </div>

        <hr className="w-14 rotate-90
        xs:hidden
        sm:block
        " />

        <div className="text-center">
          <h4 className="font-bold
          xs:text-xl
          md:text-2xl "
          >1000+</h4>
          <p
          className="
          xs:text-xs
          md:text-base
          " 
          >Courses by our best mentors</p>
        </div>

        <hr className="w-14 rotate-90
        xs:hidden
        sm:block
        " />

        <div className="text-center">
          <h4 className="font-bold
          xs:text-xl
          md:text-2xl
          ">15+</h4>
          <p
          className="
          xs:text-xs
          md:text-base
          " 
          >Courses by our best mentors</p>
        </div>

        <hr className="w-14 rotate-90
        xs:hidden
        sm:block
        " />

        <div className="text-center">
          <h4 className="font-bold
          xs:text-xl
          md:text-2xl
          ">2400+</h4>
          <p className="
          xs:text-xs
          md:text-base
          ">Courses by our best mentors</p>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
