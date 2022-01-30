import React, { useState } from 'react'
import { PieChart, Pie, Sector } from 'recharts'
import styled from 'styled-components'

const Percent = styled.text`
  font-size: 24px;
`

type Data = {
  name: string
  value: number
  fill: string
}

const data: Data[] = [
  { name: 'Green', value: 75, fill: 'url(#gradationColor)' },
  { name: 'Grey', value: 25, fill: '#515151' },
]

const renderActiveShape = (props: {
  cx: number
  cy: number
  innerRadius: number
  outerRadius: number
  startAngle: number
  endAngle: number
  fill: string
  payload: Data
  tooltipPosition: {
    x: number
    y: number
  }
}) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    tooltipPosition: tp,
  } = props

  const tw = 97 // tooltip width
  const th = 43 // tooltip height

  const tsx = cx < tp.x ? tp.x - 50 : tp.x - tw + 50 // tooltip start x
  const tsy = cy < tp.y ? tp.y + 10 : tp.y - th - 10 // tooltip start y

  const ttsx = tsx + 10 // tooltip text start x
  const ttsy = tsy + 27 // tooltip text start y

  const tp1x = cx < tp.x ? tp.x + 5 : tp.x - 5 // triangle point1 x
  const tp1y = cy < tp.y ? tp.y : tp.y // triangle point1 y
  const tp2x = cx < tp.x ? tp1x - 5 : tp1x + 5 // triangle point2 x
  const tp2y = cy < tp.y ? tp1y + 15 : tp1y - 15 // triangle point2 y
  const tp3x = cx < tp.x ? tp1x + 5 : tp1x - 5 // triangle point3 x
  const tp3y = cy < tp.y ? tp1y + 15 : tp1y - 15 // triangle point3 y

  return (
    <g>
      <Percent x={cx} y={cy} dy={8} textAnchor="middle" fill={'grey'}>
        {payload.value}%
      </Percent>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* tooltip start */}
      <rect
        x={tsx}
        y={tsy}
        rx="4"
        ry="4"
        width={tw}
        height={th}
        fill="#727272"
        style={{ filter: 'drop-shadow(3px 3px 5px #ccc' }}
      />
      {/* 文字数問題あり */}
      <text x={ttsx} y={ttsy} fill="white">
        {`${payload.name} ${payload.value}%`}
      </text>
      <polygon
        points={`${tp1x},${tp1y} ${tp2x},${tp2y} ${tp3x},${tp3y}`}
        fill="#727272"
      />
      {/* tooltip end */}
    </g>
  )
}

const DonutChart = () => {
  const [index, setIndex] = useState(0)
  const onPieEnter = (_: any, _index: number) => {
    setIndex(_index)
  }
  return (
    <PieChart width={250} height={250}>
      <defs>
        <linearGradient id="gradationColor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60CEC8" />
          <stop offset="100%" stopColor="#00A1AB" />
        </linearGradient>
      </defs>
      <Pie
        startAngle={-180}
        activeIndex={index}
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  )
}

export default DonutChart
