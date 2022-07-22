import { AuthProvider } from './state/Auth.context';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import Login from './pages/Login/Login';

const App = () => {
  const [token, setToken] = useState();

  // if(!token) {
  //   console.error('token111111111',token);
  //   return <Login setToken={setToken} />
  // }

  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} />} /> */}
      </Routes>
    </AuthProvider>
  )
}

export default App