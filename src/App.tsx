import { useState } from 'react'
import { FormEvent } from 'react'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import './App.css'
import { useMultistepForm } from './useMultistepForm'
import { UserForm } from './UserForm'


type FormData = {
	firstName: string
	lastName: string
	age: string
	street: string
	city: string
	country: string
	zip: string
	email: string
	password: string
}

const INITIAL_DATA: FormData = {
	firstName: "",
	lastName: "",
	age: "",
	street: "",
	city: "",
	country: "",
	zip: "",
	email: "",
	password: "",
}

function App() {
	const [data, setData] = useState(INITIAL_DATA);
	const updateFields = (fields: Partial<FormData>) =>{
		setData(prev => {
			return {...prev, ...fields}
		})
	}
	const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultistepForm([
		<UserForm {...data} updateFields = {updateFields}  />,
		<AddressForm {...data} updateFields={updateFields} />,
		<AccountForm {...data} updateFields={updateFields} />
	])

	const onSubmit = (e: FormEvent) =>{
		e.preventDefault()
		if (!isLastStep) return next()
		alert ("Successful Account creation")
	}


	return (
		<div className="App">
			<form onSubmit = {onSubmit}>
				<div className="form">
					{currentStepIndex+1}/{steps.length}
				</div>
				{step}
				<div className="button">
					{!isFirstStep && <button type = "button" onClick = {back}>Back</button>}
					<button type="submit">{isLastStep? "Finish" : "Next"}</button>
				</div>
			</form>
		</div>
	)
}

export default App
