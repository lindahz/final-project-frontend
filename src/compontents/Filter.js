import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { CustomCheckbox } from '../lib/Checkboxes'

export const Filter = () => {
  // const dispatch = useDispatch()

  // ADD DISPATCH FUNCION FOR FILTERING

  // const handleCheckboxClick = () => {
  //   dispatch(clinics.actions.toggleFilter(clinics.name))
  // }

  return (
    <Section>
      <Form>
        <Heading>Akut eller livshotande</Heading>
        <Label><CustomCheckbox />Ja</Label>
        <Heading>Klinikverksamhet</Heading>
        <Label><CustomCheckbox />Akutmottagning</Label>
        <Label><CustomCheckbox />Vårdcentral</Label>
        <Label><CustomCheckbox />Närakut</Label>
        <Heading>Öppettider</Heading>
        <Label><CustomCheckbox />Dygnet runt</Label>
        <Label><CustomCheckbox />Vardagar 8 - 17</Label>
        <Label><CustomCheckbox />Helger 8 - 17</Label>
        <Heading>Övrigt</Heading>
        <Label><CustomCheckbox />Endast drop-in
        </Label>
      </Form>
    </Section>
  )
}
const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
const Label = styled.label`
  display: flex;
  margin: 5px 0;
`
const Form = styled.form`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 80px;
`
const Heading = styled.h3`

`