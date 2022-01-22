import Container from "components/Container"
import type { NextPage } from "next"
import React from "react"
import HomeTemplate from "components/templates/Home"

const Home: NextPage = () => {
  return (
    <Container title="HOME | mirupapa">
      <HomeTemplate />
    </Container>
  )
}

export default Home
