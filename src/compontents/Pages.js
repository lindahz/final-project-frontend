import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';

import { clinics } from '../reducers/clinics'
import { fetchClinics } from '../reducers/reusable'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Pages = () => {
  const classes = useStyles();

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

const Section = styled.section`
  width: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`