import Label from 'components/atom/Label'
import React from 'react'
import styled from 'styled-components'
import HistoryTemplate, { HistoryType } from './HistoryTemplate'

const loadingData: HistoryType[] = [
  {
    job: 'フロントエンジニア',
    from: '2021.01',
    team: '株式会社AAA',
  },
  {
    job: 'システムエンジニア',
    from: '2018.12',
    to: '2021.01',
    team: '株式会社BBB',
    remark: `JAVAで基幹システム構築
    React＋Flaskでモダンな技術も挑戦
    `,
  },
  {
    job: 'システムエンジニア',
    from: '2017.05',
    to: '2018.11',
    team: '株式会社CCC',
    remark: `JAVAメインに色々経験`,
  },
]

const Card = styled.div`
  width: 48%;
  @media (max-width: 894px) {
    width: 95%;
  }
`

const Experience = () => {
  return (
    <Card>
      <Label title="EXPERIENCE" iconType="human" />
      <HistoryTemplate histories={loadingData} />
    </Card>
  )
}

export default Experience
