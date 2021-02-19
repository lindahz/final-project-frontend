import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'
import Rating from '@material-ui/lab/Rating'
import { withStyles } from '@material-ui/core/styles'

import { clinics } from '../../reducers/clinics'
import { fetchClinics } from '../../reducers/reusable'
import { CustomFormBtn } from '../../lib/Buttons'
import { RadioBtn } from '../../lib/Radiobuttons'

export const Filter = () => {
  const StyledRating = withStyles({
    iconFilled: {
      color: '#FFCC66'
    },
    iconHover: {
      color: '#FFCC66'
    }
  })(Rating);

  const dispatch = useDispatch()

  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  const pageNum = useSelector((store) => store.clinics.pageNum)
  const openHours = useSelector((store) => store.clinics.filter.openHours)
  const dropin = useSelector((store) => store.clinics.filter.dropin)
  const clinicType = useSelector((store) => store.clinics.filter.clinicType)
  const avgRating = useSelector((store) => store.clinics.filter.avgRating)

  // Saving query param filter values in redux global state & passing values to thunk
  const filterClinicType = (value) => {
    dispatch(clinics.actions.clinicTypeFilter(value))
    dispatch(fetchClinics(
      search,
      sortOrder,
      pageNum,
      value,
      openHours,
      dropin,
      avgRating
    ))
  }

  const filterOpenHours = (value) => {
    dispatch(clinics.actions.openHoursFilter(value))
    dispatch(fetchClinics(
      search,
      sortOrder,
      pageNum,
      clinicType,
      value,
      dropin,
      avgRating
    ))
  }

  const filterDropin = (value) => {
    dispatch(clinics.actions.dropinFilter(value))
    dispatch(fetchClinics(
      search,
      sortOrder,
      pageNum,
      clinicType,
      openHours,
      value,
      avgRating
    ))
  }

  const filterAvgRating = (value) => {
    dispatch(clinics.actions.avgRatingFilter(value))
    dispatch(fetchClinics(
      search,
      sortOrder,
      pageNum,
      clinicType,
      openHours,
      dropin,
      value,
      avgRating
    ))
  }

  // Uncheck inputs & clear query param filter values
  const clearFilters = () => {
    dispatch(clinics.actions.openHoursFilter(''))
    dispatch(clinics.actions.clinicTypeFilter(''))
    dispatch(clinics.actions.dropinFilter(''))
    dispatch(clinics.actions.avgRatingFilter(0))
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
          checked={clinicType === 'emg'}
          onChange={(event) => filterClinicType(event.target.value)} />
        <RadioBtn
          label="Vårdbesök"
          value="reg"
          id="reg"
          name="clinicType"
          checked={clinicType === 'reg'}
          onChange={(event) => filterClinicType(event.target.value)} />
        <Heading>
          Öppettider
        </Heading>
        <RadioBtn
          label="Dygnet runt"
          value="all"
          id="all"
          name="openHours"
          checked={openHours === 'all'}
          onChange={(event) => filterOpenHours(event.target.value)} />
        <RadioBtn
          label="Alla tider"
          value="week"
          id="week"
          name="openHours"
          checked={openHours === 'week'}
          onChange={(event) => filterOpenHours(event.target.value)} />
        <Heading>
          Betyg
        </Heading>
        <StyledRating
          name="simple-controlled"
          size="large"
          value={+avgRating}
          onChange={(event) => filterAvgRating(event.target.value)} />
        <Heading>
          Övrigt
        </Heading>
        <RadioBtn
          label="Drop-in"
          value="dropin"
          id="dropin"
          name="dropin"
          checked={dropin === 'dropin'}
          onChange={(event) => filterDropin(event.target.value)} />
      </Form>
      <CustomFormBtn
        type="submit"
        onClick={clearFilters}
        title="Rensa alla filter" />
    </>
  )
}

// STYLING ------------------------------------
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