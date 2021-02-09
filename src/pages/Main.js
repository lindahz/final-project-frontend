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
    const filteredClinics = clinicData && clinicData.filter((clinic) => {
      activeFilters.forEach((filterItem) => {
        // eslint-disable-next-line default-case
        switch (filterItem.id) {
          case 'emg':
            if (clinic.clinic_operation.includes('Akutverksamhet')) {
              return true;
            }
            break;
          case 'reg':
            if (clinic.clinic_operation.includes('Vårdcentral')) {
              return true;
            }
            break;
          case 'all':
            if (clinic.open_hours.includes('Dygnet runt')) {
              return true;
            }
            break;
          case 'week':
            if (clinic.clinic_operation.includes('Vårdcentral')) { // not sure what to write here since it should return all results
              return true;
            }
            break;
          case 'wkn':
            if (clinic.open_hours.includes('Lör') || clinic.clinic_operation.includes('sön')) {
              return true;
            }
            break;
          case 'dropin':
            if (!clinic.drop_in.includes('Ej angivet/stängt')) {
              return true;
            }
        }
      })
    })
    setFilteredClinicData(filteredClinics);
    console.log(filteredClinicData)
  }, [])

  /*   let results = clinicData
  filters.forEach((item) => {
    if (item.checked === true && item.id === 'reg' && item.id === 'emg') {
      return results
      // if both reg and emg is checked, it should return all clinics
    } else if (item.checked === true && item.id === 'emg') {
      results = results.filter((clinic) => {
        return clinic.clinic_operation.includes('Akutverksamhet')
      })
      // if only emg is checked, it should only return emergency clinics
    } else if (item.checked === true && item.id === 'reg') {
      results = results.filter((clinic) => {
        return clinic.clinic_operation.includes('Vårdcentral')
      })
      // if both only reg is checked, it should only return regular clinics
    }

    if (item.checked === true && item.id === 'week') {
      return results
      // if week is checked, it should return all clinics.
    } else if (item.checked === true && item.id === 'all' && item.id === 'wkn') {
      results = results.filter((clinic) => {
        return clinic.open_hours.includes('Dygnet runt') && clinic.open_hours.includes('Lör') && clinic.open_hours.includes('sön')
      })
      // if both all and wkn is checked, it should return all clinics
    } else if (item.checked === true && item.id === 'all') {
      results = results.filter((clinic) => {
        return clinic.open_hours.includes('Dygnet runt')
      })
      // if only all is checked, it should only return clinics opened 24/7
    } else if (item.checked === true && item.id === 'wkn') {
      results = results.filter((clinic) => {
        return clinic.open_hours.includes('Dygnet runt') && clinic.open_hours.includes('Lör') && clinic.open_hours.includes('sön')
      })
      // if only wkn is checked, it should only return clinics opened on weekends
    }

    if (item.checked === true && item.id === 'dropin') {
      results = results.filter((clinic) => {
        return !clinic.drop_in.includes('Ej angivet/stängt')
      })
      // if dropin is checked is should not return clinics including 'Ej angivet/stängt'
    }
  })
*/

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
        <Wrapper>
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
        </Wrapper>
      )}
    </Section>
  )
}

const Section = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 120px 40px 40px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
  justify-content: center;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
  }
`

const FilterControls = styled.div`
  width: 100%;
  height: inherit;
  padding-top: 120px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-right: 1px solid #d6d6d6;
  transition: all 0.2s ease-out; 

  @media (min-width: 768px) {
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
const Container = styled.div`
  width: 100%;
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