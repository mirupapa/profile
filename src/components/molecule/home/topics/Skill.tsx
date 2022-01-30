import Label from 'components/atom/Label'
import React from 'react'
import { useGetSkillsQuery } from 'service/skill'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Point from './Point'
import Card from 'components/atom/Card'

const Error = styled.div`
  font-weight: bold;
  color: red;
  text-align: center;
`
const List = styled.div`
  padding-left: 30px;
`
const Row = styled.div`
  padding: 5px 0px;
  display: flex;
  flex: 1;
`
const Name = styled.div`
  width: 170px;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
`
const Remark = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
`

const Skill = () => {
  const { data, error, isFetching } = useGetSkillsQuery()
  return (
    <Card>
      <Label title="SKILL" iconType="human" />
      {error ? (
        <Error>ERROR</Error>
      ) : isFetching ? (
        <Skeleton count={5} />
      ) : data ? (
        <List>
          {data.map((item) => {
            return (
              <Row key={item.id}>
                <Name>{item.id}</Name>
                <Point point={Number(item.point)} />
                <Remark>{item.remark}</Remark>
              </Row>
            )
          })}
        </List>
      ) : (
        <Error>NO DATA</Error>
      )}
    </Card>
  )
}

export default Skill
