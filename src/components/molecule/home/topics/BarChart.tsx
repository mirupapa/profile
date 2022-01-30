import React from 'react'
import { BarChart as Chart, Bar, XAxis, YAxis } from 'recharts'

type Data = {
  name: string
  value: number
}

const data: Data[] = [
  { name: 'text-1', value: 80 },
  { name: 'text-2', value: 70 },
  { name: 'text-3', value: 60 },
  { name: 'text-4', value: 50 },
  { name: 'text-5', value: 30 },
]

const BarChart = () => {
  const renderCustomizedLabel = (props: { value: number; y: number }) => {
    return (
      <g>
        <text
          x={370}
          y={props.y + 14}
          fill="white"
          dominantBaseline="right"
          fontSize={10}
        >
          {props.value}%
        </text>
      </g>
    )
  }

  return (
    <Chart width={400} height={200} data={data} layout="vertical" barSize={20}>
      <defs>
        <linearGradient id="gradationColor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A1AB" />
          <stop offset="100%" stopColor="#60CEC8" />
        </linearGradient>
      </defs>
      <XAxis type="number" hide domain={[0, 100]} />
      <YAxis
        type="category"
        dataKey="name"
        width={150}
        axisLine={false}
        tickLine={false}
      />
      <Bar
        fill="url(#gradationColor)"
        dataKey="value"
        background={{ fill: '#515151' }}
        height={20}
        label={renderCustomizedLabel}
      />
    </Chart>
  )
}

export default BarChart
