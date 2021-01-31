import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'

export const Filter = () => {
  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)
  const handleToggleFilter = () => setToggleFilter(!toggleFilter)
  const handleToggleSort = () => setToggleSort(!toggleSort)

  const sort = useSelector((store) => store.clinics.sortField)
  const dispatch = useDispatch()

  const handleClick = (value) => {
    dispatch(clinics.actions.generateSortField(value))
    dispatch(fetchClinics(sort))
  }
  
  const options = [
    {value: 'asc', label: 'Kliniknamn A-Z'},
    {value: 'dsc', label: 'Kliniknamn Z-A'}
  ]

  return (
    <Section>
      <Container>
        <Btn onClick={() => handleToggleFilter()}>Filtrera</Btn>
        <Btn onClick={() => handleToggleSort()}>Sortera efter</Btn>
      </Container>
      {toggleSort && (
        <SortContainer>
          <p>Sortera efter</p>
          <Select options={options} />
          <ul>
            <li><Btn value="clinic_name" onClick={(event) => handleClick(event.target.value)}>Kliniknamn A - Z</Btn></li>
            <li><Btn value="address" onClick={(event) => handleClick(event.target.value)}>Adress A - Z</Btn></li>
          </ul>
        </SortContainer>
      )}
      {toggleFilter && (
        <Form>
          <Heading>Akut eller livshotande</Heading>
          <Label>
            <RadioBtn
              type="radio" />
            Ja
          </Label>
          <Label>
            <RadioBtn
              type="radio" />
            Nej
          </Label>
          <Heading>Klinikverksamhet</Heading>
          <Label>
            <Checkbox
              type="checkbox" />
            Vårdcentral
          </Label>
          <Label>
            <Checkbox
              type="checkbox" />
            Närakut
          </Label>
          <Label>
            <Checkbox
              type="checkbox" />
            Akutmottagning
          </Label>
          <Heading>
            Öppettider
          </Heading>
          <Label>
            <Checkbox
              type="checkbox" />
              Dygnet runt
          </Label>
          <Label>
            <Checkbox
              type="checkbox" />
              Vardagar 8 - 17
          </Label>
          <Label>
            <Checkbox
              type="checkbox" />
              Helger 8 - 17
          </Label>
          <Heading>
            Drop-in
          </Heading>
          <Label>
            <Checkbox
              type="checkbox" />
              Ja
          </Label>
        </Form>
      )}
    </Section>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding: 10px;
  margin: 20px 0;
`

const Btn = styled.button`
  background-color: lightyellow;
  border: solid 1px #000000;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
`
const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
const RadioBtn = styled.input`
  margin-right: 5px;
`
const Checkbox = styled.input`
  margin-right: 5px;
`

const Label = styled.label`

`
const Form = styled.form`
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin-top: 20px;
`
const Heading = styled.h3`

`