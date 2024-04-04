import { rest } from 'msw'

const handlers = [
	rest.get('https://fakerapi.it/api/v1/persons', async (req, res, ctx) => {
		console.log('intercepted')
		return res(
			ctx.json({
				status: 'OK',
				code: 200,
				total: 5,
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
	}),
]

export { handlers }
