"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../component/blog/blogCard";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/view/`
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handleNextPage = () => {
    if (curPage < totalPages - 1) {
      setCurPage(curPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (curPage > 0) {
      setCurPage(curPage - 1);
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">Error: {error}</div>;
  }

  const startIndex = curPage * postsPerPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" text-center">
        <h1 className="font-lora text-[46px] font-bold border-b-4 border-green-700 inline-block">
          Your support changes lives in Mbale
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {selectedBlogs.map((blog, index) => (
          <div key={index}>
            <BlogCard
              heading={blog.title}
              text={blog.content}
              image={blog.image}
              path={`/blog/${blog.id}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-12">
        <button
          onClick={handlePreviousPage}
          disabled={curPage === 0}
          className={`px-4 py-2 bg-summer-org text-white font-semibold rounded-lg ${
            curPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-700"
          }`}
        >
          ← Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={curPage >= totalPages - 1}
          className={`px-4 py-2 bg-summer-org text-white font-semibold rounded-lg ${
            curPage >= totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-700"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Posts;
