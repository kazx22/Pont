import React from "react";
import axios from "axios";
import Heading from "@/app/component/blog/Posts/heading";
import parseText from "@/app/functions/parseText";
import MainBody from "@/app/component/blog/Posts/mainBody";

const fetchBlogPost = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/update/${slug}/`
    );
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
      <div className="text-center">{<Heading head={blog.title} />}</div>

      <div>
        <MainBody body={parseText(blog.content)} blog={blog} />
      </div>
    </div>
  );
};

export default BlogPost;
