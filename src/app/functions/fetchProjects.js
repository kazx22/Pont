import axios from "axios";

const fetchProjectType = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/project-type/views`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Projects Error`);
  }
};

export default fetchProjectType;
