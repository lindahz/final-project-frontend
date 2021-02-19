import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Main/Search'
import { Info } from '../compontents/Main/Info'
import { Filter } from '../compontents/Main/Filter'
import { Sort } from '../compontents/Main/Sort'
import { ClinicList } from '../compontents/Main/ClinicList'
import { Pages } from '../compontents/Main/Pages'

import { ToggleBtn } from '../lib/Buttons'
import filterIcon from '../assets/icons/filterIcon.svg'

export const Main = () => {
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  const totalClinics = useSelector((store) => store.clinics.clinics.total_results)
  const search = useSelector((store) => store.clinics.search)

  // Function to toggle filter menu for mobile and tablet
  const [toggle, setToggle] = useState(false)
  const handleToggle = (event) => {
    event.preventDefault()
    setToggle(!toggle)
  }

  return (
    <Section>
      {!clinicData && (
        <Container>
          <Search />
          <Info />
        </Container>
      )}
      {clinicData && (
        <FilterControls visibility={toggle}>
          <ToggleBtn
            display="flex"
            type="submit"
            onTouchEnd={handleToggle}
            onMouseUp={handleToggle}
            src={filterIcon}
            alt="Växla filter"
            width="25px" />
          <FilterContainer visibility={toggle}>
            <Heading className="filterTitle">
              Filtrera
            </Heading>
            <Filter />
            <Heading className="filterTitle">
              Sortera
            </Heading>
            <Sort />
          </FilterContainer>
        </FilterControls>
      )}
      {clinicData && (
        <Container className="clinicListContainer">
          <ToggleBtn
            type="submit"
            title="Filter"
            onTouchEnd={handleToggle}
            onMouseUp={handleToggle}
            src={filterIcon}
            alt="Växla filter"
            width="15px" />
          {clinicData && totalClinics !== 0 && (
            <Heading>
              Visar
              <Span>
                {clinicData.length} av {totalClinics}
              </Span>
              vårdgivare som matchade din sökning.
            </Heading>
          )}
          {clinicData && totalClinics === 0 && (
            <Heading>
              Inga kliniker matchade din sökning <Span>{search}.</Span> Försök gärna igen.
            </Heading>
          )}
          {clinicData && clinicData
            .length > 0 && clinicData
            .map((clinic, index) => {
              return (
                <ClinicList
                  key={index}
                  {... clinic} />
              )
            })}
          <Pages />
        </Container>
      )}
    </Section>
  )
}

// STYLING ------------------------------------
const Section = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
`

const Container = styled.div`
  width: 100%;

  &.clinicListContainer {
    min-height: 100vh;
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;

    @media (min-width: 768px) {
      height: auto;
      padding: 120px 40px 40px 60px;
      align-content: center;
    }
  }
`

const FilterControls = styled.div`
  z-index: 2;
  min-height: 100%;
  padding: 100px 30px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-right: 1px solid #d6d6d6;
  width: ${(props) => (props.visibility ? '100%' : '0%')};
  opacity: ${(props) => (props.visibility ? '1' : '0')};
  transition: all 0.2s ease-out; 

  @media (min-width: 1025px) {
    z-index: auto;
    height: inherit;
    padding-top: 160px;
    position: static;
    opacity: 1;
    width: ${(props) => (props.visibility ? '100px' : '500px')};
  }
`

const FilterContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  transition: all 0.2s ease-out; 
  visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visibility ? '1' : '0')};

  @media (min-width: 1025px) {
    width: 300px;
    align-items: flex-start;
    visibility: ${(props) => (props.visibility ? 'hidden' : 'visible')};
    opacity: ${(props) => (props.visibility ? '0' : '1')};
  }
`

const Heading = styled.h3`
  width: inherit;
  margin: 10px;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  &.filterTitle {
    width: auto;
    margin: 20px 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    @media (min-width: 768px) {
      align-self: center;
    }
  }
`

const Span = styled.span`
  margin: 0 4px;
  display: inline-block;
  font-weight: 700;
`