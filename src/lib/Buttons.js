import React from 'react'

import styled from 'styled-components/macro'

import search from '../assets/search.svg'
import arrow from '../assets/arrow.svg'
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
  background-color: #ffcda3; // #ffecda;
  border: none;
  border-radius: 0 3px 3px 0;
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
const SearchIcon = styled.img`
  width: ${(props) => props.width || '20px'};

  @media (min-width: 768px) {
    width: ${(props) => props.width || '35px'};
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
  padding: 5px;
  background-color: transparent; 
  border-radius: 0;
  border-bottom: 2px solid #ffffff;

  &:focus {
    outline: none;
    border-bottom: 2px solid #2d3235;
  }

  &:hover {
    box-shadow: none;
    border-bottom: 2px solid #2d3235;
  }

  @media (min-width: 768px) {
    width: 50px;
  }
`

export const ToggleBtn = ({ title, type, disabled, onClick }) => {
  return (
    <Toggle
      type={type} 
      disabled={disabled}
      onClick={onClick}>
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

export const FilterBtn = ({ onClick, disabled, type }) => {
  return (
    <Filter
      type={type}
      disabled={disabled}
      onClick={onClick}>
      <FilterIcon
        src={filter} />
    </Filter>
  )
}

const FilterIcon = styled.img`
  width: 20px;

  @media (min-width: 768px) {
    width: 25px;
  }
`
const Filter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
  }
`

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