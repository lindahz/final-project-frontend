import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import { Pagination } from '@material-ui/lab'

import { clinics } from '../../reducers/clinics'
import { fetchClinics } from '../../reducers/reusable'

export const Pages = () => {
  const clinicData = useSelector((store) => store.clinics.clinics)
  const search = useSelector((store) => store.clinics.search)
  const sortOrder = useSelector((store) => store.clinics.sortOrder)
  const openHours = useSelector((store) => store.clinics.filter.openHours)
  const dropin = useSelector((store) => store.clinics.filter.dropin)
  const clinicType = useSelector((store) => store.clinics.filter.clinicType)
  const avgRating = useSelector((store) => store.clinics.filter.avgRating)

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  // Saving query param page num value in redux global state & passing to thunk
  const handlePagination = (event, value) => {
    setPage(value)
    dispatch(clinics.actions.generatePageNum(value))
    dispatch(fetchClinics(
      search,
      sortOrder,
      value,
      clinicType,
      openHours,
      dropin,
      avgRating
    ))
  }

  // Calculates number of pages needed based on the total results of clinics
  // ---> This logic is not working correctly, I need filtredResults instead of totalResults
  // ---> Check comments in backend repo for more information
  const pageCount = () => clinicData.total_results / 6

  return (
    <>
      {clinicData.clinics && (
        <Section>
          <Pagination
            count={Math.ceil(pageCount())}
            page={page}
            onChange={handlePagination}
            shape="rounded" />
        </Section>
      )}
    </>
  )
}

// STYLING ------------------------------------
const Section = styled.div`
  width: inherit;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`