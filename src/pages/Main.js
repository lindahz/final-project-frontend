import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Filter } from '../compontents/Filter'
import { Sort } from '../compontents/Sort'
import { ClinicList } from '../compontents/ClinicList'
import { Pages } from '../compontents/Pages'

export const Main = () => {
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)

  return (
    <Section>
      {!clinicData && (
        <Search />
      )}
      {clinicData && clinicData.length > 0 && (
        <>
          <FilterControls>
            <Filter />
            <Sort />
          </FilterControls>
        </>
      )}
      <Wrapper>
        {clinicData && clinicData.length > 0 && clinicData.map((clinic, index) => {
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
    </Section>
  )
}

const Section = styled.main`
  min-height: 100vh;
  padding: 120px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const FilterControls = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: #e9f1ef;
`
const NoResultsText = styled.p`
  font-size: 18px;
`