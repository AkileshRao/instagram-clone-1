import React, { FormEvent, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../state/Auth.context';

const Login = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        auth.signIn({ username, password }).then(res => {
            navigate("/dashboard", { replace: true })
        }).catch(err => {
            console.log(err);
        })
    }

    const handleChange = (event: FormEvent) => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={handleChange} />
                <input type="password" placeholder='Password' onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login