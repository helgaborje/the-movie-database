import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

const useTopRatedMovies = () => {
	return useQuery(['top-rated'], TmdbAPI.getTopRatedMovies)
}

export default useTopRatedMovies