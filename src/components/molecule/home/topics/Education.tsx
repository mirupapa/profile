import Label from 'components/atom/Label'
import React from 'react'
import styled from 'styled-components'
import HistoryTemplate, { HistoryType } from './HistoryTemplate'

const loadingData: HistoryType[] = [
  {
    job: 'WEB 講座',
    from: '2011.07',
    to: '2012.04',
    team: 'ヒューマンアカデミー',
  },
  {
    job: 'デザイナー講座',
    from: '2011.07',
    to: '2012.04',
    team: 'ヒューマンアカデミー',
  },
]

const Card = styled.div`
  width: 48%;
  @media (max-width: 894px) {
    width: 95%;
  }
`

const Education = () => {
  return (
    <Card>
      <Label title="EDUCATION" iconType="human" />
      <HistoryTemplate histories={loadingData} />
    </Card>
  )
}

export default Education
