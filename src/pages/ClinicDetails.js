import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Reviews } from '../compontents/Reviews'
import { ReviewForm } from '../compontents/ReviewForm'

import { BackBtn } from '../lib/Buttons'

export const ClinicDetails = () => {

  const [clinic, setClinic] = useState({})
  const [reviews, setReviews] = useState('')
  const [updateReviews, setUpdateReviews] = useState('')

  const generateUpdate = (update) => {
    setUpdateReviews(update)
  }

  const { id } = useParams()

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
        <Heading>★4.6 Fantastiskt bra</Heading>
        <Heading>Öppettider</Heading>
        <p>{clinic.open_hours}</p>
        <Heading>Adress</Heading>
        <p>{clinic.address}</p>
        <Heading>Drop-in</Heading>
        <p>{clinic.drop_in}</p>
      </Wrapper>
      <WrapperReview>
        <TextContainer>
          <Subtitle>Omdömen <Span>({clinic.text_reviews_count})</Span></Subtitle>
          <Subtitle>Skriv ett omdöme</Subtitle>
        </TextContainer>
        {reviews && reviews.map((review, index) => {
          return (
            <Reviews
              key={index}
              {...review} />
          )
        })}
        <ReviewForm generateUpdate={generateUpdate} />
      </WrapperReview>
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
  border-bottom: 1px solid #d6d6d6;
`
const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 500;
  font-size: 32px;
`
const Span = styled(Subtitle)`
  display: inline-block;
  color: #898989;
`
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 100px 80px 100px;
  width: 100%;
  background-color: #F2F2F2;
`
const Wrapper = styled.div`
  width: 60%;
  padding: 30px;
  margin: 40px;
  background-color: lightyellow;
`
const WrapperReview = styled.div`
  width: 70%;
  padding: 30px;
  //align-self: flex-start;
  background-color: #ffffff;
  border: 1px solid #d6d6d6;
`
const Title = styled.h2`
  font-size: 36px;
  margin: 10px 0;
`
const Heading = styled.h4`
  font-size: 18px;
  color: gray;
`