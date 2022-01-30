import Card from 'components/atom/Card'
import Label from 'components/atom/Label'
import React from 'react'
import styled from 'styled-components'

const data = [
  { date: '2022.01.30', title: 'react-nativeでiOS App作成' },
  { date: '2021.12.30', title: '雪降り積もる師走' },
  { date: '2021.11.30', title: '息子誕生' },
  { date: '2021.10.30', title: '久々のキャンプ' },
]

const Wrapper = styled.div`
  padding-left: 30px;
`

const Row = styled.div`
  padding: 5px 0px;
  display: flex;
`
const Date = styled.div`
  width: 128px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  margin-right: 5px;
`
const Title = styled.div`
  color: #ef75be;

  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
`

const Blog = () => {
  return (
    <Card>
      <Label title="BLOG" iconType="pencil" />
      <Wrapper>
        {data.map((_data) => (
          <Row key={_data.date}>
            <Date>{_data.date}</Date>
            <Title>{_data.title}</Title>
          </Row>
        ))}
      </Wrapper>
    </Card>
  )
}

export default Blog
