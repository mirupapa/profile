import React from 'react'
import styled from 'styled-components'

interface CircleProps {
  invalid?: boolean
}

const Circle = styled.div<CircleProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ invalid }) => (invalid ? '#00A1AB' : '#C4C4C4')};
  border-radius: 50%;
`

const PointCircle: React.FC<{ invalid?: boolean }> = ({ invalid }) => {
  return <Circle invalid={invalid} />
}

export default PointCircle
