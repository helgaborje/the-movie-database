import * as TmdbAPI from "../services/TMDB-API"
import { useQuery } from "@tanstack/react-query"
import { Container, Row, Col } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { Link } from "react-router-dom"

const GenresPage = () => {
	const { data: genres } = useQuery(
		['genres'],
		() => TmdbAPI.getGenres()
		)

	return (
		<>
		<Navigation />
			<Container>
				{genres && (
					<Container>
						<h2>Find movie by genre</h2>
						<Row>
							{genres.genres.map(genre => (
								<Col lg={3} md={4} sm={10}
									key={genre.id}
									className="pb-5"
								>
									<div className="d-flex justify-content-center">
										<Link to={`/genres/${genre.name}/${genre.id}`}>
											{genre.name}
											</Link>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				)}
			</Container>
		</>
	)
}

export default GenresPage