import React, { useState } from 'react'
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
  const pageNum = useSelector((store) => store.clinics.pageNum)

  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (search.replace(/\s/g, '').length === 0) {
      return setErrorMessage(true)
    } else {
      return dispatch(fetchClinics(search, sortOrder, pageNum))
    }
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
        <SearchTextfield
          type="text"
          placeholder="Ange region, ort eller adress..."
          value={search}
          onChange={(event) => onChangeEvent(event.target.value)} />
        <SearchBtn
          type="submit" />
      </Form>
      {errorMessage && (
        <ErrorMessage>Du måste ange ett område</ErrorMessage>
      )}
      <Overlay />
    </Section>
  )
}

const ErrorMessage = styled.p`
  display: block;
  font-size: 14px;
  color: #6ab0d2;
`

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
  margin: 120px 80px;
  padding: 120px 100px;
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