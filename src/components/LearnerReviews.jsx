import React from "react";

const LearnerReviews = () => {
  return (
    <div className="w-[90%] flex items-start mt justify-between">
      {/* left */}
      <section className="mt-5
      xs:hidden
      md:block
      ">
         <h2 className="text-txtBcolor font-semibold">Learner Reviews</h2>
        <div>
          <div className="flex items-center gap-2 mt-3">
            <img className="w-7" src="/icons/ss-1.png" alt="star" />
            <p className="text-base text-txtBcolor font-semibold">4.6</p>
            <p className="text-xxs font-extralight">146,951 reviews</p>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <img className="w-24" src="/icons/ss-5.png" alt="star" />
              <p className="text-xs text-txtColor font-light">80%</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-20" src="/icons/ss-4.png" alt="star" />
              <p className="text-xs text-txtColor font-light">10%</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-16" src="/icons/ss-3.png" alt="star" />
              <p className="text-xs text-txtColor font-light">5%</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-12" src="/icons/ss-2.png" alt="star" />
              <p className="text-xs text-txtColor font-light">3%</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-7" src="/icons/ss-1.png" alt="star" />
              <p className="text-xs text-txtColor font-light">2%</p>
            </div>
          </div>
        </div>
      </section>

      {/* right */}

      <section className="flex flex-col gap-6 items-start mt-14
      xs:w-full
      md:w-[72%]
      ">
        <h2 className="text-txtBcolor font-semibold
        xs:block
        md:hidden
        ">Learner Reviews</h2>
        <div className="w-full flex items-start border border-[#E2E8F0] rounded-md p-10 shadow-md
        xs:flex-col xs:gap-2
        sm:flex-row sm:gap-32
        ">
          <div className="flex gap-2 items-center">
            <img className="w-12" src="/images/review-img.png" alt="review" />
            <h3 className="text-xs font-semibold">MarkDoe</h3>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/icons/ss-1.png" alt="star" />
              <p className="text-xs font-semibold text-txtBcolor">5</p>
              <p className="text-xxs font-light">
                Reviewed on 22nd March, 2024
              </p>
            </div>
            <p className="text-xs text-txtColor mt-3 leading-6">
              I was initially apprehensive, having no prior design experience.
              But the instructor, John Doe, did an amazing job of breaking down
              complex concepts into easily digestible modules. The video
              lectures were engaging, and the real-world examples really helped
              solidify my understanding.
            </p>
          </div>
        </div>
        <div className="w-full flex items-start border border-[#E2E8F0] rounded-md p-10 shadow-md
         xs:flex-col xs:gap-2
         sm:flex-row sm:gap-32
        ">
          <div className="flex gap-2 items-center">
            <img className="w-12" src="/images/review-img.png" alt="review" />
            <h3 className="text-xs font-semibold">MarkDoe</h3>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/icons/ss-1.png" alt="star" />
              <p className="text-xs font-semibold text-txtBcolor">5</p>
              <p className="text-xxs font-light">
                Reviewed on 22nd March, 2024
              </p>
            </div>
            <p className="text-xs text-txtColor mt-3 leading-6">
              I was initially apprehensive, having no prior design experience.
              But the instructor, John Doe, did an amazing job of breaking down
              complex concepts into easily digestible modules. The video
              lectures were engaging, and the real-world examples really helped
              solidify my understanding.
            </p>
          </div>
        </div>
        <div className="w-full flex items-start border border-[#E2E8F0] rounded-md p-10 shadow-md
         xs:flex-col xs:gap-2
         sm:flex-row sm:gap-32
        ">
          <div className="flex gap-2 items-center">
            <img className="w-12" src="/images/review-img.png" alt="review" />
            <h3 className="text-xs font-semibold">MarkDoe</h3>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/icons/ss-1.png" alt="star" />
              <p className="text-xs font-semibold text-txtBcolor">5</p>
              <p className="text-xxs font-light">
                Reviewed on 22nd March, 2024
              </p>
            </div>
            <p className="text-xs text-txtColor mt-3 leading-6">
              I was initially apprehensive, having no prior design experience.
              But the instructor, John Doe, did an amazing job of breaking down
              complex concepts into easily digestible modules. The video
              lectures were engaging, and the real-world examples really helped
              solidify my understanding.
            </p>
          </div>
        </div>
        <div className="w-full flex items-start border border-[#E2E8F0] rounded-md p-10 shadow-md
         xs:flex-col xs:gap-2
         sm:flex-row sm:gap-32
        ">
          <div className="flex gap-2 items-center">
            <img className="w-12" src="/images/review-img.png" alt="review" />
            <h3 className="text-xs font-semibold">MarkDoe</h3>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/icons/ss-1.png" alt="star" />
              <p className="text-xs font-semibold text-txtBcolor">5</p>
              <p className="text-xxs font-light">
                Reviewed on 22nd March, 2024
              </p>
            </div>
            <p className="text-xs text-txtColor mt-3 leading-6">
              I was initially apprehensive, having no prior design experience.
              But the instructor, John Doe, did an amazing job of breaking down
              complex concepts into easily digestible modules. The video
              lectures were engaging, and the real-world examples really helped
              solidify my understanding.
            </p>
          </div>
        </div>
        <button className="border border-black px-4 py-2 rounded-md text-sm font-light">View More Reviews</button>
      </section>
    </div>
  );
};

export default LearnerReviews;
