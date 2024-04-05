import { rest } from 'msw'

const handlers = [
	rest.get('https://fakerapi.it/api/v1/persons', async (req, res, ctx) => {
		const page = req.url.searchParams.get('page')
		if (page === '0') {
			return res(
				ctx.json({
					status: 'OK',
					code: 200,
					total: 1,
					data: [
						{
							id: 1,
							firstname: 'John',
							lastname: 'Doe',
							email: 'john.doe@example.com',
							birthday: '2000-01-01',
							address: {
								id: 0,
								city: 'New Jamaalborough',
								country: 'United Kingdom',
							},
						},
						// Add more data as needed
					],
				}),
			)
		}
		if (page === '1') {
			return res(
				ctx.json({
					status: 'OK',
					code: 200,
					total: 1,
					data: [
						{
							id: 1,
							firstname: 'Marian',
							lastname: 'Maggio',
							email: 'oswaldo.cole@hotmail.com',
							birthday: '1944-11-04',
							address: {
								id: 0,
								city: 'Siennaborough',
								country: 'Japan',
							},
						},
						// Add more data as needed
					],
				}),
			)
		}
	}),
]

export { handlers }
