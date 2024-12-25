import React, { useEffect } from "react";
import { useData } from "../contexts/DataContexts";
import { IoMdArrowBack } from "react-icons/io";
import { useAuth } from "../contexts/AuthContexts";

const Cart = () => {
  const { buyedCourses , navigateToBack, BACKEND_URL} = useData();
  const {user} = useAuth()

  return (
    <div className="
    flex items-center justify-center
    ">
      <section className="
      justify-center flex flex-col gap-6
      xs:w-[85%]
      md:w-[80%]
      lg:w-[65%] 
      ">
        <div className="flex items-center gap-5 text-xl mt-4">
            <IoMdArrowBack onClick={navigateToBack} className="cursor-pointer" />
            <p>Back</p>
        </div>
        {/* fetched from purchased course and set to buyed course */}
        {buyedCourses.length > 0
          ? buyedCourses.map((el,i) => {
              return (
                <div key={i} className="flex gap-4 p-4 border shadow-md rounded-lg
                xs:flex-col
                md:flex-row
                ">
                  <img
                    className=""
                    src={`${BACKEND_URL}/${el.course_detail_thumbnail}`}
                    alt=""
                  />
                  <div className="flex flex-col
                  xs:gap-2
                  md:gap-4
                  ">
                    <h1
                      className="
                            text-2xl font-semibold
                            "
                    >
                      {el.title}
                    </h1>
                    <p
                      className="
                            text-xs font-light
                            "
                    >
                      {el.course_description}
                    </p>
                    <p
                      className="
                            text-xl font-medium
                            "
                    >
                      {el.price}
                    </p>
                    <span className="bg-green-600 text-white w-fit px-2 py-.5 text-sm font-light rounded-sm">
                      Buyed
                    </span>
                  </div>
                </div>
              );
            })
          :  <div className="text-center border w-[200px] p-4">
            <h1 className="text-red-400">{user ? "Your cart is empty" : "User not Logged in"}</h1>
            </div>}
      </section>
    </div>
  );
};

export default Cart;
