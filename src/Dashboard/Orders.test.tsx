import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Orders from './Orders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('Orders', () => {
	test('renders Orders component', async () => {
		const queryClient = new QueryClient()

		render(
			<QueryClientProvider client={queryClient}>
				<Orders />
			</QueryClientProvider>,
		)

		//Check if loading spinner is displayed
		expect(screen.getByRole('progressbar')).toBeInTheDocument()

		//Wait for the data to be fetched
		await waitFor(() => screen.getByText('John Doe'))

		// Check if the data is displayed correctly
		expect(screen.getByText('John Doe')).toBeInTheDocument()
		expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
		expect(screen.getByText('New Jamaalborough')).toBeInTheDocument()
		expect(screen.getByText('United Kingdom')).toBeInTheDocument()

		// Check if pagination works
		const nextPageButton = screen.getByRole('button', { name: /next page/i })

		fireEvent.click(nextPageButton)

		//Check if loading spinner is displayed
		expect(screen.getByRole('progressbar')).toBeInTheDocument()

		//Wait for the data to be fetched
		await waitFor(() => screen.getByText('Marian Maggio'))

		// Check if the data is displayed correctly
		expect(screen.getByText('Marian Maggio')).toBeInTheDocument()
		// expect(screen.getByText('oswaldo.cole@hotmail.com')).toBeInTheDocument()
		// expect(screen.getByText('Siennaborough')).toBeInTheDocument()
		// expect(screen.getByText('Japan')).toBeInTheDocument()
	})
})
