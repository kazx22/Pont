import React from "react";
import axios from "axios";

const fetchBlogPost = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/update/${slug}/`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Blog not found");
  }
};

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const blog = await fetchBlogPost(slug);

  if (!blog) {
    return <div className="text-center mt-5">Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-8">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
