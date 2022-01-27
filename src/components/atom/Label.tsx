import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
`
const ImageWrapper = styled.div`
  width: 30px;
`
const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  color: #00a1ab;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 14px;
  flex: 1;
`

type Props = {
  title: string
  iconType?: 'human' | 'pencil' | 'heart'
}

const Label: React.FC<Props> = ({ title, iconType }) => {
  return (
    <Wrapper>
      {iconType && (
        <ImageWrapper>
          <Image
            src={`/${iconType}.png`}
            layout="fixed"
            width={16}
            height={16}
            alt={iconType}
          />
        </ImageWrapper>
      )}
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Label
