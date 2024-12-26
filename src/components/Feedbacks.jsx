import React from "react";
import Slider from "react-slick";
import { useData } from "../contexts/DataContexts";


const Feedbacks = () => {
  const { customerFeedbacks, BACKEND_URL } = useData();
  const settings = {
    dots: false, 
    arrows: true, 
    infinite: true,
    autoplay: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplaySpeed: 4000, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // Small screens (sm)
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
   
  };

  return (
    <div className="w-full mt-10 bg-[#F8FAFC]">
      {/* Section Header */}
      <section className="w-[90%] mx-auto flex items-center justify-between mb-4">
        <h2 className="
      text-txtColor font-semibold mt-6
        xs:text-base
        sm:text-2xl
        ">What Our Customer Say <br /> About Us</h2>
      </section>

      {/* Slider */}
      <div className="w-[90%] mx-auto">
        <Slider {...settings} className="p-2">
          {customerFeedbacks.map((el, i) => (
            <div
              key={i}
              className="
                bg-white p-4 border border-[#E2E8F0] rounded-md shadow-md
                flex flex-col items-start gap-4
              "
            >
              <img
                className="w-6"
                src="/images/quotes.png" 
                alt="quotes"
              />
              <p className="text-sm mt-6">{el.text}</p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="w-12 h-12 rounded-full object-cover" 
                  src={`${BACKEND_URL}${el.image}`}
                  alt="img"
                />
                <div>
                  <p className="text-sm font-semibold">{el.name}</p>
                  <p className="text-xs text-gray-500">{el.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedbacks;

