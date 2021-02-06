import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'
import { ToggleBtn } from '../lib/Buttons'
import { RadioBtn } from '../lib/Radiobuttons'

export const Sort = () => {
  const dispatch = useDispatch()
  const search = useSelector((store) => store.clinics.search)
  const pageNum = useSelector((store) => store.clinics.pageNum)

  console.log(pageNum)

  const onChangeEvent = (value) => {
    dispatch(clinics.actions.generateSortOrder(value))
    console.log(pageNum)
    dispatch(fetchClinics(search, value, pageNum))
  }

  return (
    <Container>
      <RadioBtn
        label="Kliniknamn: A - Z"
        role="radio"
        id="asc"
        onChange={(event) => onChangeEvent(event.target.value)}
        value="asc"
        name="name" />
      <RadioBtn
        label="Kliniknamn: Z - A"
        role="radio"
        onChange={(event) => onChangeEvent(event.target.value)}
        id="desc"
        value="desc"
        name="name" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`