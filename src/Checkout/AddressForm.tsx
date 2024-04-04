import * as React from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'

const FormGrid = styled(Grid)(() => ({
	display: 'flex',
	flexDirection: 'column',
}))

interface IFormValues {
	firstName: string
	lastName: string
	address1: string
	address2: string
	city: string
	state: string
	county: string
	postcode: string
	country: string
}

export default function AddressForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>()

	function onSubmit(data: IFormValues) {
		console.log(data)
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<TextField
					required
					id="firstName"
					label="First Name"
					placeholder="John"
					sx={{ width: '100%' }}
					error={Boolean(errors['firstName'])}
					{...register('firstName', {
						required: true,
					})}
					helperText={errors['firstName'] && errors['firstName'].message}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					required
					id="last-name"
					label="Last Name"
					placeholder="Snow"
					sx={{ width: '100%' }}
					error={Boolean(errors['lastName'])}
					{...register('lastName', {
						required: true,
					})}
					helperText={errors['lastName'] && errors['lastName'].message}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					required
					id="address1"
					label="Address line 1"
					placeholder="Street name and number"
					sx={{ width: '100%' }}
					error={Boolean(errors['address1'])}
					{...register('address1', {
						required: true,
					})}
					helperText={errors['address1'] && errors['address1'].message}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="address2"
					label="Address line 2"
					{...register('address2')}
					placeholder="Apartment, suite, unit, etc. (optional)"
					sx={{ width: '100%' }}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					required
					id="city"
					label="City"
					placeholder="London"
					sx={{ width: '100%' }}
					error={Boolean(errors['city'])}
					{...register('city', {
						required: true,
					})}
					helperText={errors['city'] && errors['city'].message}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					id="county"
					label="County"
					placeholder="Greater London (optional)"
					sx={{ width: '100%' }}
					{...register('county')}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					required
					id="postcode"
					label="Postcode"
					placeholder="LS1 4HR"
					sx={{ width: '100%' }}
					error={Boolean(errors['postcode'])}
					{...register('postcode', {
						required: true,
					})}
					helperText={errors['postcode'] && errors['postcode'].message}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					required
					id="country"
					label="Country"
					placeholder="United Kingdom"
					sx={{ width: '100%' }}
					error={Boolean(errors['country'])}
					{...register('country', {
						required: true,
					})}
				/>
			</Grid>
			<FormGrid item xs={12}>
				<FormControlLabel
					control={<Checkbox name="saveAddress" value="yes" />}
					label="Use this address for payment details"
				/>
			</FormGrid>
			<FormGrid item xs={12} md={12}>
				<Button type="submit" onClick={handleSubmit(onSubmit)}>
					Submit
				</Button>
			</FormGrid>
		</Grid>
	)
}
