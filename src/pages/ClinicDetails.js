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

  // const generateUpdate = (update) => {
  //   setUpdateReviews(update)
  // }

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
        <BackBtn title="Gå tillbaka" />
      </StyledLink>
      <Wrapper className="border">
        <TextContainer>
          <Subtitle className="clinicType">{clinic.clinic_type}</Subtitle>
          <Chip>
            <Span>★ </Span>
            {displayAverageRating(clinic.average_rating)}
          </Chip>
        </TextContainer>
        <Title>{clinic.clinic_name}</Title>
        <Heading>Öppettider</Heading>
        <Text>{clinic.open_hours}</Text>
        <Heading>Adress</Heading>
        <Text>{clinic.address}</Text>
        <Heading>Drop-in</Heading>
        <Text>{clinic.drop_in}</Text>
      </Wrapper>
      <Wrapper>
        <TextContainer className="reviews">
          <Subtitle>Omdömen <Subtitle className="subtitleGray">({clinic.text_reviews_count})</Subtitle></Subtitle>
          <StyledLink to={`/kliniker/${id}/skriv-omdome`}>
            <Chip>Skriv ett omdöme</Chip>
          </StyledLink>
        </TextContainer>
        <Container>
          {clinic.text_reviews_count === 0 && (<Heading className="empty">Det finns inga omdömen än...</Heading>)}
          {reviews && reviews.map((review, index) => {
            return (
              <Reviews
                key={index}
                {...review} />
            )
          })}
        </Container>
        {/* <ReviewForm generateUpdate={generateUpdate} /> */}
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
    border-bottom: 2px solid #d6d6d6;

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
  height: 400px;
  overflow: scroll;
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

const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 500;
  font-size: 16px;

  &.clinicType {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  &.subtitleGray {
    margin: 0;
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

const Title = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
  // color: #9b5151;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const Heading = styled.h4`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #898989;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &.empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 0.5px;
  }
`

const Chip = styled(Subtitle)`
  padding: 5px 10px;
  background-color: #2d3235;
  border-radius: 3px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`