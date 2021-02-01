import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { ToggleBtn } from '../lib/Buttons'
import { RadioBtn } from '../lib/Radiobuttons'

export const Sort = () => {
  const [toggleSort, setToggleSort] = useState(false)
  const handleToggleSort = () => setToggleSort(!toggleSort)

  const dispatch = useDispatch()
  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  console.log(`redux: ${sortOrder}`)

  // not working correctly, sometimes I have to click two times?

  const onChangeEvent = (value) => {
    console.log(`input value: ${value}`)
    dispatch(clinics.actions.generateSortOrder(value))
    dispatch(fetchClinics(search, value))
  }

  return (
    <SortContainer>
      <ToggleBtn
        onClick={() => handleToggleSort()}
        title="Sortera" />
      {toggleSort && (
        <Container>
          <RadioBtn
            label="Kliniknamn, A - Z"
            role="radio"
            id="asc"
            onChange={(event) => onChangeEvent(event.target.value)}
            value="asc"
            name="name" />
          <RadioBtn
            label="Kliniknamn, Z - A"
            role="radio"
            onChange={(event) => onChangeEvent(event.target.value)}
            id="desc"
            value="desc"
            name="name" />
        </Container>
      )}
    </SortContainer>
  )
}

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 0;
  margin: 20px 0;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  background-color: #EEEEEE;
  padding: 10px;
  box-shadow: 10px 10px 14px -9px rgba(45,50,53,0.6);
`