import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

const useActor = (actorId: number) => {
  return useQuery(['person', actorId], () =>  TmdbAPI.getActorById(actorId))
}

export default useActor