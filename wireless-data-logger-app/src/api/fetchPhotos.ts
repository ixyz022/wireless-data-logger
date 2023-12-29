import axios from "axios";

const fetchPhotos = async (page, limit) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchPhotos;
