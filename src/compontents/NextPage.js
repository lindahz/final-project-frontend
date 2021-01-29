import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components/macro'

export const NextPage = () => {
  const clinicData = useSelector((store) => store.clinics.clinics)
  console.log(clinicData)
  return (
    <Section>
      {clinicData.clinics && (
        <>
          <Btn>
            Föregående
          </Btn>
          <Text>
            (visar {clinicData.clinics.length} av {clinicData.total_results})
          </Text>
          <Btn>
          Nästa
          </Btn>
        </>
      )}
    </Section>
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
`
const Text = styled.p`
 
`