import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'

import { clinics } from '../../reducers/clinics'
import { fetchClinics } from '../../reducers/reusable'
import { CustomFormBtn } from '../../lib/Buttons'
import { RadioBtn } from '../../lib/Radiobuttons'

export const Filter = () => {
  const dispatch = useDispatch()

  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  const pageNum = useSelector((store) => store.clinics.pageNum)
  const openHours = useSelector((store) => store.clinics.openHours)
  const dropin = useSelector((store) => store.clinics.dropin)
  const clinicType = useSelector((store) => store.clinics.clinicType)

  // Controls when radio buttons are checked using local state
  const [typeChecked, setTypeChecked] = useState(false)
  const [openChecked, setOpenChecked] = useState(false)
  const [dropinChecked, setDropinChecked] = useState(false)

  // Saving query param filter values in redux global state & passing values to thunk
  const filterClinicType = (value) => {
    setTypeChecked(value)
    dispatch(clinics.actions.clinicTypeFilter(value))
    dispatch(fetchClinics(search, sortOrder, pageNum, value, openHours, dropin))
  }

  const filterOpenHours = (value) => {
    setOpenChecked(value)
    dispatch(clinics.actions.openHoursFilter(value))
    dispatch(fetchClinics(search, sortOrder, pageNum, clinicType, value, dropin))
  }

  const filterDropin = (value) => {
    setDropinChecked(value)
    dispatch(clinics.actions.dropinFilter(value))
    dispatch(fetchClinics(search, sortOrder, pageNum, clinicType, openHours, value))
  }

  // Clears all filters -> uncheck radio buttons & clear query param filter values
  const clearFilters = () => {
    setTypeChecked(false)
    setOpenChecked(false)
    setDropinChecked(false)
    dispatch(clinics.actions.openHoursFilter(''))
    dispatch(clinics.actions.clinicTypeFilter(''))
    dispatch(clinics.actions.dropinFilter(''))
    dispatch(fetchClinics(search, sortOrder, pageNum, '', '', ''))
  }

  return (
    <>
      <Form>
        <Heading>
          Ärende
        </Heading>
        <RadioBtn
          label="Akut"
          role="radio"
          value="emg"
          id="emg"
          name="clinicType"
          checked={typeChecked === 'emg'}
          onChange={(event) => filterClinicType(event.target.value)} />
        <RadioBtn
          label="Vårdbesök"
          value="reg"
          id="reg"
          name="clinicType"
          checked={typeChecked === 'reg'}
          onChange={(event) => filterClinicType(event.target.value)} />
        <Heading>
          Öppettider
        </Heading>
        <RadioBtn
          label="Dygnet runt"
          value="all"
          id="all"
          name="openHours"
          checked={openChecked === 'all'}
          onChange={(event) => filterOpenHours(event.target.value)} />
        <RadioBtn
          label="Alla tider"
          value="week"
          id="week"
          name="openHours"
          checked={openChecked === 'week'}
          onChange={(event) => filterOpenHours(event.target.value)} />
        <Heading>
          Övrigt
        </Heading>
        <RadioBtn
          label="Drop-in"
          value="dropin"
          id="dropin"
          name="dropin"
          checked={dropinChecked === 'dropin'}
          onChange={(event) => filterDropin(event.target.value)} />
      </Form>
      <CustomFormBtn
        type="submit"
        onClick={clearFilters}
        title="Rensa alla filter" />
    </>
  )
}

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 60%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  } 
`

const Heading = styled.h3`
  margin: 12px 0;
  padding: 2px 0;
  border-bottom: 1px solid #2d3235;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    margin: 12px 100%;
  } 
`