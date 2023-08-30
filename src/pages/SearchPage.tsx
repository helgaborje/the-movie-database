import * as TmdbAPI from "../services/TMDB-API"
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'
import Col from 'react-bootstrap/esm/Col'
import MovieCard from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom'
import Row from 'react-bootstrap/esm/Row'
import Alert from 'react-bootstrap/esm/Alert'
import Pagination from '../components/Pagination'

const SearchPage = () => {
	const [pageParams, setPageParams] = useSearchParams({ page: '1' })
	const page = pageParams.get("page")
		? Number(pageParams.get("page"))
		: 1
	const query = pageParams.get("query") ?? ""
	
	const { data: result, isError, isLoading } = useQuery(
		['search', query, page],
		() => TmdbAPI.getSearchMovies(query, page))

	const handleSearch = (search: string) => {
		setPageParams({ query: search, page: String(1) })
	}

	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}

			{!isLoading && (
				<SearchForm
					onHandlseSearch={handleSearch} />
			)}

			{!isLoading && !isError && result && (
				<>
					<h1>Search result</h1><div id="results">
						{result.results.length > 0 && query ? (
							<p>Showing {result.total_results} search results for {query}...</p>
						) : (query && <p>No results found for {query}.</p>)}
						<Row className="g-4 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
							{result?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
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
						
						<Pagination
							page={page}
							total_pages={result?.total_pages}
							hasPreviousPage={result?.page !== 1}
							hasNextPage={result?.page !== result?.total_pages}
							onPreviousPage={() => {
								const prevValue = page - 1
								setPageParams({ query: query, page: prevValue.toString() })
							} }
							onNextPage={() => {
								const prevValue = page + 1
								setPageParams({ query: query, page: prevValue.toString() })
							}}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default SearchPage