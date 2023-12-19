import axios from "axios";

import { CardData } from "@/interface/types";

const fetchData = async (): Promise<CardData[]> => {
  try {
    const response = await axios.get<CardData[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
};

export default fetchData;
