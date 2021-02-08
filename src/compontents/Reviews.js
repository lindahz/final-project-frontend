import React from 'react'

import styled from 'styled-components/macro'
import moment from 'moment'
import 'moment/locale/sv'

import Rating from '@material-ui/lab/Rating'
import { withStyles } from '@material-ui/core/styles'

// import { clinics } from 'reducers/clinics'

export const Reviews = ({ rating, review, review_date, name, title }) => {

  const StyledRating = withStyles({
    iconFilled: {
      color: '#FFCC66'
    },
    iconHover: {
      color: '#ff3d47'
    }
  })(Rating);

  return (
    <ReviewContainer>
      <Wrapper>
        <StyledRating
          name="read-only"
          value={rating}
          readOnly />
        <ReviewDate>{moment(review_date).fromNow()}</ReviewDate>
      </Wrapper>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewText>{review}</ReviewText>
      <ReviewName>{name}</ReviewName>
    </ReviewContainer>
  )
}

const ReviewContainer = styled.div`
  display: block;
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #d6d6d6;
  flex: 50%;
`
const ReviewTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 600;
`
const ReviewText = styled.h4`
  margin: 10px 0;
  font-weight: 500;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ReviewName = styled.h4`
  margin: 10px 0;
  font-weight: 500;
  color: #898989;
`
const ReviewDate = styled.p`
  margin: 0;
  font-weight: 500;
  color: #898989;
`