import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import { BackBtn } from '../lib/Buttons'
import whiteBackarrow from '../assets/icons/whiteBackarrow.svg'

export const NotFound = () => {
  return (
    <Section>
      <Container>
        <Title>
          Error 404: Sidan hittades inte
        </Title>
        <Subtitle>
          Sidan du letar efter finns inte. Kontrollera din URL för felstavning eller versaler.
          Om du har problem med att hitta din destination på Health Finder kan du prova att
          <StyledLink to="/"> besöka Health Finders startsida.</StyledLink>
        </Subtitle>
        <StyledLink to="/">
          <BackBtn
            title="Gå till startsidan"
            color="#ffffff"
            src={whiteBackarrow} />
        </StyledLink>
      </Container>
    </Section>
  )
}

const Section = styled.main`
  width: 100%;

  @media (min-width: 768px) {
    padding: 120px 100px;
  }
`
const Container = styled.div`
  padding: 100px 50px;
  background-color: #394359;
  border-radius: 3px;
`
const Title = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 36px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 46px;
  }
`
const Subtitle = styled.h3`
  font-weight: 400;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 70%;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
