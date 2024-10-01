import React, { useEffect, useState } from "react";
import Navbar from "../../Pages/Navbar";
import BlogDetailsBanner from "./BlogDetailsBanner";
import Footer from "../../Pages/Footer";
import { get } from "../../api/axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PageLoading from "../LoadingSpinner/PageLoading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  // ========> Handle get Best Selling data <=======//
  useEffect(() => {
    if (id) {
      handleGetBlogData();
    }
  }, [id]);

  const handleGetBlogData = async () => {
    setLoading(true);
    try {
      const res = await get(`/api/blogs/${id}?populate=image`);
      console.log(res);
      setBlogData(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen">
        {loading ? (
          <PageLoading />
        ) : (
          <div className="lg:pt-[150px] pt-[90px] px-[20px] lg:px-0 max-w-[1142px] mx-auto">
            <BlogDetailsBanner data={blogData} />

            <div className="mt-[50px] mb-[30px] lg:mb-[120px]">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h2
                      className="lg:text-[32px]  md:text-[32px] text-[24px] font-[600] leading-[28px] md:leading-[38px] lg:leading-[38px] text-[#141414] font-avenir"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold my-4" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="lg:text-[32px] md:text-[32px] text-[24px] font-[600] leading-[28px] md:leading-[38px] lg:leading-[38px] text-[#141414] font-avenir my-[20px]"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc pl-[25px] lg:pl-[45px]"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="lg:my-[20px] my-[10px]" {...props} />
                  ),
                }}
              >
                {blogData && blogData?.description}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
