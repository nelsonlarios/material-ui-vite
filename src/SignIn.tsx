import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAuth } from './Providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Copyright() {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			sx={{ mt: 8, mb: 4 }}
		>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

interface ISignInValues {
	email: string
	password: string
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function SignIn() {
	const { login, isAuthenticated, isPasswordWrong } = useAuth()
	const navigate = useNavigate()
	const handleSubmitForm = (data: ISignInValues) => {
		const { email, password } = data
		console.log({
			email,
			password,
		})

		login(email, password)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignInValues>()

	if (isAuthenticated) {
		navigate('/')
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							autoComplete="off"
							{...register('email', {
								required: true,
							})}
							error={Boolean(errors['email'])}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							{...register('password', {
								required: true,
							})}
							error={Boolean(errors['password'])}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Typography variant="body1" color="error" align="center">
							{isPasswordWrong ? "Password and email don't match" : ''}
						</Typography>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={handleSubmit(handleSubmitForm)}
						>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright />
			</Container>
		</ThemeProvider>
	)
}
