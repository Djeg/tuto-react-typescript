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
