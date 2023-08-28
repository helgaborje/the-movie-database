export type Movie = {
    id?: number
    original_title: string
    poster_path: string
    backdrop_path: string
    genres: Genres[]
    release_date: number
    runtime: number
    overview: string
    vote_average?: number
}

export type Genres = {
    id: number
    name: string
}