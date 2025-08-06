import { useEffect, useState } from "react";
import { Movies } from "../../types/index";


const useFilterMovies = (movies: Movies[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filteredMovies, setFilteredMovies] = useState<Movies[]>([])
  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  const handleSearch = () => {
    console.log('handleSearch chamado')
    const filtered = movies.filter((movie) => 
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered)
  }
   return {
    searchTerm,
    setSearchTerm,
    filteredMovies,
    handleSearch
   }
}

export default useFilterMovies;