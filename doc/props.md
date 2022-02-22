# Les Props

Les props ce sont des attributs HTML personalisé. Ils sont passé en premier argument d'un composant.

## Éxemple

```tsx
// src/App.tsx
import React, { ReactElement } from 'react'
import Hello from './Hello'

export default function App(): ReactElement {
  return (
    <main>
      <Hello name="john" age="36" />
    </main>
  )
}
```

```tsx
// src/Hello.tsx
import React from 'react'

export default function Hello(props: any) {
  // Récupération de la props name
  const name = props.name
  // Récupération de la props age
  const age = props.age

  return (
    <p>
      Coucou {name}, vous avez {age} ans
    </p>
  )
}
```

## Les types et les props

Graçe à typescript il est possible de **typer** les props d'un composant. Pour cela il suffit de déclarer un type pour nos props, et de l'assigner dans notre fonction :

```tsx
// src/Hello.tsx
import React, { ReactElement } from 'react'

type HelloProps = {
  name: string
  // Le point d'intérogation permet de rendre la propriété
  // age facultative
  age?: number
}

export default function Hello(props: HelloProps): ReactElement {
  const name = props.name
  const age = props.age

  return (
    <p>
      Coucou {name}, vous avez {age} ans
    </p>
  )
}
```

## Les Enfants (children)

En react il éxiste dans les props, la possibilité de recevoir les enfants de notre composant. Cette props, doit se nommer `children` et porte le type `ReactNode`.

### Éxemple avec un composant `BigText`

```tsx
// src/App.tsx
import React, { ReactElement } from 'react'
import BigText from './BigText'

export default function App(): ReactElement {
  return (
    <main>
      <BigText>Est-ce que tout vas bien ?</BigText>
    </main>
  )
}
```

```tsx
// src/BigText.tsx
import React, { ReactElement, ReactNode } from 'react'

type BigTextProps = {
  children: ReactNode
}

export default function BigText(props: BigTextProps): ReactElement {
  return <h1>{props.children}</h1>
}
```
