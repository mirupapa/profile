import React from 'react'

export const lineConverter = (value: string) => {
  const values = value.trim().split(/\r\n|\n/)
  const lines = values.map((line, index) => {
    return (
      <React.Fragment key={index}>
        <p>{line.trim()}</p>
      </React.Fragment>
    )
  })
  return lines
}
