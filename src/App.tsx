import React, { ReactElement, useState } from 'react'
import ToDoList from './exoSession1/ToDoList'

function Player(): ReactElement {
  // Création d'une variable d'état "isPlaying"
  const [isPlaying, setIsPlaying] = useState(false)

  const changeIsPlaying = (): void => {
    // On change notre état "isPlaying" en lui donnant
    // L'inverse de son état en cours
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <button onClick={changeIsPlaying}>{isPlaying ? 'Pause' : 'Play'}</button>
      <p>{isPlaying ? `Joue de la musique` : `Ne joue pas de musique`}</p>
    </div>
  )
}

export default function App(): ReactElement {
  return <Player />
}
