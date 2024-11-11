import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  function deleteTodo(id){
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  // save to local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
      <div className="app">
        <div className="form">
          <TodoForm addTodo={addTodo} />
        </div>

        {todos.map((todo) => (
          <div key={todo.id} className='itemBox'>
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </div>
        )
        )}

      </div>
  )
}

export default App
