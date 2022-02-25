import React, { ReactElement, useState } from 'react'

export default function Counter(): ReactElement {
  const [count, setCount] = useState<number>(0)

  const ajouter = () => setCount(count + 1)

  const diminuer = () => setCount(count - 1)

  return (
    <div>
      <button onClick={ajouter}>+</button>
      <p>Le compteur est a {count}</p>
      <button onClick={diminuer}>-</button>
    </div>
  )
}
