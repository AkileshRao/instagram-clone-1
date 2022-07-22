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
    <>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </>    
  )
}

export default App