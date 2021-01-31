import React from 'react'

import styled from 'styled-components/macro'

import search from '../assets/search.svg'

export const Button = ({ type, disabled, className, onClick, key, background }) => {
  return (
    <Btn
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      key={key}
      background={background}>
      <Image
        src={search} />
    </Btn>
  )
}

export const ToggleBtn = ({ title, type, disabled, className, onClick, key, background }) => {
  return (
    <Toggle
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      key={key}
      background={background}>
      {title}
    </Toggle>
  )
}

const Toggle = styled.button`
  background-color: #ffffff;
  color: #2d3235;
  border: none;
  padding: 10px 10px;
  margin: 10px;
  transition: 0.3s ease;
  cursor: pointer;
  border: 1px solid #bdc0c2;
  border-radius: 3px;

  &:focus {
    border: 1px solid #000000;
  }

  &:hover {
    border: 1px solid #000000;
  }

  @media (min-width: 768px) {
    min-width: 110px;
    padding: 20px 8px;
    font-size: 16px;
  }
`

const Btn = styled.button`
  background-color: #ffecda;
  border: none;
  padding: 10px 10px;
  transition: 0.3s ease;
  align-self: center;
  cursor: pointer;
  z-index: 2;

  &:focus {
    outline: 1px solid #2d3235;
    border: none;
  }

  &:hover {
    box-shadow: 10px 10px 14px -9px rgba(45,50,53,0.6);
  }

  @media (min-width: 768px) {
    width: 80px;
    align-self: unset;
  }
`

const Image = styled.img`
  width: 20px;

  @media (min-width: 768px) {
    width: 35px;
  }
`