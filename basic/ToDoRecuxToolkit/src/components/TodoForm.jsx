import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()

    function add() {
        if(!todo) return
        dispatch(addTodo(todo))
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