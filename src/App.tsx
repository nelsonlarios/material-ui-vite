import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Checkout from './Checkout/Checkout'
import ProtectedRoute from './Components/ProtectedRoute'
import SignIn from './SignIn'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/login" element={<SignIn />} />
			</Routes>
		</Router>
	)
}
