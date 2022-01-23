import React from 'react'
import styled from 'styled-components'
import BACK_IMG from 'assets/images/back.png'
import SelfImage from 'components/molecule/home/top/SelfImage'
import TopIntroduction from 'components/molecule/home/top/TopIntroduction'

const Wrapper = styled.div`
  height: 430px;
  padding-top: 74px;
  background-image: url('${BACK_IMG.src}');

  font-size: 14px;
  font-family: Roboto;
  color: #fff;
  line-height: 28px;
`
const Contents = styled.div`
  position: relative;
  width: 960px;
  margin: 0 auto;
`

const Top: React.FC = () => {
  return (
    <Wrapper>
      <Contents>
        <SelfImage />
        <TopIntroduction />
      </Contents>
    </Wrapper>
  )
}

export default Top
