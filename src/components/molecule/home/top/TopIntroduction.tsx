import React from 'react'
import styled from 'styled-components'
import ProfDetail from './ProfDetail'

const Introduction = styled.div`
  width: 960px;
  height: 95px;
  padding-left: 348px;
  border-bottom: 1px solid #fff;
`
const Profile = styled.div`
  padding-top: 20px;
  width: 960px;
  height: 181px;
  padding-left: 348px;
`
const Name = styled.p`
  font-size: 16px;
`
const TopIntroduction = () => {
  return (
    <>
      <Introduction>
        <p>
          フロントエンドをメインでWEB周辺の業務を5年ほど。Reactが好きです。UI/UXについても勉強中です。
        </p>
      </Introduction>
      <Profile>
        <Name>川瀬 大樹：カワセ ダイキ</Name>
        <ProfDetail />
      </Profile>
    </>
  )
}

export default TopIntroduction
