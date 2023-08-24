import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './assets/scss/App.scss'
import GenresPage from './pages/GenresPage'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/genres' element={<GenresPage/>} />
			</Routes>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
