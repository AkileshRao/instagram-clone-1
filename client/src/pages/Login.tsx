import { Button, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { FormEvent, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../state/Auth.context';

export const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleClick = () => { setShow(!show) }
    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    const onErrors = (errors: any) => {
        console.error(errors);
    }
    const registerOptions = {
        username: { required: 'Please enter your username' },
        password: { required: 'Please enter your password' }
    };
    const onSubmit = (user: any) => {
        signIn(user).then((res: any)=> {
            console.error('res',res);
            let token = res.data.token;
            localStorage.setItem("token",token);
            navigate('/main/dashboard');
        }).catch((err: any) => {
            console.error('err',err);
        })
    }

    return (
        <div className='overlay'>
        <div className='w-screen h-screen bg-slate-100 flex items-center justify-center background'>
            <form className='bg-white p-8 rounded-lg flex flex-col items-center gap-4 w-4/5 max-w-md drop-shadow-2xl' onSubmit={handleSubmit(onSubmit,onErrors)} autoComplete='on' >
                <h1 className='text-2xl font-bold'>Log In</h1>
                <FormControl className="w-full">
                    <Input type='text' placeholder="Username" {...register("username",registerOptions.username)} value='sganvkar'/>
                    {errors?.username && (<span className='text-red-500'>errors.username.message</span>) }
                </FormControl>
                <InputGroup size="md">
                    <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Password'
                        {...register("password",registerOptions.password)} value='password'/>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                    {errors?.password && (<span className='text-red-500'>errors.password.message</span>) }
                </InputGroup>  
                <p className='my-4'>Don't have an account? <span className='font-bold cursor-pointer' onClick={() => navigate('/signup')}>Create a new account</span></p>

                <button type="submit" className='button' >Log In</button>

            </form>
        </div>
        </div>
    )
}

export default Login
