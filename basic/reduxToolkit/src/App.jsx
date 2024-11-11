import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTopping } from './pizzaSlice'

function App() {
  
  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Pizza</h1>

      {pizza.toppings.map(topping => (
        <div key={Math.random()}>{topping}</div>
      ))}

      <button onClick={() => dispatch(addTopping('pepperoni'))}>Add Pepperoni</button>
      <button onClick={() => dispatch(addTopping('anchovies'))}>Add Anchovies</button>
      <button onClick={() => dispatch(addTopping('olives'))}>Add Olives</button>

    </>
  )
}

export default App
