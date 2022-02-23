import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: stretch;
`

const Header = styled.header`
  display: flex;
  background-color: #581515;
  min-height: 80px;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1rem;
  background-color: #044404;
  flex-grow: 2;
`

const Menu = styled.div`
  background-color: #93bb93;
  min-width: 80px;
  min-height: 20px;
`

const Footer = styled.footer`
  display: flex;
  min-height: 350px;
  background-color: #4e0e4e;
  flex-direction: row-reverse;

  ${Menu} {
    flex-grow: 2;
  }
`

const Logo = styled.div`
  background-color: green;
  border: 3px solid grey;
  border-radius: 100%;
  width: 60px;
  height: 60px;
`

const Card = styled.div`
  background-color: blue;
  border-radius: 10px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  align-items: stretch;
  position: relative;
  margin: 0.6rem 0%;
`

const CardBlock = styled.div`
  background-color: cyan;
  border-radius: 5px;
  min-height: 20px;
  margin: 0.6rem 0%;
`

const CardAction = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: yellow;
`

export default function Design(): ReactElement {
  return (
    <Container>
      <Header>
        <Logo />
        <Menu />
      </Header>
      <Content>
        <Card />
        <Card />
        <Card>
          <CardBlock />
          <CardBlock />
          <CardBlock />
          <CardAction />
        </Card>
      </Content>
      <Footer>
        <Logo />
        <Menu />
      </Footer>
    </Container>
  )
}
