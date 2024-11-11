import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    function add() {
        if(!todo) return
        addTodo({todo:todo, completed:false})
        setTodo('')
    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <button onClick={add}>Add</button>
        </>
    )
}

export default TodoForm
