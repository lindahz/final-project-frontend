import React from 'react'
import styled from 'styled-components/macro'

import stairs from '../assets/images/stairs.jpg'

export const About = () => {
  return (
    <Section>
      <Container>
        <Title>
          Om oss
        </Title>
      </Container>
      <Heading>
        Sjukdom kommer aldrig lägligt
      </Heading>
      <Text>
        Att söka vård är inte en enkel process.
        Health Finder skapades för att förenkla för
        dig som patient och anhörig så du kan fokusera på
        det viktiga i livet.
      </Text>
      <Text>
        Att söka vård kan vara en komplicerad process
        om man ska sätta sig in i det själv och alla har
        inte tid/möjlighet att göra det administrativa som
        krävs för att få tillgång till den vård man har rätt till.
        HF hjälper dig att snabbt och smidigt hitta den bästa
        möjliga vården och en vårdgivare som du känner dig trygg med.
      </Text>
      <Heading>
        Health Finder
      </Heading>
      <Text>
        Vi tycker att du som patient ska få den bästa möjliga
        vården inom rimlig tid. Vi hjälper dig att hitta rätt
        vårdgivare och få stöd med att få den vård du behöver.
        Vi samarbetar med sjukhus och läkare runt om i Sverige.
      </Text>
      <Text>
        Oavsett vilken vård du söker hjälper vi dig att hitta rätt.
        Vi kan hjälpa dig att hitta operation eller medicinskt behandling
        i Sverige och utomlands.
      </Text>
      <Text>
        Om du har frågor eller funderingar så tveka inte att kontakta oss.
      </Text>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  margin: auto;
  padding: 80px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 70%;
    align-items: flex-start;
  }

  @media (min-width: 1025px) {
    width: 50%;
    align-items: flex-start;
  }
`

const Container = styled.div`
  width: 100%;
  margin: 0;
  margin-bottom: 40px;
  background-image: url(${stairs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);

  @media (min-width: 768px) {
    background-image: none;
    box-shadow: none;
  } 
`

const Title = styled.h2`
  width: contain;
  margin: 80px 0;
  padding: 3px 0;
  align-self: center;
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  font-size: 36px;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 46px;
    color: #2d3235;
  }
`

const Heading = styled.h3`
  width: 90%;
  margin: 0;
  padding: 2px 0;
  font-family: 'Lato', sans-serif;
  border-bottom: 2px solid #ba6c65;
  color: #ba6c65;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: left;

  @media screen and (min-width: 667px) {
    width: auto;
    font-size: 18px;
  }
`
const Text = styled.p`
  width: 90%;
  margin: 8px 0;
  color: #303242;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media screen and (min-width: 667px) {
    width: 100%;
    font-size: 16px;
  }

`