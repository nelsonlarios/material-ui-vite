import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from './serverHandler'

// Provide the server-side API with the request handlers.
const server = setupServer(...handlers)

export { server, rest }
