import PointCircle from 'components/atom/PointCircle'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 88px;
  gap: 6px;
  align-items: center;
`

const Point: React.FC<{ point: number }> = ({ point }) => {
  const invalid = Array.from(Array(point).keys())
  const notValid = Array.from(Array(5 - point).keys())
  return (
    <Wrapper>
      {invalid.map((val) => {
        return <PointCircle key={val} invalid={true} />
      })}
      {notValid.map((val) => {
        return <PointCircle key={val} />
      })}
    </Wrapper>
  )
}

export default Point
