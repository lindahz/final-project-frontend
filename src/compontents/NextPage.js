import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

export const NextPage = () => {
  const clinicData = useSelector((store) => store.clinics.clinics)
  return (
    <>
      {clinicData.clinics && (
        <Section>
          {/* <Text>(visar {clinicData.clinics.length} av {clinicData.total_results})</Text> */}
          <Btn>«Föregående sida</Btn>
          <Btn>Nästa sida»</Btn>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const Text = styled.p`
`