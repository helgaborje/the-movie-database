import { useIsFetching } from "@tanstack/react-query"

const LoadingSpinner = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div className='loading-spinner d-flex justify-content-center align-items-center'
			style={{ height: '30vh' }}>
			<img
				src="https://thumbs.gfycat.com/AntiqueLightheartedIbizanhound-max-1mb.gif"
                alt="Loading Spinner"
				style={{ width: '200px' }}
			/>
		</div>
	) : null
}

export default LoadingSpinner