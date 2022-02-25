import React, { ChangeEvent, ReactElement, useState } from 'react'

export default function InfoUser(): ReactElement {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  const changeName = (event: ChangeEvent<HTMLInputElement>): void => {
    // 1. Récupérer ce qu'il y a dans l'input
    const newName = event.target.value
    // 2. Changer le name
    setName(newName)
  }

  const changeAge = (event: ChangeEvent<HTMLInputElement>): void => {
    // 1. Récupérer ce qu'il y a dans l'input
    const newAge = event.target.value
    // 2. Changer l'age
    setAge(parseInt(newAge))
  }

  return (
    <div>
      <h1>{name ? `Bonjour ${name} !` : 'Je ne vous connais pas'}</h1>
      <p>{age ? `Vous avez ${age} ans` : ''}</p>
      <input type="text" placeholder="Votre nom" onChange={changeName} />
      <input type="number" placeholder="Votre age" onChange={changeAge} />
    </div>
  )
}
