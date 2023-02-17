import React from 'react'
import { FormWrapper } from './FormWrapper'

type AddressData = {
	street: string,
	city: string,
	country: string,
	zip: string
}

type AddressFormProps = AddressData & {
	updateFields(fields: Partial<AddressData>): void
}

export const AddressForm = ({ street, city, country, zip, updateFields }: AddressFormProps) => {
	return (
		<FormWrapper title="Address">
			<label>Street</label>
			<input
				autoFocus
				required
				type="text"
				value={street}
				onChange = {(e) => updateFields({street: e.target.value})}
			/>
			<label>City</label>
			<input
				required
				type="text"
				value={city}
				onChange={(e) => updateFields({ city: e.target.value })}
			/>
			<label>Country</label>
			<input
				required
				type="text"
				value={country}
				onChange={(e) => updateFields({ country: e.target.value })}
			/>
			<label>Zip</label>
			<input
				required
				type="text"
				value={zip}
				onChange={(e) => updateFields({ zip: e.target.value })}
			/>
		</FormWrapper>
	)
}
