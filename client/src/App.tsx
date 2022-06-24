import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { AuthProvider } from './state/Auth.context';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} />} />
      </Routes>
    </AuthProvider>
  )
}

export default App