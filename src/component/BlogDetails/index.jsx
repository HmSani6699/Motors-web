import React from "react";
import Navbar from "../../Pages/Navbar";
import BlogDetailsBanner from "./BlogDetailsBanner";
import Footer from "../../Pages/Footer";
import Aerodynamics from "./Aerodynamics";

const BlogDetails = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:pt-[150px] pt-[90px] max-w-[1142px] mx-auto">
        <BlogDetailsBanner />
        <Aerodynamics />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
