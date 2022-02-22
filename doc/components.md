# Les Composants (Components)

Un composant représente un bout d'interface. Un composant peut très bien contenir d'autres composant. Finalement, c'est le même principe qu'une balise HTML.

## À quoi ça sert ?

Un composant permet d'assembler une interface. Finalement, une application React n'est qu'une suite de composant s'imbriquant entre eux comme dans un jeux de lego.

## Comment ça marche ?

1. Un composant est une **fonction javascript**
2. Cette fonction doit **commencer par une majuscule**
3. Cette fonction doit **retourner du jsx** correspondant au type: `ReactElement`

Si les 3 conditions sont remplie, alors nous pouvons utiliser cette fonction comme un élément HTML:

```tsx
import { render } from 'react-dom'
import React, { ReactElement } from 'react'

const Hello = () => <p>Hello</p>

render(<Hello />, document.getElementById('root'))
```

## Quelques petites règles à réspécter

Généralement un composant à son propre fichier `.tsx`. Chaque composants devra être dans son propre fichier.

Cette règle n'est pas obligatoire mais fortement conseillé.

En React, il n'éxiste pas de façon précise de s'organiser. L'oganisation est libre chaque développer peut créer sa propre organisation, par projet.

Un composant doit être l'**export par défaut** de son fichier `.tsx`.

### Éxemple de composant hello

Export d'un composant Hello en utilisant une fonction fléchée

```tsx
// src/Hello.tsx
import React, { ReactElement } from 'react'

const Hello = (): ReactElement => <p>Coucou les amis</p>

export default Hello
```

Export d'un composant Hello en utilisant une fonction classique

```tsx
// src/Hello.tsx
import React, { ReactElement } from 'react'

export default function Hello(): ReactElement {
  return <p>Coucou les amis</p>
}
```

Utilisation du composant Hello :

```tsx
// src/index.tsx
import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'

render(<Hello />, document.getElementById('root'))
```
