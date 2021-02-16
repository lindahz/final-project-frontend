import React from 'react'

import styled from 'styled-components/macro'

import search from '../assets/icons/search.svg'

export const SearchBtn = ({
  type,
  disabled,
  onClick,
  width
}) => {
  return (
    <Search
      type={type}
      disabled={disabled}
      onClick={onClick}
      width={width}>
      <SearchIcon
        src={search}
        alt="Illustration av ett förstoringsglas" />
    </Search>
  )
}

const Search = styled.button`
  padding: 10px 10px;
  width: 100px;
  height: 65px;
  background-color: #ba6c65;
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

export const CustomSearchBtn = ({
  type,
  disabled,
  onClick
}) => {
  return (
    <CustomSearch
      type={type}
      disabled={disabled}
      onClick={onClick}>
      <SearchIcon
        src={search}
        alt="Illustration av ett förstoringsglas" />
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
    border-bottom: 2px solid #ba6c65;
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

  @media (min-width: 1025px) {
    width: 50px;
    height: 72px;
    border-bottom: 3px solid #ffffff;
  }
`

export const ToggleBtn = ({
  title,
  type,
  value,
  disabled,
  onClick,
  onTouchEnd,
  onMouseUp,
  src,
  alt,
  width,
  display
}) => {
  return (
    <ToggleButton
      type={type}
      value={value}
      disabled={disabled}
      display={display}
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      onMouseUp={onMouseUp}>
      <ToggleIcon
        src={src}
        alt={alt}
        width={width} />
      {title}
    </ToggleButton>
  )
}
const ToggleButton = styled.button`
  margin: 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: #2d3235;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (min-width: 1025px) {
    display: ${(props) => props.display || 'none'};
  }
`
const ToggleIcon = styled.img`
  width: ${(props) => props.width || '20px'};
  margin: 0 5px;

  @media (min-width: 768px) {
    width: ${(props) => props.width || '20px'};
  }
`

export const FormBtn = ({
  title,
  type,
  disabled,
  onClick
}) => {
  return (
    <FormButton
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </FormButton>
  )
}

const FormButton = styled.button`
  width: 150px;
  display: block;
  padding: 10px 5px;
  margin: 10px 0;
  border: 1px solid;
  border-radius: 3px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
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
  }
`

export const BackBtn = ({
  title,
  color,
  src
}) => {
  return (
    <BackButton
      color={color}>
      <ArrowIcon
        src={src}
        alt="Pil som pekar åt vänster" />
      {title}
    </BackButton>
  )
}
const BackButton = styled.button`
  padding: 10px 5px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  text-align: center;
  letter-spacing: 0.3px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  color: ${(props) => props.color || '#2d3235'};
  transition: 0.3s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;

  &:focus {
    border: 2px solid #2d3235;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const ArrowIcon = styled.img`
  width: 20px;
  margin-right: 8px;
`