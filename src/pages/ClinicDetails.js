import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import { Reviews } from '../compontents/ClinicDetails/Reviews'
import { BackBtn } from '../lib/Buttons'
import backarrow from '../assets/icons/backarrow.svg'

export const ClinicDetails = () => {
  const [clinic, setClinic] = useState({})
  const [reviews, setReviews] = useState('')

  const { id } = useParams()

  const CLINIC_URL = `https://health-finder.herokuapp.com/clinic/${id}`
  const REVIEW_URL = `https://health-finder.herokuapp.com/clinic/${id}/reviews`

  useEffect(() => {
    fetch(CLINIC_URL)
      .then((response) => response.json())
      .then((json) => setClinic(json))
  }, [CLINIC_URL])

  useEffect(() => {
    fetch(REVIEW_URL)
      .then((response) => response.json())
      .then((json) => {
        setReviews(json)
      })
  }, [REVIEW_URL])

  const displayAverageRating = (rating) => {
    if (rating > 0 && rating < 2) {
      return (`${clinic.average_rating} Dålig`)
    } else if (rating >= 2 && rating < 3) {
      return (`${clinic.average_rating} Okej`)
    } else if (rating >= 3 && rating < 4) {
      return (`${clinic.average_rating} Bra`)
    } else if (rating >= 4) {
      return (`${clinic.average_rating} Fantastiskt bra`)
    } else {
      return 'Inga omdömen'
    }
  }

  return (
    <Section>
      <StyledLink to="/" className="back">
        <BackBtn
          title="Gå tillbaka"
          src={backarrow} />
      </StyledLink>
      <Wrapper className="border">
        <TextContainer>
          <Subtitle className="clinicType">
            {clinic.clinic_type}
          </Subtitle>
          <Chip>
            <Span>★ </Span>
            {displayAverageRating(clinic.average_rating)}
          </Chip>
        </TextContainer>
        <Title>
          {clinic.clinic_name}
        </Title>
        <Heading>
          Öppettider
        </Heading>
        <Text>
          {clinic.open_hours}
        </Text>
        <Heading>
          Adress
        </Heading>
        <Text>
          {clinic.address}
        </Text>
        <Heading>
          Drop-in
        </Heading>
        <Text>
          {clinic.drop_in}
        </Text>
      </Wrapper>
      <Wrapper>
        <TextContainer className="reviews">
          <Subtitle>
            Omdömen
            <Subtitle className="subtitleGray">
              ({clinic.text_reviews_count})
            </Subtitle>
          </Subtitle>
          <StyledLink to={`/kliniker/${id}/skriv-omdome`}>
            <Chip>
              Skriv ett omdöme
            </Chip>
          </StyledLink>
        </TextContainer>
        <Container>
          {clinic.text_reviews_count === 0 && (
            <Heading className="empty">
              Det finns inga omdömen än...
            </Heading>
          )}
          {reviews && reviews.map((review, index) => {
            return (
              <Reviews
                key={index}
                {...review} />
            )
          })}
        </Container>
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 120px 20px 80px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: #ffffff;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    padding: 120px 50px 80px 50px;
  }
  
  @media (min-width: 1025px) {
    padding: 8% 5%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  
  &.border {
    margin-bottom: 20px;
    padding-bottom: 20px;

    @media (min-width: 1025px) {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: 0;
      border-right: 2px solid #d6d6d6;
    }
  }

  @media (min-width: 1025px) { 
    width: 50%;
    height: 500px;
    padding: 40px;
    font-size: 20px;
  }
`

const Container = styled.div`
  @media (min-width: 1025px) {
    height: 400px;
    overflow: scroll;
  }
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &.reviews {
    border-bottom: 1px solid #d6d6d6;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;

  &.back {
    width: 100%;
  }
  &:hover {
    opacity: 0.6;
  }
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const Title = styled.h2`
  margin: 10px 0;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 500;
  font-size: 16px;

  &.clinicType {
    font-family: 'Lato', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  &.subtitleGray {
    margin-left: 3px;
    display: inline-block;
    color: #898989;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const Span = styled.span`
  color: #FFCC66;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Heading = styled.h4`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #898989;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  &.empty {
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.5px;
    opacity: 0.5;

    @media (min-width: 1025px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
  }
}
`

const Chip = styled(Subtitle)`
  padding: 5px 10px;
  background-color: #394359;
  border-radius: 3px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`