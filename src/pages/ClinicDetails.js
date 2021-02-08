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
      <StyledLink to="/" className="back"><BackBtn title="Gå tillbaka" /></StyledLink>
      <Wrapper className="border">
        <TextContainer>
          <Subtitle className="clinicType">{clinic.clinic_type}</Subtitle>
          <Ship><Span>★ </Span>{clinic.average_rating} Fantastiskt bra</Ship>
        </TextContainer>
        <Title>{clinic.clinic_name}</Title>
        <Heading>Öppettider</Heading>
        <p>{clinic.open_hours}</p>
        <Heading>Adress</Heading>
        <p>{clinic.address}</p>
        <Heading>Drop-in</Heading>
        <p>{clinic.drop_in}</p>
      </Wrapper>
      <Wrapper className="reviews">
        <TextContainer className="reviews">
          <Subtitle>Omdömen <SubtitleGray>({clinic.text_reviews_count})</SubtitleGray></Subtitle>
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

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: #ffffff;//#f5f5f5;

  @media (min-width: 768px) {
    padding: 120px 100px 80px 100px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &.back {
    width: 100%;
  }

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.reviews {
    border-bottom: 1px solid #d6d6d6;
  }

  @media (min-width: 768px) {
    
  }
`
const Subtitle = styled.h3`
  margin: 10px 0;
  font-weight: 500;
  font-size: 16px;

  &.clinicType {
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const SubtitleGray = styled(Subtitle)`
  display: inline-block;
  color: #898989;
`
const Span = styled.span`
  color: #FFCC66;
`
const Wrapper = styled.div`
  width: 50%;
  height: 500px;
  padding: 20px 40px 40px 40px;
  background-color: #ffffff;
  
  &.border {
    border-right: 2px solid #d6d6d6;
  }

  &.reviews {
    overflow: scroll;
  }
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
const Heading = styled.h4`
  font-size: 18px;
  color: gray;
`

const Ship = styled(Heading)`
  padding: 5px 10px;
  border-radius: 3px;
  color: #2d3235;
  background-color: #f6ecf0;
`