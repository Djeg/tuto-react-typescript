import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
`

const AddButton = styled.button`
  border: 0px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.4rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Task = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 40px;
`

const Check = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  min-width: 40px;
`

const Label = styled.input`
  display: flex;
  border: 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  flex-grow: 2;
`

const CloseButton = styled.button`
  border: 0px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.4rem;
`

export default function ToDoList(): ReactElement {
  let [tasks, setTasks] = useState([
    {
      label: 'Test',
      checked: false,
    },
    {
      label: 'Test 2',
      checked: false,
    },
  ])

  const ajouterTask = (): void => {
    console.log('KeKiPasse ?')
    setTasks([
      ...tasks,
      {
        label: '',
        checked: false,
      },
    ])
    console.log(tasks)
  }

  const test = (): void => {
    console.log('test')
  }

  const test2 = (): void => {
    console.log('delete')
  }

  const test3 = (): void => {
    test()
    test2()
  }

  return (
    <div>
      <Header>
        <AddButton onClick={ajouterTask}>Ajouter</AddButton>
      </Header>

      <Content>
        {tasks.map(task => (
          <Task>
            <Check />
            <Label defaultValue={task.label} />
            <CloseButton />
          </Task>
        ))}
      </Content>
    </div>
  )
}
