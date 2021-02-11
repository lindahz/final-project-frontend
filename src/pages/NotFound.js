import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { BackBtn } from '../lib/Buttons'

export const NotFound = () => {
  return (
    <Section>
      <Container>
        <Title>Error 404: Sidan hittades inte</Title>
        <Subtitle>
          Sidan du letar efter finns inte. Kontrollera din URL för felstavning eller versaler. Om du har problem med att hitta din destination på Health Finder kan du prova att 
          <StyledLink to="/"> besöka Health Finders startsida.</StyledLink>
        </Subtitle>
        <StyledLink to="/"><BackBtn title="Gå tillbaka" /></StyledLink>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding: 120px 100px;
`
const Container = styled.div`
  padding: 100px 50px;
  background-color: #2d3235;
  border-radius: 3px;
`
const Title = styled.h2`
  font-size: 46px;
  color: #ffffff;
`
const Subtitle = styled.h3`
  width: 70%;
  font-weight: 400;
  color: #ffffff;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
