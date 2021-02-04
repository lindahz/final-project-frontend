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

  const filters = useSelector((store) => store.clinics.filter.errand)

  //console.log(filters)

  // const filtering = () => {

  //   let results = clinicData

  //   filters.forEach((item, index) => {
  //     if (item.checked && index === 0) {
  //       results = results.filter((clinics) => clinics.clinic_operation.includes('Akutverksamhet'))
  //     } else if (item.checked && index === 1) {
  //       results = results.filter((clinics) => clinics.clinic_operation.includes('Vårdcentral'))
  //     }
  //   })
  //   console.log(results)
  // }

  // useEffect(() => {
  //   const result = clinicData.filter((clinics) => {
  //     if ()
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
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const FilterControls = styled.div`
  width: 800px;
  padding: 120px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  background-color: #F2F2F2;
`
const NoResultsText = styled.p`
  font-size: 18px;
`