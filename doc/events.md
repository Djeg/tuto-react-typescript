# Les événements

Un événement c'est une fonction qui s'éxécute lors d'une action précise (onClick, onMouseEnter, onMouseLeave ...)

Il éxiste un très grand nombre d'événement que nous pouvons attacher à n'importe quelle balise (Component). Vous retrouverez la liste complète des événements React juste [ici](https://fr.reactjs.org/docs/events.html#supported-events).

## Éxemple - Événement onClick

```tsx
import React from 'react'

export default function MyButton(): ReactElement {
  /**
   * Contient la fonction qui s'éxécutera lors du clique
   * sur le bouton
   */
  const faireQuelqueChose = (): void => {
    console.log('click')
  }

  return (
    <button type="button" onClick={faireQuelqueChose}>
      Cliquez moi
    </button>
  )
}
```

## React SyntheticEvent

Une fonction attaché à une événement reçoie un paramètre. Ce paramètre est un objet contenant les informations de l'événement.

```tsx
import React, { MouseEvent } from 'react'

export default function MyButton(): ReactElement {
  /**
   * Contient la fonction qui s'éxécutera lors du clique
   * sur le bouton
   */
  const faireQuelqueChose = (event: MouseEvent): void => {
    console.log(event)
    console.log('click')
  }

  return (
    <button type="button" onClick={faireQuelqueChose}>
      Cliquez moi
    </button>
  )
}
```

Vous retrouverez le détail de chaque objet `event` juste [ici](https://fr.reactjs.org/docs/events.html#mouse-events)

### Cas Pratiques

#### Récupérer les coordonnées de la souris lors du survol d'un élément

Cette fonctionnalité peut être utilisée pour dessiner, ou pour déplacer un personnage dans un jeux video, etc ....

```tsx
import React, { MouseEvent } from 'react'

export default function Coord(): ReactElement {
  /**
   * Contient la fonction qui s'éxécutera lorsque la souris
   * vas bouger dans notre block
   */
  const afficherCoordonnee = (event: MouseEvent): void => {
    // Récupére la position x par rapport à l'écran
    console.log(event.screenX)

    // Récupére la position y par rapport à l'écran
    console.log(event.screenY)
  }

  return <div onMouseMove={afficherCoordonnee}></div>
}
```

#### Récupérer le contenu d'un input

Permet d'enregistrer ce que l'utilisateur vient de rentrer dans une API, ou alors de faire un formulaire de recherche interactif etc ...

```tsx
import React, { ChangeEvent } from 'react'

export default function MyInput(): ReactElement {
  /**
   * Fonction qui s'éxécute à chaque changement de valeur
   * dans l'input
   */
  const handleChange = (event: ChangeEvent): void => {
    // Récupére ce que l'utilisateur viens de taper:
    console.log(event.target.value)
  }

  return <input onChange={handleChange} />
}
```
