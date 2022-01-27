import Label from 'components/atom/Label'
import Education from 'components/molecule/home/topics/Education'
import Experience from 'components/molecule/home/topics/Experience'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding: 120px 30px;
`
const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`
const Card = styled.div`
  width: 48%;
  @media (max-width: 894px) {
    width: 95%;
  }
`

const Topics: React.FC = () => {
  return (
    <Wrapper>
      <Contents>
        <Experience />
        <Education />
        <Card>
          <Label title="SKILL" iconType="human" />
        </Card>
        <Card>
          <Label title="PERSONAL QUALITIES" iconType="human" />
        </Card>
      </Contents>
    </Wrapper>
  )
}

export default Topics
