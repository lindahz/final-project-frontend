import React from 'react'

import styled from 'styled-components/macro'

import search from '../assets/search.svg'
import arrow from '../assets/arrow.svg'
import backarrow from '../assets/backarrow.svg'

export const SearchBtn = ({ type, disabled, className, onClick, key, background }) => {
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
      <Icon
        src={arrow} />
    </Toggle>
  )
}

export const BackBtn = ({ title }) => {
  return (
    <Back>
      <Arrow
        src={backarrow} />
      {title}
    </Back>
  )
}

export const ReviewBtn = ({ title, type, disabled, onClick }) => {
  return (
    <ReviewButton
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </ReviewButton>
  )
}

const ReviewButton = styled.button`
  width: 150px;
  display: block;
  padding: 10px 5px;
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 2px;
  background-color: #ffecda;
  font-weight: 600;
  color: #2d3235;
  transition: 0.3s ease;
  cursor: pointer;

  &:focus {
    border: 1px solid #000000;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    min-width: 150px;
    padding: 10px 10px;
    font-size: 16px;
  }
`

const Back = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  text-align: left;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #2d3235;
  transition: 0.3s ease;
  cursor: pointer;
  border: 2px solid #2d3235;
  border-radius: 3px;
  text-decoration: none;

  &:focus {
    border: 2px solid #2d3235;
  }

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    min-width: 150px;
    padding: 10px 10px;
    font-size: 16px;
  }
`
const Arrow = styled.img`
  width: 16px;
  margin-right: 5px;

  @media (min-width: 768px) {
    
  }
`
const Toggle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  text-align: left;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #808080;
  border: none;
  padding: 10px 5px;
  margin: 0 10px;
  transition: 0.3s ease;
  cursor: pointer;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;

  &:focus {
    border: 1px solid #000000;
  }

  &:hover {
    color: #d4a5a5;
  }

  @media (min-width: 768px) {
    min-width: 150px;
    padding: 10px 10px;
    font-size: 14px;
  }
`
const Icon = styled.img`
  width: 20px;

  @media (min-width: 768px) {
    width: 20px;
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