import React, { useEffect, useState } from 'react'
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
  const [toggle, setToggle] = useState(false)
  const handleToggle = (event) => {
    event.preventDefault()
    setToggle(!toggle)
  }
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  const totalClinics = useSelector((store) => store.clinics.clinics.total_results)
  const filters = useSelector((store) => store.clinics.filter)
  const activeFilters = filters.filter((filter) => filter.checked)

  const [filteredClinicData, setFilteredClinicData] = useState([])

  useEffect(() => {
    const filteredClinicsType = clinicData && clinicData
      .filter((clinic) => {
        if (activeFilters.length) {
          const result = activeFilters.map((filterItem) => {
            let includeClinic = true
            if (filterItem.id === 'emg') {
              if (clinic.clinic_operation.includes('Akutverksamhet')) {
                includeClinic = true
              } else {
                includeClinic = false
              }
            } else if (filterItem.id === 'reg') {
              if (clinic.clinic_operation.includes('Vårdcentral')) {
                includeClinic = true
              } else {
                includeClinic = false
              }
            }
            return includeClinic
          })
          return result.includes(true)
        } else {
          return true
        }
      })

    const filteredClinicsOpenHours = clinicData && clinicData
      .filter((clinic) => {
        if (activeFilters.length) {
          const result = activeFilters.map((filterItem) => {
            let includeClinic = true
            if (filterItem.id === 'all') {
              if (clinic.open_hours.includes('Dygnet runt')) {
                includeClinic = true
              } else {
                includeClinic = false
              }
            } else if (filterItem.id === 'week') {
              if (clinic.open_hours) {
                includeClinic = true
              } else {
                includeClinic = false
              }
            } else if (filterItem.id === 'wkn') {
              if (
                clinic.open_hours.includes('Lör')
                || clinic.open_hours.includes('sön')
                || clinic.open_hours.includes('Dygnet runt')
              ) {
                includeClinic = true
              } else {
                includeClinic = false
              }
            }
            return includeClinic
          })
          return result.includes(true)
        } else {
          return true
        }
      })

    const filteredClinicsDropIn = clinicData && clinicData
      .filter((clinic) => {
        if (activeFilters.length) {
          const result = activeFilters.map((filterItem) => {
            let includeClinic = true
            if (filterItem.id === 'dropin') {
              if (clinic.drop_in.includes('Ej angivet/stängt')) {
                includeClinic = false
              } else {
                includeClinic = true
              }
            }
            return includeClinic
          })
          return result.includes(true)
        } else {
          return true
        }
      })
    console.log(
      filteredClinicsType,
      filteredClinicsOpenHours,
      filteredClinicsDropIn
    )
    setFilteredClinicData(filteredClinicsType)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, clinicData]);

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
          <Heading>
            Vi hittade
            <Span>
              {totalClinics}
            </Span>
            vårdgivare som matchade din sökning.
            {clinicData && clinicData.length === 0 && (
              <Heading className="error">
                Försök igen!
              </Heading>
            )}
          </Heading>
          {filteredClinicData && filteredClinicData
            .length > 0 && filteredClinicData
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

const Section = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
`

const Container = styled.div`
  width: 100%;

  &.clinicListContainer {
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;

    @media (min-width: 768px) {
      padding: 120px 40px 40px 60px;
      align-content: center;
    }
  }
`

const FilterControls = styled.div`
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  padding: 60px 30px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    justify-content: flex-start;
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
  background-color: transparent;
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
  color: #ef4f4f;
  font-weight: 700;
`