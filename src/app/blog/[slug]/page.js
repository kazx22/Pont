import React from "react";
import axios from "axios";
import Heading from "@/app/component/blog/Posts/heading";
import MainText from "@/app/component/blog/Posts/mainText";
import parseText from "@/app/functions/parseText";
import MainBody from "@/app/component/blog/Posts/mainBody";
import ma1 from "../../img/MA1.jpg";
import ma2 from "../../img/MA2.jpg";
import ma3 from "../../img/MA3.jpeg";
import ma4 from "../../img/MA4.jpg";

const fetchBlogPost = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/update/${slug}/`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Blog not found");
  }
};
const removeImg = () => {};
const BlogPost = async ({ params }) => {
  const { slug } = params;
  const blog = await fetchBlogPost(slug);
  const heading = "Livelihoods-Annual Report 2022-2023";
  const text = `
  <sh>This is a subheading<sh>
  <par>Currently, PONT runs a fleet of 32 ambulances, in partnership with all four District Health Offices in the Mbale region. PONT motorbike ambulances, and trained drivers, continue to be as busy as ever.<par>
  <ls>Item one - Item two - Item three<ls>
  <img>2<img>
  <sh>This is a subheading2<sh>
  <vid>https://www.youtube.com/embed/KKTop4bJ21I?si=vibAz-jMUJjF-d9T<vid>
  <img>2<img>

  `;

  const mText =
    "The PONT Livelihoods project, set up to provide support for orphans and other vulnerable children, is being delivered through boosting the incomes (livelihoods) of poorer families. This is achieved by assisting with the formation of self-help groups to provide loans for payments such as school fees and materials as well as start-up funds for various income- generating activities, providing business opportunities. There is clear evidence that school attendance has improved as well as regular testimonies from group members about how their livelihoods have been enhanced.";
  if (!blog) {
    return <div className="text-center mt-5">Blog not found</div>;
  }
  const img = [ma1, ma2, ma3, ma4];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">{heading && <Heading head={heading} />}</div>
      <div className="text-left">{mText && <MainText text={mText} />}</div>
      <div>
        <MainBody body={parseText(text)} img={img} />
      </div>
      {/* <h1 className="text-4xl font-bold mb-4">{blog.title}</h1> */}
      {/* <p className="text-gray-700 mb-8">{blog.content}</p> */}
    </div>
  );
};

export default BlogPost;
