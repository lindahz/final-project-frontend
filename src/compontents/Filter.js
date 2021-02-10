import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'
import Rating from '@material-ui/lab/Rating'
import { withStyles } from '@material-ui/core/styles'

import { clinics } from '../reducers/clinics'
import { Checkbox } from '../lib/Checkboxes'

const StyledRating = withStyles({
  iconFilled: {
    color: '#FFCC66'
  },
  iconHover: {
    color: '#ff3d47'
  }
})(Rating);

export const Filter = () => {
  const [rating, setRating] = useState(0)
  // console.log(rating)
  const dispatch = useDispatch()

  const handleCheckboxClick = (value) => {
    dispatch(clinics.actions.toggleFilter(value))
  }

  return (
    <Form>
        <Subtitle>Ärende</Subtitle>
        <Checkbox
          label="Akut"
          value="emg"
          id="emg"
          onChange={(event) => handleCheckboxClick(event.target.value)} />
        <Checkbox
          label="Vårdbesök"
          value="reg"
          id="reg"
          onChange={(event) => handleCheckboxClick(event.target.value)} />
        <Subtitle>Öppettider</Subtitle>
        <Checkbox
          label="Dygnet runt"
          value="all"
          id="all"
          onChange={(event) => handleCheckboxClick(event.target.value)} />
        <Checkbox
          label="Vardagar"
          value="week"
          id="week"
          onChange={(event) => handleCheckboxClick(event.target.value)} />
        <Checkbox
          label="Helger"
          value="wkn"
          id="wkn"
          onChange={(event) => handleCheckboxClick(event.target.value)} />
        {/* <Subtitle>Omdöme</Subtitle>
        <StyledRating
          name="simple-controlled"
          value={rating}
          onChange={(event, value) => setRating(value)} /> */}
        <Subtitle>Övrigt</Subtitle>
        <Checkbox
          label="Drop-in"
          value="dropin"
          id="dropin"
          onChange={(event) => handleCheckboxClick(event.target.value)} />
    </Form>
  )
}

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 60%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  } 
`

const Subtitle = styled.h3`
  margin: 12px 0;
  padding: 2px 0;
  border-bottom: 1px solid #2d3235;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    margin: 12px 100%;
  } 
`