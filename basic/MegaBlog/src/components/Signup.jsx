import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Input from './Input'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { login as authLogin } from '../store/authSlice';
import { useForm } from 'react-hook-form';

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin({userData}))
                    navigate('/')
                }
            }
        } catch (error) {
            console.log('set error', error)
        }
    }

    return (
        <div className='signUp'>
            <Logo />
            <h3>SignUp to your account</h3>
            <form onSubmit={handleSubmit(create)}>

                <Input
                    label={'Enter Your Name: '}
                    type='text'
                    {...register('name')}
                />
                <Input
                    label={'Email'}
                    type='email'
                    {...register('email')}
                />
                <Input
                    label={'Password'}
                    type='password'
                    {...register('password')}
                />

                <Button children={'Sign Up'} />
            </form>
        </div>
    )
}

export default Signup
