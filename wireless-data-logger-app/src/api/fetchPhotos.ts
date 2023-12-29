import axios from "axios";
import { Photo } from "../../interface/types";

export const fetchPhotos = async (
  page: number,
  limit: number,
): Promise<Photo[]> => {
  try {
    const response = await axios.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching photos:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return []; // Retorna un arreglo vacío si hay un error
  }
};
