import React from 'react'
import styled from 'styled-components/macro'

export const Facts = () => {
  return (
    <Section>
      <Container>
        <Title>fakta och råd</Title>
        <Text>Planerar du att söka vård utomlands? Som svensk medborgare har du i många fall rätt till operation och/eller behandling i ett annat EU-land. I många fall har man som patient även rätt till ersättning i form av rese- och boendekostnader.</Text>
      </Container>
      <Container>
        <Heading>
          Hur hittar jag rätt vårdgivare?
        </Heading>
        <Text>
          Det finns många vårdgivare som erbjuder god vård till patienter i Sverige.
          Beroende på inom vilket område och vad som är viktigast för dig så kan man vända sig till olika sjukhus.
        </Text>
        <Text>
          Vi kan hjälpa till med att hitta rätt vårdgivare för dig och hjälpa till med kontakten.
        </Text>
        <Heading>
          Hur vet jag vilket sjukhus/vårdgivare som är bäst?
        </Heading>
        <Text>
          Det finns många sjukhus och vårdgivare runt omkring i Sverige.
          Som patient kan det vara att orientera sig i djungeln exempelvis vilken kirurg eller sjukhus som är bäst på just din behandling eller sjukdom.
        </Text>
        <Text>
          Vi kan hjälpa dig med att jämföra vårdgivare så att du kan känna dig trygg med din behandling.
        </Text>
        <Heading>
          Hur vet jag vilket sjukhus/vårdgivare som är bäst?
        </Heading>
        <Text>
          Vi kan hjälpa till med att hitta rätt vårdgivare för dig och hjälpa till med kontakten.
        </Text>
        <Heading>
          Hur söker jag ersättning för vård utomlands?
        </Heading>
        <Text>
          Som svensk medborgare kan man söka ersättning från försäkringskassan antingen innan eller efter man fått sin vård utomlands.
        </Text>
        <Text>
          Det finns tre olika sätt att få ersättning vid planerad vård utomlands.
        </Text>
        <Text>
          Att få förhandsbesked/-tillstånd tar generellt några månader för försäkringskassan att utreda.
          Om din vård är brådskande så kan ersättning i efterhand vara ett alternativ.
        </Text>
        <Text>
          Vi kan hjälpa dig i processen oavsett förhands- eller efterhandsersättning.
          Vi kan hjälpa dig att uppskatta hur mycket ersättning du bör kunna få.
        </Text>
        <Heading>
          Hur samlar jag in och översätter journaler?
        </Heading>
        <Text>
          Man kan alltid få tillgång till sina journaler från sin vårdgivare i Sverige.
          Generellt ansvarar patienten för att tillhandahålla journal på ett språk som den utländska vårdgivaren kan förstå.
        </Text>
        <Text>
          Vi kan hjälpa till med insamling och översättning av journaler
        </Text>
        <Heading>
          Vad kan man få ersättning för?
        </Heading>
        <Text>
          Du har rätt till ersättning för hälso- och sjukvård, tandvård, läkemedel, hjälpmedel, medicinska förbrukningsvaror, övriga vårdprodukter.
        </Text>
        <Text>
          Vi kan stödja dig i processen att få tillbaks de pengar som du lagt ut.
        </Text>
        <Heading>
          Hur mycket ersättning får jag?
        </Heading>
        <Text>
          Du kan få ersättning för vård motsvarande vad den skulle kostat i Sverige.
        </Text>
        <Text>
          Vi kan hjälpa till med uppskattning av vad du bör kunna få för ersättning för din vård utomlands
        </Text>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background-color: #2d3235;
  padding: 80px 80px;
  width: 100%;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: lightblue;
`
const Title = styled.h2`
  width: 70%;
  color: #ffffff;
  font-size: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`
const Heading = styled.h4`
  width: 60%;
  color: #ffffff;
  font-size: 30px;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`
const Text = styled.p`
  width: 60%;
  margin: 8px 0;
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`