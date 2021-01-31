import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Reviews } from '../compontents/Reviews'

export const ClinicDetails = () => {
  const [clinic, setClinic] = useState({})
  const [reviews, setReviews] = useState('')

  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')

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

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:8080/clinics/${id}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        review: review,
        rating: +rating,
        name: name,
        clinic_id: id
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
  }

  console.log(reviews)
  console.log(clinic)
  return (
    <Section>
      <Link to="/"><Btn>gå tillbaka</Btn></Link>
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
        <Subtitle>Skriv ett omdöme</Subtitle>
        <Form onSubmit={handleSubmit}>
          <input
            type="text" 
            placeholder="Ange rankning..."
            value={rating}
            onChange={(event) => setRating(event.target.value)} />
          <textarea 
            placeholder="Ange omdöme..."
            value={review}
            onChange={(event) => setReview(event.target.value)} />
          <input
            type="text"
            placeholder="Ange namn..."
            value={name}
            onChange={(event) => setName(event.target.value)} />
          <button type="submit">submit</button>
        </Form>
        <Subtitle>Omdömen ({clinic.text_reviews_count})</Subtitle>
        {reviews && reviews.map((review, index) => {
          return (
            <Reviews
              key={index}
              {...review} />
          )
        })}
      </WrapperReview>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 80px 0 80px;
  width: 100%;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Btn = styled.button`
  font-size: 18px;
  color: gray;
  flex-grow: 2;
`
const Wrapper = styled.div`
  width: 60%;
  padding: 30px;
  margin: 40px;
  background-color: lightyellow;
`
const WrapperReview = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  margin: 40px;
  background-color: lightyellow;
`
const Subtitle = styled.h3`
  flex: 100%;
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