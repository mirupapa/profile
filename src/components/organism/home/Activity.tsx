import AreaTitle from 'components/atom/AreaTitle'
import React from 'react'
import styled from 'styled-components'
import Blog from 'components/molecule/home/activity/Blog'
import Interest from 'components/molecule/home/activity/Interest'

const Wrapper = styled.div`
  height: 800px;
  padding: 120px 30px;
`
const Contents = styled.div`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`

const Activity: React.FC = () => {
  return (
    <Wrapper>
      <AreaTitle mainTitle="ACTIVITY" subTitle="活動" />
      <Contents>
        <Blog />
        <Interest />
      </Contents>
    </Wrapper>
  )
}

export default Activity
