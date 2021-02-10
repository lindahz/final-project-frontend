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
      <Container>
        <Title>Hitta vårdgivare i ditt område!</Title>
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
        <BackgroundImage />
      </Container>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  min-height: 100vh;

  @media (min-width: 1025px) {
    height: initial;
  }
`
const Container = styled.div`
  height: inherit;
  margin: 0;
  padding: 200px 25px 300px 25px;
  position: relative;
  background-color: rgb(116, 199, 184, 0.4);
  border-radius: 3px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1025px) {
    margin: 110px 40px 0 40px;
    padding: 120px 150px 130px 150px;
  }
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin: 0;
  color: #2d3235;

  @media screen and (max-width: 320px) {
    font-size: 36px;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px) {
    width: 80%;
    font-size: 56px;
  }

  @media (min-width: 1025px) {
    width: 50%;
    font-size: 56px;
  }
`

const Subtitle = styled.h3`
  font-size: 18px;
  color: #2d3235;

  @media (max-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px) {
    width: 80%;
    margin: 25px 200px 25px 0;
    font-size: 22px;
  }

  @media (min-width: 1025px) {
    width: 50%;
    margin: 25px 200px 25px 0;
    font-size: 22px;
  }
`

const ErrorMessage = styled.p`
  height: 0;
  margin: 0;
  overflow: visible;
  font-size: 12px;
  color: #6ab0d2;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`
const BackgroundImage = styled.div`
  position: absolute;
  background-image: url(${tool});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: #e9f1ef;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
`
const Form = styled.form`
  display: flex;
`