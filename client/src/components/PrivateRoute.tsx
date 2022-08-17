import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const token = localStorage.getItem('token')
    if (token) { return true }
    else { return false }
}

const PrivateRoutes = ({ children }: any) => {
    const auth = useAuth()
    return auth ? <Outlet /> : <Navigate to="/login" replace/>
}

export default PrivateRoutes;