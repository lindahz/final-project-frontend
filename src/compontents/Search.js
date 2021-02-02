import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { SearchTextfield } from '../lib/Textfields'
import { SearchBtn } from '../lib/Buttons'
import tool from '../assets/tool.jpg'

export const Search = () => {
  const dispatch = useDispatch()
  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)

  // ALTERNATIVE TO THUNK
  /* const handleFetchSuccess = (json) => { dispatch(clinics.actions.generateClinics(json))}
  const CLINICS_URL = `http://localhost:8080/clinics?search=${search}&sortField=clinic_type`

  const handleFetch = (event) => {
    event.preventDefault()
    fetch(CLINICS_URL)
      .then((res) => res.json())
      .then((json) => handleFetchSuccess(json))
  }
  */

  // the fetch is called by this button
  // how can I then sort or change page after the first fetch
  // is completed without clicking the button?
  // behöver jag göra en ny fetch i sort kanske?

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchClinics(search, sortOrder))
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
      <Form onSubmit={handleSubmit}> {/*{handleFetch}*/}
        <SearchTextfield
          type="text"
          placeholder="Ange region, ort eller adress..."
          value={search}
          onChange={(event) => onChangeEvent(event.target.value)}
          required />
        <SearchBtn
          type="submit" />
      </Form>
      <Overlay />
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
  padding: 120px 100px;
  width: 100%;
  position: relative;
`
const Overlay = styled.div`
  background-image: url(${tool});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #e9f1ef;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
`
const Form = styled.form`
  display: flex;
`