import { useState, useEffect } from 'react'

/**
 * Custom hook for managing state with localStorage in TypeScript.
 *
 * @param key The key under which to store the value in localStorage.
 * @param initialValue The initial value to use if none is found in localStorage.
 * @returns An array containing the stateful value and a function to update it.
 */
function useLocalStorageState<T>(
	key: string,
	initialValue: T | (() => T),
): [T, React.Dispatch<React.SetStateAction<T>>] {
	// Initialize the state with a value from localStorage if it exists;
	// otherwise, use the initialValue provided. We use a function to lazy-load
	// the state to avoid parsing JSON on every render.
	const [state, setState] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key)
			// Parse stored json or if none return initialValue
			return item
				? JSON.parse(item)
				: initialValue instanceof Function
					? initialValue()
					: initialValue
		} catch (error) {
			// If error reading from localStorage, use initialValue
			console.error(error)
			return initialValue instanceof Function ? initialValue() : initialValue
		}
	})

	// Use useEffect to update localStorage when the state changes
	useEffect(() => {
		try {
			const valueToStore =
				state instanceof Function ? state(initialValue) : state
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			// A more advanced implementation could handle errors, such as
			// a quota exceeded error
			console.error(error)
		}
	}, [initialValue, key, state])

	return [state, setState]
}

export default useLocalStorageState
