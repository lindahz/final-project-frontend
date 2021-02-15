import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'
import Loader from 'react-loader-spinner'

import { clinics } from '../../reducers/clinics'
import { fetchClinics } from '../../reducers/reusable'

import { SearchTextfield } from '../../lib/Textfields'
import { SearchBtn } from '../../lib/Buttons'

export const Search = () => {
  const dispatch = useDispatch()
  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  const pageNum = useSelector((store) => store.clinics.pageNum)
  const setLoading = useSelector((state) => state.clinics.isLoading)

  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (search.replace(/\s/g, '').length === 0) {
      setErrorMessage(true)
    } else {
      return dispatch(fetchClinics(search, sortOrder, pageNum))
    }
  }

  const onChangeEvent = (value) => dispatch(clinics.actions.generateSearch(value))

  return (
    <Section>
      <Container>
        <Title>
          Hitta vårdgivare i ditt område.
        </Title>
        <Subtitle>
          Vi hjälper dig att hitta och jämföra
          vårdgivare och få stöd med att få den vård du behöver.
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <SearchTextfield
            type="text"
            placeholder="Ange region, ort eller adress..."
            value={search}
            onChange={(event) => onChangeEvent(event.target.value)} />
          <SearchBtn
            type="submit" />
          <LoaderContainer>
            <Loader
              type="TailSpin"
              color="#ffffff"
              height={40}
              width={40}
              visible={setLoading} />
          </LoaderContainer>
        </Form>
        {errorMessage
        && <ErrorText>Du måste ange ett område</ErrorText>}
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
  padding: 200px 25px 300px 25px;
  position: relative;
  background-color: #394359;
  border-radius: 3px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 100%;
    min-height: 100vh;
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
const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  position: relative;
`

const LoaderContainer = styled.div`
  position: absolute;
  bottom: -50px;
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1px;
  margin: 0;
  color: #ffffff;

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
  font-weight: 500;
  color: #ffffff;

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
const ErrorText = styled.p`
  height: 0;
  margin: 0;
  font-size: 12px;
  color: #ba6c65;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`