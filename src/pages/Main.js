import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Info } from '../compontents/Info'
import { Filter } from '../compontents/Filter'
import { Sort } from '../compontents/Sort'
import { ClinicList } from '../compontents/ClinicList'
import { Pages } from '../compontents/Pages'

import { FilterBtn } from '../lib/Buttons'

export const Main = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const [filteredClinicData, setFilteredClinicData] = useState([])
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  const totalClinics = useSelector((store) => store.clinics.clinics.total_results)

  const filters = useSelector((store) => store.clinics.filter)

  let results = clinicData

  filters.forEach((item) => {
    if (item.checked === true && item.id === 'reg' && item.id === 'emg') {
      // should return all results
      console.log('båda')
    } else if (item.checked === true && item.id === 'emg') {
      results = results.filter((clinic) => {
        return clinic.clinic_operation.includes('Akutverksamhet')
      })
    } else if (item.checked === true && item.id === 'reg') {
      results = results.filter((clinic) => {
        return clinic.clinic_operation.includes('Vårdcentral')
      })
    }
    if (item.checked === true && item.id === 'all') {
      results = results.filter((clinic) => {
        return clinic.open_hours.includes('Dygnet runt')
      })
    }
    if (item.checked === true && item.id === 'week') {
      // return all results
      console.log('veckodagar')
    }
    if (item.checked === true && item.id === 'wkn') {
      // return results including Lör or/and sön
      console.log('helger')
    }
    if (item.checked === true && item.id === 'dropin') {
      results = results.filter((clinic) => {
        // should be opposite - does not include
        return !clinic.drop_in.includes('Ej angivet/stängt')
      })
    }
  })

//   useEffect(() => {
//   const result = clinicData.filter((clinics) => {
    
//   })
//   setFilteredClinicData(result)
// })

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
          <FilterBtn
            onClick={handleToggle} />
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
          <Container>
            <Text>Vi hittade <Span>{totalClinics}</Span> vårdgivare som matchade din sökning.</Text>
            {clinicData && clinicData.length === 0 && <Text>Försök igen!</Text>}
          </Container>
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
`

const Wrapper = styled.div`
  width: 100%;
  margin: 120px 40px 40px 60px;
  float: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (min-width: 768px) {
  }
`
const FilterControls = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: 120px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid;
  transition: all 0.3s ease-out; 
  background-color: #ffffff;

  @media (min-width: 768px) {
    position: static;
    display: flex;
    width: ${props => props.visibility ? '100px': '450px'};
  }
`
const FilterContainer = styled.div`
  width: 100%;
  padding: 140px 0 40px 40px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-size: 14px;
  transition: all 0.3s ease-out; 
  // visibility: ${props => props.visibility ? 'visible': 'hidden'};
  // opacity: ${props => props.visibility ? '1': '0'};

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
  font-size: 18px;
  display: inline-block;
  margin-right: 3px;
`
const Span = styled.span`
  margin: 0;
  display: inline-block;
  color: #ef4f4f;
  font-weight: bold;
`