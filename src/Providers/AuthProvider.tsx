import React, { createContext, useContext, useState } from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'

interface AuthContextProps {
	isAuthenticated: boolean
	isPasswordWrong: boolean
	login: (email: string | undefined, password: string | undefined) => void
	logout: () => void
}

const AuthContext = createContext<AuthContextProps | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useLocalStorageState(
		'isAuthenticated',
		false,
	)

	const [isPasswordWrong, setIsPasswordWrong] = useState(false)

	function login(email: string | undefined, password: string | undefined) {
		console.log({ email, password })
		if (email === 'vite@email.com' && password === 'vite') {
			setIsAuthenticated(true)
		} else if (email && password) {
			setIsPasswordWrong(true)
		}
	}

	function logout() {
		setIsAuthenticated(false)
	}

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, isPasswordWrong, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	console.log('useAuth')
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
