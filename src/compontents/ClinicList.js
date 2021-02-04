import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

export const ClinicList = ({
  clinic_name,
  address,
  _id,
  average_rating,
  drop_in,
  open_hours,
  clinic_operation
}) => {
  return (
      <Wrapper>
        <StyledLink to={`kliniker/${_id}`}>
        <Title>{clinic_name}</Title>
        <Text>{address}</Text>
        <Container>
          {clinic_operation.includes('Akutverksamhet') && (
            <Chip>Akuta ärenden</Chip>
          )}
          {drop_in !== 'Ej angivet/stängt' && (
            <Chip>Drop-in</Chip>
          )}
          {open_hours === 'Dygnet runt' && (
            <Chip>24/7</Chip>
          )}
          {average_rating !== 0 && (
            <ChipRating>{average_rating} ★</ChipRating>
          )}
        </Container>
        </StyledLink>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffecda;
  box-shadow: 10px 10px 23px -42px rgba(45,50,53,0.34);
  cursor: pointer;

  @media (max-width: 280px) {
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 200px;
    margin: 20px;
    padding: 40px;
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
  font-size: 12px;
  color: #2d3235;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const Text = styled.p`
  margin: 0;
  color: #2d3235;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`
const Chip = styled.div`
  font-size: 10px;
  background-color: pink;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
  color: #2d3235;
`

const ChipRating = styled.div`
  font-size: 10px;
  color: #2d3235;
  background-color: lightgreen;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
`