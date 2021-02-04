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
  const pageNum = useSelector((store) => store.clinics.pageNum)

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
    dispatch(clinics.actions.generateSortOrder(page))
    dispatch(fetchClinics(search, sortOrder, page))
  }

  console.log(page)

  const pageCount = () => clinicData.total_results / 5

  return (
    <>
      {clinicData.clinics && (
        <Section>
          {/* <Btn>«Föregående sida</Btn>
          <Btn>Nästa sida»</Btn> */}
          <Pagination
            count={Math.ceil(pageCount())}
            page={page}
            onChange={handleChange}
            shape="rounded" />
        </Section>
      )}
    </>
  )
}

const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
`
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`