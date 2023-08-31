import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useQuery } from "@tanstack/react-query"
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import * as TmdbAPI from "../services/TMDB-API"
import MovieCard from "../components/MovieCard"
import Alert from "react-bootstrap/Alert"
import { useSearchParams } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"

const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		dayOrWeek: 'day', 
	})
	const dayOrWeek = searchParams.get('dayOrWeek')
	
	const { data: popular,  isLoading, isError } = useQuery(['trending', {dayOrWeek}],  () => TmdbAPI.getPopularMovies(dayOrWeek))
	const { data: rated } = useQuery(['top-rated'], TmdbAPI.getTopRatedMovies)
	const { data: playing } = useQuery(['now-playing'], TmdbAPI.getNowPlayingMovies )
	
	const handleDayOrWeekChange = (changeDayOrWeek: string) => {
		setSearchParams({ dayOrWeek: changeDayOrWeek })
	}

	const sliderSettings = {
		slidesToShow: 5,
		infinite: true,
		responsive: [
			{
				breakpoint: 868,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	}

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
							<div>
							{/* <Row className="g-4 justify-content-center"> */}
							<Slider className="movie-slider" {...sliderSettings}>
						{popular?.results.map(hit => (
							<div
								className="slider-item"
								// lg={3} md={4} sm={6}
								key={hit.id}
								style={{ width: '10rem' }}
							>
								<MovieCard
									id={hit.id}
									poster_path={hit.poster_path}
									vote_average={hit.vote_average}
									title={hit.title}
									release_date={hit.release_date} />
							</div>
						))}
								</Slider>
								{/* </Row> */}
								</div>
						</Container>
					<hr />
					<Container className="card-container">
						<h1>Top Rated Movies</h1>
						<Row className="g-4 justify-content-center">
							{rated?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
									style={{ width: '10rem' }}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={hit.release_date} />
								</Col>
							))}
						</Row>
					</Container>
					<hr />
					<Container className="card-container">
						<h1>Now in Cinemas</h1>
						<Row className="g-4 justify-content-center">
							{playing?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
									style={{ width: '10rem' }}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={hit.release_date} />
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