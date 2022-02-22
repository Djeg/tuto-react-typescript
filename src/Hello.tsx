import React, { ReactElement } from 'react'

type HelloProps = {
  name: string
  age: number
}

export default function Hello(props: HelloProps): ReactElement {
  const name = props.name
  const age = props.age

  return (
    <p>
      Coucou {name}, vous avez {age} ans
    </p>
  )
}
