import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styled from 'styled-components/macro'

import { Reviews } from '../compontents/Reviews'

export const ClinicDetails = () => {
  const [details, setDetails] = useState({})

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/clinic/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDetails(json)
        console.log(id)
      })
  }, [id])
  return (
    <Section>
      <Wrapper>
        <Subtitle>{details.clinic_type}</Subtitle>
        <Title>{details.clinic_name}</Title>
        <Heading>Öppettider</Heading>
        <p>{details.open_hours}</p>
        <Heading>Adress</Heading>
        <p>{details.address}</p>
        <Heading>Övrigt</Heading>
      </Wrapper>
      <Wrapper>
        <Subtitle>Omdömen ({details.text_reviews_count})</Subtitle>
        <Reviews />
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 120px 80px 0 80px;
  width: 100%;
`
const Wrapper = styled.div`
  padding: 30px;
  margin: 40px;
  background-color: lightyellow;
`
const Subtitle = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  margin: 10px 0;
`
const Title = styled.h2`
  font-size: 36px;
  margin: 10px 0;
`
const Heading = styled.h4`
  font-size: 18px;
  color: gray;
`