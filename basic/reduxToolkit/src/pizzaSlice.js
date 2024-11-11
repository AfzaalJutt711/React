import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toppings: ['pepperoni'],
    gulten: true
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers:{
    toggleGluten: (state) => {
        state.gulten = !state.gulten
    },
    addTopping: (state, action) => {
        state.toppings = [...state.toppings, action.payload]
    },
    }
})

export const {toggleGluten, addTopping} = pizzaSlice.actions

export default pizzaSlice.reducer