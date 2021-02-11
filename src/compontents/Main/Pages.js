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

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
    dispatch(clinics.actions.generatePageNum(value))
    dispatch(fetchClinics(search, sortOrder, value))
  }

  const pageCount = () => clinicData.total_results / 6

  return (
    <>
      {clinicData.clinics && (
        <Section>
          <Pagination
            count={Math.ceil(pageCount())}
            page={page}
            onChange={handleChange}
            shape="rounded"
            color="" />
        </Section>
      )}
    </>
  )
}

const Section = styled.div`
  width: inherit;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`