import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  font-size: 16px;

  * > {
    margin: 0;
  }
`
export default () => (
  <Container>
    <Link href='https://www.meetup.com/Desert-GraphQL-Meetup/' target='_blank' alt="Desert GraphQL Meetup"><p style={{ margin: '10px 0' }}>Desert GraphQL Meetup</p></Link>
    <p style={{ margin: '0' }}>Tuesday, January 29th, 2019</p>
  </Container>
)
