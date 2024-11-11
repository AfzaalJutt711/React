import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useSelector} from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)


  return (
    <>
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

    </>
  )
}

export default App
