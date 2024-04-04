import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

// Enhancing the custom hook with generics
function useQueryWithMinimumLoading<T>(
	queryKey: string[],
	url: string,
): { data: T | undefined } & { isLoading: boolean } {
	const [isLoading, setIsLoading] = useState(true)
	const [isSetTimeoutRunning, setIsSetTimeoutRunning] = useState(false)

	const { isPending, data } = useQuery<T>({
		queryKey: queryKey,
		queryFn: () =>
			fetch(url)
				.then(res => res.json())
				.catch(err => console.error(err)),
	})

	console.log({ isPending })
	useEffect(() => {
		let timer: number
		console.log({ isPending, isSetTimeoutRunning })
		if (!isPending && !isSetTimeoutRunning) {
			setIsLoading(false)
		} else {
			setIsSetTimeoutRunning(true)
			setIsLoading(true)
			timer = window.setTimeout(() => {
				console.log('setting isLoading to false')
				setIsLoading(false)
				setIsSetTimeoutRunning(false)
			}, 500) // Ensure loading is shown for at least 1/2 second
		}

		return () => clearTimeout(timer)
	}, [isPending, isSetTimeoutRunning])

	return {
		data,
		isLoading: isLoading,
	}
}

export default useQueryWithMinimumLoading
