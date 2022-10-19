import styled from '@emotion/styled'
import React from 'react'

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1, h2 {
    margin: 0;
  }
  > h1 {
    font-size: 250px
  }
`

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Error - Not Found</h2>
    </NotFoundContainer>
  )
}
