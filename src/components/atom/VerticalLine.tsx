import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  border-left: 1px solid #c4c4c4;
  position: absolute;
  left: 7px;
  height: calc(100% - 10px);
  top: 20px;
`

const VerticalLine = () => {
  return <Line />
}

export default VerticalLine
