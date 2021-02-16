import React from 'react'

import styled from 'styled-components/macro'

import lightbulb from '../../assets/icons/lightbulb.svg'
import stetoskop from '../../assets/icons/stetoskop.svg'
import document from '../../assets/icons/document.svg'

export const Info = () => {
  return (
    <Section>
      <Title>
        Hur kan vi hjälpa dig?
      </Title>
      <Subtitle>
        Vi underlättar vårdprocessen, inför och efter din behandling.
      </Subtitle>
      <Container>
        <CardContainer>
          <IconContainer>
            <Icon
              src={stetoskop}
              alt="Illustration av ett stetoskop" />
          </IconContainer>
          <Subtitle className="iconSubtitle">
            Hitta rätt vårdgivare
          </Subtitle>
          <Text>
            Det är inte lätt att veta vilken typ av vård du kan få,
            var man får den bästa möjliga vården och hur man går tillväga.
            Vi hjälper dig att jämföra vårdgivare och hitta rätt.
          </Text>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <Icon
              src={document}
              alt="Illustration av en journal" />
          </IconContainer>
          <Subtitle className="iconSubtitle">
            Samla in journaler
          </Subtitle>
          <Text>
            Som patient har man rätt att få tillgång till sin journal.
            Att samla in alla relevanta journaler kan vara besvärligt.
            Vi kan hjälpa till med allt från insamling av journalerna
            till att översätta dem enligt ISO-standard 17100.
          </Text>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <Icon
              src={lightbulb}
              alt="Illustration av en glödlampa" />
          </IconContainer>
          <Subtitle className="iconSubtitle">
            Vård utomlands
          </Subtitle>
          <Text>
            När du söker vård utomlands har du ofta rätt till ersättning.
            Vi hjälper dig med ekonomisk rådgivning och stöd såväl
            inför som efter din behandling.
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
const Title = styled.h2`
  margin: 40px 0 0 0;
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 46px;
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
  background-color: #ba6c65;
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

  @media (min-width: 768px) {
    width: 70px;
  }
`
const Subtitle = styled.h3`
  width: 100%;
  margin: 15px 0;
  text-align: center;
  font-size: 16px;

  &.iconSubtitle {
    font-family: 'Lato', sans-serif;
    letter-spacing: 1.5px;
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

