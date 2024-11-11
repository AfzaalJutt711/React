import React, { useState } from 'react'

function TodoItem({ todo, deleteTodo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    return (
        <>

            <input
                className={`text ${todo.completed ? 'lineThrough' : ''}`}
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={true}
            />

            <button
                className="deleteBtn"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </>
    )
}

export default TodoItem
