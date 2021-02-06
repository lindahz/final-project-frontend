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
          <Subtitle>HITTA RÄTT VÅRDGIVARE</Subtitle>
          <Text>
            Det är inte lätt att veta vilken typ av vård du kan få, var man får den bästa möjliga vården och hur man går tillväga. Vi hjälper dig att jämföra vårdgivare och hitta rätt.
          </Text>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <Icon src={document} />
          </IconContainer>
          <Subtitle>SAMLA IN JOURNALER</Subtitle>
          <Text>
            Som patient har man rätt att få tillgång till sin journal. Att samla in alla relevanta journaler kan vara besvärligt. Vi kan hjälpa till med allt från insamling av journalerna till att översätta dem enligt ISO-standard 17100.
          </Text>
        </CardContainer>
        <CardContainer>
          <IconContainer>
            <Icon src={lightbulb} />
          </IconContainer>
          <Subtitle>VÅRD UTOMLANDS</Subtitle>
          <Text>
            När du söker vård utomlands har du ofta rätt till ersättning. Vi hjälper dig med ekonomisk rådgivning och stöd såväl inför som efter din behandling.
          </Text>
        </CardContainer>
      </Container>
    </Section>

  )
}

const Section = styled.section`
  padding: 80px;
`
const Title = styled.h1`
  margin: 40px 0 0 0;
  font-size: 42px;
  font-weight: 800;
  text-align: center;
`
const Container = styled.div`
  width: 100%;
  margin: 80px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`
const CardContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const IconContainer = styled.div`
  width: 130px;
  height: 130px;
  padding: 30px;
  border-radius: 100%;
  background-color: #ee9595;
`
const Icon = styled.img`
  width: 70px;
  // display: flex;
`
const Subtitle = styled.h3`
  width: 100%;
  margin: 15px 0;
  text-align: center;
  // display: flex;
`
const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`

