import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'

export const Search = () => {
  const search = useSelector((store) => store.clinics.search)
  const dispatch = useDispatch()

  // the fetch is called by this button - how can I then sort or change page after the first fetch is completed without clicking the button?
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchClinics(search))
  }

  const onChangeEvent = (value) => {
    dispatch(clinics.actions.generateSearch(value))
  }

  return (
    <Section>
      <Title>Health finder</Title>
      <Subtitle>Vi hjälper dig att hitta och jämföra vårdgivare och få stöd med att få den vård du behöver. </Subtitle>
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

const Title = styled.h1`
  font-size: 56px;
  margin: 25px 100px 25px 25px;
`
const Subtitle = styled.h3`
  font-size: 22px;
  margin: 25px 200px 25px 25px;
  width: 60%;
`
const Textfield = styled.input`
  background-color: lightyellow;
  border: solid 1px #000000;
  min-width: 300px;
  font-size: 20px;
  padding: 10px;
  margin-left: 25px;
`
const Btn = styled.button`
  background-color: lightyellow;
  border: solid 1px #000000;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
`
const Section = styled.section`
  background-color: lightblue;
  padding: 80px 80px;
  width: 100%;
`
const Form = styled.form`
  display: flex;
`