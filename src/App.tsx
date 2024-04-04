import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import Link from '@mui/material/Link'
// import ProTip from './ProTip'
import Dashboard from './Dashboard/Dashboard'
import Checkout from './Checkout/Checkout'
import ProtectedRoute from './Components/ProtectedRoute'
import SignIn from './SignIn'

// function Copyright() {
// 	return (
// 		<Typography variant="body2" color="text.secondary" align="center">
// 			{'Copyright © '}
// 			<Link color="inherit" href="https://mui.com/">
// 				Your Website
// 			</Link>{' '}
// 			{new Date().getFullYear()}.
// 		</Typography>
// 	)
// }

export default function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Dashboard />} /> */}
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

		// <Container maxWidth="sm">
		//   <Box sx={{ my: 4 }}>
		//     <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
		//       Material UI Vite.js example in TypeScript
		//     </Typography>
		//     <ProTip />
		//     <Copyright />
		//   </Box>
		// </Container>
	)
}
