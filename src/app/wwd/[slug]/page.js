import React from "react";
import Impact from "@/app/component/impact";
import fetchSelectedProject from "@/app/functions/fetchSelectedProjects";
import CoverC from "@/app/component/genProject/cover";
import StatC from "@/app/component/genProject/stats";
import parseText from "@/app/functions/parseText";
import MainBody from "@/app/component/blog/Posts/mainBody";
import Post from "@/app/component/post";

const fetchProjectPost = async (slug) => {
  try {
    return fetchSelectedProject(slug);
  } catch (error) {
    throw new Error("Project not found");
  }
};

const Projects = async ({ params }) => {
  const { slug } = params;
  const project = await fetchProjectPost(slug);
  // console.log(project);
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${project.content_gallery1.image_field_1.image}`;
  if (!project) {
    return <div className="text-center mt-5">Project not found</div>;
  }

  return (
    <div className="w-full mx-auto py-8">
      <CoverC
        img={imageUrl ? imageUrl : null}
        head={project.project_types.type_name}
        m1={project.page_motivation_text1}
        m2={project.page_motivation_text2}
      />
      {/* <h1 className="text-4xl font-bold mb-4">
        {project.page_motivation_text1}
      </h1> */}
      {/* <p className="text-gray-700 mb-8">{project.content}</p> */}

      <div className="w-[80%] mx-auto mt-10">
        <div className="flex gap-3">
          <div className=" flex-1">
            <div className="flex justify-between items-center">
              <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
                The Need
              </h1>
              <button className="bg-summer-org hover:bg-green-700 text-white text-[15px] font-medium px-5 py-6  rounded-[10px] flex items-center transition-all duration-500 ease-in-out">
                Support Our Work
              </button>
            </div>
            <div className="flex">
              {project.project_content1 && (
                <MainBody body={parseText(project.project_content1.details)} />
              )}
            </div>
          </div>
          <Post />
        </div>
      </div>

      {project.project_content2 && (
        <div className="w-[80%] mx-auto mt-10">
          <Post />
          <div className="flex gap-3">
            <div className=" flex-1">
              <div className="flex">
                <MainBody body={parseText(project.project_content2.details)} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-[80%] mx-auto">
        {project.project_progressive_bar && (
          <StatC stat={project.project_progressive_bar} />
        )}
      </div>
      {(project.project_approach.details || project.project_impact.details) && (
        <Impact
          approachText={project.project_approach.details}
          impactText={project.project_impact.details}
        />
      )}
    </div>
  );
};

export default Projects;
