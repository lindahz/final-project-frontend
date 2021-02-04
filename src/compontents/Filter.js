import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'

import { Checkbox } from '../lib/Checkboxes'
import { ToggleBtn } from '../lib/Buttons'

export const Filter = () => {
  const [toggleErrand, setToggleErrand] = useState(false)
  const [toggleType, setToggleType] = useState(false)
  const [toggleOpen, setToggleOpen] = useState(false)
  const [toggleOther, setToggleOther] = useState(false)

  const handleToggleErrand = () => {
    setToggleErrand(!toggleErrand)
    setToggleType(false)
    setToggleOpen(false)
    setToggleOther(false)
  }

  const handleToggleType = () => {
    setToggleType(!toggleType)
    setToggleErrand(false)
    setToggleOpen(false)
    setToggleOther(false)
  }

  const handleToggleOpen = () => {
    setToggleOpen(!toggleOpen)
    setToggleErrand(false)
    setToggleType(false)
    setToggleOther(false)
  }

  const handleToggleOther = () => {
    setToggleOther(!toggleOther)
    setToggleErrand(false)
    setToggleType(false)
    setToggleOpen(false)
  }

  const errand = useSelector((store) => store.clinics.filter.errand)
  const type = useSelector((store) => store.clinics.filter.type)
  const open = useSelector((store) => store.clinics.filter.open)
  const other = useSelector((store) => store.clinics.filter.other)

  const dispatch = useDispatch()

  // ADD DISPATCH FUNCION FOR FILTERING

  const handleCheckboxErrandClick = (value) => {
    dispatch(clinics.actions.toggleErrand(value))
  }
  const handleCheckboxTypeClick = (value) => {
    dispatch(clinics.actions.toggleType(value))
  }
  const handleCheckboxOpenClick = (value) => {
    dispatch(clinics.actions.toggleOpen(value))
  }
  const handleCheckboxOtherClick = (value) => {
    dispatch(clinics.actions.toggleOther(value))
  }

  return (
    <>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleErrand()}
          title="Ärende" />
        {errand.map((item) => {
          return (
            <Container visibility={toggleErrand}>
              <Checkbox
                label={item.label}
                id={item.id}
                value={item.value}
                onChange={(event) => handleCheckboxErrandClick(event.target.value)} />
            </Container>
          )
        })}
        {/* {toggleErrand && (
          <Container>
            <Checkbox
              label="Akut/livshotande"
              id="emergency"
              value="emergency"
              onChange={handleCheckboxClick} />
            <Checkbox
              label="Vårdbesök"
              id="visit"
              value="visit" />
          </Container>
        )} */}
      </Wrapper>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleType()}
          title="Verksamhet" />
        {type.map((item) => {
          return (
            <Container visibility={toggleType}>
              <Checkbox
                label={item.label}
                id={item.id}
                value={item.value}
                onChange={(event) => handleCheckboxTypeClick(event.target.value)} />
            </Container>
          )
        })}
        {/* {toggleType && (
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
        )} */}
      </Wrapper>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleOpen()}
          title="Öppettider" />
        {open.map((item) => {
          return (
            <Container visibility={toggleOpen}>
              <Checkbox
                label={item.label}
                id={item.id}
                value={item.value}
                onChange={(event) => handleCheckboxOpenClick(event.target.value)} />
            </Container>
          )
        })}
        {/* {toggleOpen && (
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
        )} */}
      </Wrapper>
      <Wrapper>
        <ToggleBtn
          onClick={() => handleToggleOther()}
          title="Övrigt" />
        {other.map((item) => {
          return (
            <Container visibility={toggleOther}>
              <Checkbox
                label={item.label}
                id={item.id}
                value={item.value}
                onChange={(event) => handleCheckboxOtherClick(event.target.value)} />
            </Container>
          )
        })}
        {/* {toggleOther && (
          <Container>
            <Checkbox
              label="Drop-in"
              id="dropin"
              value="dropin" />
          </Container>
        )} */}
      </Wrapper>
    </>
  )
}
const Container = styled.div`
  width: 100%;
  //position: absolute;
  display: ${props => props.visibility ? 'block': 'none'};
  top: 42px;
  flex-direction: column;
  margin: 0 10px;
  background-color: #EEEEEE;
  padding: 10px;
  box-shadow: 10px 10px 14px -9px rgba(45,50,53,0.6);
  //transition: visibility 0s, opacity 0.5s linear;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
`