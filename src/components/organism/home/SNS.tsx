import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding: 120px 30px;
`
const Contents = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`

const SNS: React.FC = () => {
  return (
    <Wrapper>
      <Contents>
        <Image
          src="/facebook.png"
          layout="fixed"
          width={40}
          height={40}
          alt="facebook"
        />
        <Image
          src="/instagram.png"
          layout="fixed"
          width={40}
          height={40}
          alt="instagram"
        />
        <Image
          src="/twitter.png"
          layout="fixed"
          width={40}
          height={40}
          alt="twitter"
        />
      </Contents>
    </Wrapper>
  )
}

export default SNS
