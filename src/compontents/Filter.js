import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'

import { Checkbox } from '../lib/Checkboxes'
import { ToggleBtn } from '../lib/Buttons'

export const Filter = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const dispatch = useDispatch()

  const handleCheckboxClick = (value) => {
    dispatch(clinics.actions.toggleFilter(value))
  }

  return (
    <Section>
      {/* <ToggleBtn
        onClick={() => handleToggle()}
        title="Ärende" /> */}
      <Container> {/* visibility={toggle} */}
        <Category>Ärende</Category>
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
        <Category>Öppettider</Category>
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
        <Category>Övrigt</Category>
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

const Category = styled.p`
  width: 100%;
`