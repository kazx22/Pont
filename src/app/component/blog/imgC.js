import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchBlogPost = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/view/`
    );

    const blogPost = response.data.find((item) => item.id === slug);

    if (!blogPost) {
      throw new Error("Blog post not found");
    }

    return blogPost;
  } catch (error) {
    throw new Error(error.message || "Blog not found");
  }
};

const ImgC = ({ blog, text }) => {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        const data = await fetchBlogPost(blog.id);
        setBlogData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadBlogData();
  }, [blog.id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogData) {
    return <div>Loading...</div>;
  }

  const bulletins = text.split("-").map(Number);
  console.log(bulletins);

  return (
    <div>
      {bulletins.length === 1 && (
        <div className="w-[80%] h-full mt-10 ml-[375px]">
          {bulletins.map((item) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${
              blogData[`image_field_${item}`]?.image
            }`;
            console.log(imageUrl);
            return (
              imageUrl && (
                <img
                  key={item}
                  src={imageUrl}
                  alt={`Bulletin image ${item}`}
                  className="rounded-md"
                />
              )
            );
          })}
        </div>
      )}
      {bulletins.length === 3 && (
        <div className="flex gap-32 w-[80%] h-full mt-10 ">
          {bulletins.map((item) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${
              blogData[`image_field_${item}`]?.image
            }`;
            console.log(imageUrl);
            return (
              imageUrl && (
                <img
                  key={item}
                  src={imageUrl}
                  alt={`Bulletin image ${item}`}
                  className="w-[600px] h-[300px] rounded-md"
                />
              )
            );
          })}
        </div>
      )}
      {bulletins.length === 2 && (
        <div className="flex gap-32 w-[80%] h-full mt-10 mx-auto">
          {bulletins.map((item) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${
              blogData[`image_field_${item}`]?.image
            }`;
            console.log(imageUrl);
            return (
              imageUrl && (
                <img
                  key={item}
                  src={imageUrl}
                  alt={`Bulletin image ${item}`}
                  className="h-[500px] w-[500px] rounded-md"
                />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImgC;
