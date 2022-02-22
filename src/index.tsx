import React, { ReactElement } from 'react'
import Hello from './Hello'
import { render } from 'react-dom'

const root = document.getElementById('root')

if (!root) {
  throw new Error("Oups, il n'y a pas d'élément #root")
}

const presentation = (name: string, age: number): ReactElement => (
  <p>
    <strong>Bonjour {name} !</strong>
    Vous avez {age} ans
  </p>
)

const name: string = 'john'
const age: number = 36

render(
  <div id="test" className="plop">
    {presentation(name, age)}
    <Hello />
  </div>,
  root,
)
