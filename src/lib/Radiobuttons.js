import React from 'react'

import styled from 'styled-components/macro'

export const RadioBtn = ({ name, value, id, disabled, checked, onChange, label }) => {
  return (
    <>
      <Input
        id={id}
        type="radio"
        role="radio"
        disabled={disabled}
        onChange={onChange}
        value={value}
        checked={checked}
        name={name} />
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
  padding: 5px 0;
  margin: 2px 4px 2px 0;
  display: block;
  position: relative;
  background-color: transparent;
  border: 1px solid #2d3235;
  border-radius: 3px;
  color: #000000;
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

/* styling for radio buttons */
/*

input[type="radio"] + .match-label {
  width: 100%;
  display: block;
  position: relative;
  color: #000000;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 8px 15px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
}

input[type="radio"] + .match-label:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

input[type="radio"]:checked + .match-label {
  background-color: #000000;
  color: #ffffff;
}

input[type="radio"]:focus + .match-label {
  outline: #dc20cc solid 1px;
}
*/