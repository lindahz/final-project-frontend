import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

export const ClinicList = ({ clinic_name, address, _id }) => {
  return (
    <StyledLink to={`kliniker/${_id}`}>
      <Wrapper>
        <Title>{clinic_name}</Title>
        <Text>{address}</Text>
        <Container>
          <Chip>Akuta ärenden</Chip>
          <Chip>Drop-in</Chip>
          <Chip>24/7</Chip>
          <ChipRating>4.6 ★</ChipRating>
        </Container>
      </Wrapper>
    </StyledLink>
  )
}

const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  margin: 20px;
  background-color: #ffecda;
  box-shadow: 10px 10px 23px -42px rgba(45,50,53,0.34);
  cursor: pointer;

  @media (max-width: 280px) {
    
  }

  @media (min-width: 768px) {
    width: 500px;
  }
  `
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
const Title = styled.h2`
  margin: 5px 0;
  font-size: 20px;
  color: #2d3235;
`
const Text = styled.p`
  margin: 0;
  color: #2d3235;
`
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 70%;
`
const Chip = styled.div`
  font-size: 10px;
  background-color: pink;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
  color: #2d3235;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const ChipRating = styled.div`
  font-size: 10px;
  color: #2d3235;
  background-color: lightgreen;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
`