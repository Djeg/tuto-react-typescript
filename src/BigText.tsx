import React, { ReactElement, ReactNode } from 'react'
import './BigText.css'
import styled from 'styled-components'

const BigTitle = styled.h1`
  font-size: 5rem;
  color: red;
`

type BigTextProps = {
  children: ReactNode
}

export default function BigText(props: BigTextProps): ReactElement {
  return <BigTitle>{props.children}</BigTitle>
}
