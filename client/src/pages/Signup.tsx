import React, {  useContext, useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { AuthContext, AuthProvider } from '../state/Auth.context';
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { signUp } = useContext(AuthContext);

  const handleClick = () => { setShow(!show); }

  const onSubmit = (newUser: any) => {
    console.log(newUser);
    console.log('errors',errors);
    
    signUp(newUser).then((res)=>{
      console.error('res',res);
      if(res){
        toast({
          title: res.data.message.title,
          description: res.data.message.description,
          status: "success",
          duration: 5000,
          position: 'top-right',
          isClosable: true
        });
        reset();
        navigate('/login');
      }
    }).catch((err)=>{
      console.error(err)
      toast({
        title: 'Error!',
        description: err.response.data.error.errors[0].message,
        position: 'top-right',
        status: "error",
        duration: 5000,
        isClosable: true
      });
    });
  }

  const onErrors = (errors: any) =>{
    console.error('errors',errors);
  }

  const registerOptions = {
    name:  { required: 'Please enter your name' },
    email: { required: 'Please enter your email' },
    username: { required: 'Please enter your username' },
    password: {
      required: "Please enter your password",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <div className='w-screen h-screen bg-slate-100 flex flex-col items-center justify-center'>
      <form className='bg-white p-8 rounded-lg flex flex-col items-center gap-4 w-4/5 max-w-md drop-shadow-2xl' onSubmit={handleSubmit(onSubmit, onErrors)} autoComplete='off'>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        <FormControl className="w-full">
          <Input type='email' className="" placeholder="Email" {...register("email", registerOptions.email)}/>
           {errors?.email && errors.email.message}
        </FormControl>
        <FormControl className="w-full">
          <Input type='text' className="" placeholder="Fullname" {...register("name", registerOptions.name)}/>
          {errors?.name && errors.name.message}
        </FormControl>
        <FormControl className="w-full">
          <Input type='text' className="" placeholder="Username" {...register("username", registerOptions.username)}/>
          {errors?.username && errors.username.message}
        </FormControl>
        <InputGroup size='md'>
          <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Password'
            {...register("password", registerOptions.password)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
          {errors?.password && errors.password.message}
        </InputGroup>
        <Button type="submit" colorScheme='blue' className="w-full">Sign Up</Button>
      </form>
      <div className='bg-white p-8 rounded-lg w-4/5 max-w-md m-4 text-center drop-shadow-2xl'>
        <p>Have an account already? <span className='font-bold cursor-pointer' onClick={() => navigate('/login')}>Log in</span></p>
      </div>
    </div>
  )
}