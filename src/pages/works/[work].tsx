import Container from 'components/Container'
import type { NextPage } from 'next'
import React from 'react'
import WorksTemplate from 'components/templates/Works'
import { useRouter } from 'next/router'

const Works: NextPage = () => {
  const router = useRouter()
  return (
    <Container title={`${router.query.work || 'work'} | mirupapa`}>
      <WorksTemplate />
    </Container>
  )
}

export default Works
