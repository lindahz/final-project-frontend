import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Info } from '../compontents/Info'
import { Filter } from '../compontents/Filter'
import { Sort } from '../compontents/Sort'
import { ClinicList } from '../compontents/ClinicList'
import { Pages } from '../compontents/Pages'

import { ToggleBtn } from '../lib/Buttons'
import filterIcon from '../assets/filterIcon.svg'

export const Main = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  const totalClinics = useSelector((store) => store.clinics.clinics.total_results)
  const filters = useSelector((store) => store.clinics.filter)
  const activeFilters = filters.filter((filter) => filter.checked)

  const [filteredClinicData, setFilteredClinicData] = useState([])

  useEffect(() => {
    const filteredClinics =
      clinicData &&
      clinicData.filter((clinic) => {
        let includeClinic = false;
        activeFilters.forEach((filterItem) => {
          // eslint-disable-next-line default-case
          switch (filterItem.id) {
            case 'emg':
              if (clinic.clinic_operation.includes('Akutverksamhet')) {
                includeClinic = true;
              }
              break;
            case 'reg':
              if (clinic.clinic_operation.includes('Vårdcentral')) {
                includeClinic = true;
              }
              break;
            case 'all':
              if (clinic.open_hours.includes('Dygnet runt')) {
                includeClinic = true;
              }
              break;
            case 'week':
              if (clinic.open_hours) {
                // not sure what to write here since it should return all results
                includeClinic = true;
              }
              break;
            case 'wkn':
              if (
                clinic.open_hours.includes('Lör') ||
                clinic.open_hours.includes('sön') ||
                clinic.open_hours.includes('Dygnet runt')
              ) {
                includeClinic = true;
              }
              break;
            case 'dropin':
              if (!clinic.drop_in.includes('Ej angivet/stängt')) {
                includeClinic = true
              }
              break;
          }
        });
        return includeClinic
      });
    setFilteredClinicData(filteredClinics)
    console.log(filteredClinics)
  }, [filters, clinicData]);

  return (
    <Section>
      {!clinicData && (
        <Container>
          <Search />
          <Info />
        </Container>
      )}
      {clinicData && /* clinicData.length > 0 && */ (
        <FilterControls visibility={toggle}>
          <ToggleBtn display="block" type="submit" onClick={handleToggle} src={filterIcon} width="30px" />
          <FilterContainer visibility={toggle}>
            <h3>Filtrera</h3>
            <Filter />
            <h3>Sortera</h3>
            <Sort />
          </FilterContainer>
        </FilterControls>
      )}
      {clinicData && (
        <Container className="clinicListContainer">
          <ToggleBtn display="block" type="submit" onClick={handleToggle} src={filterIcon} width="30px" />
          <Text>Vi hittade <Span>{totalClinics}</Span> vårdgivare som matchade din sökning.</Text>
          {clinicData && clinicData.length === 0 && <Text>Försök igen!</Text>}
          {clinicData && clinicData.length > 0 && clinicData.map((clinic, index) => { // filteredClinicData.map()
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
  justify-content: center;
`

const Container = styled.div`
  width: 100%;

  &.clinicListContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;

    @media (min-width: 768px) {
      padding: 120px 40px 40px 60px;
      //justify-content: flex-start;
      align-content: center;
    }
  }
`

const FilterControls = styled.div`
  width: 100%;
  height: inherit;
  padding-top: 120px;
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-right: 1px solid #d6d6d6;
  width: ${props => props.visibility ? '100%': '0%'};
  transition: all 0.2s ease-out; 

  @media screen and (max-width: 320px) {
  }

  @media screen and (min-width: 667px) and (max-width: 1024px)  {

  }

  @media (min-width: 1025px) {
    position: static;
    display: flex;
    width: ${props => props.visibility ? '100px': '500px'};
  }
`

const FilterContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  font-size: 14px;
  transition: all 0.2s ease-out; 
  visibility: ${props => props.visibility ? 'visible': 'hidden'};
  opacity: ${props => props.visibility ? '1': '0'};

  @media (min-width: 768px) {
    width: 300px;
    visibility: ${props => props.visibility ? 'hidden': 'visible'};
    opacity: ${props => props.visibility ? '0': '1'};
  }
`

const Text = styled.h3`
  width: inherit;
  margin: 20px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
`
const Span = styled.span`
  margin: 0;
  display: inline-block;
  color: #ef4f4f;
  font-weight: bold;
`