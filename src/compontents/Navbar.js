import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { Textfield } from '../lib/Textfields'
import { Button } from '../lib/Buttons'

export const Navbar = () => {
  const search = useSelector((store) => store.clinics.search)
  const dispatch = useDispatch()

  // how can I then sort or change page after the
  // first fetch is completed without clicking the button?

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
        <Button type="submit" />
        <Textfield
          onChange={(event) => onChangeEvent(event.target.value)}
          type="text"
          placeholder="Ange region, ort eller adress...."
          required />
      </Form>
      <Container>
        <Link to="/"><Category>Hitta och jämför vård</Category></Link>
        <Link to="/fakta-och-rad"><Category>Fakta och råd</Category></Link>
        <Link to="/om-oss"><Category>Om oss</Category></Link>
        <Link to="/kontakt"><Category>Kontakt</Category></Link>
      </Container>
    </Section>
  )
}

const Section = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 29px -16px rgba(156,156,156,0.6);
`
const Form = styled.form`
  display: flex;
  margin-left: 10px;
`
const Container = styled.div`
  margin-right: 10px;
`
const Category = styled.a`
  display: inline-block;
  padding: 25px 10px;
  color: #2d3235;
  font-weight: 500;
  margin: 0 10px;
  border-bottom: 3px solid #ffffff;
  transition: 0.3s ease;

  &:hover {
    border-bottom: 3px solid #d4a5a5;
    font-weight: 500;
    color: #000000;
  }
`