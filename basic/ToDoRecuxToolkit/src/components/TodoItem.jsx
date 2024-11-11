import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todoSlice'

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const dispatch = useDispatch()
    
    return (
        <>

            <input
                className={`text`}
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={true}
            />

            <button
                className="deleteBtn"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                ❌
            </button>
        </>
    )
}

export default TodoItem
