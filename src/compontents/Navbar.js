import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { CustomSearchTextfield } from '../lib/Textfields'
import { CustomSearchBtn } from '../lib/Buttons'

import logo from '../assets/logo.png'

export const Navbar = () => {
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  const pageNum = useSelector((store) => store.clinics.pageNum)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchClinics(search, sortOrder, pageNum))
  }

  const onChangeEvent = (value) => {
    dispatch(clinics.actions.generateSearch(value))
  }
  return (
    <Section>
      <Container>
        <Logo src={logo} />
        {!clinicData && (
          <Form onSubmit={handleSubmit}>
            <CustomSearchBtn type="submit" />
            <CustomSearchTextfield
              onChange={(event) => onChangeEvent(event.target.value)}
              type="text"
              placeholder="Ange region, ort eller adress...."
              required />
          </Form>
        )}
      </Container>
      <Container>
        <Link to="/"><CategoryText>Hitta och jämför vård</CategoryText></Link>
        <Link to="/fakta-och-rad"><CategoryText>Fakta och råd</CategoryText></Link>
        <Link to="/om-oss"><CategoryText>Om oss</CategoryText></Link>
        <Link to="/kontakt"><CategoryText>Kontakt</CategoryText></Link>
      </Container>
    </Section>
  )
}

const Section = styled.div`
  z-index: 1;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 29px -16px rgba(156,156,156,0.6);
  
  @media (min-width: 768px) {
  }
`
const Form = styled.form`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-left: 10px;
    justify-self: flex-end;
  }
`
const Container = styled.div`
  margin-right: 40px;
  display: flex;
  align-items: center;
`
const CategoryText = styled.a`
  display: inline-block;
  padding: 25px 10px;
  color: #2d3235;
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
  border-bottom: 3px solid #ffffff;
  transition: 0.3s ease;

  &:hover {
    border-bottom: 3px solid #d4a5a5;
    font-weight: 500;
    color: #000000;
  }

  @media (min-width: 768px) {
    font-size: 16px; 
  }
`
const Logo = styled.img`
  width: 50px;
  height: inherit;
  margin: 0 40px;
  float: left;
`