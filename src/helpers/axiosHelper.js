import axios from "axios";
const apiEndPoint = "http://www.omdbapi.com/?apikey=c36639e&";

export const fetchMovieInfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
