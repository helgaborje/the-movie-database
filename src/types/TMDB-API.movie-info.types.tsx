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
    director: string
    credits: {
        cast: Cast[]
    }
}

export type Genres = {
    id: number
    name: string
}

export type Cast = {
    id: number
    profile_path: string
    name: string
    character: string
}