import React, { ReactElement, useState } from 'react'
import TodoList from './components/TodoList'

export default function App(): ReactElement {
  return (
    <div>
      <TodoList />
    </div>
  )
}
