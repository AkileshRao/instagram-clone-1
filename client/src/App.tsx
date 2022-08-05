import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';

const App = () => {
  const [token, setToken] = useState();
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="main" element={<Main />} >
          <Route></Route>
        </Route>
        <Route path='*' element={<Navigate to={"/login"} />} />
      </Routes>
  )
}

export default App