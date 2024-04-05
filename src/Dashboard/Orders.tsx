import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from './Title'
import {
	CircularProgress,
	TableContainer,
	TablePagination,
} from '@mui/material'
import { styled } from '@mui/system'
import { PersonApiResponse } from '../types/Person.type'
import useQueryWithMinimumLoading from '../hooks/useQueryWithMinimumLoading'
import dayjs from 'dayjs'

const TableCellNoWrap = styled(TableCell)(() => ({
	whiteSpace: 'nowrap',
}))

export default function Orders() {
	const [page, setPage] = React.useState(0)

	const { data, isLoading } = useQueryWithMinimumLoading<PersonApiResponse>(
		['repoData', page.toString()],
		`https://fakerapi.it/api/v1/persons?_quantity=5&_locale=en_UK&page=${page}`,
	)

	const persons = data?.data ?? []

	function handlePageChange(_event: unknown, newPage: number) {
		setPage(newPage)
	}

	return (
		<React.Fragment>
			<Title>Recent Orders</Title>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Birthday</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>City</TableCell>
							<TableCell align="right">Country</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{isLoading ? (
							<TableRow>
								<TableCell
									colSpan={12}
									sx={{ textAlign: 'center', height: '165px' }}
								>
									<CircularProgress />
								</TableCell>
							</TableRow>
						) : (
							persons.map(person => (
								<TableRow key={person.id}>
									<TableCellNoWrap>
										{dayjs(person.birthday).format('DD MMM, YYYY')}
									</TableCellNoWrap>
									<TableCellNoWrap>{`${person.firstname} ${person.lastname}`}</TableCellNoWrap>
									<TableCellNoWrap>{person.email}</TableCellNoWrap>
									<TableCellNoWrap>{person.address.city}</TableCellNoWrap>
									<TableCellNoWrap align="right">
										{person.address.country}
									</TableCellNoWrap>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				count={10}
				rowsPerPageOptions={[]}
				component="div"
				rowsPerPage={5}
				page={page}
				onPageChange={handlePageChange}
			/>
		</React.Fragment>
	)
}
