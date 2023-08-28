import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './assets/scss/App.scss'
import GenresPage from './pages/GenresPage'
import MovieByGenrePage from './pages/MovieByGenrePage'
import Navigation from './components/Navigation'
import LoadingSpinner from './components/LoadingSpinner'
import { Container } from 'react-bootstrap'
import MovieInfoPage from './pages/MovieInfoPage'
import ActorInfoPage from './pages/ActorInfoPage'

const App = () => {
	return (
		<>
			<Navigation />
			<LoadingSpinner />
			<Container>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/genres' element={<GenresPage />} />
					<Route path='/genres/:name/:id' element={<MovieByGenrePage />} />
					<Route path='/movie/:id' element={<MovieInfoPage />} />
					<Route path='/person/:id' element={<ActorInfoPage />} />
				</Routes>
			</Container>
			
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
