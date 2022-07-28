import { AuthProvider } from './state/Auth.context';
import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => {
  const [token, setToken] = useState();

  return (
    <AuthProvider>
      <Routes>
        { true && <Route path="/" element={<Login />} />}
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />} >
          <Route></Route>
        </Route>
        <Route path='*' element={<Navigate to={"/login"} />} />
      </Routes>
    </AuthProvider>
  )
}

export default App