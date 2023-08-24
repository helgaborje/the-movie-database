import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './assets/scss/App.scss'
import GenresPage from './pages/GenresPage'
import MovieByGenrePage from './pages/MovieByGenrePage'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/genres' element={<GenresPage />} />
				<Route path='/genres/:name/:id' element={<MovieByGenrePage/>} />
			</Routes>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
