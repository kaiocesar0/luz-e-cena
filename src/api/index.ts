import axios from "axios"
import { Movies } from "../types"

const base_url = "http://localhost:3001"

export const getMovies = async (): Promise<Movies[]> => {
  const response = await axios.get<Movies[]>(`${base_url}/movies`);
  return response.data;
}