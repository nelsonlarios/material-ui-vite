import { Address } from './Address.type'

export type Person = {
	id: number
	firstname: string
	lastname: string
	email: string
	birthday: string
	address: Address
}

export type PersonApiResponse = {
	status: string
	code: number
	total: number
	data: Person[]
}
