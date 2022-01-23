import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
`
const MainTitle = styled.div`
  padding-top: 24px;
  font-size: 16px;
  font-weight: 700;
`
const SubTitle = styled.div`
  padding-top: 12px;
  font-size: 14px;
  font-weight: 400;
`
const ArrowWrap = styled.div`
  padding-top: 50px;
  img {
    margin: auto;
  }
`

type Props = {
  imgPath: string
  imgAlt: string
  mainTitle: string
  subTitle: string
}

const Work: React.FC<Props> = ({ imgPath, imgAlt, mainTitle, subTitle }) => {
  return (
    <Wrapper>
      <Image
        src={imgPath}
        layout="fixed"
        width="275"
        height="275"
        alt={imgAlt}
        objectFit="cover"
      />
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
      <ArrowWrap>
        <Image
          src="/arrow.png"
          width="13"
          height="21"
          alt="arrow"
          layout="fixed"
        />
      </ArrowWrap>
    </Wrapper>
  )
}

export default Work
