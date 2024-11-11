import React, { useState } from 'react'
import { useTodo } from '../contexts'


function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { deleteTodo, updateTodo, toggleComplete } = useTodo()

    function editTodo() {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    function toggleCompleted(){
        toggleComplete(todo.id, {...todo, completed:(!todo.completed)})
    }

    return (
        <>
            <input     
                className='checkbox'
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                className={`text ${todo.completed ? 'lineThrough' : ''}`}
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="editBtn"
                onClick={
                    () => {
                        if (todo.completed) return;

                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev)
                    }
                }
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
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
