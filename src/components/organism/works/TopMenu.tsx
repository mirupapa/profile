import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.nav`
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
`
const Arrow = styled.div`
  width: 65px;
  height: 60px;
  transform: rotate(180deg);
  padding-top: 19px;
  padding-left: 31px;
  cursor: pointer;
`
const Name = styled.label`
  font-weight: normal;
  font-size: 20px;
  line-height: 65px;
`

const TopMenu = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Arrow>
            <Image
              src="/arrow.png"
              layout="fixed"
              width={13}
              height={20}
              alt="arrow"
            />
          </Arrow>
        </a>
      </Link>
      <Name>Daiki KAWASE</Name>
    </Wrapper>
  )
}

export default TopMenu
