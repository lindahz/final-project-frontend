import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

export const ClinicList = ({ clinic_name, address, _id }) => {
  return (
    <Link to={`kliniker/${_id}`}>
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
    </Link>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 20px;
  background-color: lightyellow;
  width: 400px;
  cursor: pointer;
  `
const Title = styled.h2`
  margin: 5px 0;
`
const Text = styled.p`
  margin: 0;
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
`

const ChipRating = styled.div`
  font-size: 10px;
  background-color: lightgreen;
  margin: 10px 0;
  margin-right: 10px;
  padding: 5px;
`