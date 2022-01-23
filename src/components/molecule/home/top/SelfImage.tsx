import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const SelfImgArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #fff;
  width: 275px;
  height: 276px;
  padding-top: 31px;
`
const SelfImgWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 128px;
  height: 128px;
  position: relative;
  margin-bottom: 30px;
  img {
    border-radius: 50%;
  }
`
const Name = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 12px;
`
const Position = styled.div`
  line-height: 16px;
  text-align: center;
`
const SelfImage = () => {
  return (
    <SelfImgArea>
      <SelfImgWrap>
        <Image src="/self.png" layout="fill" objectFit="cover" alt="self" />
      </SelfImgWrap>
      <Name>Daiki Kawase</Name>
      <Position>Front Engineer</Position>
    </SelfImgArea>
  )
}

export default SelfImage
