import React from 'react'
import styled from 'styled-components/macro'

export const Facts = () => {
  return (
    <Section>
      <p>fakta och råd</p>
      <header><p>Planerar du att söka vård utomlands? Som svensk medborgare har du i många fall rätt till operation och/eller behandling i ett annat EU-land. I många fall har man som patient även rätt till ersättning i form av rese- och boendekostnader.</p></header>
    </Section>
  )
}

const Section = styled.section`
  background-color: lightblue;
  padding: 80px 80px;
  width: 100%;
`