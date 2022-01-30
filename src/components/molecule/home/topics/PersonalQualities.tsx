import Card from 'components/atom/Card'
import Label from 'components/atom/Label'
import React from 'react'
import styled from 'styled-components'
import BarChart from './BarChart'
import DonutChart from './DonutChart'
import HistoryTemplate, { HistoryType } from './HistoryTemplate'

const loadingData: HistoryType[] = [
  {
    remark: 'とりあえず試してみる。新しいものが大好きです。',
  },
]
const Charts = styled.div`
  display: flex;
  padding-left: 30px;
`

const PersonalQualities = () => {
  return (
    <Card>
      <Label title="PERSONAL QUALITIES" iconType="human" />
      <HistoryTemplate histories={loadingData} />
      <Charts>
        <DonutChart />
        <BarChart />
      </Charts>
    </Card>
  )
}

export default PersonalQualities
