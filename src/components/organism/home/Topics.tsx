import Education from 'components/molecule/home/topics/Education'
import Experience from 'components/molecule/home/topics/Experience'
import PersonalQualities from 'components/molecule/home/topics/PersonalQualities'
import Skill from 'components/molecule/home/topics/Skill'
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

const Topics: React.FC = () => {
  return (
    <Wrapper>
      <Contents>
        <Experience />
        <Education />
        <Skill />
        <PersonalQualities />
      </Contents>
    </Wrapper>
  )
}

export default Topics
