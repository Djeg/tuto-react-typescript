import React, { ReactElement } from 'react'
import BigText from './BigText'
import Hello from './Hello'

export default function App(): ReactElement {
  return (
    <main>
      <div className="test">
        <p>Coucou</p>
      </div>
      <Hello name="john" age={36} />
      <BigText>Est-ce que tout vas bien ?</BigText>
    </main>
  )
}
