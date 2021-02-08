import React from 'react'

import styled from 'styled-components/macro'

import search from '../assets/search.svg'
import backarrow from '../assets/backarrow.svg'
import filter from '../assets/filter.svg'

export const SearchBtn = ({ type, disabled, onClick, width }) => {
  return (
    <Search
      type={type}
      disabled={disabled}
      onClick={onClick}
      width={width}>
      <SearchIcon
        src={search} />
    </Search>
  )
}

const Search = styled.button`
  padding: 10px 10px;
  width: 100px;
  height: 65px;
  background-color: #ffcda3; // #ffecda;
  border: none;
  border-radius: 0 3px 3px 0;
  transition: 0.3s ease;
  align-self: center;
  cursor: pointer;

  &:focus {
    outline: 1px solid #2d3235;
    border: none;
  }

  &:hover {
    box-shadow: 10px 10px 14px -9px rgba(45,50,53,0.6);
  }

  @media (max-width: 320px) {
    width: 50px;
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 75px;
    align-self: unset;
  }
`
const SearchIcon = styled.img`
  width: 30px;

  @media (min-width: 768px) {
    width: 35px;
  }
`

export const CustomSearchBtn = ({ type, disabled, onClick }) => {
  return (
    <CustomSearch
      type={type}
      disabled={disabled}
      onClick={onClick}>
      <SearchIcon
        src={search} />
    </CustomSearch>
  )
}

const CustomSearch = styled(Search)`
  width: 55px;
  height: 50px;
  padding: 5px;
  background-color: transparent; 
  border-radius: 0;
  border-bottom: 2px solid #2d3235;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ef4f4f;
  }

  &:hover {
    box-shadow: none;
  }

  @media screen and (max-width: 320px) {
    width: 40px;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    height: 80px;
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 72px;
    border-bottom: 3px solid #ffffff;
  }
`

export const ToggleBtn = ({ title, type, disabled, onClick, src, width, display }) => {
  return (
    <Toggle
      type={type} 
      disabled={disabled}
      display={display}
      onClick={onClick}>
      {title}
      <ToggleIcon
        src={src} 
        width={width} />
    </Toggle>
  )
}
const Toggle = styled.button`
  padding: 5px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #2d3235;
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  border: none;
  transition: 0.3s ease;
  cursor: pointer;

  &:focus {
    border: 1px solid #000000;
  }

  &:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 70px;
    padding: 10px 10px;
    font-size: 20px;
  }

  @media (min-width: 1025px) {
    display: ${(props) => props.display || 'none'};
  }
`
const ToggleIcon = styled.img`
  width: ${(props) => props.width || '15px'};
  margin: 0 5px;

  @media (min-width: 768px) {
    width: ${(props) => props.width || '20px'};
  }
`

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
  border-radius: 3px;
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

export const BackBtn = ({ title }) => {
  return (
    <Back>
      <Arrow
        src={backarrow} />
      {title}
    </Back>
  )
}
const Back = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #2d3235;
  transition: 0.3s ease;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  text-decoration: none;

  &:focus {
    border: 2px solid #2d3235;
  }

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 10px 10px;
    font-size: 20px;
  }
`
const Arrow = styled.img`
  width: 20px;
  margin-right: 8px;

  @media (min-width: 768px) {
    
  }
`