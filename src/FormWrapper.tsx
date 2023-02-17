import React, { ReactNode } from 'react'

type FormWrapperProps = {
	title: string
	children: ReactNode
}

export const FormWrapper = ({title, children}: FormWrapperProps) => {
  return (
	<div>
		<h2 className='form-title'>{title}</h2>
		<div className='form-style'>{children}</div>
	</div>
  )
}
