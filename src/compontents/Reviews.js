import React from 'react'

import moment from 'moment'
import 'moment/locale/sv'

import { clinics } from 'reducers/clinics'

export const Reviews = ({ rating, review, review_date, name }) => {
  return (
    <>
      <h3>{rating}/5</h3>
      <h4>{name}</h4>
      <p>{moment(review_date).startOf('day').fromNow()}</p>
      <p>{review}</p>
    </>
  )
}