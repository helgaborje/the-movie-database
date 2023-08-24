import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"
import Navigation from "../components/Navigation"
import { Container, Row, Col} from "react-bootstrap"
import MovieCard from "../components/MovieCard"
import { useParams, useSearchParams } from "react-router-dom"
import Pagination from "../components/Pagination"


const MovieByGenrePage = () => {
	const [pageParams, setPageParams] = useSearchParams({ page: '1' })
	const { id } = useParams()
	const genreId = Number(id)
	const page = pageParams.get("page")
		? Number(pageParams.get("page"))
		: 1
	
	const { data } = useQuery(
		['moviegenre', { page, genreId }],
		() => TmdbAPI.getMovieByGenre(page, genreId)
	)
	
	return (
		<>
			<Navigation />
			<Container>
				<Container>
					<h2>Genre name here</h2>
					<Row className="g-4 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
						{data?.results.map(hit => (
							<Col key={hit.id}>
								<MovieCard
									poster_path={hit.poster_path}
									vote_average={hit.vote_average}
									title={hit.title}
									release_date={hit.release_date}
								/>
							</Col>
						))}
					</Row>
				</Container>
				
				<Pagination
					page={page}
					total_pages={data?.total_pages}
					hasPreviousPage={data?.page !== 1}
					hasNextPage={data?.page !== data?.total_pages}
							onPreviousPage={() => {
						const prevValue = page -1
						setPageParams({ page: prevValue.toString() })
					}}
							onNextPage={() => {
						const prevValue = page +1
						setPageParams({ page: prevValue.toString() })
					}}
				/>
			</Container>
		</>
	)
}

export default MovieByGenrePage