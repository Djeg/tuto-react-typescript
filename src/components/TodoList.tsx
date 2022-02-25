import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import * as Type from '../types/todo-list'
import * as Ui from '../ui/todo-list'
import { fetchTodos, saveTodo } from '../utils/todo-api'

export default function TodoList(): ReactElement {
  const [todos, setTodos] = useState<Type.TodoList>([Type.createTodo()])

  useEffect(() => {
    const doFetch = async () => {
      const todos = await fetchTodos()

      setTodos(todos as Type.TodoList)
    }

    doFetch()
  }, [])

  useEffect(() => {
    const sendToFirebase = async () => {
      for (let todo of todos) {
        await saveTodo(todo)
      }
    }

    sendToFirebase()
  }, [todos])

  const addTodo = () =>
    setTodos([...todos, Type.createTodo(`${todos.length + 1}`)])

  const deleteTodo = (id: string) => () =>
    setTodos(todos.filter(todo => todo.id !== id))

  const changeLabel = (id: string) => (event: ChangeEvent<HTMLInputElement>) =>
    setTodos(
      // boucle sur les todos
      todos.map(todo =>
        // si l'id du todo est égale à l'id spécifié plus haut
        todo.id === id
          ? /* on change le label */ { ...todo, label: event.target.value }
          : /* on change rien */ todo,
      ),
    )

  const checkTodo = (id: string) => () =>
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    )

  return (
    <Ui.Container>
      <Ui.Title>ToDo Liste</Ui.Title>
      <Ui.Header>
        <Ui.Button onClick={addTodo}>Ajouter</Ui.Button>
      </Ui.Header>
      <Ui.TaskList>
        {todos.map(todo => (
          <Ui.Task>
            <Ui.Check checked={todo.checked} onClick={checkTodo(todo.id)} />
            <Ui.Label value={todo.label} onChange={changeLabel(todo.id)} />
            <Ui.RemoveButton onClick={deleteTodo(todo.id)}>
              Supprimer
            </Ui.RemoveButton>
          </Ui.Task>
        ))}
      </Ui.TaskList>
    </Ui.Container>
  )
}
