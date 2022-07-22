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
<<<<<<< HEAD
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Navigate to={"/login"} />} />
      </Routes>
    </AuthProvider>
=======
    <>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </>
>>>>>>> ff344f78e6c34b451dafbf4d5ce03e8d6cf67313
  )
}

export default App