import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Filter } from '../compontents/Filter'
import { ClinicList } from '../compontents/ClinicList'
import { NextPage } from '../compontents/NextPage'

export const Main = () => {
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)
  return (
    <Section>
      {!clinicData && (
        <Search />
      )}
      {clinicData && (
        <Filter />
      )}
      <Wrapper>
        {clinicData && clinicData.map((clinic, index) => {
          return (
            <ClinicList
              key={index}
              {... clinic} />
          )
        })}
      </Wrapper>
      <NextPage />
    </Section>
  )
}

const Section = styled.main`
  min-height: 100vh;
  padding: 50px;
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