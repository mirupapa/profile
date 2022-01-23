import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: Roboto;
  line-height: 28px;
  text-align: center;
`
const MainTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
`
const Subtitle = styled.div`
  padding-top: 14px;
  font-weight: 500;
  font-size: 16px;
`

type Props = {
  mainTitle: string
  subTitle: string
}

const AreaTitle: React.FC<Props> = ({ mainTitle, subTitle }) => {
  return (
    <Wrapper>
      <MainTitle>{mainTitle}</MainTitle>
      <Subtitle>{subTitle}</Subtitle>
    </Wrapper>
  )
}

export default AreaTitle
