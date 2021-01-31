import React from 'react'

import styled from 'styled-components/macro'

export const Sort = () => {
  return (
    <SortContainer>
      <p>Sortera efter</p>
      <p>Namn A - Z</p>
      <p>Namn Z - A</p>
    </SortContainer>
  )
}

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding: 10px;
  margin: 20px 0;
`