import React from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import 'moment/locale/sv'

import { clinics } from 'reducers/clinics'

export const Reviews = ({ rating, review, review_date, name }) => {
  return (
    <Article>
      <Rating>{rating}/5</Rating>
      <Wrapper>
        <Name>{name}</Name>
        <Date>{moment(review_date).fromNow()}</Date>
      </Wrapper>
      <Review>{review}</Review>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid;
  flex: 50%;
`
const Wrapper = styled.div`
`
const Name = styled.h4`
  margin: 0;
`
const Rating = styled.h3`
  margin: 0;
`
const Date = styled.span`
  margin: 0;
`
const Review = styled.h4`
  margin: 10px 0;
  flex: 100%;
  font-weight: 300;
`