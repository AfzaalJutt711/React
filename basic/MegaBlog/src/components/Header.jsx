import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { logout as authLogout } from '../store/authSlice'
import authService from '../appwrite/auth'

function Header() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const authStatus = useSelector(state => state.auth.status)

    const navLinks = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },

        {
            name: 'Login',
            slug: 'login',
            active: !authStatus
        },
        {
            name: 'Sign Up',
            slug: 'signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: 'all-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: 'add-post',
            active: authStatus
        },
    ]


    //handle Logout
    const handleLogout =  async () => {
        const res = await authService.logout()
        dispatch(authLogout())
        navigate('/')
    }

    return (
        <div className='header'>
            <Logo />
            <ul>
                {navLinks.map((item) => item.active ? (
                    <li key={item.name}>
                        <button
                            onClick={() => navigate(item.slug)}
                        >{item.name}</button>
                    </li>
                ) : null)}

                {authStatus ?
                    (
                        <li key={'logout'}>
                            <button
                                onClick={handleLogout}
                            >Logout</button>
                        </li>
                    ) : null
                }
            </ul>
        </div>
    )
}

export default Header
