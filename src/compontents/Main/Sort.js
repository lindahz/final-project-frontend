import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../../reducers/clinics'
import { fetchClinics } from '../../reducers/reusable'
import { RadioBtn } from '../../lib/Radiobuttons'

export const Sort = () => {
  const dispatch = useDispatch()
  const search = useSelector((store) => store.clinics.search)
  const pageNum = useSelector((store) => store.clinics.pageNum)

  const onChangeEvent = (value) => {
    dispatch(clinics.actions.generateSortOrder(value))
    dispatch(fetchClinics(search, value, pageNum))
  }

  return (
    <Form role="radiogroup">
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
    </Form>
  )
}

const Form = styled.div`
  width: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 60%;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`