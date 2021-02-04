import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Filter } from '../compontents/Filter'
import { Sort } from '../compontents/Sort'
import { ClinicList } from '../compontents/ClinicList'
import { Pages } from '../compontents/Pages'

export const Main = () => {
  const [filteredClinicData, setFilteredClinicData] = useState([])
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)

  const filters = useSelector((store) => store.clinics.filter)

  let results = clinicData

  filters.forEach((item) => {
    if (item.checked === true && item.id === 'emg') {
      results = results.filter((clinic) => {
        return clinic.clinic_operation.includes('Akutverksamhet')
      })
    }
    if (item.checked === true && item.id === 'reg') {
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
      console.log('veckodagar')
    }
    if (item.checked === true && item.id === 'wkn') {
      console.log('helger')
    }
    if (item.checked === true && item.id === 'dropin') {
      results = results.filter((clinic) => {
        return clinic.drop_in.includes('Ej angivet/stängt') // should be does not include
      })
    }
  })

  console.log(results)

//   useEffect(() => {
//   const result = clinicData.filter((clinics) => {
    
//   })
//   setFilteredClinicData(result)
// })

  return (
    <Section>
      <div>
      {!clinicData && (
        <Search />
      )}
      <Wrapper>
        {clinicData && clinicData.length > 0 && clinicData.map((clinic, index) => { // filteredClinicData.map()
          return (
            <ClinicList
              key={index}
              {... clinic} />
          )
        })}
        {clinicData && clinicData.length === 0 && (
          <NoResultsText>Hittade inga kliniker som matchade sökresultatet...</NoResultsText>
        )}
      </Wrapper>
      <Pages />
      </div>
      {clinicData && /* clinicData.length > 0 && */ (
        <FilterControls>
          <div>
            <h3>Filtrera</h3>
            <Filter />
          </div>
          <div>
            <h3>Sortera</h3>
            <Sort />
          </div>
        </FilterControls>
      )}
    </Section>
  )
}

const Section = styled.main`
  min-height: 100vh;
  //padding: 120px 0;
  display: flex;
`
const Wrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 70%;
  }
`
const FilterControls = styled.div`
  width: 350px;
  height: 100vh;
  padding: 120px 40px 20px 40px;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  flex-direction: column;
  background-color: #F2F2F2;

  @media (min-width: 768px) {
    display: flex;
  }
`
const NoResultsText = styled.p`
  font-size: 18px;
`