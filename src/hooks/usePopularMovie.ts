import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

const usePopularMovie = (dayOrWeek: string) => {
	return useQuery(['trending', { dayOrWeek }], () => TmdbAPI.getPopularMovies(dayOrWeek))
}

export default usePopularMovie