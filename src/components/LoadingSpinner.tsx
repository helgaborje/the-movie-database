import { useIsFetching } from "@tanstack/react-query"

const LoadingSpinner = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div className='loading-spinner d-flex justify-content-center align-items-center'
			style={{ height: '30vh' }}>
			<img
				src="https://i.pinimg.com/originals/db/40/ee/db40eeccca850e5998f50a633d67b34b.gif"
                alt="Loading Spinner"
				style={{ width: '200px' }}
			/>
		</div>
	) : null
}

export default LoadingSpinner
