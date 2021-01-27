import React from 'react'
import styled from 'styled-components/macro'

const Section = styled.section`
  margin: 20px;
  padding: 40px;
  background-color: lightyellow;
`
const Subtitle = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  margin: 10px 0;
`
const Title = styled.h2`
  font-size: 36px;
  margin: 10px 0;
`
const Heading = styled.h4`
  font-size: 18px;
  color: gray;
`

export const Clinic = () => {
  return (
    <Section>
      <Subtitle>
        Vårdcentral
      </Subtitle>
      <Title>
        Trelleborgs vårdcentral
      </Title>
      <Heading>
        Öppettider
      </Heading>
      <Heading>
        Adress
      </Heading>
      <Heading>
        Omdömen (0)
      </Heading>
      <Heading>
        Övrigt
      </Heading>
    </Section>
  )
}