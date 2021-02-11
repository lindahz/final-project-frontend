import React from 'react'

import styled from 'styled-components/macro'

export const RadioBtn = ({
  name,
  value,
  id,
  disabled,
  checked,
  onChange,
  label
}) => {
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
  margin: 2px 4px 2px 0;
  padding: 5px 0;
  display: block;
  position: relative;
  background-color: transparent;
  border: 1px solid #2d3235;
  border-radius: 3px;
  color: #2d3235;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  ${Input}:checked + & {
    background-color: #394359;
    border: 1px solid #303242;
    color: #ffffff;
    font-weight: 600;
  }

  @media screen and (max-width: 320px) {
    width: 60%;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 200px;
    margin: 5px 5px;
    padding: 10px 0;
    font-size: 14px;
  }

  @media (min-width: 1025px) {
    padding: 5px 0;
    margin: 2px 4px 2px 0;

    &:hover {
      opacity: 0.6;
    }
  }
`