export type Movies = {
    id: number
    title: string
    poster_path: string
    backdrop_path: string
    release_date: number
    overview?: string
    vote_average: number
}

export type MoviesResponse = {
    page?: number
    results: Movies[]
    total_pages?: number
    total_results?: number
}