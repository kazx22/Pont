import React from "react";
import axios from "axios";
import fetchSelectedProject from "@/app/functions/fetchSelectedProjects";

const fetchProjectPost = async (slug) => {
  try {
    // console.log(fetchSelectedProject(0));
    return fetchSelectedProject(slug);
  } catch (error) {
    throw new Error("Project not found");
  }
};

const Projects = async ({ params }) => {
  const { slug } = params;
  const project = await fetchProjectPost(slug);

  if (!project) {
    return <div className="text-center mt-5">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        {project.page_motivation_text1}
      </h1>
      {/* <p className="text-gray-700 mb-8">{project.content}</p> */}
    </div>
  );
};

export default Projects;
