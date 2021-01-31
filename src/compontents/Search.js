import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { Textfield } from '../lib/Textfields'
import { Button } from '../lib/Buttons'

export const Search = () => {
  const search = useSelector((store) => store.clinics.search)
  const dispatch = useDispatch()

  // the fetch is called by this button
  // how can I then sort or change page after the first fetch
  // is completed without clicking the button?

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
      <Subtitle>
        Vi hjälper dig att hitta och jämföra vårdgivare och få stöd med att få den vård du behöver.
      </Subtitle>
      <Form onSubmit={handleSubmit}>
        <Textfield
          type="text"
          placeholder="Ange region, ort eller adress..."
          value={search}
          onChange={(event) => onChangeEvent(event.target.value)}
          required />
        <Button
          type="submit" />
      </Form>
    </Section>
  )
}

const Title = styled.h1`
  font-size: 56px;
  color: #2d3235;
  margin: 25px 100px 25px 0;
`
const Subtitle = styled.h3`
  font-size: 22px;
  color: #2d3235;
  margin: 25px 200px 25px 0;
  width: 50%;
`
const Section = styled.section`
  background-color: #d4a5a5;
  padding: 120px 100px;
  width: 100%;
`
const Form = styled.form`
  display: flex;
`