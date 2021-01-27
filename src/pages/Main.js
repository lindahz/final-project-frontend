import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Filter } from '../compontents/Filter'
import { ClinicList } from '../compontents/ClinicList'

export const Main = () => {
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  console.log(clinicData)
  return (
    <Section>
      <Search />
      <Filter />
      {clinicData && clinicData.map((clinic, index) => {
        return (
          <ClinicList
            key={index}
            {... clinic} />
        )
      })}
    </Section>
  )
}

const Section = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`