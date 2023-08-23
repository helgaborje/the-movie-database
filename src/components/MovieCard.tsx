import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

interface MovieCardProps {
	poster_path: string
	title: string
	vote_average?: number
	release_date?: number
}

const MovieCard: React.FC<MovieCardProps> = ({
	poster_path,
	title,
	vote_average,
	release_date,
}) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'

	return (
		<Card style={{ width: '15rem' }}>
			<ListGroup>
				<ListGroup.Item>
						<Card.Img
							src={imageUrl + poster_path}
						/>
						<Card.Subtitle>{vote_average}</Card.Subtitle>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{release_date}</Card.Text>
				</ListGroup.Item>
			</ListGroup>
		</Card>
	)
}

export default MovieCard
