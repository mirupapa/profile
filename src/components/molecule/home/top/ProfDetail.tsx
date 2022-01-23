import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const Wrapper = styled.div`
  display: flex;
  padding-top: 10px;
`
const Column = styled.div`
  width: 147px;
  height: 126px;
  margin-right: 20px;
  font-weight: bold;
`
const Contents = styled.div`
  height: 126px;
  font-weight: 500;
`

const ProfDetail = () => {
  return (
    <Wrapper>
      <Column>
        <p>性別</p>
        <p>生年月日</p>
        <p>現住所</p>
      </Column>
      <Contents>
        <p>男性</p>
        <p>1980月09月12日({dayjs().diff(dayjs('1980-09-12'), 'year')}歳)</p>
        <p>兵庫県 神戸市</p>
      </Contents>
    </Wrapper>
  )
}

export default ProfDetail
