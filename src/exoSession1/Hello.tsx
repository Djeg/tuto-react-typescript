import React, { ReactElement } from 'react'
import styled from 'styled-components'

/**
 * Affiche un paragraph en rouge
 */
const RedText = styled.p`
  color: red;
`

/**
 * Contient les props du composant
 * Hello
 */
type HelloProps = {
  /**
   * Contient le nom de la personne à saluer
   */
  name: string

  /**
   * Contient l'age de la personne
   */
  age?: number
}

/**
 * Affiche bonjour à l'écran avec l'age d'une personne
 */
export default function Hello(props: HelloProps): ReactElement {
  /**
   * Affiche l'age si il y en a un
   */
  const displayAge = (age?: number): string => {
    if (age) {
      return `Vous avez ${age} ans`
    }

    return `je ne connais pas votre age`
  }

  return (
    <RedText>
      Bonjour {props.name}, {displayAge(props.age)}
    </RedText>
  )
}
