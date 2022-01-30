import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { InterestData } from './Interest'

const Wrapper = styled.div`
  padding-top: 15px;
`
const ImageWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 128px;
  height: 128px;
  position: relative;
  margin-bottom: 20px;
  img {
    border-radius: 50%;
  }
`
const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 10px;
`
const Tag = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
`
const Detail = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
`

const InterestItem = (props: InterestData) => {
  return (
    <Wrapper>
      <ImageWrap>
        <Image
          src={props.imgSrc}
          layout="fixed"
          width={128}
          height={128}
          alt={props.title}
        />
      </ImageWrap>
      <Title>{props.title}</Title>
      <Tag>{props.tag}</Tag>
      {props.details.map((detail, index) => (
        <Detail key={index}>{detail}</Detail>
      ))}
    </Wrapper>
  )
}

export default InterestItem
