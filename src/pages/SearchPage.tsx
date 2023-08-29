import React from 'react'
import * as TmdbAPI from "../services/TMDB-API"
import { useState } from 'react'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'
import Col from 'react-bootstrap/esm/Col'
import MovieCard from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom'
import Row from 'react-bootstrap/esm/Row'
import Alert from 'react-bootstrap/esm/Alert'
import Container from 'react-bootstrap/esm/Container'
import Pagination from '../components/Pagination'

const SearchPage = () => {
	const [searchInput, setSearchInput] = useState("")
	const [pageParams, setPageParams] = useSearchParams({ page: '1' })

	const page = pageParams.get("page")
		? Number(pageParams.get("page"))
		: 1
	
	const { data, isError, isLoading } = useQuery(
		['search-movies', searchInput, page],
		() => TmdbAPI.getSearchMovies(searchInput, page))

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!searchInput.trim().length) {
			return
		}
		setPageParams({ query: searchInput, page: '1' })
	}

	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
				<SearchForm
					onChange={e => setSearchInput(e.target.value) }
					onSubmit={handleSubmit}
					value={searchInput}
				/>

			{!isLoading && !isError && (
				<Container>
					<Container>
						<h1>Search result</h1>
						<Row className="g-4 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
							{data?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
								>
									<MovieCard
										id={hit.id}
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
			)}
			
			</>
	)
}

export default SearchPage