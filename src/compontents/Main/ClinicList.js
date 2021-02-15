/* eslint-disable camelcase */
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
    <StyledLink to={`kliniker/${_id}`}>
      <Container>
        <Title>
          {clinic_name}
        </Title>
        <Subtitle>
          {address}
        </Subtitle>
        <ChipContainer>
          {clinic_operation.includes('Akutverksamhet') && (
            <Chip className="customChip">
              Akuta ärenden
            </Chip>
          )}
          {drop_in !== 'Ej angivet/stängt' && (
            <Chip>
              Drop-in
            </Chip>
          )}
          {open_hours === 'Dygnet runt' && (
            <Chip>
              24/7
            </Chip>
          )}
          {average_rating !== 0 && (
            <Chip>
              {average_rating}
              <Span>★</Span>
            </Chip>
          )}
        </ChipContainer>
      </Container>
    </StyledLink>
  )
}

const Container = styled.div`
  padding: 25px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  box-shadow: 3px 4px 12px -8px rgba(196,196,196,1);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 3px 4px 30px 0px rgba(196,196,196,0.63);
  }

  @media (min-width: 768px) {
    width: 420px;
    height: 200px;
    padding: 30px 40px 40px 40px;
  }
`

const StyledLink = styled(Link)`
  width: 90%;
  margin: 10px 10px;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 420px;
    height: 200px;
    margin: 20px;
  }
`

const Title = styled.h2`
  margin: 5px 0;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  letter-spacing: 0.3px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Subtitle = styled.h4`
  margin: 0;
  font-size: 14px;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`
const ChipContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
const Chip = styled.div`
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid;
  color: #2d3235;
  font-size: 10px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 11px;
  }

  &.customChip {
    color: #ef4f4f;
  }
`
const Span = styled.span`
  margin-left: 2px;
  color: #FFCC66;
`