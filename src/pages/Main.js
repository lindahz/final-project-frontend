import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { Search } from '../compontents/Search'
import { Filter } from '../compontents/Filter'
import { Sort } from '../compontents/Sort'
import { ClinicList } from '../compontents/ClinicList'
import { NextPage } from '../compontents/NextPage'
import { ToggleBtn } from '../lib/Buttons'

export const Main = () => {
  const clinicData = useSelector((store) => store.clinics.clinics.clinics)

  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)
  const handleToggleFilter = () => setToggleFilter(!toggleFilter)
  const handleToggleSort = () => setToggleSort(!toggleSort)

  return (
    <Section>
      {!clinicData && (
        <Search />
      )}
      {!clinicData && (
        <>
          <Container>
            <ToggleBtn
              onClick={() => handleToggleFilter()}
              title="Filter" />
            <ToggleBtn
              onClick={() => handleToggleSort()}
              title="Sortera efter" />
          </Container>
          {toggleFilter && (<Filter />)}
          {toggleSort && (<Sort />)}
        </>
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
const Container = styled.div`
  display: flex;
  justify-content: center;
`