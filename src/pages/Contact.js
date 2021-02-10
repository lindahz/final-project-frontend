import React from 'react'
import styled from 'styled-components/macro'

export const Contact = () => {
  return (
    <Section>
      <Title>Vi hjälper dig att söka vård i Europa</Title>
      <Text>kontakt</Text>
    </Section>
  )
}

const Section = styled.section`
  background-color: #2d3235;
  padding: 80px 80px;
  width: 100%;
`
const Title = styled.h2`
  width: 70%;
  color: #ffffff;
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: 800;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`
const Text = styled.p`
  width: 80%;
  margin: 8px 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 70%;
    font-size: 16px;
  }
  `