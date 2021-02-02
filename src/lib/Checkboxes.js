import React from 'react'

import styled from 'styled-components/macro'

export const Checkbox = ({ value, id, disabled, checked, onChange, label }) => {
  return (
    <>
      <Input
        id={id}
        type="checkbox"
        role="checkbox"
        disabled={disabled}
        onChange={onChange}
        value={value}
        checked={checked} />
      <Label htmlFor={id}>
        {label}
      </Label>
    </>
  )
}

const Input = styled.input`
  position: absolute;
  height: 1px; 
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
`
const Label = styled.label`
  width: 100%;
  display: block;
  position: relative;
  margin: 3px;
  border-radius: 4px;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid gray;
  padding: 8px 15px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;

  ${Input}:focus + & {
    border: #dc20cc solid 1px;
  }

  ${Input}:checked + & {
    background-color: #ffecda;
  }

  &:hover {
    box-shadow: 10px 10px 14px -9px rgba(45,50,53,0.6);
  }
`