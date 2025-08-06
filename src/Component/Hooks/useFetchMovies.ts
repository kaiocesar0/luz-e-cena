import { useEffect, useState } from "react";
import { Movies } from "../../types";
import { getMovies } from "../../api";

const useFetchMovies = () => {

      const [movies, setMovies] = useState<Movies[]>([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
    
      const fetchMovies = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const movies = await getMovies();
          setMovies(movies);
        }
        catch(err){
          setError("Erro ao buscar filmes");
          console.error(err);
        }finally{
          setIsLoading(false);
        }
      }
    
      useEffect(()=>{
        fetchMovies();
      }, []);
    
  return {movies, isLoading, error};
}

export default useFetchMovies;

