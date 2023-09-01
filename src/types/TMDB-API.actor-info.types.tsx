export type Actor = {
    id?: number
    name: string
    place_of_birth: string
    birthday: number
    profile_path: string
    biography: string
    movie_credits: {
        cast: Cast[]
    }
}

export type Cast = {
    id: number
    poster_path: string
    title: string
    vote_average: number
}