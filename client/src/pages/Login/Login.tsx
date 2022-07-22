import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { getToken } from '../../services/LoginService';

function Login(props: any) {
    const navigate = useNavigate();

    const [state , setState] = useState({
        username : "",
        password : "",
    })
    const handleChange = (e: any) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e: any) => {
        e.preventDefault();
        const payload = {
            "username":state.username,
            "password":state.password,
        }

        console.error('payload',payload);
        getToken(payload).then((res)=> {
            console.error('res----------',res);
            if(res){
                navigate("/explore");
            }
        });
        
    }

    return(
        <div className="login-wrapper">
            <div>Please Login</div>
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text"
                        id="username"
                       className="form-control" 
                       placeholder="Enter username" 
                       value={state.username}
                       onChange={handleChange}
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Enter password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className='flex justify-center'>
                  <button 
                      type="submit" 
                      className="btn btn-blue"
                      onClick={handleSubmitClick}
                      >
                      Submit
                    </button>
                </div>
                
            </form>
            {/* <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div> */}
            {/* <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div> */}
        </div>
    )
}

export default Login