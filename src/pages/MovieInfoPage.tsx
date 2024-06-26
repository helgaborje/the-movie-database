import { Alert, Badge, Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import ActorCard from "../components/ActorCard"
import { Cast, Movie } from "../types/TMDB-API.movie-info.types"
import MovieCard from "../components/MovieCard"
import useMovieById from "../hooks/useMovieById"
import useSimilarMovies from "../hooks/useSimilarMovies"
import SliderCarousel from "../components/SliderCarousel"

const MovieInfoPage = () => {
	const { id } = useParams()
	const movieId = Number(id)

	const {data, isError, isLoading} = useMovieById(movieId)
	const {data: similarMovie} = useSimilarMovies(movieId)

	const imageUrl = 'https://image.tmdb.org/t/p/original'
	const posterUrl = 'https://image.tmdb.org/t/p/w500'

	
	const storedMovies = localStorage.getItem('last-viewed-movies') ?? '[]'
	const movies: Movie[] = JSON.parse(storedMovies)

	const movieExists = movies.some((movie) => movie.id === data?.id)

    if (!movieExists && data) {
        movies.push(data);

        localStorage.setItem('last-viewed-movies', JSON.stringify(movies))
    }
	
	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<Container>
					<div>
						<h1>{data?.original_title}</h1>
						<p><strong>Release date </strong>{data?.release_date}</p>
						<p><strong>Runtime </strong>{data.runtime} minutes</p>
						<div className='d-flex mt-2'>
							<img className="fluid w-25 me-1" src={posterUrl + data?.poster_path}/>
							<img className="fluid w-75" src={imageUrl + data?.backdrop_path}/>
						</div>
						<div>
							{data?.genres.map((hit) => (
								<Badge
									key={hit.id}
									as={Link}
									to={`/genres/${hit.name}/${hit.id}`}
									className='genre-badge p-2 m-1 ps-3 pe-3'
									pill bg='secondary'
									text='light'
								>{hit.name}
								</Badge>
							))}
						</div>
						
						<p>{data?.overview}</p>
						<div>
							<hr />
							<h1>Cast</h1>
							<Row>
								{data?.credits.cast.map((actor: Cast) => (
									<Col
										lg={2} md={4} sm={6}
										key={actor.id}
									
									><ActorCard
											id={actor.id}
											name={actor.name}
											profile_path={actor.profile_path}
											character={actor.character}
										/>
									</Col>
								))}
							</Row>
						</div>
						
						<Container className='card-container'>
							<h1>You might also like</h1>
							<SliderCarousel data={similarMovie?.results.map(hit => (
								<div
									className='slider-item'
									key={hit.id}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={hit.release_date}
									/>
								</div>
							))}
							/>
						</Container>
					</div>
				</Container>
			)}
		</>
	)
}

export default MovieInfoPage