import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

export const Footer = () => {
  return (
    <Section>
      <Container>
        <MainLogo src={logo} />
        <Text>Vi hjälper dig att hitta och jämföra vårdgivare och få stöd med att få den vård du behöver.</Text>
        <Text>© 2021 Health Finder</Text>
      </Container>
      <Container>
        <Subtitle>
          Information
        </Subtitle>
        <StyledLink to="/"><TextCategory>Hitta och jämför vård</TextCategory></StyledLink>
        <StyledLink to="/fakta-och-rad"><TextCategory>Fakta och råd</TextCategory></StyledLink>
        <StyledLink to="/om-oss"><TextCategory>Om oss</TextCategory></StyledLink>
        <StyledLink to="/kontakt"><TextCategory>Kontakt</TextCategory></StyledLink>
        <LogoContainer>
          <Logo src={facebook} />
          <Logo src={instagram} />
          <Logo src={twitter} />
        </LogoContainer>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  z-index: 1;
  bottom: 0;
  padding: 50px 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #ffffff;
  border-top: 1px solid #d6d6d6;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const LogoContainer = styled.div`
  margin: 20px 0 0 0;
`
const Subtitle = styled.h4`
  width: 100%;
  margin: 15px 0;
  text-transform: uppercase;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  // display: flex;
`
const TextCategory = styled.p`
  padding-bottom: 1px 0;
  margin: 4px 0;
  color: #2d3235;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.5;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const Text = styled.p`
  width: 200px;
  margin: 10px 0;
  font-size: 12px;
  font-weight: 400;
`
const Logo = styled.img`
  width: 15px;
  margin-left: 20px;
  cursor: pointer;
`
const MainLogo = styled.img`
  width: 70px;
  margin: 10px 0;
  align-self: flex-start;
`
