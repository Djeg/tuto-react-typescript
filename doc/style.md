# React et le style

Il éxiste plusieurs technique d'inclusion de style dans une application react.

## L'inclusion de feuille css

C'est la technique la plus simple. Elle permet d'inclure une feuille de style directement depuis un fichier `.tsx` :

```css
/* src/index.css */
body {
  background-color: bisque;
}
```

```tsx
// src/index.tsx
import './index.css'
```

### Recommendation d'organisation

Généralement, chaque composant posséde sa feuille de style. Éxemple, pour un composant `BigText.tsx` ou auras `BigText.css`.

## Les modules css

**Attention cette technique n'est pas supporté typescript**

En react il est possible d'utiliser des feuilles de styles comme des modules css : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

## Les **`styled-components`**

Les composants stylisé (styled-components) est une librairie javascript développer afin de répondre à plusieurs problèmes d'organisation et de conception lors de la création du style d'une application.

Cette librairie a pour + :

- Génération de class unique, pas de soucis de conflits de nommage.
- Directement intégrable dans un fichier typescript
- Utilisation de style sous forme de composant
- Code completion dans VSCode

Cette librairie a pour - :

- Génération de "millier" de composants différents
- Utilisation de style sous forme de composant

### L'instalation

```bash
npm install styled-components @types/styled-components
```

### utilisation

Voici un éxemple d'un composant "h1" stylisé avec styled-components:

```tsx
// src/BigText.tsx
import React, { ReactElement, ReactNode } from 'react'
import './BigText.css'
// Import de "styled" depuis la librairie styled-components
import styled from 'styled-components'

// Création d'un composant h1 stylisé.
const BigTitle = styled.h1`
  font-size: 5rem;
  color: red;
`

type BigTextProps = {
  children: ReactNode
}

export default function BigText(props: BigTextProps): ReactElement {
  // Utilisation du composant stylisé
  return <BigTitle>{props.children}</BigTitle>
}
```

Vous retrouverez la documentation de styled components juste [ici](https://styled-components.com/)
