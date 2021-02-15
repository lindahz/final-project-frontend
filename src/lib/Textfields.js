import React from 'react'

import styled from 'styled-components/macro'

export const SearchTextfield = ({
  title,
  type,
  onChange,
  placeholder,
  required
}) => {
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
  height: 65px;
  padding: 8px 15px;
  background-color: #ffffff;
  color: #2d3235;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  border-radius: 3px 0 0 3px;
  border: none;
  border-bottom: 3px solid #ffffff;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border-bottom: 3px solid #ba6c65;
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

  @media (max-width: 320px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 75px;
    padding: 10px 20px;
    font-size: 18px;
  }
  `

export const CustomSearchTextfield = ({
  title,
  type,
  onChange,
  placeholder,
  required
}) => {
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
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-radius: 0;
  border-bottom: 2px solid #2d3235;

  &:focus {
    border-bottom: 2px solid #ba6c65;
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

  @media screen and (max-width: 320px) {
    padding: 5px 10px;
    font-size: 12px;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    height: 80px;
    padding: 5px 10px;
    font-size: 24px;
  }

  @media (min-width: 1025px) {
    width: 300px;
    height: 72px;
    padding: 10px 20px;
    border-bottom: 3px solid #ffffff;
    font-size: 16px;

    &:focus {
      border-bottom: 3px solid #ba6c65;
    }
  }
`
export const FormTextfield = ({
  title,
  type,
  onChange,
  placeholder,
  required
}) => {
  return (
    <FormLabel>
      {title}
      <FormText
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required} />
    </FormLabel>
  )
}

const FormText = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 8px 12px;
  display: block;
  border: none;
  border: 1px solid #2d3235;
  border-radius: 3px;
  color: #2d3235;
  font-size: 16px;
  font-family: 'Quicksand', sans-serif;
  color: #2d3235;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border: 1px solid #ef4f4f;
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
const FormLabel = styled.label`
  width: 100%;
  margin: 10px 0;
  color: #2d3235;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-size: 16px;
`

export const FormTextarea = ({
  title,
  type,
  onChange,
  placeholder,
  required
}) => {
  return (
    <FormLabel>
      {title}
      <Textarea
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required} />
    </FormLabel>
  )
}

const Textarea = styled.textarea`
  width: 100%;
  height: 70px;
  margin: 5px 0;
  padding: 8px 12px;
  display: block;
  resize: none;
  font-size: 16px;
  font-family: 'Quicksand', sans-serif;
  border: 1px solid #2d3235;
  color: #2d3235;
  border-radius: 3px;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border: 1px solid #ef4f4f;
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
`