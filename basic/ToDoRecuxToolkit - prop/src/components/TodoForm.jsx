import React, { useState } from 'react'

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState("")

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