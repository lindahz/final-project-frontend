import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Reviews } from '../compontents/Reviews'

import { BackBtn } from '../lib/Buttons'

export const ClinicDetails = () => {

  const [clinic, setClinic] = useState({})
  const [reviews, setReviews] = useState('')
  const [updateReviews, setUpdateReviews] = useState('')

  const generateUpdate = (update) => {
    setUpdateReviews(update)
  }

  const { id } = useParams()

  console.log(id)

  const CLINIC_URL = `http://localhost:8080/clinic/${id}`

  // display clinic details
  useEffect(() => {
    fetch(CLINIC_URL)
      .then((response) => response.json())
      .then((json) => setClinic(json))
  }, [updateReviews])

  // display clinic reviews
  useEffect(() => {
    fetch(`http://localhost:8080/clinic/${id}/reviews`)
      .then((response) => response.json())
      .then((json) => {
        setReviews(json)
      })
  }, [updateReviews])

  return (
    <Section>
      <StyledLink to="/"><BackBtn title="Gå tillbaka" /></StyledLink>
      <Wrapper>
        <Subtitle>{clinic.clinic_type}</Subtitle>
        <Title>{clinic.clinic_name}</Title>
        <Heading>★{clinic.average_rating} Fantastiskt bra</Heading>
        <Heading>Öppettider</Heading>
        <p>{clinic.open_hours}</p>
        <Heading>Adress</Heading>
        <p>{clinic.address}</p>
        <Heading>Drop-in</Heading>
        <p>{clinic.drop_in}</p>
      </Wrapper>
      <Wrapper>
        <TextContainer>
          <Subtitle>Omdömen <Span>({clinic.text_reviews_count})</Span></Subtitle>
          <StyledLink to={`/kliniker/${id}/skriv-omdome`}>
            <Subtitle>Skriv ett omdöme</Subtitle>
          </StyledLink>
        </TextContainer>
        {reviews && reviews.map((review, index) => {
          return (
            <Reviews
              key={index}
              {...review} />
          )
        })}
        {/* <ReviewForm generateUpdate={generateUpdate} /> */}
      </Wrapper>
    </Section>
  )
}
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;

  @media (min-width: 768px) {
    
  }
`
const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 500;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`
const Span = styled(Subtitle)`
  display: inline-block;
  color: #898989;
`
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F2F2F2;

  @media (min-width: 768px) {
    padding: 120px 100px 80px 100px;
  }
`
const Wrapper = styled.div`
  width: 70%;
  padding: 30px;
  margin: 20px;
  background-color: #ffffff;
  border: 1px solid #d6d6d6;
`
const Title = styled.h2`
  font-size: 20px;
  margin: 10px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`
const Heading = styled.h4`
  font-size: 18px;
  color: gray;
`