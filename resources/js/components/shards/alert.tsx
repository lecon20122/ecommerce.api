import React from 'react'

interface Props {
  type: 'teal' | 'red',
  boldText?: string,
  text: string
}

export default function Alert({ type, boldText, text }: Props) {
  return (
    <div className={`bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-3 rounded relative my-4`} role="alert">
      <strong className="font-bold">{boldText}</strong>
      <span className="block sm:inline text-center">{text}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      </span>
    </div>
  )
}
