import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const useAuth = () => {
    const user = localStorage.getItem('user')
    if (user) { return true }
    else { return false }
}

const PrivateRoutes = ({ children }: any) => {
    const auth = useAuth()
    return auth ? children : <Navigate to="/login" />
}

export default PrivateRoutes;