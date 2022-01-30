import Card from 'components/atom/Card'
import Label from 'components/atom/Label'
import React from 'react'
import styled from 'styled-components'
import InterestItem from './InterestItem'

export type InterestData = {
  title: string
  tag: string
  details: string[]
  imgSrc: string
}

const data: InterestData[] = [
  {
    title: 'ピアノ',
    tag: 'music',
    details: ['ドビュッシー'],
    imgSrc: '/piano.jpg',
  },
  {
    title: 'キャンプ',
    tag: 'outdoors',
    details: ['道具集め', '焚き火'],
    imgSrc: '/camp.jpg',
  },
  { title: '猫', tag: 'pets', details: [], imgSrc: '/cat.jpg' },
]

const Wrapper = styled.div`
  padding-left: 30px;
  display: flex;
`

const Interest = () => {
  return (
    <Card>
      <Label title="INTEREST" iconType="pencil" />
      <Wrapper>
        {data.map((_data) => (
          <InterestItem key={_data.title} {..._data} />
        ))}
      </Wrapper>
    </Card>
  )
}

export default Interest
