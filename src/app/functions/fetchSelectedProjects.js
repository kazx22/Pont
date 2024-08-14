import axios from "axios";

const fetchSelectedProject = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/views/${slug}/project/`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Projects Error`);
  }
};

export default fetchSelectedProject;
