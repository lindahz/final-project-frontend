import React, { useState } from 'react'
import styled from 'styled-components/macro'

export const Footer = () => {
  const [checked, setChecked] = useState('')
  console.log(checked)
  return (
    <Section>
      © 2021 Health Finder
    </Section>
  )
}

const Section = styled.section`
  bottom: 0;
  padding: 80px;
  background-color: #ffffff;
  border-top: 1px solid #000000;
`