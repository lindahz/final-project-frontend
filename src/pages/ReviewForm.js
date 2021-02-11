import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, useHistory } from 'react-router-dom'

import styled from 'styled-components/macro'
import Rating from '@material-ui/lab/Rating'
import { withStyles } from '@material-ui/core/styles'

import { FormTextfield, FormTextarea } from '../lib/Textfields'
import { FormBtn, BackBtn } from '../lib/Buttons'
import backarrow from '../assets/icons/backarrow.svg'

export const ReviewForm = () => {
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [errorMessageRating, setErrorMessageRating] = useState(false)
  const [errorMessageTitle, setErrorMessageTitle] = useState(false)
  const [errorMessageReview, setErrorMessageReview] = useState(false)
  const [errorMessageName, setErrorMessageName] = useState(false)

  const clinicData = useSelector((store) => store.clinics.clinics.clinics)

  const history = useHistory()

  const clinic = clinicData && clinicData.find((item) => item._id === id)

  const REVIEW_URL = `https://health-finder.herokuapp.com/clinics/${id}/review`

  const redirectPage = (value) => value && history.push(`/kliniker/${id}`)

  const StyledRating = withStyles({
    iconFilled: {
      color: '#FFCC66'
    },
    iconHover: {
      color: '#FFCC66'
    }
  })(Rating);

  const reviewValidation = () => {
    if (rating < 1) {
      setErrorMessageRating(true)
    } else {
      setErrorMessageRating(false)
    }
    if (title.length < 5 || title.length > 60) {
      setErrorMessageTitle(true)
    } else {
      setErrorMessageTitle(false)
    }
    if (review.length < 5 || review.length > 300) {
      setErrorMessageReview(true)
    } else {
      setErrorMessageReview(false)
    }
    if (name.length < 2 || name.length > 26) {
      setErrorMessageName(true)
    } else {
      setErrorMessageName(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(REVIEW_URL, {
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
        redirectPage(json.success)
        reviewValidation()
      })
  }

  return (
    <Section>
      <StyledLink to={`/kliniker/${id}/`}>
        <BackBtn 
          title="Gå tillbaka"
          src={backarrow} />
      </StyledLink>
      <Container>
        <Form onSubmit={handleSubmit} noValidate>
          <Title>
            Skriv ett omdöme om {clinicData && clinic.clinic_name}
          </Title>
          <Container className="ratingContainer">
            <Label>
              Ditt betyg
            </Label>
            <StyledRating
              name="simple-controlled"
              size="large"
              value={rating}
              onChange={(event, value) => setRating(value)} />
          </Container>
          {errorMessageRating &&
          <ValidationText>
            Välj ett betyg
          </ValidationText>}
          <FormTextfield
            title="Omdömets titel"
            required
            type="text"
            placeholder="Ange titel..."
            value={title}
            onChange={(event) => setTitle(event.target.value)} />
          {errorMessageTitle &&
          <ValidationText>
            Titeln måste vara mellan 5 och 60 tecken
          </ValidationText>}
          <FormTextarea
            required
            title="Ditt omdöme"
            placeholder="Ange omdöme..."
            value={review}
            onChange={(event) => setReview(event.target.value)} />
          {errorMessageReview &&
          <ValidationText>
            Omdömet måste vara mellan 5 och 300 tecken
          </ValidationText>}
          <ValidationText className="counter">
            {review.length} / 300
          </ValidationText>
          <FormTextfield
            required
            title="Ditt namn"
            type="text"
            placeholder="Ange namn..."
            value={name}
            onChange={(event) => setName(event.target.value)} />
          {errorMessageName && 
          <ValidationText>
            Ditt namn måste vara mer än 4 tecken
          </ValidationText>}
          <FormBtn
            required
            title="Skicka omdöme"
            type="submit" />
        </Form>
      </Container>
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

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 3px 0 0 3px;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

const Title = styled.h3`
  margin: 0 0 10px 0;
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  letter-spacing: 0.5px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`

const ValidationText = styled.p`
  height: 0;
  overflow: visible;
  margin-top: -10px;
  color: red;
  font-size: 10px;

  &.counter {
    color: #2d3235;
    align-self: flex-end;
  }
`

const Label = styled.h4`
  width: 100%;
  margin: 5px 0;
  color: #2d3235;
  letter-spacing: 0.3px;
  font-weight: 500;
  font-size: 16px;
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  `