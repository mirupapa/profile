import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  position: absolute;
  top: 12px;
  left: 5px;
  width: 5px;
  height: 5px;
  background-color: #c4c4c4;
  border-radius: 50%;
`

const MiniCircle = () => {
  return <Circle />
}

export default MiniCircle
