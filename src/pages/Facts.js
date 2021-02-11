import { VisibilityOffTwoTone } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components/macro'

import skeleton from '../assets/images/skeleton.jpg'
import crutchet from '../assets/images/crutchet.jpg'
import journal from '../assets/images/journal.jpg'
import stairs from '../assets/images/stairs.jpg'
import emergency from '../assets/images/emergency.jpg'
import heartrate from '../assets/images/heartrate.jpg'
import mask from '../assets/images/mask.jpg'

export const Facts = () => {
  return (
    <Section>
      <Title>
        Fakta och råd
      </Title>
      <Container>
        <Container className="textContainer">
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
        </Container>
        <Image src={mask} />
      </Container>
      <Container>
        <Image src={stairs} />
        <Container className="textContainer">
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
        </Container>
      </Container>
      <Container>
        <Container className="textContainer">
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
        </Container>
        <Image src={journal} />
      </Container>
      <Container>
        <Image src={crutchet} />
        <Container className="textContainer">
          <Heading>
            Vilken vård har jag rätt till utomlands?
          </Heading>
          <Text>
            Som försäkrad i det svenska socialförsäkringssystemet har du rätt till så kallad "nödvändig vård" inom EU-, ESS-länder och Schweiz. Detta gäller exempelvis om du blir akut sjuk på din semester och du har rätt till vård till samma kostnad som invånarna i det land du befinner dig.
          </Text>
          <Text>
            Som svensk har du även rätt till så kallad "planerad vård" vilket innebär att du i många fall har rätt att tex genomgå en operation, eller få behandling för en speciell sjukdom. Innan du gör detta är det viktigt att du tar reda på dina rättigheter, villkoren och hur du ska gå till väga. Vi kan hjälpa dig med detta! Villkoren och kostnaden ska vara desamma som för invånarna i det landet. Detta innebär att du inte betalar mer än vad du hade gjort i Sverige. I många fall kan du även få resa och boende betalt. a som för invånarna i det landet.
          </Text>
          <Text>
            Vi kan hjälpa till med att hitta rätt vårdgivare för dig och hjälpa till med kontakten.
          </Text>
        </Container>
      </Container>
      <Container>
        <Container className="textContainer">
          <Heading>
            Hur söker jag ersättning för vård utomlands?
          </Heading>
          <Text>
            Som svensk medborgare kan man söka ersättning från försäkringskassan antingen innan eller efter man fått sin vård utomlands.
          </Text>
          <Text>
            Det finns tre olika sätt att få ersättning vid planerad vård utomlands. Ett förhandstillstånd (S2) för att få ett intyg att ta med dig, ett förhandsbesked och sedan ansöka om ersättning i efterhand och ersättning i efterhand, utan att ha ett förhandstillstånd eller ett förhandsbesked.
          </Text>
          <Text>
            Att få förhandsbesked/-tillstånd tar generellt några månader för försäkringskassan att utreda.
            Om din vård är brådskande så kan ersättning i efterhand vara ett alternativ.
          </Text>
          <Text>
            Vi kan hjälpa dig i processen oavsett förhands- eller efterhandsersättning.
            Vi kan hjälpa dig att uppskatta hur mycket ersättning du bör kunna få.
          </Text>
        </Container>
        <Image src={emergency} />
      </Container>
      <Container>
        <Image src={heartrate} />
        <Container className="textContainer">
          <Heading>
            Vad kan man få ersättning för?
          </Heading>
          <Text>
            Du har rätt till ersättning för hälso- och sjukvård, tandvård, läkemedel, hjälpmedel, medicinska förbrukningsvaror, övriga vårdprodukter.
          </Text>
          <Text>
            Vi kan stödja dig i processen att få tillbaks de pengar som du lagt ut.
          </Text>
        </Container>
      </Container>
      <Container>
        <Container className="textContainer">
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
        <Image src={skeleton} />
      </Container>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding: 80px 80px;
  background-color: #ffffff;
`
const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 80px;
  display: flex;
  align-items: flex-end;
  // background-color: lightblue;

  &.textContainer {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 40px 0 40px;
  }
`

const Image = styled.img`
  max-width: 40%;
  height: auto;
  opacity: 0.8;
`

const Title = styled.h2`
  width: contain;
  margin: 80px 0;
  padding: 3px 0;
  display: block;
  font-family: 'Lato', sans-serif;
  color: #2d3235;
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 46px;
  }
`
const Heading = styled.h4`
  margin: 0;
  padding: 2px 0;
  font-family: 'Lato', sans-serif;
  border-bottom: 2px solid #ba6c65;
  color: #ba6c65;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`
const Text = styled.p`
  margin: 8px 0;
  color: #303242;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`