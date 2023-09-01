import Container from "react-bootstrap/Container"
import MovieCard from "../components/MovieCard"
import Alert from "react-bootstrap/Alert"
import { useSearchParams } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import SliderCarousel from "../components/SliderCarousel"
import usePopularMovie from "../hooks/usePopularMovie"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useNowPlaying from "../hooks/useNowPlaying"
import { Movie } from "../types/TMDB-API.movie-info.types"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		dayOrWeek: 'day', 
	})
	const dayOrWeek = searchParams.get('dayOrWeek')  || 'day'
	
	const { data: popular,  isLoading, isError } = usePopularMovie(dayOrWeek)
	const { data: rated } = useTopRatedMovies()
	const { data: playing } = useNowPlaying()
	
	const handleDayOrWeekChange = (changeDayOrWeek: string) => {
		setSearchParams({
			dayOrWeek: changeDayOrWeek
		})
	}

	const storedMovies = localStorage.getItem('last-viewed-movies') ?? '[]'
	const lastViewedMovies: Movie[] = JSON.parse(storedMovies)

	
	

	console.log(lastViewedMovies)

	
	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<>
					<Container className="card-container">
						<h1>Now Trending Movies</h1>
						<div className="trending-btn-container">
							<Button
								className="trending-btn"
								onClick={() => handleDayOrWeekChange("day")}
								variant={dayOrWeek === "day" ? "light" : "outline-light"}
							>Today</Button>
							<Button
								className="trending-btn"
								onClick={() => handleDayOrWeekChange("week")}
								variant={dayOrWeek === "week" ? "light" : "outline-light"}
							>This Week</Button>
						</div>
							<SliderCarousel data={popular?.results.map(hit => (
								<div
									className="slider-item"
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

					<Container className="card-container">
						<h1>Top Rated Movies</h1>
						<SliderCarousel data={rated?.results.map(hit => (
							<div
								className="slider-item"
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
					
					<Container className="card-container">
						<h1>Now in Cinemas</h1>
						<SliderCarousel data={playing?.results.map(hit => (
							<div
								className="slider-item"
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

					<Container className='card-container'>
						<h1>Last Viewed Movies</h1>
						<Row>
						{lastViewedMovies.slice(-10).map((movie, index) => (
							<Col
								lg={2} md={4} sm={6}
								className='slider-item'
								key={`${movie.id}-${index}`}
							>
								<MovieCard
									id={movie.id}
									poster_path={movie.poster_path}
									vote_average={movie.vote_average}
									title={movie.original_title}
									release_date={movie.release_date}
								/>
							</Col>
						))}
						</Row>
					</Container>
				</>
			)}
		</>
	)
}

export default HomePage