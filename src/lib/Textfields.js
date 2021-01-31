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
  color: #000000;
  background-color: #ffffff;
  font-family: 'Roboto', monospace;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
  text-decoration: none;
  border: none;
  //border-radius: 5px 0 0 0;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000000;
  }

  &:hover {
    background-color: rgb(235, 237, 238, 0.8); 
  }

  &::-webkit-input-placeholder {
    color: #000000;
    opacity: 0.6;
  }

  @media (max-width: 280px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0; 
    width: 400px;
    height: 70px;
  }
  `;