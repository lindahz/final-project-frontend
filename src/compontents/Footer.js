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
        <Text className="grayText">
          Vi hjälper dig att hitta och jämföra vårdgivare
          och få stöd med att få den vård du behöver.
        </Text>
        <Text>© 2021 Health Finder</Text>
      </Container>
      <Container>
        <Subtitle>
          Information
        </Subtitle>
        <StyledLink to="/">
          <TextCategory>Hitta och jämför vård</TextCategory>
        </StyledLink>
        <StyledLink to="/fakta-och-rad">
          <TextCategory>Fakta och råd</TextCategory>
        </StyledLink>
        <StyledLink to="/om-oss">
          <TextCategory>Om oss</TextCategory>
        </StyledLink>
        <StyledLink to="/kontakt">
          <TextCategory>Kontakt</TextCategory>
        </StyledLink>
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
  padding: 50px 25px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background-color: #ffffff;
  border-top: 1px solid #d6d6d6;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    padding: 50px 80px;
    flex-direction: row;
    font-size: 18px;
  }

  @media (min-width: 1025px) {
    padding: 50px 150px;
    flex-direction: row;
    font-size: 18px;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`
const LogoContainer = styled.div`
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 20px 0 0 0;
  }
`
const Logo = styled.img`
  width: 15px;
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0;
    margin-left: 20px;
  }
`

const Subtitle = styled.h4`
  width: 100%;
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 768px) {
    text-align: right;
  }
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
const Text = styled.p`
  display: block;
  width: 200px;
  margin: 10px 0;
  font-size: 12px;
  font-weight: 400;

  &.grayText {
    color: #898989;
  }

  @media (min-width: 768px) {
    display: block;
  }
`
const MainLogo = styled.img`
  width: 70px;
  margin: 10px 0;
  align-self: flex-start;
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
