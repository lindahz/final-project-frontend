import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'

import Rating from '@material-ui/lab/Rating'

import { ReviewTextfield, ReviewTextarea } from '../lib/Textfields'
import { ReviewBtn } from '../lib/Buttons'

export const ReviewForm = ({ generateUpdate }) => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')

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
        generateUpdate(json)
        setName('')
        setRating('')
        setReview('')
      })
  }

  return (
    <Article>
      <Form onSubmit={handleSubmit}>
        <Title>Skriv ett omdöme om Axelsbergs vårdcentral</Title>
        <Container>
          <Label>Välj betyg</Label>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, value) => setRating(value)} />
        </Container>
        <ReviewTextfield
          title="Din titel"
          type="text"
          placeholder="Ange titel..."
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
        <ReviewTextarea
          title="Ditt omdöme"
          placeholder="Ange omdöme..."
          value={review}
          onChange={(event) => setReview(event.target.value)} />
        <ReviewTextfield
          title="Ditt namn"
          type="text"
          placeholder="Ange namn..."
          value={name}
          onChange={(event) => setName(event.target.value)} />
        <ReviewBtn
          title="Skicka omdöme"
          type="submit" />
      </Form>
    </Article>
  )
}

const Title = styled.h3`
  margin: 0 0 10px 0;
`
const Label = styled.h4`
  margin: 5px 0 5px 0;
  color: #2d3235;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Roboto', monospace;
`
const Form = styled.form`
  width: inherit;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`
const Container = styled.div`
  margin: 10px 0px;
`
const Article = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffecda;
`