import React from 'react'
import styled from 'styled-components/macro'

export const About = () => {
  return (
    <Section>
      <Title>Om oss</Title>
      <Heading>
        Sjukdom kommer aldrig lägligt
      </Heading>
      <Text>
        Att söka vård är inte en enkel process.
        Health Finder skapades för att förenkla för dig som patient och anhörig så du kan fokusera på det viktiga i livet.
      </Text>
      <Text>
        Att söka vård kan vara en komplicerad process om man ska sätta sig in i det själv och alla har inte tid/möjlighet att göra det administrativa som krävs för att få tillgång till den vård man har rätt till.
        HF hjälper dig att snabbt och smidigt hitta den bästa möjliga vården och en vårdgivare som du känner dig trygg med.
      </Text>
      <Heading>
        Health Finder
      </Heading>
      <Text>
        Vi tycker att du som patient ska få den bästa möjliga vården inom rimlig tid. Vi hjälper dig att hitta rätt vårdgivare och få stöd med att få den vård du behöver. Vi samarbetar med sjukhus och läkare runt om i Sverige.
      </Text>
      <Text>
        Oavsett vilken vård du söker hjälper vi dig att hitta rätt. Vi kan hjälpa dig att hitta operation eller medicinskt behandling i Sverige och utomlands.
      </Text>
      <Text>
        Om du har frågor eller funderingar så tveka inte att kontakta oss.
      </Text>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d3235;
`
const Title = styled.h2`
  width: 80%;
  margin: 30px 0;
  padding: 5px 0;
  color: #ffffff;
  font-size: 36px;
  letter-spacing: 1px;
  font-weight: 800;
  text-align: left;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 70%;
    font-size: 52px;
  }

  @media (min-width: 1025px) {
    width: 50%;
    font-size: 62px;
  }
`
const Heading = styled.h3`
  width: 80%;
  margin: 5px 0 0 0;
  color: #ffffff;
  font-size: 16px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 70%;
    font-size: 18px;
  }

  @media (min-width: 1025px) {
    width: 50%;
    font-size: 18px;
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

  @media (min-width: 1025px) {
    width: 50%;
    font-size: 16px;
  }
`