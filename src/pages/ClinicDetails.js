import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


import styled from 'styled-components/macro'

import { Reviews } from '../compontents/Reviews'

export const ClinicDetails = () => {
  const [clinic, setClinic] = useState({})
  const [reviews, setReviews] = useState('')

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/clinic/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setClinic(json)
      })
  }, [id])

  useEffect(() => {
    fetch(`http://localhost:8080/clinic/${id}/reviews`)
      .then((response) => response.json())
      .then((json) => {
        setReviews(json)
      })
  }, [id])

  console.log(reviews)
  console.log(clinic)
  return (
    <Section>
      <Link to="/"><Btn>gå tillbaka</Btn></Link>
      <Wrapper>
        <Subtitle>{clinic.clinic_type}</Subtitle>
        <Title>{clinic.clinic_name}</Title>
        <Heading>Öppettider</Heading>
        <p>{clinic.open_hours}</p>
        <Heading>Adress</Heading>
        <p>{clinic.address}</p>
        <Heading>Övrigt</Heading>
      </Wrapper>
      <Wrapper>
        <Subtitle>Skriv ett omdöme</Subtitle>
        <Subtitle>Omdömen ({clinic.text_reviews_count})</Subtitle>
        {reviews && reviews.map((review, index) => {
          return (
            <Reviews
              key={index}
              {...review} />
          )
        })}
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 120px 80px 0 80px;
  width: 100%;
`
const Btn = styled.button`
  font-size: 18px;
  color: gray;
  flex-grow: 2;
`
const Wrapper = styled.div`
  width: 40%;
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