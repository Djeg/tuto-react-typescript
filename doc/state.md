# Le State

Un état (ou State) c'est une variable qui lors de son changement de valeur change aussi l'affichage de notre interface.

## Déclarer un état

En react, pour créer cette variable, nous devons utiliser la fonction `useState`.

Cette fonction accépte la valeur de la variable et retourne un tableaux de 2 élements:

1. La variable.
2. Une fonction qui permet de changer la variable.

### Éxemple avec un petit player

```tsx
import React, { useState, ReactElement } from 'react'

export default function Player(): ReactElement {
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
```
