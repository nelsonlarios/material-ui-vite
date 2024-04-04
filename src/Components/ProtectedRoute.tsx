import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { useAuth } from '../Providers/AuthProvider'

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
	const { isAuthenticated } = useAuth()

	if (!isAuthenticated) {
		// Redirect them to the login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that location after they log in.
		return <Navigate to="/login" />
	}

	return children
}

export default ProtectedRoute
