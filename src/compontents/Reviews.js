import React from 'react'
import { clinics } from 'reducers/clinics'

export const Reviews = ({ rating, review, review_date, name }) => {
  return (
    <>
      <p>Namn: {name} </p>
      <p>Datum: {review_date} </p>
      <p>Rakning: {rating} </p>
      <p>Omdöme: {review} </p>
    </>
  )
}