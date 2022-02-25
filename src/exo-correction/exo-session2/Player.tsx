import React, { ReactElement, useState } from 'react'

export default function Player(): ReactElement {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const changePlayerState = (): void => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <button onClick={changePlayerState}>Play or Pause</button>
      <p>{isPlaying ? 'Je joue de la musique' : 'Je ne joue pas de musique'}</p>
    </div>
  )
}
