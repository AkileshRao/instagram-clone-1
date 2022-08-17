import React, { createContext, ReactNode, useInsertionEffect, useState } from 'react'
import axios from 'axios';
interface AuthContextType {
    user: any;
    setUser: (user: any) => any;
    signIn: (user: IUserData) => Promise<any>;
    signOut: () => Promise<any>;
    signUp: (newUser: IUserData) => Promise<any>;
    useAuth: any
}
interface IUserData {
    email?: string;
    name?: string;
    username: string;
    password: string;
}


let AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const api_url = import.meta.env.VITE_API_URL_V1;
    let [user, setUser] = useState<any>(null);

    const useAuth = () => {
        const token = localStorage.getItem('token')
        if (token) { return true }
        else { return false }
    }
    
    const signIn = (newUser: { username: string, password: string }): Promise<any> => axios.post(`${api_url}users/signin`, newUser)
    
    const signOut = (): Promise<any> => axios.post("", {})
    
    const signUp = (newUser: IUserData): Promise<any> => axios.post(`${api_url}users/signup`, newUser)

    const values = { user, setUser, signIn, signOut, signUp, useAuth }
    
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }