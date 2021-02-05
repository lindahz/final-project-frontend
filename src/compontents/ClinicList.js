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
        <Subtitle>{address}</Subtitle>
        <Container>
          {clinic_operation.includes('Akutverksamhet') && (
            <ChipRed>Akuta ärenden</ChipRed>
          )}
          {drop_in !== 'Ej angivet/stängt' && (
            <Chip>Drop-in</Chip>
          )}
          {open_hours === 'Dygnet runt' && (
            <Chip>24/7</Chip>
          )}
          {average_rating !== 0 && (
            <Chip>{average_rating} <Span>★</Span></Chip>
          )}
        </Container>
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid #2d3235;
  border-radius: 3px;
  // box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
  // transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;

  @media (max-width: 280px) {
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 200px;
    margin: 20px;
    padding: 30px 40px 40px 40px;
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
  color: #2d3235;
  font-size: 12px;
  font-weight: 800;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Subtitle = styled.h4`
  margin: 0;
  color: #2d3235;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    
  }
`
const Chip = styled.div`
  background-color: transparent;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid;
  color: #2d3235;
  font-size: 10px;
  font-weight: 600;
`
const ChipRed = styled(Chip)`
  color: #ef4f4f;
`

const Span = styled.span`
  color: #FFCC66;
`