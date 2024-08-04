"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="relative mb-6 p-6 border border-gray-200 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>
            <Link href={`/blog/${blog.id}`} passHref>
              <button className="mt-4 px-4 py-2 bg-summer-org text-white font-semibold rounded-[50px] hover:bg-green-700">
                Read More
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
