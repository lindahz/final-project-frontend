import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Checkbox } from '../lib/Checkboxes'
import { ToggleBtn } from '../lib/Buttons'

export const Filter = () => {
  const [toggleFilter, setToggleFilter] = useState(false)
  const handleToggleFilter = () => setToggleFilter(!toggleFilter)

  const [toggleType, setToggleType] = useState(false)
  const handleToggleType = () => setToggleType(!toggleType)

  const [toggleOpen, setToggleOpen] = useState(false)
  const handleToggleOpen = () => setToggleOpen(!toggleOpen)

  const [toggleOther, setToggleOther] = useState(false)
  const handleToggleOther = () => setToggleOther(!toggleOther)
  // const dispatch = useDispatch()

  // ADD DISPATCH FUNCION FOR FILTERING

  // const handleCheckboxClick = () => {
  //   dispatch(clinics.actions.toggleFilter(clinics.name))
  // }

  return (
    <>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleFilter()}
          title="Ärende" />
        {toggleFilter && (
          <Container>
            <Checkbox
              label="Akut/livshotande"
              id="emergency"
              value="emergency" />
            <Checkbox
              label="Vårdbesök"
              id="visit"
              value="visit" />
          </Container>
        )}
      </Wrapper>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleType()}
          title="Verksamhet" />
        {toggleType && (
          <Container>
            <Checkbox
              label="Akutmottagning"
              id="hospital"
              value="hospital" />
            <Checkbox
              label="Närakut"
              id="emergency-clinic"
              value="emergency-clinic" />
            <Checkbox
              label="Vårdcentral"
              id="clinic"
              value="clinic" />
          </Container>
        )}
      </Wrapper>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleOpen()}
          title="Öppettider" />
        {toggleOpen && (
          <Container>
            <Checkbox
              label="Dygnet runt"
              id="all-hours"
              value="all-hours" />
            <Checkbox
              label="Vardagar 8 - 17"
              id="weekdays"
              value="weekdays" />
            <Checkbox
              label="Helger 8 - 17"
              id="weekends"
              value="weekends" />
          </Container>
        )}
      </Wrapper>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleOther()}
          title="Övrigt" />
        {toggleOther && (
          <Container>
            <Checkbox
              label="Drop-in"
              id="dropin"
              value="dropin" />
          </Container>
        )}
      </Wrapper>
    </>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  background-color: #EEEEEE;
  padding: 10px;
  box-shadow: 10px 10px 14px -9px rgba(45,50,53,0.6);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`