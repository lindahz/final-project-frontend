import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../../reducers/clinics'
import { Checkbox } from '../../lib/Checkboxes'

export const Filter = () => {
  const dispatch = useDispatch()

  const handleCheckboxClick = (value) => {
    dispatch(clinics.actions.toggleFilter(value))
  }

  return (
    <Form>
      <Heading>
        Ärende
      </Heading>
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
      <Heading>
        Öppettider
      </Heading>
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
      <Heading>
        Övrigt
      </Heading>
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

const Heading = styled.h3`
  margin: 12px 0;
  padding: 2px 0;
  border-bottom: 1px solid #2d3235;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    margin: 12px 100%;
  } 
`