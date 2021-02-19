import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'
import Loader from 'react-loader-spinner'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { CustomSearchTextfield } from '../lib/Textfields'
import { CustomSearchBtn, ToggleBtn } from '../lib/Buttons'

import companyLogo from '../assets/companyLogo.svg'
import cross from '../assets/icons/cross.svg'

import hamburgerMenu from '../assets/icons/hamburgerMenu.svg'

// Function to toggle hamburger menu for mobile and tablet
export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = (event) => {
    event.preventDefault()
    setToggle(!toggle)
  }

  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  const pageNum = useSelector((store) => store.clinics.pageNum)
  const setLoading = useSelector((state) => state.clinics.isLoading)
  const openHours = useSelector((store) => store.clinics.filter.openHours)
  const dropin = useSelector((store) => store.clinics.filter.dropin)
  const clinicType = useSelector((store) => store.clinics.filter.clinicType)
  const avgRating = useSelector((store) => store.clinics.filter.avgRating)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (search.replace(/\s/g, '').length !== 0) {
      dispatch(fetchClinics(
        search,
        sortOrder,
        pageNum,
        clinicType,
        openHours,
        dropin,
        avgRating
      ))
    }
  }

  const onChangeEvent = (value) => {
    dispatch(clinics.actions.generateSearch(value))
  }
  return (
    <Section>
      <ToggleBtn
        type="submit"
        src={hamburgerMenu}
        alt="Öppna meny"
        onTouchEnd={handleToggle}
        onMouseUp={handleToggle}
        width="35px" />
      <CompanyLogo
        src={companyLogo}
        alt="Health Finders logotyp" />
      <HamburgerContainer visibility={toggle}>
        <ToggleBtn
          type="submit"
          title="Stäng"
          width="18px"
          onTouchEnd={handleToggle}
          onMouseUp={handleToggle}
          src={cross}
          alt="Stäng meny" />
        <Text>
          Sök efter vårdgivare i Sverige
        </Text>
        <HamburgerForm
          onSubmit={handleSubmit}
          visibility={toggle}>
          <CustomSearchBtn type="submit" />
          <CustomSearchTextfield
            onChange={(event) => onChangeEvent(event.target.value)}
            type="text"
            placeholder="Ange region, ort eller adress...."
            required />
          <LoaderContainer>
            <Loader
              type="TailSpin"
              color="#ba6c65"
              height={40}
              width={40}
              visible={setLoading} />
          </LoaderContainer>
        </HamburgerForm>
        <Link to="/">
          <CategoryText>
          Hitta och jämför vård
          </CategoryText>
        </Link>
        <Link to="/fakta-och-rad">
          <CategoryText>
            Fakta och råd
          </CategoryText>
        </Link>
        <Link to="/om-oss">
          <CategoryText>
            Om oss
          </CategoryText>
        </Link>
        <Link to="/kontakt">
          <CategoryText>
            Kontakt
          </CategoryText>
        </Link>
      </HamburgerContainer>
      <Container>
        <Link to="/">
          <CategoryText>
            Hitta och jämför vård
          </CategoryText>
        </Link>
        <Link to="/fakta-och-rad">
          <CategoryText>
            Fakta och råd
          </CategoryText>
        </Link>
        <Link to="/om-oss">
          <CategoryText>
            Om oss
          </CategoryText>
        </Link>
        <Link to="/kontakt">
          <CategoryText>
            Kontakt
          </CategoryText>
        </Link>
      </Container>
      {clinicData && (
        <Form onSubmit={handleSubmit}>
          <CustomSearchBtn type="submit" />
          <CustomSearchTextfield
            onChange={(event) => onChangeEvent(event.target.value)}
            type="text"
            placeholder="Ange region, ort eller adress...."
            required />
          <LoaderContainer>
            <Loader
              type="TailSpin"
              color="#ba6c65"
              height={40}
              width={40}
              visible={setLoading} />
          </LoaderContainer>
        </Form>
      )}
    </Section>
  )
}

// STYLING ------------------------------------
const Section = styled.div`
  z-index: 999;
  width: 100%;
  padding: 0 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 10px 10px 29px -16px rgba(156,156,156,0.6);
  
  @media (min-width: 1025px) {
    padding: 0 20px;
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
  min-height: 100vh;
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  width: ${(props) => (props.visibility ? '100%' : '0%')};
  opacity: ${(props) => (props.visibility ? '1' : '0')};
  visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
  transition: all 0.2s ease-out;

  @media only screen and (max-width: 1000px) and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

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
  position: relative;

  @media only screen and (max-width: 1000px) and (orientation: landscape) {
    width: 80%;
  }

  @media (min-width: 1025px) {
    width: initial;
    display: flex;
    margin: 0;
  }
`

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 20px;
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
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-weight: 800;

  @media only screen and (max-width: 1000px) and (orientation: landscape) {
    width: 100%;
    margin-top: 20px;
  }

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
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.3px;
  font-size: 20px;
  font-weight: 500;
  color: #2d3235;
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
    border-bottom: 3px solid #ba6c65;
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
    margin: 0 20px;
    justify-self: flex-start;
  }
`