import React from 'react'

import styled from 'styled-components/macro'

export const SearchTextfield = ({ title, type, onChange, placeholder, required }) => {
  return (
    <Search
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required={required}>
      {title}
    </Search>
  )
}
const Search = styled.input`
  width: 100%;
  padding: 8px 15px;
  background-color: #ffffff;
  color: #2d3235;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  border-radius: 3px 0 0 3px;
  border: none;
  border-bottom: 2px solid #ffffff;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border-bottom: 2px solid #2d3235;
    &::-webkit-input-placeholder {
      color: #2d3235;
      opacity: 1;
    }
  }

  &:hover {
    &::-webkit-input-placeholder {
      color: #2d3235;
      opacity: 1;
    }
  }

  &::-webkit-input-placeholder {
    transition: 0.3s ease;
    color: #2d3235;
    opacity: 0.5;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 73px;
    padding: 10px 20px;
    font-size: 18px;
  }
  `

export const CustomSearchTextfield = ({ title, type, onChange, placeholder, required }) => {
  return (
    <CustomSearch
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required={required}>
      {title}
    </CustomSearch>
  )
}
const CustomSearch = styled(Search)`
  border-radius: 0;
  border-bottom: 2px solid #ffffff;

  &:focus {
    border-bottom: 2px solid #2d3235;
    &::-webkit-input-placeholder {
      color: #2d3235;
      opacity: 1;
    }
  }

  &:hover {
    &::-webkit-input-placeholder {
      color: #2d3235;
      opacity: 1;
    }
  }

  &::-webkit-input-placeholder {
    transition: 0.3s ease;
    color: #2d3235;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
  `

export const ReviewTextfield = ({ title, type, onChange, placeholder, required }) => {
  return (
    <ReviewLabel>
      {title}
      <ReviewText
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required} />
    </ReviewLabel>
  )
}

export const ReviewTextarea = ({ title, type, onChange, placeholder, required }) => {
  return (
    <ReviewLabel>
      {title}
      <Textarea
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required} />
    </ReviewLabel>
  )
}

const Textarea = styled.textarea`
  width: 100%;
  height: 70px;
  margin: 5px 0 5px 0;
  padding: 8px 12px;
  display: block;
  background-color: #ffffff;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  color: #2d3235;
  border: 2px solid #a6d0e4;
  border-radius: 2px;
  resize: none;
  //border-bottom: 2px solid #ffffff;
  transition: 0.3s ease;
`

const ReviewLabel = styled.label`
  width: 100%;
  margin: 10px 0 10px 0;
  color: #2d3235;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
`
const ReviewText = styled.input`
  width: 100%;
  margin: 5px 0 5px 0;
  padding: 8px 12px;
  display: block;
  background-color: #ffffff;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  color: #2d3235;
  border: 2px solid #a6d0e4;
  border-radius: 2px;
  //border-bottom: 2px solid #ffffff;
  transition: 0.3s ease;

  &:focus {
    border: 2px solid;
    &::-webkit-input-placeholder {
      color: #2d3235;
      opacity: 1;
    }
  }

  &:hover {
    &::-webkit-input-placeholder {
      color: #2d3235;
      opacity: 1;
    }
  }

  &::-webkit-input-placeholder {
    transition: 0.3s ease;
    color: #000000;
    opacity: 0.5;
  }

  @media (max-width: 280px) {
  }

  @media (min-width: 768px) {
  }
  `