import React, { ReactElement } from 'react'
import ToDoList from './exoSession1/ToDoList'

function MyButton(): ReactElement {
  /**
   * Contient la fonction qui s'éxécutera lors du clique
   * sur le bouton
   */
  const faireQuelqueChose = (event: any): void => {
    console.log(event)
    console.log('click')
  }

  return (
    <button type="button" onClick={faireQuelqueChose}>
      Cliquez moi
    </button>
  )
}

export default function App(): ReactElement {
  return <MyButton />
}
