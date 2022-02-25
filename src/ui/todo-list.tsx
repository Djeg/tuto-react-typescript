import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-family: 'Lobster', 'cursive';
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  display: block;
  text-align: center;
  padding: 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.164);
  font-weight: 500;
  background-color: #f1f1f1;
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Task = styled.div`
  margin-top: 0.6rem;
  display: flex;
`

type CheckProps = {
  checked: boolean
}

export const Check = styled.div<CheckProps>`
  width: 60px;
  min-height: 60px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  background-color: ${props => (props.checked ? '#abd6ab' : '#f1f1f1')};
  border: 1px solid rgba(0, 0, 0, 0.164);
  border-right: 0px;
`

export const Label = styled.input`
  padding: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.164);
  background-color: #f1f1f1;
  outline: none;
  flex-grow: 2;
`

export const RemoveButton = styled(Button)`
  border-left: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`
