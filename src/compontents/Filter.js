import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

export const Filter = () => {
  return (
    <Section>
      <Container>
        <Btn>
          Filtrera
        </Btn>
        <Btn>
          Sortera
        </Btn>
      </Container>
      <Form>
        <Heading>
          Akut eller livshotande
        </Heading>
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
        <Heading>
          Klinikverksamhet
        </Heading>
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
    </Section>
  )
}