import React from "react";

const HeroSection = () => {
  return (
    <div
      className="
    flex flex-col-reverse items-center justify-between
    xs:w-[85%] xs:gap-7
    sm:w-[90%]
    md:flex-row md:gap-0
    "
    > 
      <section
        className="
      xs:flex xs:items-start xs:justify-center xs:flex-col xs:gap-6"
      >
        <h1
          className="text-black font-extrabold
        xs:text-3xl
        md:text-4xl
        lg:text-5xl
        "
        >
          Unlock Your Potential <br /> with Byway
        </h1>
        <p className="text-sm text-txtColor">
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to <br /> personal and professional growth, and
          we're here to guide <br /> you on your journey to success.{" "}
        </p>
        <button className="bg-bColor rounded-md px-3 py-2 text-white text-sm">
          Start your instructor journey
        </button>
      </section>
      <section className="mr-8">
        <img
          className="md:w-fit xs:w-80"
          src="/images/hero-image.png"
          alt="hero-image"
        />
      </section>
    </div>
  );
};

export default HeroSection;
