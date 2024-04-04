import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignIn from './SignIn'
import * as AuthProvider from './Providers/AuthProvider'
import { MemoryRouter } from 'react-router-dom'

test('submits form with email and password', async () => {
	const mockLogin = jest.fn()
	const mockLogout = jest.fn() // Add this line
	const mockIsAuthenticated = false

	jest.spyOn(AuthProvider, 'useAuth').mockImplementation(() => ({
		login: mockLogin,
		logout: mockLogout,
		isAuthenticated: mockIsAuthenticated,
	}))

	const user = userEvent.setup()

	render(
		<MemoryRouter>
			<SignIn />
		</MemoryRouter>,
	)
	const emailInput = screen.getByLabelText(/Email Address/i)
	const passwordInput = screen.getByLabelText(/Password/i)
	const signInButton = screen.getByRole('button', { name: /Sign In/i })

	await user.type(emailInput, 'test@example.com')
	await user.type(passwordInput, 'password123')
	await user.click(signInButton)

	expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123')
	// Add more assertions for the expected behavior after form submission
})
