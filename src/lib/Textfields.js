import React from 'react'

import styled from 'styled-components/macro'

export const SearchTextfield = ({ title, type, onChange, placeholder, required }) => {
  return (
    <Text
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      required={required}>
      {title}
    </Text>
  )
}

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

const Text = styled.input`
  color: #2d3235;
  background-color: #ffffff;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
  text-decoration: none;
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
    color: #000000;
    opacity: 0.5;
  }

  @media (max-width: 280px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0; 
    width: 400px;
    height: 70px;
    font-size: 18px;
  }
  `