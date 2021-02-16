/* eslint-disable camelcase */
import React from 'react'

import styled from 'styled-components/macro'
import moment from 'moment'
import 'moment/locale/sv'

import Rating from '@material-ui/lab/Rating'
import { withStyles } from '@material-ui/core/styles'

export const Reviews = ({
  rating,
  review,
  review_date,
  name,
  title
}) => {
  const StyledRating = withStyles({
    iconFilled: {
      color: '#FFCC66'
    },
    iconHover: {
      color: '#ff3d47'
    }
  })(Rating);

  return (
    <Container>
      <Wrapper>
        <StyledRating
          name="read-only"
          value={rating}
          readOnly />
        <Text className="dateText">
          {moment(review_date).fromNow()}
        </Text>
      </Wrapper>
      <Heading>
        {title}
      </Heading>
      <Text>
        {review}
      </Text>
      <Text className="nameText">
        {name}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #d6d6d6;
`
const Heading = styled.h3`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Text = styled.p`
  margin: 10px 0;
  font-weight: 500;
  font-size: 14px;

  &.nameText {
    color: #898989;
  }

  &.dateText {
    margin: 0;
    color: #898989;

    @media screen and (max-width: 320px) {
      font-size: 11px;
    }
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`