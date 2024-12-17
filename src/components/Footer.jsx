import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1E293B] flex items-center justify-evenly w-full p-12 mt-12
    xs:flex-col
    sm:flex-row
    md:flex-row
    ">
      {/* first */}
      <section className="flex flex-col gap-3">
        <div className="
        flex items-center justify-start
        ">
          <img src="/icons/byway-logo.png" alt="logo" />
          <h4 className="
          text-[#F1F5F9]
          ">Byway</h4>
        </div>
        <p className="
        text-[#CBD5E1] text-xs font-light
        xs:hidden
        md:block
        ">
          Empowering learners through accessible and engaging online <br />
          education.
        </p>
        <p className="text-[#CBD5E1] text-xs font-light">
          Byway is a leading online learning platform dedicated to <br />
          providing high-quality, flexible, and affordable educational <br />
          experiences.
        </p>
      </section>

      {/* second */}
      <section className="
      flex-col gap-3
      xs:hidden
      md:flex
      ">
        <h4 className="text-[#F1F5F9]">Get Help</h4>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Contact Us</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Latest Articles</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">FAQ</p>
      </section>

      {/* third */}
      <section className="
      flex-col gap-3
      xs:hidden
      md:flex
      ">
        <h4 className="text-[#F1F5F9]">Programs</h4>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Art & Design</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Business</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">IT & Software</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Languages</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Programming</p>
      </section>

      {/* fourth */}
      <section className="
      flex flex-col gap-3
      xs:mt-4
      md:mt-0
      ">
        <h4 className="text-[#F1F5F9]">Contact Us</h4>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Address: 123 Main Street, Anytown, CA 12345</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Tel: +(123) 456-7890</p>
        <p className="text-[#CBD5E1] text-xs font-light cursor-pointer hover:underline">Mail: bywayedu@webkul.in</p>
        <div>
            <img className="w-40" src="/icons/social-icons.png" alt="social-icons" />
        </div>
      </section>


    </div>
  );
};

export default Footer;
