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

const Btn = styled.button`
  background-color: #ffecda;
  border: none;
  padding: 10px 10px;
  transition: 0.3s ease;
  align-self: center;
  cursor: pointer;
  z-index: 2;

  &:focus {
    outline: 1px solid #ff0000;
    border: none;
  }

  &:hover {
    background-color: rgb(0, 255, 127, 0.2); 
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