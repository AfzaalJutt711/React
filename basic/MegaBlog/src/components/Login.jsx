import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authService from './../appwrite/auth';


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const login = async(data) => {
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin({userData}))
                    navigate('/')
                }
            }
        } catch (error) {
            console.log('set error', error)
        }
    }

    return (
        <div className='login'>
            <Logo />
            <h3>Login to your account</h3>
            <form onSubmit={handleSubmit(login)}>

                <Input label={'Email'} type='email' {...register('email')} />
                <Input label={'Password'} type='password' {...register('password')} />

                <Button type="submit" children={'Login'} />
            </form>
        </div>
    )
}

export default Login
