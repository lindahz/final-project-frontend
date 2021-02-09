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
    <Section>
      <Container>
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
      </Container>
    </Section>
  )
}

const Section = styled.section`
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  //position: absolute;
  //display: ${props => props.visibility ? 'block': 'none'};
`

const Subtitle = styled.h3`
  width: 100%;
  // margin: 18px 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`