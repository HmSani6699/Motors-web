import React from "react";
import Navbar from "../../Pages/Navbar";
import BlogDetailsBanner from "./BlogDetailsBanner";
import Footer from "../../Pages/Footer";
import Aerodynamics from "./Aerodynamics";
import Automobile from "./Automobile";
import Technology from "./Technology";
import Conclusion from "./Conclusion";

const BlogDetails = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:pt-[150px] pt-[90px] px-[20px] lg:px-0 max-w-[1142px] mx-auto">
        <BlogDetailsBanner />
        <Aerodynamics />
        <Automobile />
        <Technology />
        <Conclusion />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
