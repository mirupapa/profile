import MiniCircle from 'components/atom/MiniCircle'
import VerticalLine from 'components/atom/VerticalLine'
import { lineConverter } from 'lib/utils'
import React from 'react'
import styled from 'styled-components'

export type HistoryType = {
  job?: string
  from?: string
  to?: string
  team?: string
  remark?: string
}

const Row = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex: 1;
  position: relative;
`
const RowLeft = styled.div`
  width: 30px;
`
const RowRight = styled.div`
  flex: 1;
`

const Bold = styled.p`
  color: #514141;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
`
const Remark = styled.p`
  color: #514141;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`

const HistoryTemplate: React.FC<{ histories: HistoryType[] }> = ({
  histories,
}) => {
  return (
    <>
      {histories.map((data, index) => {
        return (
          <Row key={index}>
            <RowLeft>
              <MiniCircle />
              {histories.length !== index + 1 && <VerticalLine />}
            </RowLeft>
            <RowRight>
              {data.job && (
                <Bold>
                  {data.job} | {`${data.from} - ${data.to ?? ''}`}
                </Bold>
              )}
              {data.team && <Bold>{data.team}</Bold>}
              {data.remark && <Remark>{lineConverter(data.remark)}</Remark>}
            </RowRight>
          </Row>
        )
      })}
    </>
  )
}

export default HistoryTemplate
