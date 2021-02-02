import React from 'react'
import styled from 'styled-components/macro'

export const Footer = () => {
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