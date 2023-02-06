import Head from 'next/head'
import { useReducer, useState } from 'react'
import Button from '../components/global/Button'
import Container from '../components/global/Container'

// add actions list so we can update actions as needed
const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todo, setTodo] = useState('')

  // reducer takes in state and an action. The action is evaluated by a switch statement and another function fires off depeneding on the result of the switch.
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.todo)]
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete }
          }
          return todo
        })
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id)
      default:
        return todos
    }
  }

  function newTodo(name) {
    return { id: Date.now(), item: name, complete: false }
  }

  const onSubmit = (e) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } })
    setTodo('')
  }

  return (
    <>
      <Head>
        <title>RyanBriggs.dev | UseReducer</title>
      </Head>
      <Container className="my-5">
        <div className="flex f-d-col gap-3">
          <div className="flex f-d-col gap-1">
            <h1>Todo List</h1>
            <h3>
              Built as a sub project for my portfolio using the useReducer hook.
            </h3>
          </div>
          <div className="todo-list flex f-d-col gap-3">
            <form className="flex f-d-col gap-1">
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Learn Swift"
              />
              <Button
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  if (todo === '')
                    return alert('Please fill out the form first')
                  onSubmit(e)
                }}
                text="Add Item"
              />
            </form>
            <ul className="flex f-d-col gap-2">
              {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} dispatch={dispatch} />
              })}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

function Todo({ todo, dispatch }) {
  return (
    <li className="todo space-between items-center gap-1">
      <p className={todo.complete ? 'line-through text-green' : ''}>
        {todo.item}
      </p>
      <div className="flex gap-1">
        <Button
          className="btn-primary"
          text={`${todo.complete ? 'Mark Active' : 'Mark Complete'}`}
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        />
        <Button
          text="Delete"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        />
      </div>
    </li>
  )
}
