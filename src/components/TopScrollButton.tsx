import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

type ButtonProps = {
  isView: boolean
}

const ImageWrap = styled.div<ButtonProps>`
  opacity: ${({ isView }) => (isView ? 1 : 0)};
  transition: 500ms;
  position: fixed;
  bottom: 33px;
  right: 52px;
  width: 64px;
  height: 64px;
  cursor: pointer;
`

const TopScrollButton = () => {
  const [isView, setIsView] = useState(false)
  useEffect(() => {
    const scrollWindow = () => {
      if (100 <= window.scrollY) {
        setIsView(true)
      } else {
        setIsView(false)
      }
    }
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])
  return (
    <ImageWrap isView={isView}>
      <Image
        onClick={returnTop}
        src="/topButton.png"
        layout="fixed"
        width={64}
        height={64}
        alt="topButton"
      />
    </ImageWrap>
  )
}

export default TopScrollButton
