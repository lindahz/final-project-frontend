import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { CustomSearchTextfield } from '../lib/Textfields'
import { CustomSearchBtn } from '../lib/Buttons'
import { ToggleBtn } from '../lib/Buttons'

import logo from '../assets/logo.png'
import cross from '../assets/cross.svg'
import hamburgerMenu from '../assets/hamburgerMenu.svg'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

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
      <ToggleBtn type="submit" onClick={handleToggle} src={hamburgerMenu} width="100%" />
      <CompanyLogo src={logo} />
      <HamburgerContainer visibility={toggle}>
        <ToggleBtn type="submit" title="Stäng" onClick={handleToggle} src={cross} />
        <Text>Sök efter vårdgivare i Sverige</Text>
        <HamburgerForm onSubmit={handleSubmit}>
          <CustomSearchBtn type="submit" />
          <CustomSearchTextfield
            onChange={(event) => onChangeEvent(event.target.value)}
            type="text"
            placeholder="Ange region, ort eller adress...."
            required />
        </HamburgerForm>
        <Link to="/"><CategoryText>Hitta och jämför vård</CategoryText></Link>
        <Link to="/fakta-och-rad"><CategoryText>Fakta och råd</CategoryText></Link>
        <Link to="/om-oss"><CategoryText>Om oss</CategoryText></Link>
        <Link to="/kontakt"><CategoryText>Kontakt</CategoryText></Link>
      </HamburgerContainer>
      <Container>
        <Link to="/"><CategoryText>Hitta och jämför vård</CategoryText></Link>
        <Link to="/fakta-och-rad"><CategoryText>Fakta och råd</CategoryText></Link>
        <Link to="/om-oss"><CategoryText>Om oss</CategoryText></Link>
        <Link to="/kontakt"><CategoryText>Kontakt</CategoryText></Link>
      </Container>
      {clinicData && (
        <Form onSubmit={handleSubmit}>
          <CustomSearchBtn type="submit" />
          <CustomSearchTextfield
            onChange={(event) => onChangeEvent(event.target.value)}
            type="text"
            placeholder="Ange region, ort eller adress...."
            required />
        </Form>
      )}
    </Section>
  )
}

const Section = styled.div`
  z-index: 1;
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 10px 10px 29px -16px rgba(156,156,156,0.6);
  
  @media (min-width: 1025px) {
    padding: 0;
    overflow: hidden;
  }
`
const Container = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    font-size: 16px;
  }
`
const HamburgerContainer = styled.div`
  z-index: 2;
  height: 100vh;
  padding: 25px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  background-color: ${(props) => props.visibility ? '#ffffff': 'transparent'};
  width: ${(props) => props.visibility ? '100%': '0%'};
  opacity: ${(props) => props.visibility ? '1': '0'};
  visibility: ${(props) => props.visibility ? 'visible': 'hidden'};
  transition: all 0.1s ease-out;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    padding: 50px 80px;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`
const Form = styled.form`
  width: 100%;
  display: none;
  margin-bottom: 50px;

  @media (min-width: 1025px) {
    width: initial;
    display: flex;
    margin: 0;
  }
`
const HamburgerForm = styled(Form)`
  display: flex;

  @media (min-width: 1025px) {
    display: none;
  }
`

const Text = styled.h3`
  margin-top: 50px;
  display: block;
  font-size: 22px;
  font-weight: 800;

  @media (max-width: 320px) {
    font-size: 20px;
  }

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    font-size: 28px;
  }

 @media (min-width: 1025px) {
    display: none;
  }
`
const CategoryText = styled.a`
  margin: 5px 0;
  padding: 0;
  display: inline-block;
  color: #2d3235;
  font-size: 20px;
  font-weight: 500;
  transition: 0.3s ease;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    font-size: 24px;
  }

  @media (min-width: 1025px) {
    margin: 0 10px;
    padding: 25px 10px;
    border-bottom: 3px solid #ffffff;
    font-size: 16px;

    &:hover {
    border-bottom: 3px solid #949cdf;
    font-weight: 500;
    color: #000000;
  }
  }
`
const CompanyLogo = styled.img`
  width: 45px;
  height: inherit;

  @media (min-width: 1025px) {
    width: 50px;
    margin: 0 40px;
    justify-self: flex-start;
  }
`