import { Container, Row, Col, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import useGenres from "../hooks/useGenres"

const GenresPage = () => {
	const { data: genres, isError, isLoading } = useGenres()

	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<Container>
					<h1>Find movie by genre</h1>
					<Row>
						{genres.genres.map(genre => (
							<Col
								lg={3} md={4} sm={10}
								key={genre.id}
							>
								<div className="d-flex justify-content-center">
									<Link
										className="genres-buttons"
										to={`/genres/${genre.name}/${genre.id}`}>
										{genre.name}
										</Link>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			)}
		</>
	)
}

export default GenresPage