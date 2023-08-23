import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

interface MovieCardProps {
	poster_path: string
	title: string
	vote_average: number
	release_date: number
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
					<Card.Body>
						<Image
							src={imageUrl + poster_path}
							fluid
						/>
						<Card.Subtitle>{vote_average}</Card.Subtitle>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{release_date}</Card.Text>
					</Card.Body>
				</ListGroup.Item>
			</ListGroup>
		</Card>
	)
}

export default MovieCard
