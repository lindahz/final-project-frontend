import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Rating from '@material-ui/lab/Rating'

import { FormTextfield, FormTextarea } from '../lib/Textfields'
import { FormBtn, BackBtn } from '../lib/Buttons'

export const ReviewForm = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const [errorMessage, setErrorMessage] = useState(true)

  const clinicData = useSelector((store) => store.clinics.clinics.clinics)

  const clinic = clinicData && clinicData.find((item) => item._id === id)

  // validation using classes?

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:8080/clinics/${id}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        review: review,
        rating: +rating,
        title: title,
        name: name,
        clinic_id: id
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setErrorMessage(json.success)
        console.log(rating)
      })
  }

  return (
    <Section>
      <StyledLink to={`/kliniker/${id}/`}><BackBtn title="Gå tillbaka" /></StyledLink>
      <Container>
        <Form onSubmit={handleSubmit} noValidate>
          <Title>Skriv ett omdöme om {clinicData && clinic.clinic_name}</Title>
          <Container className="ratingContainer">
            <Label>Ditt betyg</Label>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, value) => setRating(value)} />
          </Container>
          {/* <ErrorText>Betyg saknas</ErrorText> */}
          <FormTextfield
            title="Din titel"
            required
            type="text"
            placeholder="Ange titel..."
            value={title}
            onChange={(event) => setTitle(event.target.value)} />
          {/* <ErrorText>Titeln måste vara mer än 4 tecken</ErrorText> */}
          <FormTextarea
            required
            title="Ditt omdöme"
            placeholder="Ange omdöme..."
            value={review}
            onChange={(event) => setReview(event.target.value)} />
          {/* <ErrorText>Omdömet måste vara mellan 5 och 150 tecken</ErrorText> */}
          <FormTextfield
            required
            title="Ditt namn"
            type="text"
            placeholder="Ange namn..."
            value={name}
            onChange={(event) => setName(event.target.value)} />
          {/* <ErrorText>Ditt namn måste vara mer än 4 tecken</ErrorText> */}
          <FormBtn
            required
            title="Skicka omdöme"
            type="submit" />
          {!errorMessage && <ErrorText>Vänligen fyll i de fält som saknas</ErrorText>}
        </Form>
      </Container>
      {/* <Container className="imageContainer" /> */}
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding-top: 100px;
  padding: 100px 40px 40px 40px;

  @media (min-width: 768px) {
    padding: 120px 150px 80px 150px;
    background-color: #F2F2F2;
  }
`

const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
const ErrorText = styled.p`
  height: 0;
  overflow: visible;
  margin: 0;
  color: red;
  font-size: 10px;
`

const Label = styled.h4`
  width: 100%;
  margin: 5px 0;
  color: #2d3235;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-size: 14px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`
const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 3px 0 0 3px;

  &.imageContainer {
    width: 30%;
    border-radius: 0 3px 3px 0;
    //border-right: 10px solid #ffffff;
    //border-top: 10px solid #ffffff;
    //border-bottom: 10px solid #ffffff;
    // opacity: 0.7;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 340px;
    background-blend-mode: multiply;
  }

  &.ratingContainer {
    margin: 10px 0px;
    padding: 0;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 40px;
    box-shadow: 3px 4px 12px -8px rgba(196,196,196,1);
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  `