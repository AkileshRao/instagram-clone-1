import React, { createContext, ReactNode, useState } from 'react'
import axios from 'axios';

interface AuthContextType {
    user: any;
    setUser: (user: any) => any;
    signIn: (user: { username: string, password: string }) => Promise<any>;
    signOut: () => Promise<any>;
}


let AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    let [user, setUser] = useState<any>(null);

    const signIn = (newUser: { username: string, password: string }): Promise<any> => axios.post("", newUser)
    const signOut = (): Promise<any> => axios.post("", {})

    return <AuthContext.Provider value={{ user, setUser, signIn, signOut }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }