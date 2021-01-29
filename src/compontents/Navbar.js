import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'

export const Navbar = () => {
  const search = useSelector((store) => store.clinics.search)
  const dispatch = useDispatch()

// how can I then sort or change page after the first fetch is completed without clicking the button?
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
        <Btn
          type="submit">
          icon
        </Btn>
        <Textfield
          type="text"
          placeholder="Ange region, ort eller adress..."
          value={search}
          onChange={(event) => onChangeEvent(event.target.value)} />
      </Form>
      <Container>
        <Category><Link to="/">Hitta och jämför vård</Link></Category>
        <Category><Link to="/fakta-och-rad">Fakta och råd</Link></Category>
        <Category><Link to="/om-oss">Om oss</Link></Category>
        <Category><Link to="/kontakt">Kontakt</Link></Category>
      </Container>
    </Section>
  )
}

const Section = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightyellow;
  border-bottom: 1px solid #000000;
`
const Form = styled.form`
  margin-left: 10px;
`
const Textfield = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
`
const Container = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`
const Category = styled.li`
  padding: 20px;
`
const Btn = styled.button`
  background-color: transparent;
  border: solid 1px #000000;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`