import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { BackBtn } from '../lib/Buttons'
import stairs from '../assets/stairs.jpg'

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
  //background-image: url(${stairs});
  background-color: #f9ffea;
  //border: 1px solid #000000;
`
const Title = styled.h2`
  font-size: 46px;
`
const Subtitle = styled.h3`
  width: 70%;
  font-weight: 400;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #000000;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
