import React from 'react'
import styled from 'styled-components/macro'

import stetoskop from '../assets/stetoskop.svg'
import document from '../assets/document.svg'
import lightbulb from '../assets/lightbulb.svg'

export const Info = () => {
  return (
    <Section>
      <Title>Hur kan vi hjälpa dig?</Title>
      <Subtitle>Vi underlättar vårdprocessen, inför och efter din behandling.</Subtitle>
      <Container>
        <CardContainer>
          <IconContainer>
            <Icon src={stetoskop} />
          </IconContainer>
          <Subtitle className="icon">Hitta rätt vårdgivare</Subtitle>
          <Text>
            Det är inte lätt att veta vilken typ av vård du kan få, var man får den bästa möjliga vården och hur man går tillväga. Vi hjälper dig att jämföra vårdgivare och hitta rätt.
          </Text>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <Icon src={document} />
          </IconContainer>
          <Subtitle className="icon">Samla in journaler</Subtitle>
          <Text>
            Som patient har man rätt att få tillgång till sin journal. Att samla in alla relevanta journaler kan vara besvärligt. Vi kan hjälpa till med allt från insamling av journalerna till att översätta dem enligt ISO-standard 17100.
          </Text>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <Icon src={lightbulb} />
          </IconContainer>
          <Subtitle className="icon">Vård utomlands</Subtitle>
          <Text>
            När du söker vård utomlands har du ofta rätt till ersättning. Vi hjälper dig med ekonomisk rådgivning och stöd såväl inför som efter din behandling.
          </Text>
        </CardContainer>
      </Container>
    </Section>

  )
}

const Section = styled.section`
  width: 100%;
  padding: 50px 25px;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    padding: 50px;
  }

  @media (min-width: 1025px) {
    padding: 80px;
  }
`
const Title = styled.h1`
  margin: 40px 0 0 0;
  font-size: 30px;
  font-weight: 800;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`
const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin: 80px 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`
const CardContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 25%;
    margin: 0;
  }
`
const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 30px;
  border-radius: 100%;
  background-color: #949cdf;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 130px;
    height: 130px;
  }
`
const Icon = styled.img`
  width: 50px;
  // display: flex;
  @media (min-width: 768px) {
    width: 70px;
  }
`
const Subtitle = styled.h3`
  width: 100%;
  margin: 15px 0;
  text-align: center;
  font-size: 16px;

  &.icon {
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

