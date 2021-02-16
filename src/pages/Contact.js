import React from 'react'
import styled from 'styled-components/macro'

import heartrate from '../assets/images/heartrate.jpg'

export const Contact = () => {
  return (
    <Section>
      <Container className="imageContainer">
        <Title>
          Kontakta oss
        </Title>
      </Container>
      <Container>
        <Heading>
          Behöver du hjälp?
        </Heading>
        <Text>
          Det är inte lätt att veta vilken typ av vård du kan få,
          var man får den bästa möjliga vården och hur man går tillväga.
          Vi hjälper dig att jämföra vårdgivare och hitta rätt.
        </Text>
        <Text>
          Kontakta oss på Health Finder så hjälper vi dig med dina frågor.
        </Text>
        <Text className="boldText">
          Telefon:
        </Text>
        <Text>
          0302 - 5254851
        </Text>
        <Text className="boldText">
          E-post:
          <Text>
            info@healthfinder.se
          </Text>
        </Text>
      </Container>
    </Section>
  )
}

const Section = styled.main`
  width: 100%;
  margin: auto;
  padding: 80px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 667px) and (max-width: 1024px)  {
    width: 70%;
    padding: 80px 40px;
  }

  @media (min-width: 1025px) {
    width: 50%;
    padding: 80px 40px;
  }
`
const Container = styled.div`
  width: 90%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;

  &.imageContainer {
    width: 100%;
    background-image: url(${heartrate});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);

    @media (min-width: 768px) {
      background-image: none;
      box-shadow: none;
    } 
  }
`
const Title = styled.h2`
  width: 100%;
  margin: 80px 0;
  padding: 3px 0;
  color: #ffffff;
  font-family: 'Lato', sans-serif;
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
  margin: 0;
  padding: 2px 0;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  border-bottom: 2px solid #ba6c65;
  color: #ba6c65;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: left;

  @media screen and (min-width: 667px) {
    font-size: 22px;
  }
`

const Text = styled.p`
  margin: 8px 0;
  color: #303242;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media screen and (min-width: 667px) {
    width: 100%;
    font-size: 16px;
  }

  &.boldText {
    font-weight: 600;
  }
`