import React from 'react'

import styled from 'styled-components/macro'

export const Textfield = ({ title, type, onChange, placeholder, required }) => {
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

const Text = styled.input`
  color: #2d3235;
  background-color: #ffffff;
  font-family: 'Roboto', monospace;
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
  `;