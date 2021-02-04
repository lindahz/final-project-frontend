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
  width: 45%;
  margin: 2px 4px 2px 0;
  padding: 5px 0;
  display: block;
  position: relative;
  border: 1px solid #2d3235;
  border-radius: 3px;
  color: #000000;
  background-color: transparent;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
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