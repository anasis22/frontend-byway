import React from "react";
import CourseNavbar from "../components/CourseNavbar";
import CourseMenuSection from "../components/CourseMenuSection";
import CourseInfo from "../components/CourseInfo";
import OtherDetailsOfCourse from "../components/OtherDetailsOfCourse";
import LearnerReviews from "../components/LearnerReviews";
import Feedbacks from "../components/Feedbacks";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import MoreCourseLikeThis from "../components/MoreCourseLikeThis";

const CourseDetails = () => {
  return (
    <div
      className="
   w-full flex items-center justify-center flex-col
   "
    >
      <CourseNavbar />
      <hr className='w-full m-0'/>
      <CourseMenuSection />
      <CourseInfo />
      <OtherDetailsOfCourse />
      <LearnerReviews />
      <Feedbacks />
      <MoreCourseLikeThis />
      <Footer />
    </div>
  );
};

export default CourseDetails;
