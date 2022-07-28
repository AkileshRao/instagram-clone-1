import React, { FormEvent, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../state/Auth.context';

const Login = () => {
    const handleSubmit = () => { }

    return (
        <div className='w-screen h-screen bg-slate-100 flex items-center justify-center'>

            <form className='bg-white p-8 rounded-lg flex flex-col items-center gap-4 w-4/5 max-w-md' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold'>Sign In</h1>
                <input type="text" placeholder='Enter you username' className='p-2 indent-1 rounded-md w-full bg-slate-100 border-0 transition-all duration-300 ease-in-out focus:border-blue-300' />
                <input type="password" placeholder='Enter password' className='p-2 indent-1 rounded-md w-full bg-slate-100 border-0 transition-all duration-300 ease-in-out focus:border-blue-300' />
                <p className='my-4'>Already have an account? Sign In.</p>
                <button className='p-2 bg-blue-500 text-white font-bold p-2 w-full rounded'>Create Account</button>
            </form>
        </div>
    )
}

export default Login