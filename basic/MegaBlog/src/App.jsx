import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from "./components"
import authService from './appwrite/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({userData}))
                }
            })
    }, [])

    return (
        <div className='app'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App
