import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
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
  function updateTodo(id, todo){
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id ===id ? todo : prevTodo) )
  }
  function toggleComplete(id, todo){
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id ===id ? todo : prevTodo))
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
    <TodoProvider value={{ addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="app">
        <div className="form">
          <TodoForm />
        </div>

        {todos.map((todo) => (
          <div key={todo.id} className='itemBox'>
            <TodoItem todo={todo} />
          </div>
        )
        )}

      </div>
    </TodoProvider>
  )
}

export default App
