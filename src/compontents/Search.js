import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'

export const Search = () => {
  const search = useSelector((store) => store.clinics.search)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchClinics(search))
  }

  const onChangeEvent = (value) => {
    dispatch(clinics.actions.generateSearch(value))
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Textfield
          type="text"
          placeholder="Ange region, ort eller adress..."
          value={search}
          onChange={(event) => onChangeEvent(event.target.value)} />
        <Btn
          type="submit">
          button
        </Btn>
      </Form>
    </Section>
  )
}

const Textfield = styled.input`
  background-color: lightyellow;
  border: solid 1px #000000;
  min-width: 300px;
  font-size: 20px;
  padding: 10px;
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
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  display: flex;
`