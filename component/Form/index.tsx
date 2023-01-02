import React from 'react'
import Select from 'react-select'
import { StyledForm } from './style'

const Form = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <StyledForm>
        <Select options={options}/>
        <Select options={options}/>
        <Select options={options}/>
    </StyledForm>
  )
}

export default Form